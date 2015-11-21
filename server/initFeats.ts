import {Feats} from 'collections/feats';

export function initFeats() {
	if(Feats.find().count() === 0) {
		let feats = [
			{ name: 'acrobatic', prerequisite: '', benefit: 'You get a +2 bonus on all Jump checks and Tumble checks.' },
			{ name: 'agile', prerequisite: '', benefit: 'You get a +2 bonus on all Balance checks and Escape Artist checks.' },
			{ name: 'alertness', prerequisite: '', benefit: 'You get a +2 bonus on all Listen checks and Spot checks.', special: 'The master of a familiar gains the benefit of the Alertness feat whenever the familiar is within arm’s reach.' },
			{ name: 'animal affinity', prerequisite: '', benefit: 'You get a +2 bonus on all Handle Animal checks and Ride checks.' },
			{ name: 'armor proficiency (light)', prerequisite: '', benefit: 'When you wear a type of armor with which you are proficient, the armor check penalty for that armor applies only to Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble checks.', normal: 'A character who is wearing armor with which she is not proficient applies its armor check penalty to attack rolls and to all skill checks that involve moving, including Ride.', special: 'All characters except wizards, sorcerers, and monks automatically have Armor Proficiency (light) as a bonus feat. They need not select it.' },
			{ name: 'armor proficiency (medium)', prerequisite: 'armor proficiency (light)', benefit: 'When you wear a type of armor with which you are proficient, the armor check penalty for that armor applies only to Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble checks.', normal: 'A character who is wearing armor with which she is not proficient applies its armor check penalty to attack rolls and to all skill checks that involve moving, including Ride.', special: 'Fighters, barbarians, paladins, clerics, druids, and bards automatically have Armor Proficiency (medium) as a bonus feat. They need not select it.' },
			{ name: 'armor proficiency (heavy)', prerequisite: 'armor proficiency (medium)', benefit: 'When you wear a type of armor with which you are proficient, the armor check penalty for that armor applies only to Balance, Climb, Escape Artist, Hide, Jump, Move Silently, Sleight of Hand, and Tumble checks.', normal: 'A character who is wearing armor with which she is not proficient applies its armor check penalty to attack rolls and to all skill checks that involve moving, including Ride.', special: 'Fighters, paladins, and clerics automatically have Armor Proficiency (heavy) as a bonus feat. They need not select it.' },
			{ name: 'athletic', prerequisite: '', benefit: 'You get a +2 bonus on all Climb checks and Swim checks.' },
			{ name: 'augment summoning', prerequisite: 'Spell Focus (conjuration).', benefit: 'Each creature you conjure with any summon spell gains a +4 enhancement bonus to Strength and Constitution for the duration of the spell that summoned it.' },
			{ name: 'blind-fight', prerequisite: '', benefit: 'In melee, every time you miss because of concealment, you can reroll your miss chance percentile roll one time to see if you actually hit. An invisible attacker gets no advantages related to hitting you in melee.That is, you don’t lose your Dexterity bonus to Armor Class, and the attacker doesn’t get the usual + 2 bonus for being invisible. The invisible attacker’s bonuses do still apply for ranged attacks, however. You take only half the usual penalty to speed for being unable to see. Darkness and poor visibility in general reduces your speed to three-quarters normal, instead of one-half.', normal: 'Regular attack roll modifiers for invisible attackers trying to hit you apply, and you lose your Dexterity bonus to AC. The speed reduction for darkness and poor visibility also applies.', special: 'The Blind-Fight feat is of no use against a character who is the subject of a blink spell.' },
			{ name: 'cleave', prerequisite: 'Str 13, Power Attack.', benefit: 'If you deal a creature enough damage to make it drop (typically by dropping it to below 0 hit points or killing it), you get an immediate, extra melee attack against another creature within reach. You cannot take a 5-foot step before making this extra attack. The extra attack is with the same weapon and at the same bonus as the attack that dropped the previous creature. You can use this ability once per round.' },
			{ name: 'combat casting', prerequisite: '', benefit: 'You get a +4 bonus on Concentration checks made to cast a spell or use a spell-like ability while on the defensive or while you are grappling or pinned.' },
			{ name: 'combat expertise', prerequisite: 'Int 13.', benefit: 'When you use the attack action or the full attack action in melee, you can take a penalty of as much as -5 on your attack roll and add the same number (+5 or less) as a dodge bonus to your Armor Class. This number may not exceed your base attack bonus. The changes to attack rolls and Armor Class last until your next action.', normal: 'A character without the Combat Expertise feat can fight defensively while using the attack or full attack action to take a -4 penalty on attack rolls and gain a +2 dodge bonus to Armor Class.' },
			{ name: 'combat reflexes', prerequisite: '', benefit: 'You may make a number of additional attacks of opportunity equal to your Dexterity bonus. With this feat, you may also make attacks of opportunity while flat- footed.', normal: 'A character without this feat can make only one attack of opportunity per round and can’t make attacks of opportunity while flat-footed.' },
			{ name: 'deceitful', prerequisite: '', benefit: 'You get a +2 bonus on all Disguise checks and Forgery checks.' },
			{ name: 'deflect arrows', prerequisite: 'Dex 13, Improved Unarmed Strike.', benefit: 'You must have at least one hand free (holding nothing) to use this feat. Once per round when you would normally be hit with a ranged weapon, you may deflect it so that you take no damage from it. You must be aware of the attack and not flat-footed. Attempting to deflect a ranged weapon doesn’t count as an action. Unusually massive ranged weapons and ranged attacks generated by spell effects can’t be deflected.' },
			{ name: 'deft hands', prerequisite: '', benefit: 'You get a +2 bonus on all Sleight of Hand checks and Use Rope checks.' },
			{ name: 'diehard', prerequisite: 'Endurance', benefit: 'When reduced to between -1 and -9 hit points, you automatically become stable. You don’t have to roll d% to see if you lose 1 hit point each round. When reduced to negative hit points, you may choose to act as if you were disabled, rather than dying. You must make this decision as soon as you are reduced to negative hit points (even if it isn’t your turn). If you do not choose to act as if you were disabled, you immediately fall unconscious. When using this feat, you can take either a single move or standard action each turn, but not both, and you cannot take a full round action.You can take a move action without further injuring yourself, but if you perform any standard action (or any other action deemed as strenuous, including some free actions, swift actions, or immediate actions, such as casting a quickened spell) you take 1 point of damage after completing the act.If you reach - 10 hit points, you immediately die.', normal: 'A character without this feat who is reduced to between -1 and -9 hit points is unconscious and dying.' },
			{ name: 'diligent', prerequisite: '', benefit: 'You get a +2 bonus on all Appraise checks and Decipher Script checks.' },
			{ name: 'dodge', prerequisite: 'Dex 13', benefit: 'During your action, you designate an opponent and receive a +1 dodge bonus to Armor Class against attacks from that opponent. You can select a new opponent on any action. A condition that makes you lose your Dexterity bonus to Armor Class (if any) also makes you lose dodge bonuses.Also, dodge bonuses stack with each other, unlike most other types of bonuses.' },
			{ name: 'endurance', prerequisite: '', benefit: 'You gain a +4 bonus on the following checks and saves: Swim checks made to resist nonlethal damage, Constitution checks made to continue running, Constitution checks made to avoid nonlethal damage from a forced march, Constitution checks made to hold your breath, Constitution checks made to avoid nonlethal damage from starvation or thirst, Fortitude saves made to avoid nonlethal damage from hot or cold environments, and Fortitude saves made to resist damage from suffocation. Also, you may sleep in light or medium armor without becoming fatigued.', normal: 'A character without this feat who sleeps in medium or heavier armor is automatically fatigued the next day.' },
			{ name: 'eschew materials', prerequisite: '', benefit: 'You can cast any spell that has a material component costing 1 gp or less without needing that component. (The casting of the spell still provokes attacks of opportunity as normal.) If the spell requires a material component that costs more than 1 gp, you must have the material component at hand to cast the spell, just as normal.' },
			{ name: 'extra turning', prerequisite: 'Ability to turn or rebuke creatures.', benefit: 'Each time you take this feat, you can use your ability to turn or rebuke creatures four more times per day than normal. If you have the ability to turn or rebuke more than one kind of creature each of your turning or rebuking abilities gains four additional uses per day.', normal: 'Without this feat, a character can typically turn or rebuke undead (or other creatures) a number of times per day equal to 3 + his or her Charisma modifier.', special: 'You can gain Extra Turning multiple times. Its effects stack. Each time you take the feat, you can use each of your turning or rebuking abilities four additional times per day.' },
			{ name: 'far shot', prerequisite: 'Point Blank Shot.', benefit: 'When you use a projectile weapon, such as a bow, its range increment increases by one-half (multiply by 1½). When you use a thrown weapon, its range increment is doubled.' },
			{ name: 'great cleave', prerequisite: 'Str 13, Cleave, Power Attack, base attack bonus +4.', benefit: 'This feat works like Cleave, except that there is no limit to the number of times you can use it per round.' },
			{ name: 'great fortitude', prerequisite: '', benefit: 'You get a +2 bonus on all Fortitude saving throws.' },
			{ name: 'greater spell penetration', prerequisite: 'Spell Penetration.', benefit: 'You get a +2 bonus on caster level checks (1d20 + caster level) made to overcome a creature’s spell resistance. This bonus stacks with the one from Spell Penetration.' },
			{ name: 'greater two-weapon fighting', prerequisite: 'Dex 19, Improved Two-Weapon Fighting, Two-Weapon Fighting, base attack bonus +11.', benefit: 'You get a third attack with your off-hand weapon, albeit at a -10 penalty. See the Two-Weapon Fighting special attack.' },
			{ name: 'improved bull rush', prerequisite: 'Str 13, Power Attack.', benefit: 'When you perform a bull rush you do not provoke an attack of opportunity from the defender. You also gain a +4 bonus on the opposed Strength check you make to push back the defender.' },
			{ name: 'improved counterspell', prerequisite: '', benefit: 'When counterspelling, you may use a spell of the same school that is one or more spell levels higher than the target spell.', normal: 'Without this feat, you may counter a spell only with the same spell or with a spell specifically designated as countering the target spell.' },
			{ name: 'improved disarm', prerequisite: 'Int 13, Combat Expertise.', benefit: 'You do not provoke an attack of opportunity when you attempt to disarm an opponent, nor does the opponent have a chance to disarm you. You also gain a +4 bonus on the opposed attack roll you make to disarm your opponent.' },
			{ name: 'improved feint', prerequisite: 'Int 13, Combat Expertise.', benefit: 'You can make a Bluff check to feint in combat as a move action.', normal: 'Feinting in combat is a standard action.' },
			{ name: 'improved grapple', prerequisite: 'Dex 13, Improved Unarmed Strike.', benefit: 'You do not provoke an attack of opportunity when you make a touch attack to start a grapple. You also gain a +4 bonus on all grapple checks, regardless of whether you started the grapple.', normal: 'Without this feat, you provoke an attack of opportunity when you make a touch attack to start a grapple.' },
			{ name: 'improved initiative', prerequisite: '', benefit: 'You get a +4 bonus on initiative checks.' },
			{ name: 'improved overrun', prerequisite: 'Str 13, Power Attack.', benefit: 'When you attempt to overrun an opponent, the target may not choose to avoid you. You also gain a +4 bonus on your Strength check to knock down your opponent.', normal: 'Without this feat, the target of an overrun can choose to avoid you or to block you.' },
			{ name: 'improved precise shot', prerequisite: 'Dex 19, Point Blank Shot, Precise Shot, base attack bonus +11.', benefit: 'Your ranged attacks ignore the AC bonus granted to targets by anything less than total cover, and the miss chance granted to targets by anything less than total concealment. Total cover and total concealment provide their normal benefits against your ranged attacks. In addition, when you shoot or throw ranged weapons at a grappling opponent, you automatically strike at the opponent you have chosen.', normal: 'See the normal rules on the effects of cover and concealment. Without this feat, a character who shoots or throws a ranged weapon at a target involved in a grapple must roll randomly to see which grappling combatant the attack strikes.' },
			{ name: 'improved shield bash', prerequisite: 'Shield Proficiency.', benefit: 'When you perform a shield bash, you may still apply the shield’s shield bonus to your AC.', normal: 'Without this feat, a character who performs a shield bash loses the shield’s shield bonus to AC until his or her next turn.' },
			{ name: 'improved sunder', prerequisite: 'Str 13, Power Attack.', benefit: 'When you strike at an object held or carried by an opponent (such as a weapon or shield), you do not provoke an attack of opportunity. You also gain a + 4 bonus on any attack roll made to attack an object held or carried by another character.', normal: 'Without this feat, you provoke an attack of opportunity when you strike at an object held or carried by another character.' },
			{ name: 'improved trip', prerequisite: 'Int 13, Combat Expertise.', benefit: 'You do not provoke an attack of opportunity when you attempt to trip an opponent while you are unarmed. You also gain a +4 bonus on your Strength check to trip your opponent. If you trip an opponent in melee combat, you immediately get a melee attack against that opponent as if you hadn’t used your attack for the trip attempt.', normal: 'Without this feat, you provoke an attack of opportunity when you attempt to trip an opponent while you are unarmed.' },
			{ name: 'improved turning', prerequisite: 'Ability to turn or rebuke creatures.', benefit: 'You turn or rebuke creatures as if you were one level higher than you are in the class that grants you the ability.' },
			{ name: 'improved two-weapon fighting', prerequisite: 'Dex 17, Two-Weapon Fighting, base attack bonus +6.', benefit: 'In addition to the standard single extra attack you get with an off-hand weapon, you get a second attack with it, albeit at a -5 penalty. See the Two-Weapon Fighting special attack.', normal: 'Without this feat, you can only get a single extra attack with an off-hand weapon.' },
			{ name: 'improved unarmed strike', prerequisite: '', benefit: 'You are considered to be armed even when unarmed —that is, you do not provoke attacks or opportunity from armed opponents when you attack them while unarmed. However, you still get an attack of opportunity against any opponent who makes an unarmed attack on you. In addition, your unarmed strikes can deal lethal or nonlethal damage, at your option.', normal: 'Without this feat, you are considered unarmed when attacking with an unarmed strike, and you can deal only nonlethal damage with such an attack.' },
			{ name: 'investigator', prerequisite: '', benefit: 'You get a +2 bonus on all Gather Information checks and Search checks.' },
			{ name: 'iron will', prerequisite: '', benefit: 'You get a +2 bonus on all Will saving throws.' },
			{ name: 'leadership', prerequisite: '', benefit: 'Having this feat enables the character to attract loyal companions and devoted followers, subordinates who assist her.' },
			{ name: 'lightning reflexes', prerequisite: '', benefit: 'You get a +2 bonus on all Reflex saving throws.' },
			{ name: 'magical aptitude', prerequisite: '', benefit: 'You get a +2 bonus on all Spellcraft checks and Use Magic Device checks.' },
			{ name: 'manyshot', prerequisite: 'Dex 17, Point Blank Shot, Rapid Shot, base attack bonus +6', benefit: 'As a standard action, you may fire two arrows at a single opponent within 30 feet. Both arrows use the same attack roll (with a -4 penalty) to determine success and deal damage normally (but see Special). For every five points of base attack bonus you have above +6, you may add one additional arrow to this attack, to a maximum of four arrows at a base attack bonus of + 16. However, each arrow after the second adds a cumulative - 2 penalty on the attack roll (for a total penalty of -6 for three arrows and - 8 for four). Damage reduction and other resistances apply separately against each arrow fired.', special: 'Regardless of the number of arrows you fire, you apply precision-based damage only once. If you score a critical hit, only the first arrow fired deals critical damage; all others deal regular damage.' },
			{ name: 'mobility', prerequisite: 'Dex 13, Dodge.', benefit: 'You get a +4 dodge bonus to Armor Class against attacks of opportunity caused when you move out of or within a threatened area. A condition that makes you lose your Dexterity bonus to Armor Class (if any) also makes you lose dodge bonuses. Dodge bonuses stack with each other, unlike most types of bonuses.' },
			{ name: 'mounted archery', prerequisite: 'Ride 1 rank, Mounted Combat.', benefit: 'The penalty you take when using a ranged weapon while mounted is halved: -2 instead of -4 if your mount is taking a double move, and -4 instead of -8 if your mount is running.' },
			{ name: 'mounted combat', prerequisite: 'Ride 1 rank.', benefit: 'Once per round when your mount is hit in combat, you may attempt a Ride check (as a reaction) to negate the hit. The hit is negated if your Ride check result is greater than the opponent’s attack roll. (Essentially, the Ride check result becomes the mount’s Armor Class if it’s higher than the mount’s regular AC.)' },
			{ name: 'natural spell', prerequisite: 'Wis 13, wild shape ability.', benefit: 'You can complete the verbal and somatic components of spells while in a wild shape. You substitute various noises and gestures for the normal verbal and somatic components of a spell. You can also use any material components or focuses you possess, even if such items are melded within your current form. This feat does not permit the use of magic items while you are in a form that could not ordinarily use them, and you do not gain the ability to speak while in a wild shape.' },
			{ name: 'negotiator', prerequisite: '', benefit: 'You get a +2 bonus on all Diplomacy checks and Sense Motive checks.' },
			{ name: 'nimble fingers', prerequisite: '', benefit: 'You get a +2 bonus on all Disable Device checks and Open Lock checks.' },
			{ name: 'persuasive', prerequisite: '', benefit: 'You get a +2 bonus on all Bluff checks and Intimidate checks.' },
			{ name: 'point blank shot', prerequisite: '', benefit: 'You get a +1 bonus on attack and damage rolls with ranged weapons at ranges of up to 30 feet.' },
			{ name: 'power attack', prerequisite: 'Str 13.', benefit: 'On your action, before making attack rolls for a round, you may choose to subtract a number from all melee attack rolls and add the same number to all melee damage rolls. This number may not exceed your base attack bonus. The penalty on attacks and bonus on damage apply until your next turn.', special: 'If you attack with a two-handed weapon, or with a one-handed weapon wielded in two hands, instead add twice the number subtracted from your attack rolls. You can’t add the bonus from Power Attack to the damage dealt with a light weapon (except with unarmed strikes or natural weapon attacks), even though the penalty on attack rolls still applies. (Normally, you treat a double weapon as a one-handed weapon and a light weapon. If you choose to use a double weapon like a two-handed weapon, attacking with only one end of it in a round, you treat it as a two-handed weapon.)' },
			{ name: 'precise shot', prerequisite: 'Point Blank Shot.', benefit: 'You can shoot or throw ranged weapons at an opponent engaged in melee without taking the standard -4 penalty on your attack roll.' },
			{ name: 'quick draw', prerequisite: 'Base attack bonus +1.', benefit: 'You can draw a weapon as a free action instead of as a move action. You can draw a hidden weapon (see the Sleight of Hand skill) as a move action. A character who has selected this feat may throw weapons at his full normal rate of attacks (much like a character with a bow).', normal: 'Without this feat, you may draw a weapon as a move action, or (if your base attack bonus is +1 or higher) as a free action as part of movement. Without this feat, you can draw a hidden weapon as a standard action.' },
			{ name: 'rapid reload', prerequisite: 'Weapon Proficiency (crossbow type chosen).', benefit: 'The time required for you to reload your chosen type of crossbow is reduced to a free action (for a hand or light crossbow) or a move action (for a heavy crossbow). Reloading a crossbow still provokes an attack of opportunity. If you have selected this feat for hand crossbow or light crossbow, you may fire that weapon as many times in a full attack action as you could attack if you were using a bow.', normal: 'A character without this feat needs a move action to reload a hand or light crossbow, or a full-round action to reload a heavy crossbow.', special: 'You can gain Rapid Reload multiple times. Each time you take the feat, it applies to a new type of crossbow.' },
			{ name: 'rapid shot', prerequisite: 'Dex 13, Point Blank Shot.', benefit: 'You can get one extra attack per round with a ranged weapon. The attack is at your highest base attack bonus, but each attack you make in that round (the extra one and the normal ones) takes a -2 penalty. You must use the full attack action to use this feat.' },
			{ name: 'ride-by attack', prerequisite: 'Ride 1 rank, Mounted Combat.', benefit: 'When you are mounted and use the charge action, you may move and attack as if with a standard charge and then move again (continuing the straight line of the charge). Your total movement for the round can’t exceed double your mounted speed. You and your mount do not provoke an attack of opportunity from the opponent that you attack.' },
			{ name: 'run', prerequisite: '', benefit: 'When running, you move five times your normal speed (if wearing medium, light, or no armor and carrying no more than a medium load) or four times your speed (if wearing heavy armor or carrying a heavy load). If you make a jump after a running start (see the Jump skill description), you gain a +4 bonus on your Jump check. While running, you retain your Dexterity bonus to AC.', normal: 'You move four times your speed while running (if wearing medium, light, or no armor and carrying no more than a medium load) or three times your speed (if wearing heavy armor or carrying a heavy load), and you lose your Dexterity bonus to AC.' },
			{ name: 'self-sufficient', prerequisite: '', benefit: 'You get a +2 bonus on all Heal checks and Survival checks.' },
			{ name: 'shield proficiency', prerequisite: '', benefit: 'You can use a shield and take only the standard penalties.', normal: 'When you are using a shield with which you are not proficient, you take the shield’s armor check penalty on attack rolls and on all skill checks that involve moving, including Ride checks.' },
			{ name: 'shot on the run', prerequisite: 'Dex 13, Dodge, Mobility, Point Blank Shot, base attack bonus +4.', benefit: 'When using the attack action with a ranged weapon, you can move both before and after the attack, provided that your total distance moved is not greater than your speed.' },
			{ name: 'snatch arrows', prerequisite: 'Dex 15, Deflect Arrows, Improved Unarmed Strike.', benefit: 'When using the Deflect Arrows feat you may catch the weapon instead of just deflecting it. Thrown weapons can immediately be thrown back at the original attacker (even though it isn’t your turn) or kept for later use. You must have at least one hand free (holding nothing) to use this feat.' },
			{ name: 'spell penetration', prerequisite: '', benefit: 'You get a +2 bonus on caster level checks (1d20 + caster level) made to overcome a creature’s spell resistance.' },
			{ name: 'spirited charge', prerequisite: 'Ride 1 rank, Mounted Combat, Ride-By Attack.', benefit: 'When mounted and using the charge action, you deal double damage with a melee weapon (or triple damage with a lance).' },
			{ name: 'spring attack', prerequisite: 'Dex 13, Dodge, Mobility, base attack bonus +4.', benefit: 'When using the attack action with a melee weapon, you can move both before and after the attack, provided that your total distance moved is not greater than your speed. Moving in this way does not provoke an attack of opportunity from the defender you attack, though it might provoke attacks of opportunity from other creatures, if appropriate. You can’t use this feat if you are wearing heavy armor. You must move at least 5 feet both before and after you make your attack in order to utilize the benefits of Spring Attack.' },
			{ name: 'stealthy', prerequisite: '', benefit: 'You get a +2 bonus on all Hide checks and Move Silently checks.' },
			{ name: 'stunning fist', prerequisite: 'Dex 13, Wis 13, Improved Unarmed Strike, base attack bonus +8.', benefit: 'You must declare that you are using this feat before you make your attack roll (thus, a failed attack roll ruins the attempt). Stunning Fist forces a foe damaged by your unarmed attack to make a Fortitude saving throw (DC 10 + ½ your character level + your Wis modifier), in addition to dealing damage normally. A defender who fails this saving throw is stunned for 1 round (until just before your next action). A stunned creature drops everything held, can’t take actions, takes a -2 penalty to AC, and loses his Dexterity bonus to AC. You may attempt a stunning attack once per day for every four levels you have attained (but see Special), and no more than once per round. Constructs, oozes, plants, undead, incorporeal creatures, and creatures immune to critical hits cannot be stunned.' },
			{ name: 'toughness', prerequisite: '', benefit: 'You gain +3 hit points.', special: 'A character may gain this feat multiple times. Its effects stack.' },
			{ name: 'tower shield proficiency', prerequisite: 'Shield Proficiency.', benefit: 'You can use a tower shield and suffer only the standard penalties.', normal: 'A character who is using a shield with which he or she is not proficient takes the shield’s armor check penalty on attack rolls and on all skill checks that involve moving, including Ride.' },
			{ name: 'track', prerequisite: '', benefit: 'To find tracks or to follow them for 1 mile requires a successful Survival check. You must make another Survival check every time the tracks become difficult to follow. You move at half your normal speed (or at your normal speed with a - 5 penalty on the check, or at up to twice your normal speed with a - 20 penalty on the check).', normal: 'Without this feat, you can use the Survival skill to find tracks, but you can follow them only if the DC for the task is 10 or lower. Alternatively, you can use the Search skill to find a footprint or similar sign of a creature’s passage using the DCs given above, but you can’t use Search to follow tracks, even if someone else has already found them.', special: 'This feat does not allow you to find or follow the tracks made by a subject of a pass without trace spell.' },
			{ name: 'trample', prerequisite: 'Ride 1 rank, Mounted Combat.', benefit: 'When you attempt to overrun an opponent while mounted, your target may not choose to avoid you. Your mount may make one hoof attack against any target you knock down, gaining the standard +4 bonus on attack rolls against prone targets.' },
			{ name: 'two-weapon defense', prerequisite: 'Dex 15, Two-Weapon Fighting.', benefit: 'When wielding a double weapon or two weapons (not including natural weapons or unarmed strikes), you gain a +1 shield bonus to your AC. See the Two-Weapon Fighting special attack. When you are fighting defensively or using the total defense action, this shield bonus increases to +2.' },
			{ name: 'two-weapon fighting', prerequisite: 'Dex 15.', benefit: 'You can fight with a weapon in each hand. You can make one extra attack each round with the second weapon. Your penalties on attack rolls for fighting with two weapons are reduced. The penalty for your primary hand lessens by 2 and the one for your off hand lessens by 6. See the Two-Weapon Fighting special attack.', normal: 'If you wield a second weapon in your off hand, you can get one extra attack per round with that weapon. When fighting in this way you suffer a -6 penalty with your regular attack or attacks with your primary hand and a -10 penalty to the attack with your off hand. If your off-hand weapon is light the penalties are reduced by 2 each. (An unarmed strike is always considered light.)' },
			{ name: 'whirlwind attack', prerequisite: 'Dex 13, Int 13, Combat Expertise, Dodge, Mobility, Spring Attack, base attack bonus +4.', benefit: 'When you use the full attack action, you can give up your regular attacks and instead make one melee attack at your full base attack bonus against each opponent within reach. When you use the Whirlwind Attack feat, you also forfeit any bonus or extra attacks granted by other feats, spells, or abilities.' }
		];

		for (let i = 0; i < feats.length; i++)
			Feats.insert(feats[i]);
	}
}