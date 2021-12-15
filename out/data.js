var ArtifactList = {
        Adventurer: [, {
            desc: "HP increased by 1,000.",
            effect: [new StatModifier("HP", 1e3)]
        }, , {
            desc: "Opening chest regenerates 30% HP over 5s."
        }],
        "Lucky Dog": [, {
            desc: "DEF increased by 100.",
            effect: [new StatModifier("DEF", 100)]
        }, , {
            desc: "Picking up Mora restores 300 HP."
        }],
        "Traveling Doctor": [, {
            desc: "Increases incoming healing by 20%.",
            effect: [new StatModifier("IncomingHeal", .2)]
        }, , {
            desc: "Using Elemental Burst restores 20% HP."
        }],
        Instructor: [, {
            desc: "Increases Elemental Mastery by 80.",
            effect: [new StatModifier("ElementalMastery", 80)]
        }, , {
            desc: "After causing an elemental reaction, increases all party members&#39 Elemental Mastery by 120 for 8s.",
            toggle: [new StatModifier("ElementalMastery", 120)]
        }],
        Berserker: [, {
            desc: "CRIT Rate +12%",
            effect: [new StatModifier("CritRate", .12)]
        }, , {
            desc: "When HP is below 70%, CRIT Rate increases by an additional 24%.",
            toggle: [new StatModifier("CritRate", .24)]
        }],
        "The Exile": [, {
            desc: "Energy Recharge +20%",
            effect: [new StatModifier("EnergyRecharge", .2)]
        }, , {
            desc: "Using an Elemental Burst regenerates 2 Energy for all party members (excluding the wearer) every 2s for 6s. This effect cannot stack."
        }],
        "Resolution of Sojourner": [, {
            desc: "ATK +18%",
            effect: [new StatModifier("ATKPercent", .18)]
        }, , {
            desc: "Increases Charged Attack CRIT Rate by 30%.",
            toggle: [new StatModifier("ChargedAttackCritRate", .3)]
        }],
        "Martial Artist": [, {
            desc: "Increases Normal Attack and Charged Attack DMG by 15%.",
            effect: [new StatModifier("NormalAttackDMG", .15), new StatModifier("ChargedAttackDMG", .15)]
        }, , {
            desc: "After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 25% for 8s.",
            toggle: [new StatModifier("NormalAttackDMG", .25), new StatModifier("ChargedAttackDMG", .25)]
        }],
        "Defenders Will": [, {
            desc: "DEF +30%",
            effect: [new StatModifier("DEFPercent", .3)]
        }, , {
            desc: "Increases Elemental RES by 30% for each element present in the party.",
            select: [{
                option: "Pyro Element Present in Party",
                effect: [new StatModifier("PyroRES", .3)]
            }, {
                option: "Hydro Element Present in Party",
                effect: [new StatModifier("HydroRES", .3)]
            }, {
                option: "Dendro Element Present in Party",
                effect: [new StatModifier("DendroRES", .3)]
            }, {
                option: "Electro Element Present in Party",
                effect: [new StatModifier("ElectroRES", .3)]
            }, {
                option: "Anemo Element Present in Party",
                effect: [new StatModifier("AnemoRES", .3)]
            }, {
                option: "Cryo Element Present in Party",
                effect: [new StatModifier("CryoRES", .3)]
            }, {
                option: "Geo Element Present in Party",
                effect: [new StatModifier("GeoRES", .3)]
            }]
        }],
        "Tiny Miracle": [, {
            desc: "All Elemental RES increased by 20%",
            effect: [new StatModifier("PyroRES", .2), new StatModifier("HydroRES", .2), new StatModifier("DendroRES", .2), new StatModifier("ElectroRES", .2), new StatModifier("AnemoRES", .2), new StatModifier("CryoRES", .2), new StatModifier("GeoRES", .2)]
        }, , {
            desc: "Incoming elemental DMG increases corresponding Elemental RES by 30% for 10s. Can only occur once every 10s.",
            select: [{
                option: "Hit by Pyro DMG",
                effect: [new StatModifier("PyroRES", .3)]
            }, {
                option: "Hit by Hydro DMG",
                effect: [new StatModifier("HydroRES", .3)]
            }, {
                option: "Hit by Dendro DMG",
                effect: [new StatModifier("DendroRES", .3)]
            }, {
                option: "Hit by Electro DMG",
                effect: [new StatModifier("ElectroRES", .3)]
            }, {
                option: "Hit by Anemo DMG",
                effect: [new StatModifier("AnemoRES", .3)]
            }, {
                option: "Hit by Cryo DMG",
                effect: [new StatModifier("CryoRES", .3)]
            }, {
                option: "Hit by Geo DMG",
                effect: [new StatModifier("GeoRES", .3)]
            }]
        }],
        "Brave Heart": [, {
            desc: "ATK +18%",
            effect: [new StatModifier("ATKPercent", .18)]
        }, , {
            desc: "Increases DMG by 30% against enemies with more than 50% HP.",
            toggle: [new StatModifier("AllDMG", .3)]
        }],
        Gambler: [, {
            desc: "Elemental Skill DMG increased by 20%",
            effect: [new StatModifier("ElementalSkillDMG", .2)]
        }, , {
            desc: "Defeating an enemy has 100% chance to remove Elemental Skill CD. Can only occur once every 15s."
        }],
        Scholar: [, {
            desc: "Energy Recharge +20%",
            effect: [new StatModifier("EnergyRecharge", .2)]
        }, , {
            desc: "Gaining Energy gives 3 Energy to all party members who have a bow or a catalyst equipped. Can only occurs once every 3s."
        }],
        "Gladiators Finale": [, {
            desc: "ATK +18%",
            effect: [new StatModifier("ATKPercent", .18)]
        }, , {
            desc: "If the wielder of this artifact set uses a Sword, Claymore or Polearm, increases their Normal Attack DMG by 35%.",
            condition: [{
                check: (e, t) => "Sword" == e.characterWeaponType || "Claymore" == e.characterWeaponType || "Polearm" == e.characterWeaponType,
                effect: [new StatModifier("NormalAttackDMG", .35)]
            }]
        }],
        "Maiden Beloved": [, {
            desc: "Character Healing Effectiveness +15%",
            effect: [new StatModifier("Heal", .15)]
        }, , {
            desc: "Using an Elemental Skill or Burst increases healing received by all party members by 20% for 10s.",
            toggle: [new StatModifier("IncomingHeal", .2)]
        }],
        "Noblesse Oblige": [, {
            desc: "Elemental Burst DMG +20%",
            effect: [new StatModifier("ElementalBurstDMG", .2)]
        }, , {
            desc: "Using an Elemental Burst increases all party members&#39 ATK by 20% for 12s. This effect cannot stack.",
            toggle: [new StatModifier("ATKPercent", .2)]
        }],
        "Bloodstained Chivalry": [, {
            desc: "Physical DMG +25%",
            effect: [new StatModifier("PhysicalDMG", .25)]
        }, , {
            desc: "After defeating an opponent, increases Charged Attack DMG by 50%, and reduces its Stamina cost to 0 for 10s.",
            toggle: [new StatModifier("ChargedAttackDMG", .5)]
        }],
        "Wanderers Troupe": [, {
            desc: "Elemental Mastery +80",
            effect: [new StatModifier("ElementalMastery", 80)]
        }, , {
            desc: "Increases Charged Attack DMG by 35% if the character uses a Catalyst or Bow.",
            condition: [{
                check: (e, t) => "Bow" == e.characterWeaponType || "Catalyst" == e.characterWeaponType,
                effect: [new StatModifier("ChargedAttackDMG", .35)]
            }]
        }],
        "Viridescent Venerer": [, {
            desc: "Anemo DMG Bonus +15%",
            effect: [new StatModifier("AnemoDMG", .15)]
        }, , {
            desc: "Increases Swirl DMG by 60%. Decreases opponent&#39s Elemental RES to the element infused in the Swirl by 40% for 10s.",
            effect: [new StatModifier("SwirlDMG", .6)],
            "switch": [{
                option: "Pyro",
                debuff: [new StatModifier("PyroDMG", .4)]
            }, {
                option: "Hydro",
                debuff: [new StatModifier("HydroDMG", .4)]
            }, {
                option: "Electro",
                debuff: [new StatModifier("ElectroDMG", .4)]
            }, {
                option: "Cryo",
                debuff: [new StatModifier("CryoDMG", .4)]
            }]
        }],
        "Thundering Fury": [, {
            desc: "Electro DMG Bonus +15%",
            effect: [new StatModifier("ElectroDMG", .15)]
        }, , {
            desc: "Increases damage caused by Overloaded, Electro-Charged, and Superconduct DMG by 40%. Triggering such effects decreases Elemental Skill CD by 1s. Can only occur once every 0.8s.",
            effect: [new StatModifier("OverloadedDMG", .4), new StatModifier("ElectrochargedDMG", .4), new StatModifier("SuperconductDMG", .4)]
        }],
        Thundersoother: [, {
            desc: "Electro RES increased by 40%",
            effect: [new StatModifier("ElectroRES", .4)]
        }, , {
            desc: "Increases DMG against enemies affected by Electro by 35%.",
            condition: [{
                check: (e, t) => "ElectroDMG" == t.currentElement,
                effect: [new StatModifier("AllDMG", .35)]
            }]
        }],
        "Crimson Witch of Flames": [, {
            desc: "Pyro DMG Bonus +15%",
            effect: [new StatModifier("PyroDMG", .15)]
        }, , {
            desc: "Increases Overloaded and Burning DMG by 40%. Increases Vaporize and Melt DMG by 15%. Using an Elemental Skill increases 2-Piece Set effects by 50% for 10s. Max 3 stacks.",
            effect: [new StatModifier("OverloadedDMG", .4), new StatModifier("BurningDMG", .4), new StatModifier("VaporizeDMG", .15), new StatModifier("MeltDMG", .15)],
            "switch": [{
                option: "Increase 2-Piece Set effects by 50% (1-stack)",
                effect: [new StatModifier("PyroDMG", .075)]
            }, {
                option: "Increase 2-Piece Set effects by 50% (2-stacks)",
                effect: [new StatModifier("PyroDMG", .15)]
            }, {
                option: "Increase 2-Piece Set effects by 50% (3-stacks)",
                effect: [new StatModifier("PyroDMG", .225)]
            }]
        }],
        Lavawalker: [, {
            desc: "Pyro RES increased by 40%",
            effect: [new StatModifier("PyroRES", .4)]
        }, , {
            desc: "Increases DMG against enemies that are Burning or affected by Pyro by 35%.",
            condition: [{
                check: (e, t) => "PyroDMG" == t.currentElement,
                effect: [new StatModifier("AllDMG", .35)]
            }]
        }],
        "Archaic Petra": [, {
            desc: "Gain a 15% Geo DMG Bonus",
            effect: [new StatModifier("GeoDMG", .15)]
        }, , {
            desc: "Upon obtaining a crystal created through a Geo Elemental Reaction, all party members gain 35% Elemental DMG Bonus to that particular element for 10s. Only one form of Elemental DMG Bonus can be gained in this manner at any one time.",
            "switch": [{
                option: "Obtained Pyro Crystal",
                effect: [new StatModifier("PyroDMG", .35)]
            }, {
                option: "Obtained Hydro Crystal",
                effect: [new StatModifier("HydroDMG", .35)]
            }, {
                option: "Obtained Electro Crystal",
                effect: [new StatModifier("ElectroDMG", .35)]
            }, {
                option: "Obtained Cryo Crystal",
                effect: [new StatModifier("CryoDMG", .35)]
            }]
        }],
        "Retracing Bolide": [, {
            desc: "Increases the effectiveness of shields by 35%",
            effect: [new StatModifier("PowerfulShield", .35)]
        }, , {
            desc: "Gain an additional 40% Normal and Charged Attack DMG while under the protection of a shield.",
            toggle: [new StatModifier("NormalAttackDMG", .4), new StatModifier("ChargedAttackDMG", .4)]
        }],
        "Heart of Depth": [, {
            desc: "Hydro DMG Bonus +15%",
            effect: [new StatModifier("HydroDMG", .15)]
        }, , {
            desc: "After using Elemental Skill, increases Normal Attack and Charged Attack DMG by 30% for 15s.",
            toggle: [new StatModifier("NormalAttackDMG", .3), new StatModifier("ChargedAttackDMG", .3)]
        }],
        "Blizzard Strayer": [, {
            desc: "Cryo DMG Bonus +15%",
            effect: [new StatModifier("CryoDMG", .15)]
        }, , {
            desc: "When a character attacks an opponent affected by Cryo, their Crit Rate is increased by 20%. If the oppponent is Frozen, Crit Rate is increased by an additional 20%.",
            condition: [{
                check: (e, t) => "CryoDMG" == t.currentElement,
                effect: [new StatModifier("CritRate", .2)]
            }, {
                check: (e, t) => "Frozen" == t.currentElement,
                effect: [new StatModifier("CritRate", .4)]
            }]
        }],
        "Pale Flame": [, {
            desc: "Physical DMG +25%",
            effect: [new StatModifier("PhysicalDMG", .25)]
        }, , {
            desc: "When an Elemental Skill hits an opponent, the ATK is increased by 9% for 7s. This effect stacks up to 2 times and can be triggered once every 0.3s. Once 2 stacks are reached, the 2-set effect is increased by 100%.",
            "switch": [{
                option: "No Stacks"
            }, {
                option: "1-Stack",
                effect: [new StatModifier("ATKPercent", .09)]
            }, {
                option: "2-Stacks",
                effect: [new StatModifier("ATKPercent", .18), new StatModifier("PhysicalDMG", .25)]
            }]
        }],
        "Tenacity of the Millelith": [, {
            desc: "HP Increased by 20%",
            effect: [new StatModifier("HPPercent", .2)]
        }, , {
            desc: "When an Elemental Skill hits an opponent, the ATK of all nearby party  members is increased by 20% and their Shield Strength is increased by 30% for 3s. This effect can be triggered once every 0.5s. This effect can still be triggered even when the character who is using this artifact set is not on the field.",
            toggle: [new StatModifier("ATKPercent", .2), new StatModifier("PowerfulShield", .3)]
        }],
        Icebreaker: [, {
            desc: "Cryo RES increased by 40%",
            effect: [new StatModifier("CryoRES", .4)]
        }, , {
            desc: "Increases DMG against enemies in a Frozen state or affected by cryo by 35%.",
            condition: [{
                check: (e, t) => "CryoDMG" == t.currentElement || "Frozen" == t.currentElement,
                effect: [new StatModifier("AllDMG", .35)]
            }]
        }],
        "Shimenawas Reminiscence": [, {
            desc: "ATK +18%",
            effect: [new StatModifier("ATKPercent", .18)]
        }, , {
            desc: "When casting an Elemental Skill, if the character has 15 or more Energy, they lose 15 Energy and Normal/Charged/Plunging Attack DMG is increased by 50% for 10s.",
            toggle: [new StatModifier("NormalAttackDMG", .5), new StatModifier("ChargedAttackDMG", .5), new StatModifier("PlungingDMG", .5)]
        }],
        "Emblem of Severed Fate": [, {
            desc: "Energy Recharge +20%",
            effect: [new StatModifier("EnergyRecharge", .2)]
        }, , {
            desc: "Increases Elemental Burst DMG by 25% of Energy Recharge. A maximum of 75% bonus DMG can be obtained in this way.",
            scale: {
                to: new StatModifier("ElementalBurstDMG", 0),
                from: e => new StatModifier("EnergyRecharge", .25),
                maximum: e => .75
            }
        }],
        "Prayers for Wisdom": [{
            desc: "Affected by Electro for 40% less time."
        }],
        "Prayers to Springtime": [{
            desc: "Affected by Cryo for 40% less time."
        }],
        "Prayers for Illumination": [{
            desc: "Affected by Pyro for 40% less time."
        }],
        "Prayers for Destiny": [{
            desc: "Affected by Hydro for 40% less time."
        }]
    },
    ArtifactRarity = {
        Adventurer: 3,
        "Lucky Dog": 3,
        "Traveling Doctor": 3,
        Instructor: 4,
        Berserker: 4,
        "The Exile": 4,
        "Resolution of Sojourner": 4,
        "Martial Artist": 4,
        "Defenders Will": 4,
        "Tiny Miracle": 4,
        "Brave Heart": 4,
        Gambler: 4,
        Scholar: 4,
        "Gladiators Finale": 5,
        "Wanderers Troupe": 5,
        "Maiden Beloved": 5,
        "Noblesse Oblige": 5,
        "Bloodstained Chivalry": 5,
        "Viridescent Venerer": 5,
        "Thundering Fury": 5,
        Thundersoother: 5,
        "Crimson Witch of Flames": 5,
        Lavawalker: 5,
        "Archaic Petra": 5,
        "Retracing Bolide": 5,
        "Glacier and Snowfield": 5,
        Icebreaker: 5,
        "Blizzard Strayer": 5,
        "Heart of Depth": 5,
        "Tenacity of the Millelith": 5,
        "Pale Flame": 5,
        "Shimenawas Reminiscence": 5,
        "Emblem of Severed Fate": 5,
        "Prayers for Wisdom": 4,
        "Prayers to Springtime": 4,
        "Prayers for Illumination": 4,
        "Prayers for Destiny": 4
    },
    MainStatRange = {
        HP: [
            [430, 552, 674, 796, 918, 1040, 1162, 1283, 1405, 1527, 1649, 1771, 1893],
            [645, 828, 1011, 1194, 1377, 1559, 1742, 1925, 2108, 2291, 2474, 2657, 2839, 3022, 3205, 3388, 3571],
            [717, 920, 1123, 1326, 1530, 1733, 1936, 2139, 2342, 2545, 2749, 2952, 3155, 3358, 3561, 3764, 3967, 4171, 4374, 4577, 4780]
        ],
        ATK: [
            [28, 36, 44, 52, 60, 68, 76, 84, 91, 99, 107, 115, 123],
            [42, 54, 66, 78, 90, 102, 113, 125, 137, 149, 161, 173, 185, 197, 209, 221, 232],
            [47, 60, 73, 86, 100, 113, 126, 139, 152, 166, 179, 192, 205, 219, 232, 245, 258, 272, 285, 298, 311]
        ],
        HPPercent: [
            [.052, .067, .082, .097, .112, .127, .142, .156, .171, .186, .201, .216, .231],
            [.063, .081, .099, .116, .134, .152, .17, .188, .206, .223, .241, .259, .277, .295, .313, .33, .348],
            [.07, .09, .11, .129, .149, .169, .189, .209, .228, .248, .268, .288, .308, .328, .347, .367, .387, .407, .427, .446, .466]
        ],
        DEFPercent: [
            [.066, .084, .103, .121, .14, .158, .177, .196, .214, .233, .251, .27, .288],
            [.079, .101, .123, .146, .168, .19, .212, .235, .257, .279, .302, .324, .346, .368, .391, .413, .435],
            [.087, .112, .137, .162, .186, .211, .236, .261, .286, .31, .335, .36, .385, .409, .434, .459, .484, .508, .533, .558, .583]
        ],
        ATKPercent: [
            [.052, .067, .082, .097, .112, .127, .142, .156, .171, .186, .201, .216, .231],
            [.063, .081, .099, .116, .134, .152, .17, .188, .206, .223, .241, .259, .277, .295, .313, .33, .348],
            [.07, .09, .11, .129, .149, .169, .189, .209, .228, .248, .268, .288, .308, .328, .347, .367, .387, .407, .427, .446, .466]
        ],
        ElementalMastery: [
            [21, 27, 33, 39, 45, 51, 57, 63, 69, 75, 80, 86, 92],
            [25, 32, 39, 47, 54, 61, 68, 75, 82, 89, 97, 104, 111, 118, 125, 132, 139],
            [28, 36, 44, 52, 60, 68, 76, 84, 91, 99, 107, 115, 123, 131, 139, 147, 155, 163, 171, 179, 187]
        ],
        EnergyRecharge: [
            [.058, .075, .091, .108, .124, .141, .157, .174, .19, .207, .223, .24, .256],
            [.07, .09, .11, .129, .149, .169, .189, .209, .228, .248, .268, .288, .308, .328, .347, .367, .387],
            [.078, .1, .122, .144, .166, .188, .21, .232, .254, .276, .298, .32, .342, .364, .386, .408, .43, .452, .474, .496, .518]
        ],
        PyroDMG: [
            [.052, .067, .082, .097, .112, .127, .142, .156, .171, .186, .201, .216, .231],
            [.063, .081, .099, .116, .134, .152, .17, .188, .206, .223, .241, .259, .277, .295, .313, .33, .348],
            [.07, .09, .11, .129, .149, .169, .189, .209, .228, .248, .268, .288, .308, .328, .347, .367, .387, .407, .427, .446, .466]
        ],
        HydroDMG: [
            [.052, .067, .082, .097, .112, .127, .142, .156, .171, .186, .201, .216, .231],
            [.063, .081, .099, .116, .134, .152, .17, .188, .206, .223, .241, .259, .277, .295, .313, .33, .348],
            [.07, .09, .11, .129, .149, .169, .189, .209, .228, .248, .268, .288, .308, .328, .347, .367, .387, .407, .427, .446, .466]
        ],
        DendroDMG: [
            [.052, .067, .082, .097, .112, .127, .142, .156, .171, .186, .201, .216, .231],
            [.063, .081, .099, .116, .134, .152, .17, .188, .206, .223, .241, .259, .277, .295, .313, .33, .348],
            [.07, .09, .11, .129, .149, .169, .189, .209, .228, .248, .268, .288, .308, .328, .347, .367, .387, .407, .427, .446, .466]
        ],
        ElectroDMG: [
            [.052, .067, .082, .097, .112, .127, .142, .156, .171, .186, .201, .216, .231],
            [.063, .081, .099, .116, .134, .152, .17, .188, .206, .223, .241, .259, .277, .295, .313, .33, .348],
            [.07, .09, .11, .129, .149, .169, .189, .209, .228, .248, .268, .288, .308, .328, .347, .367, .387, .407, .427, .446, .466]
        ],
        AnemoDMG: [
            [.052, .067, .082, .097, .112, .127, .142, .156, .171, .186, .201, .216, .231],
            [.063, .081, .099, .116, .134, .152, .17, .188, .206, .223, .241, .259, .277, .295, .313, .33, .348],
            [.07, .09, .11, .129, .149, .169, .189, .209, .228, .248, .268, .288, .308, .328, .347, .367, .387, .407, .427, .446, .466]
        ],
        CryoDMG: [
            [.052, .067, .082, .097, .112, .127, .142, .156, .171, .186, .201, .216, .231],
            [.063, .081, .099, .116, .134, .152, .17, .188, .206, .223, .241, .259, .277, .295, .313, .33, .348],
            [.07, .09, .11, .129, .149, .169, .189, .209, .228, .248, .268, .288, .308, .328, .347, .367, .387, .407, .427, .446, .466]
        ],
        GeoDMG: [
            [.052, .067, .082, .097, .112, .127, .142, .156, .171, .186, .201, .216, .231],
            [.063, .081, .099, .116, .134, .152, .17, .188, .206, .223, .241, .259, .277, .295, .313, .33, .348],
            [.07, .09, .11, .129, .149, .169, .189, .209, .228, .248, .268, .288, .308, .328, .347, .367, .387, .407, .427, .446, .466]
        ],
        PhysicalDMG: [
            [.066, .084, .103, .121, .14, .158, .177, .196, .214, .233, .251, .27, .288],
            [.079, .101, .123, .146, .168, .19, .212, .235, .257, .279, .302, .324, .346, .368, .391, .413, .435],
            [.087, .112, .137, .162, .186, .211, .236, .261, .286, .31, .335, .36, .385, .409, .434, .459, .484, .508, .533, .558, .583]
        ],
        CritRate: [
            [.035, .045, .055, .065, .075, .084, .094, .104, .114, .124, .134, .144, .154],
            [.042, .054, .066, .078, .09, .101, .113, .125, .137, .149, .161, .173, .185, .197, .208, .22, .232],
            [.047, .06, .073, .086, .099, .113, .126, .139, .152, .166, .179, .192, .205, .218, .232, .245, .258, .271, .284, .298, .311]
        ],
        CritDMG: [
            [.07, .09, .11, .129, .149, .169, .189, .209, .228, .248, .268, .288, .308],
            [.084, .108, .131, .155, .179, .203, .227, .25, .274, .298, .322, .345, .369, .393, .417, .441, .464],
            [.093, .12, .146, .173, .199, .225, .252, .278, .305, .331, .357, .384, .41, .437, .463, .49, .516, .542, .569, .595, .622]
        ],
        Heal: [
            [.04, .052, .063, .075, .086, .098, .109, .12, .132, .143, .155, .166, .178],
            [.048, .062, .076, .09, .103, .117, .131, .144, .158, .172, .186, .199, .213, .227, .24, .254, .268],
            [.054, .069, .084, .1, .115, .13, .145, .161, .176, .191, .206, .221, .237, .252, .267, .282, .298, .313, .328, .343, .359]
        ]
    },
    SubstatRange = {
        HP: 299,
        ATK: 19,
        DEF: 23,
        HPPercent: .058,
        DEFPercent: .073,
        ATKPercent: .058,
        ElementalMastery: 23,
        EnergyRecharge: .065,
        CritRate: .039,
        CritDMG: .078
    },
    SubstatRolls = {
        HP: [
            [100, 115, 129, 143],
            [167, 191, 215, 239],
            [209, 239, 269, 299]
        ],
        ATK: [
            [7, 8, 9],
            [11, 12, 14, 16],
            [14, 16, 18, 19]
        ],
        DEF: [
            [8, 9, 10, 11],
            [13, 15, 17, 19],
            [16, 19, 21, 23]
        ],
        HPPercent: [
            [.025, .028, .32, .035],
            [.033, .037, .042, .047],
            [.041, .047, .053, .058]
        ],
        DEFPercent: [
            [.031, .035, .039, .044],
            [.041, .047, .053, .058],
            [.051, .058, .066, .073]
        ],
        ATKPercent: [
            [.025, .028, .032, .035],
            [.033, .037, .042, .047],
            [.041, .047, .053, .058]
        ],
        ElementalMastery: [
            [10, 11, 13, 14],
            [13, 15, 17, 19],
            [16, 19, 21, 23]
        ],
        EnergyRecharge: [
            [.027, .031, .035, .039],
            [.036, .041, .047, .052],
            [.045, .052, .058, .065]
        ],
        CritRate: [
            [.016, .019, .021, .023],
            [.022, .025, .028, .031],
            [.027, .031, .035, .039]
        ],
        CritDMG: [
            [.033, .037, .042, .047],
            [.044, .05, .056, .062],
            [.054, .062, .07, .078]
        ]
    },
    SubstatOptions = {
        HP: "HP",
        ATK: "ATK",
        DEF: "DEF",
        "HP %": "HPPercent",
        "DEF %": "DEFPercent",
        "ATK %": "ATKPercent",
        "Elemental Mastery": "ElementalMastery",
        "Energy Recharge": "EnergyRecharge",
        "Crit %": "CritRate",
        "Crit DMG": "CritDMG"
    },
    SubstatIndex = {
        HP: 1,
        ATK: 2,
        DEF: 4,
        HPPercent: 8,
        DEFPercent: 16,
        ATKPercent: 32,
        ElementalMastery: 64,
        EnergyRecharge: 128,
        CritRate: 256,
        CritDMG: 512
    };

function GetIndexFromSubstatArr(e) {
    let t = 0;
    for (let a in e) t += SubstatIndex[e[a]];
    return t
}

function GetSubstatFromIndex(e) {
    let t = [],
        a = Object.keys(SubstatIndex),
        i = 11;
    for (; e > 0 || i < 0;) {
        i--;
        for (let i = a.length; i >= 0; i--)
            if (SubstatIndex[a[i]] <= e) {
                e -= SubstatIndex[a[i]], t.push(a[i]), a = a.slice(0, i + 1);
                break
            }
    }
    return t
}

function CompareIndex(e, t) {
    let a = e ^ t;
    return [GetSubstatFromIndex(e & t), GetSubstatFromIndex(a)]
}
var StatOptions = {
        HP: "HP",
        ATK: "ATK",
        DEF: "DEF",
        "Elemental Mastery": "ElementalMastery",
        Stamina: "Stamina",
        "Crit Rate": "CritRate",
        "Crit DMG": "CritDMG",
        Heal: "Heal",
        "Incoming Heal": "IncomingHeal",
        "Energy Recharge": "EnergyRecharge",
        "Reduce CD": "ReduceCD",
        "Powerful Shield": "PowerfulShield",
        "Pyro DMG": "PyroDMG",
        "Pyro RES": "PyroRES",
        "Hydro DMG": "HydroDMG",
        "Hydro RES": "HydroRES",
        "Dendro DMG": "DendroDMG",
        "Dendro RES": "DendroRES",
        "Electro DMG": "ElectroDMG",
        "Electro RES": "ElectroRES",
        "Anemo DMG": "AnemoDMG",
        "Anemo RES": "AnemoRES",
        "Cryo DMG": "CryoDMG",
        "Cryo RES": "CryoRES",
        "Geo DMG": "GeoDMG",
        "Geo RES": "GeoRES",
        "Physical DMG": "PhysicalDMG",
        "Physical RES": "PhysicalRES",
        "HP %": "HPPercent",
        "ATK %": "ATKPercent",
        "DEF %": "DEFPercent",
        "Attack Speed": "AttackSpeed",
        "All DMG": "AllDMG",
        "Normal Attack DMG": "NormalAttackDMG",
        "Charged Attack DMG": "ChargedAttackDMG",
        "Charged Attack Crit Rate": "ChargedAttackCritRate",
        "Plunging DMG": "PlungingDMG",
        "Elemental Skill DMG": "ElementalSkillDMG",
        "Elemental Burst DMG": "ElementalBurstDMG",
        "Swirl DMG": "SwirlDMG",
        "Overloaded DMG": "OverloadedDMG",
        "Electrocharged DMG": "ElectrochargedDMG",
        "Superconduct DMG": "SuperconductDMG",
        "Burning DMG": "BurningDMG",
        "Vaporize DMG": "VaporizeDMG",
        "Melt DMG": "MeltDMG"
    },
    StatTypes = ["HP", "ATK", "DEF", "ElementalMastery", "Stamina", "CritRate", "CritDMG", "Heal", "IncomingHeal", "EnergyRecharge", "ReduceCD", "PowerfulShield", "PyroDMG", "PyroRES", "HydroDMG", "HydroRES", "DendroDMG", "DendroRES", "ElectroDMG", "ElectroRES", "AnemoDMG", "AnemoRES", "CryoDMG", "CryoRES", "GeoDMG", "GeoRES", "PhysicalDMG", "PhysicalRES"],
    FlatTypes = ["HP", "ATK", "DEF", "ElementalMastery", "Stamina"],
    StatModTypes = ["HPPercent", "ATKPercent", "DEFPercent", "AttackSpeed", "AllDMG", "NormalAttackDMG", "ChargedAttackDMG", "ChargedAttackCritRate", "PlungingDMG", "ElementalSkillDMG", "ElementalBurstDMG", "SwirlDMG", "OverloadedDMG", "ElectrochargedDMG", "SuperconductDMG", "BurningDMG", "VaporizeDMG", "MeltDMG"],
    CharacterList = {
        Amber: {
            weaponType: "Bow",
            normalHits: [36.1, 36.1, 46.4, 47.3, 59.3, 0],
            comboTime: 2.98,
            chargedHits: [43.9, 124],
            baseStats: [
                [793, 19, 50],
                [2038, 48, 129],
                [2630, 62, 167],
                [3940, 93, 250],
                [4361, 103, 277],
                [5016, 118, 318],
                [5578, 131, 354],
                [6233, 147, 396],
                [6654, 157, 422],
                [7309, 172, 464],
                [7730, 182, 491],
                [8385, 198, 532],
                [8806, 208, 559],
                [9461, 223, 601]
            ],
            substatType: "ATKPercent",
            substatValue: [0, 0, 0, 0, .06, .06, .12, .12, .12, .12, .18, .18, .24, .24],
            normalDmgType: "PhysicalDMG",
            element: "PyroDMG"
        },
        Fischl: {
            weaponType: "Bow",
            normalHits: [44.1, 46.8, 58.1, 57.7, 72.1, 0],
            comboTime: 3,
            chargedHits: [43.9, 124],
            baseStats: [
                [770, 20, 50],
                [1979, 53, 128],
                [2555, 68, 165],
                [3827, 102, 247],
                [4236, 113, 274],
                [4872, 130, 315],
                [5418, 144, 350],
                [6054, 161, 391],
                [6463, 172, 418],
                [7099, 189, 459],
                [7508, 200, 485],
                [8144, 216, 526],
                [8553, 227, 553],
                [9189, 244, 594]
            ],
            substatType: "ATKPercent",
            substatValue: [0, 0, 0, 0, .06, .06, .12, .12, .12, .12, .18, .18, .24, .24],
            normalDmgType: "PhysicalDMG",
            element: "ElectroDMG"
        },
        Diona: {
            weaponType: "Bow",
            normalHits: [36.1, 33.5, 45.6, 43, 53.8, 0],
            comboTime: 3,
            chargedHits: [43.9, 124],
            baseStats: [
                [802, 18, 50],
                [2061, 46, 129],
                [2661, 59, 167],
                [3985, 88, 250],
                [4411, 98, 277],
                [5074, 113, 318],
                [5642, 125, 354],
                [6305, 140, 396],
                [6731, 149, 422],
                [7393, 164, 464],
                [7818, 174, 491],
                [8481, 188, 532],
                [8907, 198, 559],
                [9570, 212, 601]
            ],
            substatType: "CryoDMG",
            substatValue: [0, 0, 0, 0, .06, .06, .12, .12, .12, .12, .18, .18, .24, .24],
            normalDmgType: "PhysicalDMG",
            element: "CryoDMG"
        },
        Venti: {
            weaponType: "Bow",
            normalHits: [40.8, 44.4, 52.4, 52.2, 50.7, 71],
            comboTime: 3.6,
            chargedHits: [43.9, 124],
            baseStats: [
                [820, 20, 52],
                [2127, 53, 135],
                [2830, 71, 180],
                [4234, 106, 269],
                [4734, 118, 301],
                [5446, 136, 346],
                [6112, 153, 388],
                [6832, 171, 434],
                [7331, 183, 465],
                [8058, 201, 512],
                [8557, 214, 543],
                [9292, 232, 590],
                [9791, 245, 622],
                [10531, 263, 669]
            ],
            substatType: "EnergyRecharge",
            substatValue: [0, 0, 0, 0, .08, .08, .16, .16, .16, .16, .24, .24, .32, .32],
            normalDmgType: "PhysicalDMG",
            element: "AnemoDMG"
        },
        Tartaglia: {
            weaponType: "Bow",
            normalHits: [41.3, 46.3, 55.4, 57, 72.8, 0],
            comboTime: 3.5,
            chargedHits: [43.9, 124],
            baseStats: [
                [1020, 23, 63],
                [2646, 61, 165],
                [3521, 81, 219],
                [5268, 121, 328],
                [5889, 135, 366],
                [6776, 156, 421],
                [7604, 175, 473],
                [8500, 195, 528],
                [9121, 210, 567],
                [10025, 231, 623],
                [10647, 245, 662],
                [11561, 266, 719],
                [12182, 280, 757],
                [13103, 301, 815]
            ],
            substatType: "HydroDMG",
            substatValue: [0, 0, 0, 0, .072, .072, .144, .144, .144, .144, .216, .216, .288, .288],
            normalDmgType: "PhysicalDMG",
            element: "HydroDMG"
        },
        Ganyu: {
            weaponType: "Bow",
            comboTime: 3.81,
            baseStats: [
                [763, 26, 49],
                [1978, 68, 127],
                [2632, 90, 169],
                [3939, 135, 253],
                [4403, 151, 283],
                [5066, 173, 326],
                [5686, 194, 366],
                [6355, 217, 409],
                [6820, 233, 439],
                [7495, 256, 482],
                [7960, 272, 512],
                [8643, 295, 556],
                [9108, 311, 586],
                [9797, 335, 630]
            ],
            substatType: "CritDMG",
            substatValue: [0, 0, 0, 0, .096, .096, .192, .192, .192, .192, .288, .288, .384, .384],
            normalDmgType: "PhysicalDMG",
            element: "CryoDMG"
        },
        Yoimiya: {
            weaponType: "Bow",
            comboTime: 3.21,
            baseStats: [
                [791, 25, 48],
                [2053, 65, 124],
                [2731, 87, 165],
                [4086, 130, 247],
                [4568, 145, 276],
                [5256, 167, 318],
                [5899, 187, 357],
                [5693, 209, 399],
                [7075, 225, 428],
                [7777, 247, 470],
                [8259, 262, 500],
                [8968, 285, 542],
                [9450, 300, 572],
                [10164, 323, 615]
            ],
            substatType: "CritRate",
            substatValue: [0, 0, 0, 0, .098, .098, .146, .146, .146, .146, .194, .194, .242, .242],
            normalDmgType: "PhysicalDMG",
            element: "PyroDMG"
        },
        Beidou: {
            weaponType: "Claymore",
            normalHits: [71.1, 70.9, 88.3, 86.5, 112, 0],
            comboTime: 4.13,
            chargedHits: [56.2, 102],
            baseStats: [
                [1094, 19, 54],
                [2811, 48, 140],
                [3628, 63, 180],
                [5435, 94, 270],
                [6015, 104, 299],
                [6919, 119, 344],
                [7694, 133, 382],
                [8597, 148, 427],
                [9178, 158, 456],
                [10081, 174, 501],
                [10662, 184, 530],
                [11565, 200, 575],
                [12146, 210, 603],
                [13050, 225, 648]
            ],
            substatType: "ElectroDMG",
            substatValue: [0, 0, 0, 0, .06, .06, .12, .12, .12, .12, .18, .18, .24, .24],
            normalDmgType: "PhysicalDMG",
            element: "ElectroDMG"
        },
        Chongyun: {
            weaponType: "Claymore",
            normalHits: [70, 63.1, 80.3, 101, 0, 0],
            comboTime: 3.28,
            chargedHits: [56.3, 102],
            baseStats: [
                [921, 19, 54],
                [2366, 48, 140],
                [3054, 62, 180],
                [4574, 93, 270],
                [5063, 103, 299],
                [5824, 118, 344],
                [6475, 131, 382],
                [7236, 147, 427],
                [7725, 157, 456],
                [8485, 172, 501],
                [8974, 182, 530],
                [9734, 198, 575],
                [10223, 208, 603],
                [10984, 223, 648]
            ],
            substatType: "ATKPercent",
            substatValue: [0, 0, 0, 0, .06, .06, .12, .12, .12, .12, .18, .18, .24, .24],
            normalDmgType: "PhysicalDMG",
            element: "CryoDMG"
        },
        Diluc: {
            weaponType: "Claymore",
            normalHits: [89.7, 87.6, 98.8, 134, 0, 0],
            comboTime: 3.66,
            chargedHits: [68.8, 125],
            baseStats: [
                [1011, 26, 61],
                [2621, 68, 158],
                [3488, 90, 211],
                [5219, 135, 315],
                [5834, 151, 352],
                [6712, 173, 405],
                [7533, 194, 455],
                [8421, 217, 509],
                [9036, 233, 546],
                [9932, 256, 600],
                [10547, 272, 637],
                [11453, 295, 692],
                [12068, 311, 729],
                [12981, 335, 784]
            ],
            substatType: "CritRate",
            substatValue: [0, 0, 0, 0, .048, .048, .096, .096, .096, .096, .144, .144, .192, .192],
            normalDmgType: "PhysicalDMG",
            element: "PyroDMG"
        },
        Noelle: {
            weaponType: "Claymore",
            normalHits: [79.1, 73.4, 86.3, 113, 50.7, 0],
            comboTime: 3.7,
            chargedHits: [90.5, 0],
            baseStats: [
                [1012, 16, 67],
                [2600, 41, 172],
                [3356, 53, 222],
                [5027, 80, 333],
                [5564, 88, 368],
                [6400, 101, 423],
                [7117, 113, 471],
                [7953, 126, 526],
                [8490, 134, 562],
                [9325, 148, 617],
                [9862, 156, 652],
                [10698, 169, 708],
                [11235, 178, 743],
                [12071, 191, 799]
            ],
            substatType: "DEFPercent",
            substatValue: [0, 0, 0, 0, .075, .075, .15, .15, .15, .15, .225, .225, .3, .3],
            normalDmgType: "PhysicalDMG",
            element: "GeoDMG"
        },
        Gorou: {
            weaponType: "Bow",
            normalHits: [37.8, 37.1, 49.5, 59, 43.9, 0],
            comboTime: 3.17,
            chargedHits: [124, 0],
            baseStats: [
                [802 , 15 , 54 ],
                [2061, 39 , 140],
                [2661, 51 , 180],
                [3985, 76 , 270],
                [4411, 84 , 299],
                [5074, 97 , 344],
                [5642, 108, 382],
                [6305, 120, 427],
                [6731, 128, 456],
                [7393, 141, 501],
                [7818, 149, 530],
                [8481, 162, 575],
                [8907, 170, 603],
                [9570, 183, 648]
            ],
            substatType: "GeoDMG",
            substatValue: [0, 0, 0, 0, .06, .06, .12, .12, .12, .12, .18, .18, .24, .24],
            normalDmgType: "PhysicalDMG",
            element: "GeoDMG"
        },
        Itto: {
            weaponType: "Claymore",
            normalHits: [79.2, 76.4, 91.6, 117.2, 91.2, 0],
            comboTime: 3.7,
            chargedHits: [190.2, 0],
            baseStats: [
                [1001, 18, 75],
                [2597, 46, 194],
                [3455, 61, 258],
                [5170, 91, 386],
                [5779, 102, 431],
                [6649, 117, 496],
                [7462, 132, 557],
                [8341, 147, 622],
                [8951, 158, 668],
                [9838, 174, 734],
                [10448, 185, 779],
                [11345, 200, 846],
                [11954, 211, 892],
                [12858, 227, 959]
            ],
            substatType: "CritRate",
            substatValue: [0.05, 0.05, 0.05, 0.05, .098, .098, .146, .146, .146, .146, .194, .194, .242, .242],
            normalDmgType: "PhysicalDMG",
            element: "GeoDMG"
        },
        Razor: {
            weaponType: "Claymore",
            normalHits: [95.9, 82.6, 103, 136, 0, 0],
            comboTime: 4,
            chargedHits: [62.5, 113],
            baseStats: [
                [1003, 20, 63],
                [2577, 50, 162],
                [3326, 65, 209],
                [4982, 97, 313],
                [5514, 108, 346],
                [6343, 124, 398],
                [7052, 138, 443],
                [7881, 154, 495],
                [8413, 164, 528],
                [9241, 180, 580],
                [9773, 191, 613],
                [10602, 207, 665],
                [11134, 217, 699],
                [11962, 234, 751]
            ],
            substatType: "PhysicalDMG",
            substatValue: [0, 0, 0, 0, .075, .075, .15, .15, .15, .15, .225, .225, .3, .3],
            normalDmgType: "PhysicalDMG",
            element: "ElectroDMG"
        },
        Xinyan: {
            weaponType: "Claymore",
            comboTime: 3.75,
            baseStats: [
                [939, 21, 67],
                [2413, 54, 172],
                [3114, 69, 222],
                [4665, 103, 333],
                [5163, 115, 368],
                [5939, 132, 423],
                [6604, 147, 471],
                [7379, 164, 526],
                [7878, 175, 562],
                [8653, 192, 617],
                [9151, 203, 652],
                [9927, 220, 708],
                [10425, 231, 743],
                [11201, 249, 799]
            ],
            substatType: "ATKPercent",
            substatValue: [0, 0, 0, 0, .06, .06, .12, .12, .12, .12, .18, .18, .24, .24],
            normalDmgType: "PhysicalDMG",
            element: "PyroDMG"
        },
        Eula: {
            weaponType: "Claymore",
            comboTime: 4.5,
            baseStats: [
                [1030, 27, 58],
                [2671, 69, 152],
                [3554, 92, 202],
                [5317, 138, 302],
                [5944, 154, 337],
                [6839, 177, 388],
                [7675, 198, 436],
                [8579, 222, 487],
                [9207, 238, 523],
                [10119, 262, 574],
                [10746, 278, 610],
                [11669, 302, 664],
                [12296, 318, 698],
                [13226, 342, 751]
            ],
            substatType: "CritDMG",
            substatValue: [0, 0, 0, 0, .096, .096, .192, .192, .192, .192, .288, .288, .384, .384],
            normalDmgType: "PhysicalDMG",
            element: "CryoDMG"
        },
        Sayu: {
            weaponType: "Claymore",
            comboTime: 3.4,
            baseStats: [
                [994, 20, 62],
                [2553, 53, 160],
                [3296, 68, 207],
                [4937, 102, 310],
                [5464, 113, 343],
                [6285, 130, 395],
                [6988, 144, 439],
                [7809, 161, 491],
                [8337, 172, 524],
                [9157, 189, 575],
                [9684, 200, 608],
                [10505, 216, 660],
                [11033, 227, 693],
                [11854, 244, 745]
            ],
            substatType: "ElementalMastery",
            substatValue: [0, 0, 0, 0, 24, 24, 48, 48, 48, 48, 72, 72, 96, 96],
            normalDmgType: "PhysicalDMG",
            element: "AnemoDMG"
        },
        Bennett: {
            weaponType: "Sword",
            normalHits: [44.5, 42.7, 54.6, 59.7, 71.9, 0],
            comboTime: 2.9,
            chargedHits: [0, 116.6],
            baseStats: [
                [1039, 16, 65],
                [2670, 41, 166],
                [3447, 53, 214],
                [5163, 80, 321],
                [5715, 88, 356],
                [6573, 101, 409],
                [7309, 113, 455],
                [8168, 126, 508],
                [8719, 134, 542],
                [9577, 148, 596],
                [10129, 156, 630],
                [10987, 169, 684],
                [11539, 178, 718],
                [12397, 191, 771]
            ],
            substatType: "EnergyRecharge",
            substatValue: [0, 0, 0, 0, .67, .67, .133, .133, .133, .133, .2, .2, .267, .267],
            normalDmgType: "PhysicalDMG",
            element: "PyroDMG"
        },
        Jean: {
            weaponType: "Sword",
            normalHits: [48.3, 45.6, 60.3, 65.9, 79.2, 0],
            comboTime: 2.85,
            chargedHits: [0, 162],
            baseStats: [
                [1144, 19, 60],
                [2967, 48, 155],
                [3948, 64, 206],
                [5908, 96, 309],
                [6605, 108, 345],
                [7599, 124, 397],
                [8528, 139, 446],
                [9533, 155, 499],
                [10230, 166, 535],
                [11243, 183, 588],
                [11940, 194, 624],
                [12965, 211, 678],
                [13662, 222, 715],
                [14695, 239, 769]
            ],
            substatType: "Heal",
            substatValue: [0, 0, 0, 0, .055, .055, .111, .111, .111, .111, .166, .166, .222, .222],
            normalDmgType: "PhysicalDMG",
            element: "AnemoDMG"
        },
        Kaeya: {
            weaponType: "Sword",
            normalHits: [53.8, 51.7, 65.3, 70.9, 88.2, 0],
            comboTime: 2.9,
            chargedHits: [0, 128.1],
            baseStats: [
                [976, 19, 66],
                [2506, 48, 171],
                [3235, 62, 220],
                [4846, 93, 330],
                [5364, 103, 365],
                [6170, 118, 420],
                [6860, 131, 467],
                [7666, 147, 522],
                [8184, 157, 557],
                [8989, 172, 612],
                [9507, 182, 647],
                [10312, 198, 702],
                [10830, 208, 737],
                [11636, 223, 792]
            ],
            substatType: "EnergyRecharge",
            substatValue: [0, 0, 0, 0, .067, .067, .133, .133, .133, .133, .2, .2, .267, .267],
            normalDmgType: "PhysicalDMG",
            element: "CryoDMG"
        },
        Keqing: {
            weaponType: "Sword",
            normalHits: [41, 41, 54.4, 65.9, 67, 0],
            comboTime: 2.5,
            chargedHits: [0, 162.8],
            baseStats: [
                [1020, 25, 62],
                [2646, 65, 161],
                [3521, 87, 215],
                [5268, 130, 321],
                [5889, 145, 359],
                [6776, 167, 413],
                [7604, 187, 464],
                [8500, 209, 519],
                [9121, 225, 556],
                [10025, 247, 612],
                [10647, 262, 649],
                [11561, 285, 705],
                [12182, 300, 743],
                [13103, 323, 799]
            ],
            substatType: "CritDMG",
            substatValue: [0, 0, 0, 0, .096, .096, .192, .192, .192, .192, .288, .288, .384, .384],
            normalDmgType: "PhysicalDMG",
            element: "ElectroDMG"
        },
        Qiqi: {
            weaponType: "Sword",
            normalHits: [37.8, 38.9, 48.4, 49.4, 63, 0],
            comboTime: 2.72,
            chargedHits: [0, 128.6],
            baseStats: [
                [963, 22, 72],
                [2498, 58, 186],
                [3323, 77, 248],
                [4973, 115, 371],
                [5559, 129, 415],
                [6396, 148, 477],
                [7178, 167, 535],
                [8023, 186, 598],
                [8610, 200, 642],
                [9463, 220, 706],
                [10050, 233, 749],
                [10912, 253, 814],
                [11499, 267, 857],
                [12368, 287, 922]
            ],
            substatType: "Heal",
            substatValue: [0, 0, 0, 0, .055, .055, .111, .111, .111, .111, .166, .166, .222, .222],
            normalDmgType: "PhysicalDMG",
            element: "CryoDMG"
        },
        "Traveler (Anemo)": {
            weaponType: "Sword",
            normalHits: [44.5, 43.4, 53, 58.3, 70.8, 0],
            comboTime: 3,
            chargedHits: [0, 128.1],
            baseStats: [
                [912, 18, 57],
                [2342, 46, 147],
                [3024, 59, 190],
                [4529, 88, 284],
                [5013, 98, 315],
                [5766, 113, 362],
                [6411, 125, 402],
                [7164, 140, 450],
                [7648, 149, 480],
                [8401, 164, 527],
                [8885, 174, 558],
                [9638, 188, 605],
                [10122, 198, 635],
                [10875, 212, 683]
            ],
            substatType: "ATKPercent",
            substatValue: [0, 0, 0, 0, .06, .06, .12, .12, .12, .12, .18, .18, .24, .24],
            normalDmgType: "PhysicalDMG",
            element: "AnemoDMG"
        },
        "Traveler (Geo)": {
            weaponType: "Sword",
            normalHits: [44.5, 43.4, 53, 58.3, 70.8, 0],
            comboTime: 3,
            chargedHits: [0, 128.1],
            baseStats: [
                [912, 18, 57],
                [2342, 46, 147],
                [3024, 59, 190],
                [4529, 88, 284],
                [5013, 98, 315],
                [5766, 113, 362],
                [6411, 125, 402],
                [7164, 140, 450],
                [7648, 149, 480],
                [8401, 164, 527],
                [8885, 174, 558],
                [9638, 188, 605],
                [10122, 198, 635],
                [10875, 212, 683]
            ],
            substatType: "ATKPercent",
            substatValue: [0, 0, 0, 0, .06, .06, .12, .12, .12, .12, .18, .18, .24, .24],
            normalDmgType: "PhysicalDMG",
            element: "GeoDMG"
        },
        Xingqiu: {
            weaponType: "Sword",
            normalHits: [46.6, 47.6, 57.2, 56, 71.8, 0],
            comboTime: 2.8,
            chargedHits: [0, 103.5],
            baseStats: [
                [857, 17, 64],
                [2202, 43, 163],
                [2842, 56, 211],
                [4257, 84, 316],
                [4712, 93, 349],
                [5420, 107, 402],
                [6027, 119, 447],
                [6735, 133, 499],
                [7190, 142, 533],
                [7897, 156, 585],
                [8352, 165, 619],
                [9060, 179, 671],
                [9514, 188, 705],
                [10222, 202, 758]
            ],
            substatType: "ATKPercent",
            substatValue: [0, 0, 0, 0, .06, .06, .12, .12, .12, .12, .18, .18, .24, .24],
            normalDmgType: "PhysicalDMG",
            element: "HydroDMG"
        },
        Albedo: {
            weaponType: "Sword",
            comboTime: 2.8,
            baseStats: [
                [1030, 20, 68],
                [2671, 51, 177],
                [3554, 67, 235],
                [5317, 101, 352],
                [5944, 113, 394],
                [6839, 130, 453],
                [7675, 146, 508],
                [8579, 163, 568],
                [9207, 175, 610],
                [10119, 192, 670],
                [10746, 204, 712],
                [11669, 222, 773],
                [12296, 233, 815],
                [13226, 251, 876]
            ],
            substatType: "GeoDMG",
            substatValue: [0, 0, 0, 0, .072, .072, .144, .144, .144, .144, .216, .216, .288, .288],
            normalDmgType: "PhysicalDMG",
            element: "GeoDMG"
        },
        Kazuha: {
            weaponType: "Sword",
            comboTime: 2.8,
            baseStats: [
                [1039, 23, 63],
                [2695, 60, 163],
                [3586, 80, 217],
                [5366, 119, 324],
                [5999, 133, 363],
                [6902, 153, 417],
                [7747, 172, 468],
                [8659, 192, 523],
                [9292, 206, 562],
                [10213, 227, 617],
                [10846, 241, 656],
                [11777, 262, 712],
                [12410, 276, 750],
                [13348, 297, 807]
            ],
            substatType: "ElementalMastery",
            substatValue: [0, 0, 0, 0, 28.8, 28.8, 57.6, 57.6, 57.6, 57.6, 86.4, 86.4, 115.2, 115.2],
            normalDmgType: "PhysicalDMG",
            element: "AnemoDMG"
        },
        Ayaka: {
            weaponType: "Sword",
            comboTime: 2.5,
            baseStats: [
                [1001, 27, 61],
                [2597, 69, 158],
                [3455, 92, 211],
                [5170, 138, 315],
                [5779, 154, 352],
                [6649, 177, 405],
                [7462, 198, 155],
                [8341, 222, 509],
                [8951, 238, 546],
                [9838, 262, 600],
                [10448, 278, 637],
                [11345, 302, 692],
                [11954, 318, 729],
                [12858, 342, 784]
            ],
            substatType: "CritDMG",
            substatValue: [0, 0, 0, 0, .096, .096, .192, .192, .192, .192, .288, .288, .384, .384],
            normalDmgType: "PhysicalDMG",
            element: "CryoDMG"
        },
        Xiangling: {
            weaponType: "Polearm",
            totalHits: 9,
            comboTime: 2.83,
            chargedHits: [0, 122],
            baseStats: [
                [912, 19, 56],
                [2342, 48, 144],
                [3024, 63, 186],
                [4529, 94, 279],
                [5013, 104, 308],
                [5766, 119, 355],
                [6411, 133, 394],
                [7164, 148, 441],
                [7648, 158, 470],
                [8401, 174, 517],
                [8885, 184, 546],
                [9638, 200, 593],
                [10122, 210, 623],
                [10875, 225, 669]
            ],
            substatType: "ElementalMastery",
            substatValue: [0, 0, 0, 0, 24, 24, 48, 48, 48, 48, 72, 72, 96, 96],
            normalDmgType: "PhysicalDMG",
            element: "PyroDMG"
        },
        Zhongli: {
            weaponType: "Polearm",
            totalHits: 9,
            comboTime: 2.73,
            baseStats: [
                [1144, 20, 57],
                [2967, 51, 149],
                [3948, 67, 198],
                [5908, 101, 297],
                [6605, 113, 332],
                [7599, 130, 382],
                [8528, 146, 428],
                [9533, 163, 479],
                [10230, 175, 514],
                [11243, 192, 564],
                [11940, 204, 599],
                [12965, 222, 651],
                [13662, 233, 686],
                [14695, 251, 738]
            ],
            substatType: "GeoDMG",
            substatValue: [0, 0, 0, 0, .072, .072, .144, .144, .144, .144, .216, .216, .288, .288],
            normalDmgType: "PhysicalDMG",
            element: "GeoDMG"
        },
        Xiao: {
            weaponType: "Polearm",
            totalHits: 8,
            comboTime: 3.6,
            baseStats: [
                [991, 27, 62],
                [2572, 72, 161],
                [3422, 94, 215],
                [5120, 140, 321],
                [5724, 157, 359],
                [6586, 181, 413],
                [7391, 203, 464],
                [8262, 227, 519],
                [8866, 243, 556],
                [9744, 267, 612],
                [10348, 284, 649],
                [11236, 308, 705],
                [11840, 325, 743],
                [12736, 349, 799]
            ],
            substatType: "CritRate",
            substatValue: [0, 0, 0, 0, .048, .048, .096, .096, .096, .096, .144, .144, .192, .192],
            normalDmgType: "PhysicalDMG",
            element: "AnemoDMG"
        },
        Hutao: {
            weaponType: "Polearm",
            comboTime: 3.2,
            baseStats: [
                [1211, 8, 68],
                [3141, 21, 177],
                [4179, 29, 235],
                [6253, 43, 352],
                [6990, 48, 394],
                [8042, 55, 453],
                [9026, 62, 508],
                [10089, 69, 568],
                [10826, 74, 610],
                [11899, 81, 670],
                [12637, 86, 712],
                [13721, 94, 773],
                [14459, 99, 815],
                [15552, 106, 876]
            ],
            substatType: "CritDMG",
            substatValue: [0, 0, 0, 0, .096, .096, .192, .192, .192, .192, .288, .288, .384, .384],
            normalDmgType: "PhysicalDMG",
            element: "PyroDMG"
        },
        Rosaria: {
            weaponType: "Polearm",
            comboTime: 3,
            baseStats: [
                [1030, 20, 60],
                [2647, 52, 153],
                [3417, 67, 197],
                [5118, 100, 296],
                [5665, 111, 327],
                [6516, 127, 376],
                [7245, 141, 418],
                [8096, 158, 468],
                [8643, 169, 499],
                [9493, 185, 548],
                [10040, 196, 580],
                [10891, 213, 629],
                [11438, 223, 661],
                [12289, 240, 710]
            ],
            substatType: "ATKPercent",
            substatValue: [0, 0, 0, 0, .06, .06, .12, .12, .12, .12, .18, .18, .24, .24],
            normalDmgType: "PhysicalDMG",
            element: "CryoDMG"
        },
        Barbara: {
            weaponType: "Catalyst",
            normalHits: [37.8, 35.5, 41, 55.2, 0, 0],
            comboTime: 2,
            chargedHits: [0, 166],
            baseStats: [
                [821, 13, 56],
                [2108, 34, 144],
                [2721, 44, 186],
                [4076, 66, 279],
                [4512, 73, 308],
                [5189, 84, 355],
                [5770, 94, 394],
                [6448, 105, 441],
                [6884, 112, 470],
                [7561, 123, 517],
                [7996, 130, 546],
                [8674, 141, 593],
                [9110, 148, 623],
                [9787, 159, 669]
            ],
            substatType: "HPPercent",
            substatValue: [0, 0, 0, 0, .06, .06, .12, .12, .12, .12, .18, .18, .24, .24],
            normalDmgType: "HydroDMG",
            element: "HydroDMG"
        },
        Klee: {
            weaponType: "Catalyst",
            normalHits: [72.2, 62.4, 89.9, 0, 0, 0],
            comboTime: 2.5,
            chargedHits: [0, 157],
            baseStats: [
                [801, 24, 48],
                [2077, 63, 124],
                [2764, 84, 165],
                [4136, 125, 247],
                [4623, 140, 276],
                [5319, 161, 318],
                [5970, 180, 357],
                [6673, 202, 399],
                [7161, 216, 428],
                [7870, 238, 470],
                [8358, 253, 500],
                [9076, 274, 542],
                [9563, 289, 572],
                [10287, 311, 615]
            ],
            substatType: "PyroDMG",
            substatValue: [0, 0, 0, 0, .072, .072, .144, .144, .144, .144, .216, .216, .288, .288],
            normalDmgType: "PyroDMG",
            element: "PyroDMG"
        },
        Lisa: {
            weaponType: "Catalyst",
            normalHits: [39.6, 35.9, 42.8, 55, 0, 0],
            comboTime: 2.45,
            chargedHits: [0, 177],
            baseStats: [
                [802, 19, 48],
                [2061, 50, 123],
                [2661, 64, 159],
                [3985, 96, 239],
                [4411, 107, 264],
                [5074, 123, 304],
                [5642, 136, 338],
                [6305, 153, 378],
                [6731, 163, 403],
                [7393, 179, 443],
                [7818, 189, 468],
                [8481, 205, 508],
                [8907, 215, 534],
                [9570, 232, 573]
            ],
            substatType: "ElementalMastery",
            substatValue: [0, 0, 0, 0, 24, 24, 48, 48, 48, 48, 72, 72, 96, 96],
            normalDmgType: "ElectroDMG",
            element: "ElectroDMG"
        },
        Mona: {
            weaponType: "Catalyst",
            normalHits: [37.6, 36, 44.8, 56.2, 0, 0],
            comboTime: 2.2,
            chargedHits: [0, 150],
            baseStats: [
                [810, 22, 51],
                [2102, 58, 132],
                [2797, 77, 176],
                [4185, 115, 263],
                [4678, 129, 294],
                [5383, 148, 338],
                [6041, 167, 379],
                [6752, 186, 424],
                [7246, 200, 455],
                [7964, 220, 500],
                [8458, 233, 531],
                [9184, 253, 576],
                [9677, 267, 607],
                [10409, 287, 653]
            ],
            substatType: "EnergyRecharge",
            substatValue: [0, 0, 0, 0, .08, .08, .16, .16, .16, .16, .24, .24, .32, .32],
            normalDmgType: "HydroDMG",
            element: "HydroDMG"
        },
        Ningguang: {
            weaponType: "Catalyst",
            normalHits: [28, 0, 0, 0, 0, 0],
            comboTime: .7,
            chargedHits: [49.6, 174],
            baseStats: [
                [821, 18, 48],
                [2108, 46, 123],
                [2721, 59, 159],
                [4076, 88, 239],
                [4512, 98, 264],
                [5189, 113, 304],
                [5770, 125, 338],
                [6448, 140, 378],
                [6884, 149, 403],
                [7561, 164, 443],
                [7996, 174, 468],
                [8674, 188, 508],
                [9110, 198, 534],
                [9787, 212, 573]
            ],
            substatType: "GeoDMG",
            substatValue: [0, 0, 0, 0, .06, .06, .12, .12, .12, .12, .18, .18, .24, .24],
            normalDmgType: "GeoDMG",
            element: "GeoDMG"
        },
        Sucrose: {
            weaponType: "Catalyst",
            normalHits: [33.5, 30.6, 38.4, 47.9, 0, 0],
            comboTime: 2.1,
            chargedHits: [0, 120],
            baseStats: [
                [775, 14, 59],
                [1991, 37, 151],
                [2570, 47, 195],
                [3850, 71, 293],
                [4261, 78, 324],
                [4901, 90, 373],
                [5450, 100, 414],
                [6090, 112, 463],
                [6501, 120, 494],
                [7141, 131, 543],
                [7552, 139, 574],
                [8192, 151, 623],
                [8604, 158, 654],
                [9244, 170, 703]
            ],
            substatType: "AnemoDMG",
            substatValue: [0, 0, 0, 0, .06, .06, .12, .12, .12, .12, .18, .18, .24, .24],
            normalDmgType: "AnemoDMG",
            element: "AnemoDMG"
        },
        Yanfei: {
            weaponType: "Catalyst",
            comboTime: 2.2,
            baseStats: [
                [784, 20, 49],
                [2014, 52, 126],
                [2600, 67, 163],
                [3895, 100, 244],
                [4311, 111, 271],
                [4959, 127, 311],
                [5514, 141, 346],
                [6161, 158, 387],
                [6578, 169, 413],
                [7225, 185, 453],
                [7641, 196, 480],
                [8289, 213, 520],
                [8705, 223, 546],
                [9352, 240, 587]
            ],
            substatType: "PyroDMG",
            substatValue: [0, 0, 0, 0, .06, .06, .12, .12, .12, .12, .18, .18, .24, .24],
            normalDmgType: "PyroDMG",
            element: "PyroDMG"
        },
        Shogun: {
            weaponType: "Polearm",
            comboTime: 3,
            baseStats: [
                [1005, 26, 61],
                [2606, 68, 159],
                [3468, 91, 212],
                [5189, 136, 317],
                [5801, 152, 355],
                [6675, 174, 408],
                [7491, 196, 458],
                [8373, 219, 512],
                [8985, 235, 549],
                [9875, 258, 604],
                [10487, 274, 641],
                [11388, 298, 696],
                [12e3, 314, 734],
                [12907, 337, 789]
            ],
            substatType: "EnergyRecharge",
            substatValue: [0, 0, 0, 0, .08, .08, .16, .16, .16, .16, .24, .24, .32, .32],
            normalDmgType: "PhysicalDMG",
            element: "ElectroDMG"
        },
        Kokomi: {
            weaponType: "Catalyst",
            comboTime: 3,
            baseStats: [
                [1049, 18, 51],
                [2720, 47, 133],
                [3619, 63, 177],
                [5416, 94, 264],
                [6055, 105, 295],
                [6966, 121, 340],
                [7818, 136, 381],
                [8738, 152, 426],
                [9377, 163, 457],
                [10306, 179, 503],
                [10945, 190, 534],
                [11885, 207, 580],
                [12524, 218, 611],
                [13471, 234, 657]
            ],
            substatType: "HydroDMG",
            substatValue: [0, 0, 0, 0, .072, .072, .144, .144, .144, .144, .216, .216, .288, .288],
            normalDmgType: "HydroDMG",
            element: "HydroDMG"
        },
        Sara: {
            weaponType: "Bow",
            comboTime: 3,
            baseStats: [
                [802, 16, 53],
                [2061, 42, 135],
                [2661, 54, 175],
                [3985, 81, 262],
                [4411, 90, 289],
                [5074, 104, 333],
                [5642, 115, 370],
                [6305, 129, 414],
                [6731, 137, 442],
                [7393, 151, 485],
                [7818, 160, 513],
                [8481, 173, 556],
                [8907, 182, 584],
                [9570, 195, 628]
            ],
            substatType: "ATKPercent",
            substatValue: [0, 0, 0, 0, .06, .06, .12, .12, .12, .12, .18, .18, .24, .24],
            normalDmgType: "PhysicalDMG",
            element: "ElectroDMG"
        }
    };
let EnemyList = {
    Slime: {
        PhysicalDMG: .1,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .1,
        Elemental: {
            PyroDMG: 9.99,
            HydroDMG: 9.99,
            DendroDMG: 9.99,
            ElectroDMG: 9.99,
            AnemoDMG: 9.99,
            CryoDMG: 9.99,
            GeoDMG: 9.99
        }
    },
    Hilichurl: {
        PhysicalDMG: .1,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .1
    },
    Mitachurl: {
        PhysicalDMG: .3,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .1
    },
    Samachurl: {
        PhysicalDMG: .1,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .1,
        Elemental: {
            PyroDMG: .5,
            HydroDMG: .5,
            DendroDMG: .5,
            AnemoDMG: .5,
            GeoDMG: .5
        }
    },
    "Stonehide Lawachurl": {
        PhysicalDMG: .5,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .7
    },
    "Ruin Guard": {
        PhysicalDMG: .7,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .1
    },
    "Ruin Hunter": {
        PhysicalDMG: .5,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .1
    },
    Flower: {
        PhysicalDMG: .35,
        PyroDMG: .35,
        HydroDMG: .35,
        DendroDMG: .35,
        ElectroDMG: .35,
        AnemoDMG: .35,
        CryoDMG: .35,
        GeoDMG: .35,
        Elemental: {
            PyroDMG: .75,
            CryoDMG: .75
        }
    },
    "Flower (Stunned)": {
        PhysicalDMG: .1,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .1,
        Elemental: {
            PyroDMG: .5,
            CryoDMG: .5
        }
    },
    "Fatui Skirmisher": {
        PhysicalDMG: -.2,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .1
    },
    "Fatui Skirmisher (Shielded)": {
        PhysicalDMG: .8,
        PyroDMG: 1.1,
        HydroDMG: 1.1,
        DendroDMG: 1.1,
        ElectroDMG: 1.1,
        AnemoDMG: 1.1,
        CryoDMG: 1.1,
        GeoDMG: 1.1
    },
    "Fatui Pyro Agent": {
        PhysicalDMG: -.2,
        PyroDMG: .5,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .1
    },
    "Fatui Electro Cincin Mage": {
        PhysicalDMG: -.2,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .5,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .1
    },
    "Treasure Hoarder": {
        PhysicalDMG: -.2,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .1
    },
    "Geovishap Hatchling": {
        PhysicalDMG: .3,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .5
    },
    "Abyss Mage": {
        PhysicalDMG: .1,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .1
    },
    Hypostasis: {
        PhysicalDMG: .1,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .1,
        Elemental: {
            ElectroDMG: 9.99,
            AnemoDMG: 9.99,
            GeoDMG: 9.99
        }
    },
    Regisvine: {
        PhysicalDMG: 1.3,
        PyroDMG: 1.1,
        HydroDMG: 1.1,
        DendroDMG: 1.1,
        ElectroDMG: 1.1,
        AnemoDMG: 1.1,
        CryoDMG: 1.1,
        GeoDMG: 1.1,
        Elemental: {
            PyroDMG: 1.7,
            CryoDMG: 1.7
        }
    },
    "Regisvine (Stunned)": {
        PhysicalDMG: .3,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .1,
        Elemental: {
            PyroDMG: .7,
            CryoDMG: .7
        }
    },
    Dvalin: {
        PhysicalDMG: .1,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: .1,
        CryoDMG: .1,
        GeoDMG: .1
    },
    Andrius: {
        PhysicalDMG: .1,
        PyroDMG: .1,
        HydroDMG: .1,
        DendroDMG: .1,
        ElectroDMG: .1,
        AnemoDMG: 9.99,
        CryoDMG: 9.99,
        GeoDMG: .1
    }
};
FoodList = {
    "Wolfhook Juice": {
        effect: [new StatModifier("ATK", 114)]
    },
    "Calla Lily Seafood Soup": {
        effect: [new StatModifier("DEF", 235)]
    },
    "Jewelry Soup": {
        effect: [new StatModifier("DEF", 126)]
    },
    "Fried Radish Balls": {
        effect: [new StatModifier("ATK", 95)]
    },
    "Satisfying Salad": {
        effect: [new StatModifier("CritRate", .12)]
    },
    "Almond Tofu": {
        effect: [new StatModifier("ATK", 95)]
    },
    "Cold Cut Platter": {
        effect: [new StatModifier("PhysicalDMG", .4)]
    },
    "Qingce Stir Fry": {
        effect: [new StatModifier("ATK", 228)]
    },
    "Jade Parcels": {
        effect: [new StatModifier("ATK", 320), new StatModifier("CritRate", .1)]
    },
    "Adeptus Temptation": {
        effect: [new StatModifier("ATK", 372), new StatModifier("CritRate", .12)]
    },
    "Sautéed Matsutake": {
        effect: [new StatModifier("ATK", 228)]
    },
    "Fishermans Toast": {
        effect: [new StatModifier("DEF", 126)]
    },
    "Pile Em Up": {
        effect: [new StatModifier("CritRate", .2)]
    },
    "Come and Get It": {
        effect: [new StatModifier("CritRate", .2)]
    },
    "Lotus Flower Crisp": {
        effect: [new StatModifier("DEF", 200)]
    },
    "Adventurers Breakfast Sandwich": {
        effect: [new StatModifier("ATK", 194)]
    },
    "Moon Pie": {
        effect: [new StatModifier("DEF", 235)]
    },
    "Jueyun Guoba": {
        effect: [new StatModifier("PhysicalDMG", .4)]
    },
    "Tianshu Meat": {
        effect: [new StatModifier("PhysicalDMG", .45), new StatModifier("CritRate", .1)]
    },
    "Unmoving Essential Oil": {
        effect: [new StatModifier("GeoDMG", .25)]
    },
    "Flaming Essential Oil": {
        effect: [new StatModifier("PyroDMG", .25)]
    },
    "Frosting Essential Oil": {
        effect: [new StatModifier("CryoDMG", .25)]
    },
    "Gushing Essential Oil": {
        effect: [new StatModifier("AnemoDMG", .25)]
    },
    "Shocking Essential Oil": {
        effect: [new StatModifier("ElectroDMG", .25)]
    },
    "Streaming Essential Oil": {
        effect: [new StatModifier("HydroDMG", .25)]
    },
    "Once Upon a Time in Mondstadt": {
        effect: [new StatModifier("CritRate", .2), new StatModifier("CritDMG", .2)]
    },
    "No Tomorrow": {
        effect: [new StatModifier("CritRate", .2), new StatModifier("CritDMG", .2)]
    },
    "Der Weisheit Letzter Schluss (Life)": {
        effect: [new StatModifier("CritRate", .16)]
    },
    "Rockin Riffin Chicken!": {
        effect: [new StatModifier("CritRate", .16)]
    },
    "Die Heilige Sinfonie": {
        effect: [new StatModifier("PhysicalDMG", .55)]
    },
    "A Prize Catch": {
        effect: [new StatModifier("DEF", 282)]
    },
    "Fish-Flavored Toast": {
        effect: [new StatModifier("DEF", 151)]
    },
    "Desiccant Potion": {
        effect: [new StatModifier("HydroRES", .25)]
    },
    "Dustproof Potion": {
        effect: [new StatModifier("GeoRES", .25)]
    },
    "Frostshield Potion": {
        effect: [new StatModifier("CryoRES", .25)]
    },
    "Heatshield Potion": {
        effect: [new StatModifier("PyroRES", .25)]
    },
    "Insulation Potion": {
        effect: [new StatModifier("ElectroRES", .25)]
    },
    "Windbarrier Potion": {
        effect: [new StatModifier("AnemoRES", .25)]
    }
};
var Foods = {};
for (let e in FoodList) Foods[e] = e;
let ElementalResonanceList = {
        "Enduring Rock": {
            desc: "Increases resistance to interruption. When protected by a shield, increases Attack DMG by 15%.",
            effect: [new StatModifier("AllDMG", .15), new StatModifier("PowerfulShield", .15)],
            debuff: [new StatModifier("GeoDMG", .2)],
            element: "GeoDMG"
        },
        "Fervent Flames": {
            desc: "Affected by Cryo for 40% less time. Increases ATK by 25%.",
            effect: [new StatModifier("ATKPercent", .25)],
            element: "PyroDMG"
        },
        "Soothing Waters": {
            desc: "Affected by Pyro for 40% less time. Increases incoming healing by 30%.",
            effect: [new StatModifier("IncomingHeal", .3)],
            element: "HydroDMG"
        },
        "Impetuous Winds": {
            desc: "Decreases Stamina Consumption by 15%. Increases Movement SPD by 10%. Shortens Skill CD by 5%.",
            element: "AnemoDMG"
        },
        "High Voltage": {
            desc: "Affected by Hydro for 40% less time. Superconduct, Overloaded, and Electro-Charged have a 100% chance to generate an Electro Elemental Particle (CD: 5s).",
            element: "ElectroDMG"
        },
        "Shattering Ice": {
            desc: "Affected by Electro for 40% less time. Increases CRIT Rate against enemies that are Frozen or affected by Cryo by 15%.",
            effect: [new StatModifier("CritRate", .15)],
            element: "CryoDMG"
        },
        "Protective Canopy": {
            desc: "All Elemental RES by 15%.",
            effect: [new StatModifier("PyroRES", .15), new StatModifier("HydroRES", .15), new StatModifier("DendroRES", .15), new StatModifier("ElectroRES", .15), new StatModifier("AnemoRES", .15), new StatModifier("CryoRES", .15), new StatModifier("GeoRES", .15)]
        }
    },
    PartyBuffList = {
        Superconduct: [{
            desc: "Physical RES Decreased by 40%",
            debuff: [new StatModifier("PhysicalDMG", .4)]
        }],
        Beidou: [{
            name: "Bane of Evil",
            desc: "During the duration of Stormbreaker, the Electro RES of surrounding enemies is decreased by 15%.",
            debuff: [new StatModifier("ElectroDMG", .15)]
        }],
        Bennett: [{
            name: "Fantastic Voyage",
            desc: "Inspiration Field -- If the health of a character in the circle is higher than 70%, they gain an ATK Bonus that is based on Bennett&#39s Base ATK. Applies the Pyro element to characters within the Field. ",
            variables: {
                "Base Attack": 16,
                "Talent Level": 1
            },
            varEffect: e => [new StatModifier("ATK", TalentData.Bennett["ATK Bonus Ratio"][e["Talent Level"] - 1] / 100 * e["Base Attack"])],
            nested: [{
                name: "Grand Expectation",
                desc: "ATK increase no longer has an HP restriction, and gains an additional 20% Base ATK.",
                varEffect: e => [new StatModifier("ATK", .2 * e["Base Attack"])]
            }, {
                name: "Fire Ventures with Me",
                desc: "Sword, Claymore, or Polearm-wielding characters inside radius gain a 15% Pyro DMG Bonus. Normal and Charged Attacks now do Pyro DMG.",
                effect: [new StatModifier("PyroDMG", .15), new StatModifier("NormalType", "PyroDMG")]
            }]
        }],
        Chongyun: [{
            name: "Spirit Blade - Chonghua&#39s Layered Frost",
            desc: "Chonghua Frost Field - All DMG done through Normal and Charged Attacks by Sword, Greatsword and Polearm - wielding characters will be converted to Cryo DMG.",
            effect: [new StatModifier("NormalType", "CryoDMG")],
            nested: [{
                name: "Steady Breathing",
                desc: "Sword, Claymore, or Polearm- wielding characters within the Frost Field have their Normal Attack SPD increased by 8%.",
                effect: [new StatModifier("AttackSpeed", .08)]
            }]
        }, {
            name: "Rimechaser Blade",
            desc: "Enemies hit by blades created when the Frost Field disappears will have their Cryo RES decreased by 10% for 8s.",
            debuff: [new StatModifier("CryoDMG", .1)]
        }],
        Xinyan: [{
            name: "Wildfire Rhythm",
            desc: "Sweeping Fervor&#39s swing DMG decrease opponents Physical RES by 15% for 12s.",
            debuff: [new StatModifier("PhysicalDMG", .15)]
        }, {
            name: "...Now That&#39s Rock &#39N&#39 Roll!",
            desc: "Characters shielded by Sweeping Fervor deal 15% increased Physical DMG.",
            effect: [new StatModifier("PhysicalDMG", .15)]
        }],
        Diona: [{
            name: "Cat&#39s Tail Closing Time",
            desc: "Signature Mix -- Characters within its radius will gain the following effects based on their HP amounts:",
            "switch": [{
                option: "Increasing Incoming Healing Bonus by 30% when HP falls below or is equal to 50%.",
                effect: [new StatModifier("IncomingHeal", .3)]
            }, {
                option: "Elemental Mastery is increased by 200 when HP is above 50%.",
                effect: [new StatModifier("ElementalMastery", 200)]
            }]
        }],
        Jean: [{
            name: "People&#39s Aegis",
            desc: "When Jean picks up an Elemental Orb/Particle, all party members have their Movement SPD and ATK SPD increased by 15% for 15s.",
            effect: [new StatModifier("AttackSpeed", .15)]
        }, {
            name: "Lands of Dandelion",
            desc: "Within the Field, all enemies have their Anemo RES decreased by 40%.",
            debuff: [new StatModifier("AnemoDMG", .4)]
        }],
        Barbara: [{
            name: "Vitality Burst",
            desc: "During the ability&#39s duration, the current character gains 15% Hydro DMG Bonus.",
            effect: [new StatModifier("HydroDMG", .15)]
        }],
        Klee: [{
            name: "Explosive Frags",
            desc: "Being hit by Jumpy Dumpty&#39s mines decreases enemy DEF by 23% for 10s.",
            debuff: [new StatModifier("DEF", .23)]
        }, {
            name: "Blazing Delight",
            desc: "When Sparks &#39n&#39 Splash is used, all party members will gain 10% Pyro DMG Bonus for 25s.",
            effect: [new StatModifier("PyroDMG", .1)]
        }],
        Lisa: [{
            name: "Static Electricity Field",
            desc: "Enemies hit by Lightning Rose have their DEF decreased by 15% for 10s.",
            debuff: [new StatModifier("DEF", .15)]
        }],
        Mona: [{
            name: "Prophecy of Submersion",
            desc: "After a character hits an enemy affected by an Omen:  Electro-Charged DMG is increased by 15%. Vaporize DMG is increased by 15%. Hydro Swirl DMG is increased by 15%. The duration for which enemies are Frozen is increased by 15%. ",
            effect: [new StatModifier("ElectrochargedDMG", .15), new StatModifier("VaporizeDMG", .15), new StatModifier("SwirlDMG", .15)]
        }, {
            name: "Prophecy of Oblivion",
            desc: "When a character attacks an enemy affected by the Omen status effect, their CRIT Rate is increased by 15%.",
            effect: [new StatModifier("CritRate", .15)]
        }, {
            name: "Stellaris Phantasm",
            desc: "Omen -- During its duration, increases DMG taken by enemies. ",
            variables: {
                "Talent Level": 1
            },
            varEffect: e => [new StatModifier("AllDMG", TalentData.Mona["DMG Bonus"][e["Talent Level"] - 1] / 100)]
        }],
        Ningguang: [{
            name: "Exquisite be the Jade, Outshining All the Beneath",
            desc: "Jade Screen increases nearby characters&#39 Elemental RES by 10%.",
            effect: [new StatModifier("PyroRES", .1), new StatModifier("HydroRES", .1), new StatModifier("DendroRES", .1), new StatModifier("ElectroRES", .1), new StatModifier("AnemoRES", .1), new StatModifier("CryoRES", .1), new StatModifier("GeoRES", .1)]
        }, {
            name: "Strategic Reserve",
            desc: "A character that passes through the Jade Screen will gain a 12% Geo DMG Bonus for 10s.",
            effect: [new StatModifier("GeoDMG", .12)]
        }],
        Qiqi: [{
            name: "Life-Prolonging Methods",
            desc: "Herald of Frost -- when a character under its effects triggers an Elemental Reaction, their Incoming Healing Bonus is increased by 20% for 8s.",
            effect: [new StatModifier("IncomingHeal", .2)]
        }],
        Razor: [{
            name: "Bite",
            desc: "Claw and Thunder -- enemies hit will have their DEF decreased by 15% for 7s.",
            debuff: [new StatModifier("DEF", .15)]
        }],
        Sucrose: [{
            name: "Chaotic Entropy",
            desc: "If her Burst triggers an Elemental Absorption, all party members gain a 20% Elemental DMG Bonus for the corresponding absorbed element during its duration.",
            "switch": [{
                option: "Pyro",
                effect: [new StatModifier("PyroDMG", .2)]
            }, {
                option: "Hydro",
                effect: [new StatModifier("HydroDMG", .2)]
            }, {
                option: "Electro",
                effect: [new StatModifier("ElectroDMG", .2)]
            }, {
                option: "Cryo",
                effect: [new StatModifier("CryoDMG", .2)]
            }]
        }, {
            name: "Catalyst Conversion",
            desc: "When Sucrose triggers a Swirl effect, characters in the party with the matching element have their Elemental Mastery increased by 50 for 8s.",
            effect: [new StatModifier("ElementalMastery", 50)]
        }, {
            name: "Mollis Favonius",
            desc: "When her skills hit an enemy, increases other party member&#39s Elemental Mastery based on 20% of Sucrose&#39s Elemental Mastery for 8s.",
            variables: {
                "Elemental Mastery": 0
            },
            varEffect: e => [new StatModifier("ElementalMastery", .2 * e["Elemental Mastery"])]
        }],
        "Traveler (Anemo)": [{
            name: "Intertwined Winds",
            desc: "Targets who take DMG from Gust Surge have their Anemo RES decreased by 20%.  If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.",
            debuff: [new StatModifier("AnemoDMG", .2)],
            "switch": [{
                option: "Pyro",
                debuff: [new StatModifier("PyroDMG", .2)]
            }, {
                option: "Hydro",
                debuff: [new StatModifier("HydroDMG", .2)]
            }, {
                option: "Electro",
                debuff: [new StatModifier("ElectroDMG", .2)]
            }, {
                option: "Cryo",
                debuff: [new StatModifier("CryoDMG", .2)]
            }]
        }],
        "Traveler (Geo)": [{
            name: "Invincible Stonewall",
            desc: "Allies within the radius of Wake of Earth have their CRIT Rate increased by 10%.",
            effect: [new StatModifier("CritRate", .1)]
        }],
        Venti: [{
            name: "Breeze of Reminiscence",
            desc: "Skyward Sonnet decreases enemy Anemo RES by 12% for 10s.  Enemies launched by Skyward Sonnet suffer an additional 12% Anemo RES and Physical RES decrease while airborne.",
            debuff: [new StatModifier("AnemoDMG", .24), new StatModifier("PhysicalDMG", .15)]
        }, {
            name: "Storm of Defiance",
            desc: "Targets who take DMG from Wind&#39s Grand Ode have their Anemo RES decreased by 20%.  If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.",
            debuff: [new StatModifier("AnemoDMG", .2)],
            "switch": [{
                option: "Pyro",
                debuff: [new StatModifier("PyroDMG", .2)]
            }, {
                option: "Hydro",
                debuff: [new StatModifier("HydroDMG", .2)]
            }, {
                option: "Electro",
                debuff: [new StatModifier("ElectroDMG", .2)]
            }, {
                option: "Cryo",
                debuff: [new StatModifier("CryoDMG", .2)]
            }]
        }],
        Xiangling: [{
            name: "Crispy Outside, Tender Inside",
            desc: "Enemies hit by Guoba&#39s attacks have their Pyro RES reduced by 15% for 6s.",
            debuff: [new StatModifier("PyroDMG", .15)]
        }, {
            name: "Condensed Pyronado",
            desc: "For the duration of Pyronado, all party members receive a 15% Pyro DMG Bonus.",
            effect: [new StatModifier("PyroDMG", .15)]
        }, {
            name: "Beware, It&#39s Super Hot!",
            desc: "Picking up a chili pepper increases ATK by 10% for 10s.",
            effect: [new StatModifier("ATKPercent", .1)]
        }],
        Albedo: [{
            name: "Homuncular Nature",
            desc: "Using Rite of Progeniture: Tectonic Tide increases the Elemental Mastery of nearby party members by 125 for 10s.",
            effect: [new StatModifier("ElementalMastery", 125)]
        }, {
            name: "Dust of Purification",
            desc: "If active party members within the AoE are protected by a shield created by Crystallize, Solar Isotoma increases their DMG by 17%.",
            effect: [new StatModifier("AllDMG", .17)]
        }, {
            name: "Descent of Divinity",
            desc: "Solar Isotoma increases Plunging Attack DMG by 30% for active party members within the AoE.",
            effect: [new StatModifier("PlungingDMG", .3)]
        }],
        Ganyu: [{
            name: "Dew-Drinker",
            desc: "Taking DMG from a Charge Level 2 Frostflake Arrow or Frostflake Arrow Bloom decreases enemies&#39 Cryo RES by 15% for 6s.",
            debuff: [new StatModifier("CryoDMG", .15)]
        }, {
            name: "Westward Sojourn",
            desc: "Enemies standing within the AoE of Celestial Shower take increased DMG. This effect strengthens over time. Increased DMG taken begins at 5% and increases by 5% every 3s, up to a maximum of 25%.",
            stack: [new StatModifier("AllDMG", .05)],
            stackCount: 5
        }],
        Zhongli: [{
            name: "Dominus Lapidis",
            desc: "Characters protected by the Jade Shield will decrease the Elemental RES and Physical RES of opponents in a small AoE by 20%.",
            debuff: [new StatModifier("PhysicalDMG", .2), new StatModifier("CryoDMG", .2), new StatModifier("PyroDMG", .2), new StatModifier("ElectroDMG", .2), new StatModifier("HydroDMG", .2), new StatModifier("DendroDMG", .2), new StatModifier("AnemoDMG", .2), new StatModifier("GeoDMG", .2)]
        }],
        Amber: [{
            name: "Wildfire",
            desc: "Fiery Rain increases all party members&#39 Movement SPD by 15% and Base ATK by 15% for 10s.",
            effect: [new StatModifier("ATKPercent", .15)]
        }],
        Hutao: [{
            name: "Flutter By",
            desc: "When a Paramita Papilio state activated by Guide to Afterlife ends, all allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 8s.",
            effect: [new StatModifier("CritRate", .12)]
        }],
        Rosaria: [{
            name: "Divind Retribution",
            desc: "Rites of Termination's attack decreases opponents' Physical RES by 20% for 10s.",
            debuff: [new StatModifier("PhysicalDMG", .2)]
        }, {
            name: "Shadow Samaritan",
            desc: "Casting Rites of Termination increases CRIT Rate of all nearby party members (except Rosaria herself) by 15% of Rosaria's CRIT Rate for 10s. CRIT Rate Bonus gained this way cannot exceed 15%.",
            variables: {
                "Crit Rate": 5
            },
            varEffect: e => [new StatModifier("CritRate", Math.min(.15 * e["Crit Rate"]), .15)]
        }],
        Ayaka: [{
            name: "Ebb and Flow",
            desc: "Opponents damaged by Kamisato Art: Soumetsu's Frostflake Seki no To will have their DEF decreased by 30% for 6s.",
            debuff: [new StatModifier("DEF", .3)]
        }],
        Hutao: [{
            name: "Garden of Eternal Rest",
            desc: "Upon defeating an enemy affected by a Blood Blossom that Hu Tao applied herself, all nearby allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 15s.",
            effect: [new StatModifier("CritRate", .12)]
        }],
        Kazuha: [{
            name: "Poetics of Fuubutsu",
            desc: "Upon triggering a Swirl reaction, Kaedehara Kazuha will grant teammates a 0.04% Elemental DMG Bonus to their corresponding Element for every point of Elemental Mastery he has for 8s. Bonuses for different elements obtained through this method can co-exist.",
            variables: {
                "Elemental Mastery": 0
            },
            varEffect: e => [new StatModifier("CryoDMG", 4e-4 * e["Elemental Mastery"]), new StatModifier("PyroDMG", 4e-4 * e["Elemental Mastery"]), new StatModifier("ElectroDMG", 4e-4 * e["Elemental Mastery"]), new StatModifier("HydroDMG", 4e-4 * e["Elemental Mastery"]), new StatModifier("DendroDMG", 4e-4 * e["Elemental Mastery"]), new StatModifier("AnemoDMG", 4e-4 * e["Elemental Mastery"]), new StatModifier("GeoDMG", 4e-4 * e["Elemental Mastery"])]
        }],
        Shogun: [{
            name: "Pledge of Propriety",
            desc: "When the Musou Isshin state applied by Secret Art: Musou Shinsetsu expires, all nearby party members (excluding the Raiden Shogun) gain 30% bonus ATK for 10s.",
            effect: [new StatModifier("ATKPercent", .3)]
        }, {
            name: "Transcendence: Baleful Omen",
            desc: "Characters who gain the Eye of Stormy Judgment will have their Elemental Burst DMG increased based on the Energy Cost of the Elemental Burst during the Eye's duration.",
            variables: {
                "Talent Level": 1,
                "Energy Cost": 60
            },
            varEffect: e => [new StatModifier("ElementalBurstDMG", TalentData.Shogun["Elemental Burst DMG Bonus"][e["Talent Level"] - 1] / 100 * e["Energy Cost"])]
        }],
        Sara: [{
            name: "Tengu Stormcall",
            desc: "Tengu Juurai: Ambush after a short time, dealing Electro DMG and granting the active character within its AoE an ATK Bonus based on Kujou Sara's Base ATK.",
            variables: {
                "Base Attack": 16,
                "Talent Level": 1
            },
            varEffect: e => [new StatModifier("ATK", TalentData.Sara["ATK Bonus Ratio"][e["Talent Level"] - 1] / 100 * e["Base Attack"])]
        }],
        Xingqiu: [{
            name: "Rainbow Upon the Azure Sky",
            desc: "Decreases the Hydro RES of enemies hit by sword rain attacks by 15% for 4s.",
            debuff: [new StatModifier("HydroDMG", .15)]
        }],
        Instructor: [{
            desc: "After causing an elemental reaction, increases all party members&#39 Elemental Mastery by 120 for 8s.",
            stack: [new StatModifier("ElementalMastery", 120)],
            stackCount: 3
        }],
        "Maiden Beloved": [{
            desc: "Using an Elemental Skill or Burst increases healing received by all party members by 20% for 10s.",
            stack: [new StatModifier("IncomingHeal", .2)],
            stackCount: 3
        }],
        "Noblesse Oblige": [{
            desc: "Using an Elemental Burst increases all party members&#39 ATK by 20% for 12s. This effect cannot stack.",
            effect: [new StatModifier("ATKPercent", .2)]
        }],
        "Viridescent Venerer": [{
            desc: "Decreases opponent&#39s Elemental RES to the element infused in the Swirl by 40% for 10s.",
            "switch": [{
                option: "Pyro",
                debuff: [new StatModifier("PyroDMG", .4)]
            }, {
                option: "Hydro",
                debuff: [new StatModifier("HydroDMG", .4)]
            }, {
                option: "Electro",
                debuff: [new StatModifier("ElectroDMG", .4)]
            }, {
                option: "Cryo",
                debuff: [new StatModifier("CryoDMG", .4)]
            }]
        }],
        "Tenacity of the Militeth": [{
            desc: "When an Elemental Skill hits an opponent, the ATK of all nearby party  members is increased by 20% and their Shield Strength is increased by 30% for 3s. This effect can be triggered once every 0.5s. This effect can still be triggered even when the character who is using this artifact set is not on the field.",
            effect: [new StatModifier("ATKPercent", .2), new StatModifier("PowerfulShield", .3)]
        }],
        "Archaic Petra": [{
            desc: "Upon obtaining a shield crystal, all party members gain 35% Elemental DMG Bonus to that particular element for 10s.",
            "switch": [{
                option: "Pyro Crystal",
                effect: [new StatModifier("PyroDMG", .35)]
            }, {
                option: "Hydro Crystal",
                effect: [new StatModifier("HydroDMG", .35)]
            }, {
                option: "Electro Crystal",
                effect: [new StatModifier("ElectroDMG", .35)]
            }, {
                option: "Cryo Crystal",
                effect: [new StatModifier("CryoDMG", .35)]
            }]
        }],
        Legacy: [{
            desc: "When switching characters, the new character taking the field has their ATK increased by 24/30/36/42/48% for 10s. This effect can only occur once every 20s.",
            "switch": [{
                option: "Refine 1",
                effect: [new StatModifier("ATKPercent", .2)]
            }, {
                option: "Refine 2",
                effect: [new StatModifier("ATKPercent", .3)]
            }, {
                option: "Refine 3",
                effect: [new StatModifier("ATKPercent", .36)]
            }, {
                option: "Refine 4",
                effect: [new StatModifier("ATKPercent", .42)]
            }, {
                option: "Refine 5",
                effect: [new StatModifier("ATKPercent", .48)]
            }]
        }],
        "Wolfish Tracker": [{
            desc: "On hit, attacks against enemies with less than 30% HP increase all party members&#39 Base ATK by 40/50/60/70/80% for 12s. Can only occur once every 30s.",
            "switch": [{
                option: "Refine 1",
                effect: [new StatModifier("ATKPercent", .4)]
            }, {
                option: "Refine 2",
                effect: [new StatModifier("ATKPercent", .5)]
            }, {
                option: "Refine 3",
                effect: [new StatModifier("ATKPercent", .6)]
            }, {
                option: "Refine 4",
                effect: [new StatModifier("ATKPercent", .7)]
            }, {
                option: "Refine 5",
                effect: [new StatModifier("ATKPercent", .8)]
            }]
        }],
        "Sakura Saiguu": [{
            desc: "After the character equipped with this weapon triggers an Electro elemental reaction, nearby party members of an Elemental Type involved in the elemental reaction receive a 10/12.5/15/17.5/20% Elemental DMG Bonus for their element, lasting 6s. Elemental Bonuses gained in this way cannot be stacked.",
            "switch": [{
                option: "Refine 1",
                effect: [new StatModifier("CryoDMG", .1), new StatModifier("HydroDMG", .1), new StatModifier("PyroDMG", .1), new StatModifier("AnemoDMG", .1), new StatModifier("GeoDMG", .1)]
            }, {
                option: "Refine 2",
                effect: [new StatModifier("CryoDMG", .125), new StatModifier("HydroDMG", .125), new StatModifier("PyroDMG", .125), new StatModifier("AnemoDMG", .125), new StatModifier("GeoDMG", .125)]
            }, {
                option: "Refine 3",
                effect: [new StatModifier("CryoDMG", .15), new StatModifier("HydroDMG", .15), new StatModifier("PyroDMG", .15), new StatModifier("AnemoDMG", .15), new StatModifier("GeoDMG", .15)]
            }, {
                option: "Refine 4",
                effect: [new StatModifier("CryoDMG", .175), new StatModifier("HydroDMG", .175), new StatModifier("PyroDMG", .175), new StatModifier("AnemoDMG", .175), new StatModifier("GeoDMG", .175)]
            }, {
                option: "Refine 5",
                effect: [new StatModifier("CryoDMG", .2), new StatModifier("HydroDMG", .2), new StatModifier("PyroDMG", .2), new StatModifier("AnemoDMG", .12), new StatModifier("GeoDMG", .2)]
            }]
        }]
    },
    AttackSpeedData = {
        Albedo: {
            "Hit-1": 13,
            "Hit-2": 30,
            "Hit-3": 32,
            "Hit-4": 36,
            "Hit-5": 64,
            Total: 175
        },
        Amber: {
            "Hit-1": 28,
            "Hit-2": 27,
            "Hit-3": 42,
            "Hit-4": 30,
            "Hit-5": 66,
            Total: 193,
            charge1: 36,
            charge2: 128
        },
        Barbara: {
            "Hit-1": 24,
            "Hit-2": 19,
            "Hit-3": 26,
            "Hit-4": 66,
            Total: 135
        },
        Beidou: {
            "Hit-1": 34,
            "Hit-2": 43,
            "Hit-3": 47,
            "Hit-4": 40,
            "Hit-5": 90,
            Total: 254
        },
        Bennett: {
            "Hit-1": 18,
            "Hit-2": 24,
            "Hit-3": 30,
            "Hit-4": 40,
            "Hit-5": 60,
            Total: 172
        },
        Chongyun: {
            "Hit-1": 30,
            "Hit-2": 36,
            "Hit-3": 56,
            "Hit-4": 101,
            Total: 223
        },
        Diluc: {
            "Hit-1": 32,
            "Hit-2": 45,
            "Hit-3": 34,
            "Hit-4": 98,
            Total: 209
        },
        Diona: {
            "Hit-1": 33,
            "Hit-2": 20,
            "Hit-3": 48,
            "Hit-4": 20,
            "Hit-5": 70,
            Total: 191,
            charge1: 42,
            charge2: 144
        },
        Fischl: {
            "Hit-1": 22,
            "Hit-2": 20,
            "Hit-3": 39,
            "Hit-4": 34,
            "Hit-5": 64,
            Total: 179,
            charge1: 40,
            charge2: 113
        },
        Jean: {
            "Hit-1": 20,
            "Hit-2": 15,
            "Hit-3": 27,
            "Hit-4": 42,
            "Hit-5": 67,
            Total: 171
        },
        Kaeya: {
            "Hit-1": 26,
            "Hit-2": 18,
            "Hit-3": 35,
            "Hit-4": 40,
            "Hit-5": 60,
            Total: 179
        },
        Keqing: {
            "Hit-1": 15,
            "Hit-2": 14,
            "Hit-3": 25,
            "Hit-4": 55,
            "Hit-5": 60,
            Total: 169
        },
        Klee: {
            "Hit-1": 42,
            "Hit-2": 40,
            "Hit-3": 72,
            Total: 154
        },
        Lisa: {
            "Hit-1": 26,
            "Hit-2": 22,
            "Hit-3": 30,
            "Hit-4": 66,
            Total: 144
        },
        Mona: {
            "Hit-1": 26,
            "Hit-2": 24,
            "Hit-3": 36,
            "Hit-4": 58,
            Total: 144
        },
        Ningguang: {
            "Hit-1 Spin": 66,
            "Hit-1 1hand": 56,
            charge1: 51
        },
        Noelle: {
            "Hit-1": 36,
            "Hit-2": 54,
            "Hit-3": 26,
            "Hit-4": 106,
            Total: 222
        },
        Gorou: {
            "Hit-1": 30,
            "Hit-2": 50,
            "Hit-3": 22,
            "Hit-4": 101,
            Total: 203
        },
        Itto: {
            "Hit-1": 34,
            "Hit-2": 52,
            "Hit-3": 22,
            "Hit-4": 112,
            Total: 222
        },
        Qiqi: {
            "Hit-1": 20,
            "Hit-2": 20,
            "Hit-3": 30,
            "Hit-4": 30,
            "Hit-5": 52,
            Total: 152
        },
        Razor: {
            "Hit-1": 40,
            "Hit-2": 36,
            "Hit-3": 44,
            "Hit-4": 122,
            Total: 242
        },
        Sucrose: {
            "Hit-1": 26,
            "Hit-2": 18,
            "Hit-3": 36,
            "Hit-4": 59,
            Total: 139
        },
        Tartaglia: {
            "Hit-1": 24,
            "Hit-2": 29,
            "Hit-3": 35,
            "Hit-4": 30,
            "Hit-5": 35,
            "Hit-6": 61,
            Total: 214,
            charge1: 36,
            charge2: 116,
            "Hit-1 DMG": 17,
            "Hit-2 DMG": 10,
            "Hit-3 DMG": 32,
            "Hit-4 DMG": 53,
            "Hit-5 DMG": 13,
            "Hit-6 DMG": 46,
            "Total DMG": 171
        },
        "Traveler (Anemo)": {
            "Hit-1": 24,
            "Hit-2": 23,
            "Hit-3": 26,
            "Hit-4": 38,
            "Hit-5": 62,
            Total: 173
        },
        "Traveler (Geo)": {
            "Hit-1": 24,
            "Hit-2": 22,
            "Hit-3": 27,
            "Hit-4": 37,
            "Hit-5": 62,
            Total: 172
        },
        Venti: {
            "Hit-1": 30,
            "Hit-2": 40,
            "Hit-3": 35,
            "Hit-4": 33,
            "Hit-5": 21,
            "Hit-6": 95,
            Total: 254,
            charge1: 41,
            charge2: 109
        },
        Xiangling: {
            "Hit-1": 18,
            "Hit-2": 21,
            "Hit-3": 35,
            "Hit-4": 39,
            "Hit-5": 75,
            Total: 188
        },
        Xingqiu: {
            "Hit-1": 19,
            "Hit-2": 29,
            "Hit-3": 27,
            "Hit-4": 28,
            "Hit-5": 65,
            Total: 168
        },
        Xinyan: {
            "Hit-1": 36,
            "Hit-2": 40,
            "Hit-3": 60,
            "Hit-4": 94,
            Total: 230
        },
        Zhongli: {
            "Hit-1": 18,
            "Hit-2": 16,
            "Hit-3": 18,
            "Hit-4": 32,
            "Hit-5": 27,
            "Hit-6": 55,
            Total: 166
        }
    },
    TalentData = {
        Amber: {
            "Hit-1": [36.12, 39.06, 42, 46.2, 49.14, 52.5, 57.12, 61.74, 66.36, 71.4, 76.44, 81.48, 86.52, 91.56, 96.6],
            "Hit-2": [36.12, 39.06, 42, 46.2, 49.14, 52.5, 57.12, 61.74, 66.36, 71.4, 76.44, 81.48, 86.52, 91.56, 96.6],
            "Hit-3": [46.44, 50.22, 54, 59.4, 63.18, 67.5, 73.44, 79.38, 85.32, 91.8, 98.28, 104.76, 111.24, 117.72, 124.2],
            "Hit-4": [47.3, 51.15, 55, 60.5, 64.35, 68.75, 74.8, 80.85, 86.9, 93.5, 100.1, 106.7, 113.3, 119.9, 126.5],
            "Hit-5": [59.34, 64.17, 69, 75.9, 80.73, 86.25, 93.84, 101.43, 109.02, 117.3, 125.58, 133.86, 142.14, 150.42, 158.7],
            charge1: [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3],
            charge2: [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5],
            "Plunge DMG": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98],
            "Low Plunge DMG": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9],
            "High Plunge DMG": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59],
            "Inherited HP": [41.36, 44.46, 47.56, 51.7, 54.8, 57.9, 62.04, 66.18, 70.31, 74.45, 78.58, 82.72, 87.89, 93.06, 98.23],
            "Explosion DMG": [123.2, 132.44, 141.68, 154, 163.24, 172.48, 184.8, 197.12, 209.44, 221.76, 234.08, 246.4, 261.8, 277.2, 292.6],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "DMG per Wave": [28.08, 30.19, 32.29, 35.1, 37.21, 39.31, 42.12, 44.93, 47.74, 50.54, 53.35, 56.16, 59.67, 63.18, 66.69],
            "Total DMG": [505.44, 543.35, 581.26, 631.8, 669.71, 707.62, 758.16, 808.7, 859.25, 909.79, 960.34, 1010.88, 1074.06, 1137.24, 1200.42],
            Duration: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            CD: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            "Energy Cost": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40]
        },
        Fischl: {
            "Hit-1": [44.12, 47.71, 51.3, 56.43, 60.02, 64.13, 69.77, 75.41, 81.05, 87.21, 93.37, 99.52, 105.68, 111.83, 117.99],
            "Hit-2": [46.78, 50.59, 54.4, 59.84, 63.65, 68, 73.98, 79.97, 85.95, 92.48, 99.01, 105.54, 112.06, 118.59, 125.12],
            "Hit-3": [58.14, 62.87, 67.6, 74.36, 79.09, 84.5, 91.94, 99.37, 106.81, 114.92, 123.03, 131.14, 139.26, 147.37, 155.48],
            "Hit-4": [57.71, 62.4, 67.1, 73.81, 78.51, 83.88, 91.26, 98.64, 106.02, 114.07, 122.12, 130.17, 138.23, 146.28, 154.33],
            "Hit-5": [72.07, 77.93, 83.8, 92.18, 98.05, 104.75, 113.97, 123.19, 132.4, 142.46, 152.52, 162.57, 172.63, 182.68, 192.74],
            charge1: [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3],
            charge2: [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5],
            "Plunge DMG": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98],
            "Low Plunge DMG": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9],
            "High Plunge DMG": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59],
            Freikugel: [88.8, 95.46, 102.12, 111, 117.66, 124.32, 133.2, 142.08, 150.96, 159.84, 168.72, 177.6, 188.7, 199.8, 210.9],
            "Summoning DMG": [115.44, 124.1, 132.76, 144.3, 152.96, 161.62, 173.16, 184.7, 196.25, 207.79, 219.34, 230.88, 245.31, 259.74, 274.17],
            "Oz&#39s Duration": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            CD: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
            "Falling Thunder DMG": [208, 223.6, 239.2, 260, 275.6, 291.2, 312, 332.8, 353.6, 374.4, 395.2, 416, 442, 468, 494],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Energy Cost": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
        },
        Diona: {
            "Hit-1": [36.12, 39.06, 42, 46.2, 49.14, 52.5, 57.12, 61.74, 66.36, 71.4, 77.18, 83.97, 90.76, 97.55, 104.96],
            "Hit-2": [33.54, 36.27, 39, 42.9, 45.63, 48.75, 53.04, 57.33, 61.62, 66.3, 71.66, 77.97, 84.28, 90.58, 97.46],
            "Hit-3": [45.58, 49.29, 53, 58.3, 62.01, 66.25, 72.08, 77.91, 83.74, 90.1, 97.39, 105.96, 114.53, 123.1, 132.45],
            "Hit-4": [43, 46.5, 50, 55, 58.5, 62.5, 68, 73.5, 79, 85, 91.88, 99.96, 108.05, 116.13, 124.95],
            "Hit-5": [53.75, 58.13, 62.5, 68.75, 73.13, 78.13, 85, 91.88, 98.75, 106.25, 114.84, 124.95, 135.06, 145.16, 156.19],
            charge1: [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 93.71, 101.96, 110.21, 118.45, 127.45],
            charge2: [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 236.1, 252.96, 269.82, 286.69, 303.55],
            "Plunge DMG": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98],
            "Low Plunge DMG": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9],
            "High Plunge DMG": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59],
            "DMG per Paw": [41.92, 45.06, 48.21, 52.4, 55.54, 58.69, 62.88, 67.07, 71.26, 75.46, 79.65, 83.84, 89.08, 94.32, 99.56],
            "Shield Mult": [7.2, 7.74, 8.28, 9, 9.54, 10.08, 10.8, 11.52, 12.24, 12.96, 13.68, 14.4, 15.3, 16.2, 17.1],
            "Shield Flat": [693, 762, 837, 918, 1005, 1097, 1195, 1299, 1409, 1524, 1646, 1773, 1905, 2044, 2188],
            "Duration ": [1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4],
            "Holding CD": [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Skill DMG": [80, 86, 92, 100, 106, 112, 120, 128, 136, 144, 152, 160, 170, 180, 190],
            "Cryo DoT": [52.64, 56.59, 60.54, 65.8, 69.75, 73.7, 78.96, 84.22, 89.49, 94.75, 100.02, 105.28, 111.86, 118.44, 125.02],
            "Heal Over Time Multi": [5.34, 5.74, 6.14, 6.67, 7.07, 7.47, 8, 8.54, 9.07, 9.6, 10.14, 10.67, 11.34, 12.01, 12.67],
            "Heal Over Time Flat": [513, 565, 620, 680, 744, 813, 885, 962, 1044, 1129, 1219, 1313, 1411, 1514, 1621],
            Duration: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
        },
        Venti: {
            "Hit-1": [40.76, 44.08, 47.4, 52.14, 55.46, 59.26, 64.46, 69.68, 74.9, 80.58, 87.1, 94.76, 102.42, 110.1, 118.46],
            "Hit-2": [44.38, 47.99, 51.6, 56.76, 60.37, 64.5, 70.18, 75.85, 81.53, 87.72, 94.82, 103.16, 111.5, 119.85, 128.95],
            "Hit-3": [52.37, 56.64, 60.9, 66.99, 71.25, 76.13, 82.82, 89.52, 96.22, 103.53, 111.9, 121.75, 131.6, 141.45, 152.19],
            "Hit-4": [52.12, 56.36, 60.6, 66.66, 70.9, 75.74, 82.42, 89.08, 95.74, 103.02, 111.36, 121.16, 130.96, 140.74, 151.44],
            "Hit-5": [50.65, 54.78, 58.9, 64.79, 68.91, 73.63, 80.1, 86.58, 93.06, 100.13, 108.23, 117.75, 127.28, 136.8, 147.19],
            "Hit-6": [70.95, 76.73, 82.5, 90.75, 96.53, 103.13, 112.2, 121.28, 130.35, 140.25, 151.59, 164.93, 178.27, 191.61, 206.17],
            charge1: [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 93.71, 101.96, 110.21, 118.45, 127.45],
            charge2: [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 236.1, 252.96, 269.82, 286.69, 303.55],
            "Plunge DMG": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98],
            "Low Plunge DMG": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9],
            "High Plunge DMG": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59],
            HitCount: [2, 1, 1, 2, 1, 1],
            "Press DMG": [276, 296.7, 317.4, 345, 365.7, 386.4, 414, 441.6, 469.2, 496.8, 524.4, 552, 586.5, 621, 655.5],
            CD: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            "Hold DMG": [380, 408.5, 437, 475, 503.5, 532, 570, 608, 646, 684, 722, 760, 807.5, 855, 902.5],
            "CD (hold)": [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            DoT: [37.6, 40.42, 43.24, 47, 49.82, 52.64, 56.4, 60.16, 63.92, 67.68, 71.44, 75.2, 79.9, 84.6, 89.3],
            "Additional Elemental DMG": [18.8, 20.21, 21.62, 23.5, 24.91, 26.32, 28.2, 30.08, 31.96, 33.84, 35.72, 37.6, 39.95, 42.3, 44.65],
            Duration: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Energy Cost": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
        },
        Tartaglia: {
            "Hit-1": [41.28, 44.64, 48, 52.8, 56.16, 60, 65.28, 70.56, 75.84, 81.6, 87.36, 93.12, 98.88, 104.64, 110.4],
            "Hit-2": [46.27, 50.03, 53.8, 59.18, 62.95, 67.25, 73.17, 79.09, 85, 91.46, 97.92, 104.37, 110.83, 117.28, 123.74],
            "Hit-3": [55.38, 59.89, 64.4, 70.84, 75.35, 80.5, 87.58, 94.67, 101.75, 109.48, 117.21, 124.94, 132.66, 140.39, 148.12],
            "Hit-4": [57.02, 61.66, 66.3, 72.93, 77.57, 82.88, 90.17, 97.46, 104.75, 112.71, 120.67, 128.62, 136.58, 144.53, 152.49],
            "Hit-5": [60.89, 65.84, 70.8, 77.88, 82.84, 88.5, 96.29, 104.08, 111.86, 120.36, 128.86, 137.35, 145.85, 154.34, 162.84],
            "Hit-6": [72.76, 78.68, 84.6, 93.06, 98.98, 105.75, 115.06, 124.36, 133.67, 143.82, 153.97, 164.12, 174.28, 184.43, 194.58],
            charge1: [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3],
            charge2: [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5],
            "Riptide Flash DMG": [37.2, 39.99, 42.78, 46.5, 49.29, 52.08, 18.6 * 3, 19.84 * 3, 21.08 * 3, 22.32 * 3, 23.56 * 3, 74.4, 26.35 * 3, 27.9 * 3, 88.35],
            "Riptide Burst DMG": [62, 66.65, 71.3, 77.5, 82.15, 86.8, 93, 99.2, 105.4, 111.6, 117.8, 124, 131.75, 139.5, 147.25],
            "Riptide Duration": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            "Plunge DMG": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98],
            "Low Plunge DMG": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89],
            "High Plunge DMG": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04],
            "Stance Change DMG": [72, 77.4, 82.8, 90, 95.4, 100.8, 108, 115.2, 122.4, 129.6, 136.8, 144, 153, 162, 171],
            "Hit-1 DMG": [38.87, 42.04, 45.2, 49.72, 52.88, 56.5, 61.47, 66.44, 71.42, 76.84, 82.26, 87.69, 93.11, 98.54, 103.96],
            "Hit-2 DMG": [41.62, 45.01, 48.4, 53.24, 56.63, 60.5, 65.82, 71.15, 76.47, 82.28, 88.09, 93.9, 99.7, 105.51, 111.32],
            "Hit-3 DMG": [56.33, 60.92, 65.5, 72.05, 76.64, 81.88, 89.08, 96.29, 103.49, 111.35, 119.21, 127.07, 134.93, 142.79, 150.65],
            "Hit-4 DMG": [59.94, 64.82, 69.7, 76.67, 81.55, 87.13, 94.79, 102.46, 110.13, 118.49, 126.85, 135.22, 143.58, 151.95, 160.31],
            "Hit-5 DMG": [55.3, 59.8, 64.3, 70.73, 75.23, 80.38, 87.45, 94.52, 101.59, 109.31, 117.03, 124.74, 132.46, 140.17, 147.89],
            "Hit-6 DMG": [73.1, 79.05, 85, 93.5, 99.45, 106.25, 115.6, 124.95, 134.3, 144.5, 154.7, 164.9, 84.87 + 90.23, 185.3, 195.5],
            "Charged Attack DMG": [132.18, 142.94, 153.7, 169.07, 179.83, 192.12, 209.03, 225.94, 242.85, 119 + 142.29, 279.73, 298.18, 316.62, 335.07, 353.51],
            "Charged Attack Stamina Cost": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Riptide Slash": [60.2, 65.1, 70, 77, 81.9, 87.5, 95.2, 102.9, 110.6, 119, 127.4, 135.8, 144.2, 152.6, 161],
            "Max Duration": [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
            "Preemptive CD": [-30, -30, -30, -30, -30, -30, -30, -30, -30, -30, -30, -30, -30, -30, -30],
            "Max CD": [45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45],
            "Skill DMG: Melee": [464, 498.8, 533.6, 580, 614.8, 649.6, 696, 742.4, 788.8, 835.2, 881.6, 928, 986, 1044, 1102],
            "Skill DMG: Ranged": [378.4, 406.78, 435.16, 473, 501.38, 529.76, 567.6, 605.44, 643.28, 681.12, 718.96, 756.8, 804.1, 851.4, 898.7],
            "Riptide Blast DMG": [120, 129, 138, 150, 159, 168, 180, 192, 204, 216, 228, 240, 255, 270, 285],
            "Energy Return (Ranged)": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Energy Cost": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
        },
        Beidou: {
            "Hit-1": [71.12, 76.91, 82.7, 90.97, 96.76, 103.38, 112.47, 121.57, 130.67, 140.59, 151.96, 165.33, 178.71, 192.08, 206.67],
            "Hit-2": [70.86, 76.63, 82.4, 90.64, 96.41, 103, 112.06, 121.13, 130.19, 140.08, 151.41, 164.73, 178.06, 191.38, 205.92],
            "Hit-3": [88.32, 95.51, 102.7, 112.97, 120.16, 128.38, 139.67, 150.97, 162.27, 174.59, 188.71, 205.32, 221.92, 238.53, 256.65],
            "Hit-4": [86.52, 93.56, 100.6, 110.66, 117.7, 125.75, 136.82, 147.88, 158.95, 171.02, 184.85, 201.12, 217.39, 233.65, 251.4],
            "Hit-5": [112.14, 121.27, 130.4, 143.44, 152.57, 163, 177.34, 191.69, 206.03, 221.68, 239.61, 260.7, 281.78, 302.87, 325.87],
            charge1: [56.24, 60.82, 65.4, 71.94, 76.52, 81.75, 88.94, 96.14, 103.33, 111.18, 120.17, 130.75, 141.32, 151.9, 163.43],
            charge2: [101.82, 110.11, 118.4, 130.24, 138.53, 148, 161.02, 174.05, 187.07, 201.28, 217.56, 236.71, 255.85, 275, 295.88],
            "Charged Attack Stamina Cost": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
            "Max Duration": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            "Plunge DMG": [74.59, 80.66, 86.73, 95.4, 101.47, 108.41, 117.95, 127.49, 137.03, 147.44, 157.85, 168.26, 178.66, 189.07, 199.48],
            "Low Plunge DMG": [149.14, 161.28, 173.42, 190.77, 202.91, 216.78, 235.86, 254.93, 274.01, 294.82, 315.63, 336.44, 357.25, 378.06, 398.87],
            "High Plunge DMG": [186.29, 201.45, 216.62, 238.28, 253.44, 270.77, 294.6, 318.42, 342.25, 368.25, 394.24, 420.23, 446.23, 472.22, 498.21],
            "Shield Mult": [14.4, 15.48, 16.56, 18, 19.08, 20.16, 21.6, 23.04, 24.48, 25.92, 27.36, 28.8, 30.6, 32.4, 34.2],
            "Shield Flat": [1386, 1525, 1675, 1837, 2010, 2195, 2392, 2600, 2819, 3050, 3293, 3547, 3813, 4090, 4379],
            "Base DMG": [121.6, 130.72, 139.84, 152, 161.12, 170.24, 182.4, 194.56, 206.72, 218.88, 231.04, 243.2, 258.4, 273.6, 288.8],
            "DMG per Hit Taken": [160, 172, 184, 200, 212, 224, 240, 256, 272, 288, 304, 320, 340, 360, 380],
            CD: [7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5],
            "Burst DMG": [121.6, 130.72, 139.84, 152, 161.12, 170.24, 182.4, 194.56, 206.72, 218.88, 231.04, 243.2, 258.4, 273.6, 288.8],
            "Discharge DMG": [96, 103.2, 110.4, 120, 127.2, 134.4, 144, 153.6, 163.2, 172.8, 182.4, 192, 204, 216, 228],
            "DMG Reduction": [20, 21, 22, 24, 25, 26, 28, 30, 32, 34, 35, 36, 37, 38, 39],
            Duration: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
        },
        Chongyun: {
            "Hit-1": [70, 75.7, 81.4, 89.54, 95.24, 101.75, 110.7, 119.66, 128.61, 138.38, 148.15, 157.92, 167.68, 177.45, 187.22],
            "Hit-2": [63.12, 68.26, 73.4, 80.74, 85.88, 91.75, 99.82, 107.9, 115.97, 124.78, 133.59, 142.4, 151.2, 160.01, 168.82],
            "Hit-3": [80.32, 86.86, 93.4, 102.74, 109.28, 116.75, 127.02, 137.3, 147.57, 158.78, 169.99, 181.2, 192.4, 203.61, 214.82],
            "Hit-4": [101.22, 109.46, 117.7, 129.47, 137.71, 147.13, 160.07, 173.02, 185.97, 200.09, 214.21, 228.34, 242.46, 256.59, 270.71],
            charge1: [56.29, 60.87, 65.45, 71.99, 76.57, 81.81, 89.01, 96.21, 103.41, 111.26, 119.12, 126.97, 134.82, 142.68, 150.53],
            charge2: [101.78, 110.07, 118.35, 130.19, 138.47, 147.94, 160.96, 173.97, 186.99, 201.2, 215.4, 229.6, 243.8, 258, 272.21],
            "Charged Attack Stamina Cost": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
            "Max Duration": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            "Plunge DMG": [74.59, 80.66, 86.73, 95.4, 101.47, 108.41, 117.95, 127.49, 137.03, 147.44, 157.85, 168.26, 178.66, 189.07, 199.48],
            "Low Plunge DMG": [149.14, 161.28, 173.42, 190.77, 202.91, 216.78, 235.86, 254.93, 274.01, 294.82, 315.63, 336.44, 357.25, 378.06, 398.87],
            "High Plunge DMG": [186.29, 201.45, 216.62, 238.28, 253.44, 270.77, 294.6, 318.42, 342.25, 368.25, 394.24, 420.23, 446.23, 472.22, 498.21],
            "Cryo Explosion": [172.04, 184.94, 197.85, 215.05, 227.95, 240.86, 258.06, 275.26, 292.47, 309.67, 326.88, 344.08, 365.59, 387.09, 408.6],
            "Conversion Duration": [2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3, 3, 3, 3, 3],
            "Field Duration": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Blade DMG": [142.4, 153.08, 163.76, 178, 188.68, 199.36, 213.6, 227.84, 242.08, 256.32, 270.56, 284.8, 302.6, 320.4, 338.2],
            CD: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            "Energy Cost": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40]
        },
        Diluc: {
            "Hit-1": [89.7, 97, 104.3, 114.73, 122.03, 130.38, 141.85, 153.32, 164.79, 177.31, 191.65, 208.52, 225.38, 242.25, 260.65],
            "Hit-2": [87.63, 94.77, 101.9, 112.09, 119.22, 127.38, 138.58, 149.79, 161, 173.23, 187.24, 203.72, 220.2, 236.67, 254.65],
            "Hit-3": [98.81, 106.86, 114.9, 126.39, 134.43, 143.63, 156.26, 168.9, 181.54, 195.33, 211.13, 229.71, 248.29, 266.87, 287.14],
            "Hit-4": [133.99, 144.89, 155.8, 171.38, 182.29, 194.75, 211.89, 229.03, 246.16, 264.86, 286.28, 311.48, 336.67, 361.86, 389.34],
            charge1: [68.8, 74.4, 80, 88, 93.6, 100, 108.8, 117.6, 126.4, 136, 147, 159.94, 172.87, 185.81, 199.92],
            charge2: [124.7, 134.85, 145, 159.5, 169.65, 181.25, 197.2, 213.15, 229.1, 246.5, 266.44, 289.88, 313.33, 336.78, 362.36],
            "Charged Attack Stamina Cost": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
            "Max Duration": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            "Plunge DMG": [89.51, 96.79, 104.08, 114.48, 121.77, 130.1, 141.54, 152.99, 164.44, 176.93, 189.42, 201.91, 214.4, 226.89, 239.37],
            "Low Plunge DMG": [178.97, 193.54, 208.11, 228.92, 243.49, 260.13, 283.03, 305.92, 328.81, 353.78, 378.76, 403.73, 428.7, 453.68, 478.65],
            "High Plunge DMG": [223.55, 241.74, 259.94, 285.93, 304.13, 324.92, 353.52, 382.11, 410.7, 441.89, 473.09, 504.28, 535.47, 566.66, 597.86],
            "1-Hit DMG": [94.4, 101.48, 108.56, 118, 125.08, 132.16, 141.6, 151.04, 160.48, 169.92, 179.36, 188.8, 200.6, 212.4, 224.2],
            "2-Hit DMG": [97.6, 104.92, 112.24, 122, 129.32, 136.64, 146.4, 156.16, 165.92, 175.68, 185.44, 195.2, 207.4, 219.6, 231.8],
            "3-Hit DMG": [128.8, 138.46, 148.12, 161, 170.66, 180.32, 193.2, 206.08, 218.96, 231.84, 244.72, 257.6, 273.7, 289.8, 305.9],
            CD: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            "Slashing DMG": [204, 219.3, 234.6, 255, 270.3, 285.6, 306, 326.4, 346.8, 367.2, 387.6, 408, 433.5, 459, 484.5],
            DoT: [60, 64.5, 69, 75, 79.5, 84, 90, 96, 102, 108, 114, 120, 127.5, 135, 142.5],
            "Explosion DMG": [204, 219.3, 234.6, 255, 270.3, 285.6, 306, 326.4, 346.8, 367.2, 387.6, 408, 433.5, 459, 484.5],
            CD: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            "Conversion Duration": [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            "Energy Cost": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40]
        },
        Noelle: {
            "Hit-1": [79.12, 85.56, 92, 101.2, 107.64, 115, 125.12, 135.24, 145.36, 156.4, 167.44, 178.48, 189.52, 200.56, 211.6],
            "Hit-2": [73.36, 79.33, 85.3, 93.83, 99.8, 106.63, 116.01, 125.39, 134.77, 145.01, 155.25, 165.48, 175.72, 185.95, 196.19],
            "Hit-3": [86.26, 93.28, 100.3, 110.33, 117.35, 125.38, 136.41, 147.44, 158.47, 170.51, 182.55, 194.58, 206.62, 218.65, 230.69],
            "Hit-4": [113.43, 122.67, 131.9, 145.09, 154.32, 164.88, 179.38, 193.89, 208.4, 224.23, 240.06, 255.89, 271.71, 287.54, 303.37],
            charge1: [50.74, 54.87, 59, 64.9, 69.03, 73.75, 80.24, 86.73, 93.22, 100.3, 107.38, 114.46, 121.54, 128.62, 135.7],
            charge2: [90.47, 97.84, 105.2, 115.72, 123.08, 131.5, 143.07, 154.64, 166.22, 178.84, 191.46, 204.09, 216.71, 229.34, 241.96],
            "Charged Attack Stamina Cost": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
            "Max Duration": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            "Plunge DMG": [74.59, 80.66, 86.73, 95.4, 101.47, 108.41, 117.95, 127.49, 137.03, 147.44, 157.85, 168.26, 178.66, 189.07, 199.48],
            "Low Plunge DMG": [149.14, 161.28, 173.42, 190.77, 202.91, 216.78, 235.86, 254.93, 274.01, 294.82, 315.63, 336.44, 357.25, 378.06, 398.87],
            "High Plunge DMG": [186.29, 201.45, 216.62, 238.28, 253.44, 270.77, 294.6, 318.42, 342.25, 368.25, 394.24, 420.23, 446.23, 472.22, 498.21],
            "Shield DMG": [120, 129, 138, 150, 159, 168, 180, 192, 204, 216, 228, 240, 255, 270, 285],
            "Shield Mult": [160, 172, 184, 200, 212, 224, 240, 256, 272, 288, 304, 320, 340, 360, 380],
            "Shield Flat": [770, 847, 930, 1020, 1116, 1219, 1328, 1443, 1565, 1694, 1828, 1970, 2117, 2271, 2431],
            "Heal Mult": [21.28, 22.88, 24.47, 26.6, 28.2, 29.79, 31.92, 34.05, 36.18, 38.3, 40.43, 42.56, 45.22, 47.88, 50.54],
            "Heal Flat": [103, 113, 124, 136, 149, 163, 177, 193, 209, 226, 244, 263, 282, 303, 324],
            "Triggering Chance": [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 59, 60, 60, 60, 60],
            Duration: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            CD: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
            CD: [769.785095, 846.774292, 930.17926, 1020, 1116.23645, 1218.888794, 1327.956787, 1443.440674, 1565.34021, 1693.655518, 1828.386719, 1969.533569, 2117.096191, 2271.074707, 2431.46875],
            "Elemental Burst DMG": [67.2, 72.24, 77.28, 84, 89.04, 94.08, 100.8, 107.52, 114.24, 120.96, 127.68, 134.4, 142.8, 151.2, 159.6],
            "Skill DMG": [92.8, 99.76, 106.72, 116, 122.96, 129.92, 139.2, 148.48, 157.76, 167.04, 176.32, 185.6, 197.2, 208.8, 220.4],
            "DEF to ATK Bonus": [40, 43, 46, 50, 53, 56, 60, 64, 68, 72, 76, 80, 85, 90, 95],
            Duration: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Energy Cost": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
        },
        Gorou: {
            "Hit-1": [37.75, 40.83, 43.9 , 48.29, 51.36, 54.88, 59.7 ,  64.53,  69.36,  74.63,  79.9 ,  85.17,  94.43,  95.7 , 100.97],
            "Hit-2": [37.15, 40.18, 43.2 , 47.52, 50.54, 54   , 58.75,  63.5 ,  68.26,  73.44,  78.62,  83.81,  88.99,  94.18,  99.36],
            "Hit-3": [49.45, 53.48, 57.5 , 63.25, 67.28, 71.88, 78.2 ,  84.53,  90.85,  97.75, 104.65, 111.55, 118.45, 125.35, 132.25],
            "Hit-4": [59   , 63.8 , 68.6 , 75.46, 80.26, 85.75, 93.3 , 100.84, 108.39, 116.62, 124.85, 133.08, 141.32, 149.55, 157.78],
            charge1: [43.86, 47.43, 51   , 56.1 , 59.67, 63.75, 96.36,  74.97,  80.58,  86.7 ,  92.82,  98.94, 105.06, 111.18, 117.3 ],
            charge2: [124  , 133.3, 142.6, 155  , 164.3, 173.6, 186  , 198.4 , 210.8 , 223.2 , 235.6 , 248   , 263.5 , 279   , 294.5 ],
            "Charged Attack Stamina Cost": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "Max Duration": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            "Plunge DMG": [74.59, 80.66, 86.73, 95.4, 101.47, 108.41, 117.95, 127.49, 137.03, 147.44, 157.85, 168.26, 178.66, 189.07, 199.48],
            "Low Plunge DMG": [149.14, 161.28, 173.42, 190.77, 202.91, 216.78, 235.86, 254.93, 274.01, 294.82, 315.63, 336.44, 357.25, 378.06, 398.87],
            "High Plunge DMG": [186.29, 201.45, 216.62, 238.28, 253.44, 270.77, 294.6, 318.42, 342.25, 368.25, 394.24, 420.23, 446.23, 472.22, 498.21],
            "Shield DMG":  [107.2, 115.24, 123.28, 134, 142.04, 150.08, 160.8, 171.51, 182.24, 192.96, 203.68, 214.4, 227.8, 241.2, 254.6],
            "Shield Mult": [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Shield Flat": [206, 222, 237, 258, 273, 289, 309, 330, 350, 371, 392, 412, 438, 464, 490],
            "Heal Mult": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            "Heal Flat": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "Triggering Chance": [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            Duration: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            CD: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            CD: [769.785095, 846.774292, 930.17926, 1020, 1116.23645, 1218.888794, 1327.956787, 1443.440674, 1565.34021, 1693.655518, 1828.386719, 1969.533569, 2117.096191, 2271.074707, 2431.46875],
            "Elemental Burst DMG": [98.22, 105.58, 112.95, 122.77, 130.14, 137.5, 147.32, 157.15, 166.97, 176.79, 186.61, 196.43, 208.71, 220.99, 233.26],
            "Skill DMG": [61.3, 65.9, 70.5, 76.63, 81.22, 85.82, 91.95, 98.08, 104.21, 110.34, 116.47, 122.6, 130.26, 137.93, 145.59],
            "DEF to ATK Bonus": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            Duration: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
        },
        Itto: {
            "Hit-1": [ 79.23,  85.68,  92.13, 101.34, 107.79, 115.16, 125.3 , 135.43, 145.57, 156.62, 169.29, 184.19, 199.08, 213.98, 230.23],
            "Hit-2": [ 76.37,  82.58,  88.8 ,  97.68, 103.9 , 111   , 120.77, 130.54, 140.3 , 150.96, 163.17, 177.53, 191.89, 206.25, 221.91],
            "Hit-3": [ 91.64,  99.1 , 106.56, 117.22, 124.68, 133.2 , 144.92, 156.64, 168.36, 181.15, 195.8 , 213.03, 230.27, 247.5 , 266.29],
            "Hit-4": [117.22, 126.77, 136.31, 149.94, 159.48, 170.39, 185.38, 200.37, 215.37, 231.72, 250.47, 272.51, 294.55, 316.59, 340.63],
            charge1: [ 91.16,  98.58, 106   , 116.6 , 124.02, 132.5 , 144.16, 155.82, 167.48, 180.2 , 194.78, 211.92, 229.06, 246.2 , 264.89],
            charge2: [190.92, 206.46, 222   , 244.2 , 259.74, 277.5 , 301.92, 326.34, 350.76, 377.4 , 407.93, 443.82, 479.72, 515.62, 554.78],
            "Charged Attack Stamina Cost": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "Max Duration": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            "Plunge DMG": [74.59, 80.66, 86.73, 95.4, 101.47, 108.41, 117.95, 127.49, 137.03, 147.44, 157.85, 168.26, 178.66, 189.07, 199.48],
            "Low Plunge DMG": [149.14, 161.28, 173.42, 190.77, 202.91, 216.78, 235.86, 254.93, 274.01, 294.82, 315.63, 336.44, 357.25, 378.06, 398.87],
            "High Plunge DMG": [186.29, 201.45, 216.62, 238.28, 253.44, 270.77, 294.6, 318.42, 342.25, 368.25, 394.24, 420.23, 446.23, 472.22, 498.21],
            "Shield DMG": [307.2, 330.24, 353.28, 384, 407.04, 430.08, 460.8, 491.52, 522.24, 552.96, 583.68, 614.4, 652.8, 691.2, 729.6],
            "Shield Mult": [0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35, 0.35],
            "Shield Flat": [770, 847, 930, 1020, 1116, 1219, 1328, 1443, 1565, 1694, 1828, 1970, 2117, 2271, 2431],
            "Heal Mult": [21.28, 22.88, 24.47, 26.6, 28.2, 29.79, 31.92, 34.05, 36.18, 38.3, 40.43, 42.56, 45.22, 47.88, 50.54],
            "Heal Flat": [103, 113, 124, 136, 149, 163, 177, 193, 209, 226, 244, 263, 282, 303, 324],
            "Triggering Chance": [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 59, 60, 60, 60, 60],
            Duration: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            CD: [24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24],
            CD: [769.785095, 846.774292, 930.17926, 1020, 1116.23645, 1218.888794, 1327.956787, 1443.440674, 1565.34021, 1693.655518, 1828.386719, 1969.533569, 2117.096191, 2271.074707, 2431.46875],
            "Skill DMG": [92.8, 99.76, 106.72, 116, 122.96, 129.92, 139.2, 148.48, 157.76, 167.04, 176.32, 185.6, 197.2, 208.8, 220.4],
            "DEF to ATK Bonus": [57.6, 61.92, 66.24, 72, 76.32, 80.64, 86.4, 92.16, 97.92, 103.68, 109.44, 115.2, 122.4, 129.6, 136.8],
            "Normal Atk SPD Bonus": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            Duration: [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
            CD: [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
            "Energy Cost": [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70]
        },
        Razor: {
            "Hit-1": [95.92, 102.46, 109, 117.72, 124.26, 131.89, 141.7, 151.51, 161.32, 171.13, 180.94, 190.75, 200.56, 210.37, 220.18],
            "Hit-2": [82.63, 88.27, 93.9, 101.41, 107.05, 113.62, 122.07, 130.52, 138.97, 147.42, 155.87, 164.33, 172.78, 181.23, 189.68],
            "Hit-3": [103.31, 110.36, 117.4, 126.79, 133.84, 142.05, 152.62, 163.19, 173.75, 184.32, 194.88, 205.45, 216.02, 226.58, 237.15],
            "Hit-4": [136.05, 145.32, 154.6, 166.97, 176.24, 187.07, 200.98, 214.89, 228.81, 242.72, 256.64, 270.55, 284.46, 298.38, 312.29],
            charge1: [62.54, 67.63, 72.72, 79.99, 85.08, 90.9, 98.9, 106.9, 114.9, 123.62, 132.35, 141.08, 149.8, 158.53, 167.26],
            charge2: [113.09, 122.3, 131.5, 144.65, 153.86, 164.38, 178.84, 193.31, 207.77, 223.55, 239.33, 255.11, 270.89, 286.67, 302.45],
            "Charged Attack Stamina Cost": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
            "Max Duration": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            "Plunge DMG": [82.05, 88.72, 95.4, 104.94, 111.62, 119.25, 129.75, 140.24, 150.74, 162.19, 173.63, 185.08, 196.53, 207.98, 219.43],
            "Low Plunge DMG": [164.06, 177.41, 190.77, 209.84, 223.2, 238.46, 259.44, 280.43, 301.41, 324.3, 347.19, 370.09, 392.98, 415.87, 438.76],
            "High Plunge DMG": [204.92, 221.6, 238.28, 262.1, 278.78, 297.85, 324.06, 350.27, 376.48, 405.07, 433.66, 462.26, 490.85, 519.44, 548.04],
            "Press Skill DMG": [199.2, 214.14, 229.08, 249, 263.94, 278.88, 298.8, 318.72, 338.64, 358.56, 378.48, 398.4, 423.3, 448.2, 473.1],
            "Hold Skill DMG": [295.2, 317.34, 339.48, 369, 391.14, 413.28, 442.8, 472.32, 501.84, 531.36, 560.88, 590.4, 627.3, 664.2, 701.1],
            "Energy Recharge Bonus": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Energy Regenerated": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            "Electro Sigil duration": [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
            CD: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            "CD (hold)": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            "Elemental Burst DMG": [160, 172, 184, 200, 212, 224, 240, 256, 272, 288, 304, 320, 340, 360, 380],
            "Soul Companion DMG": [24, 25.8, 27.6, 30, 31.8, 33.6, 36, 38.4, 40.8, 43.2, 45.6, 48, 51, 54, 57],
            "Normal Atk SPD Bonus": [26, 28, 30, 32, 34, 36, 37, 38, 39, 40, 40, 40, 40, 40, 40],
            "Electro RES Bonus": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
            Duration: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
        },
        Bennett: {
            "Hit-1": [44.55, 48.17, 51.8, 56.98, 60.61, 64.75, 70.45, 76.15, 81.84, 88.06, 94.28, 100.49, 106.71, 112.92, 119.14],
            "Hit-2": [42.74, 46.22, 49.7, 54.67, 58.15, 62.13, 67.59, 73.06, 78.53, 84.49, 90.45, 96.42, 102.38, 108.35, 114.31],
            "Hit-3": [54.61, 59.06, 63.5, 69.85, 74.3, 79.38, 86.36, 93.35, 100.33, 107.95, 115.57, 123.19, 130.81, 138.43, 146.05],
            "Hit-4": [59.68, 64.54, 69.4, 76.34, 81.2, 86.75, 94.38, 102.02, 109.65, 117.98, 126.31, 134.64, 142.96, 151.29, 159.62],
            "Hit-5": [71.9, 77.75, 83.6, 91.96, 97.81, 104.5, 113.7, 122.89, 132.09, 142.12, 152.15, 162.18, 172.22, 182.25, 192.28],
            charge2: [116.62, 126.11, 135.6, 149.16, 76.05 + 82.6, 169.5, 88.4 + 96.02, 95.55 + 103.78, 214.25, 110.5 + 120.02, 118.3 + 128.49, 263.06, 133.9 + 145.44, 295.61, 311.88],
            "Charged Attack Stamina Cost": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Plunge DMG": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98],
            "Low Plunge DMG": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89],
            "High Plunge DMG": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04],
            "Press DMG": [137.6, 147.92, 158.24, 172, 182.32, 192.64, 206.4, 220.16, 233.92, 247.68, 261.44, 275.2, 292.4, 309.6, 326.8],
            "Charge Level 1": [176, 189.2, 96.6 + 105.8, 220, 233.2, 246.4, 264, 281.6, 142.8 + 156.4, 151.2 + 165.6, 334.4, 352, 374, 396, 418],
            "Charge-1 Hit-2": [92, 98.9, 105.8, 115, 121.9, 128.8, 138, 147.2, 156.4, 165.6, 174.8, 184, 195.5, 207, 218.5],
            "Charge Level 2": [184, 197.8, 101.2 + 110.4, 230, 243.8, 257.6, 276, 294.4, 149.6 + 163.2, 158.4 + 172.8, 349.6, 368, 391, 414, 437],
            "Explosion DMG": [132, 141.9, 151.8, 165, 174.9, 184.8, 198, 211.2, 224.4, 237.6, 250.8, 264, 280.5, 297, 313.5],
            CD: [5 / 7.5 / 10, 5 / 7.5 / 10, 5 / 7.5 / 10, 5 / 7.5 / 10, 5 / 7.5 / 10, 5 / 7.5 / 10, 5 / 7.5 / 10, 5 / 7.5 / 10, 5 / 7.5 / 10, 5 / 7.5 / 10, 5 / 7.5 / 10, 5 / 7.5 / 10, 5 / 7.5 / 10, 5 / 7.5 / 10, 5 / 7.5 / 10],
            CD: [1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0, 1 / 0],
            "Burst DMG": [232.8, 250.26, 267.72, 291, 308.46, 325.92, 349.2, 372.48, 395.76, 419.04, 442.32, 465.6, 494.7, 523.8, 552.9],
            "Continuous Regeneration Per Sec Mult": [6, 6.45, 6.9, 7.5, 7.95, 8.4, 9, 9.6, 10.2, 10.8, 11.4, 12, 12.75, 13.5, 14.25],
            "Continuous Regeneration Per Sec Flat": [577, 635, 698, 765, 837, 914, 996, 1083, 1174, 1270, 1371, 1477, 1588, 1703, 1824],
            "ATK Bonus Ratio": [56, 60.2, 64.4, 70, 74.2, 78.4, 84, 89.6, 95.2, 100.8, 106.4, 112, 119, 126, 133],
            Duration: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Energy Cost": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
        },
        Jean: {
            "Hit-1": [48.33, 52.27, 56.2, 61.82, 65.75, 70.25, 76.43, 82.61, 88.8, 95.54, 103.27, 112.36, 121.44, 130.53, 140.44],
            "Hit-2": [45.58, 49.29, 53, 58.3, 62.01, 66.25, 72.08, 77.91, 83.74, 90.1, 97.39, 105.96, 114.53, 123.1, 132.45],
            "Hit-3": [60.29, 65.19, 70.1, 77.11, 82.02, 87.63, 95.34, 103.05, 110.76, 119.17, 128.81, 140.14, 151.48, 162.81, 175.18],
            "Hit-4": [65.88, 71.24, 76.6, 84.26, 89.62, 95.75, 104.18, 112.6, 121.03, 130.22, 140.75, 153.14, 165.52, 177.91, 191.42],
            "Hit-5": [79.21, 85.65, 92.1, 101.31, 107.76, 115.13, 125.26, 135.39, 145.52, 156.57, 169.23, 184.13, 199.02, 213.91, 230.16],
            charge2: [162.02, 175.21, 188.4, 207.24, 220.43, 235.5, 256.22, 276.95, 297.67, 320.28, 346.19, 376.65, 407.11, 437.58, 470.81],
            "Charged Attack Stamina Cost": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Plunge DMG": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98],
            "Low Plunge DMG": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89],
            "High Plunge DMG": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04],
            "Skill DMG": [292, 313.9, 335.8, 365, 386.9, 408.8, 438, 467.2, 496.4, 525.6, 554.8, 584, 620.5, 657, 693.5],
            "Stamina Consumption": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Max Duration": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            CD: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            "Burst DMG": [424.8, 456.66, 488.52, 531, 562.86, 594.72, 637.2, 679.68, 722.16, 764.64, 807.12, 849.6, 902.7, 955.8, 1008.9],
            "Field Entering / Exiting DMG": [78.4, 84.28, 90.16, 98, 103.88, 109.76, 117.6, 125.44, 133.28, 141.12, 148.96, 156.8, 166.6, 176.4, 186.2],
            "Heal Mult": [251.2, 270.04, 288.88, 314, 332.84, 351.68, 376.8, 401.92, 427.04, 452.16, 477.28, 502.4, 533.8, 565.2, 596.6],
            "Heal Flat": [1540, 1694, 1861, 2041, 2234, 2439, 2657, 2888, 3132, 3389, 3659, 3941, 4236, 4544, 4865],
            "Regen Mult": [25.12, 27, 28.89, 31.4, 33.28, 35.17, 37.68, 40.19, 42.7, 45.22, 47.73, 50.24, 53.38, 56.52, 59.66],
            "Regen Flat": [154, 169, 186, 204, 223, 244, 266, 289, 313, 339, 366, 394, 424, 454, 487],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
        },
        Kaeya: {
            "Hit-1": [53.75, 58.13, 62.5, 68.75, 73.13, 78.13, 85, 91.88, 98.75, 106.25, 114.84, 124.95, 135.06, 145.16, 156.19],
            "Hit-2": [51.69, 55.89, 60.1, 66.11, 70.32, 75.13, 81.74, 88.35, 94.96, 102.17, 110.43, 120.15, 129.87, 139.59, 150.19],
            "Hit-3": [65.27, 70.59, 75.9, 83.49, 88.8, 94.88, 103.22, 111.57, 119.92, 129.03, 139.47, 151.74, 164.01, 176.29, 189.67],
            "Hit-4": [70.86, 76.63, 82.4, 90.64, 96.41, 103, 112.06, 121.13, 130.19, 140.08, 151.41, 164.73, 178.06, 191.38, 205.92],
            "Hit-5": [88.24, 95.42, 102.6, 112.86, 120.04, 128.25, 139.54, 150.82, 162.11, 174.42, 188.53, 205.12, 221.71, 238.3, 256.4],
            charge2: [128.14, 138.57, 149, 163.9, 74.88 + 99.45, 186.25, 202.64, 219.03, 101.12 + 134.3, 253.3, 117.6 + 156.19, 297.88, 321.98, 346.07, 372.36],
            "Charged Attack Stamina Cost": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Plunge DMG": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98],
            "Low Plunge DMG": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89],
            "High Plunge DMG": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04],
            "Skill DMG": [191.2, 205.54, 219.88, 239, 253.34, 267.68, 286.8, 305.92, 325.04, 344.16, 363.28, 382.4, 406.3, 430.2, 454.1],
            CD: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            "Burst DMG": [77.6, 83.42, 89.24, 97, 102.82, 108.64, 116.4, 124.16, 131.92, 139.68, 147.44, 155.2, 164.9, 174.6, 184.3],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            Duration: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            "Energy Cost": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
        },
        Keqing: {
            "Hit-1": [41.02, 44.36, 47.7, 52.47, 55.81, 59.62, 64.87, 70.12, 75.37, 81.09, 86.81, 92.54, 98.26, 103.99, 109.71],
            "Hit-2": [41.02, 44.36, 47.7, 52.47, 55.81, 59.62, 64.87, 70.12, 75.37, 81.09, 86.81, 92.54, 98.26, 103.99, 109.71],
            "Hit-3": [54.44, 58.87, 63.3, 69.63, 74.06, 79.13, 86.09, 93.05, 100.01, 107.61, 115.21, 122.8, 130.4, 137.99, 145.59],
            "Hit-4": [65.88, 34.04 + 37.2, 76.6, 40.26 + 44, 89.62, 95.75, 104.18, 112.6, 121.03, 130.22, 139.41, 148.6, 157.8, 166.99, 176.18],
            "Hit-5": [66.99, 72.45, 77.9, 85.69, 91.14, 97.38, 105.94, 114.51, 123.08, 132.43, 141.78, 151.13, 160.47, 169.82, 179.17],
            charge2: [162.8, 176.05, 189.3, 98.23 + 110, 104.48 + 117, 236.63, 257.45, 278.27, 141.09 + 158, 321.81, 344.53, 367.24, 183.96 + 206, 194.67 + 218, 435.39],
            "Charged Attack Stamina Cost": [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
            "Plunge DMG": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98],
            "Low Plunge DMG": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89],
            "High Plunge DMG": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04],
            HitCount: [1, 1, 1, 2, 1, 0],
            "Lightning Stiletto DMG": [50.4, 54.18, 57.96, 63, 66.78, 70.56, 75.6, 80.64, 85.68, 90.72, 95.76, 100.8, 107.1, 113.4, 119.7],
            "Slashing DMG": [168, 180.6, 193.2, 210, 222.6, 235.2, 252, 268.8, 285.6, 302.4, 319.2, 336, 357, 378, 399],
            "Thunderclap Slash DMG": [84, 90.3, 96.6, 105, 111.3, 117.6, 126, 134.4, 142.8, 151.2, 159.6, 168, 178.5, 189, 199.5],
            CD: [7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5, 7.5],
            "Skill DMG": [88, 94.6, 101.2, 110, 116.6, 123.2, 132, 140.8, 149.6, 158.4, 167.2, 176, 187, 198, 209],
            "Consecutive Slash DMG": [192, 206.4, 220.8, 240, 254.4, 268.8, 288, 307.2, 326.4, 345.6, 364.8, 384, 408, 432, 456],
            "Last Attack DMG": [188.8, 202.96, 217.12, 236, 250.16, 264.32, 283.2, 302.08, 320.96, 339.84, 358.72, 377.6, 401.2, 424.8, 448.4],
            CD: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            "Energy Cost": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40]
        },
        Qiqi: {
            "Hit-1": [37.75, 40.83, 43.9, 48.29, 51.36, 54.88, 59.7, 64.53, 69.36, 74.63, 79.9, 85.17, 90.43, 95.7, 100.97],
            "Hit-2": [38.87, 42.04, 45.2, 49.72, 52.88, 56.5, 61.47, 66.44, 71.42, 76.84, 82.26, 87.69, 93.11, 98.54, 103.96],
            "Hit-3": [48.34, 52.26, 56.2, 61.82, 65.76, 70.26, 76.44, 82.62, 88.8, 95.54, 102.28, 109.02, 115.78, 122.52, 129.26],
            "Hit-4": [49.36, 53.38, 57.4, 63.14, 67.16, 71.76, 78.06, 84.38, 90.7, 97.58, 104.46, 111.36, 118.24, 125.14, 132.02],
            "Hit-5": [63.04, 68.17, 73.3, 80.63, 85.76, 91.63, 99.69, 107.75, 115.81, 124.61, 133.41, 142.2, 151, 159.79, 168.59],
            charge2: [128.66, 139.12, 149.6, 164.56, 175.04, 187, 203.46, 219.92, 236.36, 254.32, 272.28, 290.22, 308.18, 326.12, 344.08],
            "Charged Attack Stamina Cost": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Plunge DMG": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98],
            "Low Plunge DMG": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89],
            "High Plunge DMG": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04],
            HitCount: [1, 1, 2, 2, 1, 0],
            "Skill DMG": [96, 103.2, 110.4, 120, 127.2, 134.4, 144, 153.6, 163.2, 172.8, 182.4, 192, 204, 216, 228],
            "Heal on Hit Mult": [10.56, 11.35, 12.14, 13.2, 13.99, 14.78, 15.84, 16.9, 17.95, 19.01, 20.06, 21.12, 22.44, 23.76, 25.08],
            "Heal on Hit Flat": [67, 74, 81, 89, 98, 107, 116, 126, 137, 148, 160, 172, 185, 199, 213],
            "Regen Mult": [69.6, 74.82, 80.04, 87, 92.22, 97.44, 104.4, 111.36, 118.32, 125.28, 132.24, 139.2, 147.9, 156.6, 165.3],
            "Regen Flat": [451, 496, 544, 597, 653, 713, 777, 845, 916, 991, 1070, 1153, 1239, 1329, 1423],
            "Herald of Frost DMG": [36, 38.7, 41.4, 45, 47.7, 50.4, 54, 57.6, 61.2, 64.8, 68.4, 72, 76.5, 81, 85.5],
            Duration: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            CD: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
            "Burst DMG": [284.8, 306.16, 327.52, 356, 377.36, 398.72, 427.2, 455.68, 484.16, 512.64, 541.12, 569.6, 605.2, 640.8, 676.4],
            "Healing Mult": [90, 96.75, 103.5, 112.5, 119.25, 126, 135, 144, 153, 162, 171, 180, 191.25, 202.5, 213.75],
            "Healing Flat": [577, 635, 698, 765, 837, 914, 996, 1083, 1174, 1270, 1371, 1477, 1588, 1703, 1824],
            Duration: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
        },
        "Traveler (Anemo)": {
            "Hit-1": [44.46, 48.08, 51.7, 56.87, 60.49, 64.63, 70.31, 76, 81.69, 87.89, 94.09, 100.3, 106.5, 112.71, 118.91],
            "Hit-2": [43.43, 46.97, 50.5, 55.55, 59.09, 63.13, 68.68, 74.23, 79.79, 85.85, 91.91, 97.97, 104.03, 110.09, 116.15],
            "Hit-3": [52.98, 57.29, 61.6, 67.76, 72.07, 77, 83.78, 90.55, 97.33, 104.72, 112.11, 119.5, 126.9, 134.29, 141.68],
            "Hit-4": [58.31, 63.05, 67.8, 74.58, 79.33, 84.75, 92.21, 99.67, 107.12, 115.26, 123.4, 131.53, 139.67, 147.8, 155.94],
            "Hit-5": [70.78, 76.54, 82.3, 90.53, 96.29, 102.88, 111.93, 120.98, 130.03, 139.91, 149.79, 159.66, 169.54, 179.41, 189.29],
            charge2: [116.62, 126.11, 135.6, 149.16, 76.05 + 82.6, 169.5, 88.4 + 96.02, 95.55 + 103.78, 214.25, 110.5 + 120.02, 118.3 + 128.49, 263.06, 133.9 + 145.44, 295.61, 311.88],
            "Charged Attack Stamina Cost": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Plunge DMG": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98],
            "Low Plunge DMG": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89],
            "High Plunge DMG": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04],
            "Initial Cutting DMG": [12, 12.9, 13.8, 15, 15.9, 16.8, 18, 19.2, 20.4, 21.6, 22.8, 24, 25.5, 27, 28.5],
            "Max Cutting DMG": [16.8, 18.06, 19.32, 21, 22.26, 23.52, 25.2, 26.88, 28.56, 30.24, 31.92, 33.6, 35.7, 37.8, 39.9],
            "Initial Storm DMG": [176, 189.2, 202.4, 220, 233.2, 246.4, 264, 281.6, 299.2, 316.8, 334.4, 352, 374, 396, 418],
            "Max Storm DMG": [192, 206.4, 220.8, 240, 254.4, 268.8, 288, 307.2, 326.4, 345.6, 364.8, 384, 408, 432, 456],
            "Base CD": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            "Max Charging CD": [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            "Tornado DMG": [80.8, 86.86, 92.92, 101, 107.06, 113.12, 121.2, 129.28, 137.36, 145.44, 153.52, 161.6, 171.7, 181.8, 191.9],
            "Additional Elemental DMG": [24.8, 26.66, 28.52, 31, 32.86, 34.72, 37.2, 39.68, 42.16, 44.64, 47.12, 49.6, 52.7, 55.8, 58.9],
            Duration: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Energy Cost": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
        },
        "Traveler (Geo)": {
            "Hit-1": [44.46, 48.08, 51.7, 56.87, 60.49, 64.63, 70.31, 76, 81.69, 87.89, 94.09, 100.3, 106.5, 112.71, 118.91],
            "Hit-2": [43.43, 46.97, 50.5, 55.55, 59.09, 63.13, 68.68, 74.23, 79.79, 85.85, 91.91, 97.97, 104.03, 110.09, 116.15],
            "Hit-3": [52.98, 57.29, 61.6, 67.76, 72.07, 77, 83.78, 90.55, 97.33, 104.72, 112.11, 119.5, 126.9, 134.29, 141.68],
            "Hit-4": [58.31, 63.05, 67.8, 74.58, 79.33, 84.75, 92.21, 99.67, 107.12, 115.26, 123.4, 131.53, 139.67, 147.8, 155.94],
            "Hit-5": [70.78, 76.54, 82.3, 90.53, 96.29, 102.88, 111.93, 120.98, 130.03, 139.91, 149.79, 159.66, 169.54, 179.41, 189.29],
            charge2: [116.62, 126.11, 135.6, 149.16, 76.05 + 82.6, 169.5, 88.4 + 96.02, 95.55 + 103.78, 214.25, 110.5 + 120.02, 118.3 + 128.49, 263.06, 133.9 + 145.44, 295.61, 311.88],
            "Charged Attack Stamina Cost": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Plunge DMG": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98],
            "Low Plunge DMG": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89],
            "High Plunge DMG": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04],
            "Skill DMG": [248, 266.6, 285.2, 310, 328.6, 347.2, 372, 396.8, 421.6, 446.4, 471.2, 496, 527, 558, 589],
            "Meteorite Duration": [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
            CD: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            "DMG Per Shockwave": [148, 159.1, 170.2, 185, 196.1, 207.2, 222, 236.8, 251.6, 266.4, 281.2, 296, 314.5, 333, 351.5],
            "Stonewall Duration": [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Energy Cost": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
        },
        Xingqiu: {
            "Hit-1": [46.61, 50.41, 54.2, 59.62, 63.41, 67.75, 73.71, 79.67, 85.64, 92.14, 99.59, 108.36, 117.12, 125.88, 135.45],
            "Hit-2": [47.64, 51.52, 55.4, 60.94, 64.82, 69.25, 75.34, 81.44, 87.53, 94.18, 101.8, 110.76, 119.71, 128.67, 138.44],
            "Hit-3": [57.1, 61.76, 66.4, 73.04, 77.68, 83, 90.3, 97.6, 104.92, 112.88, 122.02, 132.74, 143.48, 154.22, 165.94],
            "Hit-4": [55.99, 60.54, 65.1, 71.61, 76.17, 81.38, 88.54, 95.7, 102.86, 110.67, 119.62, 130.15, 140.67, 151.2, 162.68],
            "Hit-5": [71.72, 77.56, 83.4, 91.74, 97.58, 104.26, 113.42, 122.6, 131.78, 141.78, 153.24, 166.74, 180.22, 193.7, 208.42],
            charge2: [103.46, 111.88, 120.3, 60.5 + 71.83, 140.75, 150.38, 163.61, 80.85 + 95.99, 190.07, 204.51, 221.05, 240.51, 118.85 + 141.11, 127.74 + 151.67, 300.63],
            "Charged Attack Stamina Cost": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Plunge DMG": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98],
            "Low Plunge DMG": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89],
            "High Plunge DMG": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04],
            HitCount: [1, 1, 2, 1, 2, 0],
            "Total Skill DMG": [359.2, 386.14, 413.08, 449, 475.94, 502.88, 538.8, 574.72, 285.6 + 325.04, 646.56, 682.48, 718.4, 763.3, 808.2, 853.1],
            "Damage Reduction Ratio": [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 29, 29, 29, 29, 29],
            Duration: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            CD: [21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21],
            "DMG Reduction to DMG Bonus Limit": [2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100, 2100],
            Duration: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            CD: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "Sword Rain DMG": [54.27, 58.34, 62.41, 67.84, 71.91, 75.98, 81.41, 86.84, 92.26, 97.69, 103.12, 108.54, 115.33, 122.11, 128.9],
            Duration: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
        },
        Xiangling: {
            "Hit-1": [42.05, 45.48, 48.9, 53.79, 57.21, 61.13, 66.5, 71.88, 77.26, 83.13, 89.85, 97.76, 105.67, 113.58, 122.2],
            "Hit-2": [42.14, 45.57, 49, 53.9, 57.33, 61.25, 66.64, 72.03, 77.42, 83.3, 90.04, 97.96, 105.88, 113.81, 122.45],
            "Hit-3": [52.12, 56.36, 60.6, 66.66, 70.9, 75.74, 82.42, 89.08, 95.74, 103.02, 111.36, 121.16, 130.96, 140.74, 151.44],
            "Hit-4": [56.4, 61, 65.6, 72.16, 76.76, 82, 89.2, 96.44, 103.64, 111.52, 120.56, 131.16, 141.76, 152.36, 163.92],
            "Hit-5": [71.04, 76.82, 82.6, 90.86, 96.64, 103.25, 112.34, 121.42, 130.51, 140.42, 151.78, 165.13, 178.49, 191.85, 206.42],
            charge2: [121.69, 131.6, 141.5, 155.65, 165.56, 176.88, 192.44, 208.01, 223.57, 240.55, 260.01, 282.89, 305.77, 328.65, 353.61],
            "Charged Attack Stamina Cost": [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
            "Plunge DMG": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98],
            "Low Plunge DMG": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89],
            "High Plunge DMG": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04],
            HitCount: [1, 1, 2, 4, 1, 0],
            "Flame DMG": [111.28, 119.63, 127.97, 139.1, 147.45, 155.79, 166.92, 178.05, 189.18, 200.3, 211.43, 222.56, 236.47, 250.38, 264.29],
            CD: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            "1-Hit DMG": [72, 77.4, 82.8, 90, 95.4, 100.8, 108, 115.2, 122.4, 129.6, 136.8, 144, 153, 162, 171],
            "2-Hit DMG": [88, 94.6, 101.2, 110, 116.6, 123.2, 132, 140.8, 149.6, 158.4, 167.2, 176, 187, 198, 209],
            "3-Hit DMG": [109.6, 117.82, 126.04, 137, 145.22, 153.44, 164.4, 175.36, 186.32, 197.28, 208.24, 219.2, 232.9, 246.6, 260.3],
            "Pyronado DMG": [112, 120.4, 128.8, 140, 148.4, 156.8, 168, 179.2, 190.4, 201.6, 212.8, 224, 238, 252, 266],
            Duration: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
        },
        Barbara: {
            "Hit-1": [37.84, 40.68, 43.52, 47.3, 50.14, 52.98, 56.76, 60.54, 64.33, 68.11, 72.05, 77.19, 82.34, 87.49, 92.63],
            "Hit-2": [35.52, 38.18, 40.85, 44.4, 47.06, 49.73, 53.28, 56.83, 60.38, 63.94, 67.63, 72.46, 77.29, 82.12, 86.95],
            "Hit-3": [41.04, 44.12, 47.2, 51.3, 54.38, 57.46, 61.56, 65.66, 69.77, 73.87, 78.14, 83.72, 89.3, 94.88, 100.47],
            "Hit-4": [55.2, 59.34, 63.48, 69, 73.14, 77.28, 82.8, 88.32, 93.84, 99.36, 105.1, 112.61, 120.12, 127.62, 135.13],
            charge2: [166.24, 178.71, 191.18, 207.8, 220.27, 232.74, 249.36, 265.98, 282.61, 299.23, 316.52, 339.13, 361.74, 384.35, 406.96],
            "Charged Attack Stamina Cost": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            "Plunge DMG": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98],
            "Low Plunge DMG": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9],
            "High Plunge DMG": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59],
            "Heal Per Hit Mult": [.75, .81, .86, .94, .99, 1.05, 1.13, 1.2, 1.27, 1.35, 1.43, 1.5, 1.59, 1.69, 1.78],
            "Heal Per Hit Flat": [72, 79, 87, 96, 105, 114, 125, 135, 147, 159, 172, 185, 199, 213, 228],
            "Continuous Heal Mult": [4, 4.3, 4.6, 5, 5.3, 5.6, 6, 6.4, 6.8, 7.2, 7.6, 8, 8.5, 9, 9.5],
            "Continuous Heal Flat": [385, 424, 465, 510, 559, 610, 664, 722, 783, 847, 915, 986, 1059, 1136, 1217],
            "Droplet DMG": [58.4, 62.78, 67.16, 73, 77.38, 81.76, 87.6, 93.44, 99.28, 105.12, 110.96, 116.8, 124.1, 131.4, 138.7],
            Duration: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            CD: [32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32],
            "Heal Mult": [17.6, 18.92, 20.24, 22, 23.32, 24.64, 26.4, 28.16, 29.92, 31.68, 33.44, 35.2, 37.4, 39.6, 41.8],
            "Heal Flat": [1694, 1864, 2047, 2245, 2457, 2683, 2923, 3177, 3445, 3728, 4024, 4335, 4660, 4999, 5352],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
        },
        Klee: {
            "Hit-1": [72.16, 77.57, 82.98, 90.2, 95.61, 101.02, 108.24, 115.46, 122.67, 129.89, 137.39, 147.21, 157.02, 166.83, 176.65],
            "Hit-2": [62.4, 67.08, 71.76, 78, 82.68, 87.36, 93.6, 99.84, 106.08, 112.32, 118.81, 127.3, 135.78, 144.27, 152.76],
            "Hit-3": [89.92, 96.66, 103.41, 112.4, 119.14, 125.89, 134.88, 143.87, 152.86, 161.86, 171.21, 183.44, 195.67, 207.9, 220.12],
            charge2: [157.36, 169.16, 180.96, 196.7, 208.5, 220.3, 236.04, 251.78, 267.51, 283.25, 299.61, 321.01, 342.42, 363.82, 385.22],
            "Charged Attack Stamina Cost": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            "Plunge DMG": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98],
            "Low Plunge DMG": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9],
            "High Plunge DMG": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59],
            "Jumpy Dumpty DMG": [95.2, 102.34, 109.48, 119, 126.14, 133.28, 142.8, 152.32, 161.84, 171.36, 180.88, 190.4, 202.3, 214.2, 226.1],
            "Mine DMG": [32.8, 35.26, 37.72, 41, 43.46, 45.92, 49.2, 52.48, 55.76, 59.04, 62.32, 65.6, 69.7, 73.8, 77.9],
            "Mine Duration": [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Sparks n Splash DMG": [42.64, 45.84, 49.04, 53.3, 56.5, 59.7, 63.96, 68.22, 72.49, 76.75, 81.02, 85.28, 90.61, 95.94, 101.27],
            Duration: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Energy Cost": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
        },
        Lisa: {
            "Hit-1": [39.6, 42.57, 45.54, 49.5, 52.47, 55.44, 59.4, 63.36, 67.32, 71.28, 75.4, 80.78, 86.17, 91.56, 96.94],
            "Hit-2": [35.92, 38.61, 41.31, 44.9, 47.59, 50.29, 53.88, 57.47, 61.06, 64.66, 68.39, 73.28, 78.16, 83.05, 87.93],
            "Hit-3": [42.8, 46.01, 49.22, 53.5, 56.71, 59.92, 64.2, 68.48, 72.76, 77.04, 81.49, 87.31, 93.13, 98.95, 104.77],
            "Hit-4": [54.96, 59.08, 63.2, 68.7, 72.82, 76.94, 82.44, 87.94, 93.43, 98.93, 104.64, 112.12, 119.59, 127.07, 134.54],
            charge2: [177.12, 190.4, 203.69, 221.4, 234.68, 247.97, 265.68, 283.39, 301.1, 318.82, 337.24, 361.32, 385.41, 409.5, 433.59],
            "Charged Attack Stamina Cost": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            "Plunge DMG": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98],
            "Low Plunge DMG": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9],
            "High Plunge DMG": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59],
            "Press DMG": [80, 86, 92, 100, 106, 112, 120, 128, 136, 144, 152, 160, 170, 180, 190],
            CD: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            "No Stack Hold": [320, 344, 368, 400, 424, 448, 480, 512, 544, 576, 608, 640, 680, 720, 760],
            "Hold-1": [368, 395.6, 423.2, 460, 487.6, 515.2, 552, 588.8, 625.6, 662.4, 699.2, 736, 782, 828, 874],
            "Hold-2": [424, 455.8, 487.6, 530, 561.8, 593.6, 636, 678.4, 720.8, 763.2, 805.6, 848, 901, 954, 1007],
            "Hold-3": [487.2, 523.74, 560.28, 609, 645.54, 682.08, 730.8, 779.52, 828.24, 876.96, 925.68, 974.4, 1035.3, 1096.2, 1157.1],
            "Holding CD": [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            "Discharge DMG": [36.56, 39.3, 42.04, 45.7, 48.44, 51.18, 54.84, 58.5, 62.15, 65.81, 69.46, 73.12, 77.69, 82.26, 86.83],
            Duration: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
        },
        Mona: {
            "Hit-1": [37.6, 40.42, 43.24, 47, 49.82, 52.64, 56.4, 60.16, 63.92, 67.68, 71.44, 75.2, 79.9, 84.6, 89.3],
            "Hit-2": [36, 38.7, 41.4, 45, 47.7, 50.4, 54, 57.6, 61.2, 64.8, 68.4, 72, 76.5, 81, 85.5],
            "Hit-3": [44.8, 48.16, 51.52, 56, 59.36, 62.72, 67.2, 71.68, 76.16, 80.64, 85.12, 89.6, 95.2, 100.8, 106.4],
            "Hit-4": [56.16, 60.37, 64.58, 70.2, 74.41, 78.62, 84.24, 89.86, 95.47, 101.09, 106.7, 112.32, 119.34, 126.36, 133.38],
            charge2: [149.72, 160.95, 172.18, 187.15, 198.38, 209.61, 224.58, 239.55, 254.52, 269.5, 285.07, 305.43, 325.79, 346.15, 366.51],
            "Charged Attack Stamina Cost": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            "Plunge DMG": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98],
            "Low Plunge DMG": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9],
            "High Plunge DMG": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59],
            DoT: [32, 34.4, 36.8, 40, 42.4, 44.8, 48, 51.2, 54.4, 57.6, 60.8, 64, 68, 72, 76],
            "Explosion DMG": [132.8, 142.76, 152.72, 166, 175.96, 185.92, 199.2, 212.48, 225.76, 239.04, 252.32, 265.6, 282.2, 298.8, 315.4],
            CD: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            "Illusory Bubble Duration": [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            "Illusory Bubble Explosion DMG": [442.4, 475.58, 508.76, 553, 586.18, 619.36, 663.6, 707.84, 752.08, 796.32, 840.56, 884.8, 940.1, 995.4, 1050.7],
            "DMG Bonus": [42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 60, 60, 60, 60, 60],
            "Omen Duration": [4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Energy Cost": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
        },
        Ningguang: {
            "Hit-1": [28, 30.1, 32.2, 35, 37.1, 39.2, 42, 44.8, 47.6, 50.4, 53.31, 57.12, 60.93, 64.74, 68.54],
            charge2: [174.08, 187.14, 200.19, 217.6, 230.66, 243.71, 261.12, 278.53, 295.94, 313.34, 331.45, 355.12, 378.8, 402.47, 426.15],
            charge1: [49.6, 53.32, 57.04, 62, 65.72, 69.44, 74.4, 79.36, 84.32, 89.28, 94.44, 101.18, 107.93, 114.68, 121.42],
            "Charged Attack Stamina Cost": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            "Plunge DMG": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98],
            "Low Plunge DMG": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9],
            "High Plunge DMG": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59],
            "Inherited HP": [50.1, 53.1, 56.1, 60, 63, 66, 69.9, 73.8, 77.7, 81.6, 85.5, 89.4, 93.3, 97.2, 101.1],
            "Skill DMG": [230.4, 247.68, 264.96, 288, 305.28, 322.56, 345.6, 368.64, 391.68, 414.72, 437.76, 460.8, 489.6, 518.4, 547.2],
            CD: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            CD: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            "DMG Per Gem": [86.96, 93.48, 100, 108.7, 115.22, 121.74, 130.44, 139.14, 147.83, 156.53, 165.22, 173.92, 184.79, 195.66, 206.53],
            CD: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            "Energy Cost": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40]
        },
        Sucrose: {
            "Hit-1": [33.46, 35.97, 38.48, 41.83, 44.34, 46.85, 50.2, 53.54, 56.89, 60.24, 63.58, 66.93, 71.11, 75.29, 79.48],
            "Hit-2": [30.62, 32.91, 35.21, 38.27, 40.57, 42.86, 45.92, 48.99, 52.05, 55.11, 58.17, 61.23, 65.06, 68.89, 72.71],
            "Hit-3": [38.45, 41.33, 44.22, 48.06, 50.94, 53.83, 57.67, 61.52, 65.36, 69.21, 73.05, 76.9, 81.7, 86.51, 91.31],
            "Hit-4": [47.92, 51.51, 55.11, 59.9, 63.49, 67.08, 71.88, 76.67, 81.46, 86.25, 91.04, 95.84, 101.82, 107.81, 113.8],
            charge2: [120.16, 129.17, 138.18, 150.2, 159.21, 168.22, 180.24, 192.26, 204.27, 216.29, 228.3, 240.32, 255.34, 270.36, 285.38],
            "Charged Attack Stamina Cost": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            "Plunge DMG": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98],
            "Low Plunge DMG": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9],
            "High Plunge DMG": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59],
            "Skill DMG": [211.2, 227.04, 242.88, 264, 279.84, 295.68, 316.8, 337.92, 359.04, 380.16, 401.28, 422.4, 448.8, 475.2, 501.6],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            DoT: [148, 159.1, 170.2, 185, 196.1, 207.2, 222, 236.8, 251.6, 266.4, 281.2, 296, 314.5, 333, 351.5],
            "Additional Elemental DMG": [44, 47.3, 50.6, 55, 58.3, 61.6, 66, 70.4, 74.8, 79.2, 83.6, 88, 93.5, 99, 104.5],
            Duration: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
        },
        Zhongli: {
            "Hit-1": [30.77, 33.27, 35.78, 39.36, 41.86, 44.72, 48.66, 52.59, 56.53, 60.82, 65.74, 71.53, 77.31, 83.1, 89.41],
            "Hit-2": [31.15, 33.69, 36.22, 39.85, 42.38, 45.28, 49.26, 53.25, 57.23, 61.58, 66.56, 72.42, 78.27, 84.13, 90.52],
            "Hit-3": [38.58, 41.72, 44.86, 49.34, 52.48, 56.07, 61, 65.94, 70.87, 76.26, 82.42, 89.68, 96.93, 104.18, 112.1],
            "Hit-4": [42.94, 46.43, 49.93, 54.92, 58.42, 62.41, 67.9, 73.4, 78.89, 84.88, 91.74, 99.82, 107.89, 115.97, 124.77],
            "Hit-5": [43, 46.52, 50, 55, 58.52, 62.52, 68, 73.52, 79, 85, 91.88, 99.96, 108.04, 116.12, 124.96],
            "Hit-6": [54.5, 58.93, 63.37, 69.7, 74.14, 79.21, 86.18, 93.15, 100.12, 107.73, 116.44, 126.69, 136.93, 147.18, 158.36],
            charge2: [111.03, 120.06, 129.1, 142.01, 151.05, 161.38, 175.58, 189.78, 203.98, 219.47, 237.22, 258.1, 278.97, 299.85, 322.62],
            "Charged Attack Stamina Cost": [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
            "Plunge DMG": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98],
            "Low Plunge DMG": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89],
            "High Plunge DMG": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04],
            HitCount: [1, 1, 1, 1, 4, 1],
            "Stone Stele": [16, 17.2, 18.4, 20, 21.2, 22.4, 24, 25.6, 27.2, 28.8, 30.4, 32, 34, 36, 38],
            "Resonance DMG": [32, 34.4, 36.8, 40, 42.4, 44.8, 48, 51.2, 54.4, 57.6, 60.8, 64, 68, 72, 76],
            CD: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            "Hold DMG": [80, 86, 92, 100, 106, 112, 120, 128, 136, 144, 152, 160, 170, 180, 190],
            "Shield Flat": [1232, 1356, 1489, 1633, 1787, 1951, 2126, 2311, 2506, 2712, 2927, 3153, 3389, 3636, 3893],
            "Shield Mult": [12.8, 13.76, 14.72, 16, 16.96, 17.92, 19.2, 20.48, 21.76, 23.04, 24.32, 25.6, 27.2, 28.8, 30.4],
            "Shield Duration": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "CD (hold)": [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            "Burst DMG": [401.08, 444.44, 487.8, 542, 590.78, 639.56, 704.6, 769.64, 834.68, 899.72, 964.76, 1029.8, 1084, 1138.2, 1192.4],
            "Petrification Duration": [3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4, 4, 4, 4, 4, 4],
            CD: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            "Energy Cost": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40]
        },
        Xinyan: {
            "Hit-1": [76.54, 82.77, 89, 97.9, 104.13, 111.25, 121.04, 130.83, 140.62, 151.3, 161.98, 172.66, 183.34, 194.02, 204.7],
            "Hit-2": [73.96, 79.98, 86, 94.6, 100.62, 107.5, 116.96, 126.42, 135.88, 146.2, 156.52, 166.84, 177.16, 187.48, 197.8],
            "Hit-3": [95.46, 103.23, 111, 122.1, 129.87, 138.75, 150.96, 163.17, 175.38, 188.7, 202.02, 215.34, 228.66, 241.98, 255.3],
            "Hit-4": [115.84, 125.27, 134.7, 148.17, 157.6, 168.38, 183.19, 198.01, 212.83, 228.99, 245.15, 261.32, 277.48, 293.65, 309.81],
            charge1: [62.55, 67.64, 72.73, 80, 85.09, 90.91, 98.91, 106.91, 114.91, 123.64, 132.36, 141.09, 149.82, 158.55, 167.27],
            charge2: [113.09, 122.3, 131.5, 144.65, 153.86, 164.38, 178.84, 193.31, 207.77, 223.55, 239.33, 255.11, 270.89, 286.67, 302.45],
            "Charged Attack Stamina Cost": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
            "Max Duration": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            "Plunge DMG": [74.59, 80.66, 86.73, 95.4, 101.47, 108.41, 117.95, 127.49, 137.03, 147.44, 157.85, 168.26, 178.66, 189.07, 199.48],
            "Low Plunge DMG": [149.14, 161.28, 173.42, 190.77, 202.91, 216.78, 235.86, 254.93, 274.01, 294.82, 315.63, 336.44, 357.25, 378.06, 398.87],
            "High Plunge DMG": [186.29, 201.45, 216.62, 238.28, 253.44, 270.77, 294.6, 318.42, 342.25, 368.25, 394.24, 420.23, 446.23, 472.22, 498.21],
            "Swing DMG": [169.6, 182.32, 195.04, 212, 224.72, 237.44, 254.4, 271.36, 288.32, 305.28, 322.24, 339.2, 360.4, 381.6, 402.8],
            "Shield Level 1 Mult": [104.04, 111.84, 119.65, 130.05, 137.85, 145.66, 156.06, 166.46, 176.87, 187.27, 197.68, 208.08, 221.09, 234.09, 247.1],
            "Shield Level 1 Flat": [501, 551, 605, 663, 726, 793, 864, 939, 1018, 1101, 1189, 1281, 1377, 1477, 1581],
            "Shield Level 2 Mult": [122.4, 131.58, 140.76, 153, 162.18, 171.36, 183.6, 195.84, 208.08, 220.32, 232.56, 244.8, 260.1, 275.4, 290.7],
            "Shield Level 2 Flat": [589, 648, 712, 780, 854, 932, 1016, 1104, 1197, 1296, 1399, 1507, 1620, 1737, 1860],
            "Shield Level 3 Mult": [144, 154.8, 165.6, 180, 190.8, 201.6, 216, 230.4, 244.8, 259.2, 273.6, 288, 306, 324, 342],
            "Shield Level 3 Flat": [693, 762, 837, 918, 1005, 1097, 1195, 1299, 1409, 1524, 1646, 1773, 1905, 2044, 2188],
            DoT: [33.6, 36.12, 38.64, 42, 44.52, 47.04, 50.4, 53.76, 57.12, 60.48, 63.84, 67.2, 71.4, 75.6, 79.8],
            "Shield Duration": [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            CD: [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
            "Burst DMG": [340.8, 366.36, 391.92, 426, 451.56, 477.12, 511.2, 545.28, 579.36, 613.44, 647.52, 681.6, 724.2, 766.8, 809.4],
            "Pyro DoT": [40, 43, 46, 50, 53, 56, 60, 64, 68, 72, 76, 80, 85, 90, 95],
            Duration: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Energy Cost": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
        },
        Xiao: {
            "Hit-1": [55.08, 58.84, 62.6, 67.6, 71.36, 75.74, 81.38, 87.02, 92.64, 98.28, 103.92, 109.56, 115.18, 120.82, 126.46],
            "Hit-2": [56.94, 60.82, 64.7, 69.88, 73.76, 78.29, 84.11, 89.93, 95.76, 101.58, 107.4, 113.23, 119.05, 124.87, 130.69],
            "Hit-3": [68.55, 73.23, 77.9, 84.13, 88.81, 94.26, 101.27, 108.28, 115.29, 122.3, 129.31, 136.33, 143.34, 150.35, 157.36],
            "Hit-4": [75.32, 80.46, 85.6, 92.44, 97.58, 103.58, 111.28, 118.98, 126.68, 134.4, 142.1, 149.8, 157.5, 165.2, 172.92],
            "Hit-5": [71.54, 76.42, 81.3, 87.8, 92.68, 98.37, 105.69, 113.01, 120.32, 127.64, 134.96, 142.28, 149.59, 156.91, 164.23],
            "Hit-6": [95.83, 102.37, 108.9, 117.61, 124.15, 131.77, 141.57, 151.37, 161.17, 170.97, 180.77, 190.58, 200.38, 210.18, 219.98],
            charge2: [121.09, 129.34, 137.6, 148.61, 156.86, 166.5, 178.88, 191.26, 203.65, 216.03, 228.42, 240.8, 253.18, 265.57, 277.395],
            "Charged Attack Stamina Cost": [1.45376, 1.55288, 1.652, 1.78416, 1.88328, 1.99892, 2.1476, 2.29628, 2.44496, 2.59364, 2.74232, 2.891, 3.03968, 3.18836, 3.33704],
            "Plunge DMG": [81.83, 88.49, 95.16, 104.67, 111.33, 118.94, 129.41, 139.88, 150.35, 161.76, 173.18, 184.6, 196.02, 207.44, 218.86],
            "Low Plunge DMG": [163.63, 176.95, 190.27, 209.3, 222.62, 237.84, 258.77, 279.7, 300.63, 323.46, 346.29, 369.12, 391.96, 414.79, 437.62],
            "High Plunge DMG": [204.39, 221.02, 237.66, 261.42, 278.06, 297.07, 323.21, 349.36, 375.5, 404.02, 432.54, 461.06, 489.57, 518.09, 546.61],
            HitCount: [2, 1, 1, 2, 1, 1],
            "Skill DMG": [252.8, 271.76, 290.72, 316, 334.96, 353.92, 379.2, 404.48, 429.76, 455.04, 480.32, 505.6, 537.2, 568.8, 600.4],
            CD: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            "Normal Attack/charge2 Bonus": [54.45, 61.95, 65.45, 70, 73.5, 77, 81.55, 86.1, 90.65, 95.2, 99.75, 104.3, 108.85, 113.4, 117.95],
            "Life Drain": [3, 3, 3, 2.5, 2.5, 2.5, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            Duration: [15, 15, 15, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
        },
        Ganyu: {
            "Hit-1": [31.73, 34.32, 36.9, 40.59, 43.17, 46.13, 50.18, 54.24, 58.3, 62.73, 67.8, 73.77, 79.74, 85.7, 92.21],
            "Hit-2": [35.6, 38.5, 41.4, 45.54, 48.44, 51.75, 56.3, 60.86, 65.41, 70.38, 76.07, 82.77, 89.46, 96.16, 103.46],
            "Hit-3": [45.49, 49.2, 52.9, 58.19, 61.89, 66.13, 71.94, 77.76, 83.58, 89.93, 97.2, 105.76, 114.31, 122.87, 132.2],
            "Hit-4": [45.49, 49.2, 52.9, 58.19, 61.89, 66.13, 71.94, 77.76, 83.58, 89.93, 97.2, 105.76, 114.31, 122.87, 132.2],
            "Hit-5": [48.25, 52.17, 56.1, 61.71, 65.64, 70.13, 76.3, 82.47, 88.64, 95.37, 103.08, 112.16, 121.23, 130.3, 140.19],
            "Hit-6": [57.62, 62.31, 67, 73.7, 78.39, 83.75, 91.12, 98.49, 105.86, 113.9, 123.11, 133.95, 144.78, 155.61, 167.43],
            charge1: [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3],
            charge2: [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5],
            "Frostflake Arrow DMG": [128, 137.6, 147.2, 160, 169.6, 179.2, 192, 204.8, 217.6, 230.4, 243.2, 256, 272, 288, 304],
            "Frostflake Arrow Bloom DMG": [217.6, 233.92, 250.24, 272, 288.32, 304.64, 326.4, 348.16, 369.92, 391.68, 413.44, 435.2, 462.4, 489.6, 516.8],
            "Plunge DMG": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98],
            "Low Plunge DMG": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9],
            "High Plunge DMG": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59],
            "Inherited HP": [120, 129, 138, 150, 159, 168, 180, 192, 204, 216, 228, 240, 255, 270, 285],
            "Skill DMG": [132, 141.9, 151.8, 165, 174.9, 184.8, 198, 211.2, 224.4, 237.6, 250.8, 264, 280.5, 297, 313.5],
            Duration: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            CD: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            "Ice Shard DMG": [70.27, 75.54, 80.81, 87.84, 93.11, 98.38, 105.41, 112.44, 119.46, 126.49, 133.52, 140.54, 149.33, 158.11, 166.9],
            Duration: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
        },
        Albedo: {
            "Hit-1": [36.74, 39.73, 42.72, 46.99, 49.98, 53.4, 58.1, 62.8, 67.5, 72.62, 78.5, 85.41, 92.31, 99.22, 106.76],
            "Hit-2": [36.74, 39.73, 42.72, 46.99, 49.98, 53.4, 58.1, 62.8, 67.5, 72.62, 78.5, 85.41, 92.31, 99.22, 106.76],
            "Hit-3": [47.45, 51.32, 55.18, 60.7, 64.56, 68.98, 75.04, 81.11, 87.18, 93.81, 101.39, 110.32, 119.24, 128.16, 137.89],
            "Hit-4": [49.75, 53.8, 57.85, 63.64, 67.68, 72.31, 78.68, 85.04, 91.4, 98.35, 106.3, 115.65, 125.01, 134.36, 144.57],
            "Hit-5": [62.07, 67.13, 72.18, 79.4, 84.45, 90.22, 98.16, 106.1, 114.04, 122.7, 132.63, 144.3, 155.97, 167.64, 180.38],
            charge2: [107.5, 116.25, 125, 137.5, 146.25, 156.25, 170, 183.75, 197.5, 212.5, 229.68, 109.96 + 139.94, 270.11, 290.32, 312.38],
            "Charged Attack Stamina Cost": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Plunge DMG": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98],
            "Low Plunge DMG": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89],
            "High Plunge DMG": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04],
            "Skill DMG": [130.4, 140.18, 149.96, 163, 172.78, 182.56, 195.6, 208.64, 221.68, 234.72, 247.76, 260.8, 277.1, 293.4, 309.7],
            "Transient Blossom DMG": [133.6, 143.62, 153.64, 167, 177.02, 187.04, 200.4, 213.76, 227.12, 240.48, 253.84, 267.2, 283.9, 300.6, 317.3],
            Duration: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
            "Skill CD": [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            "Burst DMG": [367.2, 394.74, 422.28, 459, 486.54, 514.08, 550.8, 587.52, 624.24, 660.96, 697.68, 734.4, 780.3, 826.2, 872.1],
            "Fatal Blossom DMG": [72, 77.4, 82.8, 90, 95.4, 100.8, 108, 115.2, 122.4, 129.6, 136.8, 144, 153, 162, 171],
            CD: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            "Energy Cost": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40]
        },
        Ayaka: {
            "Hit-1": [45.73, 49.45, 53.17, 58.49, 62.21, 66.46, 72.31, 78.16, 84.01, 90.39, 96.77, 103.15, 109.53, 115.91, 122.29],
            "Hit-2": [48.68, 52.65, 56.61, 62.27, 66.23, 70.76, 76.99, 83.22, 89.44, 96.24, 103.03, 109.82, 116.62, 123.41, 130.2],
            "Hit-3": [62.62, 67.72, 72.82, 80.1, 85.19, 91.02, 99.03, 107.04, 115.05, 123.79, 132.53, 141.26, 150, 158.74, 167.48],
            "Hit-4": [22.65 * 3, 73.47, 78.99, 86.91, 30.81 * 3, 98.76, 107.43, 116.13, 124.83, 134.31, 143.79, 153.27, 162.75, 172.23, 181.71],
            "Hit-5": [78.18, 84.55, 90.91, 100, 106.36, 113.64, 123.64, 133.64, 143.64, 154.55, 165.45, 176.36, 187.27, 198.18, 209.09],
            charge2: [55.13 * 3, 59.61 * 3, 64.1 * 3, 70.51 * 3, 225, 240.39, 261.54, 282.69, 101.28 * 3, 108.97 * 3, 349.98, 124.35 * 3, 132.05 * 3, 419.22, 442.29],
            "Charged Attack Stamina Cost": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Plunge DMG": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98],
            "Low Plunge DMG": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89],
            "High Plunge DMG": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04],
            HitCount: [1, 1, 1, 3, 1, 0],
            "Skill DMG": [239.2, 257.14, 275.08, 299, 316.94, 334.88, 358.8, 382.72, 406.64, 430.56, 454.48, 478.4, 508.3, 538.2, 568.1],
            "Cutting DMG": [112.3, 120.72, 129.15, 140.38, 148.8, 157.22, 168.45, 179.68, 190.91, 202.14, 213.37, 224.6, 238.64, 252.68, 266.71],
            "Bloom DMG": [168.45, 181.08, 193.72, 210.56, 223.2, 235.83, 252.68, 269.52, 286.36, 303.21, 320.05, 336.9, 357.96, 379.01, 400.07],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80],
            Duration: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
        },
        Hutao: {
            "Hit-1": [46.89, 50.08, 53.28, 57.54, 60.74, 64.47, 69.26, 74.06, 78.85, 83.65, 88.44, 93.24, 98.04, 102.83, 107.63],
            "Hit-2": [48.25, 51.54, 54.83, 59.22, 62.51, 66.35, 71.28, 76.22, 81.15, 86.09, 91.02, 95.96, 100.89, 105.83, 110.76],
            "Hit-3": [61.05, 65.21, 69.38, 74.93, 79.09, 83.94, 90.19, 96.43, 102.68, 108.92, 115.16, 121.41, 127.65, 133.89, 140.14],
            "Hit-4": [65.64, 70.12, 74.59, 80.56, 85.03, 90.26, 96.97, 103.68, 110.4, 117.11, 123.82, 130.54, 137.25, 143.96, 150.68],
            "Hit-5": [68.47, 73.14, 77.81, 84.04, 88.7, 94.15, 101.15, 108.16, 115.16, 122.16, 62.77 + 66.4, 66.17 + 70, 143.17, 150.18, 157.18],
            "Hit-6": [85.96, 91.82, 97.68, 105.49, 111.36, 118.19, 126.98, 135.78, 144.57, 153.36, 162.15, 170.94, 179.73, 188.52, 197.31],
            charge2: [135.96, 145.23, 154.5, 166.86, 176.13, 186.95, 200.85, 214.76, 228.66, 242.57, 256.47, 270.38, 284.28, 298.19, 312.09],
            "Charged Attack Stamina Cost": [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
            "Plunge DMG": [65.42, 69.88, 74.34, 80.29, 84.75, 89.95, 96.64, 103.33, 110.02, 116.71, 123.4, 130.1, 136.79, 143.48, 150.17],
            "Low Plunge DMG": [130.81, 139.73, 148.65, 160.54, 169.46, 179.86, 193.24, 206.62, 220, 233.38, 246.76, 260.13, 273.51, 286.89, 300.27],
            "High Plunge DMG": [163.39, 174.53, 185.67, 200.52, 211.66, 224.66, 241.37, 258.08, 274.79, 291.5, 308.21, 324.92, 341.63, 358.34, 375.05],
            HitCount: [1, 1, 1, 1, 2, 1],
            "Activation Cost": [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
            "ATK Increase": [3.84, 4.07, 4.3, 4.6, 4.83, 5.06, 5.36, 5.66, 5.96, 6.26, 6.56, 6.85, 7.15, 7.45, 7.75],
            "Blood Blossom DMG": [64, 68.8, 73.6, 80, 84.8, 89.6, 96, 102.4, 108.8, 115.2, 121.6, 128, 136, 144, 152],
            "Blood Blossom Duration": [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            Duration: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            CD: [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            "Burst DMG": [303.27, 321.43, 339.59, 363.2, 381.36, 399.52, 423.13, 446.74, 470.34, 493.95, 517.56, 541.17, 564.78, 588.38, 611.99],
            "Low HP Burst DMG": [379.09, 401.79, 424.49, 454, 476.7, 499.4, 528.91, 558.42, 587.93, 617.44, 646.95, 676.46, 705.97, 735.48, 764.99],
            "HP Regeneration": [6.26, 6.64, 7.01, 7.5, 7.88, 8.25, 8.74, 9.23, 9.71, 10.2, 10.69, 11.18, 11.66, 12.15, 12.64],
            "Low HP Regeneration": [8.35, 8.85, 9.35, 10, 10.5, 11, 11.65, 12.3, 12.95, 13.6, 14.25, 14.9, 15.55, 16.2, 16.85],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Energy Cost": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
        },
        Rosaria: {
            "Hit-1": [52.46, 56.73, 61, 67.1, 71.37, 76.25, 82.96, 89.67, 96.38, 103.7, 111.02, 118.34, 125.66, 132.98, 140.3],
            "Hit-2": [51.6, 55.8, 60, 66, 70.2, 75, 81.6, 88.2, 94.8, 102, 109.2, 116.4, 123.6, 130.8, 138],
            "Hit-3": [63.64, 68.82, 74, 81.4, 86.58, 92.5, 100.64, 108.78, 116.92, 125.8, 134.68, 143.56, 152.44, 161.32, 170.2],
            "Hit-4": [69.66, 75.33, 81, 89.1, 94.77, 101.25, 110.16, 119.07, 127.98, 137.7, 147.42, 157.14, 166.86, 176.58, 186.3],
            "Hit-5": [84.62, 45.01 + 46.5, 98.4, 53.24 + 55, 115.13, 123, 133.82, 144.65, 155.47, 167.28, 179.09, 190.9, 202.7, 214.51, 226.32],
            charge2: [136.74, 147.87, 159, 174.9, 186.03, 198.75, 216.24, 233.73, 251.22, 270.3, 289.38, 308.46, 327.54, 346.62, 365.7],
            "Charged Attack Stamina Cost": [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
            "Plunge DMG": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98],
            "Low Plunge DMG": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89],
            "High Plunge DMG": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04],
            HitCount: [1, 1, 2, 1, 2, 0],
            "Skill DMG": [194.4, 208.98, 223.56, 243, 257.58, 272.16, 291.6, 93.44 + 217.6, 330.48, 349.92, 110.96 + 258.4, 388.8, 413.1, 437.4, 461.7],
            CD: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            "Burst DMG": [256, 275.2, 294.4, 320, 137.8 + 201.4, 358.4, 384, 409.6, 435.2, 460.8, 486.4, 512, 544, 576, 608],
            "Ice Lance DoT": [132, 141.9, 151.8, 165, 174.9, 184.8, 198, 211.2, 224.4, 237.6, 250.8, 264, 280.5, 297, 313.5],
            Duration: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Energy Cost": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
        },
        Yanfei: {
            "Hit-1": [58.34, 62.72, 67.09, 72.93, 77.3, 81.68, 87.51, 93.35, 99.18, 105.01, 110.85, 116.68, 123.98, 131.27, 138.56],
            "Hit-2": [52.13, 56.04, 59.94, 65.16, 69.07, 72.98, 78.19, 83.4, 88.61, 93.83, 99.04, 104.25, 110.77, 117.28, 123.8],
            "Hit-3": [76.01, 81.71, 87.41, 95.02, 100.72, 106.42, 114.02, 121.62, 129.22, 136.82, 144.42, 152.03, 161.53, 171.03, 180.53],
            charge1: [98.23, 104.11, 109.99, 117.64, 123.52, 129.4, 137.05, 144.7, 152.34, 159.99, 167.64, 175.28, 182.93, 190.58, 198.22],
            charge2: [150.23, 159.23, 168.23, 179.92, 188.92, 197.91, 209.61, 221.3, 259.88, 272.92, 285.97, 299.01, 312.06, 325.1, 338.15],
            "Charged Attack Stamina Cost": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            "Scarlet Seal Stamina Consumption Decrease": [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Scarlet Seal Duration": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            "Plunge DMG": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98],
            "Low Plunge DMG": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9],
            "High Plunge DMG": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59],
            HitCount: [1, 1, 1, 0, 0, 0],
            "Skill DMG": [169.6, 182.32, 195.04, 212, 224.72, 237.44, 254.4, 271.36, 288.32, 305.28, 322.24, 339.2, 360.4, 381.6, 402.8],
            CD: [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            "Burst DMG": [182.4, 196.08, 209.76, 228, 241.68, 255.36, 273.6, 291.84, 310.08, 328.32, 346.56, 364.8, 387.6, 410.4, 433.2],
            "Scarlet Seal Grant Interval": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            "charge2 Bonus": [33.4, 35.4, 37.4, 40, 42, 44, 46.6, 49.2, 51.8, 54.4, 57, 59.6, 62.2, 64.8, 67.4],
            Duration: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
        },
        Eula: {
            "Hit-1": [89.73, 97.04, 104.34, 114.77, 122.08, 130.43, 141.9, 153.38, 164.86, 177.38, 191.72, 208.6, 225.47, 242.34, 260.75],
            "Hit-2": [93.55, 101.17, 108.78, 119.66, 127.27, 135.98, 147.94, 159.91, 171.87, 184.93, 199.88, 217.47, 235.06, 252.65, 271.84],
            "Hit-3": [113.6, 122.84, 132.1, 145.3, 154.54, 165.12, 179.64, 194.18, 208.7, 224.56, 242.72, 264.08, 285.44, 306.8, 330.1],
            "Hit-4": [112.64, 121.81, 130.98, 144.08, 153.25, 163.73, 178.13, 192.54, 206.95, 222.67, 240.68, 261.86, 283.03, 304.21, 327.32],
            "Hit-5": [143.66, 155.36, 167.06, 183.76, 195.46, 208.82, 227.2, 245.58, 263.94, 284, 306.96, 333.98, 360.98, 388, 417.48],
            charge1: [68.8, 74.4, 80, 88, 93.6, 100, 108.8, 117.6, 126.4, 136, 147, 159.94, 172.87, 185.81, 199.92],
            charge2: [124.4, 134.52, 144.65, 159.12, 169.24, 180.81, 196.72, 212.64, 228.55, 245.91, 265.79, 289.18, 312.57, 335.96, 361.48],
            "Charged Attack Stamina Cost": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
            "Max Duration": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            "Plunge DMG": [74.59, 80.66, 86.73, 95.4, 101.47, 108.41, 117.95, 127.49, 137.03, 147.44, 159.37, 173.39, 187.41, 201.44, 216.74],
            "Low/High Plunge DMG": [149.14, 161.28, 173.42, 190.77, 202.91, 216.78, 235.86, 254.93, 274.01, 294.82, 318.67, 346.71, 374.75, 402.79, 433.38],
            "Low/High Plunge DMG": [186.29, 201.45, 216.62, 238.28, 253.44, 270.77, 294.6, 318.42, 342.25, 368.25, 398.03, 433.06, 468.08, 503.11, 541.32],
            HitCount: [1, 1, 2, 1, 2, 0],
            "Press DMG": [146.4, 157.38, 168.36, 183, 193.98, 204.96, 219.6, 234.24, 248.88, 263.52, 278.16, 292.8, 311.1, 329.4, 347.7],
            "Hold DMG": [245.6, 264.02, 282.44, 307, 325.42, 343.84, 368.4, 392.96, 417.52, 442.08, 466.64, 491.2, 521.9, 552.6, 583.3],
            "Icewhirl Brand DMG": [96, 103.2, 110.4, 120, 127.2, 134.4, 144, 153.6, 163.2, 172.8, 182.4, 192, 204, 216, 228],
            "DEF Bonus": [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
            "Grimheart Duration": [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
            "Physical RES Decrease": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 25, 25, 25, 25],
            "Cryo RES Decrease": [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 25, 25, 25, 25, 25],
            "RES Decrease Duration": [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            "Press CD": [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            "CD (hold)": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            "Burst DMG": [245.6, 264.02, 282.44, 307, 325.42, 343.84, 368.4, 392.96, 417.52, 442.08, 466.64, 491.2, 521.9, 552.6, 583.3, 0],
            "Lightfall Sword Base DMG": [367.05, 396.92, 426.8, 469.48, 499.36, 533.5, 580.45, 627.4, 674.34, 725.56, 784.25, 853.26, 922.27, 991.29, 1066.57, 0],
            DMG: [74.99, 81.1, 87.2, 95.92, 102.02, 109, 118.59, 128.18, 137.78, 148.24, 160.23, 174.33, 188.43, 202.53, 217.91, 0],
            "Maximum Stacks": [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 0],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 0],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 0]
        },
        Kazuha: {
            "Hit-1": [44.98, 48.64, 52.3, 57.53, 61.19, 65.38, 71.13, 76.88, 82.63, 88.91, 96.1, 104.56, 113.02, 121.47, 130.7],
            "Hit-2": [45.24, 48.92, 52.6, 57.86, 61.54, 65.75, 71.54, 77.32, 83.11, 89.42, 96.65, 105.16, 113.66, 122.17, 131.45],
            "Hit-3": [25.8 + 30.96, 27.9 + 33.48, 66, 72.6, 77.22, 82.5, 40.8 + 48.96, 44.1 + 52.92, 104.28, 112.2, 121.28, 131.95, 142.62, 69.68 + 83.61, 164.93],
            "Hit-4": [60.72, 65.66, 70.6, 77.66, 82.6, 88.25, 96.02, 103.78, 111.55, 120.02, 129.73, 141.14, 152.56, 163.98, 176.43],
            "Hit-5": [76.11, 27.44 * 3, 88.5, 32.45 * 3, 103.56, 36.88 * 3, 40.12 * 3, 43.37 * 3, 46.61 * 3, 150.45, 162.63, 176.94, 191.25, 205.56, 221.16],
            charge2: [117.65, 127.22, 136.8, 55 + 95.48, 160.06, 171, 186.05, 201.1, 216.14, 232.56, 251.38, 273.49, 295.62, 317.73, 341.86],
            "Charged Attack Stamina Cost": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Plunge DMG": [81.83, 88.49, 95.16, 104.67, 111.33, 118.94, 129.41, 139.88, 150.35, 161.76, 173.18, 184.6, 196.02, 207.44, 218.86],
            "Low Plunge DMG": [163.63, 176.95, 190.27, 209.3, 222.62, 237.84, 258.77, 279.7, 300.63, 323.46, 346.29, 369.12, 391.96, 414.79, 437.62],
            "High Plunge DMG": [204.39, 221.02, 237.66, 261.42, 278.06, 297.07, 323.21, 349.36, 375.5, 404.02, 432.54, 461.06, 489.57, 518.09, 546.61],
            HitCount: [1, 1, 2, 1, 3, 0],
            "Press Skill DMG": [192, 206.4, 220.8, 240, 254.4, 268.8, 288, 307.2, 326.4, 345.6, 364.8, 384, 408, 432, 456],
            "Press CD": [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            "Hold Skill DMG": [260.8, 280.36, 299.92, 326, 345.56, 365.12, 391.2, 417.28, 443.36, 469.44, 495.52, 521.6, 554.2, 586.8, 619.4],
            "CD (hold)": [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
            "Slashing DMG": [262.4, 282.08, 301.76, 328, 347.68, 367.36, 393.6, 419.84, 446.08, 472.32, 498.56, 524.8, 557.6, 590.4, 623.2],
            DoT: [120, 129, 138, 150, 159, 168, 180, 192, 204, 216, 228, 240, 255, 270, 285],
            "Additional Elemental DMG": [36, 38.7, 41.4, 45, 47.7, 50.4, 54, 57.6, 61.2, 64.8, 68.4, 72, 76.5, 81, 85.5],
            Duration: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Energy Cost": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
        },
        Yoimiya: {
            "Hit-1": [71.28, 76.14, 81, 87.48, 92.34, 98.02, 105.3, 112.58, 119.88, 127.18, 134.46, 141.76, 149.04, 156.34, 163.62],
            "Hit-2": [68.38, 73.04, 77.7, 83.92, 88.58, 94.02, 101.01, 108, 115, 121.99, 128.98, 135.98, 142.97, 149.96, 156.95],
            "Hit-3": [88.89, 94.95, 101.01, 109.09, 115.15, 122.22, 131.31, 140.4, 149.49, 158.59, 167.68, 176.77, 185.86, 194.95, 204.04],
            "Hit-4": [92.84, 99.18, 105.5, 113.94, 120.28, 127.66, 137.16, 146.64, 156.14, 165.64, 175.14, 184.62, 194.12, 203.62, 213.12],
            "Hit-5": [105.86, 113.08, 120.3, 129.92, 137.14, 145.56, 156.39, 167.22, 178.04, 188.87, 199.7, 210.53, 221.35, 232.18, 243.01],
            charge1: [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3],
            charge2: [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5],
            "Kindling Arrow DMG": [16.4, 17.63, 18.86, 20.5, 21.73, 22.96, 24.6, 26.24, 27.88, 29.52, 31.16, 32.8, 34.85, 36.9, 38.95],
            "Plunge DMG": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98],
            "Low Plunge DMG": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9],
            "High Plunge DMG": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59],
            HitCount: [2, 1, 1, 2, 1, 0],
            "Blazing Arrow DMG": [137.91, 140.18, 142.45, 145.4, 147.67, 149.94, 152.89, 155.84, 158.79, 161.74, 164.7, 167.65, 170.6, 173.55, 176.5],
            Duration: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            CD: [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
            "Burst DMG": [127.2, 136.74, 146.28, 159, 168.54, 178.08, 190.8, 203.52, 216.24, 228.96, 241.68, 254.4, 270.3, 286.2, 302.1],
            "Aurous Blaze Explosion DMG": [122, 131.15, 140.3, 152.5, 161.65, 170.8, 183, 195.2, 207.4, 219.6, 231.8, 244, 259.25, 274.5, 289.75],
            Duration: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            CD: [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            "Energy Cost": [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60]
        },
        Sayu: {
            "Hit-1": [72.24, 78.12, 84, 92.4, 98.28, 105, 114.24, 123.48, 132.72, 142.8, 154.35, 167.93, 181.52, 195.1, 209.92],
            "Hit-2": [71.38, 77.19, 83, 91.3, 97.11, 103.75, 112.88, 122.01, 131.14, 141.1, 152.51, 165.93, 179.35, 192.78, 207.42],
            "Hit-3": [86.86, 93.94, 101, 111.1, 118.18, 126.26, 137.36, 148.46, 159.58, 171.7, 185.58, 201.92, 218.26, 234.58, 252.4],
            "Hit-4": [98.13, 106.11, 114.1, 125.51, 133.5, 142.63, 155.18, 167.73, 180.28, 193.97, 209.66, 228.11, 246.56, 265.01, 285.14],
            charge1: [62.55, 67.64, 72.73, 80, 85.09, 90.91, 98.91, 106.91, 114.91, 123.64, 133.64, 145.4, 157.16, 168.92, 181.75],
            charge2: [113.09, 122.3, 131.5, 144.65, 153.86, 164.38, 178.84, 193.31, 207.77, 223.55, 241.63, 262.89, 284.16, 305.42, 328.62],
            "Charged Attack Stamina Cost": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
            "Max Duration": [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
            "Plunge DMG": [74.59, 80.66, 86.73, 95.4, 101.47, 108.41, 117.95, 127.49, 137.03, 147.44, 157.85, 168.26, 178.66, 189.07, 199.48],
            "Low Plunge DMG": [149.14, 161.28, 173.42, 190.77, 202.91, 216.78, 235.86, 254.93, 274.01, 294.82, 315.63, 336.44, 357.25, 378.06, 398.87],
            "High Plunge DMG": [186.29, 201.45, 216.62, 238.28, 253.44, 270.77, 294.6, 318.42, 342.25, 368.25, 394.24, 420.23, 446.23, 472.22, 498.21],
            HitCount: [1, 1, 2, 1, 0, 0],
            "Fuufuu Windwheel DMG": [36, 38.7, 41.4, 45, 47.7, 50.4, 54, 57.6, 61.2, 64.8, 68.4, 72, 76.5, 81, 85.5],
            "Press Fuufuu Whirlwind Kick DMG": [158.4, 170.28, 182.16, 198, 209.88, 221.76, 237.6, 253.44, 269.28, 285.12, 300.96, 316.8, 336.6, 356.4, 376.2],
            "Hold Fuufuu Whirlwind Kick DMG": [217.6, 233.92, 250.24, 272, 288.32, 304.64, 326.4, 348.16, 369.92, 391.68, 413.44, 435.2, 462.4, 489.6, 516.8],
            "Fuufuu Windwheel Elemental DMG": [16.8, 18.06, 19.32, 21, 22.26, 23.52, 25.2, 26.88, 28.56, 30.24, 31.92, 33.6, 35.7, 37.8, 39.9],
            "Fuufuu Whirlwind Kick Elemental DMG": [76.16, 81.87, 87.58, 95.2, 100.91, 106.62, 114.24, 121.86, 129.47, 137.09, 144.7, 152.32, 161.84, 171.36, 180.88],
            "Max Duration (Hold)": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            "Burst Activation DMG": [116.8, 125.56, 134.32, 146, 154.76, 163.52, 175.2, 186.88, 198.56, 210.24, 221.92, 233.6, 248.2, 262.8, 277.4, 0],
            "Burst Activation Healing Mult": [92.16, 99.07, 105.98, 115.2, 122.11, 129.02, 138.24, 147.46, 156.67, 165.89, 175.1, 184.32, 195.84, 207.36, 218.88],
            "Burst Activation Healing Flat": [577, 635, 698, 765, 837, 914, 996, 1083, 1174, 1270, 1371, 1477, 1588, 1703, 1824],
            "Muji-Muji Daruma DMG": [52, 55.9, 59.8, 65, 68.9, 72.8, 78, 83.2, 88.4, 93.6, 98.8, 104, 110.5, 117, 123.5, 0],
            "Muji-Muji Daruma Healing Mult": [79.87, 85.86, 91.85, 99.84, 105.83, 111.82, 119.81, 127.8, 135.78, 143.77, 151.76, 159.74, 169.73, 179.71, 189.7],
            "Muji-Muji Daruma Healing Flat": [500, 550, 605, 663, 726, 792, 863, 938, 1017, 1101, 1188, 1280, 1376, 1476, 1580],
            Duration: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 0],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 0]
        },
        Shogun: {
            "Hit-1": [39.65, 42.87, 46.1, 50.71, 53.94, 57.63, 62.7, 67.77, 72.84, 78.37, 84.71, 92.16, 99.62, 107.07, 115.2],
            "Hit-2": [39.73, 42.97, 46.2, 50.82, 54.05, 57.75, 62.83, 67.91, 73, 78.54, 84.89, 92.36, 99.83, 107.3, 115.45],
            "Hit-3": [49.88, 53.94, 58, 63.8, 67.86, 72.5, 78.88, 85.26, 91.64, 98.6, 106.58, 115.95, 125.33, 134.71, 144.94],
            "Hit-4": [57.96, 62.68, 67.4, 74.14, 78.86, 84.26, 91.66, 99.08, 106.5, 114.58, 123.84, 134.74, 145.64, 156.54, 168.44],
            "Hit-5": [65.45, 70.77, 76.1, 83.71, 89.04, 95.13, 103.5, 111.87, 120.24, 129.37, 139.83, 152.14, 164.44, 176.75, 190.17],
            charge2: [99.59, 107.69, 115.8, 127.38, 135.49, 144.75, 157.49, 170.23, 182.96, 196.86, 212.78, 231.51, 250.23, 268.96, 289.38],
            "Charged Attack Stamina Cost": [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
            "Plunge DMG": [63.93, 69.14, 74.34, 81.77, 86.98, 92.93, 101.1, 109.28, 117.46, 126.38, 135.3, 144.22, 153.14, 162.06, 170.98],
            "Low Plunge DMG": [127.84, 138.24, 148.65, 163.51, 173.92, 185.81, 202.16, 218.51, 234.86, 252.7, 270.54, 288.38, 306.22, 324.05, 341.89],
            "High Plunge DMG": [159.68, 172.67, 185.67, 204.24, 217.23, 232.09, 252.51, 272.93, 293.36, 315.64, 337.92, 360.2, 382.48, 404.76, 427.04],
            HitCount: [1, 1, 1, 2, 1, 0],
            "Skill DMG": [117.2, 125.99, 134.78, 146.5, 155.29, 164.08, 175.8, 187.52, 199.24, 210.96, 222.68, 234.4, 249.05, 263.7, 278.35],
            "Coordinated ATK DMG": [42, 45.15, 48.3, 52.5, 55.65, 58.8, 63, 67.2, 71.4, 75.6, 79.8, 84, 89.25, 94.5, 99.75],
            Duration: [25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],
            "Elemental Burst DMG Bonus": [.22, .23, .24, .25, .26, .27, .28, .29, .3, .3, .3, .3, .3, .3, .3],
            CD: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            "Musou no Hitotachi Base DMG": [400.8, 430.86, 460.92, 501, 531.06, 561.12, 601.2, 641.28, 681.36, 721.44, 761.52, 801.6, 851.7, 901.8, 951.9],
            "Resolve Bonus": [3.89, 4.18, 4.47, 4.86, 5.15, 5.44, 5.83, 6.22, 6.61, 7, 7.39, 7.78, 8.26, 8.75, 9.23],
            "Resolve Bonus Mult": [.73, .78, .84, .91, .96, 1.02, 1.09, 1.16, 1.23, 1.31, 1.38, 1.45, 1.54, 1.63, 1.72],
            "Resolve Stacks Gained": [.15, .16, .16, .17, .17, .18, .18, .19, .19, .2, .2, .2, .2, .2, .2],
            "Hit-1 DMG": [44.74, 47.79, 50.84, 54.91, 57.96, 61.51, 66.09, 70.66, 75.24, 79.82, 84.39, 88.97, 93.54, 98.12, 102.69],
            "Hit-2 DMG": [43.96, 46.95, 49.95, 53.95, 56.94, 60.44, 64.94, 69.43, 73.93, 78.42, 82.92, 87.41, 91.91, 96.4, 100.9],
            "Hit-3 DMG": [53.82, 57.49, 61.16, 66.05, 69.72, 74, 79.51, 85.01, 90.52, 96.02, 101.53, 107.03, 112.54, 118.04, 123.55],
            "Hit-4 DMG": [30.89 + 30.98, 32.99 + 33.09, 35.1 + 35.2, 75.93, 80.14, 85.06, 91.39, 97.72, 51.95 + 52.1, 110.37, 116.7, 123.03, 129.35, 135.68, 142],
            "Hit-5 DMG": [73.94, 78.99, 84.03, 90.75, 95.79, 101.67, 109.24, 116.8, 124.36, 131.92, 139.48, 147.05, 154.61, 162.17, 169.73],
            "charge2 DMG": [135.96, 65.8 + 79.43, 154.5, 166.86, 176.13, 186.95, 200.85, 214.76, 228.66, 242.57, 256.47, 270.38, 284.28, 298.19, 141.4 + 170.69],
            "Charged Attack Stamina Cost": [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Musou Isshin Energy Restoration": [1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5, 2.5, 2.5, 2.5, 2.5, 2.5],
            "Musou Isshin Duration": [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
            CD: [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
            "Energy Cost": [90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90]
        },
        Kokomi: {
            "Hit-1": [68.38, 73.5, 78.63, 85.47, 90.6, 95.73, 102.56, 109.4, 116.24, 123.08, 129.91, 136.75, 145.3, 153.85, 162.39],
            "Hit-2": [61.54, 66.15, 70.77, 76.92, 81.54, 86.15, 92.31, 98.46, 104.62, 110.77, 116.92, 123.08, 130.77, 138.46, 146.15],
            "Hit-3": [94.31, 101.38, 108.45, 117.88, 124.95, 132.03, 141.46, 150.89, 160.32, 169.75, 179.18, 188.61, 200.4, 212.19, 223.98],
            charge2: [148.32, 159.44, 170.57, 185.4, 196.52, 207.65, 222.48, 237.31, 252.14, 266.98, 281.81, 296.64, 315.18, 333.72, 352.26],
            "Charged Attack Stamina Cost": [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
            "Plunge DMG": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98],
            "Low Plunge DMG": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9],
            "High Plunge DMG": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59],
            HitCount: [1, 1, 1, 0, 0, 0],
            "Regeneration Mult": [4.4, 4.73, 5.06, 5.5, 5.83, 6.16, 6.6, 7.04, 7.48, 7.92, 8.36, 8.8, 9.35, 9.9, 10.45],
            "Regeneration Flat": [424, 466, 512, 561, 614, 671, 731, 795, 862, 932, 1006, 1084, 1165, 1250, 11338],
            "Ripple DMG": [109.19, 117.38, 125.57, 136.49, 144.68, 152.87, 163.79, 174.7, 185.62, 196.54, 207.46, 218.38, 232.03, 245.68, 259.33],
            Duration: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Burst DMG": [10.42, 11.2, 11.98, 13.02, 13.8, 14.58, 15.62, 16.67, 17.71, 18.75, 19.79, 20.83, 22.13, 23.44, 24.74],
            "Normal Attack DMG Bonus": [4.84, 5.2, 5.57, 6.05, 6.41, 6.78, 7.26, 7.74, 8.23, 8.71, 9.2, 9.68, 10.29, 10.89, 11.5],
            "charge2 Bonus": [6.78, 7.28, 7.79, 8.47, 8.98, 9.49, 10.16, 10.84, 11.52, 12.2, 12.87, 13.55, 14.4, 15.25, 16.09],
            "Bake-Kurage DMG Bonus": [7.1, 7.63, 8.16, 8.87, 9.4, 9.93, 10.64, 11.35, 12.06, 12.77, 13.48, 14.19, 15.08, 15.97, 16.85],
            "HP Regeneration Per Hit Mult": [.81, .87, .93, 1.01, 1.07, 1.13, 1.21, 1.29, 1.37, 1.45, 1.54, 1.62, 1.72, 1.82, 1.92],
            "HP Regeneration Per Hit Flat": [77, 85, 93, 102, 112, 122, 133, 144, 157, 169, 183, 197, 212, 227, 243],
            Duration: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            CD: [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
            "Energy Cost": [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70]
        },
        Aloy: {
            "Hit-1": [44.88, 47.94, 51, 55.08, 58.14, 61.71, 66.3, 70.89, 75.48, 80.07, 84.66, 89.25, 93.84, 98.43, 103.02],
            "Hit-2": [43.12, 46.06, 49, 52.92, 55.86, 59.29, 63.7, 68.11, 72.52, 76.93, 81.34, 85.75, 90.16, 94.57, 98.98],
            "Hit-3": [52.8, 56.4, 60, 64.8, 68.4, 72.6, 78, 83.4, 88.8, 94.2, 99.6, 105, 110.4, 115.8, 121.2],
            "Hit-4": [65.65, 70.12, 74.6, 80.57, 85.04, 90.27, 96.98, 103.69, 110.41, 117.12, 123.84, 130.55, 137.26, 143.98, 150.69],
            charge1: [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3],
            charge2: [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5],
            "Plunge DMG": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98],
            "Low Plunge DMG": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9],
            "High Plunge DMG": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59],
            HitCount: [2, 1, 1, 1, 0, 0],
            "Freeze Bomb DMG": [177.6, 190.92, 204.24, 222, 235.32, 248.64, 266.4, 284.16, 301.92, 319.68, 337.44, 355.2, 377.4, 399.6, 421.8],
            "Chillwater Bomblets": [40, 43, 46, 50, 53, 56, 60, 64, 68, 72, 76, 80, 85, 90, 95],
            "ATK Decrease": [12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 15, 15, 15],
            "ATK Decrease Duration": [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            "Coil 1-Stack DMG Bonus": [5.85, 6.2, 6.54, 7, 7.35, 7.7, 8.16, 8.61, 9.07, 9.52, 9.98, 10.43, 10.89, 11.34, 11.8],
            "Coil 2-Stack DMG Bonus": [11.69, 12.39, 13.09, 14, 14.7, 15.4, 16.31, 17.22, 18.13, 19.04, 19.95, 20.86, 21.77, 22.68, 23.59],
            "Coil 3-Stack DMG Bonus": [17.54, 18.58, 19.64, 21, 22.05, 23.1, 24.47, 25.83, 27.2, 28.56, 29.93, 31.29, 32.66, 34.02, 35.39],
            "Rushing Ice Normal Attack DMG Bonus": [29.23, 30.98, 32.73, 35, 36.75, 38.5, 40.78, 43.05, 45.33, 47.6, 49.88, 52.15, 54.43, 56.7, 58.98],
            "Rushing Ice Duration": [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Burst DMG": [359.2, 386.14, 413.08, 449, 475.94, 502.88, 538.8, 574.72, 610.64, 646.56, 682.48, 718.4, 763.3, 808.2, 853.1, 0],
            CD: [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 0],
            "Energy Cost": [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 0]
        },
        Sara: {
            "Hit-1": [36.89, 39.9, 42.9, 47.19, 50.19, 53.63, 58.34, 63.06, 67.78, 72.93, 78.08, 83.23, 88.37, 93.52, 98.67],
            "Hit-2": [38.7, 41.85, 45, 49.5, 52.65, 56.25, 61.2, 66.15, 71.1, 76.5, 81.9, 87.3, 92.7, 98.1, 103.5],
            "Hit-3": [48.5, 52.45, 56.4, 62.04, 65.99, 70.5, 76.7, 82.91, 89.11, 95.88, 102.65, 109.42, 116.18, 122.95, 129.72],
            "Hit-4": [50.4, 54.5, 58.6, 64.46, 68.56, 73.25, 79.7, 86.14, 92.59, 99.62, 106.65, 113.68, 120.72, 127.75, 134.78],
            "Hit-5": [58.05, 62.78, 67.5, 74.25, 78.97, 84.38, 91.8, 99.23, 106.65, 114.75, 122.85, 130.95, 139.05, 147.15, 155.25],
            charge1: [43.86, 47.43, 51, 56.1, 59.67, 63.75, 69.36, 74.97, 80.58, 86.7, 92.82, 98.94, 105.06, 111.18, 117.3],
            charge2: [124, 133.3, 142.6, 155, 164.3, 173.6, 186, 198.4, 210.8, 223.2, 235.6, 248, 263.5, 279, 294.5],
            "Plunge DMG": [56.83, 61.45, 66.08, 72.69, 77.31, 82.6, 89.87, 97.14, 104.41, 112.34, 120.27, 128.2, 136.12, 144.05, 151.98],
            "Low Plunge DMG": [113.63, 122.88, 132.13, 145.35, 154.59, 165.17, 179.7, 194.23, 208.77, 224.62, 240.48, 256.34, 272.19, 288.05, 303.9],
            "High Plunge DMG": [141.93, 153.49, 165.04, 181.54, 193.1, 206.3, 224.45, 242.61, 260.76, 280.57, 300.37, 320.18, 339.98, 359.79, 379.59],
            HitCount: [1, 1, 1, 1, 1, 0],
            "Ambush DMG": [125.76, 135.19, 144.62, 157.2, 166.63, 176.06, 188.64, 201.22, 213.79, 226.37, 238.94, 251.52, 267.24, 282.96, 298.68],
            "ATK Bonus Ratio": [42.96, 46.18, 49.4, 53.7, 56.92, 60.14, 64.44, 68.74, 73.03, 77.33, 81.62, 85.92, 91.29, 96.66, 102.03],
            "ATK Bonus Duration": [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            CD: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            "Titanbreaker DMG": [409.6, 440.32, 471.04, 512, 542.72, 573.44, 614.4, 655.36, 696.32, 737.28, 778.24, 819.2, 870.4, 921.6, 972.8],
            "Stormcluster DMG": [34.12, 36.68, 39.24, 42.65, 45.21, 47.77, 51.18, 54.59, 58, 61.42, 64.83, 68.24, 72.51, 76.77, 81.04],
            CD: [20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
            "Energy Cost": [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80]
        }
    },
    TalentList = {
        Amber: {
            constellations: [{
                name: "One Arrow to Rule Them All",
                desc: "Fires 2 arrows per Aimed Shot. The second arrow deals 20% of the first arrow&#39s DMG.",
                calcStats: [{
                    stat: "2nd Arrow",
                    damage: e => .2 * e.charge1 / 100,
                    damageType: "ChargedAttackDMG",
                    damageElement: "Default"
                }, {
                    stat: "2nd Fully Charged",
                    damage: e => .2 * e.charge2 / 100,
                    damageType: "ChargedAttackDMG",
                    damageElement: "Elemental"
                }]
            }, {
                name: "Bunny Triggered",
                desc: "Baron Bunny, new and improved! Hitting Baron Bunny&#39s foot with a fully-charged Aimed Shot manually detonates it.  Explosion via manual detonation deals 200% additional DMG."
            }, {
                name: "It Burns!",
                desc: "Increases the Level of Fiery Rain by 3. Maximum upgrade level is 15."
            }, {
                name: "It&#39s Not Just Any Doll...",
                desc: "Decreases Explosive Puppet&#39s CD by 20%. Adds 1 additional charge."
            }, {
                name: "It&#39s Baron Bunny!",
                desc: "Increase the Level of Explosive Puppet by 3. Maximum upgrade level is 15."
            }, {
                name: "Wildfire",
                desc: "Fiery Rain increases all party members&#39 Movement SPD by 15% and Base ATK by 15% for 10s.",
                toggle: [new StatModifier("ATKPercent", .15)]
            }],
            passives: [{
                name: "Every Arrow Finds Its Target",
                desc: "Increases the CRIT Rate of Fiery Rain by 10% and widens its AoE by 30%.",
                burst: {
                    effect: [new StatModifier("CritRate", .1)]
                }
            }, {
                name: "Precise Shot",
                desc: "Aimed Shot hits on weak spots increase Base ATK by 15% for 10s.",
                toggle: [new StatModifier("ATKPercent", .15)]
            }],
            skill: {
                name: "Explosive Puppet",
                desc: "Baron Bunny  Continuously taunts the enemy, drawing their fire.  When destroyed or when its timer expires, Baron Bunny explodes, dealing AoE Pyro DMG.",
                calcStats: [{
                    stat: "Bunny HP",
                    value: e => e.sVal("Inherited HP") * e.HP,
                    translationKey: "Inherited HP"
                }, {
                    stat: "Explosion DMG",
                    damage: e => e.sVal("Explosion DMG")
                }, {
                    stat: "Manual Detonation",
                    damage: e => e.sVal("Explosion DMG") + (e.cLevel >= 2 ? 2 : 0)
                }]
            },
            burst: {
                name: "Fiery Rain",
                desc: "Fires of a shower of arrows, dealing continuous AoE Pyro DMG.",
                calcStats: [{
                    stat: "Fiery Rain DMG Per Wave",
                    damage: e => e.bVal("DMG per Wave")
                }, {
                    stat: "Total Fiery Rain DMG",
                    damage: e => e.bVal("Total DMG")
                }, {
                    stat: "Total Fiery Rain DPS",
                    damage: e => e.bVal("Total DMG") / 2,
                    translationKey: "Total Fiery Rain DMG",
                    translationSuffix: " DPS"
                }, {
                    stat: "Energy Cost",
                    value: e => 40 / e.EnergyRecharge
                }]
            }
        },
        Barbara: {
            constellations: [{
                name: "Gleeful Songs",
                desc: "Barbara regenerates 1 Energy every 10s."
            }, {
                name: "Vitality Burst",
                desc: "Decreases the CD of Let the Show Begin by 15%.  During the ability&#39s duration, the current character gains 15% Hydro DMG Bonus (Toggle).",
                toggle: [new StatModifier("HydroDMG", .15)]
            }, {
                name: "Star of Tomorrow",
                desc: "Increases the Level of Shining Miracle by 3. Maximum upgrade level is 15."
            }, {
                name: "Attentiveness be My Power",
                desc: "Every enemy hit by Barbara&#39s Charged Attack regenerates 1 Energy for her. A maximum of 5 energy can be regenerated in this manner with any one Charged Attack."
            }, {
                name: "The Purest Companionship",
                desc: "Increase the Level of Let the Show Begin by 3. Maximum upgrade level is 15."
            }, {
                name: "Dedicating Everything to You",
                desc: "When Barbara is not on the field, and the character in play falls:   Automatically revives this character.  Fully regenerates this characters HP by 100 %.   This effect can only occur once every 15 mins."
            }],
            passives: [{
                name: "Glorious Season",
                desc: "The Stamina Consumption of characters within Let the Show Begin&#39s Melody Loop is reduced by 12%."
            }, {
                name: "Encore",
                desc: "When a character gains an Elemental Orb/Particle, the duration of Let the Show Begin&#39s Melody Loop is extended by 1s.  The maximum extension is 5s."
            }],
            skill: {
                name: "Let the Show Begin",
                desc: "Summons water droplets resembling musical notes that form a Melody Loop, dealing Hydro DMG to surrounding enemies and afflicting them with the Wet status. Barbara&#39s Normal Attacks heal all party members and nearby allied characters for a certain amount of HP, which scales with Barbara&#39s Max HP. Her Charged Attack generates 4 times the amount of healing. Regenerates a certain amount of the current character&#39s HP at regular intervals. Applies the Wet status to the character and enemies who come in contact with them. ",
                calcStats: [{
                    stat: "Heal Per Hit",
                    value: e => (e.sVal("Heal Per Hit Mult") * e.HP + e.sVal("Heal Per Hit Flat")) * (1 + e.Heal)
                }, {
                    stat: "Continuous Heal",
                    value: e => (e.sVal("Continuous Heal Mult") * e.HP + e.sVal("Continuous Heal Flat")) * (1 + e.Heal)
                }, {
                    stat: "Droplet DMG",
                    damage: e => e.sVal("Droplet DMG")
                }]
            },
            burst: {
                name: "Shining Miracle",
                desc: "Heals friendly forces and all parties for a large amount of HP that scales with Barbara&#39s Max HP.",
                calcStats: [{
                    stat: "Healing Amount",
                    value: e => (e.bVal("Heal Mult") * e.HP + e.bVal("Heal Flat")) * (1 + e.Heal)
                }, {
                    stat: "Energy Cost",
                    value: e => 80 / e.EnergyRecharge
                }]
            }
        },
        Beidou: {
            constellations: [{
                name: "Sea Beast&#39s Scourge",
                desc: "When Stormbreaker is used:  Creates a shield that absorbs up to 16% of Beidou&#39s Max HP for 15s.  This shield absorbs Electro DMG 250% more effectively."
            }, {
                name: "Upon the Turbulent Sea, the Thunder Arises",
                desc: "Stormbreaker&#39s arc lightning can jump 2 additional targets."
            }, {
                name: "Summoner of Storm",
                desc: "Increases the Level of Tidecaller by 3. Maximum upgrade level is 15."
            }, {
                name: "Stunning Revenge",
                desc: "Within 10s of taking DMG, Beidou&#39s Normal Attacks gain 20% additional Electro DMG.",
                calcStats: [{
                    stat: "Additional DMG",
                    damage: e => .2,
                    damageElement: "ElectroDMG"
                }, {
                    stat: "Additional DPS",
                    damage: e => 1 / e.comboTime,
                    damageElement: "ElectroDMG"
                }]
            }, {
                name: "Crimson Tidewalker",
                desc: "Increase the Level of Stormbreaker by 3. Maximum upgrade level is 15."
            }, {
                name: "Bane of Evil",
                desc: "During the duration of Stormbreaker, the Electro RES of surrounding enemies is decreased by 15%.",
                toggle_debuff: [new StatModifier("ElectroDMG", .15)]
            }],
            passives: [{
                name: "Retribution",
                desc: "Counterattacking with Tidecaller at the precise moment when the character is hit grants the maximum DMG Bonus."
            }, {
                name: "Leviathan&#39s Protection",
                desc: "Gain the following effects for 10s after unleashing Tidecaller with its maximum DMG Bonus:  DMG dealt by Normal and Charged Attacks is increased by 15%. ATK SPD of Normal and Charged Attacks is increased by 15%.\\r Greatly reduced delay before unleashing Charged Attacks. ",
                toggle: [new StatModifier("NormalAttackDMG", .15), new StatModifier("ChargedAttackDMG", .15), new StatModifier("AttackSpeed", .15)]
            }],
            skill: {
                name: "Tidecaller",
                desc: "Accumulating the power of lightning, Beidou swings her blade forward fiercely, dealing Electro DMG. Hold Lifts her weapon up as a shield. Attacks using the energy stored within the greatsword upon release or once this ability&#39s duration expires, dealing Electro DMG. DMG dealt scales with the number of times Beidou is attacked in the skill&#39s duration. The greatest DMG Bonus will be attained once this effect is triggered twice.  The shield possesses the following properties:  Has 250% Electro DMG Absorption Efficiency. Applies the Electro element to Beidou upon activation.",
                calcStats: [{
                    stat: "Shield DMG Absorption",
                    value: e => (e.sVal("Shield Mult") * e.HP + e.sVal("Shield Flat")) * (1 + e.PowerfulShield)
                }, {
                    stat: "Base DMG",
                    damage: e => e.sVal("Base DMG")
                }, {
                    stat: "DMG per Hit Taken",
                    damage: e => e.sVal("DMG per Hit Taken")
                }, {
                    stat: "Max DMG",
                    damage: e => e.sVal("Base DMG") + 2 * e.sVal("DMG per Hit Taken")
                }]
            },
            burst: {
                name: "Stormbreaker",
                desc: "Recalling her slaying of the great beast Haishan. Beidou calls upon that monstrous strength and the lightning to create a Thunderbeast&#39s Targe around herself. When Normal and Charged Attacks hit, they create a lightning discharge that can jump between enemies, dealing Electro DMG.   Increases the character&#39s resistance to interruption, and decreases DMG taken. ",
                calcStats: [{
                    stat: "Burst DMG",
                    damage: e => e.bVal("Burst DMG")
                }, {
                    stat: "Discharge DMG",
                    damage: e => e.bVal("Discharge DMG")
                }, {
                    stat: "DMG Reduction",
                    value: e => e.bVal("DMG Reduction")
                }, {
                    stat: "Energy Cost",
                    value: e => 80 / e.EnergyRecharge
                }]
            }
        },
        Bennett: {
            constellations: [{
                name: "Grand Expectation",
                desc: "Fantastic Voyage&#39s ATK increases no longer has an HP restriction, and gains an additional 20% Base ATK."
            }, {
                name: "Impasse Conqueror",
                desc: "When Bennett&#39s HP falls below 70%, his Energy Recharge is increased by 30%.",
                toggle: [new StatModifier("EnergyRecharge", .3)]
            }, {
                name: "Unstoppable Fervor",
                desc: "Increases the Level of Passion Overload by 3. Maximum upgrade level is 15."
            }, {
                name: "Unexpected Odyssey",
                desc: "Using a Normal Attack when executing the second attack of Passion Overload&#39s Charge Level 1 allows an additional attack to be performed. This additional attack does 135% of the second attack&#39s DMG."
            }, {
                name: "True Explorer",
                desc: "Increase the Level of Fantastic Voyage by 3. Maximum upgrade level is 15."
            }, {
                name: "Fire Ventures with Me",
                desc: "Sword, Claymore, or Polearm- wielding characters inside Fantastic Voyage&#39s radius gain a 15% Pyro DMG Bonus. Normal and Charged Attacks now do Pyro DMG.",
                toggle: [new StatModifier("PyroDMG", .15), new StatModifier("NormalType", "PyroDMG")]
            }],
            passives: [{
                name: "Rekindle",
                desc: "Decreases Passion Overload&#39s CD by 20%."
            }, {
                name: "Fearnaught",
                desc: "When inside the area created by Fantastic Voyage, Passion Overload takes on the following effects:   CD is reduced by 50%.   Bennett will not be launched by the effects of Charge Level 2.  "
            }],
            skill: {
                name: "Passion Overload",
                desc: "Bennett puts all his fire and passion for adventuring into his sword. Press -- A single, swift flame strike that deals Pyro DMG.   Hold(Short) --  Charges up, resulting in different effects when unleashed based on the Charge Level. Level 1: Strikes twice, dealing Pyro DMG and launching enemies.   Level 2: Unleashes 3 consecutive attacks that deal impressive Pyro DMG, but the last attack triggers an explosion that launches both Bennet and the enemy.    Bennett takes no damage from being launched. ",
                calcStats: [{
                    stat: "Press DMG",
                    damage: e => e.sVal("Press DMG")
                }, {
                    stat: "Charge Level 1 DMG",
                    damage: e => e.sVal("Charge Level 1") + (e.cLevel >= 4 ? 1.35 * e.sVal("Charge-1 Hit-2") : 0)
                }, {
                    stat: "Charge Level 2 DMG",
                    damage: e => e.sVal("Charge Level 2")
                }, {
                    stat: "Explosion DMG",
                    damage: e => e.sVal("Explosion DMG")
                }]
            },
            burst: {
                name: "Fantastic Voyage",
                desc: "Bennett leaps towards the enemy and performs a plunging attack, dealing Pyro DMG, creating an Inspiration Field.   Inspiration Field     If the health of a character in the circle is equal to or falls below 70 %, their health will continuously regenerate.Regeneration scales based on Bennett&#39s Max HP. If the health of a character in the circle is higher than 70%, they gain an ATK Bonus that is based on Bennett&#39s Base ATK. Applies the Pyro element to characters within the Field. ",
                calcStats: [{
                    stat: "Burst DMG",
                    damage: e => e.bVal("Burst DMG")
                }, {
                    stat: "Continuous Renegeration Per Sec",
                    value: e => (e.bVal("Continuous Regeneration Per Sec Mult") * e.HP + e.bVal("Continuous Regeneration Per Sec Flat")) * (1 + e.Heal)
                }, {
                    stat: "Energy Cost",
                    value: e => 60 / e.EnergyRecharge
                }],
                varToggle: e => [new StatModifier("ATKPercent", e.bVal("ATK Bonus Ratio") + (e.cLevel >= 1 ? .2 : 0))]
            }
        },
        Chongyun: {
            constellations: [{
                name: "Ice Unleashed",
                desc: "The last attack of Chongyun&#39s Normal Attack combo releases 3 ice blades. Each blade deals 50% of Chongyun&#39s ATK as Cryo DMG to all enemies in its path.",
                calcStats: [{
                    stat: "Ice Blade",
                    damage: e => .5,
                    damageType: "NormalAttackDMG",
                    damageElement: "CryoDMG"
                }]
            }, {
                name: "Atmospheric Revolution",
                desc: "Elemental Skills and Elemental Bursts cast within the Frost Field created by Spirit Blade - Chongyun&#39s Layered Frost have their CD time decreased by 15%."
            }, {
                name: "Cloudburst",
                desc: "Increases the Level of Spirit Blade - Cloud-parting Star by 3. Maximum upgrade level is 15."
            }, {
                name: "Frozen Skies",
                desc: "Chongyun regenerates 1 Energy every time he hits an enemy affected by Cold or Frozen status effects.  This effect can only occur once every 2s."
            }, {
                name: "The True Path",
                desc: "Increases the level of Spirit Blade - Chongyun&#39s Layered Frost by 3. Maximum upgrade level is 15."
            }, {
                name: "Rally of Four Blades",
                desc: "Spirit Blade - Cloud-parting Star deals 15% more DMG to enemies with a lower percentage of their Max HP remaining than Chongyun.  This skill will also summon 1 additional spirt blade.",
                burst: {
                    toggle: [new StatModifier("AllDMG", .15)]
                }
            }],
            passives: [{
                name: "Steady Breathing",
                desc: "Sword, Claymore, or Polearm- wielding characters within the field created by Spirit Blade - Chonghua&#39s Layered Frost have their Normal Attack SPD increased by 8%.",
                toggle: [new StatModifier("AttackSpeed", .08)]
            }, {
                name: "Rimechaser Blade",
                desc: "When the field created by Spirit Blade - Chonghua&#39s Layered Frost disappears, another spirit will be summoned to strike nearby enemies, dealing 100% of Chonghua&#39s Layered Frost&#39s Skill DMG as AoE Cryo DMG. Enemies hit by this blade will have their Cryo RES decreased by 10% for 8s.",
                calcStats: [{
                    stat: "Disappear DMG",
                    damage: e => e.sVal("Cryo Explosion"),
                    damageType: "ElementalSkillDMG",
                    damageElement: "CryoDMG"
                }],
                toggle_debuff: [new StatModifier("CryoDMG", .1)]
            }],
            skill: {
                name: "Spirit Blade - Chonghua&#39s Layered Frost",
                desc: "Chongyun strikes the ground with his greatsword,    causing a Cryo explosion in a circular AoE in front of him that deals Cryo DMG.  After a short delay, the cold air created by the Cryo explosion will coalesce into a Chonghua Frost Field, within which all DMG done through Normal and Charged Attacks by Sword, Greatsword and Polearm - wielding characters will be converted to Cryo DMG.",
                calcStats: [{
                    stat: "Cryo Explosion",
                    damage: e => e.sVal("Cryo Explosion")
                }],
                toggle: [new StatModifier("NormalType", "CryoDMG")]
            },
            burst: {
                name: "Spirit Blade - Cloud-parting Star",
                desc: "Performing the secret hand seals,    Chongyun summons 3 giant spirit blades in mid - air that fall to the earth one by one after a short delay, exploding as they hit the ground.   When the spirit blades explode, they will deal AoE Cryo DMG and launch enemies.",
                calcStats: [{
                    stat: "Blade DMG",
                    damage: e => e.bVal("Blade DMG")
                }, {
                    stat: "Energy Cost",
                    value: e => 40 / e.EnergyRecharge
                }]
            }
        },
        Diluc: {
            constellations: [{
                name: "Conviction",
                desc: "Diluc deals 15% more DMG to enemies whose HP is above 50%.",
                toggle: [new StatModifier("AllDMG", .15)]
            }, {
                name: "Searing Ember",
                desc: "When Diluc takes DMG, his Base ATK increases by 10% and his ATK SPD increases by 5%.Lasts for 10s.  This effect can stack up to 3 times and can only occur once every 1.5s.",
                stack: [new StatModifier("ATKPercent", .1), new StatModifier("AttackSpeed", .05)],
                stackCount: 3
            }, {
                name: "Steel and Fire",
                desc: "Increases the Level of Searing Onslaught by 3. Maximum upgrade level is 15."
            }, {
                name: "Flowing Flame",
                desc: "Casting Searing Onslaught in sequence greatly increases damage dealt.  Within 2s of using Searing Onslaught, casting the next Searing Onslaught in the combo deals 40% additional DMG.This effect lasts for the next 2s.",
                skill: {
                    toggle: [new StatModifier("ElementalSkillDMG", .4)]
                }
            }, {
                name: "Phoenix, Harbinger of Dawn",
                desc: "Increases the level of Dawn by 3. Maximum upgrade level is 15."
            }, {
                name: "Flaming Sword, Nemesis of Dark",
                desc: "After casting Searing Onslaught, the next 2 Normal Attacks within the next 6s will have their DMG and ATK SPD increased by 30%.  Additionally, Searing Onslaught will not interrupt the Normal Attack combo.",
                toggle: [new StatModifier("NormalAttackDMG", .3), new StatModifier("AttackSpeed", .3)]
            }],
            passives: [{
                name: "Relentless",
                desc: "Diluc&#39s Charged Attack Stamina Cost is decreased by 50%, and its duration is increased by 3s."
            }, {
                name: "Blessing of Phoenix",
                desc: "The Pyro Enchantment provided by Dawn lasts for 4s longer. Additionally, Diluc gains 20% Pyro DMG Bonus during the duration of this effect.",
                toggle: [new StatModifier("PyroDMG", .2)]
            }],
            skill: {
                name: "Searing Onslaught",
                desc: "Performs a forward slash that deals Pyro DMG. This skill can be used 3 times consecutively. Enters CD if not cast again within a short period.",
                calcStats: [{
                    stat: "1-Hit DMG",
                    damage: e => e.sVal("1-Hit DMG")
                }, {
                    stat: "2-Hit DMG",
                    damage: e => e.sVal("2-Hit DMG")
                }, {
                    stat: "3-Hit DMG",
                    damage: e => e.sVal("3-Hit DMG")
                }, {
                    stat: "Skill DPS",
                    damage: e => (e.sVal("1-Hit DMG") + e.sVal("2-Hit DMG") + e.sVal("3-Hit DMG")) / 10
                }]
            },
            burst: {
                name: "Dawn",
                desc: "Releases intense flames to knock nearby enemies back, dealing Pyro DMG. The flames then converge into the weapon, summoning a Phoenix that flies forward and deals massive Pyro DMG to all enemies in its path. The Phoenix explodes upon reaching its destination, causing a large amount of AoE Pyro DMG. The searing flames that run down his blade cause Diluc&#39s Normal and Charged Attacks to deal Pyro DMG for a time.",
                calcStats: [{
                    stat: "Slashing DMG",
                    damage: e => e.bVal("Slashing DMG")
                }, {
                    stat: "DoT",
                    damage: e => e.bVal("DoT")
                }, {
                    stat: "Explosion DMG",
                    damage: e => e.bVal("Explosion DMG")
                }, {
                    stat: "Energy Cost",
                    value: e => 40 / e.EnergyRecharge
                }],
                toggle: [new StatModifier("NormalType", "PyroDMG")]
            }
        },
        Diona: {
            constellations: [{
                name: "A Lingering Flavor",
                desc: "Regenerates 15 Energy for Diona after the effects of Signature Mix end."
            }, {
                name: "Shaken, Not Purred",
                desc: "Increases Icy Paws&#39 DMG by 15%, and increases its shield&#39s DMG Absorption by 15%. Additionally, when paws hit their targets, creates a shield for other nearby characters on the field with 50% of the Icy Paws shield&#39s DMG Absorption for 5s.",
                skill: {
                    effect: [new StatModifier("AllDMG", .15)]
                }
            }, {
                name: "A-Another Round?",
                desc: "Increases the Level of Signature Mix by 3. Maximum upgrade level is 15."
            }, {
                name: "Wine Industry Slayer",
                desc: "Within the radius of Signature Mix, Diona&#39s charge time for aimed shots is reduced by 60%."
            }, {
                name: "Double Shot, On The Rocks",
                desc: "Increases the level of Icy Paws by 3. Maximum upgrade level is 15."
            }, {
                name: "Cat&#39s Tail Closing Time",
                desc: "Characters within Signature Mix&#39s radius will gain the following effects based on their HP amounts:",
                "switch": [{
                    option: "Increasing Incoming Healing Bonus by 30% when HP falls below or is equal to 50%.",
                    effect: [new StatModifier("IncomingHeal", .3)]
                }, {
                    option: "Elemental Mastery is increased by 200 when HP is above 50%.",
                    effect: [new StatModifier("ElementalMastery", 200)]
                }]
            }],
            passives: [{
                name: "Cat&#39s Tail Secret Menu",
                desc: "Characters shielded by Icy Paws have their Movement SPD increased by 10% and their Stamina Consumption decreased by 10%."
            }, {
                name: "Drunkard&#39s Farce",
                desc: "Opponents who enter the AoE of Signature Mix have 10% decreased ATK for 15s."
            }],
            skill: {
                name: "Icy Paws",
                desc: "Fires an Icy Paw that deals Cryo DMG to opponents and forms a shield on hit. The shield&#39s DMG Absorption scales based on Diona&#39s Max HP,    and its duration scales off the number of Icy Paws that hit their target.   Press   Rapidly fires off 2 Icy Paws.   Hold   Dashes back quickly before firing five Icy Paws. The shield created by a Hold attack will gain a 75 % DMG Absorption Bonus.   The shield has a 250 % Cryo DMG Absorption Bonus, and will cause your active character to become affected by Cryo at the point of formation for a short duration. ",
                calcStats: [{
                    stat: "DMG per Paw",
                    damage: e => e.sVal("DMG per Paw")
                }, {
                    stat: "5 Paw DMG",
                    damage: e => 5 * e.sVal("DMG per Paw")
                }, {
                    stat: "Shield",
                    value: e => (e.sVal("Shield Mult") * e.HP + e.sVal("Shield Flat")) * (1 + e.PowerfulShield) * (e.cLevel >= 2 ? 1.15 : 1)
                }, {
                    stat: "Hold Shield",
                    value: e => (e.sVal("Shield Mult") * e.HP + e.sVal("Shield Flat")) * (1 + e.PowerfulShield) * 1.75 * (e.cLevel >= 2 ? 1.15 : 1)
                }, {
                    stat: "Max Duration",
                    value: e => 100 * e.sVal("Duration") * 5
                }]
            },
            burst: {
                name: "Signature Mix",
                desc: "Tosses out a special cold brew that deals AoE Cryo DMG and creates a Drunken Mist in an AoE. Drunken Mist  Deals continuous Cryo DMG to opponents within the AoE. Continuously regenerates the HP of characters within the AoE. ",
                calcStats: [{
                    stat: "Skill DMG",
                    damage: e => e.bVal("Skill DMG")
                }, {
                    stat: "Cryo DoT",
                    damage: e => e.bVal("Cryo DoT")
                }, {
                    stat: "Heal Over Time",
                    value: e => (e.bVal("Heal Over Time Multi") * e.HP + e.bVal("Heal Over Time Flat")) * (1 + e.Heal)
                }, {
                    stat: "Energy Cost",
                    value: e => 80 / e.EnergyRecharge
                }]
            }
        },
        Fischl: {
            constellations: [{
                name: "Gaze of the Deep",
                desc: "Even when Oz is not present in combat, he can still watch over Fischl through his raven eyes. When Fischl attacks an enemy, Oz fires a joint attack, dealing 22% of ATK DMG.",
                calcStats: [{
                    stat: "Oz Joint Atk",
                    damage: e => .22,
                    damageType: "NormalAttackDMG",
                    damageElement: "PhysicalDMG"
                }, {
                    stat: "Oz Joint DPS",
                    damage: e => 1.1 / e.comboTime,
                    damageType: "NormalAttackDMG",
                    damageElement: "PhysicalDMG"
                }]
            }, {
                name: "Devourer of All-Sins",
                desc: "When Nightrider is used, it deals an additional 200% ATK as DMG, and its AoE is increased by 50%."
            }, {
                name: "Wings of Nightmare",
                desc: "Increases the Level of Nightrider by 3. Maximum upgrade level is 15."
            }, {
                name: "Her Pilgrimage of Bleak",
                desc: "When Midnight Phatasmagoria is used, it deals 222% of ATK as Electro DMG to surrounding enemies.  When the skill duration ends, Fischl regenerates 20% of her HP.",
                calcStats: [{
                    stat: "DMG on Use",
                    damage: e => 2.22,
                    damageType: "ElementalBurstDMG",
                    damageElement: "ElectroDMG"
                }]
            }, {
                name: "Against the Fleeing Light",
                desc: "Increase the Level of Midnight Phantasmagoria by 3. Maximum upgrade level is 15."
            }, {
                name: "Evernight Raven",
                desc: "Increases the duration of Oz&#39s summoning by 2s. Additionally, Oz attacks with the current character when present, dealing 30% of Fischl&#39s ATK as Electro DMG.",
                calcStats: [{
                    stat: "Oz Summoned Atk",
                    damage: e => .3,
                    damageType: "ElementalSkillDMG",
                    damageElement: "ElectroDMG"
                }, {
                    stat: "Oz Summoned DPS",
                    damage: e => 1.5 / e.comboTime,
                    damageType: "ElementalSkillDMG",
                    damageElement: "ElectroDMG"
                }]
            }],
            passives: [{
                name: "Stellar Predator",
                desc: "When Fischl hits Oz with a fully-charged Aimed Shot, Oz brings down Thundering Retribution, dealing AoE Electro DMG equal to 152.7% of the arrow&#39s DMG.",
                calcStats: [{
                    stat: "Stellar Predator",
                    damage: e => e.charge2 / 100 * 1.527,
                    damageType: "ChargedAttackDMG",
                    damageElement: "ElectroDMG"
                }]
            }, {
                name: "Lightning Smite",
                desc: "If a character triggers an Electro-related Elemental Reaction when Oz is on the field, the enemy shall be stricken with Thundering Retribution, dealing Electro DMG equal to 80% of Fischl&#39s ATK.",
                calcStats: [{
                    stat: "Lightning Smite",
                    damage: e => .8,
                    damageElement: "ElectroDMG"
                }]
            }],
            skill: {
                name: "Nightrider",
                desc: "Summons Oz, the night raven forged of darkness and lightning descends upon the land, dealing Electro DMG in a small AoE.   For the ability&#39s duration, Oz will continuously attack nearby enemies with Freikugel. Hold to adjust the location Oz will be summoned to.  Press again any time during the ability&#39s duration to once again summon him to Fischl&#39s side.",
                calcStats: [{
                    stat: "Freikugel",
                    damage: e => e.sVal("Freikugel")
                }, {
                    stat: "Summoning DMG",
                    damage: e => e.sVal("Summoning DMG") + (e.cLevel >= 2 ? 2 : 0)
                }]
            },
            burst: {
                name: "Midnight Phantasmagoria",
                desc: "Summons Oz to spread his twin wings of twilight and defend Fischl.  Has the following properties during the ability&#39s duration:  Fischl takes on Oz&#39s form, greatly increasing her Movement Speed. Strikes nearby enemies with lightning, dealing Electro DMG to enemies she comes into contact with. Each enemy can only be struck once. Once this ability&#39s effects end, Oz will remain on the battlefield and attack his Prinzessin&#39s foes. If Oz is already on the field, then this will reset the duration of his presence. ",
                calcStats: [{
                    stat: "Falling Thunder DMG",
                    damage: e => e.bVal("Falling Thunder DMG")
                }, {
                    stat: "Energy Cost",
                    value: e => 60 / e.EnergyRecharge
                }]
            }
        },
        Jean: {
            constellations: [{
                name: "Spiraling Tempest",
                desc: "Increases the pulling speed of Gale Blade after holding for more than 1s, and increases the DMG dealt by 40%.",
                skill: {
                    toggle: [new StatModifier("ElementalSkillDMG", .4)]
                }
            }, {
                name: "People&#39s Aegis",
                desc: "When Jean picks up an Elemental Orb/Particle, all party members have their Movement SPD and ATK SPD increased by 15% for 15s.",
                toggle: [new StatModifier("AttackSpeed", .15)]
            }, {
                name: "When the West Wind Arises",
                desc: "Increases the Level of Dandelion Breeze by 3. Maximum upgrade level is 15."
            }, {
                name: "Lands of Dandelion",
                desc: "Within the Field created by Dandelion Breeze, all enemies have their Anemo RES decreased by 40%.",
                toggle_debuff: [new StatModifier("AnemoDMG", .4)]
            }, {
                name: "Outbursting Gust",
                desc: "Increase the Level of Gale Blade by 3. Maximum upgrade level is 15."
            }, {
                name: "Lion&#39s Fang, Fair Protector of Mondstadt",
                desc: "Incoming DMG is decreased by 35% within the Field created by Dandelion Breeze. Upon leaving the Dandelion Field, this effect lasts for 3 attacks or 10s."
            }],
            passives: [{
                name: "Wind Companion",
                desc: "Hits by Normal Attacks have a 50% chance to regenerate HP equal to 15% of Jean&#39s ATK for all party members.",
                calcStats: [{
                    stat: "Heal on Hit",
                    value: e => .15 * e.ATK * (1 + e.Heal)
                }]
            }, {
                name: "Let the Wind Lead",
                desc: "Using Dandelion Breeze will regenerate 20% of its Energy."
            }],
            skill: {
                name: "Gale Blade",
                desc: "Focusing the might of the formless wind around her blade,    Jean releases a miniature storm, launching enemies in the direction she aims at, dealing massive Anemo DMG.   Hold   At the cost of continued Stamina consumption, Jean can command the whirlwind to pull surrounding enemies towards her front.   Direction can be adjusted.   Character is immobile during skill duration. ",
                calcStats: [{
                    stat: "Skill DMG",
                    damage: e => e.sVal("Skill DMG")
                }]
            },
            burst: {
                name: "Dandelion Breeze",
                desc: "Calling upon the wind&#39s protection, Jean creates a swirling Dandelion Field, launching surrounding enemies and causing Anemo DMG.   At the same time, she instantly regenerates a large amount of HP for nearby allied units and all party members. HP restored scales off Jean&#39s ATK. Dandelion Field  Continuously regenerates HP for one ally and imbues them with the Anemo attribute. Deals Anemo DMG to enemies entering or exiting the field. ",
                calcStats: [{
                    stat: "Burst DMG",
                    damage: e => e.bVal("Burst DMG")
                }, {
                    stat: "Field Entering / Exiting DMG",
                    damage: e => e.bVal("Field Entering / Exiting DMG")
                }, {
                    stat: "Field Activation Healing",
                    value: e => (e.bVal("Heal Mult") * e.ATK + e.bVal("Heal Flat")) * (1 + e.Heal)
                }, {
                    stat: "Regeneration",
                    value: e => (e.bVal("Regen Mult") * e.ATK + e.bVal("Regen Flat")) * (1 + e.Heal)
                }, {
                    stat: "Energy Cost",
                    value: e => 80 / e.EnergyRecharge
                }]
            }
        },
        Kaeya: {
            constellations: [{
                name: "Excellent Blood",
                desc: "The CRIT Rate of Normal Attack and Charged Attack DMG against enemies affected by the Cold or Frozen status effects is increased by 15%.",
                normal: {
                    toggle: [new StatModifier("CritRate", .15)]
                }
            }, {
                name: "Never-Ending Performance",
                desc: "Every time Glacial Waltz defeats an enemy, its duration is increased by 2.5s, up to a maximum of 15s."
            }, {
                name: "Dance of Frost",
                desc: "Increases the Level of Frostgnaw by 3. Maximum upgrade level is 15."
            }, {
                name: "Frozen Kiss",
                desc: "Triggers automatically when Kaeya&#39s HP falls below 20%:  Creates a shield that absorbs damage equal to 30% of Kaeya&#39s Max HP. Lasts for 20s.  This shield absorbs Cryo DMG with 250% efficiency.  Can only occur once every 60s.",
                calcStats: [{
                    stat: "Shield",
                    value: e => .3 * e.HP * (1 + e.Heal)
                }]
            }, {
                name: "Frostbiting Embrace",
                desc: "Increase the Level of Glacial Waltz by 3. Maximum upgrade level is 15."
            }, {
                name: "Glacial Whirlwind",
                desc: "Glacial Waltz will generate 1 additional icicle, and will regenerate 15 Energy when cast."
            }],
            passives: [{
                name: "Cold-Blooded Strike",
                desc: "Every hit with Frostgnaw regenerates HP for Kaeya equal to 15% of ATK.",
                calcStats: [{
                    stat: "Frostgnaw Heal",
                    value: e => .15 * e.ATK * (1 + e.Heal)
                }]
            }, {
                name: "Heart of the Abyss",
                desc: "Enemies Frozen by Frostgnaw will drop additional Elemental Particles.  Frostgnaw may only produce a maximum of 2 additional Elemental Particles per use."
            }],
            skill: {
                name: "Frostgnaw",
                desc: "Unleashes a frigid blast, dealing Cryo DMG to enemies in front of Kaeya.",
                calcStats: [{
                    stat: "Skill DMG",
                    damage: e => e.sVal("Skill DMG")
                }]
            },
            burst: {
                name: "Glacial Waltz",
                desc: "Coalescing the frost in the air, Kaeya summons 3 icicles that revolve around him. These icicles will follow the character around and deal Cryo DMG to enemies in their path for so long as they persist.",
                calcStats: [{
                    stat: "Burst DMG",
                    damage: e => e.bVal("Burst DMG")
                }, {
                    stat: "Energy Cost",
                    value: e => 60 / e.EnergyRecharge
                }]
            }
        },
        Keqing: {
            constellations: [{
                name: "Thundering Might",
                desc: "Recasting Stellar Restoration while a Lightning Stiletto is present causes Keqing to deal 50% of her ATK as AoE Electro DMG at the start point and terminus of her Blink.",
                calcStats: [{
                    stat: "Stiletto DMG",
                    damage: e => .5,
                    damageType: "ElementalSkillDMG",
                    damageElement: "ElectroDMG"
                }]
            }, {
                name: "Keen Extraction",
                desc: "When Keqing&#39s Normal and Charged Attack&#39s hit enemies affected by Electro, they have a 50% chance of producing an Elemental Particle.This effect can only  occur once every 5s."
            }, {
                name: "Forseen Reformation",
                desc: "Increases the Level of Starward Sword by 3. Maximum upgrade level is 15."
            }, {
                name: "Attunement",
                desc: "For 10s after Keqing triggers an Electro-related Elemental Reaction, her ATK is increased by 25%.",
                toggle: [new StatModifier("ATKPercent", .25)]
            }, {
                name: "Beckoning Stars",
                desc: "Increase the Level of Stellar Restoration by 3. Maximum upgrade level is 15."
            }, {
                name: "Tenacious Star",
                desc: "When initiating a Normal Attack, Charged Attack, Elemental Skill or Elemental Burst, Keqing gains a 6% Electro DMG Bonus for 8s. Effects triggered by Normal Attacks, Charged Attacks, Elemental Skills and Elemental Bursts are considered independent entities.",
                stack: [new StatModifier("ElectroDMG", .06)],
                stackCount: 4
            }],
            passives: [{
                name: "Thundering Penance",
                desc: "Within 5s of recasting Stellar Restoration while a Lightning Stiletto is present, Keqing&#39s Normal and Charged Attacks are converted to Electro DMG.",
                toggle: [new StatModifier("NormalType", "ElectroDMG")]
            }, {
                name: "Aristocratic Dignity",
                desc: "When casting Starward Sword, Keqing&#39s CRIT Rate is increased by 15%, and her Energy Recharge is increased by 15%. This effect lasts for 8s.",
                toggle: [new StatModifier("CritRate", .15), new StatModifier("EnergyRecharge", .15)]
            }],
            skill: {
                name: "Stellar Restoration",
                desc: "Hurls a Lightning Stiletto that annihilates her enemies like the swift thunder.  When the Stiletto hits its target, it deals Electro DMG to enemies in a small AoE, and places a Stiletto Mark on the spot hit.   Hold   Hold to adjust the direction in which the Stiletto shall be thrown.   Stilettos thrown by the Hold attack mode can be suspended in mid - air, allowing Keqing to jump to them when using Stellar Restoration a second time.   Lightning Stiletto If Keqing uses Stellar Restoration again or uses a Charged Attack while its duration lasts, it will clear the Stiletto Mark and produce different effects:      If she uses Stellar Restoration again, she will blink to the location of the Mark and unleashed one slashing attack that deals AoE Electro DMG.When blinking to a Stiletto that was thrown from a Holding attack, Keqing can leap across obstructing terrain.   If Keqing uses a Charged Attack, she will ignite a series of thundering cuts at the Mark&#39s location, dealing AoE Electro DMG. ",
                calcStats: [{
                    stat: "Lightning Stiletto DMG",
                    damage: e => e.sVal("Lightning Stiletto DMG")
                }, {
                    stat: "Slashing DMG",
                    damage: e => e.sVal("Slashing DMG")
                }, {
                    stat: "Thunderclap Slash DMG",
                    damage: e => 2 * e.sVal("Thunderclap Slash DMG")
                }]
            },
            burst: {
                name: "Starward Sword",
                desc: "Keqing unleashes the power of lightning, dealing Electro DMG in an AoE. She then blends into the shadow of her blade, striking a series of thunderclap - blows to nearby enemies simultaneous that deal multiple instance of Electro DMG.The final attack deals massive AoE Electro DMG. ",
                calcStats: [{
                    stat: "Skill DMG",
                    damage: e => e.bVal("Skill DMG")
                }, {
                    stat: "Consecutive Slash DMG",
                    damage: e => e.bVal("Consecutive Slash DMG")
                }, {
                    stat: "Last Attack DMG",
                    damage: e => e.bVal("Last Attack DMG")
                }, {
                    stat: "Total Damage",
                    damage: e => e.bVal("Skill DMG") + e.bVal("Consecutive Slash DMG") + e.bVal("Last Attack DMG")
                }, {
                    stat: "Energy Cost",
                    value: e => 40 / e.EnergyRecharge
                }]
            }
        },
        Klee: {
            constellations: [{
                name: "Chained Reaction",
                desc: "Attacks and Skills have a certain chance to summon a spark that bombards enemies, dealing DMG equal to 120% of Sparks &#39n&#39 Splash&#39s DMG.",
                calcStats: [{
                    stat: "Spark",
                    damage: e => .5112,
                    damageType: "ElementalBurstDMG",
                    damageElement: "PyroDMG"
                }]
            }, {
                name: "Explosive Frags",
                desc: "Being hit by Jumpy Dumpty&#39s mines decreases enemy DEF by 23% for 10s.",
                toggle_debuff: [new StatModifier("DEF", .23)]
            }, {
                name: "Exquisite Compound",
                desc: "Increases the Level of Jumpy Dumpty by 3. Maximum upgrade level is 15."
            }, {
                name: "Sparkly Explosion",
                desc: "If Klee leaves the field during the duration of Sparks &#39n&#39 Splash, her departure triggers an explosion that deals 555% of her ATK as AoE Pyro DMG.",
                calcStats: [{
                    stat: "Explosion DMG",
                    damage: e => 5.55,
                    damageType: "ElementalBurstDMG",
                    damageElement: "PyroDMG"
                }]
            }, {
                name: "Nova Burst",
                desc: "Increase the Level of Sparks &#39n&#39 Splash by 3. Maximum upgrade level is 15."
            }, {
                name: "Blazing Delight",
                desc: "While under the effects of Sparks &#39n&#39 Splash, other members of the party will continuously regenerate Energy.  When Sparks &#39n&#39 Splash is used, all party members will gain 10% Pyro DMG Bonus for 25s.",
                toggle: [new StatModifier("PyroDMG", .1)]
            }],
            passives: [{
                name: "Pounding Surprise",
                desc: "When Jumpy Dumpty and Normal Attacks deal DMG, Klee has a 50% chance to obtain an Explosive Spark. This Explosive Spark is consumed by the next Charged Attack, which costs no Stamina and deals 50% increased DMG.",
                toggle: [new StatModifier("ChargedAttackDMG", .5)]
            }, {
                name: "Sparkling Burst",
                desc: "When a Charged Attack results in a CRIT, all party members gain 2 Elemental Energy."
            }],
            skill: {
                name: "Jumpy Dumpty",
                desc: "Jumpy Dumpty is tons of boom-bang-fun!  When thrown, Jumpy Dumpty bounces thrice, igniting and dealing AoE Pyro DMG with every bounce.   On the third bounce, the bomb splits into many mines.   The mines will explode upon contact with enemies, or after a short period of time, dealing AoE Pyro DMG.   Starts with 2 charges. ",
                calcStats: [{
                    stat: "Jumpy Dumpty DMG",
                    damage: e => e.sVal("Jumpy Dumpty DMG")
                }, {
                    stat: "Mine DMG",
                    damage: e => e.sVal("Mine DMG")
                }]
            },
            burst: {
                name: "Sparks &#39n&#39 Splash",
                desc: "Klee&#39s Blazing Delight! For the duration of this ability, continuously summons Sparks &#39n&#39 Splash to attack nearby enemies, dealing AoE Pyro DMG.",
                calcStats: [{
                    stat: "Sparks n Splash DMG",
                    damage: e => e.bVal("Sparks n Splash DMG")
                }, {
                    stat: "Energy Cost",
                    value: e => 60 / e.EnergyRecharge
                }]
            }
        },
        Lisa: {
            constellations: [{
                name: "Infinite Circuit",
                desc: "Lisa recovers 2 Energy for every opponent hit while holding Violet Arc.  A maximum of 10 Energy can be regenerated in this manner at any one time."
            }, {
                name: "Electromagnetic Field",
                desc: "Holding Violet Arc has the following effects:  Increases DEF by 25%. Increases Lisa&#39s resistance to interruption. ",
                toggle: [new StatModifier("DEFPercent", .25)]
            }, {
                name: "Resonant Thunder",
                desc: "Increases the Level of Lightning Rose by 3. Maximum upgrade level is 15."
            }, {
                name: "Plasma Eruption",
                desc: "Increases the number of lightning bolts released by Lightning Rose by 1-3."
            }, {
                name: "Electrocute",
                desc: "Increase the Level of Violet Arc by 3. Maximum upgrade level is 15."
            }, {
                name: "Pulsating Witch",
                desc: "When Lisa takes the field, she applies 3 stacks of Violet Arc&#39s Conductive status onto nearby enemies.  This effect can only occur once every 5s."
            }],
            passives: [{
                name: "Induced Aftershock",
                desc: "Hits by charged Attacks apply Violet Arc&#39s Conductive status to enemies."
            }, {
                name: "Static Electricity Field",
                desc: "Enemies hit by Lightning Rose have their DEF decreased by 15% for 10s.",
                toggle_debuff: [new StatModifier("DEF", .15)]
            }],
            skill: {
                name: "Violet Arc",
                desc: "Channels the power of lightning to sweep bothersome matters away. Press Releases a homing Lightning Orb. On hit, it deals Electro DMG, and applies a stack of Conductive status(Max 3 stacks) to enemies in a small AoE.   Hold   After an extended casting time, calls down lightning from the heavens, dealing massive Electro DMG to all nearby enemies.   Deals great amounts of extra damage to enemies based on the number of Conductive stacks applied to them, and clears their Conductive status. ",
                calcStats: [{
                    stat: "Press DMG",
                    damage: e => e.sVal("Press DMG")
                }, {
                    stat: "No Stack Hold",
                    damage: e => e.sVal("No Stack Hold")
                }, {
                    stat: "Hold-1",
                    damage: e => e.sVal("Hold-1")
                }, {
                    stat: "Hold-2",
                    damage: e => e.sVal("Hold-2")
                }, {
                    stat: "Hold-3",
                    damage: e => e.sVal("Hold-3")
                }]
            },
            burst: {
                name: "Lightning Rose",
                desc: "Summons a Lightning Rose that unleashes powerful lightning bolts, launching surrounding enemies and dealing Electro DMG.   The Lightning Rose will continuously emit lightning to knock back enemies and deal Electro DMG for so long as it persists.",
                calcStats: [{
                    stat: "Discharge DMG",
                    damage: e => e.bVal("Discharge DMG")
                }, {
                    stat: "Energy Cost",
                    value: e => 80 / e.EnergyRecharge
                }]
            }
        },
        Mona: {
            constellations: [{
                name: "Prophecy of Submersion",
                desc: "The effects of Hydro-related Elemental Reactions are enhanced for 8s after a character hits an enemy affected by an Omen:  Electro-Charged DMG is increased by 15%. Vaporize DMG is increased by 15%. Hydro Swirl DMG is increased by 15%. The duration for which enemies are Frozen is increased by 15%. ",
                toggle: [new StatModifier("ElectrochargedDMG", .15), new StatModifier("VaporizeDMG", .15), new StatModifier("SwirlDMG", .15)]
            }, {
                name: "Lunar Chain",
                desc: "When a Normal Attack hits, there is a 20% chance that it will be automatically followed by a Charged Attack.  This effect can only occur once every 5s."
            }, {
                name: "Restless Revolution",
                desc: "Increases the Level of Stellaris Phantasm by 3. Maximum upgrade level is 15."
            }, {
                name: "Prophecy of Oblivion",
                desc: "When a character attacks an enemy affected by the Omen status effect, their CRIT Rate is increased by 15%.",
                toggle: [new StatModifier("CritRate", .15)]
            }, {
                name: "Mockery of Fortuna",
                desc: "Increase the Level of Mirror Reflection of Doom by 3. Maximum upgrade level is 15."
            }, {
                name: "Rhetorics of Calamitas",
                desc: "Upon entering Illusory Torrent, Mona gain a 60% increase to the DMG her next Charged Attack per second of movement.  A maximum DMG Bonus of 180% can be achieved in this manner.The effect lasts for no more than 8s.",
                stack: [new StatModifier("ChargedAttackDMG", .6)],
                stackCount: 3
            }],
            passives: [{
                name: "Come &#39n&#39 Get Me, Hag!",
                desc: "After she has used Illusory Torrent for 2s, if there are any enemies nearby, Mona will automatically create a Phantom.  A Phantom created in this manner lasts for 2s, and its explosion DMG is equal to 50% of Mirror Reflection of Doom.",
                calcStats: [{
                    stat: "Phantom Explosion",
                    damage: e => .665,
                    damageType: "ElementalSkillDMG",
                    damageElement: "HydroDMG"
                }]
            }, {
                name: "Waterborne Destiny",
                desc: "Increases Mona&#39s Hydro DMG Bonus by a degree equivalent to 20% of her Energy Recharge rate.",
                scale: {
                    to: new StatModifier("HydroDMG", 0),
                    from: e => new StatModifier("EnergyRecharge", .2)
                },
                calcStats: [{
                    stat: "Bonus Hyro DMG",
                    value: e => .2 * e.EnergyRecharge * 100
                }]
            }],
            skill: {
                name: "Reflection of Doom",
                desc: "Creates an illusory Phantom of fate from coalesced waterspouts.  The Phantom has the following special properties:  Continuously taunts nearby enemies,    attracting their fire.   Continuously deals Hydro DMG to nearby enemies.   When its duration expires, the Phantom explodes, dealing AoE Hydro DMG.    Hold   Utilizes water currents to move backwards swiftly before conjuring a Phantom.   Only one Phantom created by Mirror Reflection of Doom can exist at any time.  ",
                calcStats: [{
                    stat: "DoT",
                    damage: e => e.sVal("DoT")
                }, {
                    stat: "Explosion DMG",
                    damage: e => e.sVal("Explosion DMG")
                }]
            },
            burst: {
                name: "Stellaris Phantasm",
                desc: "Mona summons the sparkling waves and creates a reflection of the starry sky, applying the Illusory Bubble status to opponents in a large AoE.   Illusory Bubble   Traps opponents inside a pocket of destiny and also makes them Wet. Renders weaker opponents immobile. When an opponent affected by Illusory Bubble sustains DMG, the following effects are produced:  Applies an Omen to the opponent, which gives a DMG Bonus, also increasing the DMG of the attack that causes it.   Removes the Illusory Bubble, dealing Hydro Elemental DMG in the process.The DMG Bonus does not apply to the Hydro Elemental DMG dealt in this instance.    Omen   During its duration, increases DMG taken by enemies. ",
                calcStats: [{
                    stat: "Illusory Bubble Explosion DMG",
                    damage: e => e.bVal("Illusory Bubble Explosion DMG")
                }, {
                    stat: "Energy Cost",
                    value: e => 60 / e.EnergyRecharge
                }],
                varToggle: e => [new StatModifier("AllDMG", e.bVal("DMG Bonus"))]
            }
        },
        Ningguang: {
            constellations: [{
                name: "Piercing Fragments",
                desc: "When a Normal Attack hits, it deals AoE DMG."
            }, {
                name: "Shock Effect",
                desc: "When Jade Screen is shattered, its CD will reset.  Can occur once every 6s."
            }, {
                name: "Majesty be the Array of Stars",
                desc: "Increases the Level of Starshatter by 3. Maximum upgrade level is 15."
            }, {
                name: "Exquisite be the Jade, Outshining All the Beneath",
                desc: "Jade Screen increases nearby characters&#39 Elemental RES by 10%.",
                toggle: [new StatModifier("PyroRES", .1), new StatModifier("HydroRES", .1), new StatModifier("DendroRES", .1), new StatModifier("ElectroRES", .1), new StatModifier("AnemoRES", .1), new StatModifier("CryoRES", .1), new StatModifier("GeoRES", .1)]
            }, {
                name: "Invincible be the Jade Screen",
                desc: "Increase the Level of Jade Screen by 3. Maximum upgrade level is 15."
            }, {
                name: "Grandeur be the Seven Stars",
                desc: "When Starshatter is used, Ningguang gains 7 Star Jades."
            }],
            passives: [{
                name: "Backup Plan",
                desc: "When Ningguang is in possession of Star Jades, her Charged Attack does not consume Stamina."
            }, {
                name: "Strategic Reserve",
                desc: "A character that passes through the Jade Screen will gain a 12% Geo DMG Bonus for 10s.",
                toggle: [new StatModifier("GeoDMG", .12)]
            }],
            skill: {
                name: "Jade Screen",
                desc: "Ningguang creates a Jade Screen out of gold,    obsidian and her great opulence, dealing AoE Geo DMG.   Jade Screen     Blocks enemy projectiles.   Endurance scales based on Ningguang&#39s Max HP.  Jade Screen is considered a Geo Construct and can be used to block certain attacks, but cannot be climbed. Only one Jade Screen may exist at any one time.",
                calcStats: [{
                    stat: "Jade Screen HP",
                    value: e => e.sVal("Inherited HP") * e.HP
                }, {
                    stat: "Skill DMG",
                    damage: e => e.sVal("Skill DMG")
                }]
            },
            burst: {
                name: "Starshatter",
                desc: "Gathering a great number of gems, Ningguang scatters them all at once, sending homing projectiles at her enemies that deal massive Geo DMG. If Starshatter is cast when a Jade Screen is nearby, the Jade Screen will fire additional gem projectiles at the same time.",
                calcStats: [{
                    stat: "DMG Per Gem",
                    damage: e => e.bVal("DMG Per Gem")
                }, {
                    stat: "3-Gem DMG",
                    damage: e => 3 * e.bVal("DMG Per Gem")
                }, {
                    stat: "6-Gem DMG",
                    damage: e => 6 * e.bVal("DMG Per Gem")
                }, {
                    stat: "12-Gem DMG",
                    damage: e => 12 * e.bVal("DMG Per Gem")
                }, {
                    stat: "Energy Cost",
                    value: e => 40 / e.EnergyRecharge
                }]
            }
        },
        Noelle: {
            constellations: [{
                name: "I Got Your Back",
                desc: "While Sweeping Time and Breastplate are both in effect, the chance of Breastplate&#39s healing effects activating is increased to 100%."
            }, {
                name: "Combat Maid",
                desc: "Decreases the Stamina Consumption of Noelle&#39s Charged Attacks by 20% and increases her Charged Attack DMG by 15%.",
                effect: [new StatModifier("ChargedAttackDMG", .15)]
            }, {
                name: "Invulnerable Maid",
                desc: "Increases the Level of Breastplate by 3. Maximum upgrade level is 15."
            }, {
                name: "To Be Cleaned",
                desc: "When Breastplate&#39s duration expires or it is destroyed by DMG, it will deal 400% ATK of Geo DMG to surrounding enemies.",
                calcStats: [{
                    stat: "Expiration DMG",
                    damage: e => 4,
                    damageType: "ElementalSkillDMG",
                    damageElement: "GeoDMG"
                }]
            }, {
                name: "Favonius Sweeper Master",
                desc: "Increase the Level of Sweeping Time by 3. Maximum upgrade level is 15."
            }, {
                name: "Must Be Spotless",
                desc: "Sweeping Time increases Noelle&#39s ATK by an additional 50% of her DEF.  Additionally, every enemy defeated during the skill&#39s duration adds 1s to the duration, up to 10s.",
                toggle_scale: {
                    from: e => new StatModifier("DEF", .5),
                    to: new StatModifier("ATK", 0)
                },
                calcStats: [{
                    stat: "Extra ATK",
                    value: e => .5 * e.DEF
                }]
            }],
            passives: [{
                name: "Devotion",
                desc: "When Noelle is in the party but not on the field, this ability triggers automatically when the active character&#39s HP falls below 30%:  Creates a shield that lasts for 20s and absorbs DMG equal to 400% of Noelle&#39s DEF. This effect can only occur once every 60s.",
                calcStats: [{
                    stat: "Shield",
                    value: e => 4 * e.DEF * (1 + e.PowerfulShield)
                }]
            }, {
                name: "Nice and Clean",
                desc: "Every 4 Normal or Charged Attack hits will decrease the CD of Breastplate by 1s.  Hitting multiple enemies with a single attack is only counted as 1 hit."
            }],
            skill: {
                name: "Breastplate",
                desc: "Summons a protective stone armor, dealing Geo DMG to surrounding enemies and creating a shield.The shield&#39s DMG Absorption scaled based on Noelle&#39s DEF.  The shield has the following properties:  When Noelle&#39s Normal and Charged Attacks hit a target, they have a certain chance to regenerate HP for all characters, both on and off the field. Applies the Geo element to the character. Possesses 150% Absorption Efficiency against All DMG.  The amount of HP healed when regeneration is triggered scales based on Noelle&#39s DEF.",
                calcStats: [{
                    stat: "Shield DMG",
                    damage: e => e.sVal("Shield DMG") * e.DEF / e.ATK
                }, {
                    stat: "DMG Absorption",
                    value: e => (e.sVal("Shield Mult") * e.DEF + e.sVal("Shield Flat")) * (1 + e.PowerfulShield)
                }, {
                    stat: "Healing",
                    value: e => (e.sVal("Heal Mult") * e.DEF + e.sVal("Heal Flat")) * (1 + e.Heal)
                }]
            },
            burst: {
                name: "Sweeping Time",
                desc: "Gathering the strength of stone around her weapon, Noelle strikes the enemies surrounding her within a large AoE, dealing Geo DMG.   Afterwards, Noelle gains the following effects:      Larger attack AoE.   Converts attack DMG to Geo DMG.   Increased ATK that scales based on her DEF.  ",
                calcStats: [{
                    stat: "Elemental Burst DMG",
                    damage: e => e.bVal("Elemental Burst DMG")
                }, {
                    stat: "Skill DMG",
                    damage: e => e.bVal("Skill DMG")
                }, {
                    stat: "Bonus ATK",
                    value: e => e.bVal("DEF to ATK Bonus") * e.DEF
                }, {
                    stat: "Energy Cost",
                    value: e => 60 / e.EnergyRecharge
                }],
                toggle: [new StatModifier("NormalType", "GeoDMG")],
                toggle_scale: {
                    from: e => new StatModifier("DEF", e.bVal("DEF to ATK Bonus")),
                    to: new StatModifier("ATK", 0)
                }
            }
        },
        Gorou: {
            constellations: [{
                name: "I Got Your Back",
                desc: "While Sweeping Time and Breastplate are both in effect, the chance of Breastplate&#39s healing effects activating is increased to 100%."
            }, {
                name: "Combat Maid",
                desc: "Decreases the Stamina Consumption of Noelle&#39s Charged Attacks by 20% and increases her Charged Attack DMG by 15%.",
                effect: [new StatModifier("ChargedAttackDMG", .15)]
            }, {
                name: "Invulnerable Maid",
                desc: "Increases the Level of Breastplate by 3. Maximum upgrade level is 15."
            }, {
                name: "To Be Cleaned",
                desc: "When Breastplate&#39s duration expires or it is destroyed by DMG, it will deal 400% ATK of Geo DMG to surrounding enemies.",
                calcStats: [{
                    stat: "Expiration DMG",
                    damage: e => 4,
                    damageType: "ElementalSkillDMG",
                    damageElement: "GeoDMG"
                }]
            }, {
                name: "Favonius Sweeper Master",
                desc: "Increase the Level of Sweeping Time by 3. Maximum upgrade level is 15."
            }, {
                name: "Must Be Spotless",
                desc: "Sweeping Time increases Noelle&#39s ATK by an additional 50% of her DEF.  Additionally, every enemy defeated during the skill&#39s duration adds 1s to the duration, up to 10s.",
                toggle_scale: {
                    from: e => new StatModifier("DEF", .5),
                    to: new StatModifier("ATK", 0)
                },
                calcStats: [{
                    stat: "Extra ATK",
                    value: e => .5 * e.DEF
                }]
            }],
            passives: [{
                name: "Devotion",
                desc: "When Noelle is in the party but not on the field, this ability triggers automatically when the active character&#39s HP falls below 30%:  Creates a shield that lasts for 20s and absorbs DMG equal to 400% of Noelle&#39s DEF. This effect can only occur once every 60s.",
                calcStats: [{
                    stat: "Shield",
                    value: e => 4 * e.DEF * (1 + e.PowerfulShield)
                }]
            }, {
                name: "Nice and Clean",
                desc: "Every 4 Normal or Charged Attack hits will decrease the CD of Breastplate by 1s.  Hitting multiple enemies with a single attack is only counted as 1 hit."
            }],
            skill: {
                name: "Breastplate",
                desc: "Summons a protective stone armor, dealing Geo DMG to surrounding enemies and creating a shield.The shield&#39s DMG Absorption scaled based on Noelle&#39s DEF.  The shield has the following properties:  When Noelle&#39s Normal and Charged Attacks hit a target, they have a certain chance to regenerate HP for all characters, both on and off the field. Applies the Geo element to the character. Possesses 150% Absorption Efficiency against All DMG.  The amount of HP healed when regeneration is triggered scales based on Noelle&#39s DEF.",
                calcStats: [{
                    stat: "Shield DMG",
                    damage: e => (e.sVal("Shield DMG") * e.ATK + 1.56 * e.DEF) / e.ATK
                }, {
                    stat: "DMG Absorption",
                    value: e => e.sVal("Shield Flat")
                }, {
                    stat: "Healing",
                    value: e => (e.sVal("Heal Mult") * e.DEF + e.sVal("Heal Flat")) * (1 + e.Heal)
                }]
            },
            burst: {
                name: "Sweeping Time",
                desc: "Gathering the strength of stone around her weapon, Noelle strikes the enemies surrounding her within a large AoE, dealing Geo DMG.   Afterwards, Noelle gains the following effects:      Larger attack AoE.   Converts attack DMG to Geo DMG.   Increased ATK that scales based on her DEF.  ",
                calcStats: [{
                    stat: "Elemental Burst DMG",
                    damage: e => ((e.bVal("Elemental Burst DMG") + 0.156) * e.DEF) / e.ATK
                }, {
                    stat: "Skill DMG",
                    damage: e => ((e.bVal("Skill DMG") + 0.156) * e.DEF) / e.ATK
                }, {
                    stat: "Energy Cost",
                    value: e => 80 / e.EnergyRecharge
                }]
            }
        },
        Itto: {
            constellations: [{
                name: "I Got Your Back",
                desc: "While Sweeping Time and Breastplate are both in effect, the chance of Breastplate&#39s healing effects activating is increased to 100%."
            }, {
                name: "Combat Maid",
                desc: "Decreases the Stamina Consumption of Noelle&#39s Charged Attacks by 20% and increases her Charged Attack DMG by 15%.",
                effect: [new StatModifier("ChargedAttackDMG", .15)]
            }, {
                name: "Invulnerable Maid",
                desc: "Increases the Level of Breastplate by 3. Maximum upgrade level is 15."
            }, {
                name: "To Be Cleaned",
                desc: "When Breastplate&#39s duration expires or it is destroyed by DMG, it will deal 400% ATK of Geo DMG to surrounding enemies.",
                calcStats: [{
                    stat: "Expiration DMG",
                    damage: e => 4,
                    damageType: "ElementalSkillDMG",
                    damageElement: "GeoDMG"
                }]
            }, {
                name: "Favonius Sweeper Master",
                desc: "Increase the Level of Sweeping Time by 3. Maximum upgrade level is 15."
            }, {
                name: "Must Be Spotless",
                desc: "Sweeping Time increases Noelle&#39s ATK by an additional 50% of her DEF.  Additionally, every enemy defeated during the skill&#39s duration adds 1s to the duration, up to 10s.",
                toggle_scale: {
                    from: e => new StatModifier("DEF", .5),
                    to: new StatModifier("ATK", 0)
                },
                calcStats: [{
                    stat: "Extra ATK",
                    value: e => .5 * e.DEF
                }]
            }],
            passives: [{
                name: "Devotion",
                desc: "When Noelle is in the party but not on the field, this ability triggers automatically when the active character&#39s HP falls below 30%:  Creates a shield that lasts for 20s and absorbs DMG equal to 400% of Noelle&#39s DEF. This effect can only occur once every 60s.",
                calcStats: [{
                    stat: "Shield",
                    value: e => 4 * e.DEF * (1 + e.PowerfulShield)
                }]
            }, {
                name: "Nice and Clean",
                desc: "Every 4 Normal or Charged Attack hits will decrease the CD of Breastplate by 1s.  Hitting multiple enemies with a single attack is only counted as 1 hit."
            }],
            skill: {
                name: "Breastplate",
                desc: "Summons a protective stone armor, dealing Geo DMG to surrounding enemies and creating a shield.The shield&#39s DMG Absorption scaled based on Noelle&#39s DEF.  The shield has the following properties:  When Noelle&#39s Normal and Charged Attacks hit a target, they have a certain chance to regenerate HP for all characters, both on and off the field. Applies the Geo element to the character. Possesses 150% Absorption Efficiency against All DMG.  The amount of HP healed when regeneration is triggered scales based on Noelle&#39s DEF.",
                calcStats: [{
                    stat: "Shield DMG",
                    damage: e => e.sVal("Shield DMG")
                }]
            },
            burst: {
                name: "Sweeping Time",
                desc: "Gathering the strength of stone around her weapon, Noelle strikes the enemies surrounding her within a large AoE, dealing Geo DMG.   Afterwards, Noelle gains the following effects:      Larger attack AoE.   Converts attack DMG to Geo DMG.   Increased ATK that scales based on her DEF.  ",
                calcStats: [{
                    stat: "Bonus ATK",
                    value: e => e.bVal("DEF to ATK Bonus") * e.DEF
                }, {
                    stat: "Energy Cost",
                    value: e => 60 / e.EnergyRecharge
                }],
                toggle: [new StatModifier("NormalType", "GeoDMG")],
                toggle_scale: {
                    from: e => new StatModifier("DEF", e.bVal("DEF to ATK Bonus")),
                    to: new StatModifier("ATK", 0)
                },
                varToggle: e => [new StatModifier("AttackSpeed", e.bVal("Normal Atk SPD Bonus"))]
            }
        },
        Qiqi: {
            constellations: [{
                name: "Ascetics of Frost",
                desc: "When the Herald of Frost hits an enemy marked by a Fortune-Preserving Talisman, Qiqi regenerates 2 Energy."
            }, {
                name: "Frozen to the Bone",
                desc: "Qiqi&#39s Normal and Charge Attack DMG against enemies affected by Cryo is increased by 15%.",
                toggle: [new StatModifier("NormalAttackDMG", .15), new StatModifier("ChargedAttackDMG", .15)]
            }, {
                name: "Ascendant Praise",
                desc: "Increases the Level of Adeptus Art: Preserver of Fortune by 3. Maximum upgrade level is 15."
            }, {
                name: "Divine Suppression",
                desc: "Targets marked by the Fortune-Preserving Talisman have their ATK decreased by 20%."
            }, {
                name: "Crimson Lotus Bloom",
                desc: "Increase the Level of Adeptus Art: Herald of Frost by 3. Maximum upgrade level is 15."
            }, {
                name: "Rite of Resurrection",
                desc: "Using Adeptus Art: Preserve of Fortune revives all nearby fallen characters and regenerates 50% of their HP.  This effect can only occur once every 15 mins."
            }],
            passives: [{
                name: "Life-Prolonging Methods",
                desc: "When a character under the effects of Adeptus Art: Herald of Frost triggers an Elemental Reaction, their Incoming Healing Bonus is increased by 20% for 8s.",
                toggle: [new StatModifier("IncomingHeal", .2)]
            }, {
                name: "A Glimpse into Arcanum",
                desc: "When Qiqi hits enemies with her Normal and Charged Attacks, she has a 50% chance to apply a Fortune- Preserving Talisman to them for 6s.This effect can only occur once every 30s."
            }],
            skill: {
                name: "Adeptus Art: Herald of Frost",
                desc: "Using the Icevein Talisman,    Qiqi brings forth the Herald of Frost, dealing Cryo DMG to nearby enemies.   Herald of Frost     When Qiqi hits a target with her Normal or Charged Attacks, she regenerates HP for all party members and all nearby allied characters.Healing scales based on Qiqi&#39s ATK. Regenerates HP for current character at regular intervals. Follows the character around, dealing Cryo DMG to enemies in its path. ",
                calcStats: [{
                    stat: "Skill DMG",
                    damage: e => e.sVal("Skill DMG")
                }, {
                    stat: "Heal on Hit",
                    value: e => (e.sVal("Heal on Hit Mult") * e.ATK + e.sVal("Heal on Hit Flat")) * (1 + e.Heal)
                }, {
                    stat: "Regen",
                    value: e => (e.sVal("Regen Mult") * e.ATK + e.sVal("Regen Flat")) * (1 + e.Heal)
                }, {
                    stat: "Herald of Frost DMG",
                    damage: e => e.sVal("Herald of Frost DMG")
                }]
            },
            burst: {
                name: "Adeptus Art: Preserver of Fortune",
                desc: "Qiqi releases the adeptus power sealed within her body,    marking nearby enemies with a Fortune - Preserving Talisman that deals Cryo DMG.   Fortune - Preserving Talisman When enemies affected by this Talisman take DMG, the character that dealt this DMG regenerates HP.",
                calcStats: [{
                    stat: "Burst DMG",
                    damage: e => e.bVal("Burst DMG")
                }, {
                    stat: "Healing",
                    value: e => (e.bVal("Healing Mult") * e.ATK + e.bVal("Healing Flat")) * (1 + e.Heal)
                }, {
                    stat: "Energy Cost",
                    value: e => 80 / e.EnergyRecharge
                }]
            }
        },
        Razor: {
            constellations: [{
                name: "Wolf&#39s Instinct",
                desc: "Picking up an Elemental Orb or Particle increases Razor&#39s DMG by 10% for 8s.",
                toggle: [new StatModifier("AllDMG", .1)]
            }, {
                name: "Suppression",
                desc: "Increases CRIT Rate against enemies with less than 30% HP by 10%.",
                toggle: [new StatModifier("CritRate", .1)]
            }, {
                name: "Soul Companion",
                desc: "Increases the Level of Lightning Fang by 3. Maximum upgrade level is 15."
            }, {
                name: "Bite",
                desc: "When casting Claw and Thunder (Press), enemies hit will have their DEF decreased by 15% for 7s.",
                toggle_debuff: [new StatModifier("DEF", .15)]
            }, {
                name: "Sharpened Claws",
                desc: "Increase the Level of Claw and Thunder by 3. Maximum upgrade level is 15."
            }, {
                name: "Lupus Fulguris",
                desc: "Every 10s, Razor&#39s sword charges up, causing the next Normal Attack to release lightning that deals 100% of Razor&#39s ATK as Electro DMG.  When Razor is not using Lightning Fang, a lightning strike on an enemy will grant Razor an Electro Sigil for Claw and Thunder.",
                calcStats: [{
                    stat: "Lightning",
                    damage: e => 1,
                    damageType: "NormalAttackDMG",
                    damageElement: "ElectroDMG"
                }, {
                    stat: "Extra DPS",
                    damage: e => .1,
                    damageType: "NormalAttackDMG",
                    damageElement: "ElectroDMG"
                }]
            }],
            passives: [{
                name: "Awakening",
                desc: "Decreases Claw and Thunder&#39s CD by 18%.  Using Lightning Fang resets the CD of Claw and Thunder."
            }, {
                name: "Hunger",
                desc: "When Razor&#39s Energy is below 50%, increases Energy Recharge by 30%.",
                toggle: [new StatModifier("EnergyRecharge", .3)]
            }],
            skill: {
                name: "Claw and Thunder",
                desc: "Hunts his prey using the techniques taught to him by his master and his Lupical. Press Swings the Thunder Wolf Claw,    dealing Electro DMG to enemies in front of Razor.   Upon striking an enemy, Razor will gain an Electro Sigil, which increases his Energy Recharge rate.   Razor can have up to 3 Electro Sigils simultaneously, and gaining a new Electro Sigil refreshes their duration.   Hold   Gathers Electro energy to unleash a lightning storm over a small AoE, causing massive Electro DMG, and clears all of Razor&#39s Electro Sigils.  Each Electro Sigil cleared in this manner will be converted into Energy for Razor.",
                calcStats: [{
                    stat: "Press Skill DMG",
                    damage: e => e.sVal("Press Skill DMG")
                }, {
                    stat: "Hold Skill DMG",
                    damage: e => e.sVal("Hold Skill DMG")
                }],
                stack: [new StatModifier("EnergyRecharge", .2)],
                stackCount: 3
            },
            burst: {
                name: "Lightning Fang",
                desc: "Summons the Wolf Within which deals Electro DMG to all nearby opponents. This clears all of Razor&#39s Electro Sigils,    which will be converted into elemental energy for him.   The Wolf Within will fight alongside Razor for the skill&#39s duration. The Wolf Within  Strikes alongside Razor&#39s normal attacks, dealing Electro DMG. Raises Razor&#39s ATK SPD and Electro RES. Causes Razor to be immune to DMG inflicted by the Electro-Charged status. Disables Razor&#39s Charged Attacks.  The effects end when Razor leaves the battlefield.  When Razor leaves the field, a maximum of 10 Energy will be returned to him based off the duration remaining on this skill.",
                calcStats: [{
                    stat: "Elemental Burst DMG",
                    damage: e => e.bVal("Elemental Burst DMG")
                }, {
                    stat: "Soul Companion DPS",
                    damage: e => e.bVal("Soul Companion DMG") * (e.hitMultiplier[0] + e.hitMultiplier[1] + e.hitMultiplier[2] + e.hitMultiplier[3]) / 100 / (e.comboTime / (1 + e.AttackSpeed))
                }, {
                    stat: "Companion Hit-1",
                    damage: e => e.bVal("Soul Companion DMG") * e.hitMultiplier[0] / 100
                }, {
                    stat: "Companion Hit-2",
                    damage: e => e.bVal("Soul Companion DMG") * e.hitMultiplier[1] / 100
                }, {
                    stat: "Companion Hit-3",
                    damage: e => e.bVal("Soul Companion DMG") * e.hitMultiplier[2] / 100
                }, {
                    stat: "Companion Hit-4",
                    damage: e => e.bVal("Soul Companion DMG") * e.hitMultiplier[3] / 100
                }, {
                    stat: "Energy Cost",
                    value: e => 80 / e.EnergyRecharge
                }],
                varToggle: e => [new StatModifier("AttackSpeed", e.bVal("Normal Atk SPD Bonus")), new StatModifier("ElectroRES", e.bVal("Electro RES Bonus"))]
            }
        },
        Sucrose: {
            constellations: [{
                name: "Clustered Vacuum Field",
                desc: "Astable Anemohypostasis Creation - 6308 gains 1 additional charge."
            }, {
                name: "Beth - Unbound Form",
                desc: "The duration of Forbidden Creation - Isomer 75 / Type II is increased by 2s."
            }, {
                name: "Flawless Alchemistress",
                desc: "Increases the Level of Astable Anemohypostasis Creation - 6308 by 3. Maximum upgrade level is 15."
            }, {
                name: "Alchemania",
                desc: "Every 7 Normal and Charged Attacks, Sucrose will reduce the CD of Astable Anemohypostasis Creation - 6308 by 1 - 7s."
            }, {
                name: "Caution: Standard Flask",
                desc: "Increase the Level of Forbidden Creation - Isomer 75 / Type II by 3. Maximum upgrade level is 15."
            }, {
                name: "Chaotic Entropy",
                desc: "If Forbidden Creation - Isomer 75 / Type II triggers an Elemental Absorption, all party members gain a 20% Elemental DMG Bonus for the corresponding absorbed element during its duration."
            }],
            passives: [{
                name: "Catalyst Conversion",
                desc: "When Sucrose triggers a Swirl effect, characters in the party with the matching element have their Elemental Mastery increased by 50 for 8s."
            }, {
                name: "Mollis Favonius",
                desc: "When Astable Anemohypostatis Creation - 6308 or Forbidden Creation - Isomer 75 / Type II hit an enemy, increases other party member&#39s Elemental Mastery based on 20% of Sucrose&#39s Elemental Mastery for 8s."
            }],
            skill: {
                name: "Astable Anemohypostasis Creation - 6308",
                desc: "Creates a small Wind Spirit that deals Anemo DMG to enemies in an AoE, pulling them towards the location of the Wind Spirit before launching them. ",
                calcStats: [{
                    stat: "Skill DMG",
                    damage: e => e.sVal("Skill DMG")
                }]
            },
            burst: {
                name: "Forbidden Creation - Isomer 75 / Type II",
                desc: "Sucrose hurls an unstable concoction that creates a Large Wind Spirit. While it persists, the Large Wind Spirit will continuously pull and launch nearby enemies, dealing AoE Anemo DMG.   Elemental Absorption   If the Wind Spirit comes into contact with Hydro / Pyro / Cryo / Electro elements, it will deal additional DMG of that type.   Elemental Absorption may only occur once per use. ",
                calcStats: [{
                    stat: "DoT",
                    damage: e => e.bVal("DoT")
                }, {
                    stat: "Absorbed Pyro",
                    damage: e => e.bVal("Additional Elemental DMG"),
                    damageElement: "PyroDMG"
                }, {
                    stat: "Absorbed Cryo",
                    damage: e => e.bVal("Additional Elemental DMG"),
                    damageElement: "CryoDMG"
                }, {
                    stat: "Absorbed Hydro",
                    damage: e => e.bVal("Additional Elemental DMG"),
                    damageElement: "HydroDMG"
                }, {
                    stat: "Absorbed Electro",
                    damage: e => e.bVal("Additional Elemental DMG"),
                    damageElement: "ElectroDMG"
                }, {
                    stat: "Energy Cost",
                    value: e => 80 / e.EnergyRecharge
                }]
            }
        },
        Tartaglia: {
            constellations: [{
                name: "Foul Legacy: Tide Withholder",
                desc: "Decreases the CD of Foul Legacy: Raging Tide by 20%."
            }, {
                name: "Foul Legacy: Understream",
                desc: "When opponents affected by Riptide are defeated, Tartaglia regenerates 4 Elemental Energy."
            }, {
                name: "Abyssal Mayhem: Vortex of Turmoil",
                desc: "Increases the Level of Foul Legacy: Raging Tide by 3. Maximum upgrade level is 15."
            }, {
                name: "Abyssal Mayhem: Hydrospout",
                desc: "If Tartaglia is in Foul Legacy: Raging Tide&#39s Melee Stance, triggers Riptide Slash against opponents on the field affected by Riptide every 4s, otherwise, triggers Riptide Flash. Riptide Slashes and Riptide Flashes triggered by this Constellation effect are not subject to the time intervals that would typically apply to these two Riptide effects, nor do they have any effect on those time intervals.",
                calcStats: [{
                    stat: "Triggered Slash DPS",
                    damage: e => e.sVal("Riptide Slash") / 4,
                    damageType: "ElementalSkillDMG",
                    damageElement: "HydroDMG"
                }, {
                    stat: "Triggered Flash DPS",
                    damage: e => e.sVal("Riptide Flash DMG") / 4,
                    damageType: "ElementalSkillDMG",
                    damageElement: "HydroDMG"
                }]
            }, {
                name: "Havoc: Formless Blade",
                desc: "Increase the Level of Havoc: Obliteration by 3. Maximum upgrade level is 15."
            }, {
                name: "Havoc: Annihilation",
                desc: "When Havoc: Obliteration is cast in Melee Stance, the CD of Foul Legacy: Raging Tide is reset. This effect will only take place once Tartaglia returns to his Ranged Stance."
            }],
            passives: [{
                name: "Never Ending",
                desc: "Extends Riptide duration by 8s."
            }, {
                name: "Sword of Torrents",
                desc: "When Tartaglia is in Foul Legacy: Raging Tide&#39s Melee Stance, or if his Normal and Charged Attacks do CRIT DMG, they will apply the Riptide status effect on the hit enemy."
            }],
            skill: {
                name: "Foul Legacy: Raging Tide",
                desc: "Unleashes a set of weaponry made of pure water, dealing Hydro DMG to surrounding opponents and entering a Melee Stance. In this Stance, Tartaglia&#39s Normal and Charged Attacks change as follows: Normal Attack Performs up to 6 consecutive Hydro strikes. Charged Attack Consumes a certain amount of Stamina to unleash a cross slash, dealing Hydro DMG. Riptide Slash Hitting an opponent affected by Riptide with a melee attack unleashes a Riptide Slash that deals AoE Hydro DMG. DMG dealt in this way is considered Elemental Skill DMG, and can only occur once every 1.5s. After 30s, or when the ability is unleashed again, this skill will end. Tartaglia will return to his Ranged Stance and this ability will enter CD. The longer Tartaglia stays in his Melee Stance, the longer the CD. If the return to a ranged stance occurs automatically after 30s, the CD is even longer.",
                calcStats: [{
                    stat: "Melee DPS",
                    damage: e => (e.sVal("Hit-1 DMG") + e.sVal("Hit-2 DMG") + e.sVal("Hit-3 DMG") + e.sVal("Hit-4 DMG") + e.sVal("Hit-5 DMG") + e.sVal("Hit-6 DMG")) / (2.85 / (1 + e.AttackSpeed)),
                    damageType: "NormalAttackDMG"
                }, {
                    stat: "Riptide Slash",
                    damage: e => e.sVal("Riptide Slash")
                }, {
                    stat: "Melee Total DPS",
                    damage: e => {
                        let t = (e.sVal("Hit-1 DMG") + e.sVal("Hit-2 DMG") + e.sVal("Hit-3 DMG") + e.sVal("Hit-4 DMG") + e.sVal("Hit-5 DMG") + e.sVal("Hit-6 DMG")) / (2.85 / (1 + e.AttackSpeed)),
                            a = e.sVal("Riptide Slash") / 1.5;
                        return t * (1 + e.AllDMG + e.NormalAttackDMG + e.totalStats.stats.HydroDMG) + a * (1 + e.AllDMG + e.ElementalSkillDMG + e.totalStats.stats.HydroDMG)
                    },
                    noBonus: !0
                }, {
                    stat: "Riptide DPS",
                    damage: e => e.sVal("Riptide Slash") / 1.5
                }, {
                    stat: "Stance Change DMG",
                    damage: e => e.sVal("Stance Change DMG")
                }, {
                    stat: "Hit-1 DMG",
                    damage: e => e.sVal("Hit-1 DMG"),
                    damageType: "NormalAttackDMG"
                }, {
                    stat: "Hit-2 DMG",
                    damage: e => e.sVal("Hit-2 DMG"),
                    damageType: "NormalAttackDMG"
                }, {
                    stat: "Hit-3 DMG",
                    damage: e => e.sVal("Hit-3 DMG"),
                    damageType: "NormalAttackDMG"
                }, {
                    stat: "Hit-4 DMG",
                    damage: e => e.sVal("Hit-4 DMG"),
                    damageType: "NormalAttackDMG"
                }, {
                    stat: "Hit-5 DMG",
                    damage: e => e.sVal("Hit-5 DMG"),
                    damageType: "NormalAttackDMG"
                }, {
                    stat: "Hit-6 DMG",
                    damage: e => e.sVal("Hit-6 DMG"),
                    damageType: "NormalAttackDMG"
                }, {
                    stat: "Charged Attack DMG",
                    damage: e => e.sVal("Charged Attack DMG"),
                    damageType: "ChargedAttackDMG"
                }]
            },
            burst: {
                name: "Havor: Obliteration",
                desc: "Performs different attacks based on what stance Tartaglia is in when casting. Ranged Stance: Flash of Havoc Swiftly fires a Hydro-imbued magic arrow,    dealing AoE Hydro DMG and applying the Riptide status. Returns a portion of its Energy Cost after use.   Melee Stance: Light Obliteration   Performs a slash with a large AoE, dealing massive Hydro DMG to all surrounding opponents, which triggers Riptide Blast.   Riptide Blast   When the obliterating waters hit an opponent affected by Riptide, it clears their Riptide status and triggers a Hydro Explosion that deals AoE Hydro DMG. DMG dealt in this way is considered Elemental Burst DMG. ",
                calcStats: [{
                    stat: "Total Melee DMG",
                    damage: e => e.bVal("Skill DMG: Melee") + e.bVal("Riptide Blast DMG")
                }, {
                    stat: "Skill DMG: Melee",
                    damage: e => e.bVal("Skill DMG: Melee")
                }, {
                    stat: "Skill DMG: Ranged",
                    damage: e => e.bVal("Skill DMG: Ranged")
                }, {
                    stat: "Riptide Blast DMG",
                    damage: e => e.bVal("Riptide Blast DMG")
                }, {
                    stat: "Energy Cost",
                    value: e => 60 / e.EnergyRecharge
                }]
            }
        },
        "Traveler (Anemo)": {
            constellations: [{
                name: "Raging Vortex",
                desc: "Palm Vortex pulls in enemies within a 5m radius."
            }, {
                name: "Uprising Whirlwind",
                desc: "Increases Energy Recharge by 16%.",
                effect: [new StatModifier("EnergyRecharge", .16)]
            }, {
                name: "Sweeping Gust",
                desc: "Increases the Level of Gust Surge by 3. Maximum upgrade level is 15."
            }, {
                name: "Cherishing Breezes",
                desc: "Reduces DMG taken while casting Palm Vortex by 10%."
            }, {
                name: "Vortex Stellaris",
                desc: "Increase the Level of Palm Vortex by 3. Maximum upgrade level is 15."
            }, {
                name: "Intertwined Winds",
                desc: "Targets who take DMG from Gust Surge have their Anemo RES decreased by 20%.  If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.",
                toggle_debuff: [new StatModifier("AnemoDMG", .2)]
            }],
            passives: [{
                name: "Slitting Wind",
                desc: "The last hit of a Normal Attack combo unleashes a wind blade, dealing 60% of ATK as Anemo DMG to all opponents in its path.",
                calcStats: [{
                    stat: "Wind Blade",
                    damage: e => .6,
                    damageType: "NormalAttackDMG",
                    damageElement: "AnemoDMG"
                }]
            }, {
                name: "Second Wind",
                desc: "Palm Vortex kills renegerate 2% HP for 5s. This effect can only occur once every 5s."
            }],
            skill: {
                name: "Palm Vortex",
                desc: "Grasping the wind&#39s might, you form a vortex of vacuum in your palm, causing continuous Anemo DMG to enemies in front of you.   The vacuum vortex explodes when the skill duration ends, causing a greater amount of Anemo DMG over a larger area.   Hold   DMG and AoE will gradually increase   Elemental Absorption   If the vortex comes in contact with Hydro / Pyro / Cryo / Electro elements, it will deal additional elemental DMG of that type.   Elemental Absorption may only occur once per use. ",
                calcStats: [{
                    stat: "Initial Cutting DMG",
                    damage: e => e.sVal("Initial Cutting DMG")
                }, {
                    stat: "Max Cutting DMG",
                    damage: e => e.sVal("Max Cutting DMG")
                }, {
                    stat: "Initial Storm DMG",
                    damage: e => e.sVal("Initial Storm DMG")
                }, {
                    stat: "Max Storm DMG",
                    damage: e => e.sVal("Max Storm DMG")
                }]
            },
            burst: {
                name: "Gust Surge",
                desc: "Guiding the path of the wind currents, you summon a forward - moving tornado that pulls objects and opponents towards itself, dealing continuous Anemo DMG.   Elemental Absorption   If the tornado comes in contact with Hydro / Pyro / Cryo / Electro elements, it will deal additional elemental DMG of that type.   Elemental Absorption may only occur once per use. ",
                calcStats: [{
                    stat: "Tornado DMG",
                    damage: e => e.bVal("Tornado DMG")
                }, {
                    stat: "Absorbed Pyro",
                    damage: e => e.bVal("Additional Elemental DMG"),
                    damageElement: "PyroDMG"
                }, {
                    stat: "Absorbed Cryo",
                    damage: e => e.bVal("Additional Elemental DMG"),
                    damageElement: "CryoDMG"
                }, {
                    stat: "Absorbed Hydro",
                    damage: e => e.bVal("Additional Elemental DMG"),
                    damageElement: "HydroDMG"
                }, {
                    stat: "Absorbed Electro",
                    damage: e => e.bVal("Additional Elemental DMG"),
                    damageElement: "ElectroDMG"
                }, {
                    stat: "Energy Cost",
                    value: e => 60 / e.EnergyRecharge
                }]
            }
        },
        "Traveler (Geo)": {
            constellations: [{
                name: "Invincible Stonewall",
                desc: "Allies within the radius of Wake of Earth have their CRIT Rate increased by 10% and have increased resistance against interruption.",
                toggle: [new StatModifier("CritRate", .1)]
            }, {
                name: "Rockcore Meltdown",
                desc: "When the meteorite created by Starfell Sword is destroyed, it will also explode, dealing additional AoE Geo DMG equal to the amount of damage dealt by Starfell Sword.",
                calcStats: [{
                    stat: "Explosion DMG",
                    damage: e => 2.48,
                    damageType: "ElementalSkillDMG",
                    damageElement: "GeoDMG"
                }]
            }, {
                name: "Will of the Rock",
                desc: "Increases the Level of Wake of Earth by 3. Maximum upgrade level is 15."
            }, {
                name: "Reaction Force",
                desc: "The shockwave triggered by Wake of Earth regenerates 5 Energy for every enemy hit.  A maximum of 25 Energy can be recovered in this manner at any one time."
            }, {
                name: "Meteorite Impact",
                desc: "Increase the Level of Starfell Sword by 3. Maximum upgrade level is 15."
            }, {
                name: "Everlasting Boulder",
                desc: "The barrier created by Wake of Earth lasts 5s longer.  The meteorite created by Starfell Sword lasts 10s longer."
            }],
            passives: [{
                name: "Shattered Darkrock",
                desc: "Reduces Starfell Sword&#39s CD by 2s."
            }, {
                name: "Frenzied Rockslide",
                desc: "The final hit of a Normal Attack combo triggers a collapse, dealing 60% of ATK as AoE Geo DMG.",
                calcStats: [{
                    stat: "Collapse",
                    damage: e => .6,
                    damageType: "NormalAttackDMG",
                    damageElement: "GeoDMG"
                }]
            }],
            skill: {
                name: "Starfell Sword",
                desc: "You disgorge a meteorite from the depths of the earth, dealing AoE Geo DMG.  The meteorite is considered a Geo Construct, and can be climbed or used to block attacks.   Hold   The skill&#39s positioning may be adjusted.",
                calcStats: [{
                    stat: "Skill DMG",
                    damage: e => e.sVal("Skill DMG")
                }]
            },
            burst: {
                name: "Wake of Earth",
                desc: "Energizing the Geo elements deep underground, you set off expanding shockwaves.  Launches surrounding enemies back and deals AoE Geo DMG.   A stone wall is erected at the edges of the shockwave.   The stone wall is considered a Geo Construct, and may be used to block attacks.",
                calcStats: [{
                    stat: "DMG Per Shockwave",
                    damage: e => e.bVal("DMG Per Shockwave")
                }, {
                    stat: "Energy Cost",
                    value: e => 60 / e.EnergyRecharge
                }]
            }
        },
        Venti: {
            constellations: [{
                name: "Splitting Gale",
                desc: "Fires 2 additional arrows per Aimed Shot, each dealing 33% of the original arrow&#39s DMG.",
                calcStats: [{
                    stat: "Additional Arrow",
                    damage: e => .33 * e.charge1 / 100,
                    damageType: "ChargedAttackDMG",
                    damageElement: "Default"
                }, {
                    stat: "Additonal Fully Charged",
                    damage: e => .33 * e.charge2 / 100,
                    damageType: "ChargedAttackDMG",
                    damageElement: "Elemental"
                }]
            }, {
                name: "Breeze of Reminiscence",
                desc: "Skyward Sonnet decreases enemy Anemo RES by 12% for 10s.  Enemies launched by Skyward Sonnet suffer an additional 12% Anemo RES and Physical RES decrease while airborne.",
                toggle_debuff: [new StatModifier("AnemoDMG", .24), new StatModifier("PhysicalDMG", .15)]
            }, {
                name: "Ode to Thousand Winds",
                desc: "Increases the Level of Wind&#39s Grand Ode by 3. Maximum upgrade level is 15."
            }, {
                name: "Hurricane of Freedom",
                desc: "When Venti picks up an Elemental Orb or Particle, he receives a 25% Anemo DMG Bonus for 10s.",
                toggle: [new StatModifier("AnemoDMG", .25)]
            }, {
                name: "Concierto dal Cielo",
                desc: "Increase the Level of Skyward Sonnet by 3. Maximum upgrade level is 15."
            }, {
                name: "Storm of Defiance",
                desc: "Targets who take DMG from Wind&#39s Grand Ode have their Anemo RES decreased by 20%.  If an Elemental Absorption occurred, then their RES towards the corresponding Element is also decreased by 20%.",
                toggle_debuff: [new StatModifier("AnemoDMG", .2)]
            }],
            passives: [{
                name: "Embrace of Winds",
                desc: "Holding Skyward Sonnet creates an upcurrent that lasts for 20s."
            }, {
                name: "Stormeye",
                desc: "Regenerates 15 Energy for Venti after the effects of Wind&#39s Grand Ode end.  If an Elemental Absorption occurred, this also restores 15 Energy to all characters of that corresponding element."
            }],
            skill: {
                name: "Skyward Sonnet",
                desc: "Press   Summons a Wind Domain at the enemy&#39s location, dealing AoE Anemo DMG and launching enemies into the air. Hold Summons an even larger Wind Domain with Venti as the epicenter, dealing AoE Anemo DMG and launching affected enemies into the air.  After unleashing the Hold version of this ability, Venti rides the wind into the air. Enemies hit by Skyward Sonnet will fall to the ground slowly.",
                calcStats: [{
                    stat: "Press DMG",
                    damage: e => e.sVal("Press DMG")
                }, {
                    stat: "Hold DMG",
                    damage: e => e.sVal("Hold DMG")
                }]
            },
            burst: {
                name: "Wind&#39s Grand Ode",
                desc: "Fires off an arrow made of countless coalesced winds, creating a huge Stormeye that sucks in objects and enemies along its path, dealing continuous Anemo DMG.   Elemental Absorption   If the Stormeye comes into contact with Hydro / Pyro / Cryo / Electro elements, it will deal additional elemental DMG of that type.   Elemental Absorption may only occur once per use. ",
                calcStats: [{
                    stat: "DoT",
                    damage: e => e.bVal("DoT")
                }, {
                    stat: "Absorbed Pyro",
                    damage: e => e.bVal("Additional Elemental DMG"),
                    damageElement: "PyroDMG"
                }, {
                    stat: "Absorbed Cryo",
                    damage: e => e.bVal("Additional Elemental DMG"),
                    damageElement: "CryoDMG"
                }, {
                    stat: "Absorbed Hydro",
                    damage: e => e.bVal("Additional Elemental DMG"),
                    damageElement: "HydroDMG"
                }, {
                    stat: "Absorbed Electro",
                    damage: e => e.bVal("Additional Elemental DMG"),
                    damageElement: "ElectroDMG"
                }, {
                    stat: "Energy Cost",
                    value: e => 60 / e.EnergyRecharge
                }]
            }
        },
        Xiangling: {
            constellations: [{
                name: "Crispy Outside, Tender Inside",
                desc: "Enemies hit by Guoba&#39s attacks have their Pyro RES reduced by 15% for 6s.",
                toggle_debuff: [new StatModifier("PyroDMG", .15)]
            }, {
                name: "Oil Meets Fire",
                desc: "The last attack in a Normal Attack sequence applies the Implode status onto the enemy for 2s. An explosion will occur once this duration ends, dealing 75% of Xiangling&#39s ATK as AoE Pyro DMG.",
                calcStats: [{
                    stat: "Implosion",
                    damage: e => .75,
                    damageElement: "PyroDMG"
                }]
            }, {
                name: "Deepfry",
                desc: "Increases the Level of Pyronado by 3. Maximum upgrade level is 15."
            }, {
                name: "Slowbake",
                desc: "Pyronado&#39s duration is increased by 40%."
            }, {
                name: "Guoba Mad",
                desc: "Increase the Level of Guoba Attack by 3. Maximum upgrade level is 15."
            }, {
                name: "Condensed Pyronado",
                desc: "For the duration of Pyronado, all party members receive a 15% Pyro DMG Bonus.",
                toggle: [new StatModifier("PyroDMG", .15)]
            }],
            passives: [{
                name: "Crossfire",
                desc: "Increases the flame range of Guoba by 20%."
            }, {
                name: "Beware, It&#39s Super Hot!",
                desc: "When Guoba Attack&#39s effect ends, Guoba leaves a chili pepper on the spot where it disappeared.Picking up a chili pepper increases ATK by 10% for 10s.",
                toggle: [new StatModifier("ATKPercent", .1)]
            }],
            skill: {
                name: "Guoba Attack",
                desc: "Summons Guoba the Panda. Guoba continuously breathes fire, dealing AoE Pyro DMG.",
                calcStats: [{
                    stat: "Flame DMG",
                    damage: e => e.sVal("Flame DMG")
                }]
            },
            burst: {
                name: "Pyronado",
                desc: "Displaying her mastery over both fire and polearms, Xiangling sends a Pyronado whirling around her.   The Pyronado will move with your character for so long as the ability persists, dealing Pyro DMG to all enemies in its path.",
                calcStats: [{
                    stat: "Total Hit DMG",
                    damage: e => e.bVal("1-Hit DMG") + e.bVal("2-Hit DMG") + e.bVal("3-Hit DMG")
                }, {
                    stat: "1-Hit DMG",
                    damage: e => e.bVal("1-Hit DMG")
                }, {
                    stat: "2-Hit DMG",
                    damage: e => e.bVal("2-Hit DMG")
                }, {
                    stat: "3-Hit DMG",
                    damage: e => e.bVal("3-Hit DMG")
                }, {
                    stat: "Pyronado DMG",
                    damage: e => e.bVal("Pyronado DMG")
                }, {
                    stat: "Energy Cost",
                    value: e => 80 / e.EnergyRecharge
                }]
            }
        },
        Xingqiu: {
            constellations: [{
                name: "The Scent Remained",
                desc: "Increases the maximum number of Rain Swords by 1."
            }, {
                name: "Rainbow Upon the Azure Sky",
                desc: "Extends the duration of Guhua Sword - Raincutter by 3s.  Decreases the Hydro RES of enemies hit by sword rain attacks by 15% for 4s.",
                toggle_debuff: [new StatModifier("HydroDMG", .15)]
            }, {
                name: "Weaver of Verses",
                desc: "Increases the Level of Guhua Sword - Raincutter by 3. Maximum upgrade level is 15."
            }, {
                name: "Evilsoother",
                desc: "Throughout the duration of Guhua Sword: Raincutter, the DMG dealt by Guhua Sword: Fatal Rainscreen is increased by 50%.",
                calcStats: [{
                    stat: "Extra DMG",
                    damage: e => .5,
                    damageElement: "HydroDMG",
                    damageType: "ElementalSkillDMG"
                }, {
                    stat: "Total Skill DMG",
                    damage: e => 1.5 * e.sVal("Total Skill DMG"),
                    damageElement: "HydroDMG",
                    damageType: "ElementalSkillDMG"
                }]
            }, {
                name: "Embrace of Rain",
                desc: "Increase the Level of Guhua Sword - Fatal Rainscreen by 3. Maximum upgrade level is 15."
            }, {
                name: "Hence, Call Them My Own Verses",
                desc: "Activating 2 of Guhua Sword - Raincutter&#39s sword rain attacks greatly increases the DMG of the third. Xingqiu regenerates 3 Energy when sword rain attacks hit enemies."
            }],
            passives: [{
                name: "Hydropathic",
                desc: "When a Rain Sword is shattered or when its duration expires, it regenerates the current character&#39s HP based on 6% of Xingqiu&#39s Max HP.",
                calcStats: [{
                    stat: "Regen",
                    value: e => .06 * e.HP * (1 + e.Heal)
                }]
            }, {
                name: "Blades Amidst Raindrops",
                desc: "Xingqiu gains a 20% Hydro DMG Bonus.",
                effect: [new StatModifier("HydroDMG", .2)]
            }],
            skill: {
                name: "Guhua Sword - Fatal Rainscreen",
                desc: "Xingqiu performs twin strikes with his sword,  dealing Hydro DMG.At the same time, this ability creates the maximum number of Rain Swords, which will orbit the character.   The Rain Swords have the following properties:      When a character takes DMG, the Rain Sword will shatter, reducing the amount of DMG taken.   Increases the character&#39s resistance to interruption.  20% of Xingqiu&#39s Hydro DMG Bonus will be converted to additional DMG Reduction for the Rain Swords. The maximum amount of additional DMG Reduction that can be gained this way is 24%.  The initial maximum number of Rain Swords is 3.  Using this ability applies the Wet status onto the character.",
                calcStats: [{
                    stat: "Skill DMG",
                    damage: e => e.sVal("Total Skill DMG")
                }]
            },
            burst: {
                name: "Guhua Sword - Raincutter",
                desc: "Initiate Rainbow Bladework and fight using an illusory sword rain, while creating the maximum number of Rain Swords.   Rainbow Bladework     Normal Attacks will trigger consecutive sword rain attacks, dealing Hydro DMG.   Rain Swords will remain at the maximum number throughout the ability&#39s duration.  These effects carry over to other characters.",
                calcStats: [{
                    stat: "Sword Rain DMG",
                    damage: e => e.bVal("Sword Rain DMG")
                }, {
                    stat: "Energy Cost",
                    value: e => 80 / e.EnergyRecharge
                }]
            }
        },
        Zhongli: {
            constellations: [{
                name: "Rock, the Backbone of Earth",
                desc: "Increases the maximum number of Stone Steles created by Dominus Lapidis that may exist simultaneously to 2."
            }, {
                name: "Stone, the Cradle of Jade",
                desc: "Planet Befall grants nearby characters on the field a Jade Shield when it descends."
            }, {
                name: "Jade, Shimmering through Darkness",
                desc: "Increases the Level of Dominus Lapidis by 3. Maximum upgrade level is 15."
            }, {
                name: "Topaz, Unbreakable and Fearless",
                desc: "Increases Planet Befall&#39s AoE by 20% and increases the duration of Planet Befall&#39s Petrification effect by 2s."
            }, {
                name: "Lazuli, Herald of the Order",
                desc: "Increases the Level of Planet Befall by 3. Maximum upgrade level is 15."
            }, {
                name: "Chrysos, Bounty of Dominator",
                desc: "When the Jade Shield takes DMG, 40% of that incoming DMG is converted to HP for the current character. A single instance of regeneration cannot exceed 8% of that character&#39s Max HP."
            }],
            passives: [{
                name: "Resonant Waves",
                desc: "When the Jade Shield takes DMG, it will Fortify:Fortified characters have 5% increased Shield Strength.Can stack up to 5 times, and lasts until the Jade Shield disappears.",
                stack: [new StatModifier("PowerfulShield", .05)],
                stackCount: 5
            }, {
                name: "Dominance of Earth",
                desc: "Normal Attack, Charged Attack, and Plunging Attack DMG is increased by 1.39% of Max HP. Dominus Lapidis' Stone Stele, resonsance, and hold DMG is increased by 1.9% of Max HP. Planet Befall deals additional DMG equals to 33% of Zhongli&#39s Max HP.",
                calcStats: [{
                    stat: "Additional DMG",
                    damage: e => .33 * e.HP / e.ATK * (1 + e.AllDMG + e.ElementalBurstDMG + e.totalStats.stats.GeoDMG),
                    damageElement: "GeoDMG",
                    noBonus: !0
                }],
                scales: [{
                    to: new StatModifier("FLAT", 0),
                    from: e => new StatModifier("HP", .0139),
                    "for": "normal"
                }, {
                    to: new StatModifier("FLAT", 0),
                    from: e => new StatModifier("HP", .019),
                    "for": "skill"
                }]
            }],
            skill: {
                name: "Dominus Lapidis",
                desc: "Tap: Commands the omnipresent power of the earth to solidify into a Stone Stele, dealing AoE Geo DMG. Additionally, the Stone Stele will resonate with other Geo Constructs in the vicinity, dealing Geo DMG to surrounding enemies. The Stone Stele is considered a Geo Construct, and can both be climbed and used to block attacks. Only one Stele may exist at any one time. Hold: Causes nearby Geo energy to explode, causing the following effects: Creates a shield of jade. The shield&#39s DMG absorption scales based on Zhongli&#39s Max HP. Possesses 150% DMG Absorption against all Elemental and Physical DMG. Characters protected by the Jade Shield will decrease the Elemental RES and Physical RES of opponents in a small AoE by 20%. This effect cannot be stacked. Causes AoE Geo DMG. If there are nearby targets with the Geo element, it will drain a large amount of Geo element from a maximum of 2 such targets. This effect does not cause DMG.",
                calcStats: [{
                    stat: "Stone Stele",
                    damage: e => e.sVal("Stone Stele")
                }, {
                    stat: "Resonance DMG",
                    damage: e => e.sVal("Resonance DMG")
                }, {
                    stat: "Hold DMG",
                    damage: e => e.sVal("Hold DMG")
                }, {
                    stat: "Shield",
                    value: e => (e.sVal("Shield Mult") * e.HP + e.sVal("Shield Flat")) * (1 + e.PowerfulShield)
                }],
                toggle_debuff: [new StatModifier("PhysicalDMG", .2), new StatModifier("CryoDMG", .2), new StatModifier("PyroDMG", .2), new StatModifier("ElectroDMG", .2), new StatModifier("HydroDMG", .2), new StatModifier("DendroDMG", .2), new StatModifier("AnemoDMG", .2), new StatModifier("GeoDMG", .2)]
            },
            burst: {
                name: "Planet Befall",
                desc: "Brings a falling meteor down to earth, dealing massive Geo DMG to opponents caught in its AoE and applying the Petrification status to them.Petrification: Opponents affected by the Petrification status cannot move.",
                calcStats: [{
                    stat: "Burst DMG",
                    damage: e => e.bVal("Burst DMG")
                }, {
                    stat: "Total Burst DMG",
                    damage: e => (e.bVal("Burst DMG") * e.ATK + .33 * e.HP) * (1 + e.AllDMG + e.ElementalBurstDMG + e.totalStats.stats.GeoDMG) / e.ATK,
                    noBonus: !0
                }, {
                    stat: "Energy Cost",
                    value: e => 40 / e.EnergyRecharge
                }]
            }
        },
        Xinyan: {
            constellations: [{
                name: "Fatal Acceleration",
                desc: "Upon scoring a Crit hit, increases ATK SPD of Xinyan&#39s Normal and Charged Attacks by 12% for 5s. Can only occur once every 5s.",
                toggle: [new StatModifier("AttackSpeed", .12)]
            }, {
                name: "Impromptu Opening",
                desc: "Riff Revolution Physical DMG has its Crit rate increased by 100%, and will form a shield at Shield Level 3: Rave when cast.",
                burst: {
                    effect: [new StatModifier("CritRate", 1)]
                }
            }, {
                name: "Double-Stop",
                desc: "Increases the Level of Sweeping Fervor by 3. Maximum upgrade level is 15."
            }, {
                name: "Wildfire Rhythm",
                desc: "Sweeping Fervor&#39s swing DMG decrease opponents Physical RES by 15% for 12s.",
                toggle_debuff: [new StatModifier("PhysicalDMG", .15)]
            }, {
                name: "Screamin&#39 for an Encore",
                desc: "Increases the Level of Riff Revolution by 3. Maximum upgrade level is 15."
            }, {
                name: "Rockin&#39 in a Flaming World",
                desc: "Decrease the stamina consumption of Xinyan Charged Attacks by 30%. Additionally, Xinyan Charged Attack gain an ATK bonus equal to 50% of her DEF.",
                toggle_scale: {
                    to: new StatModifier("ATK", 0),
                    from: e => new StatModifier("DEF", .5)
                }
            }],
            passives: [{
                name: "The Show Goes On, Even Without An Audience...",
                desc: "Decreases the number of enemies Sweeping Fervor must hit to trigger each level of shielding.Shield Level 2: Lead-In requirement reduced to 1 enemy hit.Shield Level 3: Rave requirement reduced to 2 enemies hit or more."
            }, {
                name: "...Now That&#39s Rock &#39N&#39 Roll!",
                desc: "Characters shielded by Sweeping Fervor deal 15% increased Physical DMG.",
                toggle: [new StatModifier("PhysicalDMG", .15)]
            }],
            skill: {
                name: "Sweeping Fervor",
                desc: "Xinyan brandishes her instrument, dealing Pyro DMG on nearby enemies, forming a shield made out of her audience&#39s passion.The shield&#39s DMG Absorption scales based on Xinyan&#39s DEF and on the number of enemies hit.Hitting 0-1 enemies grants Shield Level 1: Ad Lib.Hitting 2 enemies grants Shield Level 2: Lead-In.Hitting 3 or more  enemies grants Shield Level 3: Rave, which will also deal intermittent Pyro DMG to nearby enemies.The shield has the following special properties:When unleashed, it infuses Xinyan with Pyro.It has 250% DMG Absorption effectiveness against Pyro DMG.",
                calcStats: [{
                    stat: "Swing DMG",
                    damage: e => e.sVal("Swing DMG")
                }, {
                    stat: "DoT",
                    damage: e => e.sVal("DoT")
                }, {
                    stat: "Shield Level 1",
                    value: e => (e.sVal("Shield Level 1 Mult") * e.DEF + e.sVal("Shield Level 1 Flat")) * (1 + e.PowerfulShield)
                }, {
                    stat: "Shield Level 2",
                    value: e => (e.sVal("Shield Level 2 Mult") * e.DEF + e.sVal("Shield Level 2 Flat")) * (1 + e.PowerfulShield)
                }, {
                    stat: "Shield Level 3",
                    value: e => (e.sVal("Shield Level 3 Mult") * e.DEF + e.sVal("Shield Level 3 Flat")) * (1 + e.PowerfulShield)
                }]
            },
            burst: {
                name: "Riff Revolution",
                desc: "Strumming rapidly, Xinyan launches nearby enemies and deals Physical DMG to them, hyping up the crowd. The sheer intensity of the atmosphere will cause explosions that deal Pyro DMG to nearby enemies.",
                calcStats: [{
                    stat: "Burst DMG",
                    damage: e => e.bVal("Burst DMG"),
                    damageElement: "PhysicalDMG"
                }, {
                    stat: "Pyro DoT",
                    damage: e => e.bVal("Pyro DoT"),
                    noBuff: !0
                }, {
                    stat: "Energy Cost",
                    value: e => 60 / e.EnergyRecharge
                }]
            }
        },
        Xiao: {
            constellations: [{
                name: "Dissolution Eon: Destroyer of Worlds",
                desc: "Increases Lemniscatic Wind Cycling&#39s charges by 1."
            }, {
                name: "Annihilation Eon: Blossom of Kaleidos",
                desc: "When in party but not the currently active character, Xiao&#39s Energy Recharge is increased by 25%."
            }, {
                name: "Evil Conqueror: Wrath Deity",
                desc: "Increases the Level of Lemniscatic Wind Cycling by 3. Maximum upgrade level is 15."
            }, {
                name: "Transcension: Extinction of Suffering",
                desc: "When Xiao&#39s HP falls below 50%, gains a 100% DEF Bonus.",
                toggle: [new StatModifier("DEFPercent", 1)]
            }, {
                name: "Evolution Eon: Origin of Ignorance",
                desc: "Increase the Level of Bane of All Evil by 3. Maximum upgrade level is 15."
            }, {
                name: "Evil Conqueror: Vigilant Yaksha",
                desc: "During Bane of All Evil, hitting 2 or more enemies with a Charged Attack grants Lemniscatic Wind Cycling 1 additional charge and reduces Lemniscatic Wind Cycling&#39s CD by 1s."
            }],
            passives: [{
                name: "Evil Conqueror: Tamer of Demons",
                desc: "Starting Bane of All Evil increases Xiao&#39s DMG by 5%. After this, Xiao&#39s DMG continues to increase by 5% every 3s until the skill ends. Max 25% increase.",
                stack: [new StatModifier("AllDMG", .05)],
                stackCount: 5
            }, {
                name: "Dissolution Eon: Heaven Fall",
                desc: "When Lemniscatic Wind Cycling is used, increases all subsequent Lemniscatic Wind Cycling&#39s DMG by 15% for 6s. Max 3 stacks. Duration refreshes with new stacks.",
                stack: [new StatModifier("ElementalSkillDMG", .15)],
                stackCount: 3
            }],
            skill: {
                name: "Lemniscatic Wind Cycling",
                desc: "Xiao lunges forward, dealing Anemo DMG to enemies along the path. Can be used in mid - air. Has 2 charges to begin with.",
                calcStats: [{
                    stat: "Skill DMG",
                    damage: e => e.sVal("Skill DMG")
                }]
            },
            burst: {
                name: "Bane of All Evil",
                desc: "Takes on the form of the yaksha that terrified both demons and archons alike millennia ago. For its duration, increases Xiao&#39s attack range and DMG, while converting damage type to Anemo and enhancing Xiao&#39s jumping ability. Maintaining this form continuously drains Xiao&#39s HP.",
                calcStats: [{
                    stat: "HP Drain per Second",
                    value: e => e.bVal("Life Drain")
                }, {
                    stat: "Energy Cost",
                    value: e => 70 / e.EnergyRecharge
                }],
                varToggle: e => [new StatModifier("NormalAttackDMG", e.bVal("Normal Attack/charge2 Bonus")), new StatModifier("ChargedAttackDMG", e.bVal("Normal Attack/charge2 Bonus")), new StatModifier("PlungingDMG", e.bVal("Normal Attack/charge2 Bonus"))],
                toggle: [new StatModifier("NormalType", "AnemoDMG")]
            }
        },
        Ganyu: {
            constellations: [{
                name: "Dew-Drinker",
                desc: "Taking DMG from a Charge Level 2 Frostflake Arrow or Frostflake Arrow Bloom decreases enemies&#39 Cryo RES by 15% for 6s. A hit regenerates 2 Energy for Ganyu. This effect can only occur once per Charge Level 2 Frostflake Arrow, regardless if Frostflake Arrow itself or its Bloom hit the target.",
                toggle_debuff: [new StatModifier("CryoDMG", .15)]
            }, {
                name: "The Auspicious",
                desc: "Trail of the Qilin gains 1 additional charge."
            }, {
                name: "Cloud-Strider",
                desc: "Increases the Level of Celestial Shower by 3. Maximum upgrade level is 15."
            }, {
                name: "Westward Sojourn",
                desc: "Enemies standing within the AoE of Celestial Shower take increased DMG. This effect strengthens over time. Increased DMG taken begins at 5% and increases by 5% every 3s, up to a maximum of 25%. The effect lingers for 3s after the enemy leaves the AoE.",
                stack: [new StatModifier("AllDMG", .05)],
                stackCount: 5
            }, {
                name: "The Merciful",
                desc: "Increases the Level of Trail of the Qilin by 3. Maximum upgrade level is 15."
            }, {
                name: "The Clement",
                desc: "Using Trail of the Qilin causes the next Frostflake Arrow shot within 30s to not require charging."
            }],
            passives: [{
                name: "Undivided Heart",
                desc: "After firing a Frostflake Arrow, the CRIT Rate of subsequent Frostflake Arrows and their resulting bloom effects is increased by 20% for 5s.",
                extras: {
                    toggle: [new StatModifier("CritRate", .2)]
                }
            }, {
                name: "Harmony between Heaven and Earth",
                desc: "Celestial Shower grants a 20% Cryo DMG Bonus to active party members in the AoE.",
                toggle: [new StatModifier("CryoDMG", .2)]
            }],
            skill: {
                name: "Trail of the Qilin",
                desc: "Leaving a single Ice Lotus behind, Ganyu dashes backward, shunning all impurity and dealing AoE Cryo DMG. Ice Lotus   Continuously taunts surrounding enemies, attracting them to attack it.   Endurance scales based on Ganyu&#39s Max HP.   Blooms profusely when destroyed or once its duration ends, dealing AoE Cryo DMG. ",
                calcStats: [{
                    stat: "Skill DMG",
                    damage: e => e.sVal("Skill DMG")
                }, {
                    stat: "Inherited HP",
                    value: e => e.HP * e.sVal("Inherited HP")
                }]
            },
            burst: {
                name: "Celestial Shower",
                desc: "Coalesces atmospheric frost and snow to summon a Sacred Cryo Pearl that exorcises evil. During its ability duration, the Sacred Cryo Pearl will continuously rain down shards of ice, striking enemies within an AoE and dealing Cryo DMG. ",
                calcStats: [{
                    stat: "Ice Shard DMG",
                    damage: e => e.bVal("Ice Shard DMG")
                }, {
                    stat: "Energy Cost",
                    value: e => 60 / e.EnergyRecharge
                }]
            },
            extras: {
                calcStats: [{
                    stat: "Frostflake Arrow",
                    damage: e => e.nVal("Frostflake Arrow DMG"),
                    damageElement: "CryoDMG",
                    damageType: "ChargedAttackDMG",
                    isExtra: !0
                }, {
                    stat: "Bloom DMG",
                    damage: e => e.nVal("Frostflake Arrow Bloom DMG"),
                    damageElement: "CryoDMG",
                    damageType: "ChargedAttackDMG",
                    isExtra: !0
                }]
            }
        },
        Albedo: {
            constellations: [{
                name: "Flower of Eden",
                desc: "Transient Blossoms generated by Albedo&#39s Abiogenesis: Solar Isotoma regenerate 1.2 Energy for Albedo."
            }, {
                name: "Opening of Phanerozoic",
                desc: "Transient Blossoms generated by Abiogenesis: Solar Isotoma grant Albedo Fatal Reckoning for 30s: Each stack of Fatal Reckoning increases DMG by 30% of Albedo&#39s DEF. The effect stacks up to 4 times. Unleashing Rite of Progeniture: Tectonic Tide consumes all stacks of Fatal Reckoning, increasing the DMG dealt by the Tectonic Tide and Fatal Blossoms based on the number of stacks consumed.",
                stack_scale: {
                    to: new StatModifier("FLAT", 0),
                    from: e => new StatModifier("DEF", .3),
                    "for": "burst"
                },
                stackCount: 4
            }, {
                name: "Grace of Helios",
                desc: "Increases the Level of Abiogenesis: Solar Isotoma by 3. Maximum upgrade level is 15."
            }, {
                name: "Descent of Divinity",
                desc: "Solar Isotoma increases Plunging Attack DMG by 30% for active party members within the AoE.",
                toggle: [new StatModifier("PlungingDMG", .3)]
            }, {
                name: "Tide of Hadean",
                desc: "Increases the Level of Rite of Progeniture - Tectonic Tide by 3. Maximum upgrade level is 15."
            }, {
                name: "Dust of Purification",
                desc: "If active party members within the AoE are protected by a shield created by Crystallize, Solar Isotoma increases their DMG by 17%.",
                toggle: [new StatModifier("AllDMG", .17)]
            }],
            passives: [{
                name: "Calcite Might",
                desc: "Transient Blossoms generated by Abiogenesis: Solar Isotoma deal 25% more DMG to enemies whose HP is below 50%.",
                toggle: [new StatModifier("ElementalSkillDMG", .25)]
            }, {
                name: "Homuncular Nature",
                desc: "Using Rite of Progeniture: Tectonic Tide increases the Elemental Mastery of nearby party members by 125 for 10s.",
                toggle: [new StatModifier("ElementalMastery", 125)]
            }],
            skill: {
                name: "Abiogenesis: Solar Isotoma",
                desc: "Albedo creates a Solar Isotoma using alchemy, which deals AoE Geo DMG on appearance. Solar Isotoma has the following properties:   When enemies within the Solar Isotoma field take DMG, the Solar Isotoma will generate Transient Blossoms which deal AoE Geo DMG. DMG dealt scales off Albedo&#39s DEF.    Transient Blossoms can only be generated once every 2s.   When a character is located at the locus of the Solar Isotoma, the Solar Isotoma will accumulate Geo power to form a crystallized platform that lifts the character up to a certain height. Only one crystallized platform can exist at a time.   Solar Isotoma is considered a Geo construct. Hold to designate the location of the skill. ",
                calcStats: [{
                    stat: "Skill DMG",
                    damage: e => e.sVal("Skill DMG")
                }, {
                    stat: "Transient Blossom DMG",
                    damage: e => e.sVal("Transient Blossom DMG") * e.DEF / e.ATK
                }]
            },
            burst: {
                name: "Rite of Progeniture: Tectonic Tide",
                desc: "Under Albedo&#39s command, Geo crystals surge and burst forth, dealing AoE Geo DMG in front of him. If a Solar Isotoma created by Albedo himself is on the field, 7 Fatal Blossoms will be generated in the Solar Isotoma field, bursting violently into bloom and dealing AoE Geo DMG. Tectonic Tide DMG and Fatal Blossom DMG will not generate Transient Blossoms. ",
                calcStats: [{
                    stat: "Burst DMG",
                    damage: e => e.bVal("Burst DMG")
                }, {
                    stat: "Fatal Blossom DMG",
                    damage: e => e.bVal("Fatal Blossom DMG")
                }]
            }
        },
        Rosaria: {
            constellations: [{
                name: "Unholy Revelation",
                desc: "When Rosaria deals a CRIT Hit, her ATK SPD increases by 10% and her Normal Attack DMG increases by 10% for 4s.",
                toggle: [new StatModifier("AttackSpeed", .1), new StatModifier("NormalAttackDMG", .1)]
            }, {
                name: "Land Without Promise",
                desc: "The duration of the Ice Lance created by Rites of Termination is increased by 4s."
            }, {
                name: "The Wages of Sin",
                desc: "Increases the Level of Ravaging Confession by 3. Maximum upgrade level is 15."
            }, {
                name: "Painful Grace",
                desc: "Ravaging Confession's CRIT Hits regenerate 5 Energy for Rosaria. Can only be triggered once each time Ravaging Confession is cast."
            }, {
                name: "Last Rites",
                desc: "Increases the Level of Rites of Termination by 3. Maximum upgrade level is 15."
            }, {
                name: "Divine Retribution",
                desc: "Rites of Termination's attack decreases opponents' Physical RES by 20% for 10s.",
                toggle_debuff: [new StatModifier("PhysicalDMG", .2)]
            }],
            passives: [{
                name: "Regina Probationum",
                desc: "When Rosaria strikes an opponent from behind using Ravaging Confession, Rosaria's CRIT Rate increases by 12% for 5s.",
                toggle: [new StatModifier("CritRate", .12)]
            }, {
                name: "Shadow Samaritan",
                desc: "Casting Rites of Termination increases CRIT Rate of all nearby party members (except Rosaria herself) by 15% of Rosaria's CRIT Rate for 10s. CRIT Rate Bonus gained this way cannot exceed 15%."
            }],
            skill: {
                name: "Ravaging Confession",
                desc: "Rosaria swiftly shifts her position to appear behind her opponent, then stabs and slashes them with her polearm, dealing Cryo DMG. This ability cannot be used to travel behind opponents of a larger build.",
                calcStats: [{
                    stat: "Skill DMG",
                    damage: e => e.sVal("Skill DMG")
                }]
            },
            burst: {
                name: "Rites of Termination",
                desc: "Rosaria's unique take on this prayer ritual: First, she swings her weapon to slash surrounding opponents; then, she summons a frigid Ice Lance that strikes the ground. Both actions deal Cryo DMG. While active, the Ice Lance periodically releases a blast of cold air, dealing Cryo DMG to surrounding opponents.",
                calcStats: [{
                    stat: "Burst DMG",
                    damage: e => e.bVal("Burst DMG")
                }, {
                    stat: "Ice Lance DoT",
                    damage: e => e.bVal("Ice Lance DoT")
                }, {
                    stat: "Energy Cost",
                    value: e => 60 / e.EnergyRecharge
                }]
            }
        },
        Ayaka: {
            constellations: [{
                name: "Snowswept Sakura",
                desc: "When Kamisato Ayaka's Normal or Charged Attacks deal Cryo DMG to opponents, it has a 50% chance of decreasing the CD of Kamisato Art: Hyouka by 0.3s. This effect can occur once every 0.1s."
            }, {
                name: "Blizzard Blade Seki no To",
                desc: "When casting Kamisato Art: Soumetsu, unleashes 2 smaller additional Frostflake Seki no To, each dealing 20% of the original storm's DMG.",
                calcStats: [{
                    stat: "Smaller Frostflake DMG",
                    damage: e => .2 * e.bVal("Cutting DMG")
                }]
            }, {
                name: "Frostbloom Kamifubuki",
                desc: "Increases the Level of Kamisato Art: Soumetsu by 3. Maximum upgrade level is 15."
            }, {
                name: "Ebb and Flow",
                desc: "Opponents damaged by Kamisato Art: Soumetsu's Frostflake Seki no To will have their DEF decreased by 30% for 6s.",
                toggle_debuff: [new StatModifier("DEF", .3)]
            }, {
                name: "Blossom Cloud Irutsuki",
                desc: "Increases the Level of Kamisato Art: Hyouka by 3. Maximum upgrade level is 15."
            }, {
                name: "Dance of Suigetsu",
                desc: "Kamisato Ayaka gains Usurahi Butou every 10s, increasing her Charged Attack DMG by 298%. This buff will be cleared 0.5s after Ayaka's Charged ATK hits an opponent, after which the timer for this ability will restart.",
                toggle: [new StatModifier("ChargedAttack", 2.98)]
            }],
            passives: [{
                name: "Amatsumi Kunitsumi Sanctification",
                desc: "After using Kamisato Art: Hyouka, Kamisato Ayaka's Normal and Charged Attacks deal 30% increased DMG for 6s.",
                toggle: [new StatModifier("NormalAttackDMG", .3), new StatModifier("ChargedAttackDMG", .3)]
            }, {
                name: "Kanten Senmyou Blessing",
                desc: "When the Cryo application at the end of Kamisato Art: Senho hits an opponent, Kamisato Ayaka gains the following effects:  Restores 10 Stamina,  Gains 18% Cryo DMG Bonus for 10s.",
                toggle: [new StatModifier("CryoDMG", .18)]
            }, {
                name: "Kamisato Art: Senho",
                desc: "Ayaka consumes Stamina and cloaks herself in a frozen fog that moves with her. When she reappears, she unleashes Cryo on nearby opponents and infuses her attacks with Cryo for a brief period.",
                toggle: [new StatModifier("NormalType", "CryoDMG")]
            }],
            skill: {
                name: "Kamisato Art: Hyouka",
                desc: "Summons blooming ice to launch nearby opponents, dealing AoE Cryo DMG.",
                calcStats: [{
                    stat: "Skill DMG",
                    damage: e => e.sVal("Skill DMG")
                }]
            },
            burst: {
                name: "Kamisato Art: Soumetsu",
                desc: "Summons forth a snowstorm with flawless poise, unleashing a Frostflake Seki no To that moves forward continuously. Frostflake Seki no To � A storm of whirling icy winds that slashes repeatedly at every enemy it touches, dealing Cryo DMG. � The snowstorm explodes after its duration ends, dealing AoE Cryo DMG.",
                calcStats: [{
                    stat: "Cutting DMG",
                    damage: e => e.bVal("Cutting DMG")
                }, {
                    stat: "Bloom DMG",
                    damage: e => e.bVal("Bloom DMG")
                }]
            }
        },
        Hutao: {
            constellations: [{
                name: "Crimson Bouquet",
                desc: "While in a Paramita Papilio state activated by Guide to Afterlife, Hu Tao's Charge Attacks do not consume Stamina."
            }, {
                name: "Ominous Rainfall",
                desc: "Increases the Blood Blossom DMG by an amount equal to 10% of Hu Tao's Max HP at the time the effect is applied. Additionally, Spirit Soother will also apply the Blood Blossom effect.",
                scale: {
                    to: new StatModifier("FLAT", 0),
                    from: e => new StatModifier("HP", .1),
                    "for": "skill"
                }
            }, {
                name: "Lingering Carmine",
                desc: "Increases the Level of Guide to Afterlife by 3. Maximum upgrade level is 15."
            }, {
                name: "Garden of Eternal Rest",
                desc: "Upon defeating an enemy affected by a Blood Blossom that Hu Tao applied herself, all nearby allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 15s."
            }, {
                name: "Floral Incense",
                desc: "Increases the Level of Spirit Soother by 3. Maximum upgrade level is 15."
            }, {
                name: "Butterfly's Embrace",
                desc: "Triggers when Hu Tao's HP drops below 25%, or when she suffers a lethal strike: Hu Tao will not fall as a result of the DMG sustained. Additionally, for the next 10s, all of her Elemental and Physical RES is increased by 200%, her CRIT Rate is increased by 100%, and her resistance to interruption is greatly increased. This effect triggers automatically when Hu Tao has 1 HP left. Can only occur once every 60s.",
                toggle: [new StatModifier("PhysicalRES", 2), new StatModifier("CritRate", 1), new StatModifier("PyroRES", 2), new StatModifier("HydroRES", 2), new StatModifier("CryoRES", 2), new StatModifier("DendroRES", 2), new StatModifier("ElectroRES", 2), new StatModifier("AnemoRES", 2), new StatModifier("GeoRES")]
            }],
            passives: [{
                name: "Flutter By",
                desc: "When a Paramita Papilio state activated by Guide to Afterlife ends, all allies in the party (excluding Hu Tao herself) will have their CRIT Rate increased by 12% for 8s."
            }, {
                name: "Sanguine Rouge",
                desc: "When Hu Tao's HP is equal to or less than 50%, her Pyro DMG Bonus is increased by 33%.",
                toggle: [new StatModifier("PyroDMG", .33)]
            }],
            skill: {
                name: "Guide to Afterlife",
                desc: "Hu Tao consumes a set portion of her HP to knock the surrounding enemies back and enter the Paramita Papilio state. Paramita Papilio Increases Hu Tao's ATK based on her Max HP at the time of entering this state. ATK Bonus gained this way cannot exceed 400% of Hu Tao's Base ATK. Converts attack DMG to Pyro DMG, which cannot be overridden by any other elemental infusion. Charged Attacks apply the Blood Blossom effect to the enemies hit. Increases Hu Tao's resistance to interruption. Blood Blossom Enemies affected by Blood Blossom will take Pyro DMG every 4s. This DMG is considered Elemental Skill DMG. Each enemy can be affected by only one Blood Blossom effect at a time, and its duration may only be refreshed by Hu Tao herself. Paramita Papilio ends when its duration is over, or Hu Tao has left the battlefield or fallen.",
                calcStats: [{
                    stat: "Blood Blossom DMG",
                    damage: e => e.sVal("Blood Blossom DMG")
                }],
                toggle_scale: {
                    to: new StatModifier("ATK", 0),
                    from: e => new StatModifier("HP", e.sVal("ATK Increase")),
                    maximum: e => 4 * e.baseStats.stats.ATK
                },
                toggle: [new StatModifier("NormalType", "PyroDMG")]
            },
            burst: {
                name: "Spirit Soother",
                desc: "Commands a blazing spirit to attack, dealing Pyro DMG in a large AoE. Upon striking the enemy, regenerates a percentage of Hu Tao's Max HP. This effect can be triggered up to 5 times, based on the number of enemies hit. If Hu Tao's HP is below or equal to 50% when the enemy is hit, both the DMG and HP Regeneration are increased.",
                calcStats: [{
                    stat: "Burst DMG",
                    damage: e => e.bVal("Burst DMG")
                }, {
                    stat: "Low HP Burst DMG",
                    damage: e => e.bVal("Low HP Burst DMG")
                }, {
                    stat: "HP Regeneration",
                    value: e => e.bVal("HP Regeneration") * e.HP * (1 + e.Heal)
                }, {
                    stat: "Low HP Regeneration",
                    value: e => e.bVal("Low HP Regeneration") * e.HP * (1 + e.Heal)
                }]
            }
        },
        Yanfei: {
            constellations: [{
                name: "The Law Knows No Kindness",
                desc: "When Yanfei uses her Charged Attack, each existing Scarlet Seal additionally reduces the stamina cost of this Charged Attack by 10% and increases resistance against interruption during its release."
            }, {
                name: "Right of Final Interpretation",
                desc: "Increases Yanfei's Charged Attack CRIT Rate by 20% against enemies below 50% HP.",
                toggle: [new StatModifier("CritRate", .2)]
            }, {
                name: "Samadhi Fire-Forged",
                desc: "Increases the Level of Signed Edict by 3. Maximum upgrade level is 15."
            }, {
                name: "Supreme Amnesty",
                desc: "When Done Deal is used: Creates a shield that absorbs up to 45% of Yanfei's Max HP for 15s. This shield absorbs Pyro DMG 250% more effectively.",
                calcStats: [{
                    stat: "Amnesty Shield",
                    value: e => .45 * e.HP * (1 + e.PowerfulShield)
                }]
            }, {
                name: "Abiding Affidavit",
                desc: "Increases the Level of Done Deal by 3. Maximum upgrade level is 15."
            }, {
                name: "Extra Clause",
                desc: "Increases the maximum number of Scarlet Seals by 1."
            }],
            passives: [{
                name: "Proviso",
                desc: "When Yanfei consumes Scarlet Seals by using a Charged Attack, each Scarlet Seal will increase Yanfei's Pyro DMG Bonus by 5%. This effects lasts for 6s. When a Charged Attack is used again during the effect's duration, it will dispel the previous effect.",
                stack: [new StatModifier("PyroDMG", .05)],
                stackCount: 5
            }, {
                name: "Blazing Eye",
                desc: "When Yanfei's Charged Attack deals a CRIT Hit to opponents, she will deal an additional instance of AoE Pyro DMG equal to 80% of her ATK. This DMG counts as Charged Attack DMG.",
                calcStats: [{
                    stat: "AoE Pyro DMG",
                    damage: e => .8,
                    damageType: "ChargedAttackDMG",
                    damageElement: "PyroDMG"
                }]
            }],
            skill: {
                name: "Signed Edict",
                desc: "Summons blistering flames that deal AoE Pyro DMG. Opponents hit by the flames will grant Yanfei the maximum number of Scarlet Seals.",
                calcStats: [{
                    stat: "Skill DMG",
                    damage: e => e.sVal("Skill DMG")
                }]
            },
            burst: {
                name: "Done Deal",
                desc: "Triggers a spray of intense flames that rush at nearby opponents, dealing AoE Pyro DMG, granting Yanfei the maximum number of Scarlet Seals, and applying Brilliance to her. Brilliance Has the following effects: • Grants Yanfei a Scarlet Seal at fixed intervals. • Increases the DMG dealt by her Charged Attacks. The effects of Brilliance will end if Yanfei leaves the field or falls in battle.",
                calcStats: [{
                    stat: "Burst DMG",
                    damage: e => e.bVal("Burst DMG")
                }],
                varToggle: e => [new StatModifier("ChargedAttackDMG", e.bVal("charge2 Bonus"))]
            }
        },
        Eula: {
            constellations: [{
                name: "Tidal Illusion",
                desc: "Every time Icetide Vortex's Grimheart stacks are consumed, Eula's Physical DMG is increased by 30% for 6s. Each stack consumed will increase the duration of this effect by 6s up to a maximum of 18s.",
                toggle: [new StatModifier("PhysicalDMG", .3)]
            }, {
                name: "Lady of Seafoam",
                desc: "Decreases the CD of Icetide Vortex's Holding Mode, rendering it identical to Press CD."
            }, {
                name: "Lawrence Pedigree",
                desc: "Increases the Level of Glacial Illumination by 3. Maximum upgrade level is 15."
            }, {
                name: "The Obstinacy of One's Inferiors",
                desc: "Lightfall Swords deal 25% increased DMG against opponents with less than 50% HP.",
                toggle: [new StatModifier("ElementalBurstDMG", .25)]
            }, {
                name: "Chivalric Quality",
                desc: "Increases the Level of Icetide Vortex by 3. Maximum upgrade level is 15."
            }, {
                name: "Noble Obligation",
                desc: "Lightfall Swords created by Glacial Illumination start with 5 stacks of energy. Normal Attacks, Elemental Skills, and Elemental Bursts have a 50% chance to grant the Lightfall Sword an additional stack of energy."
            }],
            passives: [{
                name: "Roiling Rime",
                desc: "If 2 stacks of Grimheart are consumed upon unleashing the Holding Mode of Icetide Vortex, a Shattered Lightfall Sword will be created that will explode immediately, dealing 50% of the basic Physical DMG dealt by a Lightfall Sword created by Glacial Illumination.",
                calcStats: [{
                    stat: "Shattered Lightfall Sword",
                    damage: e => e.bVal("Lightfall Sword Base DMG") / 2,
                    damageType: "ElementalBurstDMG",
                    damageElement: "PhysicalDMG"
                }]
            }, {
                name: "Wellspring of War-Lust",
                desc: "When Glacial Illumination is cast, the CD of Icetide Vortex is reset and Eula gains 1 stack of Grimheart."
            }],
            skill: {
                name: "Icetide Vortex",
                desc: "Press Slashes swiftly, dealing Cryo DMG. When it hits an opponent, Eula gains a stack of Grimheart that stacks up to 2 times. These stacks can only be gained once every 0.3s. Grimheart Increases Eula's resistance to interruption and DEF. Hold Wielding her sword, Eula consumes all the stacks of Grimheart and lashes forward, dealing AoE Cryo DMG to opponents in front of her. If Grimheart stacks are consumed, surrounding opponents will have their Physical RES and Cryo RES decreased. Each consumed stack of Grimheart will be converted into an Icewhirl Brand that deals Cryo DMG to nearby opponents.",
                calcStats: [{
                    stat: "Press DMG",
                    damage: e => e.sVal("Press DMG")
                }, {
                    stat: "Hold DMG",
                    damage: e => e.sVal("Hold DMG")
                }, {
                    stat: "Icewhirl Brand DMG",
                    damage: e => e.sVal("Icewhirl Brand DMG")
                }],
                stack: [new StatModifier("DEFPercent", .3)],
                stackCount: 2,
                varToggle_debuff: e => [new StatModifier("PhysicalDMG", e.sVal("Physical RES Decrease")), new StatModifier("CryoDMG", e.sVal("Physical RES Decrease"))]
            },
            burst: {
                name: "Glacial Illumination",
                desc: "Brandishes her greatsword, dealing Cryo DMG to nearby opponents and creating a Lightfall Sword that follows her around for a duration of up to 7s. While present, the Lightfall Sword increases Eula's resistance to interruption. When Eula's own Normal Attack, Elemental Skill, and Elemental Burst deal DMG to opponents, they will charge the Lightfall Sword, which can gain an energy stack once every 0.1s. Once its duration ends, the Lightfall Sword will descend and explode violently, dealing Physical DMG to nearby opponents. This DMG scales on the number of energy stacks the Lightfall Sword has accumulated. If Eula leaves the field, the Lightfall Sword will explode immediately.",
                calcStats: [{
                    stat: "Burst DMG",
                    damage: e => e.bVal("Burst DMG")
                }, {
                    stat: "Lightfall Sword Base DMG",
                    damage: e => e.bVal("Lightfall Sword Base DMG"),
                    damageElement: "PhysicalDMG"
                }, {
                    stat: "DMG per Stack",
                    damage: e => e.bVal("DMG"),
                    damageElement: "PhysicalDMG"
                }, {
                    stat: "Maximum Lightfall DMG",
                    damage: e => 30 * e.bVal("DMG") + e.bVal("Lightfall Sword Base DMG"),
                    damageElement: "PhysicalDMG"
                }, {
                    stat: "Energy Cost",
                    value: e => 80 / e.EnergyRecharge
                }]
            }
        },
        Kazuha: {
            constellations: [{
                name: "Scarlet Hills",
                desc: "Decreases Chihayaburu's CD by 10%. Using Kazuha Slash resets the CD of Chihayaburu."
            }, {
                name: "Yamaarashi Tailwind",
                desc: "The Autumn Whirlwind field created by Kazuha Slash has the following effects: � Increases Kaedehara Kazuha's own Elemental Mastery by 200. � Increases the Elemental Mastery of characters within the field by 200. The Elemental Mastery-increasing effects of this Constellation do not stack.",
                toggle: [new StatModifier("ElementalMastery", 200)]
            }, {
                name: "Maple Monogatari",
                desc: "Increases the Level of Chihayaburu by 3. Maximum upgrade level is 15."
            }, {
                name: "Oozora Genpou",
                desc: "#When Kaedehara Kazuha's Energy is lower than 45, he obtains the following effects: Chihayaburu regenerates 3 or 4 Energy for Kaedehara Kazuha, respectively. � When gliding, Kaedehara Kazuha regenerates 2 Energy per second."
            }, {
                name: "Wisdom of Bansei",
                desc: "Increases the Level of Kazuha Slash by 3. Maximum upgrade level is 15."
            }, {
                name: "Crimson Momiji",
                desc: "After using Chihayaburu or Kazuha Slash, Kaedehara Kazuha gains an Anemo Infusion for 5s. Additionally, each point of Elemental Mastery will increase the DMG dealt by Kaedehara Kazuha's Normal, Charged, and Plunging Attack by 0.2%.",
                toggle: [new StatModifier("NormalAttack", "AnemoDMG")]
            }],
            passives: [{
                name: "Soumon Swordsmanship",
                desc: "If Chihayaburu comes into contact with Hydro/Pyro/Cryo/Electro when cast, Chihayaburu will absorb that element and if Plunging Attack: Midare Ranzan is used before the effect expires, it will deal an additional 200% ATK of the absorbed elemental type as DMG. This will be considered Plunging Attack DMG. Elemental Absorption may only occur once per use of Chihayaburu."
            }, {
                name: "Poetics of Fuubutsu",
                desc: "Upon triggering a Swirl reaction, Kaedehara Kazuha will grant teammates a 0.04% Elemental DMG Bonus to their corresponding Element for every point of Elemental Mastery he has for 8s. Bonuses for different elements obtained through this method can co-exist."
            }],
            skill: {
                name: "Chihayaburu",
                desc: "#Unleashes a secret technique as fierce as the rushing wind that pulls objects and opponents towards Kazuha's current position before launching opponents within the AoE, dealing Anemo DMG and lifting Kazuha into the air on a rushing gust of wind. Within 10s of remaining airborne after casting Chihayaburu, Kazuha can unleash a powerful Plunging Attack known as Midare Ranzan. Press Can be used in mid-air. Hold Charges up before unleashing greater Anemo DMG over a larger AoE than Press Mode. Plunging Attack: Midare Ranzan When a Plunging Attack is performed using the effects of the Elemental Skill Chihayaburu, Plunging Attack DMG is converted to Anemo DMG. On landing, Kazuha creates a small wind tunnel via a secret blade technique that pulls in nearby objects and opponents. Midare Ranzan's DMG is considered Plunging Attack DMG.",
                calcStats: [{
                    stat: "Press DMG",
                    damage: e => e.sVal("Press Skill DMG")
                }, {
                    stat: "Hold DMG",
                    damage: e => e.sVal("Hold Skill DMG")
                }, {
                    stat: "Anemo Plunge",
                    damage: e => e.nVal("Plunge DMG"),
                    damageElement: "AnemoDMG",
                    damageType: "PlungingDMG"
                }, {
                    stat: "Anemo Low Plunge",
                    damage: e => e.nVal("Low Plunge DMG"),
                    damageElement: "AnemoDMG",
                    damageType: "PlungingDMG"
                }, {
                    stat: "Anemo High Plunge",
                    damage: e => e.nVal("High Plunge DMG"),
                    damageElement: "AnemoDMG",
                    damageType: "PlungingDMG"
                }]
            },
            burst: {
                name: "Kazuha Slash",
                desc: "The signature technique of Kazuha's self-styled bladework a single slash that strikes with the force of the first winds of autumn, dealing AoE Anemo DMG. The blade's passage will leave behind a field named Autumn Whirlwind that periodically deals AoE Anemo DMG to opponents within its range. Elemental Absorption If Autumn Whirlwind comes into contact with Hydro/Pyro/Cryo/Electro, it will deal additional elemental DMG of that type. Elemental Absorption may only occur once per use.",
                calcStats: [{
                    stat: "Slash DMG",
                    damage: e => e.bVal("Slashing DMG")
                }, {
                    stat: "Damage over Time",
                    damage: e => e.bVal("DoT")
                }, {
                    stat: "Additional DMG",
                    damage: e => e.bVal("Additional Elemental DMG"),
                    damageElement: "PyroDMG"
                }]
            }
        },
        Yoimiya: {
            constellations: [{
                name: "Agate Ryuukin",
                desc: "The Aurous Blaze created by Ryuukin Saxifrage lasts for an extra 4s. Additionally, when an opponent affected by Aurous Blaze is defeated within its duration, Yoimiya's ATK is increased by 20% for 20s.",
                toggle: [new StatModifier("ATKPercent", .2)]
            }, {
                name: "A Procession of Bonfires",
                desc: "When Yoimiya's Pyro DMG scores a CRIT Hit, Yoimiya will gain a 25% Pyro DMG Bonus for 6s. This effect can be triggered even when Yoimiya is not the active character.",
                toggle: [new StatModifier("PyroDMG", .25)]
            }, {
                name: "Trickster's Flare",
                desc: "Increases the Level of Niwabi Fire-Dance by 3. Maximum upgrade level is 15."
            }, {
                name: "Pyrotechnic Professional",
                desc: "When Yoimiya's own Aurous Blaze triggers an explosion, Niwabi Fire-Dance's CD is decreased by 1.2s."
            }, {
                name: "A Summer Festival's Eve",
                desc: "Increases the Level of Ryuukin Saxifrage by 3. Maximum upgrade level is 15."
            }, {
                name: "Naganohara Meteor Swarm",
                desc: "During Niwabi Fire-Dance, Yoimiya's Normal Attacks have a 50% chance of firing an extra Kindling Arrow that deals 60% of its original DMG. This DMG is considered Normal Attack DMG.",
                calcStats: [{
                    stat: "Extra Kindling Arrow",
                    damage: e => .6,
                    damageType: "NormalAttackDMG",
                    damageElement: "PyroDMG"
                }]
            }],
            passives: [{
                name: "Tricks of the Trouble-Maker",
                desc: "During Niwabi Fire-Dance, shots from Yoimiya's Normal Attack will increase her Pyro DMG Bonus by 2% on hit. This effect lasts for 3s and can have a maximum of 10 stacks.",
                stack: [new StatModifier("PyroDMG", .02)],
                stackCount: 10
            }, {
                name: "Summer Night's Dawn",
                desc: "Using Ryuukin Saxifrage causes nearby party members (not including Yoimiya) to gain a 10% ATK increase for 15s. Additionally, a further ATK Bonus will be added on based on the number of Tricks of the Trouble- Maker stacks Yoimiya possesses when using Ryuukin Saxifrage. Each stack increases this ATK Bonus by 1%."
            }],
            skill: {
                name: "Niwabi Fire-Dance",
                desc: "Yoimiya waves a sparkler and causes a ring of saltpeter to surround her. Niwabi Enshou During this time, arrows fired by Yoimiya's Normal Attack will be Blazing Arrows, and their DMG will be increased and converted to Pyro DMG. During this time, Normal Attack: Firework Flare-Up will not generate Kindling Arrows at Charge Level 2. This effect will deactivate when Yoimiya leaves the field.",
                calcStats: [{
                    stat: "Blazing Hit-1",
                    damage: e => e.nVal("Hit-1") * e.sVal("Blazing Arrow DMG"),
                    damageType: "NormalAttackDMG"
                }, {
                    stat: "Blazing Hit-2",
                    damage: e => e.nVal("Hit-2") * e.sVal("Blazing Arrow DMG"),
                    damageType: "NormalAttackDMG"
                }, {
                    stat: "Blazing Hit-3",
                    damage: e => e.nVal("Hit-3") * e.sVal("Blazing Arrow DMG"),
                    damageType: "NormalAttackDMG"
                }, {
                    stat: "Blazing Hit-4",
                    damage: e => e.nVal("Hit-4") * e.sVal("Blazing Arrow DMG"),
                    damageType: "NormalAttackDMG"
                }, {
                    stat: "Blazing Hit-5",
                    damage: e => e.nVal("Hit-5") * e.sVal("Blazing Arrow DMG"),
                    damageType: "NormalAttackDMG"
                }, {
                    stat: "DPS during Skill",
                    damage: e => (e.nVal("Hit-1") + e.nVal("Hit-2") + e.nVal("Hit-3") + e.nVal("Hit-4") + e.nVal("Hit-5")) * e.sVal("Blazing Arrow DMG") / (e.comboTime / (1 + e.AttackSpeed)),
                    damageType: "NormalAttackDMG"
                }]
            },
            burst: {
                name: "Ryuukin Saxifrage",
                desc: "Yoimiya leaps into the air along with her original creation, the Ryuukin Saxifrage, and fires forth blazing rockets bursting with surprises that deal AoE Pyro DMG and mark one of the hit opponents with Aurous Blaze. Aurous Blaze All Normal/Charged/Plunging Attacks, Elemental Skills, and Elemental Bursts by any party member other than Yoimiya that hit an opponent marked by Aurous Blaze will trigger an explosion, dealing AoE Pyro DMG. When an opponent affected by Aurous Blaze is defeated before its duration expires, the effect will pass on to another nearby opponent, who will inherit the remaining duration. One Aurous Blaze explosion can be triggered every 2s. When Yoimiya is down, Aurous Blaze effects created through her skills will be deactivated.",
                calcStats: [{
                    stat: "Burst DMG",
                    damage: e => e.bVal("Burst DMG")
                }, {
                    stat: "Aurous Blaze",
                    damage: e => e.bVal("Aurous Blaze Explosion DMG")
                }, {
                    stat: "Energy Cost",
                    value: e => 60 / e.EnergyRecharge
                }]
            }
        },
        Sayu: {
            constellations: [{
                name: "Multi-Task no Jutsu",
                desc: "The Muji-Muji Daruma created by Yoohoo Art: Mujina Flurry will ignore HP limits and can simultaneously attack nearby opponents and heal characters."
            }, {
                name: "Egress Prep",
                desc: "#Yoohoo Art: Fuuin Dash gains the following effects: DMG of Fuufuu Whirlwind Kick in Press Mode increased by 3.3%. Every 0.5s in the Fuufuu Windwheel state will increase the DMG of this Fuufuu Whirlwind Kick by 3.3%. The maximum DMG increase possible through this method is 66%.",
                stack: [new StatModifier("ElementalSkillDMG", .033)],
                stackCount: 20
            }, {
                name: "Eh, the Bunshin Can Handle It",
                desc: "Increases the Level of Yoohoo Art: Mujina Flurry by 3. Maximum upgrade level is 15."
            }, {
                name: "Skiving: New and Improved",
                desc: "Sayu recovers 1.2 Energy when she triggers a Swirl reaction. This effect occurs once every 2s."
            }, {
                name: "Speed Comes First",
                desc: "Increases the Level of Yoohoo Art: Fuuin Dash by 3. Maximum upgrade level is 15."
            }, {
                name: "Sleep O'Clock",
                desc: "The Muji-Muji Daruma created by Sayu's Yoohoo Art: Mujina Flurry will now also benefit from her Elemental Mastery. Each point of Sayu's Elemental Mastery will produce the following effects: Increases the damage dealt by the Muji-Muji Daruma's attacks by 0.2% ATK. A maximum of 400% ATK can be gained via this method. Increases the HP restored by the Muji-Muji Daruma by 3. A maximum of 6,000 additional HP can be restored in this manner."
            }],
            passives: [{
                name: "Someone More Capable",
                desc: "When Sayu triggers a Swirl reaction while active, she heals all your characters and nearby allies for 300 HP. She will also heal an additional 1.2 HP for every point of Elemental Mastery she has. This effect can be triggered once every 2s."
            }, {
                name: "No Work Today!",
                desc: "The Muji-Muji Daruma created by Yoohoo Art: Mujina Flurry gains the following effects:  When healing a character, it will also heal characters near that healed character for 20% the amount of HP.  Increases the AoE of its attack against opponents."
            }],
            skill: {
                name: "Yoohoo Art: Fuuin Dash",
                desc: "#The special technique of the Yoohoo Ninja Arts! Sayu curls up into a rolling Fuufuu Windwheel and smashes into opponents at high speed, dealing Anemo DMG. When the duration ends, she unleashes a Fuufuu Whirlwind Kick, dealing AoE Anemo DMG. Press Enters the Fuufuu Windwheel state, rolling forward a short distance before using the Fuufuu Whirlwind Kick. Hold Rolls about continuously in the Fuufuu Windwheel state, increasing Sayu's resistance to interruption while within that state. During this time, Sayu can control the direction of her roll, and can use the skill again to end her Windwheel state early and unleash a stronger version of the Fuufuu Whirlwind Kick. The Hold version of this skill can trigger Elemental Absorption. This skill has a maximum duration of 10s and enters CD once its effects end. The longer Sayu remains in her Windwheel state, the longer the CD. Elemental Absorption If Sayu comes into contact with Hydro/Pyro/Cryo/Electro while in her Windwheel state, she will deal additional elemental DMG of that type. Elemental Absorption may only occur once per use of this skill.",
                calcStats: [{
                    stat: "Fuufuu Windwheel DMG",
                    damage: e => e.sVal("Fuufuu Windwheel DMG")
                }, {
                    stat: "Fuufuu WindWheel Elemental DMG",
                    damage: e => e.sVal("Fuufuu Windwheel Elemental DMG")
                }, {
                    stat: "Press Kick DMG",
                    damage: e => e.sVal("Press Fuufuu Whirlwind Kick DMG")
                }, {
                    stat: "Hold Kick DMG",
                    damage: e => e.sVal("Hold Fuufuu Whirlwind Kick DMG")
                }, {
                    stat: "Elemental Kick DMG",
                    damage: e => e.sVal("Fuufuu Whirlwind Kick Elemental DMG")
                }]
            },
            burst: {
                name: "Yoohoo Art: Mujina Flurry",
                desc: "The other super special technique of the Yoohoo Ninja Arts! It summons a pair of helping hands for Sayu. Deals Anemo DMG to nearby opponents and heals all nearby party members. The amount of HP restored is based on Sayu's ATK. This skill then summons a Muji-Muji Daruma. Muji-Muji Daruma At specific intervals, the Daruma will take one of several actions based on the situation around it: � If the HP of nearby characters is above 70%, it will attack a nearby opponent, dealing Anemo DMG. � If there are active characters with 70% or less HP nearby, it will heal the active character with the lowest percentage HP left. If there are no opponents nearby, it will heal active characters nearby even if they have 70% HP or more.",
                calcStats: [{
                    stat: "Burst DMG",
                    damage: e => e.bVal("Burst Activation DMG")
                }, {
                    stat: "Burst Heal",
                    value: e => (e.bVal("Burst Activation Healing Mult") * e.ATK + e.bVal("Burst Activation Healing Flat")) * (1 + e.Heal)
                }, {
                    stat: "Muji-Muji Daruma DMG",
                    damage: e => e.bVal("Muji-Muji Daruma DMG")
                }, {
                    stat: "Muji-Muji Daruma Heal",
                    value: e => (e.bVal("Muji-Muji Daruma Healing Mult") * e.ATK + e.bVal("Muji-Muji Daruma Healing Flat")) * (1 + e.Heal)
                }, {
                    stat: "Energy Cost",
                    value: e => 80 / e.EnergyRecharge
                }]
            }
        },
        Shogun: {
            constellations: [{
                name: "Ominous Inscription",
                desc: "Chakra Desiderata will gather Resolve even faster. When Electro characters use their Elemental Bursts, the Resolve gained is increased by 80%. When characters of other Elemental Types use their Elemental Bursts, the Resolve gained is increased by 20%."
            }, {
                name: "Steelbreaker",
                desc: "Secret Art: Musou Shinsetsu's Musou no Hitotachi and Musou Isshin attacks will ignore 60% of opponents' DEF.",
                burst: {
                    debuff: new StatModifier("PhysicalDMG", .6)
                }
            }, {
                name: "Shinkage Bygones",
                desc: "Increases the Level of Secret Art: Musou Shinsetsu by 3. Maximum upgrade level is 15."
            }, {
                name: "Pledge of Propriety",
                desc: "When the Musou Isshin state applied by Secret Art: Musou Shinsetsu expires, all nearby party members (excluding the Raiden Shogun) gain 30% bonus ATK for 10s."
            }, {
                name: "Shogun's Descent",
                desc: "Increases the Level of Transcendence: Baleful Omen by 3. Maximum upgrade level is 15."
            }, {
                name: "Wishbearer",
                desc: "While in the Musou Isshin state applied by Secret Art: Musou Shinsetsu, the Raiden Shogun's Normal, Charged, and Plunging Attacks will decrease all nearby party members' (but not including the Raiden Shogun herself) Elemental Burst CD by 1s when they hit opponents. This effect can trigger once every 1s, and can trigger a total of 5 times during the state's duration."
            }],
            passives: [{
                name: "Wishes Unnumbered",
                desc: "When nearby party members gain Elemental Orbs or Particles, Chakra Desiderata gains 2 Resolve stacks. This effect can occur once every 3s."
            }, {
                name: "Enlightened One",
                desc: "Each 1% above 100% Energy Recharge that the Raiden Shogun possesses grants her: 0.6% greater Energy restoration from Musou Isshin and 0.4% Electro DMG Bonus.",
                scale: {
                    to: new StatModifier("ElectroDMG", 0),
                    from: e => new StatModifier("EnergyRecharge", .4),
                    minThreshold: 1
                }
            }],
            skill: {
                name: "Transcendence: Baleful Omen",
                desc: "The Raiden Shogun unveils a shard of her Euthymia, dealing Electro DMG to nearby opponents, and granting nearby party members the Eye of Stormy Judgment. Eye of Stormy Judgment : When characters with this buff attack and deal DMG to opponents, the Eye will unleash a coordinated attack, dealing AoE Electro DMG at the opponent's position. Characters who gain the Eye of Stormy Judgment will have their Elemental Burst DMG increased based on the Energy Cost of the Elemental Burst during the Eye's duration. The Eye can initiate one coordinated attack every 0.9s per party. Coordinated attacks generated by characters not controlled by you deal 20% of the normal DMG.",
                calcStats: [{
                    stat: "Skill DMG",
                    damage: e => e.sVal("Skill DMG")
                }, {
                    stat: "Coordinated ATK DMG",
                    damage: e => e.sVal("Coordinated ATK DMG")
                }],
                scale: {
                    to: new StatModifier("ElementalBurstDMG", 0),
                    from: e => new StatModifier("EnergyRecharge", e.sVal("Elemental Burst DMG Bonus"))
                }
            },
            burst: {
                name: "Secret Art: Musou Shinsetsu",
                desc: "Gathering truths unnumbered and wishes uncounted, the Raiden Shogun unleashes the Musou no Hitotachi and deals AoE Electro DMG, using Musou Isshin in combat for a certain duration afterward. The DMG dealt by Musou no Hitotachi and Musou Isshin's attacks will be increased based on the number of Chakra Desiderata's Resolve stacks consumed when this skill is used (minimum 1). Musou Isshin While in this state, the Raiden Shogun will wield her tachi in battle, while her Normal, Charged, and Plunging Attacks will be infused with Electro DMG, which cannot be overridden. When such attacks hit opponents, she will regenerate Energy for all nearby party members. Energy can be restored this way once every 1s, and this effect can be triggered 5 times throughout this skill's duration. While in this state, the Raiden Shogun's resistance to interruption is increased, and she is immune to Electro-Charged reaction DMG. While Musou Isshin is active, the Raiden Shogun's Normal, Charged, and Plunging Attack DMG will be considered Elemental Burst DMG. The effects of Musou Isshin will be cleared when the Raiden Shogun leaves the field. Chakra Desiderata When nearby party members (excluding the Raiden Shogun herself) use their Elemental Bursts, the Raiden Shogun will build up Resolve stacks based on the Energy Cost of these Elemental Bursts. The maximum number of Resolve stacks is 60. The Resolve gained by Chakra Desiderata will be cleared 300s after the Raiden Shogun leaves the field.",
                calcStats: [{
                    stat: "Musou no Hitotachi",
                    damage: e => e.bVal("Musou no Hitotachi Base DMG")
                }, {
                    stat: "Hit-1 DMG",
                    damage: e => e.bVal("Hit-1 DMG")
                }, {
                    stat: "Hit-2 DMG",
                    damage: e => e.bVal("Hit-2 DMG")
                }, {
                    stat: "Hit-3 DMG",
                    damage: e => e.bVal("Hit-3 DMG")
                }, {
                    stat: "Hit-4 DMG",
                    damage: e => e.bVal("Hit-4 DMG")
                }, {
                    stat: "Hit-5 DMG",
                    damage: e => e.bVal("Hit-5 DMG")
                }, {
                    stat: "Charged Attack Total",
                    damage: e => e.bVal("charge2 DMG")
                }],
                varToggle: e => [new StatModifier("ElementalBurstDMG", e.bVal("Resolve Bonus"))],
                stack: e => [new StatModifier("ElementalBurstDMG", e.bVal("Resolve Bonus Mult"))],
                stackCount: 60
            }
        },
        Kokomi: {
            constellations: [{
                name: "At Water's Edge",
                desc: "While donning the Ceremonial Garment created by Nereid's Ascension, the final Normal Attack in Sangonomiya Kokomi's combo will unleash a swimming fish to deal 30% of her Max HP as Hydro DMG. This DMG is not considered Normal Attack DMG.",
                calcStats: [{
                    stat: "Fish DMG",
                    damage: e => .3 * e.HP * (1 + e.AllDMG + e.totalStats.stats.HydroDMG) / e.ATK,
                    damageElement: "HydroDMG",
                    noBonus: !0
                }]
            }, {
                name: "The Clouds Like Waves Rippling",
                desc: "Sangonomiya Kokomi gains the following Healing Bonuses with regard to characters with 50% or less HP via the following methods: � Kurage's Oath Bake-Kurage: 4.5% of Kokomi's Max HP. Nereid's Ascension Normal and Charged Attacks: 0.6% of Kokomi's Max HP."
            }, {
                name: "The Moon, A Ship O'er the Seas",
                desc: "Increases the Level of Nereid's Ascension by 3. Maximum upgrade level is 15."
            }, {
                name: "The Moon Overlooks the Waters",
                desc: "While donning the Ceremonial Garment created by Nereid's Ascension, Sangonomiya Kokomi's Normal Attack SPD is increased by 10%, and Normal Attacks that hit opponents will restore 0.8 Energy for her. This effect can occur once every 0.2s."
            }, {
                name: "All Streams Flow to the Sea",
                desc: "Increases the Level of Kurage's Oath by 3. Maximum upgrade level is 15."
            }, {
                name: "Sango Isshin",
                desc: "While donning the Ceremonial Garment created by Nereid's Ascension, Sangonomiya Kokomi gains a 40% Hydro DMG Bonus for 4s after her Normal and Charged Attacks heal a character with 80% or more HP.",
                toggle: [new StatModifier("HydroDMG", .4)]
            }],
            passives: [{
                name: "Song of Pearls",
                desc: "While donning the Ceremonial Garment created by Nereid's Ascension, the Normal and Charged Attack DMG Bonus Sangonomiya Kokomi gains based on her Max HP will receive a further increase based on 15% of her Healing Bonus."
            }, {
                name: "Flawless Strategy",
                desc: "Sangonomiya Kokomi has a 25% Healing Bonus, but a 100% decrease in CRIT Rate.",
                effect: [new StatModifier("Heal", .25), new StatModifier("CritRate", -1)]
            }],
            skill: {
                name: "Kurage's Oath",
                desc: "Summons a bake- kurage created from water that can heal her allies. Using this skill will apply the Wet status to Sangonomiya Kokomi. Bake-Kurage Deals Hydro DMG to surrounding opponents and heal nearby active characters at fixed intervals. This healing is based on Kokomi's Max HP.",
                calcStats: [{
                    stat: "Ripple DMG",
                    damage: e => e.sVal("Ripple DMG")
                }, {
                    stat: "Regeneration",
                    value: e => e.sVal("Regeneration Flat") + e.sVal("Regeneration Mult") * e.HP
                }]
            },
            burst: {
                name: "Nereid's Ascension",
                desc: "The might of Watatsumi descends, dealing Hydro DMG to surrounding opponents, before robing Kokomi in a Ceremonial Garment made from the flowing waters of Sangonomiya. Ceremonial Garment � Sangonomiya Kokomi's Normal Attack, Charged Attack and Bake-Kurage DMG are increased based on her Max HP. � When her Normal and Charged Attacks hit opponents, Kokomi will restore HP for all nearby party members, and the amount restored is based on her Max HP. � Increases Sangonomiya Kokomi's resistance to interruption and allows her to move on the water's surface. These effects will be cleared once Sangonomiya Kokomi leaves the field.",
                calcStats: [{
                    stat: "Burst DMG",
                    damage: e => e.bVal("Burst DMG")
                }, {
                    stat: "Regeneration Per Hit",
                    value: e => e.sVal("HP Regeneration Per Hit Flat") + e.sVal("HP Regeneration Per Hit Mult") * e.HP
                }],
                toggle_scales: [{
                    to: new StatModifier("ElementalSkillDMG", 0),
                    from: e => new StatModifier("HP", e.bVal("Bake-Kurage DMG Bonus")),
                    "for": "skill"
                }, {
                    to: new StatModifier("NormalAttackDMG", 0),
                    from: e => new StatModifier("HP", e.bVal("Normal Attack DMG Bonus"))
                }, {
                    to: new StatModifier("ChargedAttackDMG", 0),
                    from: e => new StatModifier("HP", e.bVal("charge2 Bonus"))
                }, {
                    to: new StatModifier("ElementalSkillDMG", 0),
                    from: e => new StatModifier("Heal", e.hasPassive1 ? .15 : 0),
                    "for": "skill"
                }, {
                    to: new StatModifier("NormalAttackDMG", 0),
                    from: e => new StatModifier("Heal", e.hasPassive1 ? .15 : 0)
                }, {
                    to: new StatModifier("ChargedAttackDMG", 0),
                    from: e => new StatModifier("Heal", e.hasPassive1 ? .15 : 0)
                }],
                varToggle: e => [new StatModifier("AttackSpeed", e.cLevel >= 4 ? .1 : 0)]
            }
        },
        Aloy: {
            constellations: [{
                name: "Star of Another World",
                desc: "The time has not yet come for this person's corner of the night sky to light up."
            }, {
                name: "Star of Another World",
                desc: "The time has not yet come for this person's corner of the night sky to light up."
            }, {
                name: "Star of Another World",
                desc: "The time has not yet come for this person's corner of the night sky to light up."
            }, {
                name: "Star of Another World",
                desc: "The time has not yet come for this person's corner of the night sky to light up."
            }, {
                name: "Star of Another World",
                desc: "The time has not yet come for this person's corner of the night sky to light up."
            }, {
                name: "Star of Another World",
                desc: "The time has not yet come for this person's corner of the night sky to light up."
            }],
            passives: [{
                name: "Combat Override",
                desc: "When Aloy receives the Coil effect from Frozen Wilds, her ATK is increased by 16%, while nearby party members' ATK is increased by 8%. This effect lasts 10s."
            }, {
                name: "Strong Strike",
                desc: "When Aloy is in the Rushing Ice state conferred by Frozen Wilds, her Cryo DMG Bonus increases by 3.5% every 1s. A maximum Cryo DMG Bonus increase of 35% can be gained in this way."
            }],
            skill: {
                name: "Frozen Wilds",
                desc: "Aloy throws a Freeze Bomb in the targeted direction that explodes on impact, dealing Cryo DMG. After it explodes, the Freeze Bomb will split up into many Chillwater Bomblets that explode on contact with opponents or after a short delay, dealing Cryo DMG. When a Freeze Bomb or Chillwater Bomblet hits an opponent, the opponent's ATK is decreased and Aloy receives 1 Coil stack. Aloy can gain up to 1 Coil stack every 0.1s. Coil � Each stack increases Aloy's Normal Attack DMG. � When Aloy has 4 Coil stacks, all stacks of Coil are cleared. She then enters the Rushing Ice state, which further increases the DMG dealt by her Normal Attacks and converts her Normal Attack DMG to Cryo DMG. While in the Rushing Ice state, Aloy cannot obtain new Coil stacks. Coil effects will be cleared 30s after Aloy leaves the field.",
                calcStats: []
            },
            burst: {
                name: "Prophecies of Dawn",
                desc: "Aloy throws a Power Cell filled with Cryo in the targeted direction, then detonates it with an arrow, dealing AoE Cryo DMG.",
                calcStats: []
            }
        },
        Sara: {
            constellations: [{
                name: "Crow's Eye",
                desc: "When Tengu Juurai grant characters ATK Bonuses or hits opponents, the CD of Tengu Stormcall is decreased by 1s. This effect can be triggered once every 3s."
            }, {
                name: "Dark Wings",
                desc: "Unleashing Tengu Stormcall will leave a weaker Crowfeather at Kujou Sara's original position that will deal 30% of its original DMG.",
                calcStats: [{
                    stat: "Weaker Ambush DMG",
                    damage: e => .3 * e.sVal("Ambush DMG"),
                    damageElement: "ElectroDMG",
                    damageType: "ElementalSkillDMG"
                }]
            }, {
                name: "The War Within",
                desc: "Increases the Level of Subjugation: Koukou Sendou by 3. Maximum upgrade level is 15."
            }, {
                name: "Conclusive Proof",
                desc: "The number of Tengu Juurai: Stormcluster released by Subjugation: Koukou Sendou is increased to 6."
            }, {
                name: "Spellsinger",
                desc: "Increases the Level of Tengu Stormcall by 3. Maximum upgrade level is 15."
            }, {
                name: "Sin of Pride",
                desc: "The Electro DMG of characters who have had their ATK increased by Tengu Juurai has its Crit DMG increased by 60%."
            }],
            passives: [{
                name: "Immovable Will",
                desc: "While in the Crowfeather Cover state provided by Tengu Stormcall, Aimed Shot charge times are decreased by 60%."
            }, {
                name: "Decorum",
                desc: "When Tengu Juurai: Ambush hits opponents, Kujou Sara will restore 1.2 Energy to all party members for every 100% Energy Recharge she has. This effect can be triggered once every 3s."
            }],
            skill: {
                name: "Tengu Stormcall",
                desc: "Retreats rapidly with the speed of a tengu, summoning the protection of the Crowfeather. Gains Crowfeather Cover for 18s, and when Kujou Sara fires a fully-charged Aimed Shot, Crowfeather Cover will be consumed, and will leave a Crowfeather at the target location. Crowfeathers will trigger Tengu Juurai: Ambush after a short time, dealing Electro DMG and granting the active character within its AoE an ATK Bonus based on Kujou Sara's Base ATK. The ATK Bonuses from different Tengu Juurai will not stack, and their effects and duration will be determined by the last Tengu Juurai to take effect.",
                calcStats: [{
                    stat: "Ambush DMG",
                    damage: e => e.sVal("Ambush DMG")
                }],
                varToggle: e => [new StatModifier("ATKPercent", e.sVal("ATK Bonus Ratio"))]
            },
            burst: {
                name: "Subjugation: Koukou Sendou",
                desc: "Casts down Tengu Juurai: Titanbreaker, dealing AoE Electro DMG. Afterwards, Tengu Juurai: Titanbreaker spreads out into 4 consecutive bouts of Tengu Juurai: Stormcluster, dealing AoE Electro DMG. Tengu Juurai: Titanbreaker and Tengu Juurai: Stormcluster can provide the active character within their AoE with the same ATK Bonus as given by the Elemental Skill, Tengu Stormcall. The ATK Bonus provided by various kinds of Tengu Juurai will not stack, and their effects and duration will be determined by the last Tengu Juurai to take effect.",
                calcStats: [{
                    stat: "Titanbreaker DMG",
                    damage: e => e.bVal("Titanbreaker DMG")
                }, {
                    stat: "Stormcluster DMG",
                    damage: e => e.bVal("Stormcluster DMG")
                }]
            }
        }
    };
var ElementalGaugeData = {
        Klee: {
            skill: {
                "Jumpy Dumpty DMG": 2
            }
        },
        Amber: {
            normal: {
                charge2: 2
            },
            skill: {
                "Explosion DMG": 2,
                "Manual Detonation": 2
            }
        },
        Bennett: {
            skill: {
                "Press DMG": 2
            }
        },
        Keqing: {
            skill: {
                "Slashing DMG": 2,
                "Thunderclap Slash DMG": 2
            }
        },
        Beidou: {
            skill: {
                "Base DMG": 2,
                "Max DMG": 2
            },
            burst: {
                "Burst DMG": 4
            }
        },
        Fischl: {
            burst: {}
        }
    },
    WeaponList = {
        Messenger: ["Bow", 3, 40, "CritDMG", .068, "Archers Message"],
        "Raven Bow": ["Bow", 3, 40, "ElementalMastery", 20, "Bane of Flame and Water"],
        "Recurve Bow": ["Bow", 3, 38, "HPPercent", .102, "Cull the Weak"],
        "Sharpshooters Oath": ["Bow", 3, 39, "CritDMG", .102, "Precise"],
        Slingshot: ["Bow", 3, 38, "CritRate", .068, "Slingshot"],
        "Emerald Orb": ["Catalyst", 3, 40, "ElementalMastery", 20, "Rapids"],
        "Magic Guide": ["Catalyst", 3, 38, "ElementalMastery", 41, "Bane of Storm and Tide"],
        "Otherworldly Story": ["Catalyst", 3, 39, "EnergyRecharge", .085, "Energy Shower"],
        "Thrilling Tales of Dragon Slayers": ["Catalyst", 3, 39, "HPPercent", .077, "Legacy"],
        "Twin Nephrite": ["Catalyst", 3, 40, "CritRate", .034, "Guerilla Tactic"],
        "Bloodtainted Greatsword": ["Claymore", 3, 38, "ElementalMastery", 41, "Bane of Fire and Thunder"],
        "Debate Club": ["Claymore", 3, 39, "ATKPercent", .077, "Blunt Conclusion"],
        "Ferrous Shadow": ["Claymore", 3, 39, "HPPercent", .077, "Unbending"],
        "Skyrider Greatsword": ["Claymore", 3, 39, "PhysicalDMG", .096, "Courage"],
        "White Iron Greatsword": ["Claymore", 3, 39, "DEFPercent", .096, "Cull the Weak"],
        "Black Tassel": ["Polearm", 3, 38, "HPPercent", .102, "Bane of the Soft"],
        Halberd: ["Polearm", 3, 40, "ATKPercent", .051, "Heavy"],
        "White Tassel": ["Polearm", 3, 39, "CritRate", .051, "Sharp"],
        "Cool Steel": ["Sword", 3, 39, "ATKPercent", .077, "Bane of Water and Ice"],
        "Dark Iron Sword": ["Sword", 3, 40, "ElementalMastery", 31, "Overloaded"],
        "Fillet Blade": ["Sword", 3, 39, "ATKPercent", .077, "Gash"],
        "Harbinger of Dawn": ["Sword", 3, 39, "CritDMG", .102, "Vigorous"],
        "Skyrider Sword": ["Sword", 3, 38, "EnergyRecharge", .113, "Determination"],
        "Travelers Handy Sword": ["Sword", 3, 40, "DEFPercent", .064, "Journey"],
        "Alley Hunter": ["Bow", 4, 44, "ATKPercent", .06, "Oppidan Ambush"],
        "Blackcliff Warbow": ["Bow", 4, 44, "CritDMG", .08, "Press the Advantage"],
        "Compound Bow": ["Bow", 4, 41, "PhysicalDMG", .15, "Infusion Arrow"],
        "Favonius Warbow": ["Bow", 4, 41, "EnergyRecharge", .133, "Windfall"],
        "Prototype Crescent": ["Bow", 4, 42, "ATKPercent", .09, "Unreturning"],
        "Royal Bow": ["Bow", 4, 42, "ATKPercent", .09, "Focus"],
        Rust: ["Bow", 4, 42, "ATKPercent", .09, "Rapid Firing"],
        "Sacrificial Bow": ["Bow", 4, 44, "EnergyRecharge", .067, "Composed"],
        "The Stringless": ["Bow", 4, 42, "ElementalMastery", 36, "Arrowless Song"],
        "The Viridescent Hunt": ["Bow", 4, 42, "CritRate", .06, "Verdant Wind"],
        "Windblume Ode": ["Bow", 4, 42, "ElementalMastery", 36, "Windblume Wish"],
        "Blackcliff Agate": ["Catalyst", 4, 42, "CritDMG", .12, "Press the Advantage"],
        "Eye of Perception": ["Catalyst", 4, 41, "ATKPercent", .12, "Echo"],
        "Favonius Codex": ["Catalyst", 4, 42, "EnergyRecharge", .1, "Windfall"],
        "Mappa Mare": ["Catalyst", 4, 44, "ElementalMastery", 24, "Infusion Scroll"],
        "Prototype Amber": ["Catalyst", 4, 42, "HPPercent", .09, "Gilding"],
        "Royal Grimoire": ["Catalyst", 4, 44, "ATKPercent", .06, "Focus"],
        "Sacrificial Fragments": ["Catalyst", 4, 41, "ElementalMastery", 48, "Composed"],
        "Solar Pearl": ["Catalyst", 4, 42, "CritRate", .06, "Solar Shine"],
        "The Widsith": ["Catalyst", 4, 42, "CritDMG", .12, "Debut"],
        "Wine and Song": ["Catalyst", 4, 44, "EnergyRecharge", .067, "Ever-Changing"],
        "Blackcliff Slasher": ["Claymore", 4, 42, "CritDMG", .12, "Press the Advantage"],
        "Favonius Greatsword": ["Claymore", 4, 41, "EnergyRecharge", .133, "Windfall"],
        "Lithic Blade": ["Claymore", 4, 42, "ATKPercent", .09, "Lithic Axiom - Unity"],
        "Prototype Archaic": ["Claymore", 4, 44, "ATKPercent", .06, "Crush"],
        Rainslasher: ["Claymore", 4, 42, "ElementalMastery", 36, "Bane of Storm and Tide2"],
        "Royal Greatsword": ["Claymore", 4, 44, "ATKPercent", .06, "Focus"],
        "Sacrificial Greatsword": ["Claymore", 4, 44, "EnergyRecharge", .067, "Composed"],
        "Serpent Spine": ["Claymore", 4, 42, "CritRate", .06, "Wavesplitter"],
        "The Bell": ["Claymore", 4, 42, "HPPercent", .09, "Rebellious Guardian"],
        Whiteblind: ["Claymore", 4, 42, "DEFPercent", .113, "Infusion Blade"],
        "Blackcliff Pole": ["Polearm", 4, 42, "CritDMG", .12, "Press the Advantage"],
        "Crescent Pike": ["Polearm", 4, 44, "PhysicalDMG", .075, "Infusion Needle"],
        Deathmatch: ["Polearm", 4, 41, "CritRate", .08, "Gladiator"],
        "Dragons Bane": ["Polearm", 4, 41, "ElementalMastery", 48, "Bane of Flame and Water2"],
        "Favonius Lance": ["Polearm", 4, 44, "EnergyRecharge", .067, "Windfall"],
        "Lithic Spear": ["Polearm", 4, 44, "ATKPercent", .06, "Lithic Axiom - Unity"],
        "Prototype Starglitter": ["Polearm", 4, 42, "EnergyRecharge", .1, "Magic Affinity"],
        "Royal Spear": ["Polearm", 4, 44, "ATKPercent", .06, "Focus"],
        "Blackcliff Longsword": ["Sword", 4, 44, "CritDMG", .08, "Press the Advantage"],
        "Favonius Sword": ["Sword", 4, 41, "EnergyRecharge", .133, "Windfall"],
        "Iron Sting": ["Sword", 4, 42, "ElementalMastery", 36, "Infusion Stinger"],
        "Lions Roar": ["Sword", 4, 42, "ATKPercent", .09, "Bane of Fire and Thunder2"],
        "Prototype Rancour": ["Sword", 4, 44, "PhysicalDMG", .075, "Smashed Stone"],
        "Royal Longsword": ["Sword", 4, 42, "ATKPercent", .09, "Focus"],
        "Sacrificial Sword": ["Sword", 4, 41, "EnergyRecharge", .133, "Composed"],
        "The Alley Flash": ["Sword", 4, 45, "ElementalMastery", 12, "Itinerant Hero"],
        "The Black Sword": ["Sword", 4, 42, "CritRate", .06, "Justice"],
        "The Flute": ["Sword", 4, 42, "ATKPercent", .09, "Chord"],
        "Sword of Descension": ["Sword", 4, 390, "ATKPercent", .077, "Descension"],
        "Amos Bow": ["Bow", 5, 46, "ATKPercent", .108, "Strong-Willed"],
        "Skyward Harp": ["Bow", 5, 48, "CritRate", .048, "Echoing Ballad"],
        "Dreams of Dragonfell": ["Bow", 5, 46, "ATKPercent", .108, "Golden Majesty"],
        "Elegy for the End": ["Bow", 5, 46, "EnergyRecharge", .12, "The Parting Refrain"],
        "Lost Prayer to the Sacred Winds": ["Catalyst", 5, 46, "CritRate", .072, "Boundless Blessing"],
        "Skyward Atlas": ["Catalyst", 5, 48, "ATKPercent", .072, "Wandering Clouds"],
        "Memory of Dust": ["Catalyst", 5, 46, "ATKPercent", .108, "Golden Majesty"],
        "Skyward Pride": ["Claymore", 5, 48, "EnergyRecharge", .08, "Sky-Ripping Dragon Spine"],
        "Wolfs Gravestone": ["Claymore", 5, 46, "ATKPercent", .108, "Wolfish Tracker"],
        "The Unforged": ["Claymore", 5, 46, "ATKPercent", .108, "Golden Majesty"],
        "Song of Broken Pines": ["Claymore", 5, 49, "PhysicalDMG", .045, "Rebels Banner-Hymn"],
        "Vortex Vanquisher": ["Polearm", 5, 46, "ATKPercent", .108, "Rainbow-Piercing Stinger"],
        "Primordial Jade Winged-Spear": ["Polearm", 5, 48, "CritRate", .048, "Eagle Spear of Justice"],
        "Skyward Spine": ["Polearm", 5, 48, "EnergyRecharge", .08, "Black Wing"],
        "Vortex Vanquisher": ["Polearm", 5, 46, "ATKPercent", .108, "Golden Majesty"],
        "Staff of Homa": ["Polearm", 5, 46, "CritDMG", .144, "Reckless Cinnabar"],
        "Aquila Favonia": ["Sword", 5, 48, "PhysicalDMG", .09, "Falcons Defiance"],
        "Summit Shaper": ["Sword", 5, 46, "ATKPercent", .108, "Golden Majesty"],
        "Skyward Blade": ["Sword", 5, 46, "EnergyRecharge", .12, "Sky-Piercing Fang"],
        "Primordial Jade Cutter": ["Sword", 5, 440, "CritRate", .0961, "Protectors Virtue"],
        "Snow-Tombed Starsilver": ["Claymore", 4, 44, "PhysicalDMG", .075, "Frost Burial"],
        "Dragonspine Spear": ["Polearm", 4, 41, "PhysicalDMG", .15, "Frost Burial"],
        Frostbearer: ["Catalyst", 4, 42, "ATKPercent", .09, "Frost Burial"],
        "Festering Desire": ["Sword", 4, 42, "EnergyRecharge", .1, "Undying Admiration"],
        "Dodoco Tales": ["Catalyst", 4, 41, "ATKPercent", .12, "Dodoventure"],
        "Hakushin Ring": ["Catalyst", 4, 44, "EnergyRecharge", .067, "Sakura Saiguu"],
        "Mitternachts Walts": ["Bow", 4, 42, "PhysicalDMG", .113, "Evernight Duet"],
        Hamayumi: ["Bow", 4, 41, "ATKPercent", .12, "Full Draw"],
        "Kitain Cross Spear": ["Polearm", 4, 44, "ElementalMastery", 24, "Samurai Conduct"],
        "Katsuragikiri Nagamasa": ["Claymore", 4, 42, "EnergyRecharge", .1, "Samurai Conduct"],
        "Amenoma Kageuchi": ["Sword", 4, 41, "ATKPercent", .12, "Iwakura Succession"],
        "Freedom Sworn": ["Sword", 5, 46, "ElementalMastery", 43, "Revolutionary Chorale"],
        "Thundering Pulse": ["Bow", 5, 46, "CritDMG", .144, "Rule by Thunder"],
        "Engulfing Lightning": ["Polearm", 5, 46, "EnergyRecharge", .12, "Timeless Dream: Eternal Stove"],
        "The Catch": ["Polearm", 4, 42, "EnergyRecharge", .1, "Shanty"],
        "Luxurious Sea-Lord": ["Claymore", 4, 41, "ATKPercent", .12, "Oceanic Victory"],
        "Mistsplitter Reforged": ["Sword", 5, 48, "CritDMG", .096, "Mistsplitters Edge"]
    },
    WeaponAbilityList = {
        "Timeless Dream: Eternal Stove": {
            desc: "ATK increased by 28/35/42/49/56% of Energy Recharge over the base 100%. You can gain a maximum bonus of 80/90/100/110/120% ATK. Gain 30/35/40/45/50% Energy Recharge for 12s after using an Elemental Burst.",
            scale: [{
                to: new StatModifier("ATKPercent", 0),
                from: e => new StatModifier("EnergyRecharge", .28),
                minThreshold: 1,
                maximum: e => .8
            }, {
                to: new StatModifier("ATKPercent", 0),
                from: e => new StatModifier("EnergyRecharge", .35),
                minThreshold: 1,
                maximum: e => .9
            }, {
                to: new StatModifier("ATKPercent", 0),
                from: e => new StatModifier("EnergyRecharge", .42),
                minThreshold: 1,
                maximum: e => 1
            }, {
                to: new StatModifier("ATKPercent", 0),
                from: e => new StatModifier("EnergyRecharge", .49),
                minThreshold: 1,
                maximum: e => 1.1
            }, {
                to: new StatModifier("ATKPercent", 0),
                from: e => new StatModifier("EnergyRecharge", .56),
                minThreshold: 1,
                maximum: e => 1.2
            }],
            toggle: [
                [new StatModifier("EnergyRecharge", .3)],
                [new StatModifier("EnergyRecharge", .35)],
                [new StatModifier("EnergyRecharge", .4)],
                [new StatModifier("EnergyRecharge", .45)],
                [new StatModifier("EnergyRecharge", .5)]
            ]
        },
        "Oceanic Victory": {
            desc: "Increases Elemental Burst DMG by 12/15/18/21/24%. When Elemental Burst hits opponents, there is a 100% chance of summoning a huge onrush of tuna that deals 100/125/150/175/200% ATK as AoE DMG. This effect can occur once every 15s.",
            effect: [
                [new StatModifier("ElementalBurstDMG", .12)],
                [new StatModifier("ElementalBurstDMG", .15)],
                [new StatModifier("ElementalBurstDMG", .18)],
                [new StatModifier("ElementalBurstDMG", .21)],
                [new StatModifier("ElementalBurstDMG", .24)]
            ],
            additionalAttack: {
                hit: [1, 1.25, 1.5, 1.75, 2],
                frequency: [15, 15, 15, 15, 15],
                bonus: ["PhysicalDMG"]
            }
        },
        Shanty: {
            desc: "Increases Elemental Burst DMG by 16/20/24/28/32% and Elemental Burst CRIT Rate by 6/7.5/9/10.5/12%.",
            effect: [
                [new StatModifier("ElementalBurstDMG", .16)],
                [new StatModifier("ElementalBurstDMG", .2)],
                [new StatModifier("ElementalBurstDMG", .24)],
                [new StatModifier("ElementalBurstDMG", .28)],
                [new StatModifier("ElementalBurstDMG", .32)]
            ],
            burst: {
                effect: [
                    [new StatModifier("CritRate", .06)],
                    [new StatModifier("CritRate", .075)],
                    [new StatModifier("CritRate", .09)],
                    [new StatModifier("CritRate", .105)],
                    [new StatModifier("CritRate", .12)]
                ]
            }
        },
        "Rule by Thunder": {
            desc: "Increases ATK by 20/25/30/35/40% and grants the might of the Thunder Emblem. At stacks levels 1/2/3, the Thunder Emblem increases Normal Attack DMG by (12/15/18/21)/(24/30/36/42/48)/(40/50/60/70/80)%. The character will obtain 1 stack of Thunder Emblem in each of the following scenarios: Normal Attack deals DMG, casting Elemental Skill, Energy is less than 100%.",
            effect: [
                [new StatModifier("ATKPercent", .2)],
                [new StatModifier("ATKPercent", .25)],
                [new StatModifier("ATKPercent", .3)],
                [new StatModifier("ATKPercent", .35)],
                [new StatModifier("ATKPercent", .4)]
            ],
            "switch": [
                [{
                    option: "1 Stack",
                    effect: [new StatModifier("NormalAttackDMG", .12)]
                }, {
                    option: "2 Stacks",
                    effect: [new StatModifier("NormalAttackDMG", .24)]
                }, {
                    option: "3 Stacks",
                    effect: [new StatModifier("NormalAttackDMG", .4)]
                }],
                [{
                    option: "1 Stack",
                    effect: [new StatModifier("NormalAttackDMG", .15)]
                }, {
                    option: "2 Stacks",
                    effect: [new StatModifier("NormalAttackDMG", .3)]
                }, {
                    option: "3 Stacks",
                    effect: [new StatModifier("NormalAttackDMG", .5)]
                }],
                [{
                    option: "1 Stack",
                    effect: [new StatModifier("NormalAttackDMG", .18)]
                }, {
                    option: "2 Stacks",
                    effect: [new StatModifier("NormalAttackDMG", .36)]
                }, {
                    option: "3 Stacks",
                    effect: [new StatModifier("NormalAttackDMG", .6)]
                }],
                [{
                    option: "1 Stack",
                    effect: [new StatModifier("NormalAttackDMG", .21)]
                }, {
                    option: "2 Stacks",
                    effect: [new StatModifier("NormalAttackDMG", .42)]
                }, {
                    option: "3 Stacks",
                    effect: [new StatModifier("NormalAttackDMG", .7)]
                }],
                [{
                    option: "1 Stack",
                    effect: [new StatModifier("NormalAttackDMG", .24)]
                }, {
                    option: "2 Stacks",
                    effect: [new StatModifier("NormalAttackDMG", .48)]
                }, {
                    option: "3 Stacks",
                    effect: [new StatModifier("NormalAttackDMG", .8)]
                }]
            ]
        },
        "Mistsplitters Edge": {
            desc: "Gain a 12/15/18/21/24% Elemental DMG Bonus for all element and receive the might of the Mistsplitters Emblem. At stack levels 1/2/3, the Mistsplitters Emblem provides a (8/10/12/14/16%) / (16/20/24/28/32%) / (28/35/42/49/56%) Elemental DMG Bonus for the characters Elemental Type.",
            effect: [
                [new StatModifier("PyroDMG", .12), new StatModifier("CryoDMG", .12), new StatModifier("HydroDMG", .12), new StatModifier("ElectroDMG", .12), new StatModifier("GeoDMG", .12), new StatModifier("DendroDMG", .12), new StatModifier("AnemoDMG", .12)],
                [new StatModifier("PyroDMG", .15), new StatModifier("CryoDMG", .15), new StatModifier("HydroDMG", .15), new StatModifier("ElectroDMG", .15), new StatModifier("GeoDMG", .15), new StatModifier("DendroDMG", .15), new StatModifier("AnemoDMG", .15)],
                [new StatModifier("PyroDMG", .18), new StatModifier("CryoDMG", .18), new StatModifier("HydroDMG", .18), new StatModifier("ElectroDMG", .18), new StatModifier("GeoDMG", .18), new StatModifier("DendroDMG", .18), new StatModifier("AnemoDMG", .18)],
                [new StatModifier("PyroDMG", .21), new StatModifier("CryoDMG", .21), new StatModifier("HydroDMG", .21), new StatModifier("ElectroDMG", .21), new StatModifier("GeoDMG", .21), new StatModifier("DendroDMG", .21), new StatModifier("AnemoDMG", .21)],
                [new StatModifier("PyroDMG", .24), new StatModifier("CryoDMG", .24), new StatModifier("HydroDMG", .24), new StatModifier("ElectroDMG", .24), new StatModifier("GeoDMG", .24), new StatModifier("DendroDMG", .24), new StatModifier("AnemoDMG", .24)]
            ],
            "switch": [
                [{
                    option: "1 Stack",
                    effect: [new StatModifier("PyroDMG", .08), new StatModifier("CryoDMG", .08), new StatModifier("HydroDMG", .08), new StatModifier("ElectroDMG", .08), new StatModifier("GeoDMG", .08), new StatModifier("DendroDMG", .08), new StatModifier("AnemoDMG", .08)]
                }, {
                    option: "2 Stacks",
                    effect: [new StatModifier("PyroDMG", .16), new StatModifier("CryoDMG", .16), new StatModifier("HydroDMG", .16), new StatModifier("ElectroDMG", .16), new StatModifier("GeoDMG", .16), new StatModifier("DendroDMG", .16), new StatModifier("AnemoDMG", .16)]
                }, {
                    option: "3 Stacks",
                    effect: [new StatModifier("PyroDMG", .28), new StatModifier("CryoDMG", .28), new StatModifier("HydroDMG", .28), new StatModifier("ElectroDMG", .28), new StatModifier("GeoDMG", .28), new StatModifier("DendroDMG", .28), new StatModifier("AnemoDMG", .28)]
                }],
                [{
                    option: "1 Stack",
                    effect: [new StatModifier("PyroDMG", .1), new StatModifier("CryoDMG", .1), new StatModifier("HydroDMG", .1), new StatModifier("ElectroDMG", .1), new StatModifier("GeoDMG", .1), new StatModifier("DendroDMG", .1), new StatModifier("AnemoDMG", .1)]
                }, {
                    option: "2 Stacks",
                    effect: [new StatModifier("PyroDMG", .2), new StatModifier("CryoDMG", .2), new StatModifier("HydroDMG", .2), new StatModifier("ElectroDMG", .2), new StatModifier("GeoDMG", .2), new StatModifier("DendroDMG", .2), new StatModifier("AnemoDMG", .2)]
                }, {
                    option: "3 Stacks",
                    effect: [new StatModifier("PyroDMG", .35), new StatModifier("CryoDMG", .35), new StatModifier("HydroDMG", .35), new StatModifier("ElectroDMG", .35), new StatModifier("GeoDMG", .35), new StatModifier("DendroDMG", .35), new StatModifier("AnemoDMG", .35)]
                }],
                [{
                    option: "1 Stack",
                    effect: [new StatModifier("PyroDMG", .12), new StatModifier("CryoDMG", .12), new StatModifier("HydroDMG", .12), new StatModifier("ElectroDMG", .12), new StatModifier("GeoDMG", .12), new StatModifier("DendroDMG", .12), new StatModifier("AnemoDMG", .12)]
                }, {
                    option: "2 Stacks",
                    effect: [new StatModifier("PyroDMG", .24), new StatModifier("CryoDMG", .24), new StatModifier("HydroDMG", .24), new StatModifier("ElectroDMG", .24), new StatModifier("GeoDMG", .24), new StatModifier("DendroDMG", .24), new StatModifier("AnemoDMG", .24)]
                }, {
                    option: "3 Stacks",
                    effect: [new StatModifier("PyroDMG", .42), new StatModifier("CryoDMG", .42), new StatModifier("HydroDMG", .42), new StatModifier("ElectroDMG", .42), new StatModifier("GeoDMG", .42), new StatModifier("DendroDMG", .42), new StatModifier("AnemoDMG", .42)]
                }],
                [{
                    option: "1 Stack",
                    effect: [new StatModifier("PyroDMG", .14), new StatModifier("CryoDMG", .14), new StatModifier("HydroDMG", .14), new StatModifier("ElectroDMG", .14), new StatModifier("GeoDMG", .14), new StatModifier("DendroDMG", .14), new StatModifier("AnemoDMG", .14)]
                }, {
                    option: "2 Stacks",
                    effect: [new StatModifier("PyroDMG", .28), new StatModifier("CryoDMG", .28), new StatModifier("HydroDMG", .28), new StatModifier("ElectroDMG", .28), new StatModifier("GeoDMG", .28), new StatModifier("DendroDMG", .28), new StatModifier("AnemoDMG", .28)]
                }, {
                    option: "3 Stacks",
                    effect: [new StatModifier("PyroDMG", .49), new StatModifier("CryoDMG", .49), new StatModifier("HydroDMG", .49), new StatModifier("ElectroDMG", .49), new StatModifier("GeoDMG", .49), new StatModifier("DendroDMG", .49), new StatModifier("AnemoDMG", .49)]
                }],
                [{
                    option: "1 Stack",
                    effect: [new StatModifier("PyroDMG", .16), new StatModifier("CryoDMG", .16), new StatModifier("HydroDMG", .16), new StatModifier("ElectroDMG", .16), new StatModifier("GeoDMG", .16), new StatModifier("DendroDMG", .16), new StatModifier("AnemoDMG", .16)]
                }, {
                    option: "2 Stacks",
                    effect: [new StatModifier("PyroDMG", .32), new StatModifier("CryoDMG", .32), new StatModifier("HydroDMG", .32), new StatModifier("ElectroDMG", .32), new StatModifier("GeoDMG", .32), new StatModifier("DendroDMG", .32), new StatModifier("AnemoDMG", .32)]
                }, {
                    option: "3 Stacks",
                    effect: [new StatModifier("PyroDMG", .56), new StatModifier("CryoDMG", .56), new StatModifier("HydroDMG", .56), new StatModifier("ElectroDMG", .56), new StatModifier("GeoDMG", .56), new StatModifier("DendroDMG", .56), new StatModifier("AnemoDMG", .56)]
                }]
            ]
        },
        "Revolutionary Chorale": {
            desc: "Increases DMG by 10/12.5/15/17.5/20%. When the character wielding this weapon triggers Elemental Reactions, they gain a Sigil of Rebellion. This effect can be triggered once every 0.5s and can be triggered even if said character is not on the field. When you possess 2 Sigils of Rebellion, all of them will be consumed and all nearby party members will obtain Millennial Movement: Song of Resistance increasing Normal, Charged and Plunging Attack DMG by 16/20/24/28/32% and increases ATK by 20/25/30/35/40%.",
            effect: [
                [new StatModifier("AllDMG", .1)],
                [new StatModifier("AllDMG", .125)],
                [new StatModifier("AllDMG", .15)],
                [new StatModifier("AllDMG", .175)],
                [new StatModifier("AllDMG", .2)]
            ],
            toggle: [
                [new StatModifier("NormalAttackDMG", .16), new StatModifier("ChargedAttackDMG", .16), new StatModifier("PlungingAttackDMG", .16), new StatModifier("ATKPercent", .2)],
                [new StatModifier("NormalAttackDMG", .2), new StatModifier("ChargedAttackDMG", .2), new StatModifier("PlungingAttackDMG", .2), new StatModifier("ATKPercent", .25)],
                [new StatModifier("NormalAttackDMG", .24), new StatModifier("ChargedAttackDMG", .24), new StatModifier("PlungingAttackDMG", .24), new StatModifier("ATKPercent", .3)],
                [new StatModifier("NormalAttackDMG", .28), new StatModifier("ChargedAttackDMG", .28), new StatModifier("PlungingAttackDMG", .28), new StatModifier("ATKPercent", .35)],
                [new StatModifier("NormalAttackDMG", .32), new StatModifier("ChargedAttackDMG", .32), new StatModifier("PlungingAttackDMG", .32), new StatModifier("ATKPercent", .4)]
            ]
        },
        "Iwakura Succession": {
            desc: "After casting an Elemental Skill, gain 1 Succession Seed. This effect can be triggered once every 5s. The Succession Seed lasts for 30s. Up to 3 Succession Seeds may exist simultaneously. After using an Elemental Burst, all Succession Seeds are consumed and after 2s, the character regenerates 6/7.5/9/10.5/12 Energy for each seed consumed."
        },
        "Samurai Conduct": {
            desc: "Increases Elemental Skill DMG by 6/7.5/9/10.5/12%. After Elemental Skill hits an opponent, the character loses 3 Energy but regenerates 5 Energy every 2s for the next 6s. This effect can occur once every 10s. Can be triggered even when the character is not on the field.",
            effect: [
                [new StatModifier("ElementalSkillDMG", .06)],
                [new StatModifier("ElementalSkillDMG", .075)],
                [new StatModifier("ElementalSkillDMG", .09)],
                [new StatModifier("ElementalSkillDMG", .105)],
                [new StatModifier("ElementalSkillDMG", .12)]
            ]
        },
        "Full Draw": {
            desc: "Increases Normal Attack DMG by 16/20/24/28/32% and Charged Attack DMG by 12/15/18/21/24%. When the equipping character's Energy reaches 100%, this effect is increased by 100% (toggle).",
            effect: [
                [new StatModifier("NormalAttackDMG", .16), new StatModifier("ChargedAttackDMG", .12)],
                [new StatModifier("NormalAttackDMG", .2), new StatModifier("ChargedAttackDMG", .15)],
                [new StatModifier("NormalAttackDMG", .24), new StatModifier("ChargedAttackDMG", .18)],
                [new StatModifier("NormalAttackDMG", .28), new StatModifier("ChargedAttackDMG", .21)],
                [new StatModifier("NormalAttackDMG", .32), new StatModifier("ChargedAttackDMG", .24)]
            ],
            toggle: [
                [new StatModifier("NormalAttackDMG", .16), new StatModifier("ChargedAttackDMG", .12)],
                [new StatModifier("NormalAttackDMG", .2), new StatModifier("ChargedAttackDMG", .15)],
                [new StatModifier("NormalAttackDMG", .24), new StatModifier("ChargedAttackDMG", .18)],
                [new StatModifier("NormalAttackDMG", .28), new StatModifier("ChargedAttackDMG", .21)],
                [new StatModifier("NormalAttackDMG", .32), new StatModifier("ChargedAttackDMG", .24)]
            ]
        },
        "Evernight Duet": {
            desc: "Normal Attack hits on opponents increase Elemental Skill DMG by 20/25/30/35/40% for 5s (always on in calculator). Elemental Skill hits on opponents increase Normal Attack DMG by 20/25/30/35/40% for 5s (toggle).",
            effect: [
                [new StatModifier("ElementalSkillDMG", .2)],
                [new StatModifier("ElementalSkillDMG", .25)],
                [new StatModifier("ElementalSkillDMG", .3)],
                [new StatModifier("ElementalSkillDMG", .35)],
                [new StatModifier("ElementalSkillDMG", .4)]
            ],
            toggle: [
                [new StatModifier("NormalAttackDMG", .2)],
                [new StatModifier("NormalAttackDMG", .25)],
                [new StatModifier("NormalAttackDMG", .3)],
                [new StatModifier("NormalAttackDMG", .35)],
                [new StatModifier("NormalAttackDMG", .4)]
            ]
        },
        Dodoventure: {
            desc: "Normal Attack hits on opponents increase Charged Attack DMG by 16/20/24/28/32% for 6s (always on in calculator). Charged Attack hits on opponents increase ATK by 8/10/12/14/16% for 6s (toggle).",
            effect: [
                [new StatModifier("ChargedAttackDMG", .16)],
                [new StatModifier("ChargedAttackDMG", .2)],
                [new StatModifier("ChargedAttackDMG", .24)],
                [new StatModifier("ChargedAttackDMG", .28)],
                [new StatModifier("ChargedAttackDMG", .32)]
            ],
            toggle: [
                [new StatModifier("ATKPercent", .8)],
                [new StatModifier("ATKPercent", .1)],
                [new StatModifier("ATKPercent", .12)],
                [new StatModifier("ATKPercent", .14)],
                [new StatModifier("ATKPercent", .16)]
            ]
        },
        "Sakura Saiguu": {
            desc: "After the character equipped with this weapon triggers an Electro elemental reaction, nearby party memebers of an Elemental Type involved in the elemental reaction receive a 10/12.5/15/17.5/20% Elemental DMG Bonus for their element, lasting 6s. Elemental Bonuses gained in this way cannot be stacked.",
            "switch": [
                [{
                    option: "CryoDMG",
                    effect: new StatModifier("CryoDMG", .1)
                }, {
                    option: "HydroDMG",
                    effect: new StatModifier("HydroDMG", .1)
                }, {
                    option: "PyroDMG",
                    effect: new StatModifier("PyroDMG", .1)
                }, {
                    option: "AnemoDMG",
                    effect: new StatModifier("AnemoDMG", .1)
                }, {
                    option: "GeoDMG",
                    effect: new StatModifier("GeoDMG", .1)
                }],
                [{
                    option: "CryoDMG",
                    effect: new StatModifier("CryoDMG", .125)
                }, {
                    option: "HydroDMG",
                    effect: new StatModifier("HydroDMG", .125)
                }, {
                    option: "PyroDMG",
                    effect: new StatModifier("PyroDMG", .125)
                }, {
                    option: "AnemoDMG",
                    effect: new StatModifier("AnemoDMG", .125)
                }, {
                    option: "GeoDMG",
                    effect: new StatModifier("GeoDMG", .125)
                }],
                [{
                    option: "CryoDMG",
                    effect: new StatModifier("CryoDMG", .15)
                }, {
                    option: "HydroDMG",
                    effect: new StatModifier("HydroDMG", .15)
                }, {
                    option: "PyroDMG",
                    effect: new StatModifier("PyroDMG", .15)
                }, {
                    option: "AnemoDMG",
                    effect: new StatModifier("AnemoDMG", .15)
                }, {
                    option: "GeoDMG",
                    effect: new StatModifier("GeoDMG", .15)
                }],
                [{
                    option: "CryoDMG",
                    effect: new StatModifier("CryoDMG", .175)
                }, {
                    option: "HydroDMG",
                    effect: new StatModifier("HydroDMG", .175)
                }, {
                    option: "PyroDMG",
                    effect: new StatModifier("PyroDMG", .175)
                }, {
                    option: "AnemoDMG",
                    effect: new StatModifier("AnemoDMG", .175)
                }, {
                    option: "GeoDMG",
                    effect: new StatModifier("GeoDMG", .175)
                }],
                [{
                    option: "CryoDMG",
                    effect: new StatModifier("CryoDMG", .2)
                }, {
                    option: "HydroDMG",
                    effect: new StatModifier("HydroDMG", .2)
                }, {
                    option: "PyroDMG",
                    effect: new StatModifier("PyroDMG", .2)
                }, {
                    option: "AnemoDMG",
                    effect: new StatModifier("AnemoDMG", .12)
                }, {
                    option: "GeoDMG",
                    effect: new StatModifier("GeoDMG", .2)
                }]
            ]
        },
        "Archers Message": {
            desc: "Aimed Shot hits on weak spots deal an additional 100/125/150/175/200% ATK DMG as CRIT DMG. Can only occur once every 10s.",
            additionalAttack: {
                hit: [1, 1.25, 1.5, 1.75, 2],
                frequency: [10, 10, 10, 10, 10],
                bonus: ["Elemental", "ChargedAttackDMG"]
            }
        },
        "Bane of Flame and Water": {
            desc: "Increases DMG against enemies affected by Hydro or Pyro by 12/15/18/21/24%.",
            toggle: [
                [new StatModifier("AllDMG", .12)],
                [new StatModifier("AllDMG", .15)],
                [new StatModifier("AllDMG", .18)],
                [new StatModifier("AllDMG", .21)],
                [new StatModifier("AllDMG", .24)]
            ]
        },
        "Cull the Weak": {
            desc: "Defeating an opponent restores 8/10/12/14/16% HP."
        },
        Precise: {
            desc: "Increases DMG against weak spots by 24/30/36/42/48%.",
            toggle: [
                [new StatModifier("AllDMG", .24)],
                [new StatModifier("AllDMG", .3)],
                [new StatModifier("AllDMG", .36)],
                [new StatModifier("AllDMG", .42)],
                [new StatModifier("AllDMG", .48)]
            ]
        },
        Slingshot: {
            desc: "If a Normal Attack or Aimed Shot hits a target within 0.3s of being fired, increases DMG by 36/42/48/54/60%; otherwise, it decreases DMG by 10%.",
            effect: [
                [new StatModifier("NormalAttackDMG", -.1), new StatModifier("ChargedAttackDMG", -.1)],
                [new StatModifier("NormalAttackDMG", -.1), new StatModifier("ChargedAttackDMG", -.1)],
                [new StatModifier("NormalAttackDMG", -.1), new StatModifier("ChargedAttackDMG", -.1)],
                [new StatModifier("NormalAttackDMG", -.1), new StatModifier("ChargedAttackDMG", -.1)],
                [new StatModifier("NormalAttackDMG", -.1), new StatModifier("ChargedAttackDMG", -.1)]
            ],
            toggle: [
                [new StatModifier("NormalAttackDMG", .46), new StatModifier("ChargedAttackDMG", .46)],
                [new StatModifier("NormalAttackDMG", .52), new StatModifier("ChargedAttackDMG", .52)],
                [new StatModifier("NormalAttackDMG", .58), new StatModifier("ChargedAttackDMG", .58)],
                [new StatModifier("NormalAttackDMG", .64), new StatModifier("ChargedAttackDMG", .64)],
                [new StatModifier("NormalAttackDMG", .7), new StatModifier("ChargedAttackDMG", .7)]
            ]
        },
        Rapids: {
            desc: "Upon causing a Vaporize, Electro-Charged, Frozen, or a Hydro-infused Swirl reaction, increases Base ATK by 20/25/30/35/40% for 12s.",
            toggle: [
                [new StatModifier("ATKPercent", .2)],
                [new StatModifier("ATKPercent", .25)],
                [new StatModifier("ATKPercent", .3)],
                [new StatModifier("ATKPercent", .35)],
                [new StatModifier("ATKPercent", .4)]
            ]
        },
        "Bane of Storm and Tide": {
            desc: "Increases DMG against enemies affected by Hydro or Electro by 12/15/18/21/24%.",
            toggle: [
                [new StatModifier("AllDMG", .12)],
                [new StatModifier("AllDMG", .15)],
                [new StatModifier("AllDMG", .18)],
                [new StatModifier("AllDMG", .21)],
                [new StatModifier("AllDMG", .24)]
            ]
        },
        "Energy Shower": {
            desc: "Each Elemental Orb or Particle collected restores 1/1.25/1.5/1.75/2% HP."
        },
        Legacy: {
            desc: "When switching characters, the new character taking the field has their ATK increased by 24/30/36/42/48% for 10s. This effect can only occur once every 20s.",
            toggle: [
                [new StatModifier("ATKPercent", .2)],
                [new StatModifier("ATKPercent", .3)],
                [new StatModifier("ATKPercent", .36)],
                [new StatModifier("ATKPercent", .42)],
                [new StatModifier("ATKPercent", .48)]
            ]
        },
        "Guerilla Tactic": {
            desc: "Defeating an enemy increases Movement SPD and ATK by 12/14/16/18/20% for 15s.",
            toggle: [
                [new StatModifier("ATKPercent", .12)],
                [new StatModifier("ATKPercent", .14)],
                [new StatModifier("ATKPercent", .16)],
                [new StatModifier("ATKPercent", .18)],
                [new StatModifier("ATKPercent", .2)]
            ]
        },
        "Bane of Fire and Thunder": {
            desc: "Increases DMG against enemies affected by Pyro or Electro by 12/15/18/21/24%.",
            toggle: [
                [new StatModifier("AllDMG", .12)],
                [new StatModifier("AllDMG", .15)],
                [new StatModifier("AllDMG", .18)],
                [new StatModifier("AllDMG", .21)],
                [new StatModifier("AllDMG", .24)]
            ]
        },
        "Blunt Conclusion": {
            desc: "After using an Elemental Skill, Normal or Charged Attacks, on hit, deal an additional 60/75/90/105/120% ATK DMG in a small area. Effect lasts 15s. DMG can only occur once every 3s.",
            additionalAttack: {
                hit: [.6, .75, .9, 1.05, 1.2],
                frequency: [3, 3, 3, 3, 3],
                bonus: ["NormalAttackDMG", "PhysicalDMG"]
            }
        },
        Unbending: {
            desc: "When HP falls below 70/75/80/85/90%, increases Charged Attack DMG by 30/35/40/45/50%, and Charged Attacks become much harder to interrupt.",
            toggle: [
                [new StatModifier("ChargedAttackDMG", .3)],
                [new StatModifier("ChargedAttackDMG", .35)],
                [new StatModifier("ChargedAttackDMG", .4)],
                [new StatModifier("ChargedAttackDMG", .45)],
                [new StatModifier("ChargedAttackDMG", .5)]
            ]
        },
        Courage: {
            desc: "On hit, Normal or Charged Attacks increase ATK by 6/7/8/9/10% for 6s. Max 4 stacks. Can only occur once every 0.5s.",
            stack: [
                [new StatModifier("ATKPercent", .06)],
                [new StatModifier("ATKPercent", .07)],
                [new StatModifier("ATKPercent", .08)],
                [new StatModifier("ATKPercent", .09)],
                [new StatModifier("ATKPercent", .1)]
            ],
            stackCount: 4
        },
        "Bane of the Soft": {
            desc: "Increases DMG against slimes by 40/50/60/70/80%.",
            toggle: [
                [new StatModifier("AllDMG", .4)],
                [new StatModifier("AllDMG", .5)],
                [new StatModifier("AllDMG", .6)],
                [new StatModifier("AllDMG", .7)],
                [new StatModifier("AllDMG", .8)]
            ]
        },
        Heavy: {
            desc: "Normal Attacks deal an additional 160/200/240/280/320% DMG. Can only occur once every 10s.",
            additionalAttack: {
                hit: [1.6, 2, 2.4, 2.8, 3.2],
                frequency: [10, 10, 10, 10, 10],
                bonus: ["NormalAttackDMG", "PhysicalDMG"]
            }
        },
        Sharp: {
            desc: "Increases Normal Attack DMG by 24/30/36/42/48%.",
            effect: [
                [new StatModifier("NormalAttackDMG", .24)],
                [new StatModifier("NormalAttackDMG", .3)],
                [new StatModifier("NormalAttackDMG", .36)],
                [new StatModifier("NormalAttackDMG", .42)],
                [new StatModifier("NormalAttackDMG", .48)]
            ]
        },
        "Bane of Water and Ice": {
            desc: "Increases DMG against enemies affected by Hydro or Cryo by 12/15/18/21/24%.",
            toggle: [
                [new StatModifier("AllDMG", .12)],
                [new StatModifier("AllDMG", .15)],
                [new StatModifier("AllDMG", .18)],
                [new StatModifier("AllDMG", .21)],
                [new StatModifier("AllDMG", .24)]
            ]
        },
        Overloaded: {
            desc: "Upon causing an Overloaded, Superconduct, Electro-Charged, or an Electro-infused Swirl reaction, increases Base ATK by 20/25/30/35/40% for 12s.",
            toggle: [
                [new StatModifier("ATKPercent", .2)],
                [new StatModifier("ATKPercent", .25)],
                [new StatModifier("ATKPercent", .3)],
                [new StatModifier("ATKPercent", .35)],
                [new StatModifier("ATKPercent", .4)]
            ]
        },
        Gash: {
            desc: "On hit, has 50% chance to deal 240/280/320/360/400% ATK DMG to a single enemy. Can only occur once every 15/14/13/12/11s.",
            additionalAttack: {
                hit: [2.4, 2.8, 3.2, 3.6, 4],
                frequency: [11, 11, 11, 11, 11],
                bonus: ["PhysicalDMG"]
            }
        },
        Vigorous: {
            desc: "When HP is above 90%, increases CRIT Rate by 14/18/22/24/28%.",
            toggle: [
                [new StatModifier("CritRate", .14)],
                [new StatModifier("CritRate", .18)],
                [new StatModifier("CritRate", .22)],
                [new StatModifier("CritRate", .24)],
                [new StatModifier("CritRate", .28)]
            ]
        },
        Determination: {
            desc: "Using an Elemental Burst grants a 12/15/18/21/24% increase in ATK and Movement SPD for 12s.",
            toggle: [
                [new StatModifier("ATKPercent", .12)],
                [new StatModifier("ATKPercent", .15)],
                [new StatModifier("ATKPercent", .18)],
                [new StatModifier("ATKPercent", .21)],
                [new StatModifier("ATKPercent", .24)]
            ]
        },
        Journey: {
            desc: "Each Elemental Orb or Particle collected restores 1/1.25/1.5/1.75/2% HP."
        },
        "Urban Guerrilla": {
            desc: "Every 4s a character is on the field, their ATK increases by 4/5/6/7/8% and their CRIT DMG increases by 4/5/6/7/8%. This effect has a maximum of 5 stacks and will not be reset if the character leaves the field, but will be cleared when the character takes DMG.",
            stack: [
                [new StatModifier("ATKPercent", .04), new StatModifier("CritDMG", .04)],
                [new StatModifier("ATKPercent", .05), new StatModifier("CritDMG", .05)],
                [new StatModifier("ATKPercent", .06), new StatModifier("CritDMG", .06)],
                [new StatModifier("ATKPercent", .07), new StatModifier("CritDMG", .07)],
                [new StatModifier("ATKPercent", .08), new StatModifier("CritDMG", .08)]
            ],
            stackCount: 5
        },
        "Press the Advantage": {
            desc: "After defeating an enemy, ATK is increased by 12/15/18/21/24% for 30s. This effect has a maximum of 3 stacks, and the duration of each stack is independent of the others.",
            stack: [
                [new StatModifier("ATKPercent", .12)],
                [new StatModifier("ATKPercent", .15)],
                [new StatModifier("ATKPercent", .18)],
                [new StatModifier("ATKPercent", .21)],
                [new StatModifier("ATKPercent", .24)]
            ],
            stackCount: 3
        },
        "Infusion Arrow": {
            desc: "Normal Attack and Aimed Shot hits increase ATK by 4/5/6/7/8% and Normal Attack SPD by 1.2/1.5/1.8/2.1/2.4% for 6s. Max 4 stacks. Can only occur once every 0.3s.",
            stack: [
                [new StatModifier("ATKPercent", .04), new StatModifier("AttackSpeed", .012)],
                [new StatModifier("ATKPercent", .05), new StatModifier("AttackSpeed", .015)],
                [new StatModifier("ATKPercent", .06), new StatModifier("AttackSpeed", .018)],
                [new StatModifier("ATKPercent", .07), new StatModifier("AttackSpeed", .021)],
                [new StatModifier("ATKPercent", .08), new StatModifier("AttackSpeed", .024)]
            ],
            stackCount: 5
        },
        Windfall: {
            desc: "CRIT hits have a 60/70/80/90/100% chance to generate 1 Elemental Orb, which will regenerate 6 Energy for the character. Can only occur once every 12/10.5/9/7.5/6s."
        },
        Unreturning: {
            desc: "Aimed Shot hits on weak points increase Movement SPD by 10% and ATK by 36/45/54/63/72% for 10s.",
            toggle: [
                [new StatModifier("ATKPercent", .36)],
                [new StatModifier("ATKPercent", .45)],
                [new StatModifier("ATKPercent", .54)],
                [new StatModifier("ATKPercent", .63)],
                [new StatModifier("ATKPercent", .72)]
            ]
        },
        Focus: {
            desc: "Upon damaging an enemy, increases CRIT Rate by 8/10/12/14/16%. Max 5 stacks. A CRIT hit removes all stacks.",
            stack: [
                [new StatModifier("CritRate", .08)],
                [new StatModifier("CritRate", .1)],
                [new StatModifier("CritRate", .12)],
                [new StatModifier("CritRate", .14)],
                [new StatModifier("CritRate", .16)]
            ],
            stackCount: 5
        },
        "Rapid Firing": {
            desc: "Increases Normal Attack DMG by 40/50/60/70/80% but decreases Aimed Shot DMG by 10%",
            effect: [
                [new StatModifier("NormalAttackDMG", .4), new StatModifier("ChargedAttackDMG", -.1)],
                [new StatModifier("NormalAttackDMG", .5), new StatModifier("ChargedAttackDMG", -.1)],
                [new StatModifier("NormalAttackDMG", .6), new StatModifier("ChargedAttackDMG", -.1)],
                [new StatModifier("NormalAttackDMG", .7), new StatModifier("ChargedAttackDMG", -.1)],
                [new StatModifier("NormalAttackDMG", .8), new StatModifier("ChargedAttackDMG", -.1)]
            ]
        },
        Composed: {
            desc: "After damaging an opponent with an Elemental Skill, the skill has a 40/50/60/70/80% chance to end its own CD. Can only occur once every 30/26/22/18/14s."
        },
        "Arrowless Song": {
            desc: "Increases Elemental Skill and Elemental Burst DMG by 24/30/36/42/48%.",
            effect: [
                [new StatModifier("ElementalSkillDMG", .24), new StatModifier("ElementalBurstDMG", .24)],
                [new StatModifier("ElementalSkillDMG", .3), new StatModifier("ElementalBurstDMG", .3)],
                [new StatModifier("ElementalSkillDMG", .36), new StatModifier("ElementalBurstDMG", .36)],
                [new StatModifier("ElementalSkillDMG", .42), new StatModifier("ElementalBurstDMG", .42)],
                [new StatModifier("ElementalSkillDMG", .48), new StatModifier("ElementalBurstDMG", .48)]
            ]
        },
        "Verdant Wind": {
            desc: "Upon hit, Normal and Aimed Shot Attacks have a 50% chance to generate a Cyclone, which will continuously attract surrounding enemies, dealing 40/50/60/70/80% of ATK as DMG to these enemies every 0.5s for 4s. This effect can only occur once every 14/13/12/11/10s.",
            additionalAttack: {
                hit: [3.2, 4, 4.8, 5.6, 6.4],
                frequency: [14, 13, 12, 11, 10],
                bonus: ["PhysicalDMG"]
            }
        },
        Echo: {
            desc: "Normal and Charged Attacks have a 50% chance to fire a Bolt of Perception, dealing 240/270/300/330/360% ATK as DMG. This bolt can bounce between enemies a maximum of 4 times. This effect can occur once every 12/11/10/9/8s.",
            additionalAttack: {
                hit: [2.4, 2.7, 3, 3.3, 3.6],
                frequency: [12, 11, 10, 9, 8],
                bonus: ["PhysicalDMG"]
            }
        },
        "Infusion Scroll": {
            desc: "Triggering an Elemental reaction grants a 8/10/12/14/16% Elemental DMG Bonus for 10s. Max 2 stacks.",
            stack: [
                [new StatModifier("PyroDMG", .08), new StatModifier("HydroDMG", .08), new StatModifier("DendroDMG", .08), new StatModifier("ElectroDMG", .08), new StatModifier("AnemoDMG", .08), new StatModifier("CryoDMG", .08), new StatModifier("GeoDMG", .08)],
                [new StatModifier("PyroDMG", .1), new StatModifier("HydroDMG", .1), new StatModifier("DendroDMG", .1), new StatModifier("ElectroDMG", .1), new StatModifier("AnemoDMG", .1), new StatModifier("CryoDMG", .1), new StatModifier("GeoDMG", .1)],
                [new StatModifier("PyroDMG", .12), new StatModifier("HydroDMG", .12), new StatModifier("DendroDMG", .12), new StatModifier("ElectroDMG", .12), new StatModifier("AnemoDMG", .12), new StatModifier("CryoDMG", .12), new StatModifier("GeoDMG", .12)],
                [new StatModifier("PyroDMG", .14), new StatModifier("HydroDMG", .14), new StatModifier("DendroDMG", .14), new StatModifier("ElectroDMG", .14), new StatModifier("AnemoDMG", .14), new StatModifier("CryoDMG", .14), new StatModifier("GeoDMG", .14)],
                [new StatModifier("PyroDMG", .16), new StatModifier("HydroDMG", .16), new StatModifier("DendroDMG", .16), new StatModifier("ElectroDMG", .16), new StatModifier("AnemoDMG", .16), new StatModifier("CryoDMG", .16), new StatModifier("GeoDMG", .16)]
            ],
            stackCount: 2
        },
        Gilding: {
            desc: "Using an Elemental Burst regenerates 4/4.5/5/5.5/6 Energy every 2s for 6s. Additionally, all party members will regenerate 4/4.5/5/5.5/6% HP every 2s for this duration."
        },
        "Solar Shine": {
            desc: "Normal Attack hits increase Elemental Skill and Elemental Burst DMG by 20/25/30/35/40% for 6s. Likewise, Elemental Skill or Elemental Burst hits increase Normal Attack DMG by 20/25/30/35/40% for 6s.",
            effect: [
                [new StatModifier("ElementalSkillDMG", .2), new StatModifier("ElementalBurstDMG", .2), new StatModifier("NormalAttackDMG", .2)],
                [new StatModifier("ElementalSkillDMG", .25), new StatModifier("ElementalBurstDMG", .25), new StatModifier("NormalAttackDMG", .25)],
                [new StatModifier("ElementalSkillDMG", .3), new StatModifier("ElementalBurstDMG", .3), new StatModifier("NormalAttackDMG", .3)],
                [new StatModifier("ElementalSkillDMG", .35), new StatModifier("ElementalBurstDMG", .35), new StatModifier("NormalAttackDMG", .35)],
                [new StatModifier("ElementalSkillDMG", .4), new StatModifier("ElementalBurstDMG", .4), new StatModifier("NormalAttackDMG", .4)]
            ]
        },
        Debut: {
            desc: "When a character takes the field, they gain a random theme song for 10s: Recitative: Increases Base ATK by 60/75/90/105/120%. Interlude: Elemental Mastery is increased by 240/300/360/420/480. Aria: Increases all Elemental DMG by 48/60/72/84/96%. Can only occur once every 30s.",
            "switch": [
                [{
                    option: "Recitative",
                    effect: [new StatModifier("ATKPercent", .6)]
                }, {
                    option: "Interlude",
                    effect: [new StatModifier("ElementalMastery", 240)]
                }, {
                    option: "Aria",
                    effect: [new StatModifier("PyroDMG", .48), new StatModifier("HydroDMG", .48), new StatModifier("DendroDMG", .48), new StatModifier("ElectroDMG", .48), new StatModifier("AnemoDMG", .48), new StatModifier("CryoDMG", .48), new StatModifier("GeoDMG", .48)]
                }],
                [{
                    option: "Recitative",
                    effect: [new StatModifier("ATKPercent", .75)]
                }, {
                    option: "Interlude",
                    effect: [new StatModifier("ElementalMastery", 300)]
                }, {
                    option: "Aria",
                    effect: [new StatModifier("PyroDMG", .6), new StatModifier("HydroDMG", .6), new StatModifier("DendroDMG", .6), new StatModifier("ElectroDMG", .6), new StatModifier("AnemoDMG", .6), new StatModifier("CryoDMG", .6), new StatModifier("GeoDMG", .6)]
                }],
                [{
                    option: "Recitative",
                    effect: [new StatModifier("ATKPercent", .9)]
                }, {
                    option: "Interlude",
                    effect: [new StatModifier("ElementalMastery", 360)]
                }, {
                    option: "Aria",
                    effect: [new StatModifier("PyroDMG", .72), new StatModifier("HydroDMG", .72), new StatModifier("DendroDMG", .72), new StatModifier("ElectroDMG", .72), new StatModifier("AnemoDMG", .72), new StatModifier("CryoDMG", .72), new StatModifier("GeoDMG", .72)]
                }],
                [{
                    option: "Recitative",
                    effect: [new StatModifier("ATKPercent", 1.05)]
                }, {
                    option: "Interlude",
                    effect: [new StatModifier("ElementalMastery", 420)]
                }, {
                    option: "Aria",
                    effect: [new StatModifier("PyroDMG", .84), new StatModifier("HydroDMG", .84), new StatModifier("DendroDMG", .84), new StatModifier("ElectroDMG", .84), new StatModifier("AnemoDMG", .84), new StatModifier("CryoDMG", .84), new StatModifier("GeoDMG", .84)]
                }],
                [{
                    option: "Recitative",
                    effect: [new StatModifier("ATKPercent", 1.2)]
                }, {
                    option: "Interlude",
                    effect: [new StatModifier("ElementalMastery", 480)]
                }, {
                    option: "Aria",
                    effect: [new StatModifier("PyroDMG", .96), new StatModifier("HydroDMG", .96), new StatModifier("DendroDMG", .96), new StatModifier("ElectroDMG", .96), new StatModifier("AnemoDMG", .96), new StatModifier("CryoDMG", .96), new StatModifier("GeoDMG", .96)]
                }]
            ]
        },
        "Wind in the Square": {
            desc: "For every character in the party who hails from Mondstadt, the character who equips this weapon gains 8/10/12/14/16% ATK increase and 3/3.5/4/4.5/5% Movement SPD increase.",
            stack: [
                [new StatModifier("ATKPercent", .08)],
                [new StatModifier("ATKPercent", .1)],
                [new StatModifier("ATKPercent", .12)],
                [new StatModifier("ATKPercent", .14)],
                [new StatModifier("ATKPercent", .16)]
            ],
            stackCount: 4
        },
        "Lithic Axiom - Unity": {
            desc: "For every character in the party who hails from Liyue, the character who equips this weapon gains 7/8/9/10/11% ATK increase and 3/4/5/6/7% CRIT Rate increase.",
            stack: [
                [new StatModifier("ATKPercent", .07), new StatModifier("CritRate", .03)],
                [new StatModifier("ATKPercent", .08), new StatModifier("CritRate", .04)],
                [new StatModifier("ATKPercent", .09), new StatModifier("CritRate", .05)],
                [new StatModifier("ATKPercent", .1), new StatModifier("CritRate", .06)],
                [new StatModifier("ATKPercent", .11), new StatModifier("CritRate", .07)]
            ],
            stackCount: 4
        },
        Crush: {
            desc: "On hit, Normal or Charged Attacks have a 50% chance to deal an additional 240/300/360/420/480% ATK DMG to enemies within a small radius. Can only occur once every 15s.",
            additionalAttack: {
                hit: [2.4, 3, 3.6, 4.2, 4.8],
                frequency: [15, 15, 15, 15, 15],
                bonus: ["PhysicalDMG"]
            }
        },
        "Bane of Storm and Tide2": {
            desc: "Increases DMG against enemies affected by Hydro or Electro by 20/24/28/32/36%.",
            toggle: [
                [new StatModifier("AllDMG", .2)],
                [new StatModifier("AllDMG", .24)],
                [new StatModifier("AllDMG", .28)],
                [new StatModifier("AllDMG", .32)],
                [new StatModifier("AllDMG", .36)]
            ]
        },
        Wavesplitter: {
            desc: "Every 4s a character is on the field, they will deal 6/7/8/9/10% more DMG and take 3/2.7/2.4/2.1/1.8% more DMG. This effect has a maximum of 5 stacks and will not be reset if the character leaves the field, but will be reduced by 1 stack when the character takes DMG.",
            stack: [
                [new StatModifier("AllDMG", .06)],
                [new StatModifier("AllDMG", .07)],
                [new StatModifier("AllDMG", .08)],
                [new StatModifier("AllDMG", .09)],
                [new StatModifier("AllDMG", .1)]
            ],
            stackCount: 5
        },
        "Rebellious Guardian": {
            desc: "Taking DMG generates a shield which absorbs DMG up to 20/23/26/29/32% of Max HP. This shield lasts for 10s or until broken, and can only be triggered once every 45s. While protected by the shield, the character gains 12/15/18/21/24% increased DMG.",
            toggle: [
                [new StatModifier("AllDMG", .12)],
                [new StatModifier("AllDMG", .15)],
                [new StatModifier("AllDMG", .18)],
                [new StatModifier("AllDMG", .21)],
                [new StatModifier("AllDMG", .24)]
            ]
        },
        "Infusion Blade": {
            desc: "On hit, Normal or Charged Attacks increase Base ATK and DEF by 6/7.5/9/10.5/12% for 6s. Max 4 stacks. Can only occur once every 0.5s.",
            stack: [
                [new StatModifier("ATKPercent", .06), new StatModifier("DEFPercent", .06)],
                [new StatModifier("ATKPercent", .075), new StatModifier("DEFPercent", .075)],
                [new StatModifier("ATKPercent", .09), new StatModifier("DEFPercent", .09)],
                [new StatModifier("ATKPercent", .105), new StatModifier("DEFPercent", .105)],
                [new StatModifier("ATKPercent", .12), new StatModifier("DEFPercent", .12)]
            ],
            stackCount: 4
        },
        "Infusion Needle": {
            desc: "After picking up an Elemental Orb/Particle, Normal and Charged Attacks deal an additional 20/25/30/35/40% ATK as DMG for 5s.",
            additionalAttack: {
                perHit: [.2, .25, .3, .35, .4],
                bonus: ["PhysicalDMG"]
            }
        },
        Gladiator: {
            desc: "If there are at least 2 opponents nearby, ATK is increased by 16/20/24/28/32% and DEF is increased by 16/20/24/28/32%. If there are less than 2 enemies nearby, ATK is increased by 24/30/36/42/48%.",
            "switch": [
                [{
                    option: "At least 2 Opponents Nearby",
                    effect: [new StatModifier("ATKPercent", .16), new StatModifier("DEFPercent", .16)]
                }, {
                    option: "Less than 2 Enemies Nearby",
                    effect: [new StatModifier("ATKPercent", .24)]
                }],
                [{
                    option: "At least 2 Opponents Nearby",
                    effect: [new StatModifier("ATKPercent", .2), new StatModifier("DEFPercent", .2)]
                }, {
                    option: "Less than 2 Enemies Nearby",
                    effect: [new StatModifier("ATKPercent", .3)]
                }],
                [{
                    option: "At least 2 Opponents Nearby",
                    effect: [new StatModifier("ATKPercent", .24), new StatModifier("DEFPercent", .24)]
                }, {
                    option: "Less than 2 Enemies Nearby",
                    effect: [new StatModifier("ATKPercent", .36)]
                }],
                [{
                    option: "At least 2 Opponents Nearby",
                    effect: [new StatModifier("ATKPercent", .28), new StatModifier("DEFPercent", .28)]
                }, {
                    option: "Less than 2 Enemies Nearby",
                    effect: [new StatModifier("ATKPercent", .42)]
                }],
                [{
                    option: "At least 2 Opponents Nearby",
                    effect: [new StatModifier("ATKPercent", .32), new StatModifier("DEFPercent", .32)]
                }, {
                    option: "Less than 2 Enemies Nearby",
                    effect: [new StatModifier("ATKPercent", .48)]
                }]
            ]
        },
        "Bane of Flame and Water2": {
            desc: "Increases DMG against enemies affected by Hydro or Pyro by 20/24/28/32/36%.",
            toggle: [
                [new StatModifier("AllDMG", .2)],
                [new StatModifier("AllDMG", .24)],
                [new StatModifier("AllDMG", .28)],
                [new StatModifier("AllDMG", .32)],
                [new StatModifier("AllDMG", .36)]
            ]
        },
        "Lithic Axiom - Subjugating Evil": {
            desc: "Unknown"
        },
        "Magic Affinity": {
            desc: "After using an Elemental Skill, increases Normal and Charged Attack DMG by 8% for 12s. Max 2 stacks.",
            stack: [
                [new StatModifier("NormalAttackDMG", .08), new StatModifier("ChargedAttackDMG", .08)],
                [new StatModifier("NormalAttackDMG", .1), new StatModifier("ChargedAttackDMG", .1)],
                [new StatModifier("NormalAttackDMG", .12), new StatModifier("ChargedAttackDMG", .12)],
                [new StatModifier("NormalAttackDMG", .14), new StatModifier("ChargedAttackDMG", .14)],
                [new StatModifier("NormalAttackDMG", .16), new StatModifier("ChargedAttackDMG", .16)]
            ],
            stackCount: 2
        },
        "Infusion Stinger": {
            desc: "Dealing Elemental DMG increases all DMG by 6/7.5/9/10.5/12% for 6s. Max 2 stacks. Can only occur once every 1s.",
            stack: [
                [new StatModifier("AllDMG", .06)],
                [new StatModifier("AllDMG", .075)],
                [new StatModifier("AllDMG", .09)],
                [new StatModifier("AllDMG", .105)],
                [new StatModifier("AllDMG", .12)]
            ],
            stackCount: 2
        },
        "Bane of Fire and Thunder2": {
            desc: "Increases DMG against enemies affected by Pyro or Electro by 20/24/28/32/36%.",
            toggle: [
                [new StatModifier("AllDMG", .2)],
                [new StatModifier("AllDMG", .24)],
                [new StatModifier("AllDMG", .28)],
                [new StatModifier("AllDMG", .32)],
                [new StatModifier("AllDMG", .36)]
            ]
        },
        "Smashed Stone": {
            desc: "On hit, Normal or Charged Attacks increase Base ATK and DEF by 4/5/6/7/8% for 6s. Max 4 stacks. Can only occur once every 0.3s.",
            stack: [
                [new StatModifier("ATKPercent", .04), new StatModifier("DEFPercent", .04)],
                [new StatModifier("ATKPercent", .05), new StatModifier("DEFPercent", .05)],
                [new StatModifier("ATKPercent", .06), new StatModifier("DEFPercent", .06)],
                [new StatModifier("ATKPercent", .07), new StatModifier("DEFPercent", .07)],
                [new StatModifier("ATKPercent", .08), new StatModifier("DEFPercent", .08)]
            ],
            stackCount: 4
        },
        Justice: {
            desc: "Increases DMG dealt by Normal and Charged Attacks by 20/25/30/35/40%. Additionally, regenerates 60% of ATK as HP when Normal and Charged Attacks score a CRIT Hit. This effect can occur once every 5s.",
            effect: [
                [new StatModifier("NormalAttackDMG", .2), new StatModifier("ChargedAttackDMG", .2)],
                [new StatModifier("NormalAttackDMG", .25), new StatModifier("ChargedAttackDMG", .25)],
                [new StatModifier("NormalAttackDMG", .3), new StatModifier("ChargedAttackDMG", .3)],
                [new StatModifier("NormalAttackDMG", .35), new StatModifier("ChargedAttackDMG", .35)],
                [new StatModifier("NormalAttackDMG", .4), new StatModifier("ChargedAttackDMG", .4)]
            ]
        },
        Chord: {
            desc: "Normal or Charged Attacks grant Harmonic on hits. Gaining 5 Harmonics triggers the power of music and deals 100/125/150/175/200% ATK DMG to surrounding enemies. Harmonics last up to 30s, and a maximum of 1 can be gained every 0.5s.",
            additionalAttack: {
                hit: [1, 1.25, 1.5, 1.75, 2],
                frequency: [2.5, 2.5, 2.5, 2.5, 2.5],
                bonus: ["PhysicalDMG"]
            }
        },
        "Strong-Willed": {
            desc: "Increases Normal Attack and Aimed Shot DMG by 12/15/18/21/24%. Increases DMG from arrows shot by a further 8/10/12/14/16% for every 0.1s that the arrow is in flight, up to 0.5s. Stacks up to 5 times on each arrow.",
            effect: [
                [new StatModifier("NormalAttackDMG", .12), new StatModifier("ChargedAttackDMG", .12)],
                [new StatModifier("NormalAttackDMG", .15), new StatModifier("ChargedAttackDMG", .15)],
                [new StatModifier("NormalAttackDMG", .18), new StatModifier("ChargedAttackDMG", .18)],
                [new StatModifier("NormalAttackDMG", .21), new StatModifier("ChargedAttackDMG", .21)],
                [new StatModifier("NormalAttackDMG", .24), new StatModifier("ChargedAttackDMG", .24)]
            ],
            stack: [
                [new StatModifier("NormalAttackDMG", .08), new StatModifier("ChargedAttackDMG", .08)],
                [new StatModifier("NormalAttackDMG", .1), new StatModifier("ChargedAttackDMG", .1)],
                [new StatModifier("NormalAttackDMG", .12), new StatModifier("ChargedAttackDMG", .12)],
                [new StatModifier("NormalAttackDMG", .14), new StatModifier("ChargedAttackDMG", .14)],
                [new StatModifier("NormalAttackDMG", .16), new StatModifier("ChargedAttackDMG", .16)]
            ],
            stackCount: 5
        },
        "Echoing Ballad": {
            desc: "Increases CRIT DMG by 20/25/30/35/40%. Hits have a 60/70/80/90/100% chance to inflict a small AoE attack, dealing 125% Physical ATK DMG. Can only occur once every 4/3.5/3/2.5/2s.",
            additionalAttack: {
                hit: [1.25, 1.25, 1.25, 1.25, 1.25],
                frequency: [4, 3.5, 3, 2.5, 2],
                bonus: ["PhysicalDMG"]
            },
            effect: [
                [new StatModifier("CritDMG", .2)],
                [new StatModifier("CritDMG", .25)],
                [new StatModifier("CritDMG", .3)],
                [new StatModifier("CritDMG", .35)],
                [new StatModifier("CritDMG", .4)]
            ]
        },
        "Boundless Blessing": {
            desc: "Increases Movement SPD by 10%. When in battle, earn a 8/10/12/14/16% Elemental DMG Bonus every 4s. Max 4 stacks. Lasts until the character falls or leaves combat.",
            stack: [
                [new StatModifier("PyroDMG", .08), new StatModifier("HydroDMG", .08), new StatModifier("DendroDMG", .08), new StatModifier("ElectroDMG", .08), new StatModifier("AnemoDMG", .08), new StatModifier("CryoDMG", .08), new StatModifier("GeoDMG", .08)],
                [new StatModifier("PyroDMG", .1), new StatModifier("HydroDMG", .1), new StatModifier("DendroDMG", .1), new StatModifier("ElectroDMG", .1), new StatModifier("AnemoDMG", .1), new StatModifier("CryoDMG", .1), new StatModifier("GeoDMG", .1)],
                [new StatModifier("PyroDMG", .12), new StatModifier("HydroDMG", .12), new StatModifier("DendroDMG", .12), new StatModifier("ElectroDMG", .12), new StatModifier("AnemoDMG", .12), new StatModifier("CryoDMG", .12), new StatModifier("GeoDMG", .12)],
                [new StatModifier("PyroDMG", .14), new StatModifier("HydroDMG", .14), new StatModifier("DendroDMG", .14), new StatModifier("ElectroDMG", .14), new StatModifier("AnemoDMG", .14), new StatModifier("CryoDMG", .14), new StatModifier("GeoDMG", .14)],
                [new StatModifier("PyroDMG", .16), new StatModifier("HydroDMG", .16), new StatModifier("DendroDMG", .16), new StatModifier("ElectroDMG", .16), new StatModifier("AnemoDMG", .16), new StatModifier("CryoDMG", .16), new StatModifier("GeoDMG", .16)]
            ],
            stackCount: 4
        },
        "Wandering Clouds": {
            desc: "Increases Elemental DMG Bonus by 12/15/18/21/24%. Normal Attack hits have a 50% chance to earn the favor of the clouds. which actively seek out nearby enemies to attack for 15s, dealing 160/200/240/280/320% ATK DMG. Can only occur once every 30s.",
            effect: [
                [new StatModifier("PyroDMG", .12), new StatModifier("HydroDMG", .12), new StatModifier("DendroDMG", .12), new StatModifier("ElectroDMG", .12), new StatModifier("AnemoDMG", .12), new StatModifier("CryoDMG", .12), new StatModifier("GeoDMG", .12)],
                [new StatModifier("PyroDMG", .15), new StatModifier("HydroDMG", .15), new StatModifier("DendroDMG", .15), new StatModifier("ElectroDMG", .15), new StatModifier("AnemoDMG", .15), new StatModifier("CryoDMG", .15), new StatModifier("GeoDMG", .15)],
                [new StatModifier("PyroDMG", .18), new StatModifier("HydroDMG", .18), new StatModifier("DendroDMG", .18), new StatModifier("ElectroDMG", .18), new StatModifier("AnemoDMG", .18), new StatModifier("CryoDMG", .18), new StatModifier("GeoDMG", .18)],
                [new StatModifier("PyroDMG", .21), new StatModifier("HydroDMG", .21), new StatModifier("DendroDMG", .21), new StatModifier("ElectroDMG", .21), new StatModifier("AnemoDMG", .21), new StatModifier("CryoDMG", .21), new StatModifier("GeoDMG", .21)],
                [new StatModifier("PyroDMG", .24), new StatModifier("HydroDMG", .24), new StatModifier("DendroDMG", .24), new StatModifier("ElectroDMG", .24), new StatModifier("AnemoDMG", .24), new StatModifier("CryoDMG", .24), new StatModifier("GeoDMG", .24)]
            ],
            additionalAttack: {
                hit: [1.6, 2, 2.4, 2.8, 3.2],
                frequency: [5, 5, 5, 5, 5],
                bonus: ["PhysicalDMG"]
            }
        },
        "Golden Majesty": {
            desc: "Increases Shield Strength by 20/25/30/35/40%. Scoring hits on opponents increases ATK by 4/5/6/7/8% for 8s. Max 5 stacks. Can only occur once every 0.3s. While protected by a shield, this ATK increase effect is increased by 100%.",
            effect: [
                [new StatModifier("PowerfulShield", .2)],
                [new StatModifier("PowerfulShield", .25)],
                [new StatModifier("PowerfulShield", .3)],
                [new StatModifier("PowerfulShield", .35)],
                [new StatModifier("PowerfulShield", .4)]
            ],
            stack: [
                [new StatModifier("ATKPercent", .04)],
                [new StatModifier("ATKPercent", .05)],
                [new StatModifier("ATKPercent", .06)],
                [new StatModifier("ATKPercent", .07)],
                [new StatModifier("ATKPercent", .08)]
            ],
            stackCount: 10
        },
        "Sky-Ripping Dragon Spine": {
            desc: "Increases all DMG by 8/10/12/14/16%. After using an Elemental Burst, Normal or Charged Attack, on hit, creates a vacuum blade that does 80/100/120/140/160% Physical DMG to enemies along its path. Lasts for 20s or 8 vacuum blades.",
            effect: [
                [new StatModifier("AllDMG", .08)],
                [new StatModifier("AllDMG", .1)],
                [new StatModifier("AllDMG", .12)],
                [new StatModifier("AllDMG", .14)],
                [new StatModifier("AllDMG", .16)]
            ],
            additionalAttack: {
                hit: [.8, 1, 1.2, 1.4, 1.6],
                frequency: [3, 3, 3, 3, 3],
                bonus: ["PhysicalDMG"]
            }
        },
        "Wolfish Tracker": {
            desc: "Increases Base ATK by 20/25/30/35/40%. On hit, attacks against enemies with less than 30% HP increase all party members&#39 Base ATK by 40/50/60/70/80% for 12s. Can only occur once every 30s.",
            effect: [
                [new StatModifier("ATKPercent", .2)],
                [new StatModifier("ATKPercent", .25)],
                [new StatModifier("ATKPercent", .3)],
                [new StatModifier("ATKPercent", .35)],
                [new StatModifier("ATKPercent", .4)]
            ],
            toggle: [
                [new StatModifier("ATKPercent", .4)],
                [new StatModifier("ATKPercent", .5)],
                [new StatModifier("ATKPercent", .6)],
                [new StatModifier("ATKPercent", .7)],
                [new StatModifier("ATKPercent", .8)]
            ]
        },
        "Rainbow-Piercing Stinger": {
            desc: "Increases Normal Attack SPD by 10/12/14/16/18%. Increases DMG against enemies affected by any element by 24/30/36/42/48%.",
            effect: [
                [new StatModifier("AttackSpeed", .1)],
                [new StatModifier("AttackSpeed", .12)],
                [new StatModifier("AttackSpeed", .14)],
                [new StatModifier("AttackSpeed", .16)],
                [new StatModifier("AttackSpeed", .18)]
            ],
            toggle: [
                [new StatModifier("AllDMG", .24)],
                [new StatModifier("AllDMG", .3)],
                [new StatModifier("AllDMG", .36)],
                [new StatModifier("AllDMG", .42)],
                [new StatModifier("AllDMG", .48)]
            ]
        },
        "Eagle Spear of Justice": {
            desc: "On hit, increases ATK by 3.2/3.9/4.6/5.3/6% for 6s. Max 7 stacks. Can only occur once every 0.3s. Full stacks increase DMG dealt by 12/15/18/21/24%.",
            stack: [
                [new StatModifier("ATKPercent", .032)],
                [new StatModifier("ATKPercent", .039)],
                [new StatModifier("ATKPercent", .046)],
                [new StatModifier("ATKPercent", .053)],
                [new StatModifier("ATKPercent", .06)]
            ],
            stackCount: 7,
            toggle: [
                [new StatModifier("AllDMG", .12)],
                [new StatModifier("AllDMG", .15)],
                [new StatModifier("AllDMG", .18)],
                [new StatModifier("AllDMG", .21)],
                [new StatModifier("AllDMG", .24)]
            ]
        },
        "Black Wing": {
            desc: "Increases CRIT Rate by 8/10/12/14/16% and increases Normal ATK SPD by 12%. Additionally, Normal and Charged Attacks hits on enemies have a 50% chance to trigger a vacuum blade that deals 40/55/70/85/100% of ATK as DMG in a small AoE. This effect can occur no more than once every 2s.",
            effect: [
                [new StatModifier("CritRate", .08), new StatModifier("AttackSpeed", .12)],
                [new StatModifier("CritRate", .1), new StatModifier("AttackSpeed", .12)],
                [new StatModifier("CritRate", .12), new StatModifier("AttackSpeed", .12)],
                [new StatModifier("CritRate", .14), new StatModifier("AttackSpeed", .12)],
                [new StatModifier("CritRate", .16), new StatModifier("AttackSpeed", .12)]
            ],
            additionalAttack: {
                hit: [.4, .55, .7, .85, 1],
                frequency: [2, 2, 2, 2, 2],
                bonus: ["PhysicalDMG"]
            }
        },
        "Falcons Defiance": {
            desc: "ATK is increased by 20/25/30/35/40%. Triggers on taking DMG: the soul of the Falcon of the West awakens, holding the banner of the resistance aloft, regenerating HP equal to 100/115/130/145/160% of ATK and dealing 200/230/260/290/320% of ATK as DMG to surrounding enemies. This effect can only occur once every 15s.",
            effect: [
                [new StatModifier("ATKPercent", .2)],
                [new StatModifier("ATKPercent", .25)],
                [new StatModifier("ATKPercent", .3)],
                [new StatModifier("ATKPercent", .35)],
                [new StatModifier("ATKPercent", .4)]
            ],
            additionalAttack: {
                hit: [2, 2.3, 2.6, 2.9, 3.2],
                frequency: [15, 15, 15, 15, 15],
                bonus: ["PhysicalDMG"]
            }
        },
        "Sky-Piercing Fang": {
            desc: "CRIT Rate increased by 4/5/6/7/8%. Gains Skypiercing Might upon using an Elemental Burst: Increases Movement SPD by 10%, increases ATK SPD by 10%, and Normal and Charged hits deal additional damage equal to 20/25/30/35/40% of ATK. Lasts 12s.",
            effect: [
                [new StatModifier("CritRate", .04)],
                [new StatModifier("CritRate", .05)],
                [new StatModifier("CritRate", .06)],
                [new StatModifier("CritRate", .07)],
                [new StatModifier("CritRate", .08)]
            ],
            additionalAttack: {
                perHit: [.2, .25, .3, .35, .4],
                bonus: ["PhysicalDMG"]
            },
            toggle: [
                [new StatModifier("AttackSpeed", .1)],
                [new StatModifier("AttackSpeed", .1)],
                [new StatModifier("AttackSpeed", .1)],
                [new StatModifier("AttackSpeed", .1)],
                [new StatModifier("AttackSpeed", .1)]
            ]
        },
        "Undying Admiration": {
            desc: "Increases Elemental Skill DMG by 16/20/24/28/32% and Elemental Skill Crit Rate by 6/7.5/9/10.5/12%.",
            effect: [
                [new StatModifier("ElementalSkillDMG", .16)],
                [new StatModifier("ElementalSkillDMG", .2)],
                [new StatModifier("ElementalSkillDMG", .24)],
                [new StatModifier("ElementalSkillDMG", .28)],
                [new StatModifier("ElementalSkillDMG", .32)]
            ],
            skill: {
                effect: [
                    [new StatModifier("CritRate", .06)],
                    [new StatModifier("CritRate", .075)],
                    [new StatModifier("CritRate", .09)],
                    [new StatModifier("CritRate", .105)],
                    [new StatModifier("CritRate", .12)]
                ]
            }
        },
        "Frost Burial": {
            desc: "Hitting an opponent with Normal and Charged Attacks has a 60/70/80/90/100% chance of forming and dropping an Everfrost Icicle above them, dealing 80/95/110/125/140% AoE ATK DMG. Opponents affected by Cryo are dealt 200/240/280/320/360% ATK DMG. Can only occur once every 10s.",
            additionalAttack: {
                hit: [.8, .95, 1.1, 1.25, 1.4],
                toggle_hit: [2, 2.4, 2.8, 3.2, 3.6],
                frequency: [10, 10, 10, 10, 10],
                bonus: ["PhysicalDMG"]
            }
        },
        Descension: {
            desc: "Hitting opponents with Normal and Charged Attacks grants a 50% chance to deal 200% ATK as DMG in a small AoE. This effect can only occur once every 10s. Additionally, if the Traveler equips the Sword of Descension, their ATK is increased by 66 (toggle).",
            additionalAttack: {
                hit: [2, 2, 2, 2, 2],
                frequency: [10, 10, 10, 10, 10]
            },
            toggle: [
                [new StatModifier("ATK", 66)]
            ]
        },
        "Protectors Virtue": {
            desc: "HP increased by 20/25/30/35/40%. Additionally, provides an ATK Bonus based on 1.2/1.5/1.8/2.1/2.4% of the wielders Max HP.",
            effect: [
                [new StatModifier("HPPercent", .2)],
                [new StatModifier("HPPercent", .25)],
                [new StatModifier("HPPercent", .3)],
                [new StatModifier("HPPercent", .35)],
                [new StatModifier("HPPercent", .4)]
            ],
            scale: [{
                to: new StatModifier("ATK", 0),
                from: e => new StatModifier("HP", .012)
            }, {
                to: new StatModifier("ATK", 0),
                from: e => new StatModifier("HP", .015)
            }, {
                to: new StatModifier("ATK", 0),
                from: e => new StatModifier("HP", .018)
            }, {
                to: new StatModifier("ATK", 0),
                from: e => new StatModifier("HP", .021)
            }, {
                to: new StatModifier("ATK", 0),
                from: e => new StatModifier("HP", .024)
            }]
        },
        "Reckless Cinnabar": {
            desc: "HP increased by 20/25/30/35/40%. Additionally, provides an ATK Bonus based on 0.8/1/1.2/1.4/1.6% of the wielders Max HP. When the wielders HP is less than 50%, this ATK Bonus is increased by an additional 1/1.2/1.4/1.6/1.8% of Max HP.",
            effect: [
                [new StatModifier("HPPercent", .2)],
                [new StatModifier("HPPercent", .25)],
                [new StatModifier("HPPercent", .3)],
                [new StatModifier("HPPercent", .35)],
                [new StatModifier("HPPercent", .4)]
            ],
            scale: [{
                to: new StatModifier("ATK", 0),
                from: e => new StatModifier("HP", .008)
            }, {
                to: new StatModifier("ATK", 0),
                from: e => new StatModifier("HP", .01)
            }, {
                to: new StatModifier("ATK", 0),
                from: e => new StatModifier("HP", .012)
            }, {
                to: new StatModifier("ATK", 0),
                from: e => new StatModifier("HP", .014)
            }, {
                to: new StatModifier("ATK", 0),
                from: e => new StatModifier("HP", .016)
            }],
            toggle_scale: [{
                to: new StatModifier("ATK", 0),
                from: e => new StatModifier("HP", .01)
            }, {
                to: new StatModifier("ATK", 0),
                from: e => new StatModifier("HP", .012)
            }, {
                to: new StatModifier("ATK", 0),
                from: e => new StatModifier("HP", .014)
            }, {
                to: new StatModifier("ATK", 0),
                from: e => new StatModifier("HP", .016)
            }, {
                to: new StatModifier("ATK", 0),
                from: e => new StatModifier("HP", .018)
            }]
        },
        "Windblume Wish": {
            desc: "After using an Elemental Skill, receive a boon from the ancient wish of the Windblume, increasing ATK by 16/20/24/28/32% for 6s.",
            toggle: [
                [new StatModifier("ATKPercent", .16)],
                [new StatModifier("ATKPercent", .2)],
                [new StatModifier("ATKPercent", .24)],
                [new StatModifier("ATKPercent", .28)],
                [new StatModifier("ATKPercent", .32)]
            ]
        },
        "The Parting Refrain": {
            desc: "Increases Elemental Mastery by 60/75/90/105/120. When the Elemental Skills or Bursts of the character wielding this weapon hit opponents, that character gains a Sigil of Remembrance. This effect can be triggered once very .2s and can be triggered even if said character is not on the field. When you possess 4 Sigils of Remembrance, all of them will be consumed and all nearby party members will obtain the Millennial Movement: Farewell Song effect for 12s. Millenial Movement: Farewell Song increases ELemental Mastery by 100/125/150/175/200 and ATK by 20/25/30/35/40%.",
            effect: [
                [new StatModifier("ElementalMastery", 60)],
                [new StatModifier("ElementalMastery", 75)],
                [new StatModifier("ElementalMastery", 90)],
                [new StatModifier("ElementalMastery", 105)],
                [new StatModifier("ElementalMastery", 120)]
            ],
            toggle: [
                [new StatModifier("ElementalMastery", 100), new StatModifier("ATKPercent", .2)],
                [new StatModifier("ElementalMastery", 125), new StatModifier("ATKPercent", .25)],
                [new StatModifier("ElementalMastery", 150), new StatModifier("ATKPercent", .3)],
                [new StatModifier("ElementalMastery", 175), new StatModifier("ATKPercent", .35)],
                [new StatModifier("ElementalMastery", 200), new StatModifier("ATKPercent", .4)]
            ]
        },
        "Oppidan Ambush": {
            desc: "While the character equipped with this weapon is in the party but not on the field, their DMG increases by 2/2.5/3/3.5/4% every second up to a max of 20/25/30/35/40%. When the character is on the field for more than 4s, the aforementioned DMG buff decreases by 4/5/6/7/8% per second until it reaches 0%.",
            stack: [
                [new StatModifier("AllDMG", .02)],
                [new StatModifier("AllDMG", .025)],
                [new StatModifier("AllDMG", .03)],
                [new StatModifier("AllDMG", .035)],
                [new StatModifier("AllDMG", .04)]
            ],
            stackCount: 10
        },
        "Itinerant Hero": {
            desc: "Increases DMG dealt by the character equipping this weapon by 12/15/18/21/24%. Taking DMG disables this effect for 5s.",
            effect: [
                [new StatModifier("AllDMG", .12)],
                [new StatModifier("AllDMG", .15)],
                [new StatModifier("AllDMG", .18)],
                [new StatModifier("AllDMG", .21)],
                [new StatModifier("AllDMG", .24)]
            ]
        },
        "Ever-Changing": {
            desc: "Hitting an opponent with a Normal Attack decreases the Stamina consumption of Sprint or Alternate Sprint by 14% for 5s. Additionally, using a sprint or Alternate Sprint ability increases ATK by 20/25/30/35/40% for 5s.",
            toggle: [
                [new StatModifier("ATKPercent", .2)],
                [new StatModifier("ATKPercent", .25)],
                [new StatModifier("ATKPercent", .3)],
                [new StatModifier("ATKPercent", .35)],
                [new StatModifier("ATKPercent", .4)]
            ]
        },
        "Rebels Banner-Hymn": {
            desc: "Increases ATK by 16%, and when Normal or Charged Attacks hit opponents, the character gains a Sigil of Whispers. This effect can be triggered once every 0.3s. When you possess 4 Sigils of Whispers, all of them will be consumed and all nearby party  members will obtain the Millenniel Movement: Bannyer-Hymn effect for 12s. Milleniel Movement: Banner-Hymn increases Normal ATK SPD by 12% and increases ATK by 20%. Once this effect is triggered, you will not gain Sigils of Whispers for 20s.",
            effect: [
                [new StatModifier("ATKPercent", .16)],
                [new StatModifier("ATKPercent", .2)],
                [new StatModifier("ATKPercent", .24)],
                [new StatModifier("ATKPercent", .28)],
                [new StatModifier("ATKPercent", .32)]
            ],
            toggle: [
                [new StatModifier("ATKPercent", .2), new StatModifier("AttackSpeed", .12)],
                [new StatModifier("ATKPercent", .25), new StatModifier("AttackSpeed", .15)],
                [new StatModifier("ATKPercent", .3), new StatModifier("AttackSpeed", .18)],
                [new StatModifier("ATKPercent", .35), new StatModifier("AttackSpeed", .21)],
                [new StatModifier("ATKPercent", .4), new StatModifier("AttackSpeed", .24)]
            ]
        }
    },
    WeaponGrowth = {
        49: [49, 145, 176, 286, 317, 374, 406, 464, 495, 555, 586, 648, 679, 741],
        48: [48, 133, 164, 261, 292, 341, 373, 423, 455, 506, 537, 590, 621, 674],
        46: [46, 122, 153, 235, 266, 308, 340, 382, 414, 457, 488, 532, 563, 608],
        45: [45, 128, 154, 247, 273, 321, 347, 395, 421, 470, 496, 545, 571, 620],
        44: [44, 119, 144, 226, 252, 293, 319, 361, 387, 429, 455, 497, 523, 565],
        440: [44, 110, 141, 210, 241, 275, 307, 341, 373, 408, 439, 475, 506, 542],
        42: [42, 109, 135, 205, 231, 266, 292, 327, 353, 388, 414, 449, 475, 510],
        41: [41, 99, 125, 184, 210, 238, 264, 293, 319, 347, 373, 401, 427, 454],
        40: [40, 102, 121, 187, 207, 239, 259, 292, 311, 344, 363, 396, 415, 448],
        39: [39, 94, 113, 169, 189, 216, 236, 263, 282, 309, 329, 355, 375, 401],
        390: [39, 94, 120, 176, 202, 229, 255, 282, 308, 335, 361, 388, 414, 440],
        38: [38, 86, 105, 151, 171, 193, 212, 234, 253, 274, 294, 314, 334, 354]
    },
    WeaponSubstatGrowthPercent = {
        .034: [3.4, 6, 8.8, 10.1, 11.5, 12.9, 14.2, 15.6],
        .04: [4, 7.1, 10.3, 11.9, 13.6, 15.2, 16.8, 0],
        .045: [4.5, 8, 11.6, 13.4, 15.2, 17, 18.9, 20.7],
        .048: [4.8, 8.5, 12.4, 14.3, 16.2, 18.2, 20.1, 22.1],
        .051: [5.1, 9, 13.1, 15.2, 17.3, 19.3, 21.4, 23.4],
        .06: [6, 10.6, 15.5, 17.9, 20.3, 22.7, 25.1, 27.6],
        .064: [6.4, 11.3, 16.4, 19, 21.6, 24.1, 26.7, 29.3],
        .067: [6.7, 11.8, 17.2, 19.9, 22.6, 25.2, 27.9, 30.6],
        .068: [6.8, 12, 17.5, 20.3, 23, 25.7, 28.5, 31.2],
        .072: [7.2, 12.7, 18.5, 21.4, 24.4, 27.3, 30.2, 33.1],
        .075: [7.5, 13.3, 19.3, 22.4, 25.4, 28.4, 31.5, 34.5],
        .077: [7.7, 13.5, 19.7, 22.8, 25.9, 29, 32.1, 35.2],
        .08: [8, 14.1, 20.6, 23.8, 27.1, 30, 33.5, 36.8],
        .085: [8.5, 15, 21.9, 25.3, 28.8, 32.2, 35.6, 39],
        .09: [9, 15.9, 23.2, 26.8, 30.4, 34.1, 37.7, 41.3],
        .096: [9.6, 16.9, 24.6, 28.5, 32.3, 36.2, 40.1, 43.9],
        .0961: [9.6, 17, 24.7, 28.6, 32.5, 36.3, 40.2, 44.1],
        .1: [10, 17.7, 25.8, 29.8, 33.8, 37.9, 41.9, 45.9],
        .102: [10.2, 18, 26.3, 30.4, 34.5, 38.6, 42.7, 46.9],
        .108: [10.8, 19.1, 27.8, 32.2, 36.5, 40.9, 45.3, 49.6],
        .113: [11.3, 19.9, 29, 33.5, 38.1, 42.6, 47.2, 51.7],
        .12: [12, 21.2, 30.9, 35.7, 40.6, 45.4, 50.3, 55.1],
        .133: [13.3, 23.6, 34.3, 39.7, 45.1, 50.5, 55.9, 61.3],
        .144: [14.4, 25.4, 37.1, 42.9, 48.7, 54.5, 60.3, 66.2],
        .15: [15, 26.5, 38.7, 44.7, 50.8, 56.8, 62.9, 69],
        .16: [16, 28.3, 41.2, 47.7, 54.1, 60.6, 0, 0]
    },
    WeaponSubstatGrowthFlat = {
        12: [12, 21, 31, 36, 41, 45, 50, 55],
        20: [20, 36, 53, 61, 69, 77, 85, 94],
        24: [24, 42, 62, 71, 81, 91, 101, 110],
        31: [31, 54, 79, 91, 104, 116, 128, 141],
        36: [36, 64, 93, 107, 122, 136, 151, 165],
        40: [40, 0, 0, 0, 0, 0],
        41: [41, 72, 105, 122, 138, 154, 171, 187],
        43: [43, 76, 111, 129, 146, 164, 181, 198],
        44: [44, 0, 0, 0, 0, 0],
        48: [48, 85, 124, 143, 162, 182, 201, 221]
    };