function GetTargetVal(t, e, a) {
    let i = $("#optimizeTarget").val();
    return "Default" == i && (i = t["Total DPS"] ? "Total DPS" : "DPS"), (a || _GUI._Calc).reactionProcChance > 0 ? (a || _GUI._Calc).ReactionCalc(t[i], e[i], t, !0) : t[i]
}
class Optimizer {
    constructor(t, e, a, i, s) {
        this.autoEquip = $("#autoEquip").prop("checked"), this.artifactType = $("#artifactTarget").val(), this.target = $("#optimizeTarget").val(), this.isCost = -1 != this.target.search("Cost"), this.equipOption = e, this.doAutoEquip = a, this.loadState = i, this.saveState = t, this.trimLog = s, this.savedState, this.optimalValue, this.optimalOption, this._saveLog
    }
    Optimize(t) {
        this.optimalValue = this.isCost ? 1e5 : 0, this.optimalOption, this._saveLog = {}, this.saveState(this), window.Worker;
        for (let e of t) {
            this.equipOption(e, this);
            let t = this._GetDPS();
            this._SaveToLog(e, t), this._CheckOptimal(e, t)
        }
        _GUI.Toast(this.optimalOption ?? "Could not optimize."), this.autoEquip && this.optimalOption ? this.doAutoEquip(this) : this.loadState(this), this.trimLog && this.trimLog(this), output(this._saveLog, !0, this)
    }
    _GetDPS() {
        let t = _GUI._Calc.Recalc(!0);
        return GetTargetVal(t[2], t[3])
    }
    _SaveToLog(t, e) {
        this._saveLog[e] ? this._saveLog[e].push(t) : this._saveLog[e] = [t]
    }
    _CheckOptimal(t, e) {
        (this.isCost ? e < this.optimalValue : e > this.optimalValue) && (this.optimalValue = e, this.optimalOption = t)
    }
    static EquipArtifactFromDB(t) {
        let e = _GUI._ArtifactCtrl._SaveData.Saves[t].artifact.Clone();
        _GUI._Calc.Artifacts.equipArtifact(e)
    }
    static EquipAllArtifactsFromDB(t) {
        for (let e in t) {
            let a = t[e];
            a && "CURRENT" != a ? Optimizer.EquipArtifactFromDB(a) : t[e] = "CURRENT"
        }
    }
    static SaveArtifact(t) {
        t.saveState = _GUI._Calc.Artifacts.artifacts[t.artifactType].Clone()
    }
    static SaveAllArtifacts(t) {
        t.saveState = {
            Flower: _GUI._Calc.Artifacts.artifacts.Flower.Clone(),
            Feather: _GUI._Calc.Artifacts.artifacts.Feather.Clone(),
            Clock: _GUI._Calc.Artifacts.artifacts.Clock.Clone(),
            Goblet: _GUI._Calc.Artifacts.artifacts.Goblet.Clone(),
            Circlet: _GUI._Calc.Artifacts.artifacts.Circlet.Clone()
        }
    }
    static AutoEquipArtifact(t) {
        Optimizer.EquipArtifactFromDB(t.optimalOption), _GUI.UpdateArtifact(t.artifactType), _GUI._Calc.Recalc()
    }
    static AutoEquipAllArtifacts(t) {
        Optimizer.EquipAllArtifactsFromDB(t.optimalOption);
        for (let e in t.optimalOption) {
            let a = t.optimalOption[e];
            a && "CURRENT" != a && _GUI.UpdateArtifact(_GUI._ArtifactCtrl._SaveData.Saves[a].artifact.artifactType)
        }
        _GUI._Calc.Recalc()
    }
    static LoadSavedArtifact(t) {
        _GUI._Calc.Artifacts.equipArtifact(t.saveState)
    }
    static LoadAllArtifacts(t) {
        _GUI._Calc.Artifacts.equipArtifact(t.saveState.Flower), _GUI._Calc.Artifacts.equipArtifact(t.saveState.Feather), _GUI._Calc.Artifacts.equipArtifact(t.saveState.Clock), _GUI._Calc.Artifacts.equipArtifact(t.saveState.Goblet), _GUI._Calc.Artifacts.equipArtifact(t.saveState.Circlet)
    }
    static * ArtifactsFromDBOfType(t) {
        let e = _GUI._ArtifactCtrl._SaveData[t];
        if (e && e.length > 0)
            for (let a in e) yield e[a];
        else yield null
    }
    static * ArtifactCombinationsFromDB() {
        for (let t of Optimizer.ArtifactsFromDBOfType("Flower"))
            for (let e of Optimizer.ArtifactsFromDBOfType("Feather"))
                for (let a of Optimizer.ArtifactsFromDBOfType("Clock"))
                    for (let i of Optimizer.ArtifactsFromDBOfType("Goblet"))
                        for (let s of Optimizer.ArtifactsFromDBOfType("Circlet")) yield [t, e, a, i, s]
    }
    static * ArtifactMainstatsOfType(t) {
        let e = [];
        $("#" + t + "MainStatSelect > option").each(((t, a) => {
            e.push(a.value)
        }));
        for (let a in e) yield e[a]
    }
    static * WeaponGenerator() {
        let t = [];
        $("#weaponSelect option").each(((e, a) => {
            t.push(a.value)
        }));
        for (let e in t) yield t[e]
    }
    static * ArtifactSetCombinations() {
        for (let t in ArtifactList)
            for (let e in ArtifactList) yield [t, t, e, e]
    }
    static * SubstatCombinations(t) {
        let e = {},
            a = _GUI._Calc.Character.getArtifact(t).mainStat.statType;
        for (let i in SubstatOptions) {
            let t = SubstatOptions[i];
            if (a != t)
                for (let i in SubstatOptions) {
                    let s = SubstatOptions[i];
                    if (a != s && s != t)
                        for (let i in SubstatOptions) {
                            let n = SubstatOptions[i];
                            if (a != n && n != s && n != t)
                                for (let i in SubstatOptions) {
                                    let r = SubstatOptions[i];
                                    if (a == r || r == n || r == s || r == t) continue;
                                    let l = SubstatIndex[t] + SubstatIndex[s] + SubstatIndex[n] + SubstatIndex[r];
                                    e[l] || (e[l] = !0, yield [t, s, n, r])
                                }
                        }
                }
        }
    }
}
var o;

function OptimizeFromDB() {
    (o = new Optimizer(Optimizer.SaveArtifact, Optimizer.EquipArtifactFromDB, Optimizer.AutoEquipArtifact, Optimizer.LoadSavedArtifact)).Optimize(Optimizer.ArtifactsFromDBOfType(o.artifactType))
}

function OptimizeAllFromDB() {
    (o = new Optimizer(Optimizer.SaveAllArtifacts, Optimizer.EquipAllArtifactsFromDB, Optimizer.AutoEquipAllArtifacts, Optimizer.LoadAllArtifacts)).Optimize(Optimizer.ArtifactCombinationsFromDB())
}

function OptimizeWeapon() {
    (o = new Optimizer((t => {
        t.saveState = _GUI._Calc.Weapon
    }), (t => {
        _GUI.SetWeaponName(t), _GUI._Calc.Weapon.weaponAbility.stack && _GUI._Calc.Weapon.setBuffStacks(_GUI._Calc.Weapon.weaponAbility.stackCount), _GUI._Calc.Weapon.weaponAbility.toggle && (_GUI._Calc.Weapon.toggleAbility = !0)
    }), (t => {
        $("#weaponSelect").val(t.optimalOption), $("#weaponSelect").trigger("change");
        let e = $("#weaponAbilityStacks");
        if (e) {
            let t = $("#weaponAbilityStacks option").last().val();
            e.val(t), UpdateWeaponStacks(!0)
        }
        $("#weaponAbilityToggle") && $("#weaponAbilityToggle").prop("checked", !0).trigger("change")
    }), (t => {
        _GUI._Calc.Weapon = t.saveState
    }))).Optimize(Optimizer.WeaponGenerator())
}

function OptimizeArtifact() {
    (o = new Optimizer(Optimizer.SaveArtifact, ((t, e) => {
        _GUI._Calc.Character.getArtifact(e.artifactType).setMainstatType(t)
    }), (t => {
        _GUI.SetArtifactMainStatType(t.artifactType, t.optimalOption), $("#" + t.artifactType + "MainStatSelect").val(t.optimalOption), $('input[name="' + t.artifactType + 'Level"]').val(_GUI._Calc.Character.getArtifact(t.artifactType).maxLevel)
    }), Optimizer.LoadSavedArtifact)).Optimize(Optimizer.ArtifactMainstatsOfType(o.artifactType))
}

function OptimizeSets() {
    (o = new Optimizer((t => {
        t.saveState = {
            Flower: _GUI._Calc.Artifacts.artifacts.Flower.setPiece,
            Feather: _GUI._Calc.Artifacts.artifacts.Feather.setPiece,
            Clock: _GUI._Calc.Artifacts.artifacts.Clock.setPiece,
            Goblet: _GUI._Calc.Artifacts.artifacts.Goblet.setPiece
        }
    }), (t => {
        _GUI._Calc.Character.Artifacts.modifySets({
            Flower: t[0],
            Feather: t[1],
            Clock: t[2],
            Goblet: t[3]
        }, !0), _GUI._Calc.Character.Artifacts.toggle = !0
    }), (t => {
        $("#FlowerSetSelect").val(t.optimalOption[0]).trigger("change"), $("#FeatherSetSelect").val(t.optimalOption[1]).trigger("change"), $("#ClockSetSelect").val(t.optimalOption[2]).trigger("change"), $("#GobletSetSelect").val(t.optimalOption[3]).trigger("change"), $("#FlowerSetMax").trigger("click"), $("#FeatherSetMax").trigger("click"), $("#ClockSetMax").trigger("click"), $("#GobletSetMax").trigger("click"), $("#buffContainer input[type='checkbox']").prop("checked", !0).trigger("change")
    }), (t => {
        _GUI._Calc.Character.Artifacts.modifySets(t.saveState)
    }), (t => {
        let e = Object.keys(t._saveLog).sort(((t, e) => t - e)),
            a = e.length > 10 ? e.length - 10 : 0;
        for (let i = 0; i < e.length; i++)(i <= a || t._saveLog[e[i]].length > 9) && delete t._saveLog[e[i]]
    }))).Optimize(Optimizer.ArtifactSetCombinations())
}

function OptimizeSubstat() {
    (o = new Optimizer(Optimizer.SaveArtifact, ((t, e) => {
        let a = _GUI._Calc.Character.getArtifact(e.artifactType);
        a.addSubstat(new StatModifier(t[0], SubstatRange[t[0]]), 0), a.addSubstat(new StatModifier(t[1], SubstatRange[t[1]]), 1), a.addSubstat(new StatModifier(t[2], SubstatRange[t[2]]), 2), a.addSubstat(new StatModifier(t[3], SubstatRange[t[3]]), 3)
    }), (t => {
        for (let e = 0; e < 4; e++) t.optimalOption[e] ? ($("#" + t.artifactType + "Substat" + (e + 1) + "Select").val(t.optimalOption[e]), UpdateMinMaxRange("#" + t.artifactType + "Substat" + (e + 1) + "Select"), $("input[name='" + t.artifactType + "Substat" + (e + 1) + "ValueInput']").val(SubstatRange[t.optimalOption[e]]), $("input[name='" + t.artifactType + "Substat" + (e + 1) + "Value']").val(SubstatRange[t.optimalOption[e]]), UpdateRangeLabel("input[name='" + t.artifactType + "Substat" + (e + 1) + "Value']")) : ($("input[name='" + t.artifactType + "Substat" + (e + 1) + "ValueInput']").val(0), $("input[name='" + t.artifactType + "Substat" + (e + 1) + "Value']").val(0), UpdateRangeLabel("input[name='" + t.artifactType + "Substat" + (e + 1) + "Value']"));
        _GUI._Calc.Recalc()
    }), Optimizer.LoadSavedArtifact, (t => {
        let e;
        e = -1 == t.target.search("Cost") ? Object.keys(t._saveLog).sort(((t, e) => t - e)) : Object.keys(t._saveLog).sort(((t, e) => e - t));
        let a = e.length > 10 ? e.length - 10 : 0;
        for (let i = 0; i < e.length; i++)
            if (i < a) delete t._saveLog[e[i]];
            else if (t._saveLog[e[i]].length > 30) delete t._saveLog[e[i]];
        else if (t._saveLog[e[i]].length > 10) {
            let a = {},
                s = !1;
            for (let n in t._saveLog[e[i]])
                for (let r in t._saveLog[e[i]]) {
                    if (n == r) continue;
                    let l = GetIndexFromSubstatArr(t._saveLog[e[i]][n]),
                        o = GetIndexFromSubstatArr(t._saveLog[e[i]][r]);
                    if (2 == CompareIndex(l, o)[0].length) {
                        a[l & o] = !0, s = !0;
                        break
                    }
                    s || (a[t._saveLog[e[i][n]]] = !0)
                }
            t._saveLog[e[i]] = [];
            for (let n in a) t._saveLog[e[i]].push(GetSubstatFromIndex(n))
        } else if (t._saveLog[e[i]].length > 5) {
            let a = {},
                s = !1;
            for (let n in t._saveLog[e[i]])
                for (let r in t._saveLog[e[i]]) {
                    if (n == r) continue;
                    let l = GetIndexFromSubstatArr(t._saveLog[e[i]][n]),
                        o = GetIndexFromSubstatArr(t._saveLog[e[i]][r]);
                    if (CompareIndex(l, o)[0].length >= 3) {
                        a[l & o] = !0, s = !0;
                        break
                    }
                    s || (a[t._saveLog[e[i][n]]] = !0)
                }
            t._saveLog[e[i]] = [];
            for (let n in a) t._saveLog[e[i]].push(GetSubstatFromIndex(n))
        } else
            for (let a in t._saveLog[e[i]]) t._saveLog[e[i]][a] = GetSubstatFromIndex(t._saveLog[e[i]][a])
    }))).Optimize(Optimizer.SubstatCombinations(o.artifactType))
}

function SetReactionModeProcChance(t = !1) {
    let e = $("#useReactionMode").prop("checked") ? LocaleParseInt($("#reactionProcChance").val()) : 0;
    _GUI.SetReactionModeProc(e, t) && _GUI._Calc.Recalc()
}

function SelectCharacter(t) {
    let e, a, i;
    t.target == undefined ? (e = $(t).next(".selectBoxContainer").children(".charItem").first().attr("char"), a = $(t).next(".selectBoxContainer"), i = $(t)) : (e = $(t.target).attr("char"), i = $(t.target).parents(".selectBoxContainer").prev(".selectBoxButton"), a = $(this).parents(".selectBoxContainer")), a.hide("fast");
    let s = parseInt(i.attr("id").replace("charSelect", ""));
    _GUI.SetCharacter(e, s), i.css("background-image", 'url("./img/' + _GUI._Calc.Character.characterName.toLowerCase() + '.png")'), i.attr("element", _GUI._Calc.Character.element), $(".selectBoxButton[active='true']") != i && ($(".selectBoxButton").attr("active", "false"), i.attr("active", "true"))
}

function UpdateConstellationLevel(t) {
    _GUI.SetConstellationLevel(parseInt($("#constellationSelect").val()))
}

function UpdateCharLevel(t) {
    _GUI.SetCharLevel(parseInt($("#charLvlSelect").val()))
}

function UpdateNormalLevel(t) {
    _GUI.SetNormalLvl(parseInt($("#normalLvlSelect").val()) - 1)
}

function UpdateSkillLevel(t) {
    _GUI.SetSkillLvl(parseInt($("#skillLvlSelect").val()) - 1)
}

function UpdateBurstLevel(t) {
    _GUI.SetBurstLvl(parseInt($("#burstLvlSelect").val()) - 1)
}

function UpdateWeaponName(t) {
    _GUI.SetWeaponName($("#weaponSelect").val()), _GUI.RefreshWeaponDisplay(), _GUI.PopulateWeaponAbility()
}

function UpdateWeaponLevel(t) {
    _GUI.SetWeaponLevel(parseInt($("#weaponLvlSelect").val())), _GUI.RefreshWeaponDisplay()
}

function UpdateWeaponRefine(t) {
    _GUI.SetWeaponRefine(parseInt($("#weaponRefineSelect").val()) - 1)
}

function UpdateArtifactRarity(t) {
    let e = t.name.replace("Rarity", ""),
        a = parseInt(t.value);
    _GUI.SetArtifactRarity(e, a)
}

function UpdateArtifactInitialSubstatValue(t) {
    let e = t.id.replace("InitSubstatValue", ""),
        a = parseInt(t.value);
    _GUI.SetArtifactInitialSubstatValue(e, a)
}

function UpdateArtifactLevel(t) {
    let e = t.name.replace("Level", ""),
        a = parseInt(t.value);
    _GUI.SetArtifactLevel(e, a)
}

function UpdateArtifactMainStatType(t) {
    let e = t.name.replace("MainStat", ""),
        a = $("#" + e + "MainStatSelect").val();
    _GUI.SetArtifactMainStatType(e, a)
}

function UpdateArtifactSetPiece(t) {
    let e = t.name.replace("Set", "");
    _GUI.SetArtifactSetPiece(e, t.value)
}

function UpdateArtifactSubstat(t) {
    let e = t.name.replace(/Substat\dValue/, ""),
        a = $("[name='" + t.name.replace("Value", "") + "']").val(),
        i = parseFloat(t.value),
        s = parseInt(t.name.match(/(\d)Value/)[0]) - 1;
    _GUI.SetArtifactSubstat(e, a, i, s)
}

function ToggleWeaponBuff(t) {
    _GUI._Calc.Weapon.toggleAbility = $(t).is(":checked"), t && _GUI._Calc.Recalc()
}

function SelectWeaponSwitchBuff(t) {
    "None" != t.id.replace("wabilswitch", "") ? _GUI._Calc.Weapon.switchedBuff = parseInt(t.id.replace("wabilswitch", "")) : _GUI._Calc.Weapon.switchedBuff = null, t && _GUI._Calc.Recalc()
}

function UpdateWeaponStacks(t) {
    let e = parseInt($("#weaponAbilityStacks").val());
    _GUI._Calc.Weapon.buffStacks = e, t && _GUI._Calc.Recalc()
}

function SetArtifactMax(t) {
    let e = t.id.replace("SetMax", "");
    _GUI._Calc ? (_GUI._Calc.Character.Artifacts.artifacts[e].setMax(), _GUI.UpdateArtifactRarityLimit(e), _GUI._Calc.Recalc()) : _GUI.SetMax(e)
}

function ToggleArtifactBuff(t) {
    _GUI._Calc.Character.Artifacts.toggle = $(t).prop("checked"), _GUI._Calc.Recalc()
}

function SelectArtifactBuff(t) {
    let e = parseInt($(t).attr("effectnum"));
    $(t).prop("checked") ? _GUI._Calc.Character.Artifacts.select.push(e) : _GUI._Calc.Character.Artifacts.select = _GUI._Calc.Character.Artifacts.select.filter((t => t != e)), _GUI._Calc.Recalc()
}

function SwitchArtifactBuff(t) {
    _GUI._Calc.Character.Artifacts["switch"] = parseInt($(t).attr("effectnum")), _GUI._Calc.Recalc()
}

function UpdateMinMaxRange(t, e) {
    $(t).attr("value", $(t).val());
    let a = $("[name='" + $(t).attr("name") + "Value']");
    if (a.length > 0) {
        let i;
        $(t).attr("name").search("MainStat") > 0 ? i = MainStatRange[$(t).val()] : $(t).attr("name").search("Substat") > 0 && (i = 6 * SubstatRange[$(t).val()], $(t).parents(".dropDown").prev(".dropDownButton")[0].firstChild.nodeValue = $(t).children("option:selected").text()), a.attr("max", i), i < 1 ? (a.attr("step", .001), a.attr("percent", !0)) : (a.attr("step", 1), a.attr("percent", !1)), e || $(a).trigger("change")
    }
}

function UpdateRangeLabel(t) {
    let e = $('[name="' + $(t).attr("name").replace("Value", "") + '"]').attr("value"),
        a = $(t)[0].value,
        i = FormatStat(a, !FlatTypes.includes(e)).replace("%", "");
    $(t).parents(".rangeContainer").next("label").children("input").val(i), $(t).parents(".rangeContainer").next("label").children("span").text(FlatTypes.includes(e) ? "" : "%"), $(t).parents(".rangeContainer").parents(".dropDown").length > 0 && (a = FormatStat(a, !FlatTypes.includes(e)), $(t).parents(".rangeContainer").parents(".dropDown").prev(".dropDownButton").children("div").text(a))
}

function UpdateRangeEntryLabel(t) {
    let e = t.value;
    $(t).parents("tr").find("label").text(FlatTypes.includes(e) ? "" : "%"), $(t).parents("tr").find("input").attr("percent", !FlatTypes.includes(e)), $(t).parents("tr").find("input").attr("statType", e)
}

function RemoveManualBuff(t) {
    $(t).parents("tr").remove()
}

function ToggleTalent(t) {
    let e = $(t).parents(".statLineContainer").attr("stat"),
        a = $(t).prop("checked");
    if (-1 != e.search("passive")) {
        let t = parseInt(e.replace("passive", ""));
        _GUI._Calc.Character.talentFlags.PassiveToggle[t] = a
    } else if (-1 != e.search("constellation")) {
        let t = parseInt(e.replace("constellation", ""));
        _GUI._Calc.Character.talentFlags.ConstellationToggle[t] = a
    } else -1 != e.search("burst") ? _GUI._Calc.Character.talentFlags.BurstToggle = a : -1 != e.search("skill") && (_GUI._Calc.Character.talentFlags.SkillToggle = a);
    _GUI._Calc.Recalc()
}

function UpdateTalentStacks(t) {
    let e = $(t).parents(".statLineContainer").attr("stat"),
        a = $(t).val();
    if (-1 != e.search("passive")) {
        let t = parseInt(e.replace("passive", ""));
        _GUI._Calc.Character.talentFlags.PassiveStacks[t] = a
    } else if (-1 != e.search("constellation")) {
        let t = parseInt(e.replace("constellation", ""));
        _GUI._Calc.Character.talentFlags.ConstellationStacks[t] = a
    } else -1 != e.search("burst") ? _GUI._Calc.Character.talentFlags.BurstStacks = a : -1 != e.search("skill") && (_GUI._Calc.Character.talentFlags.SkillStacks = a);
    _GUI._Calc.Recalc()
}

function ToggleHitEnemy(t) {
    _GUI._Calc.hitEnemy = $(t).prop("checked"), _GUI._Calc.Recalc()
}

function UpdateEnemyLevel(t) {
    _GUI._Calc.Enemy.setLevel(parseInt($("#enemyLvlSelect").val())), _GUI._Calc.hitEnemy && _GUI._Calc.Recalc()
}

function UpdateEnemyElement(t) {
    _GUI._Calc.Enemy.setElement(t.value), _GUI._Calc.Recalc()
}

function UpdateEnemyRes(t) {
    let e = t.id.replace("RESVal", "DMG"),
        a = parseInt(t.value) / 100;
    _GUI._Calc.Enemy.setRES(e, a), _GUI._Calc.hitEnemy && _GUI._Calc.Recalc()
}

function UpdateEnemySelect(t) {
    _GUI.SelectEnemy(t.value)
}

function UpdateEnemyType(t) {
    _GUI._Calc.Enemy.setEnemy(_GUI.enemyName, t.value), _GUI.FillEnemyRes(), _GUI.FillEnemyElement(), _GUI._Calc.hitEnemy && _GUI._Calc.Recalc()
}

function UpdateResonance(t) {
    let e = $(t).prop("checked"),
        a = t.value;
    e ? _GUI._Calc.Party.addResonance(a) : _GUI._Calc.Party.removeResonance(a), _GUI.FillResonance(), _GUI._Calc.Recalc()
}

function UpdatePartyBuff(t) {
    _GUI._Calc.Party.partyBuffInputHandler(t), _GUI._Calc.Recalc()
}

function genTag(t, e, a, i) {
    if (i)
        if (i.constructor == Array)
            for (let n in i) {
                let t = Translate(a, i[n]);
                if (t != a) {
                    a = t;
                    break
                }
            } else a = Translate(a, i);
    let s = "<" + t;
    for (let n in e) s += " " + n + "='" + e[n] + "'";
    return s += ">" + (a ?? "") + "</" + t + ">", s
}

function div(t, e, a) {
    return genTag("div", t, e, a)
}

function span(t, e, a) {
    return genTag("span", t, e, a)
}

function label(t, e, a) {
    return genTag("label", t, e, a)
}

function td(t, e, a) {
    return genTag("td", t, e, a)
}

function tr(t, e) {
    let a = "";
    for (let i in e) a += td({
        "class": i
    }, e[i]);
    return genTag("tr", t, a)
}

function genOptions(t, e) {
    let a = "",
        i = Object.keys(t).sort();
    for (let s in i) {
        let n = i[s];
        a += genTag("option", {
            value: t[n]
        }, Translate(n, e))
    }
    return a
}

