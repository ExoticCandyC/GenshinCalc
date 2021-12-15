
$(".sr-main").append(genTag("button", { id: "manage-billing-btn", hidden: true }, "Update Subscription"));

checkingOut = false;
// Create a Checkout Session with the selected plan ID
var createCheckoutSession = function (priceId) {
  let user = GetUser();
  if (!user) {
    return handleResult({ error: { message: "Not Logged In. Please Log In Before Subscribing..." } });
  }
  if (checkingOut)
    return;
  checkingOut = true;
  $("button").css("cursor", "wait");
  return GetCustomer().then(customer => {
    return fetch("./create-checkout-session.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        priceId: priceId,
        clientId: user,
        customerId: customer
      })
    }).then(function (result) {
      checkingOut = false;
      $("button").css("cursor", "pointer");
      return result.json();
    });
  })


  function GetCustomer() {
    return db.doc("premiumUsers/userList/members/" + GetUser()).get().then((doc) => {
      if (doc.exists) {
        return doc.data().customerID;
      } else {
        return CreateCustomer();
      }
    });
  }

  function CreateCustomer() {
    let user = GetUser();
    let email = firebase.auth().currentUser.email;
    return fetch("./create-customer.php", {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        clientId: user,
        email: email
      })
    }).then(async function (response) {
      let customerId = (await response.json()).customerId;
      return db.collection("premiumUsers/userList/members/").doc(user).set({
        customerID: customerId
      }).then(() => {
        return customerId;
      });
    });
  }
};

// Handle any errors returned from Checkout
var handleResult = function (result) {
  if (result.error) {
    var displayError = document.getElementById("error-message");
    displayError.textContent = result.error.message;
  }
};

firebase.auth().onAuthStateChanged(user => {
  GetCustomer().then((customer) => {
    if (customer != null && customer != undefined) {
      $("#manage-billing-btn").show();

      $("#manage-billing-btn").on('click', function (e) {
        e.preventDefault();
        fetch('./customer-portal.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            customerId: customer
          })
        })
          .then((response) => response.json())
          .then((data) => {
            window.location.href = data.url;
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      });
    }
  });

  function GetCustomer() {
    return db.doc("premiumUsers/userList/members/" + GetUser()).get().then((doc) => {
      if (doc.exists) {
        return doc.data().customerID;
      }
    });
  }
});

$(
  /* Get your Stripe publishable key to initialize Stripe.js */
  fetch("./config.php")
    .then(function (result) {
      return result.json();
    })
    .then(function (json) {
      var publishableKey = json.publishableKey;
      var _monthly = json.monthly;
      var _annually = json.annually;

      var stripe = Stripe(publishableKey);


      for (let i in _monthly) {
        let price_month = _monthly[i];
        let price_year = _annually[i];

        let html = genTag("section", { class: "container" }, div({},
          genTag("h1", {}, json.products[i])
          + genTag("h4", {}, json.product_descs[i])
          + div({ class: "pasha-image" },
            genTag("h3", {}, parseFeatures(json.product_metas[i])))
        ) + div({ style: "display:flex;flex-direction:column;" },
          genTag("button", { class: "plan-btn", price: price_month }, toMoney(json.monthly_price[i]) + " per month")
          + genTag("button", { class: "plan-btn", price: price_year }, toMoney(json.yearly_price[i]) + " per year")
        ));
        $(".sr-container").append(html);
      }

      $(".plan-btn").on("click", (e) => {
        let priceId = $(e.target).attr("price");
        createCheckoutSession(priceId).then(function (data) {
          // Call Stripe.js method to redirect to the new Checkout page
          stripe
            .redirectToCheckout({
              sessionId: data.sessionId
            })
            .then(handleResult);
        });
      });

      GetCustomer().then((customer) => {
        if (customer != null && customer != undefined) {
          $("#manage-billing-btn").show();

          $("#manage-billing-btn").on('click', function (e) {
            e.preventDefault();
            fetch('./customer-portal.php', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                customerId: customer
              })
            })
              .then((response) => response.json())
              .then((data) => {
                window.location.href = data.url;
              })
              .catch((error) => {
                console.error('Error:', error);
              });
          });
        }
      });

      function GetCustomer() {
        return db.doc("premiumUsers/userList/members/" + GetUser()).get().then((doc) => {
          if (doc.exists) {
            return doc.data().customerID;
          }
        });
      }
    })
);

function parseFeatures(features) {
  let str = "";
  for (let i in features) {
    str += "+" + features[i] + " " + i + "<br>";
  }
  return str;
}

function toMoney(units) {
  let cents = (units % 100).toString();
  if (cents.length < 2) {
    cents = "0" + cents;
  }
  return "$" + (units / 100);
}