function genOptionsNum(t) {
    let e = "";
    for (let a = 0; a <= t; a++) e += genTag("option", {
        value: a
    }, a);
    return e
}! function(t, e, a) {
    "function" == typeof define && define.amd ? define(["jquery"], (function(i) {
        return a(i, t, e), i.mobile
    })) : a(t.jQuery, t, e)
}(this, document, (function(t, e, a, i) {
    ! function(e) {
        "function" == typeof define && define.amd ? define("vmouse", ["jquery"], e) : e(t)
    }((function(t) {
        function e(t) {
            for (; t && void 0 !== t.originalEvent;) t = t.originalEvent;
            return t
        }

        function s(a, s) {
            var n, r, l, o, c, h, u, f, d, p = a.type;
            if ((a = t.Event(a)).type = s, n = a.originalEvent, r = G, p.search(/^(mouse|click)/) > -1 && (r = w), n)
                for (u = r.length; u;) a[o = r[--u]] = n[o];
            if (p.search(/mouse(down|up)|click/) > -1 && !a.which && (a.which = 1), -1 !== p.search(/^touch/) && (p = (l = e(n)).touches, c = l.changedTouches, h = p && p.length ? p[0] : c && c.length ? c[0] : i))
                for (f = 0, d = T.length; f < d; f++) a[o = T[f]] = h[o];
            return a
        }

        function n(e) {
            for (var a, i, s = {}; e;) {
                for (i in a = t.data(e, b)) a[i] && (s[i] = s.hasVirtualBinding = !0);
                e = e.parentNode
            }
            return s
        }

        function r() {
            U = !0
        }

        function l() {
            F = 0, B.length = 0, k = !1, r()
        }

        function o() {
            U = !1
        }

        function c() {
            $ && (clearTimeout($), $ = 0)
        }

        function h() {
            c(), $ = setTimeout((function() {
                $ = 0, l()
            }), t.vmouse.resetTimerDuration)
        }

        function u(e, a, i) {
            var n;
            return (i && i[e] || !i && function(e, a) {
                for (var i; e;) {
                    if ((i = t.data(e, b)) && (!a || i[a])) return e;
                    e = e.parentNode
                }
                return null
            }(a.target, e)) && (n = s(a, e), t(a.target).trigger(n)), n
        }

        function f(e) {
            var a, i = t.data(e.target, _);
            "click" === e.type && "touchstart" === t.data(e.target, "lastTouchType") && setTimeout((function() {
                "touchstart" === t.data(e.target, "lastTouchType") && (l(), delete t.data(e.target).lastTouchType, f(e))
            }), t.vmouse.maximumTimeBetweenTouches), k || F && F === i || (a = u("v" + e.type, e)) && (a.isDefaultPrevented() && e.preventDefault(), a.isPropagationStopped() && e.stopPropagation(), a.isImmediatePropagationStopped() && e.stopImmediatePropagation())
        }

        function d(a) {
            var i, s, r, l = e(a).touches;
            l && 1 === l.length && (s = n(i = a.target), t.data(a.target, "lastTouchType", a.type), s.hasVirtualBinding && (F = R++, t.data(i, _, F), c(), o(), L = !1, r = e(a).touches[0], M = r.pageX, P = r.pageY, u("vmouseover", a, s), u("vmousedown", a, s)))
        }

        function p(e) {
            U || (L || u("vmousecancel", e, n(e.target)), t.data(e.target, "lastTouchType", e.type), L = !0, h())
        }

        function g(a) {
            if (!U) {
                var i = e(a).touches[0],
                    s = L,
                    r = t.vmouse.moveDistanceThreshold,
                    l = n(a.target);
                t.data(a.target, "lastTouchType", a.type), (L = L || Math.abs(i.pageX - M) > r || Math.abs(i.pageY - P) > r) && !s && u("vmousecancel", a, l), u("vmousemove", a, l), h()
            }
        }

        function m(a) {
            if (!U && t.data(a.target, "lastTouchType") !== i) {
                r(), delete t.data(a.target).lastTouchType;
                var s, l, o = n(a.target);
                u("vmouseup", a, o), L || (s = u("vclick", a, o)) && s.isDefaultPrevented() && (l = e(a).changedTouches[0], B.push({
                    touchID: F,
                    x: l.clientX,
                    y: l.clientY
                }), k = !0), u("vmouseout", a, o), L = !1, h()
            }
        }

        function v(e) {
            var a, i = t.data(e, b);
            if (i)
                for (a in i)
                    if (i[a]) return !0;
            return !1
        }

        function S() {}
        var y, C, b = "virtualMouseBindings",
            _ = "virtualTouchID",
            T = "clientX clientY pageX pageY screenX screenY".split(" "),
            A = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
            G = "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            D = t.event.mouseHooks ? t.event.mouseHooks.props : [],
            w = G.concat(D),
            I = {},
            $ = 0,
            M = 0,
            P = 0,
            L = !1,
            B = [],
            k = !1,
            U = !1,
            x = "addEventListener" in a,
            E = t(a),
            R = 1,
            F = 0;
        for (t.vmouse = {
                moveDistanceThreshold: 10,
                clickDistanceThreshold: 10,
                resetTimerDuration: 1500,
                maximumTimeBetweenTouches: 100
            }, C = 0; C < A.length; C++) t.event.special[A[C]] = function(e) {
            var a = e.substr(1);
            return {
                setup: function() {
                    v(this) || t.data(this, b, {}), t.data(this, b)[e] = !0, I[e] = (I[e] || 0) + 1, 1 === I[e] && E.bind(a, f), t(this).bind(a, S), x && (I.touchstart = (I.touchstart || 0) + 1, 1 === I.touchstart && E.bind("touchstart", d).bind("touchend", m).bind("touchmove", g).bind("scroll", p))
                },
                teardown: function() {
                    --I[e], I[e] || E.unbind(a, f), x && (--I.touchstart || E.unbind("touchstart", d).unbind("touchmove", g).unbind("touchend", m).unbind("scroll", p));
                    var i = t(this),
                        s = t.data(this, b);
                    s && (s[e] = !1), i.unbind(a, S), v(this) || i.removeData(b)
                }
            }
        }(A[C]);
        x && a.addEventListener("click", (function(e) {
            var a, i, s, n, r, l = B.length,
                o = e.target;
            if (l)
                for (a = e.clientX, i = e.clientY, y = t.vmouse.clickDistanceThreshold, s = o; s;) {
                    for (n = 0; n < l; n++)
                        if (r = B[n], s === o && Math.abs(r.x - a) < y && Math.abs(r.y - i) < y || t.data(s, _) === r.touchID) return e.preventDefault(), void e.stopPropagation();
                    s = s.parentNode
                }
        }), !0)
    })),
    function(e) {
        "function" == typeof define && define.amd ? define("ns", ["jquery"], e) : e(t)
    }((function(t) {
        return t.mobile = {
            version: "@VERSION"
        }, t.mobile
    })),
    function(e) {
        "function" == typeof define && define.amd ? define("support/touch", ["jquery", "../ns"], e) : e(t)
    }((function(t) {
        var e = {
            touch: "ontouchend" in a
        };
        return t.mobile.support = t.mobile.support || {}, t.extend(t.support, e), t.extend(t.mobile.support, e), t.support
    })),
    function(e) {
        "function" == typeof define && define.amd ? define("events/touch", ["jquery", "../vmouse", "../support/touch"], e) : e(t)
    }((function(t) {
        function s(e, a, s, n) {
            var r = s.type;
            s.type = a, n ? t.event.trigger(s, i, e) : t.event.dispatch.call(e, s), s.type = r
        }
        var n = t(a),
            r = t.mobile.support.touch,
            l = r ? "touchstart" : "mousedown",
            o = r ? "touchend" : "mouseup",
            c = r ? "touchmove" : "mousemove";
        return t.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight".split(" "), (function(e, a) {
            t.fn[a] = function(t) {
                return t ? this.bind(a, t) : this.trigger(a)
            }, t.attrFn && (t.attrFn[a] = !0)
        })), t.event.special.tap = {
            tapholdThreshold: 750,
            emitTapOnTaphold: !0,
            setup: function() {
                var e = this,
                    a = t(e),
                    i = !1;
                a.bind("vmousedown", (function(r) {
                    function l() {
                        c && (a.bind("vclick", h), clearTimeout(c))
                    }

                    function o() {
                        l(), a.unbind("vclick", h).unbind("vmouseup", l), n.unbind("vmousecancel", o)
                    }
                    if (i = !1, r.which && 1 !== r.which) return !0;
                    var c, h, u = r.target;
                    h = function(t) {
                        o(), i || u !== t.target ? i && t.preventDefault() : s(e, "tap", t)
                    }, a.bind("vmouseup", l), n.bind("vmousecancel", o), c = setTimeout((function() {
                        t.event.special.tap.emitTapOnTaphold || (i = !0), c = 0, s(e, "taphold", t.Event("taphold", {
                            target: u
                        }))
                    }), t.event.special.tap.tapholdThreshold)
                }))
            },
            teardown: function() {
                t(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"), n.unbind("vmousecancel")
            }
        }, t.event.special.swipe = {
            scrollSupressionThreshold: 30,
            durationThreshold: 1e3,
            horizontalDistanceThreshold: e.devicePixelRatio >= 2 ? 15 : 30,
            verticalDistanceThreshold: e.devicePixelRatio >= 2 ? 15 : 30,
            getLocation: function(t) {
                var a = e.pageXOffset,
                    i = e.pageYOffset,
                    s = t.clientX,
                    n = t.clientY;
                return 0 === t.pageY && Math.floor(n) > Math.floor(t.pageY) || 0 === t.pageX && Math.floor(s) > Math.floor(t.pageX) ? (s -= a, n -= i) : (n < t.pageY - i || s < t.pageX - a) && (s = t.pageX - a, n = t.pageY - i), {
                    x: s,
                    y: n
                }
            },
            start: function(e) {
                var a = e.originalEvent.touches ? e.originalEvent.touches[0] : e,
                    i = t.event.special.swipe.getLocation(a);
                return {
                    time: (new Date).getTime(),
                    coords: [i.x, i.y],
                    origin: t(e.target)
                }
            },
            stop: function(e) {
                var a = e.originalEvent.touches ? e.originalEvent.touches[0] : e,
                    i = t.event.special.swipe.getLocation(a);
                return {
                    time: (new Date).getTime(),
                    coords: [i.x, i.y]
                }
            },
            handleSwipe: function(e, a, i, n) {
                if (a.time - e.time < t.event.special.swipe.durationThreshold && Math.abs(e.coords[0] - a.coords[0]) > t.event.special.swipe.horizontalDistanceThreshold && Math.abs(e.coords[1] - a.coords[1]) < t.event.special.swipe.verticalDistanceThreshold) {
                    var r = e.coords[0] > a.coords[0] ? "swipeleft" : "swiperight";
                    return s(i, "swipe", t.Event("swipe", {
                        target: n,
                        swipestart: e,
                        swipestop: a
                    }), !0), s(i, r, t.Event(r, {
                        target: n,
                        swipestart: e,
                        swipestop: a
                    }), !0), !0
                }
                return !1
            },
            eventInProgress: !1,
            setup: function() {
                var e, a = this,
                    i = t(a),
                    s = {};
                (e = t.data(this, "mobile-events")) || (e = {
                    length: 0
                }, t.data(this, "mobile-events", e)), e.length++, e.swipe = s, s.start = function(e) {
                    if (!t.event.special.swipe.eventInProgress) {
                        t.event.special.swipe.eventInProgress = !0;
                        var i, r = t.event.special.swipe.start(e),
                            l = e.target,
                            h = !1;
                        s.move = function(e) {
                            r && !e.isDefaultPrevented() && (i = t.event.special.swipe.stop(e), h || (h = t.event.special.swipe.handleSwipe(r, i, a, l)) && (t.event.special.swipe.eventInProgress = !1), Math.abs(r.coords[0] - i.coords[0]) > t.event.special.swipe.scrollSupressionThreshold && e.preventDefault())
                        }, s.stop = function() {
                            h = !0, t.event.special.swipe.eventInProgress = !1, n.off(c, s.move), s.move = null
                        }, n.on(c, s.move).one(o, s.stop)
                    }
                }, i.on(l, s.start)
            },
            teardown: function() {
                var e, a;
                (e = t.data(this, "mobile-events")) && (a = e.swipe, delete e.swipe, 0 == --e.length && t.removeData(this, "mobile-events")), a && (a.start && t(this).off(l, a.start), a.move && n.off(c, a.move), a.stop && n.off(o, a.stop))
            }
        }, t.each({
            taphold: "tap",
            swipeleft: "swipe.left",
            swiperight: "swipe.right"
        }, (function(e, a) {
            t.event.special[e] = {
                setup: function() {
                    t(this).bind(a, t.noop)
                },
                teardown: function() {
                    t(this).unbind(a)
                }
            }
        })), t.event.special
    }))
}));
class Artifact {
    constructor(t, e, a, i = null, s) {
        this.artifactType = t, this.mainStat = e, this.ChangeArtifactType(this.artifactType), this.subStats = s ?? [new StatModifier("ATK", 0), new StatModifier("ATKPercent", 0), new StatModifier("CritRate", 0), new StatModifier("CritDMG", 0)], this.setPiece, this.level = 0, this.rarity = 0, this.startingSubstats = 0, this.modifySet(a ?? "Gladiators Finale"), this.Validate(), this.maxRarity, this.maxLevel, this.minSubstat, this.substatCount, this.maxUpgrades, this.parent = i
    }
    static GetMainStatOptions(t) {
        let e, a = {
            "HP %": "HPPercent",
            "ATK %": "ATKPercent",
            "DEF %": "DEFPercent",
            "Elemental Mastery": "ElementalMastery"
        };
        switch (t) {
            case "Flower":
                e = {
                    HP: "HP"
                };
                break;
            case "Feather":
                e = {
                    ATK: "ATK"
                };
                break;
            case "Clock":
                e = Object.assign({
                    "Energy Recharge": "EnergyRecharge"
                }, a);
                break;
            case "Goblet":
                e = Object.assign({
                    "Pyro Damage": "PyroDMG",
                    "Hydro Damage": "HydroDMG",
                    "Dendro Damage": "DendroDMG",
                    "Electro Damage": "ElectroDMG",
                    "Anemo Damage": "AnemoDMG",
                    "Cryo Damage": "CryoDMG",
                    "Geo Damage": "GeoDMG",
                    "Physical Damage": "PhysicalDMG"
                }, a);
                break;
            case "Circlet":
                e = Object.assign({
                    "Crit %": "CritRate",
                    "Crit DMG": "CritDMG",
                    "Healing Bonus": "Heal"
                }, a)
        }
        return e
    }
    ChangeArtifactType(t) {
        this.artifactType = t;
        let e = Object.values(Artifact.GetMainStatOptions(this.artifactType));
        e.includes(this.mainStat.statType) || (this.mainStat.statType = e[0])
    }
    Validate(t) {
        let e = Object.values(SubstatOptions); - 1 != e.indexOf(this.mainStat.statType) && e.splice(e.indexOf(this.mainStat.statType), 1);
        let a = [];
        for (let i in this.subStats)
            if (this.subStats[i]) {
                let t = e.indexOf(this.subStats[i].statType); - 1 == t ? a.push(i) : e.splice(t, 1)
            } else a.push(i);
        if (!t)
            for (let i in a) {
                let t = a[i];
                this.subStats[t] ? this.subStats[t].statType = e[t] : this.subStats[t] = new StatModifier(e[t], 0)
            }
        return a
    }
    Clone() {
        let t = this.parent;
        this.parent = null;
        let e = Artifact.FromData(JSON.parse(JSON.stringify(this)));
        return this.parent = t, e
    }
    static FromData(t) {
        let e = t;
        return Object.setPrototypeOf(e, Artifact.prototype), e.subStats = [StatModifier.FromData(t.subStats[0]), StatModifier.FromData(t.subStats[1]), StatModifier.FromData(t.subStats[2]), StatModifier.FromData(t.subStats[3])], e
    }
    addSubstat(t, e) {
        this.subStats[e] = t
    }
    GetBuffs() {
        return [this.mainStat, this.subStats[0], this.subStats[1], this.subStats[2], this.subStats[3]]
    }
    setMainstatType(t) {
        this.mainStat.statType = t, this.mainStat.statModValue = MainStatRange[this.mainStat.statType][this.rarity - 3][this.level]
    }
    determineSubstatCount() {
        this.substatCount = Math.min(this.startingSubstats + Math.floor(this.level / 4), 4), this.maxUpgrades = Math.max(this.startingSubstats + Math.floor(this.level / 4) - 4, 0), this.validateSubstats(), this.remainingUpgrades = this.maxLevel / 4 - Math.floor(this.level / 4)
    }
    static combinations(t, e) {
        let a = SubstatRolls[t][e - 3],
            i = {};
        for (let s = 0; s < a.length + 1; s++)
            for (let t = s; t < a.length + 1; t++)
                for (let e = t; e < a.length + 1; e++)
                    for (let n = e; n < a.length + 1; n++)
                        for (let r = n; r < a.length + 1; r++)
                            for (let l = r; l < a.length + 1; l++) {
                                let o = a?.[s] ?? 0;
                                o += a?.[t] ?? 0, o += a?.[e] ?? 0, o += a?.[n] ?? 0, o += a?.[r] ?? 0, o += a?.[l] ?? 0, i[o] ? i[o].push([s, t, e, n, r, l]) : i[o] = [
                                    [s, t, e, n, r, l]
                                ]
                            }
        return i
    }
    validateSubstats() {
        this.substatsValid = !1;
        return 0 == this.substatCount && (this.substatsValid = !0, !0)
    }
    setLevel(t) {
        t > this.maxLevel ? this.level = this.maxLevel : this.level = t < 0 ? 0 : t, this.setMainstatType(this.mainStat.statType), this.determineSubstatCount()
    }
    setStartingSubstats(t) {
        t < this.minSubstat ? this.startingSubstats = this.minSubstat : t > this.minSubstat + 1 ? this.startingSubstats = this.minSubstat + 1 : this.startingSubstats = t, this.determineSubstatCount()
    }
    setRarity(t, e = !1) {
        t > this.maxRarity ? this.rarity = this.maxRarity : t < 3 || t < this.maxRarity - 1 ? this.rarity = Math.max(3, this.maxRarity - 1) : this.rarity = t, this.maxLevel = 4 * this.rarity, this.minSubstat = this.rarity - 2, this.setStartingSubstats(e ? this.minSubstat + 1 : this.startingSubstats), this.setLevel(e ? this.maxLevel : this.level)
    }
    setMax() {
        this.setRarity(this.maxRarity, !0)
    }
    modifySet(t, e = !1) {
        this.setPiece = t, this.maxRarity = ArtifactRarity[t], this.setRarity(e ? this.maxRarity : this.rarity, e), this.parent && this.parent.determineSets()
    }
    _hook(t) {
        this.parent = t
    }
}
class ArtifactContainer {
    constructor(t) {
        this.artifacts = t ? {
            Flower: new Artifact("Flower", new StatModifier("HP", 0), undefined, this),
            Feather: new Artifact("Feather", new StatModifier("ATK", 0), undefined, this),
            Clock: new Artifact("Clock", new StatModifier("ATKPercent", 0), undefined, this),
            Goblet: new Artifact("Goblet", new StatModifier("ATKPercent", 0), undefined, this),
            Circlet: new Artifact("Circlet", new StatModifier("ATKPercent", 0), undefined, this)
        } : {}, this.setEffects = [], this.toggle = !1, this["switch"] = null, this.select = [], this.ArtifactBuffs = [], this.determineSets()
    }
    ReloadArtifacts() {
        for (let t in this.artifacts) this.artifacts[t] = Artifact.FromData(this.artifacts[t]);
        this._hookAll(), this.determineSets(!0)
    }
    _unhookAll() {
        for (let t in this.artifacts) this.artifacts[t].parent = null
    }
    _hookAll() {
        for (let t in this.artifacts) this.artifacts[t]._hook(this)
    }
    modifySets(t, e) {
        for (let a in t) this.artifacts[a].modifySet(t[a], e);
        this.determineSets()
    }
    equipArtifact(t) {
        let e = this.artifacts[t.artifactType];
        this.artifacts[t.artifactType] = t, t._hook(this), e != t ? e != undefined && t.setPiece == e.setPiece || this.determineSets() : e._hook(null)
    }
    determineSets(t = !1) {
        let e = {};
        for (let n in this.artifacts) this.artifacts[n].setPiece != undefined && (e[this.artifacts[n].setPiece] = (e[this.artifacts[n].setPiece] ?? 0) + 1);
        let a = [],
            i = [];
        for (let n in e)
            for (let t = 0; t < e[n]; t++)
                if (ArtifactList[n][t]) {
                    let e = ArtifactList[n][t];
                    a.push(e), i.push({
                        set: n,
                        idx: t
                    })
                } let s = !1;
        if (a.length == this.setEffects.length)
            for (let n in a) a[n] != this.setEffects[n] && (s = !0);
        else s = !0;
        1 == s && (this.setEffects = a, this.setID = i, t || (this.toggle = !1, this["switch"] = null, this.select = []))
    }
    GetBuffs(t, e) {
        let a = [];
        this.DebuffsToApply = new DebuffContainer;
        for (let i in this.artifacts) a = a.concat(this.artifacts[i].GetBuffs());
        for (let i in this.setEffects) {
            let s = this.setEffects[i];
            if (s.effect && (a = a.concat(s.effect)), s.toggle && this.toggle && (a = a.concat(s.toggle)), s["switch"] && null != this["switch"] && -1 != this["switch"] && (s["switch"][this["switch"]].effect && (a = a.concat(s["switch"][this["switch"]].effect)), s["switch"][this["switch"]].debuff && this.DebuffsToApply.addMod(s["switch"][this["switch"]].debuff)), s.select && this.select.length > 0)
                for (let t in this.select) a = a.concat(s.select[this.select[t]].effect);
            if (s.condition)
                for (let i in s.condition) s.condition[i].check(t, e) && (a = a.concat(s.condition[i].effect));
            s.scale && t.scalingBuffs.push(s.scale)
        }
        return this.ArtifactBuffs = a, a
    }
}
class Trie {
    constructor(t) {
        this.trie = {}, this.ArrayToDic(t)
    }
    Traverse(t, e = !1, a = this.trie, i) {
        let s = a;
        for (let n in t) {
            let a = t[n];
            if (s.isWord && i && i.push(this.GetWord(s)), !s[a]) {
                if (!e) return [s, !1, t.substring(n), i];
                s[a] = {
                    parent: s,
                    char: a
                }
            }
            s = s[a]
        }
        return [s, !0, "", i]
    }
    GetWord(t) {
        let e = "";
        for (; t != this.trie;) e = t.char + e, t = t.parent;
        return e
    }
    AddToDic(t) {
        "of" != t && (this.Traverse(t, !0)[0].isWord = !0)
    }
    ArrayToDic(t) {
        for (let e in t) {
            let a = t[e].trim().split(" ");
            for (let t in a) this.AddToDic(a[t])
        }
    }
    Contains(t) {
        return this.Traverse(t)[1]
    }
    IsWord(t) {
        return 1 == this.Traverse(t)[0].isWord
    }
    Match(t, e = 0, a, i = this.trie) {
        let s, n = i,
            r = [];
        if ([n, s, t] = this.Traverse(t, !1, n, r), s) {
            if (a) {
                if (n.isWord) return [this.GetWord(n)];
                let t = this.FindWordsFrom(n, e),
                    i = r;
                return a.concat(t).concat(i)
            }
            return !0
        }
        if (e -= 1, "" == (t = t.substring(1))) return n.isWord && a.push(this.GetWord(n)), a.concat(this.FindWordsFrom(n, e));
        if (e > 0) {
            let i = [];
            for (let s in n) "parent" != s && "char" != s && (i = i.concat(this.Match(t, e, a, n[s])));
            return a.concat(i)
        }
        return a ?? !1
    }
    FindWordsFrom(t, e = 1) {
        let a = [];
        if (e < 1) return a;
        for (let i in t) "parent" != i && "char" != i && (t[i].isWord && a.push(this.GetWord(t[i])), a = a.concat(this.FindWordsFrom(t[i], e - 1)));
        return a
    }
}
class ArtifactDesignerController {
    constructor() {
        this.DEBUG = !1, this.persist = [!1, !1], this._Container = [], this._SaveName = [], this._SaveData = {
            Saves: {},
            Flower: [],
            Feather: [],
            Clock: [],
            Goblet: [],
            Circlet: []
        }, this.artifactType = "Flower", this._DB, this.dragging = !1, this.dragLoc = {
            x: null,
            y: null
        }, this.imgPos = {
            x: null,
            y: null
        }, this.savePos = {
            x: localStorage.getItem("savePosX") ?? 0,
            y: localStorage.getItem("savePosY") ?? 0
        }, this.imageData, this.bwidth = 420, this.bheight = 600, this.buffer, this.guide = {}, this.guideType, this.processing = {}, this.progress = -1, this._CTX, this.trieMe = new Trie(["Rate", "Energy", "Recharge", "Elemental", "Mastery", "Pyro", "Cyro", "Dendro", "Geo", "Hydro", "Electro", "Anemo", "Physical", "Heal", "HP", "ATK", "DEF"]), this.trietrieAgain = new Trie(["CRIT", "DMG", "Bonus"]), this.trieart = new Trie(["Flower", "Life", "Plume", "Death", "Sands", "Eon", "Goblet", "Eonothem", "Circlet", "Logos"])
    }
    Click(t) {
        $("#contextMenuContainer").hide()
    }
    ContextMenu(t) {
        return $("#contextMenuContainer").hide(), _GUI.DEBUG
    }
    CreateNewArtifact(t) {
        let e = this.GetMainStatOptions(this.artifactType),
            a = e[Object.keys(e)[0]],
            i = new StatModifier(a, 0),
            s = new Artifact(this.artifactType, i, "Adventurer");
        this.FillArtifact(s, t)
    }
    ChangeArtifactType(t) {
        t != this.artifactType && (this.artifactType = t, this.FillSavedArtifacts())
    }
    Toast(t) {
        let e = $(div({
            "class": "toast"
        }, t)).appendTo(".container");
        setTimeout((() => {
            e.remove()
        }), 2e3)
    }
    CopySave(t) {
        let e = this._SaveData.Saves[t].artifact.Clone(),
            a = s(t);
        for (; null != this._SaveData.Saves[a];) a = s(a);
        let i = {
            name: a,
            artifact: e
        };

        function s(t) {
            let e = t,
                a = e.match(/Copy(\d{1,3})/);
            if (a) {
                let t = parseInt(a[1]) + 1;
                e = e.replace(a[0], "Copy" + t)
            } else e += "Copy1";
            return e
        }
        this.SaveToDB(i), this.FillSavedArtifacts()
    }
    TrySaveContainer(t, e) {
        let a = parseInt(t.replace("Container", ""));
        null == this._SaveName[a] || e ? ($("#saveMenu").show(), $("#saveMenu").find(".menuTitle").html("Saving Container" + a + genTag("span", {
            "class": "closeSaveMenu"
        }, "X")), $("#saveButton").attr("idx", a), $("#saveNameInput").val(this._SaveName[a]), $("#saveNameInput").focus()) : this.DoSave(a)
    }
    DoSave(t) {
        if (!this._Saving) {
            this._Saving = !0;
            let e = this._Container[t],
                a = this._SaveName[t];
            if ("" == a || null == a || a == undefined || -1 != a.search(/['"`\<\>\!\*]\//)) return this.Toast("Invalid Name"), void(this._Saving = !1);
            if (a.length > 19) return this.Toast("Name Too Long"), void(this._Saving = !1);
            let i = {
                name: a,
                artifact: e.Clone()
            };
            this._SaveData.Saves[a] ? (i.id = this._SaveData.Saves[a].id, this.SaveToDB(i)) : Object.keys(this._SaveData.Saves).length < _A1 ? this.SaveToDB(i) : (this.Toast("Too many Artifacts. Limit: " + _A1), this._Saving = !1)
        }
    }
    SaveToDB(t) {
        if (!this._DB) return this.Toast("Please Log In"), void(this._Saving = !1);
        if (-1 != t.name.search(/['"`\<\>\!\*]/)) return this.Toast("Invalid Name"), void(this._Saving = !1);
        if (CheckDependencies()) {
            let e = SafeStringify(t.artifact);
            if (this._SaveData.Saves[t.name]) this._DB.doc(t.id).set({
                name: t.name,
                data: e
            }).then((e => {
                this.Toast("Overwritten..");
                let a = this._SaveData.Saves[t.name],
                    i = this._SaveData[a.artifact.artifactType];
                delete i[i.indexOf(t.name)], this._SaveData.Saves[t.name] = t, this._SaveData[t.artifact.artifactType].push(t.name), this.FillSavedArtifacts(), this._Saving = !1
            }))["catch"]((t => {
                this._Saving = !1
            }));
            else {
                if (Object.keys(this._SaveData.Saves).length >= _A1) return void this.Toast("Save Limit Reached.");
                this._DB.add({
                    name: t.name,
                    data: e
                }).then((e => {
                    t.id = e.id, this._SaveData[t.artifact.artifactType].push(t.name), this._SaveData.Saves[t.name] = t, this.Toast("Saved."), this.FillSavedArtifacts(), this._Saving = !1
                }))["catch"]((t => {
                    this._Saving = !1
                }))
            }
        } else this.Toast("Try disabling Adblock.")
    }
    AddSaveData(t) {
        t.artifact = Artifact.FromData(JSON.parse(t.artifact)), this._SaveData[t.artifact.artifactType].push(t.name), this._SaveData.Saves[t.name] = t
    }
    ClearSaves() {
        this._SaveData = {
            Saves: {},
            Flower: [],
            Feather: [],
            Clock: [],
            Goblet: [],
            Circlet: []
        }
    }
    ToggleAll(t) {
        let e = $(t).prop("checked");
        $(".savedArtifact input[type='checkbox']").prop("checked", e)
    }
    FillSavedArtifacts() {
        $(".savedArtifacts").html(tr({
            "class": "savedArtifactRowHeader"
        }, {
            levelHeader: "+",
            rarityHeader: "Rarity",
            nameHeader: "Name",
            mainStatHeader: "Mainstat",
            valueHeader: "Value",
            setHeader: "Set",
            selectHeader: genTag("input", {
                onChange: "_GUI.ToggleAll(this)",
                type: "checkbox"
            })
        }));
        for (let t in this._SaveData[this.artifactType]) {
            let e = this._SaveData[this.artifactType][t],
                a = this._SaveData.Saves[e];
            this.AppendSavedArtifact(a)
        }
    }
    DeleteSave(t) {
        let e = this._SaveData.Saves[t];
        this._DB.doc(e.id)["delete"]().then((function() {
            delete _GUI._SaveData.Saves[t];
            let a = _GUI._SaveData[e.artifact.artifactType].indexOf(t);
            delete _GUI._SaveData[e.artifact.artifactType][a], _GUI.FillSavedArtifacts(), _GUI.Toast("Deleted " + t), $("#artifactPopupDisplay").hide()
        }))
    }
    LoadSavedArtifact(t, e, a = !0) {
        this.persist[e] = a, this.FillArtifact(this._SaveData.Saves[t].artifact, e, t)
    }
    ClearContainer(t) {
        let e = parseInt(t.replace("Container", ""));
        this.persist[e] = !1, this._Container[e] = null, this._SaveName[e] = null, $("#NewBtn" + e).show(), $("#" + t).hide()
    }
    HandleUpload(t) {
        this.OCR(t.files, t.id.replace("artifactFile", ""))
    }
    OCR(t, e) {
        let a = "Container" + e;
        $("#doScan").attr("for", a), this.magic(t[0])
    }
    magic(t) {
        let e = new FileReader;
        e.onloadend = function() {
            let t = new Image;
            t.onload = function() {
                _GUI.sa(t)
            }, t.src = e.result
        }, e.readAsDataURL(t)
    }
    sa(t) {
        if (this.imageData = t, this._CTX.clearRect(0, 0, this.buffer.width, this.buffer.height), t.width > 600 && t.width % 1920 != 0 && 1080 != t.height) {
            let e = t.width / t.height;
            t.height = 1080, t.width = 1080 * e
        }
        this._CTX.drawImage(t, this.savePos.x, this.savePos.y, t.width, t.height), this.imagePos = this.savePos, this.redraw(), this.redraw(), $("#scanner").show(), $("#progressBar .graphFill").css("width", 0), $("#progressBar .graphFillLabel").text("0%"), $("#cancelScan").text("Cancel"), $("#doScan").text("Scan")
    }
    bordr() {
        let t;
        this._CTX.strokeStyle = "white", 1 != this.guideType ? (t = 140, this.guide.artifactType = {
            x: 20,
            y: t - 70,
            w: 300,
            h: 30
        }, this.guide.mainstat = {
            x: 15,
            y: t,
            w: 300,
            h: 40
        }, t += 40, this.guide.mainstatValue = {
            x: 15,
            y: t,
            w: 300,
            h: 50
        }, t += 50, this.guide.rarity = {
            x: 27,
            y: t + 8,
            w: 340,
            h: 35
        }, this._CTX.strokeRect(this.guide.rarity.x, this.guide.rarity.y, 30, this.guide.rarity.h), this._CTX.strokeRect(this.guide.rarity.x + 32, this.guide.rarity.y, 30, this.guide.rarity.h), this._CTX.strokeRect(this.guide.rarity.x + 64, this.guide.rarity.y, 30, this.guide.rarity.h), this._CTX.strokeRect(this.guide.rarity.x + 96, this.guide.rarity.y, 30, this.guide.rarity.h), this._CTX.strokeRect(this.guide.rarity.x + 128, this.guide.rarity.y, 30, this.guide.rarity.h), t += 48, this.guide.level = {
            x: 25,
            y: t + 30,
            w: 64,
            h: 34
        }, t += 64, this.guide.substat1 = {
            x: 45,
            y: t + 10,
            w: 320,
            h: 42
        }, t += 52, this.guide.substat2 = {
            x: 45,
            y: t,
            w: 320,
            h: 37
        }, t += 37, this.guide.substat3 = {
            x: 45,
            y: t,
            w: 320,
            h: 37
        }, this.guide.setPiece3 = {
            x: 20,
            y: t + 7,
            w: 345,
            h: 35
        }, t += 37, this.guide.substat4 = {
            x: 45,
            y: t,
            w: 320,
            h: 37
        }, this.guide.setPiece2 = {
            x: 20,
            y: t + 7,
            w: 345,
            h: 35
        }, t += 37, this.guide.setPiece = {
            x: 20,
            y: t + 7,
            w: 345,
            h: 35
        }) : (t = 172, this.guide.artifactType = {
            x: 20,
            y: t - 30,
            w: 270,
            h: 30
        }, this.guide.mainstat = {
            x: 24,
            y: t,
            w: 340,
            h: 56
        }, t += 56, this.guide.rarity = {
            x: 27,
            y: t + 10,
            w: 340,
            h: 35
        }, this._CTX.strokeRect(this.guide.rarity.x, this.guide.rarity.y, 30, this.guide.rarity.h), this._CTX.strokeRect(this.guide.rarity.x + 32, this.guide.rarity.y, 30, this.guide.rarity.h), this._CTX.strokeRect(this.guide.rarity.x + 64, this.guide.rarity.y, 30, this.guide.rarity.h), this._CTX.strokeRect(this.guide.rarity.x + 96, this.guide.rarity.y, 30, this.guide.rarity.h), this._CTX.strokeRect(this.guide.rarity.x + 128, this.guide.rarity.y, 30, this.guide.rarity.h), t += 50, this.guide.level = {
            x: 24,
            y: t + 2,
            w: 64,
            h: 34
        }, t += 36, this.guide.substat1 = {
            x: 45,
            y: t,
            w: 340,
            h: 42
        }, t += 42, this.guide.substat2 = {
            x: 45,
            y: t,
            w: 340,
            h: 35
        }, t += 35, this.guide.substat3 = {
            x: 45,
            y: t,
            w: 340,
            h: 35
        }, this.guide.setPiece3 = {
            x: 19,
            y: t,
            w: 345,
            h: 35
        }, t += 35, this.guide.substat4 = {
            x: 45,
            y: t,
            w: 340,
            h: 35
        }, this.guide.setPiece2 = {
            x: 19,
            y: t,
            w: 345,
            h: 35
        }, t += 35, this.guide.setPiece = {
            x: 19,
            y: t,
            w: 345,
            h: 35
        }), this.fzze(this.guide.rarity), this.DEBUG && (this.fzze(this.guide.mainstat), this.fzze(this.guide.artifactType), 1 != this.guideType && this.fzze(this.guide.mainstatValue), this.fzze(this.guide.rarity), this.fzze(this.guide.level, !0), this.fzze(this.guide.substat1, !0), this.fzze(this.guide.substat2, !0)), this.ssort()
    }
    fzze(t, e) {
        1 != this.guideType && e ? this._CTX.strokeStyle = "black" : this._CTX.strokeStyle = "white", this._CTX.strokeRect(t.x, t.y, t.w, t.h)
    }
    ssort() {
        let t = this.guide.rarity.y + 17.5,
            e = this.guide.rarity.x + 15,
            a = [this._CTX.getImageData(e, t, 1, 1).data, this._CTX.getImageData(e + 32, t, 1, 1).data, this._CTX.getImageData(e + 64, t, 1, 1).data, this._CTX.getImageData(e + 96, t, 1, 1).data, this._CTX.getImageData(e + 128, t, 1, 1).data],
            i = a[0],
            s = this._CTX.getImageData(this.guide.level.x - 15, this.guide.level.y + 17, 1, 1).data;
        if (236 == s[0] && 229 == s[1] && 216 == s[2]) {
            if (1 == this.guideType) return void(this.guideType = 0)
        } else if (1 != this.guideType) return void(this.guideType = 1);
        if (255 != i[0] || 204 != i[1] || 50 != i[2]) return $("#scanner").removeAttr("valid"), 0;
        $("#scanner").attr("valid", !0), this._CTX.strokeStyle = "rgb(0,255,0)", this._CTX.strokeRect(this.guide.rarity.x, this.guide.rarity.y, this.guide.rarity.w, this.guide.rarity.h);
        for (let n = 5; n > 0; n--)
            if (a[n - 1][0] == i[0] && a[n - 1][1] == i[1] && a[n - 1][2] == i[2]) return n
    }
    Processing(t, e) {
        let a = 0;
        switch (t.status) {
            case "loading tesseract core":
                a = 0;
                break;
            case "initializing tesseract":
                a = 20;
                break;
            case "initialized tesseract":
                a = 30;
                break;
            case "loading language traineddata":
                a = 40;
                break;
            case "loaded language traineddata":
                a = 50;
                break;
            case "initializing api":
                a = 60;
                break;
            case "initialized api":
                a = 70;
                break;
            case "recognizing text":
                a = 80 + 20 * t.progress
        }
        this.processing[e] = a, this.progress = Math.min(this.processing.mainstat, this.processing.level, this.processing.substat1, this.processing.substat2, this.processing.substat3, this.processing.substat4), $("#progressBar .graphFill").css("width", 200 * this.progress / 100), $("#progressBar .graphFillLabel").text(this.progress + "%")
    }
    dap(t) {
        switch (t) {
            case "Flower":
            case "Life":
                return "Flower";
            case "Plume":
            case "Death":
                return "Feather";
            case "Sands":
            case "Eon":
                return "Clock";
            case "Goblet":
            case "Eonothem":
                return "Goblet";
            case "Circlet":
            case "Logos":
                return "Circlet"
        }
    }
    async bloop(t) {
        let e = this.ssort(),
            a = this.gaifoo(),
            i = {
                artifactType: this.regai(this.guide.artifactType, a, !0),
                mainstat: this.regai(this.guide.mainstat, 1 == this.guideType ? a : this.gaifoo(!0), !0),
                level: this.regai(this.guide.level, a, !0),
                substat1: this.regai(this.guide.substat1, a, 1 == this.guideType),
                substat2: this.regai(this.guide.substat2, a, 1 == this.guideType),
                substat3: this.regai(this.guide.substat3, a, 1 == this.guideType),
                substat4: this.regai(this.guide.substat4, a, 1 == this.guideType),
                setPiece: this.regai(this.guide.setPiece, a, !1, 1 == this.guideType),
                setPiece2: this.regai(this.guide.setPiece2, a, !1, 1 == this.guideType),
                setPiece3: this.regai(this.guide.setPiece3, a, !1, 1 == this.guideType)
            };
        this.processing = {
            artifactType: 0,
            mainstat: 0,
            level: 0,
            substat1: 0,
            substat2: 0,
            substat3: 0,
            substat4: 0,
            setPiece: 0
        }, this.progress = 0, $("#scanner").css("cursor", "progress"), this.Toast("Scanning...");
        let s = [Tesseract.recognize(i.artifactType, "eng", {
            logger: t => _GUI.Processing(t, "artifactType")
        }), Tesseract.recognize(i.mainstat, "eng", {
            logger: t => _GUI.Processing(t, "mainstat")
        }), Tesseract.recognize(i.level, "eng", {
            logger: t => _GUI.Processing(t, "level")
        }), Tesseract.recognize(i.substat1, "eng", {
            logger: t => _GUI.Processing(t, "substat1")
        }), Tesseract.recognize(i.substat2, "eng", {
            logger: t => _GUI.Processing(t, "substat2")
        }), Tesseract.recognize(i.substat3, "eng", {
            logger: t => _GUI.Processing(t, "substat3")
        }), Tesseract.recognize(i.substat4, "eng", {
            logger: t => _GUI.Processing(t, "substat4")
        }), Tesseract.recognize(i.setPiece, "eng", {
            logger: t => _GUI.Processing(t, "setPiece")
        }), Tesseract.recognize(i.setPiece2, "eng", {
            logger: t => _GUI.Processing(t, "setPiece")
        }), Tesseract.recognize(i.setPiece3, "eng", {
            logger: t => _GUI.Processing(t, "setPiece")
        })];
        1 != this.guideType && s.push(Tesseract.recognize(this.regai(this.guide.mainstatValue, a, !0), "eng"));
        let [n, r, l, o, c, h, u, f, d, p, g] = await Promise.all(s);
        $("#progressBar .graphFill").css("width", 200), $("#progressBar .graphFillLabel").text("100%"), this.progress = -1, $("#scanner").css("cursor", "grab"), this.Toast("Finished Scanning..."), $("#cancelScan").text("Close"), $("#doScan").text("ReScan");
        let m = {
            artifactType: n.data.text,
            mainstat: r.data.text,
            level: l.data.text,
            substat1: o.data.text,
            substat2: c.data.text,
            substat3: h.data.text,
            substat4: u.data.text,
            setPiece: f.data.text,
            set2: d.data.text,
            set3: p.data.text,
            rarity: e
        };
        1 != this.guideType && (m.mainval = g.data.text), this.whoosh(m, t)
    }
    tasra(t, e) {
        let a, i = t.split(":")[0].trim().split(/\s+/),
            s = [];
        for (let n in i) "" != i[n] && (s = s.concat(e.Match(i[n], 3, [])));
        if (s.length > 0) {
            let t, e = {};
            for (let a in s)
                for (let t in ArtifactRarity) t.includes(s[a]) && (e[t] ? e[t]++ : e[t] = 1);
            let i = 0;
            for (let a in e) e[a] > i && (i = e[a], t = a);
            a = t
        }
        return a
    }
    whoosh(t, e) {
        this.DEBUG && console.log(t);
        let a, i = [];
        for (let G in ArtifactRarity) t.rarity != ArtifactRarity[G] && t.rarity != ArtifactRarity[G] - 1 || i.push(G);
        let s = t.rarity,
            n = new Trie(i),
            r = this.tasra(t.setPiece, n);
        if (r) a = r;
        else {
            let e = this.tasra(t.set2, n);
            if (!e && s < 5) {
                let e = this.tasra(t.set3, n);
                e && (a = e)
            } else a = e
        }
        this.DEBUG && console.log("Parsed Setpiece:" + a), a || (a = i[0]);
        let l, o = t.artifactType.split(/\s+/),
            c = {};
        for (let G in o) {
            let t = this.trieart.Match(o[G], 2, []);
            for (let e in t) {
                let a = this.dap(t[e]);
                a && a.length > 0 && (c[a] ? c[a]++ : c[a] = 1)
            }
        }
        let h = 0;
        for (let G in c) c[G] > h && (h = c[G], l = G);
        let u = l;
        this.DEBUG && console.log("Parsed Type:" + u);
        let f = -1,
            d = t.level.trim().split(/\s+/),
            p = -1;
        for (let G in d)
            if (d[G].includes("+")) {
                let t = d[G].split("+"),
                    e = parseInt(t[t.length - 1].replace("+", "").replace(/[oO]/, "0"));
                e > -1 && (f = e)
            } else {
                let t = parseInt(d[G]);
                t != NaN && (p = t)
            } - 1 == f && p > -1 && (f = p), this.DEBUG && console.log("Parsed Level:" + f);
        let g = [t.mainstat.includes("%") || t.mainstat.includes("."), t.substat1.includes("%"), t.substat2.includes("%"), t.substat3.includes("%"), t.substat4.includes("%")],
            m = [t.mainstat.split("+"), t.substat1.split("+"), t.substat2.split("+"), t.substat3.split("+"), t.substat4.split("+")];
        t.mainval && (g[0] = t.mainval.includes("%") || t.mainval.includes("."), m[0][1] = t.mainval), this.DEBUG && console.log(g), this.DEBUG && console.log(m);
        let v = [],
            S = [];
        for (let G in m) {
            let t = m[G][0].trim().split(/\s+/);
            v[G] = [], S[G] = [];
            for (let e in t) v[G] = v[G].concat(this.trieMe.Match(t[e], 2, [])), S[G] = S[G].concat(this.trietrieAgain.Match(t[e], 2, []))
        }
        let y = [{}, {}, {}, {}, {}];
        for (let G in v)
            if (v[G].length > 0) {
                y[G].statType = this.fdsa(v[G][0]);
                let t = g[G] || y[G].statType && -1 == "HP ATK DEF ElementalMastery".search(y[G].statType);
                if (0 == G && (t |= "HP" == y[G].statType && u && "Flower" != u, t |= "ATK" == y[G].statType && u && "Feather" != u), t) {
                    if ("HP ATK DEF".includes(y[G].statType) && (y[G].statType += "Percent"), m[G][1]) y[G].statModValue = parseFloat(m[G][1].replace("%", "")) / 100;
                    else if (0 == G) {
                        let t = m[G][0].trim().split(" ");
                        t.length > 1 && (y[G].statModValue = parseFloat(t[t.length - 1].replace("%", "")) / 100)
                    }
                } else if (m[G][1]) y[G].statModValue = parseInt(m[G][1].replaceAll(",", ""));
                else if (0 == G) {
                    let t = m[G][0].trim().split(" ");
                    t.length > 1 && (y[G].statModValue = parseInt(t[t.length - 1].replaceAll(",", "")))
                }
            } else if (S[G].includes("CRIT") && S[G].includes("DMG"))
            if (y[G].statType = "CritDMG", m[G][1]) y[G].statModValue = parseFloat(m[G][1].replace("%", "")) / 100;
            else {
                let t = m[G][0].match(/\d+\.\d+/);
                y[G].statModValue = parseFloat(t[0]) / 100
            }
        else S[G].length;
        let C = [];
        for (let G in y) y[G].statType && (C[G] = new StatModifier(y[G].statType, y[G].statModValue ?? 0));
        this.DEBUG && console.log(y);
        let b, _ = C[0];
        if (_) {
            if (y[0].statModValue && f > -1) {
                let t = MainStatRange[_.statType][s - 3][f];
                if (t != y[0].statModValue) {
                    let e = !1;
                    if (-1 != "HP ATK DEF".search(_.statType)) {
                        let t = !1;
                        for (let e = 1; e < 5; e++) y[e].statType == _.statType && (t = !0);
                        let a = MainStatRange[_.statType + "Percent"][s - 3][f];
                        (Math.abs(a - y[0].statModValue / 100) < .001 || t) && (_.statType += "Percent", _.statModValue = a, e = !0)
                    }!e && f > 0 && f <= 4 * s && (e = !0, _.statModValue = t)
                }
            } else if (y[0].statModValue && -1 == f) {
                let t = MainStatRange[_.statType][s - 3],
                    e = !1;
                for (let a in t) {
                    if (t[a] == y[0].statModValue) {
                        f = a, e = !0;
                        break
                    }
                    if (t[a] > 1 && Math.abs(t[a] - 10 * y[0].statModValue) < 10) {
                        f = a, e = !0;
                        break
                    }
                    if (-1 != "HP ATK DEF".search(_.statType)) {
                        let t = MainStatRange[_.statType + "Percent"][s - 3][a];
                        if (Math.abs(t - y[0].statModValue / 100) < .001) {
                            f = a, _.statType += "Percent", _.statModValue = t, e = !0;
                            break
                        }
                    }
                }
            }
            if (-1 != "HP ATK DEF".search(_.statType)) {
                let t = !1;
                for (let e = 1; e < 5; e++) y[e].statType == _.statType && (t = !0);
                t && (_.statType += "Percent")
            }
        } else console.log("Could not find mainstat"), _ = new StatModifier("ATK", 0);
        _ && _.statType && ("HP" == _.statType ? b = "Flower" : "ATK" == _.statType ? b = "Feather" : "EnergyRecharge" == _.statType ? b = "Clock" : _.statType.includes("DMG") && "CritDMG" != _.statType ? b = "Goblet" : (_.statType.includes("Crit") || "Heal" == _.statType) && (b = "Circlet")), !b && u ? b = u : b || u || (b = "Goblet");
        let T, A = [C[1], C[2], C[3], C[4]];
        T = new Artifact(b, _, a, null, A), T.setRarity(s), -1 != f && T.setLevel(f), this.FillArtifact(T, e)
    }
    fdsa(t) {
        switch (t) {
            case "Rate":
                return "CritRate";
            case "Energy":
            case "Recharge":
                return "EnergyRecharge";
            case "Elemental":
            case "Mastery":
                return "ElementalMastery";
            case "Pyro":
            case "Cyro":
            case "Dendro":
            case "Geo":
            case "Hydro":
            case "Electro":
            case "Anemo":
            case "Physical":
                return t + "DMG";
            case "Heal":
            case "HP":
            case "ATK":
            case "DEF":
                return t
        }
    }
    luagl(t, e) {
        t.includes("Rate"), t.includes("Energy"), t.includes("Recharge"), t.includes("Elemental"), t.includes("Mastery"), t.includes("Pyro"), t.includes("Cryo"), t.includes("Dendro"), t.includes("Geo"), t.includes("Hydro"), t.includes("Electro"), t.includes("Anemo"), t.includes("Physical"), t.includes("CRIT"), t.includes("DMG"), t.includes("HP"), t.includes("ATK"), t.includes("DEF"), t.includes("Bonus")
    }
    regai(t, e, a, i) {
        let s = this.fooda(this._CTX.getImageData(t.x, t.y, t.w, t.h), e, a, i),
            n = document.createElement("canvas");
        n.width = t.w, n.height = t.h;
        let r = n.getContext("2d"),
            l = r.createImageData(t.w, t.h);
        return l.data.set(s.data), r.putImageData(l, 0, 0), this.DEBUG && this._CTX.putImageData(l, t.x, t.y), n.toDataURL()
    }
    gaifoo(t) {
        let e = 163,
            a = 17.5,
            i = 100,
            s = 5;
        t && (e = -14, a = 0, i = 10, s = 30);
        let n = this._CTX.getImageData(this.guide.rarity.x + e, this.guide.rarity.y + a, i, s).data,
            r = 0,
            l = 0,
            o = 0;
        for (let c = 0; c < n.length / 4; c++) {
            let t = 4 * c;
            r += n[t], l += n[t + 1], o += n[t + 2]
        }
        return r /= n.length / 4, l /= n.length / 4, o /= n.length / 4, {
            r: r,
            g: l,
            b: o
        }
    }
    fooda(t, e, a, i) {
        let s = Uint8ClampedArray.from(t.data);
        for (let n = 0; n < s.length / 4; n++) {
            let t = 4 * n,
                r = Math.max(s[t], s[t + 1], s[t + 2]),
                l = Math.min(s[t], s[t + 1], s[t + 2]);
            s[t] -= e.r - (i ? 2 * l : l - r), s[t + 1] -= e.g - (i ? 2 * l : l - r), s[t + 2] -= e.b - (i ? 2 * l : l - r), i && (s[t] = 255 - s[t], s[t + 1] = 255 - s[t + 1], s[t + 2] = 255 - s[t + 2]);
            let o = a ? 0 : 255,
                c = a ? 255 : 0;
            s[t] > 0 && s[t + 1] > 0 && s[t + 2] > 0 ? (s[t] = o, s[t + 1] = o, s[t + 2] = o) : (s[t] = c, s[t + 1] = c, s[t + 2] = c)
        }
        return new ImageData(s, t.width, t.height)
    }
    redraw() {
        this._CTX.clearRect(0, 0, this.buffer.width, this.buffer.height), this._CTX.drawImage(this.imageData, this.imagePos.x, this.imagePos.y, this.imageData.width, this.imageData.height), this.bordr()
    }
    InitArtifactDesigner() {
        this.buffer = document.getElementById("buffer"), buffer.width = this.bwidth, buffer.height = this.bheight, this._CTX = buffer.getContext("2d"), $("body").click(this.Click), $("body").contextmenu(this.ContextMenu), $("body").on("dragover", (function(t) {
            t.preventDefault(), t.stopPropagation()
        })), $("body").on("dragleave", (function(t) {
            t.preventDefault(), t.stopPropagation()
        })), $("body").on("drop", (function(t) {
            t.preventDefault(), t.stopPropagation()
        })), $("body").on("paste", (function(t) {
            let e = t.originalEvent.clipboardData.items[0].getAsFile() ?? t.originalEvent.clipboardData.items[1].getAsFile();
            e && "image/png" == e.type && _GUI.OCR([e], _GUI.persist[0] ? 1 : 0)
        }));
        let t = "";
        for (let a in ArtifactList) t += genTag("option", {
            value: a
        }, a);

        function e(t) {
            return div({
                "class": "artifactDisplayHeader"
            }, div({
                "class": "artifactDisplayBtn",
                id: "saveAsArtifact",
                container: t
            }, "Save As") + div({
                "class": "artifactDisplayBtn",
                id: "saveArtifact",
                container: t
            }, "Save") + div({
                "class": "artifactDisplayBtn",
                id: "clearArtifact",
                container: t
            }, "Clear")) + div({
                "class": "artifactSaveNameDisplay"
            })
        }
        $("#Container0").html(GUIControl.GenArtifactSelect("Container0", t, GUIControl.GenMainStatSelect("Container0", {}), !0)), $("#Container1").html(GUIControl.GenArtifactSelect("Container1", t, GUIControl.GenMainStatSelect("Container1", {}), !0)), $("#Container0").prepend(e("Container0")), $("#Container1").prepend(e("Container1")), $("#Container0").hide(), $("#Container1").hide(), this.FillSavedArtifacts(), $("#saveOffset").on("click", (function(t) {
            _GUI.savePos = _GUI.imagePos, localStorage.setItem("savePosX", _GUI.savePos.x), localStorage.setItem("savePosY", _GUI.savePos.y)
        })), $("#resetOffset").on("click", (function(t) {
            _GUI.imagePos = {
                x: 0,
                y: 0
            }, _GUI.savePos = _GUI.imagePos, _GUI.redraw()
        })), $("#cancelScan").on("click", (function(t) {
            $("#scanner").hide()
        })), $("#doScan").on("click", (function(t) {
            _GUI.bloop(parseInt($(this).attr("for").replace("Container", "")))
        })), $(".fileLabel").on("drop", (function(t) {
            return console.log(t.originalEvent.dataTransfer.files), _GUI.OCR(t.originalEvent.dataTransfer.files, $(this).attr("for").replace("artifactFile", "")), !1
        })), $("#buffer").on("mousewheel wheel", (function(t) {
            let e = _GUI.imageData.width / _GUI.imageData.height;
            return t.originalEvent.wheelDelta ? _GUI.imageData.height += t.originalEvent.wheelDelta / 30 : _GUI.imageData.height += 7 * t.originalEvent.deltaY, _GUI.imageData.width = e * _GUI.imageData.height, _GUI.redraw(), !1
        })), $("#buffer").on("mousedown touchstart", (function(t) {
            if (_GUI.progress < 0) {
                $("#scanner").css("cursor", "grabbing"), _GUI.dragging = !0;
                let e = "touchstart" == t.type,
                    a = e ? t.touches[0].clientX : t.clientX,
                    i = e ? t.touches[0].clientY : t.clientY;
                return _GUI.dragLoc = {
                    x: a - _GUI.imagePos.x,
                    y: i - _GUI.imagePos.y
                }, !1
            }
        })), $("body").on("mouseup touchend", (function(t) {
            _GUI.dragging && ($("#scanner").css("cursor", "grab"), _GUI.dragging = !1)
        })), $("body").on("mousemove touchmove", (function(t) {
            let e = "touchmove" == t.type,
                a = e ? t.touches[0].clientX : t.clientX,
                i = e ? t.touches[0].clientY : t.clientY;
            _GUI.dragging && (_GUI.imagePos = {
                x: a - _GUI.dragLoc.x,
                y: i - _GUI.dragLoc.y
            }, _GUI.redraw())
        })), $(".savedArtifacts").on("contextmenu", ".savedArtifactRowHeader", (function(t) {
            $("#contextMenuContainer").show(), $("#contextMenuContainer").position({
                my: "left top",
                of: t,
                collision: "fit"
            });
            let e = div({
                "class": "contextMenuItem",
                id: "deleteCheckedArtifacts"
            }, "Delete Checked Artifacts");
            return $("#contextMenuContainer").html(e), !1
        })), $("#contextMenuContainer").on("click", "#deleteCheckedArtifacts", (function(t) {
            $(".selected > input:checked").each((function(t) {
                let e = $(this).attr("artifactsavename");
                console.log(e), _GUI.DeleteSave(e)
            }))
        })), $(".savedArtifacts").on("click", ".savedArtifact", (function(t) {
            let e = $(this).attr("savename");
            if (!_GUI.persist[0] || !_GUI.persist[1]) {
                let t = _GUI.persist[0] ? 1 : 0;
                _GUI.LoadSavedArtifact(e, t)
            }
        })), $(".savedArtifacts").on("mouseenter", ".savedArtifact", (function(t) {
            _GUI.persist[0] || _GUI.ClearContainer("Container0"), _GUI.persist[1] || _GUI.ClearContainer("Container1");
            let e = $(this).attr("savename");
            _GUI.DisplayArtifact(_GUI._SaveData.Saves[e]), $("#artifactPopupDisplay").show(), $("#artifactPopupDisplay").position({
                my: "left top",
                of: t,
                collision: "fit"
            })
        })), $(".savedArtifacts").on("mouseleave", ".savedArtifact", (function(t) {
            $("#artifactPopupDisplay").hide()
        })), $("#contextMenuContainer").on("click", "#copyArtifact", (function(t) {
            let e = $(this).attr("name");
            _GUI.CopySave(e)
        })), $("#contextMenuContainer").on("click", "#deleteArtifact", (function(t) {
            let e = $(this).attr("name");
            _GUI.DeleteSave(e)
        })), $(".savedArtifacts").on("contextmenu", ".savedArtifact", (function(t) {
            let e = $(this).attr("savename");
            $("#contextMenuContainer").show(), $("#contextMenuContainer").position({
                my: "left top",
                of: t,
                collision: "fit"
            });
            let a = div({
                "class": "contextMenuItem",
                id: "copyArtifact",
                name: e
            }, "Copy Artifact");
            return a += div({
                "class": "contextMenuItem",
                id: "deleteArtifact",
                name: e
            }, "Delete Artifact"), $("#contextMenuContainer").html(a), !1
        })), $("#saveButton").on("click", (function(t) {
            let e = parseInt($(this).attr("idx"));
            _GUI._SaveName[e] = $("#saveNameInput").val(), _GUI.DoSave(e), $("#saveMenu").hide()
        })), $("#saveMenu").on("click", ".closeSaveMenu", (function(t) {
            $("#saveMenu").hide()
        })), $(".artifactButton").on("click", (function(t) {
            $("#contextMenuContainer").show(), $("#contextMenuContainer").position({
                my: "left top",
                of: t,
                collision: "fit"
            });
            let e = $(this).parent("div").parent("div").attr("id"),
                a = div({
                    "class": "contextMenuItem",
                    btnEffect: "changeTo",
                    aType: "Flower",
                    container: e
                }, "Flower");
            return a += div({
                "class": "contextMenuItem",
                btnEffect: "changeTo",
                aType: "Feather",
                container: e
            }, "Plume"), a += div({
                "class": "contextMenuItem",
                btnEffect: "changeTo",
                aType: "Clock",
                container: e
            }, "Sands"), a += div({
                "class": "contextMenuItem",
                btnEffect: "changeTo",
                aType: "Goblet",
                container: e
            }, "Goblet"), a += div({
                "class": "contextMenuItem",
                btnEffect: "changeTo",
                aType: "Circlet",
                container: e
            }, "Circlet"), $("#contextMenuContainer").html(a), !1
        })), $("#contextMenuContainer").on("click", ".contextMenuItem[btneffect='changeTo']", (function(t) {
            let e = $(this).attr("container"),
                a = $(this).attr("aType");
            _GUI.SetArtifactType(e, a), console.log(a)
        })), $(".artifactDisplayBtn").on("click", (function(t) {
            let e = $(this).attr("container");
            switch ($(this).attr("id")) {
                case "saveArtifact":
                    _GUI.TrySaveContainer(e);
                    break;
                case "saveAsArtifact":
                    _GUI.TrySaveContainer(e, !0);
                    break;
                case "clearArtifact":
                    _GUI.ClearContainer(e)
            }
        })), $(".newArtifactBtn").on("click", (function(t) {
            let e = $(this).attr("id").replace("NewBtn", "");
            if (t.target.className.includes("fileLabel") || t.target.className.includes("hideMe")) return !0;
            _GUI.CreateNewArtifact(e)
        })), $(".artifactTypeButton").on("click", (function(t) {
            $(".artifactTypeButton").removeAttr("active"), $(this).attr("active", "true"), _GUI.ChangeArtifactType($(this).attr("icon"))
        })), $("select").on("change", (function(t) {
            UpdateMinMaxRange(this)
        })), $("input[type=range]").on("change", (function(t) {
            UpdateRangeLabel(this)
        })), $("input.rangeEntry").on("change", (function(t) {
            let e = $('input[name="' + $(this).attr("name").replace("Input", "") + '"]');
            if ("." == $(this)[0].value.slice(-1)) return;
            let a = LocaleParseFloat($(this)[0].value) / ("true" == $(e).attr("percent") ? 100 : 1);
            0 == a ? $(this).css("color", "rgba(255,255,255,.3)") : $(this).css("color", "white"), $(e).val(a).trigger("change"), $(this).next("label").val(a)
        }))
    }
    SetArtifactType(t, e) {
        let a = parseInt(t.replace("Container", ""));
        this._Container[a].ChangeArtifactType(e), this.FillArtifact(this._Container[a], a, this._SaveName[a])
    }
    SetArtifactLevel(t, e) {
        let a = parseInt(t.replace("Container", ""));
        this._Container[a].setLevel(e), this.UpdateArtifactMainStatValue(t)
    }
    SetArtifactMainStatType(t, e) {
        let a = parseInt(t.replace("Container", ""));
        this._Container[a].setMainstatType(e), this.UpdateArtifactMainStatValue(t), this.ValidateArtifactSubstats(a)
    }
    SetArtifactSetPiece(t, e) {
        let a = parseInt(t.replace("Container", ""));
        this._Container[a].modifySet(e), this.UpdateArtifactRarityLimit(t)
    }
    SetArtifactSubstat(t, e, a, i) {
        let s = parseInt(t.replace("Container", ""));
        this._Container[s].subStats[i].statType = e, this._Container[s].subStats[i].statModValue = a, this.ValidateArtifactSubstats(s)
    }
    SetArtifactRarity(t, e) {
        let a = parseInt(t.replace("Container", ""));
        this._Container[a].setRarity(e), this.UpdateArtifactLevelLimit(t), this.UpdateArtifactInitialSubstats(t)
    }
    SetArtifactInitialSubstatValue(t, e) {
        let a = parseInt(t.replace("Container", ""));
        this._Container[a].setStartingSubstats(e)
    }
    SetMax(t) {
        let e = parseInt(t.replace("Container", ""));
        _GUI._Container[e].setMax(), _GUI.UpdateArtifactRarityLimit(t)
    }
    UpdateArtifactInitialSubstats(t) {
        let e = parseInt(t.replace("Container", ""));
        $("#" + t + "InitSubstatValue").attr("min", this._Container[e].minSubstat), $("#" + t + "InitSubstatValue").attr("max", this._Container[e].minSubstat + 1), $("#" + t + "InitSubstatValue").val(this._Container[e].startingSubstats)
    }
    UpdateArtifactLevelLimit(t) {
        let e = parseInt(t.replace("Container", ""));
        $("input[name='" + t + "Level']").attr("max", this._Container[e].maxLevel), $("input[name='" + t + "Level']").val(this._Container[e].level), this.UpdateArtifactMainStatValue(t)
    }
    UpdateArtifactRarityLimit(t) {
        let e = parseInt(t.replace("Container", "")),
            a = this._Container[e].maxRarity;
        for (let i = 1; i <= 5; i++) i == a || i == a - 1 && i >= 3 ? ($("#" + t + "Rarity" + i).removeAttr("disabled"), $("label[for='" + t + "Rarity" + i + "']").removeAttr("disable")) : ($("#" + t + "Rarity" + i).attr("disabled", "true"), i > a && $("label[for='" + t + "Rarity" + i + "']").attr("disable", "true"));
        $("#" + t + "Rarity" + this._Container[e].rarity).prop("checked", !0), this.UpdateArtifactLevelLimit(t), this.UpdateArtifactInitialSubstats(t)
    }
    UpdateArtifactMainStatValue(t) {
        let e = parseInt(t.replace("Container", "")),
            a = this._Container[e].mainStat.statType,
            i = !("ElementalMastery" == a || "HP" == a || "HP" == a || "ATK" == a);
        $("#" + t + "MainStatValue").text(FormatStat(this._Container[e].mainStat.statModValue, i))
    }
    AppendSavedArtifact(t) {
        let e = $(this.GenSavedArtifact(t)).appendTo(".savedArtifacts");
        e.find(".rarity").attr("value", t.artifact.rarity), e.find(".setPiece").attr("rarity", ArtifactRarity[t.artifact.setPiece]);
        let a = t.artifact.mainStat.statType; - 1 != a.search("DMG") && "CritDMG" != a ? e.find(".mainType").attr("element", a) : -1 != a.search("ATK") || -1 != a.search("Mastery") ? e.find(".mainType").attr("element", "offense") : e.find(".mainType").attr("element", "defense")
    }
    GenSavedArtifact(t) {
        let e = t.artifact,
            a = -1 == "HP ATK DEF ElementalMastery".search(e.mainStat.statType),
            i = t.name;
        return tr({
            "class": "savedArtifact",
            saveName: i
        }, {
            upgradeVal: "+" + e.level,
            rarity: e.rarity,
            saveName: i,
            mainType: e.mainStat.statType.replace("Percent", " %").replace("ElementalMastery", "Elem Mastery"),
            mainVal: FormatStat(e.mainStat.statModValue, a),
            setPiece: e.setPiece,
            selected: genTag("input", {
                type: "checkbox",
                artifactSaveName: i
            })
        })
    }
    GetMainStatOptions(t) {
        let e, a = {
            "HP %": "HPPercent",
            "ATK %": "ATKPercent",
            "DEF %": "DEFPercent",
            "Elemental Mastery": "ElementalMastery"
        };
        switch (t) {
            case "Flower":
                e = {
                    HP: "HP"
                };
                break;
            case "Feather":
                e = {
                    ATK: "ATK"
                };
                break;
            case "Clock":
                e = Object.assign({
                    "Energy Recharge": "EnergyRecharge"
                }, a);
                break;
            case "Goblet":
                e = Object.assign({
                    "Pyro Damage": "PyroDMG",
                    "Hydro Damage": "HydroDMG",
                    "Dendro Damage": "DendroDMG",
                    "Electro Damage": "ElectroDMG",
                    "Anemo Damage": "AnemoDMG",
                    "Cryo Damage": "CryoDMG",
                    "Geo Damage": "GeoDMG",
                    "Physical Damage": "PhysicalDMG"
                }, a);
                break;
            case "Circlet":
                e = Object.assign({
                    "Critical Rate": "CritRate",
                    "Critical Damage": "CritDMG",
                    "Healing Bonus": "Heal"
                }, a)
        }
        return e
    }
    ValidateArtifactSubstats(t) {
        let e = this._Container[t].Validate(!0);
        e.length > 0 ? (this.Toast("Invalid Substat at:" + e), $("#Container" + t).css("box-shadow", "inset 0 0 10px rgba(255,0,0,1)")) : $("#Container" + t).css("box-shadow", "")
    }
    FillArtifact(t, e, a = null) {
        $("#NewBtn" + e).hide(), this._Container[e] = t, this.ValidateArtifactSubstats(e), this._SaveName[e] = a;
        let i = "Container" + e;
        this.persist[e] = !0;
        let s = this.GetMainStatOptions(t.artifactType);
        $("#" + i).show(), a && $("#" + i + " .artifactSaveNameDisplay").text("Name: " + a), $("#" + i + "MainStatSelect").html(genOptions(s)), $("#" + i + "MainStatSelect").val(t.mainStat.statType), $("#" + i + " .icon").attr("icon", t.artifactType), $("input[name='" + i + "Level']").val(t.level), $("#" + i + "Rarity" + t.rarity).prop("checked", !0), $("#" + i + "SetSelect").val(t.setPiece).trigger("change");
        for (let n = 0; n < 4; n++) $("#" + i + "Substat" + (n + 1) + "Select").val(t.subStats[n].statType), UpdateMinMaxRange("#" + i + "Substat" + (n + 1) + "Select", !0), $("input[name='" + i + "Substat" + (n + 1) + "Value']").val(t.subStats[n].statModValue).trigger("change"), $("input[name='" + i + "Substat" + (n + 1) + "ValueInput']").trigger("change")
    }
    DisplayArtifact(t, e) {
        let a = t.name,
            i = t.artifact,
            s = -1 == "HP DEF ATK ElementalMastery".search(i.mainStat.statType),
            n = div({
                "class": "artifactDisplayTitle",
                rarity: i.rarity
            }, div({
                "class": "saveName"
            }, a));

        function r(t) {
            let e = genTag("input", {
                type: "radio",
                "class": "raritySelectInput",
                value: t
            });
            return e += label(), e
        }
        n += div({
            "class": "artifactDisplayTop",
            rarity: i.rarity
        }, div({
            "class": "artifactDisplayLeft"
        }, div({
            "class": "arttype"
        }, i.artifactType) + div({
            "class": "artifactDisplayBottom"
        }, div({
            "class": "artmaintype"
        }, i.mainStat.statType.replace("Percent", "")) + div({
            "class": "artmainval"
        }, FormatStat(i.mainStat.statModValue, s)) + div({
            "class": "rarityContainer"
        }, (5 == i.rarity ? r(5) : "") + (i.rarity >= 4 ? r(4) : "") + (i.rarity >= 3 ? r(3) : "") + (i.rarity >= 2 ? r(2) : "") + r(1)))) + div({
            "class": "artthumb"
        }, div({
            "class": "artifactDisplayIcon",
            icon: i.artifactType
        }))), n += div({
            "class": "artifactDisplayBottom artbot"
        }, div({
            "class": "artlevel"
        }, "+" + i.level) + function(t) {
            let e = "";
            for (let a in t) {
                let i = t[a],
                    s = -1 == "HP DEF ATK ElementalMastery".search(i.statType);
                i.statModValue > 0 && (e += genTag("li", {
                    "class": "artsubstat"
                }, i.statType.replace("Percent", "") + "+" + FormatStat(i.statModValue, s)))
            }
            return e
        }(i.subStats) + div({
            "class": "artset"
        }, i.setPiece) + (e ? div({
            "class": "artinfo"
        }, function(t) {
            let e = t.totalValue - t.currentValue,
                a = e / t.currentValue,
                i = div({
                    style: "color:rgba(0,0,0,.5);"
                }, "Optimize For:" + div({
                    style: "color:rgb(20,196,20);"
                }, "&emsp;" + t.target + ":"));
            return i += div({}, span({}, FormatStat(t.totalValue)) + " " + span({
                negative: e < 0
            }, "[ " + (e < 0 ? "" : "+") + FormatStat(e) + " " + span({}, "(" + (e < 0 ? "" : "+") + FormatStat(a, !0) + ")") + " ]")), i
        }(e)) : "")), $("#artifactPopupDisplay").html(n), $("#artifactPopupDisplay").find(".rarityContainer").find("input[value='" + i.rarity + "']").prop("checked", !0)
    }
}
class CharacterStats {
    constructor(t, e, a, i) {
        this.characterName = t, this.EnemyRef = i, this.level, this.talentsLevel = {
            Normal: 0,
            Skill: 0,
            Burst: 0
        }, this.isAscended, this.baseCharStats, this.charSubStat, this.cLevel = 0, this.hasPassive0 = !1, this.hasPassive1 = !1, this.scalingBuffs = [];
        let s = CharacterList[t];
        this.characterData = s, this.setLevel(1), this.setNormalTalentLevel(0), this.characterWeaponType = s.weaponType, this.comboTime = s.comboTime, this.element = s.element;
        let n = TalentList[t];
        this.talentData = n, this.burst = n.burst, this.passives = n.passives, this.hasPassive2 = !(this.passives[2] == undefined), this.skill = n.skill, this.constellations = n.constellations, this.extras = n.extras, this.talentFlags = {
            PassiveToggle: [!1, !1, !1],
            ConstellationToggle: [!1, !1, !1, !1, !1, !1],
            BurstToggle: !1,
            SkillToggle: !1,
            PassiveStacks: [0, 0, 0],
            ConstellationStacks: [0, 0, 0, 0, 0, 0],
            BurstStacks: 0,
            SkillStacks: 0
        }, this.skillBuff = [], this.burstBuff = [], this.manualBuffs = [], this.Artifacts = e ?? new ArtifactContainer, this.partyBuffs = a ?? new PartyContainer, this.Weapon, this.DebuffsToApply, this.temp = {}
    }
    ReloadCharacter() {
        Object.setPrototypeOf(this.Weapon, Weapon.prototype), Object.setPrototypeOf(this.Artifacts, ArtifactContainer.prototype), Object.setPrototypeOf(this.partyBuffs, PartyContainer.prototype), this.Artifacts.ReloadArtifacts(), this.Weapon.ReloadWeapon(), this.characterData = CharacterList[this.characterName], this.setLevel((this.isAscended ? -1 : 1) * this.level), this.setNormalTalentLevel(this.talentsLevel.Normal);
        let t = TalentList[this.characterName];
        this.talentData = t, this.burst = t.burst, this.passives = t.passives, this.hasPassive2 = !(this.passives[2] == undefined), this.skill = t.skill, this.constellations = t.constellations, this.extras = t.extras
    }
    Save() {
        this.Artifacts._unhookAll();
        let t = this.manualBuffs,
            e = this.EnemyRef;
        this.manualBuffs = [], this.EnemyRef = undefined;
        let a = SafeStringify(this);
        return this.manualBuffs = t, this.EnemyRef = e, this.Artifacts._hookAll(), a
    }
    get HP() {
        return this.totalStats.stats.HP
    }
    get ATK() {
        return this.totalStats.stats.ATK
    }
    get DEF() {
        return this.totalStats.stats.DEF
    }
    get EnergyRecharge() {
        return this.totalStats.stats.EnergyRecharge
    }
    get Heal() {
        return this.totalStats.stats.Heal
    }
    get PowerfulShield() {
        return this.totalStats.stats.PowerfulShield
    }
    get NormalAttackDMG() {
        return this.totalStats.stats.NormalAttackDMG
    }
    get ElementalSkillDMG() {
        return this.totalStats.stats.ElementalSkillDMG
    }
    get ElementalBurstDMG() {
        return this.totalStats.stats.ElementalBurstDMG
    }
    get AllDMG() {
        return this.totalStats.stats.AllDMG
    }
    get AttackSpeed() {
        return this.totalStats.stats.AttackSpeed
    }
    get sLvl() {
        return this.talentsLevel.Skill
    }
    get bLvl() {
        return this.talentsLevel.Burst
    }
    get ElementalMastery() {
        return this.totalStats.stats.ElementalMastery
    }
    setLevel(t) {
        let e;
        switch (this.isAscended = t < 0, this.level = Math.abs(t), this.hasPassive0 = !1, this.hasPassive1 = !1, this.level > 20 && (this.hasPassive0 = !0), this.level > 60 && (this.hasPassive1 = !0), this.level) {
            case 1:
                e = 0;
                break;
            case 10:
                e = 1;
                break;
            case 20:
                e = 1 + (this.isAscended ? 1 : 0), this.hasPassive0 = this.isAscended;
                break;
            case 30:
                e = 3;
                break;
            case 40:
                e = 3 + (this.isAscended ? 1 : 0);
                break;
            case 50:
                e = 5 + (this.isAscended ? 1 : 0);
                break;
            case 60:
                e = 7 + (this.isAscended ? 1 : 0), this.hasPassive1 = this.isAscended;
                break;
            case 70:
                e = 9 + (this.isAscended ? 1 : 0);
                break;
            case 80:
                e = 11 + (this.isAscended ? 1 : 0);
                break;
            case 90:
            default:
                e = 13
        }
        this.baseCharStats = new Stats(this.characterData.baseStats[e][0], this.characterData.baseStats[e][1], this.characterData.baseStats[e][2]), this.charSubStat = new StatModifier(this.characterData.substatType, this.characterData.substatValue[e])
    }
    setNormalTalentLevel(t) {
        this.talentsLevel.Normal = t;
        let e = TalentData[this.characterName];
        this.hitMultiplier = [e["Hit-1"]?.[t] ?? 0, e["Hit-2"]?.[t] ?? 0, e["Hit-3"]?.[t] ?? 0, e["Hit-4"]?.[t] ?? 0, e["Hit-5"]?.[t] ?? 0, e["Hit-6"]?.[t] ?? 0], this.charge1 = e.charge1?.[t] ?? 0, this.charge2 = e.charge2?.[t] ?? 0, this.plunge = e["Plunge DMG"]?.[t] ?? 0, this.lowPlunge = e["Low Plunge DMG"]?.[t] ?? 0, this.highPlunge = e["High Plunge DMG"]?.[t] ?? 0, this.HitCount = e.HitCount ?? [0 != this.hitMultiplier[0] ? 1 : 0, 0 != this.hitMultiplier[1] ? 1 : 0, 0 != this.hitMultiplier[2] ? 1 : 0, 0 != this.hitMultiplier[3] ? 1 : 0, 0 != this.hitMultiplier[4] ? 1 : 0, 0 != this.hitMultiplier[5] ? 1 : 0], this.totalHits = 0;
        for (let a in this.HitCount) this.totalHits += this.HitCount[a]
    }
    setSkillTalentLevel(t) {
        this.talentsLevel.Skill = t;
        TalentData[this.characterName]
    }
    setBurstTalentLevel(t) {
        this.talentsLevel.Burst = t;
        TalentData[this.characterName]
    }
    sVal(t) {
        let e = -1 == t.search(" Flat");
        return TalentData[this.characterName][t][this.sLvl] / (e ? 100 : 1)
    }
    bVal(t) {
        let e = -1 == t.search(" Flat");
        return TalentData[this.characterName][t][this.bLvl] / (e ? 100 : 1)
    }
    nVal(t) {
        let e = -1 == t.search(" Flat");
        return TalentData[this.characterName][t][this.talentsLevel.Normal] / (e ? 100 : 1)
    }
    equipWeapon(t) {
        this.Weapon = t
    }
    assignArtifacts(t) {
        this.Artifacts = t
    }
    equipArtifact(t) {
        this.Artifacts.equipArtifact(t)
    }
    getArtifact(t) {
        return this.Artifacts.artifacts[t]
    }
    getStats(t) {
        this.calcBaseStats(), this.calcModifiers(t), this.modStats = new Stats(this.modifiers.mods.HP + this.modifiers.mods.HPPercent * this.baseStats.stats.HP, this.modifiers.mods.ATK + this.modifiers.mods.ATKPercent * this.baseStats.stats.ATK, this.modifiers.mods.DEF + this.modifiers.mods.DEFPercent * this.baseStats.stats.DEF, !1);
        for (let a in this.modifiers.mods) "ATK" != a && "HP" != a && "DEF" != a && "ATKPercent" != a && "HPPercent" != a && "DEFPercent" != a && (this.modStats.stats[a] ? this.modStats.stats[a] += this.modifiers.mods[a] : this.modStats.stats[a] = this.modifiers.mods[a]);
        let e = new Stats(0, 0, 0, !1);
        for (let a in StatTypes) {
            let t = StatTypes[a];
            e.stats[t] = (this.baseStats.stats[t] ?? 0) + (this.modStats.stats[t] ?? 0)
        }
        for (let a in StatModTypes) {
            let t = StatModTypes[a];
            e.stats[t] = (this.baseStats.stats[t] ?? 0) + (this.modStats.stats[t] ?? 0)
        }
        return this.totalStats = e, [this.baseStats, this.modifiers, this.modStats]
    }
    getBuffedStats(t) {
        let e = {};
        for (let a in this.totalStats.stats) e[a] = this.totalStats.stats[a];
        for (let a in t) {
            let i = t[a].statType;
            if ("ATKPercent" == a || "HPPercent" == a || "DEFPercent" == a) switch (a) {
                case "ATKPercent":
                    e[i] += t[a].statModValue * this.baseStats.stats.ATK;
                    break;
                case "HPPercent":
                    e[i] += t[a].statModValue * this.baseStats.stats.HP;
                    break;
                case "DEFPercent":
                    e[i] += t[a].statModValue * this.baseStats.stats.DEF
            } else e[i] ? e[i] += t[a].statModValue : e[i] = t[a].statModValue
        }
        return e
    }
    calcBaseStats() {
        this.baseStats = new Stats(this.baseCharStats.stats.HP, this.baseCharStats.stats.ATK + this.Weapon.GetAttack(), this.baseCharStats.stats.DEF)
    }
    calcModifiers(t) {
        this.scalingBuffs = [], this.modifiers = new ModsContainer(this.charSubStat), this.modifiers.addMod(this.Weapon.GetSubStat()), this.modifiers.addMod(this.Weapon.GetBuffs(this)), this.modifiers.addMod(this.Artifacts.GetBuffs(this, this.EnemyRef)), this.modifiers.addMod(this.partyBuffs.GetBuffs()), this.modifiers.addMod(this.getTalentBuffs()), this.skillBuff = this.skillBuff.concat(this.Weapon.GetSkillBuffs()), this.burstBuff = this.burstBuff.concat(this.Weapon.GetBurstBuffs()), this.modifiers.addMod(this.manualBuffs), t && this.modifiers.addMod(t);
        for (let e in this.scalingBuffs) {
            let t = this.scalingBuffs[e].from(this),
                a = this.baseStats.stats[t.statType] + this.modifiers.mods[t.statType];
            if ("HP" != t.statType && "ATK" != t.statType && "DEF" != t.statType || (a += this.modifiers.mods[t.statType + "Percent"] * this.baseStats.stats[t.statType]), this.scalingBuffs[e].minThreshold) {
                if (this.scalingBuffs[e].minThreshold > a) continue;
                a -= this.scalingBuffs[e].minThreshold
            }
            let i = a * t.statModValue;
            this.scalingBuffs[e].maximum && (i = Math.min(this.scalingBuffs[e].maximum(this), i));
            let s = this.scalingBuffs[e].to;
            switch (s.statModValue = i, this.scalingBuffs[e]["for"]) {
                case "skill":
                    this.skillBuff = this.skillBuff.concat(s);
                    break;
                case "burst":
                    this.burstBuff = this.burstBuff.concat(s);
                    break;
                case "extras":
                    this.extrasBuff = this.extrasBuff.concat(s);
                    break;
                case "normal":
                    this.normalBuff = this.normalBuff.concat(s);
                    break;
                default:
                    this.modifiers.addMod(s)
            }
        }
    }
    getTalentBuffs() {
        this.calcStats = {
            damage: [],
            value: []
        }, this.skillDamage = [], this.burstDamage = [], this.skillBuff = [], this.burstBuff = [], this.extrasBuff = [], this.normalBuff = [], this.DebuffsToApply = new DebuffContainer;
        let t = [];
        for (let e in this.passives) this["hasPassive" + e] ? t = t.concat(this.extractBuffs(this.passives[e], this.talentFlags.PassiveToggle[e], this.talentFlags.PassiveStacks[e])) : (this.talentFlags.PassiveToggle[e] = !1, this.talentFlags.PassiveStacks[e] = 0);
        for (let e = 0; e <= 6; e++) e < this.cLevel ? t = t.concat(this.extractBuffs(this.constellations[e], this.talentFlags.ConstellationToggle[e], this.talentFlags.ConstellationStacks[e])) : (this.talentFlags.ConstellationToggle[e] = !1, this.talentFlags.ConstellationStacks[e] = 0);
        return this.extras && (t = t.concat(this.extractBuffs(this.extras, !1, 0))), t = t.concat(this.extractBuffs(this.skill, this.talentFlags.SkillToggle, this.talentFlags.SkillStacks, !0, !1)), t = t.concat(this.extractBuffs(this.burst, this.talentFlags.BurstToggle, this.talentFlags.BurstStacks, !1, !0)), t
    }
    extractBuffs(t, e, a, i, s) {
        let n = [];
        if (t.effect && (n = "function" == typeof t.effect ? n.concat(t.effect(this)) : n.concat(t.effect)), t.stack)
            if ("function" == typeof t.stack) {
                var r = t.stack(this);
                for (let t in r) n.push(r[t].multiply(a))
            } else
                for (let l in t.stack) n.push(t.stack[l].multiply(a));
        if (t.stack_scale && this.scalingBuffs.push({
                to: t.stack_scale.to,
                from: () => t.stack_scale.from().multiply(a),
                "for": t.stack_scale["for"]
            }), e && t.toggle && (n = n.concat(t.toggle)), e && t.varToggle && (n = n.concat(t.varToggle(this))), t.scale && this.scalingBuffs.push(t.scale), t.scales && (this.scalingBuffs = this.scalingBuffs.concat(t.scales)), t.toggle_scale && e && this.scalingBuffs.push(t.toggle_scale), t.toggle_scales && e && (this.scalingBuffs = this.scalingBuffs.concat(t.toggle_scales)), t.debuff && this.DebuffsToApply.addMod(t.debuff), t.toggle_debuff && e && this.DebuffsToApply.addMod(t.toggle_debuff), t.varToggle_debuff && e && this.DebuffsToApply.addMod(t.varToggle_debuff(this)), t.calcStats)
            for (let l in t.calcStats) t.calcStats[l].damage && (i ? this.skillDamage.push(t.calcStats[l]) : s ? this.burstDamage.push(t.calcStats[l]) : this.calcStats.damage.push(t.calcStats[l])), t.calcStats[l].value && this.calcStats.value.push(t.calcStats[l]);
        return t.skill && (t.skill.effect && (this.skillBuff = this.skillBuff.concat(t.skill.effect)), t.skill.toggle && e && (this.skillBuff = this.skillBuff.concat(t.skill.toggle))), t.burst && (t.burst.effect && (this.burstBuff = this.burstBuff.concat(t.burst.effect)), t.burst.toggle && e && (this.burstBuff = this.burstBuff.concat(t.burst.toggle))), t.extras && (t.extras.effect && (this.extrasBuff = this.extrasBuff.concat(t.extras.effect)), t.extras.toggle && e && (this.extrasBuff = this.extrasBuff.concat(t.extras.toggle))), t.normal && (t.normal.effect && (this.normalBuff = this.normalBuff.concat(t.normal.effect)), t.normal.toggle && e && (this.normalBuff = this.normalBuff.concat(t.normal.toggle))), n
    }
}
class DamageCalculator {
    constructor(t, e) {
        this._GUI = t, t?._Hook(this), e && e.Character ? this.LoadData(e) : (this.Character, this.Weapon, this.Artifacts = new ArtifactContainer(!0), this.Party = new PartyContainer, this.WeaponType, this.Enemy = new Enemy, this.hitEnemy = !1, e && this.SetCharacter(e, !0))
    }
    Save() {
        return {
            Character: this.Character.Save(),
            Enemy: this.Enemy.Save(),
            hitEnemy: this.hitEnemy
        }
    }
    LoadData(t) {
        let e = JSON.parse(t.Character);
        this.Enemy = JSON.parse(t.Enemy), Object.setPrototypeOf(this.Enemy, Enemy.prototype), this.hitEnemy = t.hitEnemy, this.Character = e, this.Weapon = e.Weapon, this.Artifacts = e.Artifacts, this.Party = e.partyBuffs, Object.setPrototypeOf(this.Character, CharacterStats.prototype), this.Character.ReloadCharacter(), this.WeaponType = e.characterWeaponType, this.Character.EnemyRef = this.Enemy
    }
    SetCharacter(t, e = !1) {
        return this.Character = new CharacterStats(t, this.Artifacts, this.Party, this.Enemy), this.SetConstellationLevel(), this.SetCharLvl(), this.SetNormalLvl(), this.SetSkillLvl(), this.SetBurstLvl(), this._GUI.PopulateSkillAndBurst(), this.WeaponType != this.Character.characterWeaponType && (this.WeaponType = this.Character.characterWeaponType, this._GUI.PopulateWeapons(e), !0)
    }
    SetConstellationLevel() {
        this.Character.cLevel = this._GUI.constellationLvl, this._GUI.PopulateConstellations()
    }
    SetCharLvl() {
        this.Character.setLevel(this._GUI.characterLvl), this._GUI.PopulatePassives()
    }
    SetNormalLvl() {
        this.Character.setNormalTalentLevel(this._GUI.normalLvl)
    }
    SetSkillLvl() {
        this.Character.setSkillTalentLevel(this._GUI.skillLvl)
    }
    SetBurstLvl() {
        this.Character.setBurstTalentLevel(this._GUI.burstLvl)
    }
    SetWeapon(t) {
        let e = !1;
        t ? (this.Weapon = new Weapon(t), e = !0) : this.Weapon && this.Weapon.weaponName == this._GUI.weaponName || (this.Weapon = new Weapon(this._GUI.weaponName), e = !0), e && (this.SetWeaponLvl(), this.SetWeaponRefine())
    }
    SetWeaponLvl() {
        this.Weapon.setLevel(this._GUI.weaponLvl)
    }
    SetWeaponRefine() {
        this.Weapon.setRefine(this._GUI.weaponRefine)
    }
    GetArtifact(t) {
        return this.Character.GetArtifact(t)
    }
    SetArtifactInitialSubstatValue(t, e) {
        this.Artifacts.artifacts[t].setStartingSubstats(e)
    }
    SetArtifactRarity(t, e) {
        this.Artifacts.artifacts[t].setRarity(e)
    }
    SetArtifactLevel(t, e) {
        this.Artifacts.artifacts[t].setLevel(e)
    }
    SetArtifactMainStatType(t, e) {
        this.Artifacts.artifacts[t].setMainstatType(e)
    }
    SetArtifactSetPiece(t, e) {
        let a = this.Artifacts.artifacts[t].setPiece == undefined,
            i = this.Artifacts.setEffects;
        return this.Artifacts.artifacts[t].modifySet(e), a || i == this.Artifacts.setEffects
    }
    SetArtifactSubstat(t, e, a, i) {
        let s = this.Artifacts.artifacts[t].subStats[i] == undefined;
        return this.Artifacts.artifacts[t].addSubstat(new StatModifier(e, a), i), s
    }
    ReactionCalc(t, e, a, i) {
        let s = this.reactionProcChance / 100,
            n = this.Enemy.GetReaction(e);
        "Shattered" == n && "Claymore" != this.Character.characterWeaponType && "GeoDMG" != e && (n = "None"), "Crystallize" == n && (n = "None");
        let r = 0;
        return "None" != n && (r = a[n]), "Vaporize" == n || "Melt" == n ? (t /= r, i ? t * (1 - s) + t * r * s : t * r) : i ? t * (1 - s) + (t + r) * s : t + r
    }
    NoReaction(t, e, a) {
        let i = this.Enemy.GetReaction(e);
        return "Vaporize" == i || "Melt" == i ? t / a[i] : t
    }
    Recalc(t = !1, e) {
        this._GUI?.DEBUG && console.log("Re");
        let a = this.Character;
        a.equipWeapon(this.Weapon), a.getStats(e);
        let i = DebuffContainer.SUM([a.DebuffsToApply, this.Party.DebuffsToApply, this.Artifacts.DebuffsToApply]);
        this.Enemy.setDebuffs(i.mods);
        let s = a.totalStats.stats,
            n = a.getBuffedStats(a.normalBuff);
        s.CritRate = Math.max(s.CritRate, 0), n.CritRate = Math.max(n.CritRate, 0);
        let r = s.PhysicalDMG,
            l = "PhysicalDMG";
        a.modifiers.mods.NormalType && (r = s[a.modifiers.mods.NormalType], l = a.modifiers.mods.NormalType);
        let o = "Catalyst" == a.characterWeaponType ? a.element : l,
            c = "Bow" == a.characterWeaponType || "Catalyst" == a.characterWeaponType ? a.element : l,
            h = 1 + n.NormalAttackDMG + n.AllDMG + ("Catalyst" == a.characterWeaponType ? n[a.element] : r),
            u = 1 + n.ChargedAttackDMG + n.AllDMG + ("Catalyst" == a.characterWeaponType ? n[a.element] : r),
            f = 1 + n.ChargedAttackDMG + n.AllDMG + ("Bow" == a.characterWeaponType || "Catalyst" == a.characterWeaponType ? n[a.element] : r),
            d = 1 + n.PlungingDMG + n.AllDMG + ("Catalyst" == a.characterWeaponType ? n[a.element] : r),
            p = {
                "Hit-1": a.hitMultiplier[0] / 100 * h,
                "Hit-2": a.hitMultiplier[1] / 100 * h,
                "Hit-3": a.hitMultiplier[2] / 100 * h,
                "Hit-4": a.hitMultiplier[3] / 100 * h,
                "Hit-5": a.hitMultiplier[4] / 100 * h,
                "Hit-6": a.hitMultiplier[5] / 100 * h,
                "Charge Attack 1": a.charge1 / 100 * u,
                "Charge Attack 2": a.charge2 / 100 * f,
                Plunge: a.plunge / 100 * d,
                "Low Plunge": a.lowPlunge / 100 * d,
                "High Plunge": a.highPlunge / 100 * d,
                DPS: (a.hitMultiplier[0] + a.hitMultiplier[1] + a.hitMultiplier[2] + a.hitMultiplier[3] + a.hitMultiplier[4] + a.hitMultiplier[5]) / 100 / (a.comboTime / (1 + n.AttackSpeed)) * h
            },
            g = {
                "Hit-1": o,
                "Hit-2": o,
                "Hit-3": o,
                "Hit-4": o,
                "Hit-5": o,
                "Hit-6": o,
                Plunge: o,
                "Low Plunge": o,
                "High Plunge": o,
                "Charge Attack 1": "Catalyst" == a.characterWeaponType ? c : o,
                "Charge Attack 2": c,
                DPS: o
            },
            m = {
                "Hit-1": n,
                "Hit-2": n,
                "Hit-3": n,
                "Hit-4": n,
                "Hit-5": n,
                "Hit-6": n,
                Plunge: n,
                "Low Plunge": n,
                "High Plunge": n,
                "Charge Attack 1": n,
                "Charge Attack 2": n,
                DPS: n
            },
            v = {
                "Hit-1": h,
                "Hit-2": h,
                "Hit-3": h,
                "Hit-4": h,
                "Hit-5": h,
                "Hit-6": h,
                "Charge Attack 1": u,
                "Charge Attack 2": f,
                Plunge: d,
                "Low Plunge": d,
                "High Plunge": d,
                DPS: h
            };
        if (this.Weapon.weaponAbility.additionalAttack) {
            let t = this.Weapon.weaponAbility.additionalAttack,
                e = t.hit ? t.hit[this.Weapon.refine] : t.perHit[this.Weapon.refine] * a.totalHits;
            t.toggle_hit && this.Weapon.toggleAbility && (e = t.toggle_hit[this.Weapon.refine]);
            let i = t.frequency ? t.frequency[this.Weapon.refine] : a.comboTime,
                n = 1 + s.AllDMG;
            for (let o in t.bonus) {
                let e = t.bonus[o];
                "Elemental" == e ? (n += s[a.element], g["Total DPS"] = a.element, g["Wep Bonus Hit"] = a.element, g["Bonus DPS"] = a.element) : (n += s[e], -1 != "PyroDMG CryoDMG HydroDMG ElectroDMG GeoDMG AnemoDMG DendroDMG".search(e) ? (g["Total DPS"] = a.element, g["Wep Bonus Hit"] = a.element, g["Bonus DPS"] = a.element) : (g["Total DPS"] = "PhysicalDMG", g["Wep Bonus Hit"] = "PhysicalDMG", g["Bonus DPS"] = "PhysicalDMG"))
            }
            let r = e * n,
                l = e / i * n;
            p["Wep Bonus Hit"] = r, p["Proc Frequency"] = i, p["Bonus DPS"] = l
        }
        n = a.getBuffedStats(a.extrasBuff);
        for (let b in a.calcStats.damage) {
            let t = a.calcStats.damage[b],
                e = t.noBuff ? s : t.isExtra ? n : s,
                i = 1 + e.AllDMG + (t.damageType ? e[t.damageType] : 0) + e["Elemental" == t.damageElement ? c : "Default" == t.damageElement ? o : t.damageElement];
            v[t.stat] = t.noBonus ? 1 : i, p[t.stat] = t.damage(a) * (t.noBonus ? 1 : i), g[t.stat] = "Elemental" == t.damageElement ? c : "Default" == t.damageElement ? o : t.damageElement, t.isExtra && (m[t.stat] = e)
        }
        n = a.getBuffedStats(a.skillBuff);
        for (let b in a.skillDamage) {
            let t = a.skillDamage[b];
            g[t.stat] = t.damageElement ?? a.element;
            let e = t.noBuff ? s : n,
                i = 1 + e.AllDMG + (t.damageType ? e[t.damageType] : e.ElementalSkillDMG) + s[g[t.stat]];
            v[t.stat] = t.noBonus ? 1 : i, p[t.stat] = t.damage(a) * (t.noBonus ? 1 : i), m[t.stat] = e
        }
        n = a.getBuffedStats(a.burstBuff);
        for (let b in a.burstDamage) {
            let t = a.burstDamage[b];
            g[t.stat] = t.damageElement ?? a.element;
            let e = t.noBuff ? s : n,
                i = 1 + e.AllDMG + e.ElementalBurstDMG + s[g[t.stat]];
            v[t.stat] = t.noBonus ? 1 : i, p[t.stat] = t.damage(a) * (t.noBonus ? 1 : i), m[t.stat] = e
        }
        for (let b in p)
            if ("Proc Frequency" != b && (p[b] *= m[b] ? m[b].ATK : s.ATK, m[b] && m[b].FLAT))
                if (a.HitCount && -1 != b.search(/Hit-\d/)) {
                    let t = parseInt(b.replace("Hit-", "")) - 1;
                    p[b] += m[b].FLAT * a.HitCount[t] * v[b]
                } else p[b] += m[b].FLAT * v[b];
        p["Bonus DPS"] && (p["Total DPS"] = p.DPS + p["Bonus DPS"]);
        let S = {};
        for (let b in p) S[b] = "Proc Frequency" != b ? p[b] * (1 + (m[b] ? m[b].CritDMG : s.CritDMG)) : p[b];
        let y = {};
        for (let b in p) {
            if ("Proc Frequency" == b) {
                y[b] = p[b];
                continue
            }
            let t = Math.min(m[b] ? m[b].CritRate : s.CritRate, 1);
            y[b] = p[b] * (1 - t) + S[b] * t
        }
        if (this.hitEnemy)
            for (let b in p) {
                if ("Proc Frequency" == b) continue;
                let t;
                t = this.Enemy.TakeHit(this.Character, p[b], g[b]), p[b] = t.hitDamage, t = this.Enemy.TakeHit(this.Character, S[b], g[b]), S[b] = t.hitDamage, t = this.Enemy.TakeHit(this.Character, y[b], g[b]), y[b] = t.hitDamage
            }
        p["Bonus DPS"] && (p["Total DPS"] = p.DPS + p["Bonus DPS"], S["Total DPS"] = S.DPS + S["Bonus DPS"], y["Total DPS"] = y.DPS + y["Bonus DPS"]);
        let C = this.Enemy.DetermineAllReactions(this.Character);
        for (let b in C) "Melt" == b || "Vaporize" == b ? (p[b] = 0, S[b] = 0, y[b] = C[b].damage + 1) : (p[b] = 0, S[b] = 0, y[b] = C[b].damage, this.hitEnemy && (y[b] *= this.Enemy.GetMitigation(a, C[b].element, !0)));
        t || (this.__Cache = [p, S, y, g], this._GUI.DisplayStats(), this._GUI.DisplayDamage(p, S, y, o, c, g));
        for (let b in this.Character.calcStats.value) {
            let t = this.Character.calcStats.value[b],
                e = t.stat,
                a = t.value(this.Character);
            y[e] = a
        }
        return [p, S, y, g]
    }
}
class Enemy {
    constructor() {
        this.level, this.setLevel(1), this.currentElement, this.resistance = {
            PhysicalDMG: 0,
            PyroDMG: 0,
            HydroDMG: 0,
            DendroDMG: 0,
            ElectroDMG: 0,
            AnemoDMG: 0,
            CryoDMG: 0,
            GeoDMG: 0
        }, this.DEFReduction = 0, this.reduction = {
            PhysicalDMG: 0,
            PyroDMG: 0,
            HydroDMG: 0,
            DendroDMG: 0,
            ElectroDMG: 0,
            AnemoDMG: 0,
            CryoDMG: 0,
            GeoDMG: 0
        }
    }
    Save() {
        return SafeStringify(this)
    }
    DetermineAllReactions(t) {
        let e = this.currentElement,
            a = {},
            i = Object.keys(this.resistance).concat(["Frozen"]);
        for (let s in i) {
            let e = i[s];
            if ("AnemoDMG" == e) continue;
            this.currentElement = e;
            let n = this.GetReactionResult(t, 1, t.element),
                r = n[0];
            "None" != n[2] && "None" != n[1] && (a[n[2]] = {
                element: n[1],
                damage: r
            })
        }
        return this.currentElement = e, a
    }
    setLevel(t) {
        t < 1 && (t = 1), this.level = t
    }
    setElement(t) {
        this.currentElement = t
    }
    setRES(t, e) {
        this.resistance[t] != undefined && (this.resistance[t] = e)
    }
    setEnemy(t, e) {
        let a = EnemyList[t];
        if (a) {
            let t = !1;
            for (let e in a) "Elemental" == e ? t = !0 : this.setRES(e, a[e]);
            if (t)
                if (e) this.setRES(e, a.Elemental[e]), this.currentElement = e;
                else {
                    let t;
                    for (let e in a.Elemental) {
                        t = e;
                        break
                    }
                    this.setRES(t, a.Elemental[t]), this.currentElement = t
                }
        }
    }
    setDebuffs(t) {
        for (let e in t) this.reduction[e] != undefined ? this.reduction[e] = t[e] : "DEF" == e && (this.DEFReduction = t[e])
    }
    TakeHit(t, e, a) {
        let i, s = e * this.GetMitigation(t, a),
            n = this.GetReactionResult(t, e, a);
        switch (n[2]) {
            case "Melt":
            case "Vaporize":
                return i = n[0] * this.GetMitigation(t, n[1]), {
                    hitDamage: s + i,
                    reaction: n[2]
                };
            case "Electrocharged":
            case "Overloaded":
            case "Superconduct":
            case "Cryo Swirl":
            case "Hydro Swirl":
            case "Pyro Swirl":
            case "Electro Swirl":
            case "Shattered":
                return i = n[0] * this.GetMitigation(t, n[1], !0), {
                    hitDamage: s,
                    reaction: n[2],
                    reactionDamage: i,
                    reactionElement: n[1]
                };
            default:
                return {
                    hitDamage: s
                }
        }
    }
    GetMitigation(t, e, a = !1) {
        let i = (1 - this.DEFReduction) * (this.level + 100),
            s = (t.level + 100) / (i + t.level + 100),
            n = this.GetResistance(e);
        return a ? n : s * n
    }
    GetResistance(t) {
        t == undefined && (t = "PhysicalDMG");
        let e = (this.resistance[t] ?? 0) - (this.reduction[t] ?? 0);
        return e < 0 ? 1 - e / 2 : e > 3 ? 0 : e >= .75 ? 1 / (4 * e + 1) : 1 - e
    }
    GetReactionResult(t, e, a) {
        let i = this.GetReaction(a),
            s = t.totalStats.stats[i + "DMG"] ?? 0; - 1 != i.search("Swirl") && (s = t.totalStats.stats.SwirlDMG), s += this.GetEMBonus(t, i);
        let n, r, l = 1.5;
        switch (i) {
            case "Melt":
                return "PyroDMG" == a && (l = 2), [e * l * (1 + s) - e, a, i];
            case "Vaporize":
                return "HydroDMG" == a && (l = 2), [e * l * (1 + s) - e, a, i];
            case "Electrocharged":
                return n = [21, 41, 97, 164, 249, 388, 587, 920, 1295, 1741], r = n[Math.floor(t.level / 10)], [r * (1 + s), "ElectroDMG", i];
            case "Overloaded":
                return n = [34, 68, 161, 273, 415, 647, 979, 1533, 2159, 2901], r = n[Math.floor(t.level / 10)], [r * (1 + s), "PyroDMG", i];
            case "Superconduct":
                return n = [9, 17, 40, 68, 104, 162, 245, 383, 540, 725], r = n[Math.floor(t.level / 10)], [r * (1 + s), "CryoDMG", i];
            case "Swirl":
            case "Pyro Swirl":
            case "Hydro Swirl":
            case "Cryo Swirl":
            case "Electro Swirl":
                n = [10, 20, 48, 82, 124, 194, 294, 460, 648, 868];
                let o = "AnemoDMG" == a ? this.currentElement : a;
                return r = n[Math.floor(t.level / 10)], [r * (1 + s), o, o.replace("DMG", " Swirl")];
            case "Shattered":
                if ("Claymore" != t.characterWeaponType && "GeoDMG" != t.element) break;
                return n = [26, 51, 121, 204, 311, 485, 734, 1150, 1619, 2176], r = n[Math.floor(t.level / 10)], [r * (1 + s), "PhysicalDMG", i];
            case "Crystallize":
                return n = [91, 159, 304, 438, 558, 716, 896, 1095, 1277, 1421], r = n[Math.floor(t.level / 10)], [r * (1 + s), a, i]
        }
        return [0, "None", "None"]
    }
    GetEMBonus(t, e) {
        let a, i = t.ElementalMastery;
        switch (e) {
            case "Vaporize":
            case "Melt":
                a = 1;
                break;
            case "Crystallize":
                a = 1.6;
                break;
            case "Burning":
            default:
                a = 2.4
        }
        return a * i * (25 / 9) / (i + 1400)
    }
    GetReaction(t) {
        let e = (t ?? "PhysicalDMG") + this.currentElement;
        if (-1 != e.search("Dendro") && -1 != e.search("Pyro")) return "Burning";
        if (-1 != e.search("Anemo") && this.currentElement && (-1 != this.currentElement.search("Pyro") || -1 != this.currentElement.search("Cryo") || -1 != this.currentElement.search("Electro") || -1 != this.currentElement.search("Hydro"))) return this.currentElement.replace("DMG", " Swirl");
        if (-1 != e.search("Pyro")) {
            if (-1 != e.search("Cryo")) return "Melt";
            if (-1 != e.search("Electro")) return "Overloaded";
            if (-1 != e.search("Hydro")) return "Vaporize"
        }
        if (-1 != e.search("Electro")) {
            if (-1 != e.search("Hydro")) return "Electrocharged";
            if (-1 != e.search("Cryo")) return "Superconduct"
        }
        return -1 != e.search("Cryo") && -1 != e.search("Hydro") ? "Frozen" : -1 != e.search("Frozen") ? "Shattered" : "GeoDMG" == t ? "Crystallize" : "None"
    }
}
var lstrfsh = !1;

function FormatStat(t, e = !1, a = 2) {
    return (t * (e ? 100 : 1)).toLocaleString(undefined, {
        maximumFractionDigits: a
    }) + (e ? "%" : "")
}

function CheckDependencies() {
    let t = window.nitroAds;
    if (t) {
        let e = t.loaded;
        if (t.loaded == e) return window.nitroAds && window.nitroAds.loaded
    }
}

function LocaleParseInt(t, e = !1) {
    return parseInt(ConvertFromLocaleStr(t, e))
}

function LocaleParseFloat(t, e = !1) {
    return parseFloat(ConvertFromLocaleStr(t, e))
}

function ConvertFromLocaleStr(t, e = !1) {
    return ("true" == localStorage.getItem("useCommaAsDecimal") || e) && ([integer, decimal] = t.split(","), t = integer.replaceAll(".", "") + (decimal ? "." + decimal : "")), t
}

function SafeStringify(t) {
    return JSON.stringify(t).replaceAll("'", "&#39").replaceAll(/[\<\>\*]/g, "").replaceAll(/`/g, "").replaceAll(/\/{2}/g, "")
}

function Translate(t, e, a, i) {
    let s = t;
    if ("gui" == e && (s = t.trim().replaceAll(/\s{2,}/g, " ").replaceAll(":", "")), _GUI.language && _GUI.language[e] && _GUI.language[e][s]) {
        if (i) {
            if (i.constructor == Array) {
                let t = _GUI.language[e][s];
                for (let e in i) t = t[i[e]];
                return t
            }
            return _GUI.language[e][s][i]
        }
        return _GUI.language[e][s]
    }
    return _GUI.language && -1 != s.search(" ") ? Translate(s.replaceAll(" ", ""), e, a || t, i) : (_GUI.DEBUG && console.log("Failed:" + s + "::" + e), a || t)
}
class GUIControl {
    constructor() {
        this.DEBUG = !1, this._INIT = !1, this._LOADED = !1, this._Calc, this._CalcList = [], this._CurCalcIdx = -1, this.characterLvl = 1, this.enemyLvl = 1, this.enemyName, this.weaponName, this.weaponLvl = 1, this.weaponRefine = 0, this.constellationLvl = 0, this.normalLvl = 0, this.skillLvl = 0, this.burstLvl = 0, this.DamageDisplayList = ["Hit-1", "Hit-2", "Hit-3", "Hit-4", "Hit-5", "Hit-6", "Charge Attack 1", "Charge Attack 2", "Plunge", "Low Plunge", "High Plunge", "DPS", "Total DPS", "Wep Bonus Hit", "Proc Frequency", "Bonus DPS", "Electrocharged", "Overloaded", "Superconduct", "Pyro Swirl", "Hydro Swirl", "Electro Swirl", "Cryo Swirl", "Shattered", "Vaporize", "Melt", "Crystallize"], this.optimizerTargets = {}, this._SavedBuilds = {}, this._LoadedSaves = [], this._DB, this.DPSDisplay = {}, this.reactionProcChance, this._ArtifactCtrl = new ArtifactDesignerController, this.__Cache = {}, this.language, this.langCode = "EN", this.Translator
    }
    ToggleNews(t) {
        t.checked ? localStorage.setItem("news", this.version) : localStorage.setItem("news", 0)
    }
    SetLang(t) {
        switch (this._INIT && (localStorage.setItem("lang", t), window.location.href = "/genshinCalc.html?lang=" + t), t) {
            case "zh-CN":
                this.language = cntranslate, this.langCode = "zh-CN", $("#languageSelect").val(t);
                break;
            case "RU":
                this.language = rutranslate, this.langCode = "RU", $("#languageSelect").val(t)
        }
        this.language && $("[translate='true']").each(((t, e) => {
            let a = $(e).text();
            $(e).text(Translate(a, "gui"))
        }))
    }
    LoadSettings() {
        let t = localStorage.getItem("lang");
        if (t && "EN" != t && t != this.langCode) switch (t) {
            case "zh-CN":
                this.SetLang(t)
        }
        localStorage.setItem("useCommaAsDecimal", 123.4.toLocaleString().includes(",")), $("#noGenshinFont").prop("checked", "true" == localStorage.getItem("noGenshinFont")), this.SetFont(), localStorage.getItem("news") != this.version && $("#newsPopup").show()
    }
    SaveSettings() {}
    SetFont() {
        let t = $("#noGenshinFont").prop("checked");
        localStorage.setItem("noGenshinFont", t), t ? $("#siteContainer").addClass("noGenFont") : $("#siteContainer").removeClass("noGenFont")
    }
    _Hook(t) {
        this._Calc = t
    }
    ResetGUI() {
        let t = this._Calc;
        this.characterLvl = 1, this.constellationLvl = 0, this.normalLvl = 0, this.skillLvl = 0, this.burstLvl = 0, this.weaponName = undefined, this.weaponLvl = 1, this.weaponRefine = 0, this.enemyLvl = t.Enemy.level, this.enemyName, this.FillCalcContainer()
    }
    LoadCalculator() {
        let t = this._Calc,
            e = t.Character;
        this.characterLvl = (e.isAscended ? -1 : 1) * e.level, this.constellationLvl = e.cLevel, this.normalLvl = e.talentsLevel.Normal, this.skillLvl = e.talentsLevel.Skill, this.burstLvl = e.talentsLevel.Burst, this.weaponName = t.Weapon.weaponName, this.weaponLvl = t.Weapon.weaponLevel, this.weaponRefine = t.Weapon.refine, this.enemyLvl = t.Enemy.level, this.enemyName, this.FillCalcContainer()
    }
    FillCalcContainer() {
        $("#constellationSelect").val(this.constellationLvl), $("#charLvlSelect").val(this.characterLvl), $("#normalLvlSelect").val(this.normalLvl + 1), $("#skillLvlSelect").val(this.skillLvl + 1), $("#burstLvlSelect").val(this.burstLvl + 1), this.PopulateConstellations(), this.PopulatePassives(), this.PopulateSkillAndBurst(), t(this._Calc.Character.talentFlags, "Passive", 0), t(this._Calc.Character.talentFlags, "Passive", 1);
        for (let e = 0; e < 6; e++) t(this._Calc.Character.talentFlags, "Constellation", e);

        function t(t, e, a) {
            let i = e.toLowerCase() + (a ?? ""),
                s = t[e + "Toggle"][a] ?? t[e + "Toggle"],
                n = t[e + "Stacks"][a] ?? t[e + "Stacks"];
            $("[stat='" + i + "']").find("[type='checkbox']").prop("checked", s), $("[stat='" + i + "']").find("[type='number']").val(n)
        }
        t(this._Calc.Character.talentFlags, "Skill"), t(this._Calc.Character.talentFlags, "Burst"), this.PopulateWeapons(!0), this.weaponName = this.weaponName ?? $("#weaponSelect").children("option").first().val(), $("#weaponSelect").val(this.weaponName), $("#weaponLvlSelect").val(this.weaponLvl), $("#weaponRefineSelect").val(this.weaponRefine + 1), this._Calc.Weapon || this._Calc.SetWeapon(), this.RefreshWeaponDisplay(), this.PopulateWeaponAbility(!0), $("#weaponAbilityToggle").prop("checked", this._Calc.Weapon.toggleAbility), $("#weaponAbilityStacks").val(this._Calc.Weapon.buffStacks), null != this._Calc.Weapon.switchedBuff && $("#wabilswitch" + this._Calc.Weapon.switchedBuff).prop("checked", !0);
        for (let e in this._Calc.Artifacts.artifacts) this.UpdateArtifact(e);
        this.PopulateArtifactBuffs(), $("#buffContainer").find(".artifactBuffToggle").prop("checked", this._Calc.Artifacts.toggle), $("#buffContainer").find(".artifactBuffSwitch[effectnum='" + this._Calc.Artifacts["switch"] + "']").prop("checked", !0);
        for (let e in this._Calc.Artifacts.select) {
            let t = this._Calc.Artifacts.select[e];
            $("#buffContainer").find(".artifactBuffSelect[effectnum='" + t + "']").prop("checked", !0)
        }
        this.FillEnemyRes(), this.FillEnemyElement(), $("input[name='hitEnemy']").prop("checked", this._Calc.hitEnemy), $("#enemyLvlSelect").val(this._Calc.Enemy.level), $("#enemySelect").val("None"), this.PopulateEnemyTypes(), this.FillResonance(), this.FillPartyBuffs(), $("#statsContainer > .statsTitle").text(this._Calc.Character.characterName), $("#statsContainer > .statsTitle").attr("element", this._Calc.Character.element), SetReactionModeProcChance(!0), this._Calc.Recalc()
    }
    ClearUser() {
        this._DB = null, this._SavedBuilds = {}
    }
    Init(t = 0) {
        this._INIT || (this._INIT = !0, this.LoadSettings(), $("body").contextmenu(this.ContextMenu), $("body").click(this.Click), $("body").on("taphold", (t => {
            $(t.target).trigger("contextmenu")
        })), this.InitGUI(), this.InitStatContainer(), this.InitDamageContainer(), this.InitCalcContainer(), SelectCharacter("#charSelect" + t), $(window).resize(this.Resize), this.Resize()), !this._LOADED && this._SavedBuilds.SharedBuild && (this.LoadBuild(0, "SharedBuild"), this._LOADED = !0)
    }
    UpdatePortrait(t) {
        if (t) {
            $(".selectBoxButton").attr("active", "false"), $(".selectBoxButton").removeAttr("element"), $(".selectBoxButton").removeAttr("style");
            for (let t in _GUI._CalcList) {
                let e = $("#charSelect" + t),
                    a = _GUI._CalcList[t].Character.characterName;
                e.attr("element", _GUI._CalcList[t].Character.element), e.css("background-image", 'url("./img/' + a.toLowerCase() + '.png")')
            }
            $("#charSelect" + _GUI._CurCalcIdx).attr("active", "true")
        } else {
            let t = _GUI._CurCalcIdx,
                e = $("#charSelect" + t),
                a = _GUI._CalcList[t].Character.characterName;
            e.attr("element", _GUI._CalcList[t].Character.element), $(".selectBoxButton").attr("active", "false"), e.attr("active", "true"), e.css("background-image", 'url("./img/' + a.toLowerCase() + '.png")')
        }
    }
    ShowArtifactLoadList(t) {
        $("#loadMenu").show(), $("#contextMenuContainer").hide();
        let e = $(t.target).attr("artifacttype");
        $("#loadMenu > .saveMenuLabel").text("Saved " + e), _GUI.CacheSlot(e);
        let a = "";
        for (let i in _GUI._ArtifactCtrl._SaveData[e]) {
            let t = _GUI._ArtifactCtrl._SaveData[e][i],
                s = _GUI._ArtifactCtrl._SaveData.Saves[t].artifact,
                n = (_GUI.__Cache._Artifacts[t] - _GUI.__Cache._CurrentValue) / _GUI.__Cache._CurrentValue;
            a += div({
                "class": "savedArtifactItem",
                savename: t,
                artifactType: e
            }, span({
                negative: n < 0
            }, (n < 0 ? "" : "+") + FormatStat(n, !0)) + "&emsp;|&emsp;" + span({
                style: "color: black;"
            }, t) + "&emsp;|&emsp;" + span({
                element: s.mainStat.statType
            }, s.mainStat.statType))
        }
        return $("#loadList").html(a), !1
    }
    InitGUI() {
        this.AddCalcSlot(), $("#newsPopup").on("click", (function(t) {
            t.originalEvent.stopPropagation()
        })), $("#console").on("click", ".optimizedOption", (function(t) {
            let e = $(this).attr("key"),
                a = $(this).attr("index");
            o.optimalOption = o._saveLog[e][a], o.doAutoEquip(o)
        })), $("body").on("mouseleave", "#weaponAbilityLabel, .artifactToggleLabel, .TalentToggleLabel, #resonanceContainer label, label.buffInputRow", (function(t) {
            $("#predictorToolTip").hide()
        })), $("body").on("mousemove", "#weaponAbilityLabel, .artifactToggleLabel, .TalentToggleLabel, #resonanceContainer label, label.buffInputRow", (function(t) {
            $("#predictorToolTip").position({
                my: "left top",
                of: t,
                collision: "fit"
            })
        })), $("body").on("mouseover", "#resonanceContainer label", (function(t) {
            let e = $(t.currentTarget).find("input[name='ElementalResonance']"),
                a = $(e).prop("checked"),
                i = ElementalResonanceList[$(e).attr("value")].effect;
            return i && i.length > 0 && (a && (i = StatModifier.NegativeSet(i)), _GUI.ShowPrediction(i, t)), !0
        })), $("body").on("mouseover", "label.buffInputRow", (function(t) {
            let e = $(t.currentTarget).find("input[type='checkbox']");
            if (0 == e.length) return !0;
            let a, i = $(e).prop("checked"),
                s = {};

            function n(t, e) {
                let a = [];
                return t.effect && (a = a.concat(t.effect)), t.varEffect && (a = a.concat(t.varEffect(e))), a
            }
            $(e).parents(".buffRow").find(".buffVars").find("input").each(((t, e) => {
                s[$(e).attr("varname")] = parseInt($(e).attr("value"))
            })), a = $(e).attr("nest") ? n(PartyBuffList[$(e).attr("buff")][parseInt($(e).attr("idx"))].nested[parseInt($(e).attr("nest"))], s) : n(PartyBuffList[$(e).attr("buff")][parseInt($(e).attr("idx"))], s), a && a.length > 0 && (i && (a = StatModifier.NegativeSet(a)), _GUI.ShowPrediction(a, t))
        })), $("body").on("mouseover", "#weaponAbilityLabel", (function(t) {
            let e = $("#weaponAbilityToggle").prop("checked"),
                a = _GUI._Calc.Weapon.weaponAbility.toggle[_GUI._Calc.Weapon.refine];
            a && a.length > 0 && (e && (a = StatModifier.NegativeSet(a)), _GUI.ShowPrediction(a, t))
        })), $("body").on("mouseover", ".artifactToggleLabel", (function(t) {
            let e = $(t.currentTarget).find("input.artifactBuffToggle"),
                a = $(e).prop("checked"),
                i = _GUI._Calc.Artifacts.setEffects[parseInt($(e).attr("effectnum"))].toggle,
                s = _GUI._Calc.Artifacts.setEffects[parseInt($(e).attr("effectnum"))].condition;
            i && i.length > 0 && (s && !s(_GUI._Calc.Character) || (a && (i = StatModifier.NegativeSet(i)), _GUI.ShowPrediction(i, t)))
        })), $("body").on("mouseover", ".TalentToggleLabel", (function(t) {
            let e, a = $(t.currentTarget).find("input[oninput='ToggleTalent(this)']"),
                i = $(a).prop("checked"),
                s = $(a).parents(".statLineContainer").attr("stat");
            if (-1 != s.search("passive")) {
                let t = parseInt(s.replace("passive", ""));
                e = n(_GUI._Calc.Character.passives[t])
            } else if (-1 != s.search("constellation")) {
                let t = parseInt(s.replace("constellation", ""));
                e = n(_GUI._Calc.Character.constellations[t])
            } else -1 != s.search("burst") ? e = n(_GUI._Calc.Character.burst) : -1 != s.search("skill") && (e = n(_GUI._Calc.Character.skill));

            function n(t) {
                let e = $("[optimizingfor]").parents("div").attr("for"),
                    a = [];
                return t.toggle && (a = a.concat(t.toggle)), t.varToggle && (a = a.concat(t.varToggle(_GUI._Calc.Character))), t.burst && "burst" == e && (a = a.concat(n(t.burst))), t.skill && "skill" == e && (a = a.concat(n(t.skill))), t.extras && "extras" == e && (a = a.concat(n(t.extras))), a
            }
            e && e.length > 0 && (i && (e = StatModifier.NegativeSet(e)), _GUI.ShowPrediction(e, t))
        })), $("#showSubstatBenefit").on("click", (function(t) {
            return _GUI.ShowSubstatBenefit(), !1
        })), $("#shareWithDesc").on("click", (function(t) {
            let e = JSON.parse(SafeStringify($("#shareDesc").val()));
            _GUI.ShareBuild(parseInt($(this).attr("idx")), e)
        })), $("#shareWithoutDesc").on("click", (function(t) {
            _GUI.ShareBuild(parseInt($(this).attr("idx")))
        })), $("#shareDesc").on("click", (function(t) {
            return !1
        })), $("#shareDesc").on("keydown", (function(t) {
            if ("Tab" == t.key) {
                t.originalEvent.preventDefault();
                let e = t.target.selectionStart,
                    a = t.target.selectionEnd;
                return t.target.value = t.target.value.substring(0, e) + "\t" + t.target.value.substring(a), t.target.setSelectionRange(e + 1, e + 1), !1
            }
        })), $("#contextMenuContainer").on("click", "#copyCharacter", (function(t) {
            $("#contextMenuContainer").hide();
            let e = parseInt($(this).attr("calcidx")),
                a = _GUI._CalcList[e].Save();
            return _GUI.AddDamageCalc(a), _GUI.UpdatePortrait(), _GUI.Toast("Copied"), !1
        })), $("#contextMenuContainer").on("click", "#deleteSlot", (function(t) {
            $("#contextMenuContainer").hide();
            let e = parseInt($(this).attr("calcidx"));
            return _GUI.DeleteDamageCalc(e), !1
        })), $("#contextMenuContainer").on("click", "#saveCharacter", (function(t) {
            $("#saveMenu").show(), $("#loadMenu").hide(), $("#contextMenuContainer").hide(), $("#saveNameInput").val(""), $("#saveNameInput").focus();
            let e = parseInt($(this).attr("calcidx"));
            $("#saveButton").attr("calcidx", e), $("#saveButton").removeAttr("fn"), $(".listMenu").show();
            let a = "";
            for (let i in _GUI._SavedBuilds) a += div({
                "class": "savedItem",
                savename: i
            }, i);
            return $("#savedList").html(a), $("#saveMenu").find(".menuTitle").text("Saving Slot " + e), !1
        })), $("#contextMenuContainer").on("click", "#shareBuild", (function(t) {
            _GUI.HidePopups();
            let e = parseInt($(this).attr("calcidx"));
            return _GUI.ShowShareDisplay(e), !1
        })), $("#saveMenu, #loadMenu").click((function(t) {
            return $("#contextMenuContainer").hide(), !1
        })), $("#savedList").on("click", ".savedItem", (function(t) {
            return $("#saveNameInput").val($(this).text()), !1
        })), $("#loadList").on("click", ".savedItem", (function(t) {
            let e = $(this).attr("savename"),
                a = parseInt($(this).attr("calcidx"));
            return $("#loadMenu").hide(), _GUI.LoadBuild(a, e), !1
        })), $("#savedList, #loadList").on("contextmenu", ".savedItem", (function(t) {
            $("#contextMenuContainer").show(), $("#contextMenuContainer").position({
                my: "left top",
                of: t,
                collision: "fit"
            });
            let e = div({
                "class": "contextMenuItem",
                id: "deleteName",
                nameVal: safeify($(this).attr("savename"))
            }, "Delete");
            return $("#contextMenuContainer").html(e), !1
        })), $("#contextMenuContainer").on("click", "#deleteName", (function(t) {
            $("#contextMenuContainer").hide();
            let e = safeify($(this).attr("nameval"));
            if (_GUI._SavedBuilds[e]) {
                let t = _GUI._DB.doc(_GUI._SavedBuilds[e].id);
                t["delete"]().then((() => {
                    _GUI.Toast("Deleted: " + e), delete _GUI._SavedBuilds[e], $(".savedItem[savename='" + e + "']").remove();
                    let a = db.doc(t.path.replace("users", "sharedBuilds"));
                    a.get().then((t => {
                        t.data().ref;
                        db.doc(ref)["delete"]()
                    })), a["delete"]()
                }))
            }
            return !1
        })), $("#contextMenuContainer").on("click", "#loadCharacter", (function(t) {
            $("#loadMenu").show(), $("#saveMenu").hide(), $("#contextMenuContainer").hide();
            let e = parseInt($(this).attr("calcidx"));
            $("#loadMenu > .saveMenuLabel").text("Saved Builds:");
            let a = "";
            for (let i in _GUI._SavedBuilds) a += div({
                "class": "savedItem",
                savename: i,
                calcidx: e
            }, i);
            return $("#loadList").html(a), !1
        })), $(document).on("keydown", (function(t) {
            27 === t.keyCode && ($("#loadMenu").hide(), $("#saveMenu").hide(), $("#contextMenuContainer").hide())
        })), $("#saveNameInput").on("keydown", (function(t) {
            13 === t.keyCode && ($("#saveButton").css("opacity", .3), $("#saveButton").click())
        })), $("#saveButton").click((function(t) {
            let e = $("#saveNameInput").val();
            if ("saveArtifact" == $(this).attr("fn")) {
                if (-1 != e.search(/['"`\<\>\!\*]\//)) return void _GUI.Toast("Invalid Name");
                console.log(e);
                let t = parseInt($(this).attr("idx"));
                _GUI._ArtifactCtrl._SaveName[t] = e, _GUI._ArtifactCtrl.DoSave(t)
            } else {
                let t = parseInt($(this).attr("calcidx"));
                _GUI.SaveBuildAs(t, e)
            }
            return $("#saveMenu").hide(), !1
        })), $("#contextMenuContainer").on("click", "#saveArtifact", (function(t) {
            let e, a = $("#saveArtifact").attr("artifacttype");
            switch (a) {
                case "Flower":
                    e = 0;
                    break;
                case "Feather":
                    e = 1;
                    break;
                case "Clock":
                    e = 2;
                    break;
                case "Goblet":
                    e = 3;
                    break;
                case "Circlet":
                    e = 4
            }
            return _GUI._ArtifactCtrl._Container[e] = _GUI._Calc.Artifacts.artifacts[a], _GUI._ArtifactCtrl.TrySaveContainer("Container" + e, !0), $("#saveButton").attr("fn", "saveArtifact"), $("#contextMenuContainer").hide(), $(".listMenu").hide(), !1
        })), $("#contextMenuContainer").on("click", "#loadArtifact", this.ShowArtifactLoadList), $("#loadList").on("click", ".savedArtifactItem", (function(t) {
            let e = $(this).attr("savename"),
                a = $(this).attr("artifactType");
            $("#loadMenu").hide();
            let i = _GUI._ArtifactCtrl._SaveData.Saves[e].artifact.Clone();
            return _GUI._Calc.Artifacts.equipArtifact(i), _GUI.UpdateArtifact(a), _GUI._Calc.Recalc(), !1
        })), $("#loadList").on("mouseenter", ".savedArtifactItem", (function(t) {
            let e = $(this).attr("savename"),
                a = {
                    target: _GUI.__Cache._Target,
                    totalValue: _GUI.__Cache._Artifacts[e],
                    currentValue: _GUI.__Cache._CurrentValue
                };
            _GUI._ArtifactCtrl.DisplayArtifact(_GUI._ArtifactCtrl._SaveData.Saves[e], a), $("#artifactPopupDisplay").show(), $("#artifactPopupDisplay").position({
                my: "left top",
                of: t,
                collision: "fit"
            })
        })), $("#loadList").on("mouseleave", (function(t) {
            $("#artifactPopupDisplay").hide()
        })), $("#fullScreenButton").on("click", (function(t) {
            CheckDependencies() ? document.getElementById("fullScreenContainer").requestFullscreen() : console.log("AdBlock script error.")
        })), document.addEventListener("fullscreenchange", (function(t) {
            document.fullscreenElement ? $("#fullScreenButton").hide() : $("#fullScreenButton").show()
        }))
    }
    SaveBuildAs(t, e) {
        if (!this._Saving) {
            if (!this._DB) return void _GUI.Toast("Please Log In");
            if ("SharedBuild" == e) return void _GUI.Toast("Name is reserved. User another name.");
            if ("" == e || e == undefined || null == e || -1 != e.search(/['"`\<\>\!\*]\//)) return void _GUI.Toast("Invalid Name");
            this._Saving = !0;
            let a = SafeStringify(_GUI._CalcList[t].Save());
            this._SavedBuilds[e] ? (this._DB.doc(this._SavedBuilds[e].id).set({
                name: e,
                data: a
            }).then((a => {
                _GUI.Toast("Overwritten.."), _GUI._LoadedSaves[t] = e, this._Saving = !1
            }))["catch"]((t => {
                this._Saving = !1
            })), this._SavedBuilds[e].data = a) : Object.values(this._SavedBuilds).length - (this._SavedBuilds.SharedBuild ? 1 : 0) < _B1 ? this._DB.add({
                name: e,
                data: a
            }).then((i => {
                this._SavedBuilds[e] = {
                    id: i.id,
                    data: a,
                    date: new Date
                }, _GUI.Toast("Saved: " + e), _GUI._LoadedSaves[t] = e, this._Saving = !1
            }))["catch"]((t => {
                this._Saving = !1
            })) : (this._Saving = !1, _GUI.Toast("Maximum Saves Reached. Delete or overwrite an existing save to save this build."))
        }
    }
    LoadBuild(t, e) {
        let a;
        if (e = safeify(e), this._SavedBuilds[e]) {
            if (a = JSON.parse(this._SavedBuilds[e].data), t >= this._CalcList.length) this.DEBUG && console.log("NEW LOAD"), this.AddDamageCalc(a);
            else {
                this.DEBUG && console.log("REPLACE LOAD"), _GUI._CalcList[t]._GUI = null, delete _GUI._CalcList[t], _GUI._CalcList[t] = new DamageCalculator(this, a), this.SwitchCalc(t), this.LoadCalculator()
            }
            this.UpdatePortrait(), _GUI.Toast(e + " loaded into slot " + t + "."), this._LoadedSaves[t] = e
        }
    }
    ShowDesc(t) {
        $("#descPopup").text(t), $("#descPopup").show()
    }
    ShowShareDisplay(t) {
        this._DB ? this._LoadedSaves[t] && "SharedBuild" != this._LoadedSaves[t] ? CheckDependencies() ? ($("#shareSlotNum").text(t), $("#shareSaveName").text(this._LoadedSaves[t]), $(".dosharebtn").attr("idx", t), $("#shareMenu").show()) : _GUI.Toast("Disable adBlock and try again") : _GUI.Toast("Please Save As a Name First") : _GUI.Toast("Please Log In")
    }
    ShareBuild(t, e) {
        if (!this._DB) return void _GUI.Toast("Please Log In");
        if (!this._LoadedSaves[t] || "SharedBuild" == this._LoadedSaves[t]) return void _GUI.Toast("Please Save As a Name First");
        let a = SafeStringify(this._CalcList[t].Save());
        if (CheckDependencies()) {
            let i = this._LoadedSaves[t],
                s = this._DB.doc(this._SavedBuilds[i].id);
            s.set({
                name: i,
                data: a
            }).then((t => {
                _GUI.Toast("Build saved as " + i), db.doc(s.path.replace("users", "sharedBuilds")).get().then((t => {
                    if (t.exists) {
                        if (e) {
                            let a = t.data();
                            a.desc = e, db.collection("sharedLinks").doc(t.id).set(a)
                        }
                        _GUI.Toast("Build Already Shared"), window.open("./shareBuild?shareID=" + t.data().ref.path.replace("sharedLinks/", ""))
                    } else {
                        let t = {
                            ref: s
                        };
                        e && (t.desc = e), db.collection("sharedLinks").add(t).then((t => {
                            db.doc(s.path.replace("users", "sharedBuilds")).set({
                                ref: t
                            }), window.open("./shareBuild?shareID=" + t.id.replace("sharedLinks/", ""))
                        }))
                    }
                }))
            }))
        } else _GUI.Toast("Disable adBlock and try again")
    }
    AddCalcSlot() {
        let t = "";
        for (let i in CharacterList) t += div({
            "class": "selectBoxItem charItem",
            style: 'background-image:url("./img/' + i.toLowerCase() + '.png")',
            char: i
        });
        let e = this._CalcList.length,
            a = div({
                "class": "selectBoxGroup"
            }, div({
                "class": "selectBoxButton charSelectButton",
                id: "charSelect" + e
            }) + div({
                "class": "selectBoxContainer charSelectContainer",
                style: "display: none;"
            }, t));
        $("#charSelectGroup").append(a), $("#charSelect" + e).next(".charSelectContainer").children(".charItem").on("click", SelectCharacter), $("#charSelect" + e).on("click", (function(t) {
            if ($("#contextMenuContainer").hide(), $(this).next(".selectBoxContainer").is(":hidden") && ($(".selectBoxContainer").hide("fast"), "false" == $(this).attr("active") && $(this).attr("style") != undefined)) {
                let t = _GUI._CalcList[parseInt($(this).attr("id").replace("charSelect", ""))].Character.characterName;
                return $(this).next(".selectBoxContainer").children("[char='" + t + "']").click(), !1
            }
            return $(this).next(".selectBoxContainer").toggle("fast"), !1
        })), $("#charSelect" + e).on("contextmenu", (function(t) {
            if (_GUI.HidePopups(), $("#contextMenuContainer").show(), $("#contextMenuContainer").position({
                    my: "left top",
                    of: t,
                    collision: "fit"
                }), $(this).attr("style") != undefined) {
                let t = $(this).attr("id").replace("charSelect", ""),
                    e = div({
                        "class": "contextMenuItem",
                        id: "copyCharacter",
                        calcidx: t
                    }, "Copy to Empty Slot", "gui");
                e += div({
                    "class": "contextMenuItem",
                    id: "deleteSlot",
                    calcidx: t
                }, "Delete Slot", "gui"), e += div({
                    "class": "contextMenuItem",
                    id: "saveCharacter",
                    calcidx: t
                }, "Save As", "gui"), e += div({
                    "class": "contextMenuItem",
                    id: "loadCharacter",
                    calcidx: t
                }, "Load Build", "gui"), e += div({
                    "class": "contextMenuItem",
                    id: "shareBuild",
                    calcidx: t
                }, "Share Build", "gui"), $("#contextMenuContainer").html(e)
            } else {
                let t = div({
                    "class": "contextMenuItem",
                    id: "loadCharacter",
                    calcidx: $(this).attr("id").replace("charSelect", "")
                }, "Load Build", "gui");
                $("#contextMenuContainer").html(t)
            }
            return !1
        }))
    }
    HidePopups() {
        $(".selectBoxContainer").hide(), $("#contextMenuContainer").hide(), $(".popupMenu").hide()
    }
    DeleteDamageCalc(t) {
        this._CalcList.splice(t, 1), $("#charSelect" + (this._CalcList.length + 1)).parent(".selectBoxGroup").remove(), (this._CurCalcIdx > t || this._CalcList.length == t) && this._CurCalcIdx--, this.UpdatePortrait(!0), this.SetCharacter(this._CalcList[this._CurCalcIdx].Character.characterName, this._CurCalcIdx)
    }
    AddDamageCalc(t) {
        this._CurCalcIdx = this._CalcList.length;
        let e = new DamageCalculator(this, t);
        this._CalcList.push(e), this.AddCalcSlot(), t.Character ? this.LoadCalculator() : this.ResetGUI()
    }
    SwitchCalc(t) {
        this._CurCalcIdx = t, this._Calc = this._CalcList[this._CurCalcIdx], this.__Cache = {}
    }
    Resize(t) {
        window.matchMedia("screen and (max-width: 45em)").matches || window.matchMedia("screen and (max-height: 400px)").matches ? "small" != this.windowSize && (this.windowSize = "small", $("#dmgInfoContainer").insertAfter("#calcContainer"), $("#statsContainer").insertAfter("#calcContainer"), $("#characterSelect").insertBefore("#calcContainer .optionContainerC:nth-of-type(1)")) : window.matchMedia("screen and (max-width: calc(1024px + 60px))").matches ? "medium" != this.windowSize && (this.windowSize = "medium", $("#calcContainer").insertAfter("#dmgInfoContainer"), $("#characterSelect").insertBefore("#statsContainer .statHeaderLine")) : "large" != this.windowSize && (this.windowSize = "large", $("#calcContainer").insertAfter("#statsContainer"), $("#dmgInfoContainer").insertAfter("#calcContainer"), $("#characterSelect").insertBefore("#statsContainer .statHeaderLine")), window.matchMedia("screen and (max-width: 1920px)").matches ? ($("#fullLeftBannerParent.adban").html(div({
            id: "fullLeftBanner"
        })), $("#fullRightBannerParent.adban").html(div({
            id: "fullRightBanner"
        })), LoadBanners()) : ($("#fullLeftBanner").remove(), $("#fullRightBanner").remove())
    }
    ContextMenu(t) {
        return $("#contextMenuContainer").hide(), _GUI.DEBUG
    }
    Click(t) {
        _GUI.HidePopups()
    }
    Toast(t) {
        if (this.language) {
            let e = t.slice();
            t.constructor != Array && (e = t.split(","));
            for (let t in e) e[t] = Translate(e[t], "statTypes", Translate(e[t], "weaponData", Translate(e[t], "artifactData")));
            t = e.join(",")
        }
        let e = $(div({
            "class": "toast"
        }, t)).appendTo("#siteContainer");
        setTimeout((() => {
            e.remove()
        }), 2e3)
    }
    InitCalcContainer() {
        let t = "";
        for (let f in CharacterList) t += genTag("option", {
            value: f
        }, f);
        let e = genOptions({
            1: 1,
            20: 20,
            "20 Ascended": -20,
            40: 40,
            "40 Ascended": -40,
            50: 50,
            "50 Ascended": -50,
            60: 60,
            "60 Ascended": -60,
            70: 70,
            "70 Ascended": -70,
            80: 80,
            "80 Ascended": -80,
            90: 90
        }, "gui");
        $("#characterSelect").html(t), $("#charLvlSelect").html(e), $("#weaponLvlSelect").html(e);
        let a = {
                "HP %": "HPPercent",
                "ATK %": "ATKPercent",
                "DEF %": "DEFPercent",
                "Elemental Mastery": "ElementalMastery"
            },
            i = Object.assign({
                "Energy Recharge": "EnergyRecharge"
            }, a),
            s = Object.assign({
                "Pyro Damage": "PyroDMG",
                "Hydro Damage": "HydroDMG",
                "Dendro Damage": "DendroDMG",
                "Electro Damage": "ElectroDMG",
                "Anemo Damage": "AnemoDMG",
                "Cryo Damage": "CryoDMG",
                "Geo Damage": "GeoDMG",
                "Physical Damage": "PhysicalDMG"
            }, a),
            n = Object.assign({
                "Critical Rate": "CritRate",
                "Critical Damage": "CritDMG",
                "Healing Bonus": "Heal"
            }, a),
            r = "";
        for (let f in ArtifactList) r += genTag("option", {
            value: f
        }, Translate(f, "artifactData"));
        let l = "";
        l += div({
            "class": "optimizerRow"
        }, genTag("button", {
            "class": "gbutton hasToolTip",
            id: "openArtifactStorage"
        }, Translate("Open Artifact Storage", "gui") + div({
            "class": "tooltip"
        }, "Make sure adBlock/popup blockers are disabled.")) + genTag("button", {
            "class": "gbutton",
            id: "refreshArtifactStorage"
        }, Translate("Refresh Artifact Storage", "gui"))), l += GUIControl.GenArtifactSelect("Flower", r, GUIControl.GenMainStatSelect("Flower", {
            HP: "HP"
        })) + GUIControl.GenArtifactSelect("Feather", r, GUIControl.GenMainStatSelect("Feather", {
            ATK: "ATK"
        })) + GUIControl.GenArtifactSelect("Clock", r, GUIControl.GenMainStatSelect("Clock", i)) + GUIControl.GenArtifactSelect("Goblet", r, GUIControl.GenMainStatSelect("Goblet", s)) + GUIControl.GenArtifactSelect("Circlet", r, GUIControl.GenMainStatSelect("Circlet", n)), $(".artifactsContainer").html(l), $("#openArtifactStorage").on("click", (function(t) {
            CheckDependencies() ? window.open("./artifacts", "Artifact Storage", "scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=2024,height=2000") : _GUI.Toast("Make sure adBlock/popup blockers are disabled.")
        })), $("#refreshArtifactStorage").on("click", (function(t) {
            CheckDependencies() && !lstrfsh && (lstrfsh = !0, $("#refreshArtifactStorage").prop("disabled", !0), _GUI._ArtifactCtrl._DB.get().then((t => {
                _GUI._ArtifactCtrl.ClearSaves(), t.forEach((e => {
                    checkArt(t, GetUser());
                    let a = safeify(e.data());
                    _GUI._ArtifactCtrl.AddSaveData({
                        name: a.name,
                        id: e.id,
                        artifact: a.data
                    })
                }))
            })), setTimeout((() => {
                lstrfsh = !1, $("#refreshArtifactStorage").prop("disabled", !1)
            }), 1e4))
        }));
        let o = label({}, genTag("input", {
                name: "enemyElement",
                type: "radio",
                value: "None",
                oninput: "UpdateEnemyElement(this);",
                checked: !0
            }, Translate("None", "gui"))),
            c = "";
        for (let f in this._Calc.Enemy.resistance) "PhysicalDMG" != f && "AnemoDMG" != f && (o += label({}, genTag("input", {
            name: "enemyElement",
            type: "radio",
            value: f,
            oninput: "UpdateEnemyElement(this);"
        }, Translate(f.replace("DMG", ""), "gui")))), c += div({
            "class": "enemyOptionGroup"
        }, label({}, Translate(f.replace("DMG", ""), "gui")) + genTag("input", {
            name: "enemy" + f.replace("DMG", "RES"),
            id: f.replace("DMG", "RESVal"),
            oninput: "UpdateEnemyRes(this)",
            type: "number",
            min: 0,
            max: 100,
            value: 0
        }));
        o += label({}, genTag("input", {
            name: "enemyElement",
            type: "radio",
            value: "Frozen",
            oninput: "UpdateEnemyElement(this);"
        }, Translate("Frozen", "gui")));
        let h = genTag("option", {
            value: "None"
        }, Translate("None", "gui"));
        for (let f in EnemyList) h += genTag("option", {
            value: f
        }, Translate(f, "enemyData"));
        $("#enemySelect").html(h), $("#enemyElementGroup").html(o), $("#enemyResGroup").html(c);
        let u = "";
        for (let f in ElementalResonanceList) {
            let t = label({
                element: ElementalResonanceList[f].element
            }, genTag("input", {
                type: "checkbox",
                name: "ElementalResonance",
                value: f,
                oninput: "UpdateResonance(this);"
            }) + (Translate(f, "resonanceData").name ?? f));
            "Protective Canopy" == f ? u = t + u : u += t
        }
        $("#resonanceContainer").html(u), this.FillResonance(), this.InitPartyBuffContainer(), $("#artifactTarget").html(genOptions({
            Flower: "Flower",
            Feather: "Feather",
            Clock: "Clock",
            Goblet: "Goblet",
            Circlet: "Circlet"
        }, "gui")), $("#optimizeArtifact").on("click", OptimizeArtifact), $("#optimizeFromDB").on("click", OptimizeFromDB), $("#optimizeAllFromDB").on("click", OptimizeAllFromDB), $("#optimizeSubstat").on("click", OptimizeSubstat), $("#optimizeSets").on("click", OptimizeSets), $("#optimizeWeapon").on("click", OptimizeWeapon), $(".tabMenuRow").on("click", ".tabMenuItem", (function(t) {
            let e = $(this).parent(".tabMenuRow");
            e.children(".tabMenuItem").removeAttr("active"), $(t.target).attr("active", !0);
            let a = $("#" + e.attr("for"));
            a.children(".tabItem").removeAttr("active");
            let i = $(t.target).attr("for");
            a.find("#" + i).attr("active", "true"), a = $("#" + e.attr("linked")), a.children(".tabItem").removeAttr("active"), i = $(t.target).attr("for"), a.find("[for='" + i + "']").attr("active", "true")
        })), $(".artifactButton").on("contextmenu", (function(t) {
            $("#contextMenuContainer").show(), $(".selectBoxContainer").hide(), $("#contextMenuContainer").position({
                my: "left top",
                of: t,
                collision: "fit"
            });
            let e, a = $(this).attr("icon");
            return e = div({
                "class": "contextMenuItem",
                id: "saveArtifact",
                artifactType: a
            }, "Save Artifact As", "gui"), e += div({
                "class": "contextMenuItem",
                id: "loadArtifact",
                artifactType: a
            }, "Load Artifact", "gui"), $("#contextMenuContainer").html(e), !1
        })), $(".artifactButton").on("click", this.ShowArtifactLoadList), $(".dropDownButton").on("click", (function(t) {
            $(this).children("span").toggle(), $(this).next(".dropDown").slideToggle("fast")
        })), $("select").on("change", (function(t) {
            UpdateMinMaxRange(this)
        })), $("input[type=range]").on("change", (function(t) {
            UpdateRangeLabel(this)
        })), $("input.rangeEntry").on("change", (function(t) {
            let e = $('input[name="' + $(this).attr("name").replace("Input", "") + '"]');
            if ("." == $(this)[0].value.slice(-1)) return;
            let a = LocaleParseFloat($(this)[0].value) / ("true" == $(e).attr("percent") ? 100 : 1);
            $(e).val(a).trigger("change"), $(this).next("label").val(a)
        })), $("#siteContainer").on("click", ".statsHeader", (function(t) {
            let e = $(this).attr("for");
            e && $(".damageGroup[for='" + e + "']").slideToggle()
        })), $(".hasToolTip").on("mouseover", (function(t) {
            $(this).find(".tooltip").css("top", $(this).position().top + $(this).height())
        })), $(".selectBoxContainer").hide(), $("#optimizeTarget").on("change", (function(t) {
            let e = $(t.target).val();
            _GUI._Calc.optimizerTarget = e, "Default" == e && (e = $("[stat='Total DPS']").is(":hidden") ? "DPS" : "Total DPS"), $(":not([stat=''])").removeAttr("optimizingFor"), $("[stat='" + e + "']").attr("optimizingFor", !0)
        }))
    }
    static GenMainStatSelect(t, e) {
        return genTag("select", {
            name: t + "MainStat",
            id: t + "MainStatSelect",
            onchange: "UpdateArtifactMainStatType(this)"
        }, genOptions(e, "statTypes"))
    }
    static GenArtifactSelect(t, e, a, i = !1) {
        let s = div({
            "class": "optionContainer"
        }, div({
            icon: t,
            "class": "icon artifactButton hasToolTip",
            artifactType: t
        }, div({
            "class": "tooltip"
        }, "Left click to Load. Right click to see more options.")) + label({
            "class": "artifactLevelContainer"
        }, "+" + genTag("input", {
            name: t + "Level",
            min: 0,
            type: "number",
            oninput: "UpdateArtifactLevel(this)"
        }) + genTag("button", {
            id: t + "SetMax",
            "class": "setMaxButton",
            onclick: "SetArtifactMax(this)"
        }, "Max", "gui")) + div({
            "class": "rarityContainer"
        }, n(5) + n(4) + n(3) + n(2) + n(1)) + label({}, "Set: " + genTag("select", {
            name: t + "Set",
            id: t + "SetSelect",
            onchange: "UpdateArtifactSetPiece(this)"
        }, e))) + genTag("div", {
            "class": "mainStatContainer"
        }, div({
            "class": "mainStatGroup"
        }, a + div({}, div({
            id: t + "MainStatValue",
            "class": "mainStatValueDisplay"
        }))) + genTag("div", {}, label({
            "class": "optionalInputLabel hasToolTip"
        }, "Initial Substat #:" + div({
            "class": "tooltip"
        }, "This is the number of substats your artifact started with when you found it at +0.")) + genTag("input", {
            type: "number",
            id: t + "InitSubstatValue",
            onchange: "UpdateArtifactInitialSubstatValue(this)"
        })));
        return s += r(t, 1), s += r(t, 2), s += r(t, 3), s += r(t, 4), s;

        function n(e) {
            let a = genTag("input", {
                type: "radio",
                "class": "raritySelectInput",
                value: e,
                name: t + "Rarity",
                id: t + "Rarity" + e,
                oninput: "UpdateArtifactRarity(this)"
            });
            return a += label({
                "for": t + "Rarity" + e
            }), a
        }

        function r(t, e) {
            return div({
                "class": "dropGroup"
            }, div({
                "class": "dropDownButton"
            }, "Substat" + div() + genTag("span", null, "&#x25BC;") + genTag("span", {
                hidden: "true"
            }, "&#x25B2;")) + div({
                "class": "dropDown",
                hidden: !0
            }, div({
                "class": "dropOptionContainer"
            }, genTag("label", {
                "for": t + "Substat" + e
            }) + div({
                "class": "optionGroup"
            }, genTag("select", {
                name: t + "Substat" + e,
                id: t + "Substat" + e + "Select"
            }, genOptions(SubstatOptions, "statTypes"))) + div({
                "class": "rangeOptionGroup"
            }, div({
                "class": "rangeContainer"
            }, genTag("input", {
                name: t + "Substat" + e + "Value",
                type: "range",
                value: 0,
                onchange: "UpdateArtifactSubstat(this)"
            })) + genTag("label", {
                "for": t + "Substat" + e + "Value"
            }, genTag("input", {
                name: t + "Substat" + e + "ValueInput",
                "class": "rangeEntry"
            }, genTag("span")))))).replace(i ? "hidden='true'" : "", ""))
        }
    }
    InitStatContainer() {
        let t = !1,
            e = div({
                "class": "statHeaderLine"
            }, div({
                "class": "statContainer"
            }, div({
                "class": "statName"
            }, "Stat", "gui") + div({
                "class": "statValue"
            }, "Value", "gui")) + div({
                "class": "statMod"
            }, div({
                "class": "modLabel"
            }, "Mod", "gui") + div({
                "class": "statTotal"
            }, "Total", "gui"))),
            a = [],
            i = 0;
        a[0] = "";
        for (let n in (new Stats).stats) n.search("Percent") > 1 ? a[0] += s(n, 0, 0, !0, !0) : (a[i] += s(n, 0, 0, t), "Stamina" != n && "PowerfulShield" != n && "PhysicalRES" != n || (i++, a[i] = "", t = !0));

        function s(t, e, a, i = !1, s = !1) {
            let n = e + a,
                r = Translate(t, "statTypes").replace("Percent", " %").replace("Rate", " %").replace("Attack", "Atk").replace("ElementalSkill", "Skill").replace("ElementalBurst", "Burst");
            return div({
                "class": "statLineContainer",
                id: t.search("%") > 0 ? t.replace(" %", "Percent") : t
            }, div({
                "class": "statContainer"
            }, div({
                "class": "statName"
            }, div({
                "class": "statNameText"
            }, genTag("div", {
                "class": "icon",
                icon: t
            }) + r)) + div({
                "class": "statValue",
                zero: 0 == e
            }, div({
                "class": "statValueText"
            }, FormatStat(s ? 0 : e, i)))) + div({
                "class": "statMod"
            }, div({
                zero: 0 == a,
                "class": "statModText"
            }, (a > 0 ? "+" : "") + FormatStat(a, i)) + div({
                "class": "statTotal",
                zero: 0 == n
            }, div({
                "class": "statTotalText"
            }, FormatStat(n, !s && i)))))
        }
        e += div({
            "class": "statsHeader",
            "for": "base"
        }, "Base Stats", "gui"), e += div({
            "class": "damageGroup",
            "for": "base"
        }, a[0]), e += div({
            "class": "statsHeader",
            "for": "advanced"
        }, "Advanced Stats", "gui"), e += div({
            "class": "damageGroup",
            "for": "advanced"
        }, a[1]), e += div({
            "class": "statsHeader",
            "for": "buffs"
        }, "Buffs", "gui"), e += div({
            "class": "damageGroup",
            "for": "buffs"
        }, a[3]), e += div({
            "class": "statsHeader",
            "for": "elemental"
        }, "Elemental Type", "gui"), e += div({
            "class": "damageGroup",
            "for": "elemental"
        }, a[2]), $("#statsContainer").html(div({
            "class": "statsTitle"
        }) + e)
    }
    InitPartyBuffContainer() {
        let t = ["", "", "", ""],
            e = 0;
        for (let a in PartyBuffList) {
            let i = "",
                s = Translate(a, "partyData", PartyBuffList[a]);
            for (let t in PartyBuffList[a]) {
                let e = "",
                    n = s[t];
                for (let i in PartyBuffList[a][t].variables) e += label({
                    "class": "buffInputRow"
                }, genTag("span", {}, (this.language ? n.variables[i] : i) + ":") + genTag("input", {
                    type: "number",
                    buff: a,
                    idx: t,
                    varName: i,
                    value: PartyBuffList[a][t].variables[i],
                    oninput: "UpdatePartyBuff(this)"
                }));
                "" != e && (e = div({
                    "class": "buffVars"
                }, e));
                let r = "";
                if (PartyBuffList[a][t].effect || PartyBuffList[a][t].debuff || PartyBuffList[a][t].varEffect ? r += label({
                        "class": "buffInputRow"
                    }, genTag("input", {
                        type: "checkbox",
                        buff: a,
                        idx: t,
                        oninput: "UpdatePartyBuff(this)"
                    }) + genTag("span", {}, Translate(a, "partyData", PartyBuffList[a])[t].desc)) : PartyBuffList[a][t].stack ? r += label({
                        "class": "buffInputRow"
                    }, genTag("span", {}, "Stacks:") + genTag("input", {
                        type: "number",
                        buff: a,
                        idx: t,
                        min: 0,
                        value: 0,
                        max: PartyBuffList[a][t].stackCount,
                        oninput: "UpdatePartyBuff(this)"
                    }) + genTag("span", {}, Translate(a, "partyData", PartyBuffList[a])[t].desc)) : r += div({
                        "class": "buffInputRow"
                    }, Translate(a, "partyData", PartyBuffList[a])[t].desc), PartyBuffList[a][t]["switch"]) {
                    let e = div({
                        "class": "buffSwitchRow"
                    }, label({
                        "class": "buffInputRow"
                    }, genTag("input", {
                        type: "radio",
                        buff: a,
                        idx: t,
                        op: 0,
                        name: "group" + a + t,
                        oninput: "UpdatePartyBuff(this)"
                    }) + genTag("span", {}, Translate("None", "gui"))));
                    for (let i in PartyBuffList[a][t]["switch"]) {
                        PartyBuffList[a][t]["switch"][i];
                        let s = n["switch"][i].option;
                        e += div({
                            "class": "buffSwitchRow"
                        }, label({
                            "class": "buffInputRow"
                        }, genTag("input", {
                            type: "radio",
                            buff: a,
                            idx: t,
                            op: parseInt(i) + 1,
                            name: "group" + a + t,
                            oninput: "UpdatePartyBuff(this)"
                        }) + genTag("span", {}, s)))
                    }
                    r += div({
                        "class": "buffSwitchGroup"
                    }, e)
                }
                let l = "";
                for (let i in PartyBuffList[a][t].nested) l += label({
                    "class": "buffInputRow nestedBuffRow"
                }, genTag("input", {
                    type: "checkbox",
                    buff: a,
                    idx: t,
                    nest: i,
                    oninput: "UpdatePartyBuff(this)"
                }) + genTag("span", {}, Translate(a, "partyData", PartyBuffList[a])[t].nested[i].desc));
                i += div({
                    "class": "buffRow"
                }, r + e + l)
            }
            t[e] += div({
                "class": "partyBuffContainer",
                buff: a
            }, div({
                "class": "buffTitle"
            }, a, ["artifactData", "characterData", "gui"]) + i), "Superconduct" != a && "Xingqiu" != a && "Archaic Petra" != a || e++
        }
        $(".damageGroup[for='ElementalReactionPartyBuffs']").html(t[0]), $(".damageGroup[for='CharacterPartyBuffs']").html(t[1]), $(".damageGroup[for='ArtifactPartyBuffs']").html(t[2]), $(".damageGroup[for='WeaponPartyBuffs']").html(t[3])
    }
    DisplayStats() {
        $("#characterSelect").attr("element", this._Calc.Character.element);
        let t = !1;
        for (let a in this._Calc.Character.baseStats.stats)
            if (a.search("Percent") > 1) {
                let t = this._Calc.Character.baseStats.stats[a.replace("Percent", "")],
                    i = this._Calc.Character.modifiers.mods[a],
                    s = t * this._Calc.Character.modifiers.mods[a];
                e(a, "Value", t, !1), e(a, "Mod", i, !0), e(a, "Total", s, !1)
            } else {
                {
                    let i = this._Calc.Character.baseStats.stats[a],
                        s = this._Calc.Character.modStats.stats[a],
                        n = i + s;
                    e(a, "Value", i, t), e(a, "Mod", s, t), e(a, "Total", n, t)
                }
                "Stamina" == a && (t = !0)
            }
        function e(t, e, a, i) {
            let s, n = $("#" + t),
                r = ".stat" + e;
            n.find(r + "Text").text(FormatStat(a, i)), s = "Mod" == e ? r + "Text" : r, n.find(s).attr("zero", 0 == a)
        }
    }
    InitDamageContainer() {
        let t = div({
            "class": "statsTitle"
        }, "Damage", "gui");
        t += div({
            "class": "statHeaderLine"
        }, div({
            "class": "statContainer"
        }, div({
            "class": "statName"
        }, "Hit Type", "gui") + div({
            "class": "statValue"
        }, "Non-crit", "gui")) + div({
            "class": "statMod"
        }, div({
            "class": "modLabel"
        }, "Crit", "gui") + div({
            "class": "statTotal"
        }, "Average", "gui")));
        let e = [],
            a = 0;
        e[0] = "";
        for (let i in this.DamageDisplayList) {
            let t = this.DamageDisplayList[i];
            "DPS" != t && "Wep Bonus Hit" != t && "Electrocharged" != t || (a++, e[a] = "");
            let s = "";
            "Overloaded" == t ? s = "PyroDMG" : "Electrocharged" == t ? s = "ElectroDMG" : "Superconduct" == t ? s = "CryoDMG" : -1 != t.search("Swirl") ? s = t.replace(" Swirl", "DMG") : "Shattered" == t && (s = "PhysicalDMG");
            let n = Translate(t, "gui");
            if (this.Translator) {
                n = this.Translator.TranslateCharacter("Amber").normal.calcStats[t] ?? Translate(t, "gui")
            }
            e[a] += div({
                "class": "statLineContainer",
                stat: t
            }, div({
                "class": "statContainer"
            }, div({
                "class": "statName"
            }, n) + div({
                "class": "statValue"
            }, "")) + div({
                "class": "statMod"
            }, div({
                "class": "statModValue"
            }, "") + div({
                "class": "statTotal",
                element: s
            }, "")))
        }
        t += div({
            "class": "statsHeader",
            "for": "dps"
        }, "DPS", "gui"), t += div({
            "class": "damageGroup",
            "for": "dps"
        }, e[1]), t += div({
            "class": "statsHeader",
            "for": "normal"
        }, "Normal Attack", "gui"), t += div({
            "class": "damageGroup",
            "for": "normal"
        }, e[0] + div({
            "for": "extras"
        })), t += div({
            "class": "statsHeader",
            "for": "bonus"
        }, "Bonus Hits", "gui"), t += div({
            "class": "damageGroup",
            "for": "bonus"
        }, e[2]), t += div({
            "class": "statsHeader",
            "for": "reaction"
        }, "Elemental Reactions", "gui"), t += div({
            "class": "damageGroup",
            "for": "reaction"
        }, e[3]), $("#damageContainer").html(t)
    }
    SetReactionModeProc(t, e = !1) {
        return !(this.reactionProcChance == t && !e) && (this.reactionProcChance = t, this._Calc.reactionProcChance = t, this.reactionProcChance > 0 ? ($("#damageContainer > .statHeaderLine .statValue").text(Translate("Reactionless", "gui")), $("#damageContainer > .statHeaderLine .modLabel").text(Translate("W/ Reaction", "gui"))) : ($("#damageContainer > .statHeaderLine .statValue").text(Translate("Non-crit", "gui")), $("#damageContainer > .statHeaderLine .modLabel").text(Translate("Crit", "gui"))), !0)
    }
    DisplayDamage(t, e, a, i, s, n) {
        let r = this.reactionProcChance > 0;
        for (let c in this.DamageDisplayList) {
            let i = this.DamageDisplayList[c];
            if (t[i] == undefined) {
                $("div[stat='" + i + "']").hide();
                continue
            }
            let s = n[i]; - 1 == "Burning Crystalize Melt Overloaded Vaporize Electrocharged Superconduct Frozen Shattered".search(i) ? (o(i, "Value", r ? this._Calc.NoReaction(a[i], s, a) : t[i]), o(i, "ModValue", r ? this._Calc.ReactionCalc(a[i], s, a, !1) : e[i]), o(i, "Total", r ? this._Calc.ReactionCalc(a[i], s, a, !0) : a[i], s)) : "Vaporize" == i || "Melt" == i ? o(i, "Total", a[i], s, !0) : o(i, "Total", a[i], s)
        }
        for (let c in this._Calc.Character.calcStats.damage) {
            let n = this._Calc.Character.calcStats.damage[c],
                l = n.stat,
                h = "Elemental" == n.damageElement ? s : "Default" == n.damageElement ? i : n.damageElement;
            o(l, "Value", r ? this._Calc.NoReaction(a[l], h, a) : t[l]), o(l, "ModValue", r ? this._Calc.ReactionCalc(a[l], h, a, !1) : e[l]), o(l, "Total", r ? this._Calc.ReactionCalc(a[l], h, a, !0) : a[l], h)
        }
        let l = this._Calc.Character.skillDamage.concat(this._Calc.Character.burstDamage);
        for (let c in l) {
            let i = l[c],
                s = i.stat,
                n = i.damageElement ?? this._Calc.Character.element;
            o(s, "Value", r ? this._Calc.NoReaction(a[s], n, a) : t[s]), o(s, "ModValue", r ? this._Calc.ReactionCalc(a[s], n, a, !1) : e[s]), o(s, "Total", r ? this._Calc.ReactionCalc(a[s], n, a, !0) : a[s], n)
        }
        for (let c in this._Calc.Character.calcStats.value) {
            let t = this._Calc.Character.calcStats.value[c],
                e = t.stat,
                a = t.value(this._Calc.Character);
            o(e, "Value", a), o(e, "ModValue", 0), o(e, "Total", a)
        }

        function o(t, e, a, i, s = !1) {
            let n = $("div[stat='" + t + "']"),
                r = ".stat" + e;
            n.find(r).text(FormatStat(a, s, 0)), n.find(r).attr("zero", 0 == a), "None" != i && n.find(r).attr("element", i), n.show()
        }
    }
    SetCharacter(t, e) {
        e >= this._CalcList.length ? (this.DEBUG && console.log("New"), this.AddDamageCalc(t)) : e != this._CurCalcIdx ? (this.DEBUG && console.log("Old"), this.SwitchCalc(e), this.LoadCalculator()) : (this.DEBUG && console.log("Same"), this._Calc.SetCharacter(t) || this._Calc.Recalc()), $("#statsContainer > .statsTitle").text(Translate(this._Calc.Character.characterName, "characterData")), $("#statsContainer > .statsTitle").attr("element", this._Calc.Character.element)
    }
    SetConstellationLevel(t) {
        this.constellationLvl = t <= 6 ? t : 6, this._Calc.SetConstellationLevel(), this._Calc.Recalc()
    }
    SetCharLevel(t) {
        this.characterLvl = t, this._Calc.SetCharLvl(), this._Calc.Recalc()
    }
    SetNormalLvl(t) {
        this.normalLvl = t, this._Calc.SetNormalLvl(), this._Calc.Recalc()
    }
    SetSkillLvl(t) {
        this.skillLvl = t, this._Calc.SetSkillLvl(), this._Calc.Recalc()
    }
    SetBurstLvl(t) {
        this.burstLvl = t, this._Calc.SetBurstLvl(), this._Calc.Recalc()
    }
    SetWeaponLevel(t) {
        this.weaponLvl = t, this._Calc.SetWeaponLvl(), this._Calc.Recalc()
    }
    SetWeaponRefine(t) {
        this.weaponRefine = t, this._Calc.SetWeaponRefine(), this._Calc.Recalc()
    }
    SetWeaponName(t) {
        this.weaponName = t, this._Calc.SetWeapon()
    }
    SetArtifactLevel(t, e) {
        this._Calc.SetArtifactLevel(t, e) || this._Calc.Recalc(), this.UpdateArtifactMainStatValue(t)
    }
    SetArtifactMainStatType(t, e) {
        this._Calc.SetArtifactMainStatType(t, e) || this._Calc.Recalc(), this.UpdateArtifactMainStatValue(t)
    }
    SetArtifactSetPiece(t, e) {
        this._Calc.SetArtifactSetPiece(t, e) || (this._Calc.Recalc(), this.PopulateArtifactBuffs()), this.UpdateArtifactRarityLimit(t)
    }
    SetArtifactSubstat(t, e, a, i) {
        this._Calc.SetArtifactSubstat(t, e, a, i) || this._Calc.Recalc()
    }
    SetArtifactRarity(t, e) {
        this._Calc.SetArtifactRarity(t, e), this.UpdateArtifactLevelLimit(t), this.UpdateArtifactInitialSubstats(t), this._Calc.Recalc()
    }
    SetArtifactInitialSubstatValue(t, e) {
        this._Calc.SetArtifactInitialSubstatValue(t, e), this._Calc.Recalc()
    }
    UpdateArtifactInitialSubstats(t) {
        $("#" + t + "InitSubstatValue").attr("min", this._Calc.Artifacts.artifacts[t].minSubstat), $("#" + t + "InitSubstatValue").attr("max", this._Calc.Artifacts.artifacts[t].minSubstat + 1), $("#" + t + "InitSubstatValue").val(this._Calc.Artifacts.artifacts[t].startingSubstats)
    }
    UpdateArtifact(t) {
        let e = this._Calc.Artifacts.artifacts[t];
        $("#" + t + "MainStatSelect").val(e.mainStat.statType), $("input[name='" + t + "Level']").val(e.level);
        for (let a in e.subStats) {
            let i = e.subStats[a],
                s = parseInt(a) + 1;
            $("#" + t + "Substat" + s + "Select").val(i.statType), UpdateMinMaxRange("#" + t + "Substat" + s + "Select", !0), $("input[name='" + t + "Substat" + s + "Value']").val(i.statModValue), UpdateRangeLabel("input[name='" + t + "Substat" + s + "Value']")
        }
        $("#" + t + "SetSelect").val(e.setPiece), this.UpdateArtifactRarityLimit(t), this.PopulateArtifactBuffs()
    }
    UpdateArtifactLevelLimit(t) {
        $("input[name='" + t + "Level']").attr("max", this._Calc.Artifacts.artifacts[t].maxLevel), $("input[name='" + t + "Level']").val(this._Calc.Artifacts.artifacts[t].level), this.UpdateArtifactMainStatValue(t)
    }
    UpdateArtifactRarityLimit(t) {
        let e = this._Calc.Artifacts.artifacts[t].maxRarity;
        for (let a = 1; a <= 5; a++) a == e || a == e - 1 && a >= 3 ? ($("#" + t + "Rarity" + a).removeAttr("disabled"), $("label[for='" + t + "Rarity" + a + "']").removeAttr("disable")) : ($("#" + t + "Rarity" + a).attr("disabled", "true"), a > e && $("label[for='" + t + "Rarity" + a + "']").attr("disable", "true"));
        $("#" + t + "Rarity" + this._Calc.Artifacts.artifacts[t].rarity).prop("checked", !0), this.UpdateArtifactLevelLimit(t), this.UpdateArtifactInitialSubstats(t)
    }
    UpdateArtifactMainStatValue(t) {
        let e = this._Calc.Artifacts.artifacts[t].mainStat.statType,
            a = !("ElementalMastery" == e || "HP" == e || "HP" == e || "ATK" == e);
        $("#" + t + "MainStatValue").text(FormatStat(this._Calc.Artifacts.artifacts[t].mainStat.statModValue, a))
    }
    RefreshWeaponDisplay() {
        $("#watk").text(this._Calc.Weapon.GetAttack());
        let t = this._Calc.Weapon.GetSubStat();
        $("#wsub").text(Translate(t.statType, "statTypes"));
        let e = t.statModValue;
        e = "ElementalMastery" == t.statType ? e.toLocaleString(undefined, {
            maximumFractionDigits: 0
        }) : (100 * e).toLocaleString(undefined, {
            maximumFractionDigits: 2
        }) + "%", $("#wsubval").text(e)
    }
    PopulateWeapons(t = !1) {
        let e = "";
        for (let a in WeaponList) WeaponList[a][0] == this._Calc.Character.characterWeaponType && (e += genTag("option", {
            value: a
        }, a, "weaponData"));
        $("#weaponSelect").html(e), t || UpdateWeaponName()
    }
    PopulateWeaponAbility(t) {
        let e = this._Calc.Weapon.weaponAbility,
            a = this._Calc.Weapon.refine,
            i = Translate(this._Calc.Weapon.weaponAbilityName, "weaponAbilityData", this._Calc.Weapon.weaponAbility).desc;
        if ($("#WeaponAbilityContainer").html(div({
                "class": ""
            }, i)), (e.toggle || e.additionalAttack?.toggle_hit || e.toggle_scale || e.toggle_scales) && $("#WeaponAbilityContainer").append(div({
                "class": "WepAbilLine"
            }, genTag("label", {
                id: "weaponAbilityLabel"
            }, genTag("input", {
                type: "checkbox",
                id: "weaponAbilityToggle",
                onchange: "ToggleWeaponBuff(this)"
            }) + "Toggle Ability"))), e["switch"]) {
            $("#WeaponAbilityContainer").append(div({
                "class": "WepAbilOpLine"
            })), $("#WeaponAbilityContainer > .WepAbilOpLine").append(div(null, genTag("label", {}, genTag("input", {
                type: "radio",
                id: "wabilswitchNone",
                name: "weaponAbilitySwitch",
                oninput: "SelectWeaponSwitchBuff(this)"
            }) + "None")));
            for (let t in e["switch"][a]) {
                let i = e["switch"][a][t];
                $("#WeaponAbilityContainer > .WepAbilOpLine").append(div(null, genTag("label", {}, genTag("input", {
                    type: "radio",
                    id: "wabilswitch" + t,
                    name: "weaponAbilitySwitch",
                    oninput: "SelectWeaponSwitchBuff(this)"
                }) + i.option)))
            }
        }
        if (e.stack) {
            let t = e.stackCount,
                a = genTag("option", {
                    value: 0
                }, "None");
            for (let e = 0; e < t; e++) a += genTag("option", {
                value: e + 1
            }, e + 1 + " Stack" + (e > 0 ? "s" : ""));
            $("#WeaponAbilityContainer").append(div({
                "class": "WepAbilLine"
            }, "Stacks:" + genTag("select", {
                id: "weaponAbilityStacks",
                name: this._Calc.Weapon.weaponAbilityName,
                onchange: "UpdateWeaponStacks(this)"
            }, a)))
        }
        t || this._Calc.Recalc(), $("#optimizeTarget").trigger("change")
    }
    PopulateArtifactBuffs() {
        $("#buffContainer").html(div({
            "class": "statsHeader"
        }, "Artifact Effects", "gui"));
        for (let t in this._Calc.Character.Artifacts.setEffects) {
            let e = this._Calc.Character.Artifacts.setEffects[t],
                a = this._Calc.Character.Artifacts.setID[t],
                i = e["switch"],
                s = e.select,
                n = e.toggle ?? e.toggle_debuff,
                r = (e.effect, Translate(a.set, "artifactSetData", e, a.idx).desc);
            if (n ? $("#buffContainer").append(label({
                    "class": "statLineContainer artifactToggleLabel"
                }, genTag("input", {
                    type: "checkbox",
                    effectNum: t,
                    name: t,
                    "class": "artifactBuffToggle",
                    onchange: "ToggleArtifactBuff(this)"
                }, r))) : $("#buffContainer").append(div({
                    "class": "statLineContainer"
                }, r)), i) {
                $("#buffContainer").append(label({
                    "class": "statLineContainer"
                }, genTag("input", {
                    type: "radio",
                    effectNum: -1,
                    name: t,
                    "class": "artifactBuffSwitch",
                    oninput: "SwitchArtifactBuff(this)"
                }, "None")));
                for (let e in i) {
                    let a = i[e];
                    $("#buffContainer").append(label({
                        "class": "statLineContainer"
                    }, genTag("input", {
                        type: "radio",
                        effectNum: e,
                        name: t,
                        "class": "artifactBuffSwitch",
                        oninput: "SwitchArtifactBuff(this)"
                    }, a.option)))
                }
            }
            if (s)
                for (let l in s) {
                    let e = s[l];
                    $("#buffContainer").append(label({
                        "class": "statLineContainer"
                    }, genTag("input", {
                        type: "checkbox",
                        effectNum: l,
                        name: t,
                        "class": "artifactBuffSelect",
                        onchange: "SelectArtifactBuff(this)"
                    }, e.option)))
                }
        }
    }
    PopulateSkillAndBurst() {
        for (let i in this.DPSDisplay) $(".statLineContainer[stat='" + i + "']").remove();
        this.DPSDisplay = {};
        let t = this._Calc.Character.skill,
            e = this._Calc.Character.burst,
            a = this._Calc.Character.extras;
        this.optimizerTargets = {
            Default: "Default",
            Melt: "Melt",
            Vaporize: "Vaporize",
            Electrocharged: "Electrocharged",
            Overloaded: "Overloaded",
            Superconduct: "Superconduct",
            "Charge Attack 1": "Charge Attack 1",
            "Charge Attack 2": "Charge Attack 2",
            Plunge: "Plunge",
            "Low Plunge": "Low Plunge",
            "High Plunge": "High Plunge"
        }, $(".damageGroup[for=burst]").html(this.FillTalent(e, "burst")), $(".damageGroup[for=skill]").html(this.FillTalent(t, "skill")), $("[for=extras]").html(a ? this.FillTalent(a) : ""), $("#optimizeTarget").html(genOptions(this.optimizerTargets, "gui")), $("#optimizeTarget").val(this._Calc.optimizerTarget ?? "Default").trigger("change")
    }
    PopulatePassives() {
        for (let a in this.DPSDisplay) - 1 != this.DPSDisplay[a]?.search("passive") && ($(".statLineContainer[stat='" + a + "']").remove(), this.DPSDisplay[a] = undefined);
        let t = "",
            e = this._Calc.Character.passives;
        for (let a in e) this._Calc.Character["hasPassive" + a] && (t += this.FillTalent(e[a], "passive" + a));
        $(".damageGroup[for=passives]").html(t), $("#optimizeTarget").html(genOptions(this.optimizerTargets, "gui")), $("#optimizeTarget").val(this._Calc.optimizerTarget ?? "Default").trigger("change")
    }
    PopulateConstellations() {
        for (let a in this.DPSDisplay) - 1 != this.DPSDisplay[a]?.search("constellation") && ($(".statLineContainer[stat='" + a + "']").remove(), this.DPSDisplay[a] = undefined);
        let t = "",
            e = this._Calc.Character.constellations;
        for (let a = 0; a < this._Calc.Character.cLevel; a++) t += this.FillTalent(e[a], "constellation" + a);
        $(".damageGroup[for=constellations]").html(t), $("#optimizeTarget").html(genOptions(this.optimizerTargets, "gui")), $("#optimizeTarget").val(this._Calc.optimizerTarget ?? "Default").trigger("change")
    }
    FillTalent(t, e) {
        let a, i = "",
            s = t;
        if ("skill" == e || "burst" == e) s = Translate(this._Calc.Character.characterName, "talentData", t, e);
        else if (e == undefined) s = Translate(this._Calc.Character.characterName, "talentData", t, "extras");
        else if (-1 != e.search("passive")) {
            let a = parseInt(e.replace("passive", ""));
            s = Translate(this._Calc.Character.characterName, "talentData", t, ["passives", a])
        } else if (-1 != e.search("constellation")) {
            let a = parseInt(e.replace("constellation", ""));
            s = Translate(this._Calc.Character.characterName, "talentData", t, ["constellations", a])
        }(t.toggle || t.varToggle || t.varToggle_debuff || t.toggle_scale || t.toggle_debuff || t.skill && t.skill.toggle || t.burst && t.burst.toggle || t.extras && t.extras.toggle || t.normal && t.normal.toggle) && (i = genTag("input", {
            type: "checkBox",
            oninput: "ToggleTalent(this)"
        }), a = "TalentToggleLabel"), (t.stack || t.stack_scale) && (i += genTag("input", {
            type: "number",
            oninput: "UpdateTalentStacks(this)",
            max: t.stackCount,
            min: 0,
            value: 0
        }), a += " TalentStackLabel");
        let n = "";
        if (e && (n += label({
                "class": "statLineContainer " + a,
                stat: e
            }, div({
                "class": "statTalentContainer"
            }, div({
                "class": "statLabel"
            }, i + s.name) + div({
                "class": "statText"
            }, s.desc)))), t.calcStats)
            for (let r in t.calcStats) {
                let e = s.calcStats[r].stat;
                this.Translator && (s?.calcStats?.[t.calcStats[r].stat] ?? s?.calcStats?.[t.calcStats[r].translationKey] ?? t.calcStats[r].stat), t.calcStats[r].translationSuffix && this.langCode;
                let a = div({
                    "class": "statLineContainer",
                    stat: t.calcStats[r].stat
                }, div({
                    "class": "statContainer"
                }, div({
                    "class": "statName"
                }, e) + div({
                    "class": "statValue"
                }, 0)) + div({
                    "class": "statMod"
                }, div({
                    "class": "statModValue"
                }, 0) + div({
                    "class": "statTotal"
                }, 0)));
                n += a, -1 != t.calcStats[r].stat.search("DPS") && (this.DPSDisplay[t.calcStats[r].stat] || ($(".damageGroup[for='dps']").append(a), this.DPSDisplay[t.calcStats[r].stat] = e)), this.optimizerTargets[e] = t.calcStats[r].stat
            }
        return n
    }
    SelectEnemy(t) {
        this.enemyName = t, "None" != t && (this._Calc.Enemy.setEnemy(t), _GUI.PopulateEnemyTypes(), _GUI.FillEnemyRes()), _GUI.FillEnemyElementalTypes(), this._Calc.hitEnemy && this._Calc.Recalc()
    }
    FillEnemyRes() {
        let t = this._Calc.Enemy.resistance;
        for (let e in t) $("#" + e.replace("DMG", "RESVal")).val(100 * t[e])
    }
    FillEnemyElementalTypes() {
        let t = EnemyList[this.enemyName]?.Elemental;
        if (t) {
            let e = "";
            for (let a in t) e += genTag("option", {
                value: a
            }, Translate(a.replace("DMG", " "), "gui") + Translate(this.enemyName, "enemyData"));
            $("#enemyElementSelect").html(e), this.FillEnemyElement()
        }
    }
    FillEnemyElement() {
        let t = this._Calc.Enemy.currentElement;
        t == undefined && (t = "None"), $("input[name='enemyElement'][value='" + t + "']").prop("checked", !0)
    }
    PopulateEnemyTypes() {
        let t = this._Calc.Enemy.resistance.Elemental,
            e = "";
        if (t)
            for (let a in t) console.log(a), e += genTag("option", {
                value: a
            }, a.replace("DMG", ""));
        $("#enemyElementSelect").html(e)
    }
    FillResonance() {
        for (let t in ElementalResonanceList) {
            let e = !1;
            this._Calc.Party.currentResonance.includes(t) && (e = !0), $("input[name='ElementalResonance'][value='" + t + "']").prop("checked", e)
        }
    }
    FillPartyBuffs() {
        $("#partyBuffContainer input").prop("checked", !1), $("#partyBuffContainer input[type='number']").val(0);
        for (let t in PartyBuffList)
            for (let e in PartyBuffList[t]) {
                let a = this._Calc.Party.partyBuffFlags[t]?.[e];
                if (a) {
                    if (a.toggle) {
                        let i = $("input[buff='" + t + "'][idx='" + e + "']").first();
                        !0 === a.toggle ? i.prop("checked", !0) : i.val(a.toggle)
                    }
                    if (a["switch"] && $("input[buff='" + t + "'][idx='" + e + "'][op='" + a["switch"] + "']").prop("checked", !0), a.nested)
                        for (let i in a.nested) a.nested[i] && $("input[buff='" + t + "'][idx='" + e + "'][nest='" + i + "']").prop("checked", !0)
                }
                let i = PartyBuffList[t][e];
                if (i.variables)
                    for (let s in i.variables) {
                        let n = i.variables[s];
                        a?.variables && (n = a.variables[s]), $("input[buff='" + t + "'][idx='" + e + "'][varname='" + s + "']").val(n)
                    }
            }
    }
    ShowSubstatBenefit() {
        let t = this.GetMarginalBenefitOfSubstats(),
            e = $("[optimizingfor]").find(".statName").text();
        $("#graphPopup").show();
        let a = span({}, Translate("Marginal benefit of each Stat to: ", "gui") + span({
                style: "color:green"
            }, e)),
            i = 0;
        for (let s in t) {
            let n = t[s].max,
                r = t[s].min;
            n > i && (i = n);
            let l = -1 == "HP ATK DEF Elemental Mastery".search(s),
                o = Translate(s, "statTypes"),
                c = div({
                    "class": "tooltip",
                    style: "max-width: 50%"
                }, span({
                    style: "color:red"
                }, FormatStat(t[s].maxRoll, l) + " " + o) + " will increase your " + span({
                    style: "color:green"
                }, e) + " by " + span({
                    style: "color:green"
                }, FormatStat(n, !0)) + "<br>" + span({
                    style: "color:red"
                }, FormatStat(t[s].minRoll, l) + " " + o) + " will increase your " + span({
                    style: "color:green"
                }, e) + " by " + span({
                    style: "color:green"
                }, FormatStat(r, !0)));
            a += div({
                "class": "graphRow"
            }, div({
                "class": "graphLabel",
                value: n
            }, o) + div({
                "class": "graphBar hasToolTip"
            }, div({
                "class": "graphFill",
                value: n
            }, div({
                "class": "graphFillLabel"
            }, FormatStat(n, !0))) + div({
                "class": "graphFill",
                value: r,
                type: "min"
            }, div({
                "class": "graphFillLabel"
            }, FormatStat(r, !0))) + " " + c))
        }
        a += div({
            "class": "graphRow"
        }, div({
            "class": "graphLabel"
        }, "Key", "gui") + div({
            "class": "graphBar hasToolTip"
        }, div({
            "class": "graphFill"
        }, div({
            "class": "graphLabel"
        }, "Max Roll", "gui")) + div({
            "class": "graphFill",
            type: "min"
        }, div({
            "class": "graphLabel"
        }, "Min Roll", "gui")) + div({
            "class": "tooltip",
            style: "max-width: 50%"
        }, "Elemental DMG and Physical DMG are based on their mainstat ratio to ATK% mainstat. Therefore, Elemental DMG is 1:1 with attack and Physical DMG is 1:0.8."))), $("#graphContainer").html(a), $(".graphFill").each(((t, e) => {
            let a = 200 * parseFloat($(e).attr("value")) / i;
            $(e).css("width", a + "px")
        }))
    }
    GetMarginalBenefitOfSubstats() {
        let t = {};
        for (let e in SubstatOptions) {
            let a = SubstatOptions[e],
                i = SubstatRolls[a][2][0],
                s = SubstatRolls[a][2][3],
                n = [new StatModifier(a, i)],
                r = [new StatModifier(a, s)];
            t[e] = {
                min: this.GetPredictionInfo(n).Value,
                max: this.GetPredictionInfo(r).Value,
                minRoll: i,
                maxRoll: s
            }, "ATKPercent" == a && (t["Elemental DMG"] = {
                min: this.GetPredictionInfo([new StatModifier(this._Calc.Character.element, i)]).Value,
                max: this.GetPredictionInfo([new StatModifier(this._Calc.Character.element, s)]).Value,
                minRoll: i,
                maxRoll: s
            }, t["Physical DMG"] = {
                min: this.GetPredictionInfo([new StatModifier("PhysicalDMG", i / .8)]).Value,
                max: this.GetPredictionInfo([new StatModifier("PhysicalDMG", s / .8)]).Value,
                minRoll: i / .8,
                maxRoll: s / .8
            })
        }
        return t
    }
    ShowPrediction(t, e) {
        let a = this.GetPredictionInfo(t),
            i = div({}, $("[optimizingfor]").find(".statName").text() + ": " + span({
                negative: a.Value < 0
            }, (a.Value < 0 ? "" : "+") + FormatStat(a.Value, !0)));
        $("#predictorToolTip").show(), $("#predictorToolTip").position({
            my: "left top",
            of: e,
            collision: "fit"
        }), $("#predictorToolTip").html(i)
    }
    GetPredictionInfo(t) {
        let e = this._Calc.Recalc(!0, t),
            a = e[2],
            i = e[3],
            s = GetTargetVal(this._Calc.__Cache[2], this._Calc.__Cache[3]),
            n = GetTargetVal(a, i);
        return {
            CurrentValue: s,
            Prediction: n,
            Benefit: n - s,
            Value: (n - s) / s,
            Buffs: t
        }
    }
    CacheSlot(t) {
        this.__Cache._Calc = new DamageCalculator(null, this._Calc.Save()), this.__Cache._Calc.reactionProcChance = this._Calc.reactionProcChance, this.__Cache._Artifacts = {}, this.__Cache._Target = $("[optimizingfor]").find(".statName").text(), this.__Cache._CurrentValue = GetTargetVal(this._Calc.__Cache[2], this._Calc.__Cache[3]);
        let e = this.__Cache._Calc,
            a = this._ArtifactCtrl._SaveData[t];
        for (let i in a) {
            let t = a[i],
                s = this._ArtifactCtrl._SaveData.Saves[t].artifact.Clone();
            this.__Cache._Calc.Artifacts.equipArtifact(s);
            let n = this.__Cache._Calc.Recalc(!0),
                r = n[2],
                l = n[3];
            this.__Cache._Artifacts[t] = GetTargetVal(r, l, e)
        }
    }
    AddManualBuff() {
        let t = genTag("tr", {}, td({}, genTag("select", {
            onchange: "UpdateRangeEntryLabel(this)"
        }, genOptions(StatOptions, "statTypes"))) + td({}, genTag("input", {
            "class": "rangeEntry",
            statType: "ATK"
        }) + genTag("label")) + td({}, genTag("button", {
            onclick: "RemoveManualBuff(this)"
        }, "Remove", "gui")));
        $("#manualInputBuffs").append(t)
    }
    AddFoodBuff() {
        let t = genTag("tr", {}, td({
            colspan: 2
        }, genTag("select", {
            "class": "foodBuff"
        }, genOptions(Foods, "foodData"))) + td({}, genTag("button", {
            onclick: "RemoveManualBuff(this)"
        }, "Remove", "gui")));
        $("#manualInputBuffs").append(t)
    }
    ApplyManualBuffs() {
        let t = [];
        $("#manualInputBuffs input").each(((e, a) => {
            let i = $(a).attr("stattype"),
                s = "true" == $(a).attr("percent"),
                n = LocaleParseFloat($(a).val()) / (s ? 100 : 1);
            t.push(new StatModifier(i, n))
        })), $("#manualInputBuffs .foodBuff").each(((e, a) => {
            let i = $(a).val();
            FoodList[i] && (t = t.concat(FoodList[i].effect))
        })), _GUI._Calc.Character.manualBuffs = t, _GUI._Calc.Recalc()
    }
}
class PartyContainer {
    constructor() {
        this.buffs = [], this.currentResonance = ["Protective Canopy"], this.partyBuffFlags = {}, this.DebuffsToApply
    }
    addResonance(t) {
        this.currentResonance.includes(t) || ("Protective Canopy" == t && (this.currentResonance = ["Protective Canopy"]), this.currentResonance.includes("Protective Canopy") ? this.currentResonance.splice(this.currentResonance.indexOf("Protective Canopy"), 1) : this.currentResonance.length > 1 && this.currentResonance.pop(), this.currentResonance.push(t))
    }
    removeResonance(t) {
        let e = this.currentResonance.indexOf(t);
        e > -1 && this.currentResonance.splice(e, 1)
    }
    GetBuffs() {
        let t = [];
        this.DebuffsToApply = new DebuffContainer;
        for (let e in this.currentResonance) {
            let a = this.currentResonance[e];
            t = t.concat(ElementalResonanceList[a].effect ?? []), ElementalResonanceList[a].debuff && this.DebuffsToApply.addMod(ElementalResonanceList[a].debuff)
        }
        for (let e in this.partyBuffFlags)
            for (let a in this.partyBuffFlags[e]) {
                let i = this.partyBuffFlags[e][a],
                    s = PartyBuffList[e][a];
                if (i?.["switch"] && (s["switch"][i["switch"] - 1].effect ? t = t.concat(s["switch"][i["switch"] - 1].effect) : this.DebuffsToApply.addMod(s["switch"][i["switch"] - 1].debuff)), i?.toggle)
                    if (s.stackCount != undefined) {
                        console.log("Stacks");
                        for (let e in s.stack) t.push(s.stack[e].multiply(i.toggle))
                    } else s.effect ? t = t.concat(s.effect) : s.varEffect ? t = t.concat(s.varEffect(i.variables ?? s.variables)) : this.DebuffsToApply.addMod(s.debuff);
                if (i?.nested)
                    for (let e in i.nested) i.nested[e] && (s.nested[e].effect ? t = t.concat(s.nested[e].effect) : s.nested[e].varEffect ? t = t.concat(s.nested[e].varEffect(i.variables ?? s.variables)) : this.DebuffsToApply.addMod(s.nested[e].debuff))
            }
        return this.buffs = t, this.buffs
    }
    setFlag(t, e, a, i, s) {
        this.partyBuffFlags[e] || (this.partyBuffFlags[e] = []), this.partyBuffFlags[e][a] || (this.partyBuffFlags[e][a] = {}), i ? this.partyBuffFlags[e][a]["switch"] = t : s ? (this.partyBuffFlags[e][a].nested || (this.partyBuffFlags[e][a].nested = []), this.partyBuffFlags[e][a].nested[s] = t) : this.partyBuffFlags[e][a].toggle = t
    }
    setVar(t, e, a, i) {
        this.partyBuffFlags[e] || (this.partyBuffFlags[e] = []), this.partyBuffFlags[e][a] || (this.partyBuffFlags[e][a] = {}), this.partyBuffFlags[e][a].variables || (this.partyBuffFlags[e][a].variables = {}, Object.assign(this.partyBuffFlags[e][a].variables, PartyBuffList[e][a].variables)), this.partyBuffFlags[e][a].variables[i] = t
    }
    partyBuffInputHandler(t) {
        let e = $(t).attr("buff"),
            a = $(t).attr("idx"),
            i = $(t).attr("op"),
            s = $(t).attr("nest"),
            n = $(t).attr("varname");
        if (n) {
            let i = parseInt($(t).val());
            this.setVar(i, e, a, n)
        } else {
            let n, r = !1,
                l = $(t).attr("type");
            i != undefined ? (n = parseInt(i), r = !0) : n = "number" == l ? parseInt($(t).val()) : $(t).prop("checked"), this.setFlag(n, e, a, r, s)
        }
    }
}
class Stats {
    constructor(t, e, a, i = !0) {
        this.stats = {}, StatTypes.forEach((t => {
            this.stats[t] = 0
        })), StatModTypes.forEach((t => {
            this.stats[t] = 0
        })), this.stats.HP = t, this.stats.ATK = e, this.stats.DEF = a, i && (this.stats.CritRate = .05, this.stats.CritDMG = .5, this.stats.EnergyRecharge = 1)
    }
}
class StatModifier {
    constructor(t, e = 0) {
        this.statType = t, this.statModValue = e
    }
    static FromData(t) {
        return new StatModifier(t.statType, t.statModValue)
    }
    multiply(t) {
        return new StatModifier(this.statType, this.statModValue * t)
    }
    static NegativeSet(t) {
        let e = [];
        for (let a in t) e.push(t[a].multiply(-1));
        return e
    }
}
class ModsContainer {
    constructor(t) {
        this.mods = {
            HP: 0,
            DEF: 0,
            ATK: 0,
            ATKPercent: 0,
            DEFPercent: 0,
            HPPercent: 0
        }, this.addMod(t)
    }
    addMod(t) {
        if (t)
            if (t[0])
                for (let e in t) this.mods.hasOwnProperty(t[e].statType) && "NormalType" != t[e].statType ? this.mods[t[e].statType] += t[e].statModValue : this.mods[t[e].statType] = t[e].statModValue;
            else this.mods.hasOwnProperty(t.statType) && "NormalType" != t.statType ? this.mods[t.statType] += t.statModValue : this.mods[t.statType] = t.statModValue
    }
}
class DebuffContainer {
    constructor() {
        this.mods = {
            DEF: 0,
            PhysicalDMG: 0,
            PyroDMG: 0,
            HydroDMG: 0,
            DendroDMG: 0,
            ElectroDMG: 0,
            AnemoDMG: 0,
            CryoDMG: 0,
            GeoDMG: 0
        }
    }
    addMod(t) {
        if (t)
            if (t[0])
                for (let e in t) this.mods.hasOwnProperty(t[e].statType) ? this.mods[t[e].statType] += t[e].statModValue : this.mods[t[e].statType] = t[e].statModValue;
            else this.mods.hasOwnProperty(t.statType) ? this.mods[t.statType] += t.statModValue : this.mods[t.statType] = t.statModValue
    }
    static SUM(t) {
        let e = new DebuffContainer;
        for (let a in t)
            for (let i in t[a].mods) e.mods[i] += t[a].mods[i];
        return e
    }
}
class Translator {
    constructor(t = descMap, e = EN) {
        this.descMap = t, this.language = e, this.logger = {}
    }
    GetDesc(t) {
        return this.logger[t] = !0, this.language[t]
    }
    TranslateCharacterName(t) {
        let e = this.descMap.characterData[t];
        if (e) return this.GetDesc(e.name)
    }
    TranslateCharacter(t) {
        let e = this.descMap.characterData[t],
            a = {};
        for (let i in e) {
            let t = {};
            if ("name" == i) t = this.GetDesc(e[i]);
            else if ("burst" == i || "skill" == i || "normal" == i) {
                let a = e[i].skillGroup.calcStats,
                    s = [];
                for (let t in a) s[t] = this.GetDesc(a[t]).split("|")[0];
                t = {
                    desc: this.GetDesc(e[i].desc),
                    name: this.GetDesc(e[i].name),
                    calcStats: s,
                    params: e[i].skillGroup.params
                }
            } else
                for (let a in e[i])
                    if ("constellations" == i) t[a] = {
                        desc: this.GetDesc(e[i][a].desc),
                        name: this.GetDesc(e[i][a].name)
                    };
                    else if ("passives" == i) {
                let s;
                for (let t in e[i][a]) s = e[i][a][t];
                t[a] = {
                    desc: this.GetDesc(s.desc),
                    name: this.GetDesc(s.name)
                }
            }
            a[i] = t
        }
        return a
    }
    TranslateWeapon(t) {
        let e = this.descMap.weaponData[t];
        if (e) {
            let t = 0;
            return {
                desc: this.GetDesc(e.desc),
                name: this.GetDesc(e.name),
                weaponAbility: {
                    desc: this.GetDesc(e.weaponAbility.desc).replaceAll(/\<color=#99FFFFFF\>\S+\<\/color\>/g, (() => e.weaponAbility.params[t++])),
                    name: this.GetDesc(e.weaponAbility.name)
                }
            }
        }
        console.log("Can't find: " + t)
    }
}
class Weapon {
    constructor(t, e = 1) {
        this.weaponName = t;
        let a = WeaponList[t];
        this.weaponType = a[0], this.weaponStars = a[1], this.weaponBaseAttack = a[2], this.weaponSubstat = new StatModifier(a[3], a[4]), this.weaponAbilityName = a[5], this.weaponAbility = WeaponAbilityList[this.weaponAbilityName], this.toggleAbility = !1, this.buffStacks = 0, this.switchedBuff = null, this.setLevel(e), this.setRefine(0)
    }
    ReloadWeapon() {
        if (this.weaponSubstat = StatModifier.FromData(this.weaponSubstat), this.weaponAbility = WeaponAbilityList[this.weaponAbilityName], !WeaponList[this.weaponName]) {
            for (let t in WeaponList)
                if (this.weaponAbilityName == WeaponList[t][5] && this.weaponType == WeaponList[t][1]) {
                    this.weaponName = t;
                    break
                } if (!WeaponList[this.weaponName])
                for (let t in WeaponList)
                    if (this.weaponType == WeaponList[t][1]) {
                        let e = new Weapon(t, 1);
                        this.weaponName = e.weaponName;
                        let a = WeaponList[this.weaponName];
                        this.weaponType = a[0], this.weaponStars = a[1], this.weaponBaseAttack = a[2], this.weaponSubstat = new StatModifier(a[3], a[4]), this.weaponAbilityName = a[5], this.weaponAbility = WeaponAbilityList[this.weaponAbilityName], this.toggleAbility = !1, this.buffStacks = 0, this.switchedBuff = null, this.setLevel(level), this.setRefine(0);
                        break
                    }
        }
    }
    setLevel(t) {
        this.isAscended = t < 0, this.weaponLevel = Math.abs(t)
    }
    setRefine(t) {
        this.refine = t
    }
    setBuffStacks(t) {
        this.buffStacks = t
    }
    GetBuffs(t) {
        let e = [];
        if (this.weaponAbility.effect && (e = e.concat(this.weaponAbility.effect[this.refine])), this.toggleAbility && (this.weaponAbility.toggle && (e = e.concat(this.weaponAbility.toggle[this.refine])), this.weaponAbility.toggle_scale && t.scalingBuffs.push(this.weaponAbility.toggle_scale[this.refine])), this.buffStacks > 0) {
            let t = this.weaponAbility.stack[this.refine],
                a = [];
            for (let e in t) a.push(t[e].multiply(this.buffStacks));
            e = e.concat(a)
        }
        return null != this.switchedBuff && (e = e.concat(this.weaponAbility["switch"][this.refine][this.switchedBuff].effect)), this.weaponAbility.scale && t.scalingBuffs.push(this.weaponAbility.scale[this.refine]), e
    }
    GetSkillBuffs() {
        let t = [];
        return this.weaponAbility.skill && (t = t.concat(this.weaponAbility.skill.effect[this.refine])), t
    }
    GetBurstBuffs() {
        let t = [];
        return this.weaponAbility.burst && (t = t.concat(this.weaponAbility.burst.effect[this.refine])), t
    }
    GetAttack() {
        let t, e = this.weaponLevel - this.weaponLevel % 10,
            a = this.isAscended && e == this.weaponLevel ? 1 : 0;
        switch (e) {
            case 0:
            case 10:
                t = 0;
                break;
            case 20:
                t = 1 + a;
                break;
            case 30:
                t = 2;
                break;
            case 40:
                t = 3 + a;
                break;
            case 50:
                t = 5 + a;
                break;
            case 60:
                t = 7 + a;
                break;
            case 70:
                t = 9 + a;
                break;
            case 80:
                t = 11 + a;
                break;
            case 90:
            default:
                t = 13
        }
        return WeaponGrowth[this.weaponBaseAttack][t]
    }
    GetSubStat() {
        let t, e;
        switch (this.weaponLevel - this.weaponLevel % 10) {
            case 0:
            case 10:
                t = 0;
                break;
            case 20:
            case 30:
                t = 1;
                break;
            case 40:
                t = 2;
                break;
            case 50:
                t = 3;
                break;
            case 60:
                t = 4;
                break;
            case 70:
                t = 5;
                break;
            case 80:
                t = 6;
                break;
            default:
                t = 7
        }
        return e = "ElementalMastery" == this.weaponSubstat.statType ? WeaponSubstatGrowthFlat[this.weaponSubstat.statModValue][t] : WeaponSubstatGrowthPercent[this.weaponSubstat.statModValue][t] / 100, new StatModifier(this.weaponSubstat.statType, e)
    }
}