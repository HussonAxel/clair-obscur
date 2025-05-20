export const skills = [
  {
    name: "From Fire",
    apCost: "4",
    character: "Gustave",
    prerequisite: "Marking Shot",
    skillEffect:
      "Deals medium single target damage. 3 hits. Uses weapon's element. Heals self by 20% if the target Burns",
  },
  {
    name: "Lumiere Assault",
    apCost: "3",
    character: "Gustave",
    prerequisite: "N/A",
    skillEffect:
      "Deals low single target damage. 5 hits. Uses weapon's element. Critical Hits generate 1 Additional Charge.",
  },
  {
    name: "Marking Shot",
    apCost: "2",
    character: "Gustave",
    prerequisite: "Overcharge",
    skillEffect: "Deals low single target Lightning damage. 1 hit. Applies Mark",
  },
  {
    name: "Overcharge",
    apCost: "4",
    character: "Gustave",
    prerequisite: "N/A",
    skillEffect:
      "High Lightning damage based on the amount of Charges. 1 hit. Can Break",
  },
  {
    name: "Powerful",
    apCost: "3",
    character: "Gustave",
    prerequisite: "Lumiere Assault",
    skillEffect:
      "Applies Powerful to 1-3 allies, increasing the damage they deal for 3 turns. Gives 0 to 2 Charges",
  },
  {
    name: "Recovery",
    apCost: "3",
    character: "Gustave",
    prerequisite: "Powerful",
    skillEffect:
      "Recovers 50% Health and dispels Status Effects. Gives 0-2 Charges",
  },
  {
    name: "Shatter",
    apCost: "5",
    character: "Gustave",
    prerequisite: "Recovery",
    skillEffect:
      "Deals High Lightning damage to all enemies. 1 hit. Can Break. If a target is Broken by the hit, Overcharge is fully Charged.",
  },
  {
    name: "Strike Storm",
    apCost: "7",
    character: "Gustave",
    prerequisite: "From Fire",
    skillEffect:
      "Deals very high single target damage. 6 hits. Uses Weapon's element. Critical Hits generate 2 additional Charges",
  },
  {
    name: "Crippling Tsunami",
    apCost: "5",
    character: "Lune",
    prerequisite: "Thermal Transfer",
    skillEffect:
      "Deals medium Ice damage to all enemies. 1 hit. Applies Slow for 3 turns. Consumes earth stain lightning stain fire stain for greatly increased damage.",
  },
  {
    name: "Crustal Crush",
    apCost: "7",
    character: "Lune",
    prerequisite: "Rockslide",
    skillEffect:
      "Deals High single target Earth and Break damage. 5 hits. Consumes lightning stain lightning stain: Increased Damage.",
  },
  {
    name: "Earth Rising",
    apCost: "3",
    character: "Lune",
    prerequisite: "Ice Lance",
    skillEffect:
      "Deals low Earth damage to all enemies. 1 hit. Consumes lightning stain for increased damage.",
  },
  {
    name: "Electrify",
    apCost: "1",
    character: "Lune",
    prerequisite: "Thunderfall",
    skillEffect:
      "Deals low single target Lightning damage. 3 hits. Critical Hits trigger an additional hit. Consumes fire stain to generate one Light Stain",
  },
  {
    name: "Elemental Genesis",
    apCost: "4",
    character: "Lune",
    prerequisite: "Elemental Trick",
    skillEffect:
      "Deals extreme damage to all enemies. 8 hits. Each hit deals damage in a random element. Can only be cast with lightning stain earth stain fire stain ice stain",
  },
  {
    name: "Elemental Trick",
    apCost: "3",
    character: "Lune",
    prerequisite: "Mayhem",
    skillEffect:
      "Deals low single target Ice, Fire, Lightning, and Earth damage. 4 hits. Critical Hits generate the corresponding Stain.",
  },
  {
    name: "Fire Rage",
    apCost: "5",
    character: "Lune",
    prerequisite: "Wildfire",
    skillEffect:
      "Deals increasingly high Fire damage to all enemies every turn until Lune receives damage. Stuns self if interrupted. Consumes ice stain ice stain: Increased Damage",
  },
  {
    name: "Healing Light",
    apCost: "3",
    character: "Lune",
    prerequisite: "Ice Lance, Immolation",
    skillEffect:
      "Heals the targeted Ally and dispels Status Effects. Consumes earth stainearth stain: Costs 0 AP",
  },
  {
    name: "Hell",
    apCost: "9",
    character: "Lune",
    prerequisite: "Fire Rage",
    skillEffect:
      "Deals very high Fire damage that applies 5 Burn per hit to all enemies. 2 hits. Deals self-damage if failed. Consumes ice stain earth stain lightning stain: Greatly increased damage.",
  },
  {
    name: "Ice Lance",
    apCost: "4",
    character: "Lune",
    prerequisite: "N/A",
    skillEffect:
      "Deals medium single target Ice damage that Slows the target. 1 Hit. Consumes earth stain to deal increased damage.",
  },
  {
    name: "Immolation",
    apCost: "2",
    character: "Lune",
    prerequisite: "N/A",
    skillEffect:
      "Deals low single target Fire damage and 3 Burn. 1 hit. Applies 2 more Burns if the target is Marked. Consumes ice stain for increased damage.",
  },
  {
    name: "Lightning Dance",
    apCost: "7",
    character: "Lune",
    prerequisite: "Electrify",
    skillEffect:
      "Deals very high single target Lightning damage. 6 hits. Critical Hits trigger an additional hit. Consumes earth stain ice stain fire stain: Greatly increased damage.",
  },
  {
    name: "Mayhem",
    apCost: "3",
    character: "Lune",
    prerequisite: "Electrify or Thermal Transfer",
    skillEffect:
      "Consumes all Stains to deal high elemental damage to the target. Can Break if 4 Stains are consumed.",
  },
  {
    name: "Rebirth",
    apCost: "5",
    character: "Lune",
    prerequisite: "Healing Light",
    skillEffect:
      "Revives an ally with 30-70% Health and 2 additional AP. Consumes lightning stainlightning stainlightning stain: Costs 0 AP.",
  },
  {
    name: "Revitalization",
    apCost: "5",
    character: "Lune",
    prerequisite: "Rebirth",
    skillEffect:
      "Heals 1-3 allies by 40-60% Health. Consumes fire stainfire stainfire stain to also apply Regen that heals on turn start for 3 turns.",
  },
  {
    name: "Rockslide",
    apCost: "5",
    character: "Lune",
    prerequisite: "Earth Rising",
    skillEffect:
      "Deals medium single target Earth damage. 2 hits. Can Break Consumes lightning stainice stainfire stain for greatly increased damage.",
  },
  {
    name: "Sky Break",
    apCost: "3 (Gradient Charge Cost)",
    character: "Lune",
    prerequisite: "Reach Relationship Level 7 with Lune.",
    skillEffect:
      "Deals extreme damage to all enemies. 1 hit. Element depends on which Stains Lune has the most. Can Break",
  },
  {
    name: "Storm Caller",
    apCost: "6",
    character: "Lune",
    prerequisite: "Lightning Dance",
    skillEffect:
      "All enemies receive medium Lightning damage at the end of their turn, and low Lightning damage when they receive damage. Duration: 3 turns. Consumes fire stain fire stain for double thunder strikes on turn end.",
  },
  {
    name: "Terraquake",
    apCost: "5",
    character: "Lune",
    prerequisite: "Crustal Crush",
    skillEffect:
      "Deals low Earth damage and Break damage to all enemies every turn. Also increases all Break damage received by 50%. Duration: 3 turns. Consumes lightning stain lightning stain to increase the Duration to 5 turns.",
  },
  {
    name: "Thermal Transfer",
    apCost: "2",
    character: "Lune",
    prerequisite: "Earth Rising",
    skillEffect:
      "Deals low single target Ice damage. 2 hits. Gains 4 AP if target is Burning Consumes earth stain earth stain: Play a second turn.",
  },
  {
    name: "Thunderfall",
    apCost: "5",
    character: "Lune",
    prerequisite: "Immolation",
    skillEffect:
      "Deals medium Lightning damage to random enemies. 2-6 hits. Critical Hits trigger an additional hit. Consumes fire stain for increased damage.",
  },
  {
    name: "Tree of Life",
    apCost: "2 (Gradient Charge Cost)",
    character: "Lune",
    prerequisite: "Reach Relationship Level 4 with Lune.",
    skillEffect: "Cleanses all Status Effects and Heals all allies.",
  },
  {
    name: "Tremor",
    apCost: "1 (Gradient Charge Cost)",
    character: "Lune",
    prerequisite:
      "Automatically unlocked upon learning the Gradient Attacks/Skills feature, which becomes available upon progressing the story.",
    skillEffect:
      "Deals high Earth damage to all enemies. 1 hit. Removes all enemies' Shields",
  },
  {
    name: "Typhoon",
    apCost: "8",
    character: "Lune",
    prerequisite: "Crippling Tsunami",
    skillEffect:
      "On turn start, deals high Ice damage to all enemies and Heals allies. Consumes earth stain earth stain: Duration increased from 3 to 5 turns.",
  },
  {
    name: "Breaking Rules",
    apCost: "3",
    character: "Maelle",
    prerequisite: "Fleuret Fury",
    skillEffect:
      "Deals low single target Physical damage. 2 hits. Destroys all target's Shields Gains 1 AP per Shield destroyed. If target us Defenceless, play a second turn.",
  },
  {
    name: "Burning Canvas",
    apCost: "5",
    character: "Maelle",
    prerequisite: "Phantom Strike or Stendahl",
    skillEffect:
      "Change Stance: Offensive Deals high single target Void damage. 5 hits. Applies 1 Burn per hit. Damage increased for each Burn on the targe",
  },
  {
    name: "Combustion",
    apCost: "4",
    character: "Maelle",
    prerequisite: "Rain of Fire",
    skillEffect:
      "Deals medium single target Physical Damage. 2 Hits. Consumes up to 10 Burn for increased damage.",
  },
  {
    name: "Degagement",
    apCost: "2",
    character: "Maelle",
    prerequisite: "Spark, Guard Down",
    skillEffect:
      "Deals low single target Fire damage. 1 hit. Target becomes weak to Fire damage for 2 turns.",
  },
  {
    name: "Egide",
    apCost: "3",
    character: "Maelle",
    prerequisite: "Guard Up",
    skillEffect:
      "Protects allies by taking damage in their place, for 2 turns. Duration is extended by 1 on gaining Shell",
  },
  {
    name: "Fender's Flurry",
    apCost: "4",
    character: "Maelle",
    prerequisite: "Breaking Rules",
    skillEffect:
      "Deals medium damage to all enemies. 1 hit. Uses weapon's element. Applies Defenceless for 1 turn.",
  },
  {
    name: "Fleuret Fury",
    apCost: "6",
    character: "Maelle",
    prerequisite: "Guard Up",
    skillEffect:
      "Deals high single target Physical damage. 3 hits. If in Virtuose Stance, stay in Virtuose Stance Can Break",
  },
  {
    name: "Gommage",
    apCost: "3 (Gradient Charge Cost)",
    character: "Maelle",
    prerequisite: "Reach Relationship Level 7 with Maelle.",
    skillEffect: "Kills weak targets. Otherwise deals extreme Void damage. 1 hit.",
  },
  {
    name: "Guard Down",
    apCost: "3",
    character: "Maelle",
    prerequisite: "Guard Up or Degagement",
    skillEffect:
      "Change Stance: Offensive Applies Defenceless to all enemies for 3 turns.",
  },
  {
    name: "Guard Up",
    apCost: "3",
    character: "Maelle",
    prerequisite: "Swift Stride",
    skillEffect:
      "Applies Shell, reducing damage taken, to up to 3 allies for 3 turns.",
  },
  {
    name: "Gustave's Homage",
    apCost: "8",
    character: "Maelle",
    prerequisite:
      "Automatically unlocked through story progression after completing the Forgotten Battlefield location.",
    skillEffect:
      "Deals high single target Lightning damage. 8 hits. Increased damage to Marked targets, Doesn't remove Mark.",
  },
  {
    name: "Last Chance",
    apCost: "1",
    character: "Maelle",
    prerequisite: "Mezzo Forte",
    skillEffect:
      "Reduces self-Health to 1 but refills all AP Switches to Virtuose Stance",
  },
  {
    name: "Mezzo Forte",
    apCost: "1",
    character: "Maelle",
    prerequisite: "Degagement",
    skillEffect: "Reapplies current stance and gives 2-4 AP",
  },
  {
    name: "Momentum Strike",
    apCost: "7",
    character: "Maelle",
    prerequisite: "Egide",
    skillEffect:
      "Deals high single target damage. 1 hit. Uses weapon's element. Increased damage to Marked targets. Virtuose Stance: Costs 4 AP",
  },
  {
    name: "Offensive Switch",
    apCost: "1",
    character: "Maelle",
    prerequisite: "N/A",
    skillEffect:
      "Deals low single target damage and applies Defenceless for 3 turns. 1 hit. Uses weapon's element.",
  },
  {
    name: "Payback",
    apCost: "9",
    character: "Maelle",
    prerequisite: "Last Chance or Momentum Strike",
    skillEffect:
      "Deals very high single target Physical damage. 1 hit. Reduced AP cost for each attack parried since last turn. Can Break",
  },
  {
    name: "Percee",
    apCost: "5",
    character: "Maelle",
    prerequisite: "N/A",
    skillEffect:
      "Deals medium single target Physical damage. 1 hit. Increased damage to Marked targets. Virtuose Stance: Costs 2 AP",
  },
  {
    name: "Phantom Strike",
    apCost: "7",
    character: "Maelle",
    prerequisite: "Offensive Switch or Burning Canvas",
    skillEffect:
      "Change Stance: Defensive Deals very high Void damage to all enemies. 4 hits. Also gives +35% of a Gradient Charge.",
  },
  {
    name: "Phoenix Flame",
    apCost: "2 (Gradient Charge Cost)",
    character: "Maelle",
    prerequisite: "Reach Relationship Level 4 with Maelle.",
    skillEffect:
      "Applies 10 Burn to all enemies and revives all allies with 50 to 70% Health.",
  },
  {
    name: "Pyrolyse",
    apCost: "9",
    character: "Maelle",
    prerequisite: "Revenge",
    skillEffect:
      "Deals extreme single target Fire damage. 3 hits. Applies 5 Burn per hit. Offensive Stance: Applies 2 more Burn per hit.",
  },
  {
    name: "Rain of Fire",
    apCost: "5",
    character: "Maelle",
    prerequisite: "Degagement",
    skillEffect:
      "Deals medium single target Fire damage. 2 hits. Applies 3 Burn per hit. Defensive Stance: applies 2 more Burn per hit.",
  },
  {
    name: "Revenge",
    apCost: "5",
    character: "Maelle",
    prerequisite: "Combustion",
    skillEffect:
      "Deals high single target Fire damage. 1 hit. Damage increased for each hit received since the previous turn. Can Break",
  },
  {
    name: "Spark",
    apCost: "3",
    character: "Maelle",
    prerequisite: "Offensive Switch",
    skillEffect:
      "Deals low single target Fire damage. 1 hit. Applies 3 Burn Offensive Stance: Applies 2 more Burn",
  },
  {
    name: "Stendahl",
    apCost: "8",
    character: "Maelle",
    prerequisite: "Percee or Burning Canvas",
    skillEffect:
      "Change Stance: Stanceless Deals extreme single target Void damage. 1 hit. Removes self-Shields and self applies Defenceless",
  },
  {
    name: "Swift Stride",
    apCost: "3",
    character: "Maelle",
    prerequisite: "Percee",
    skillEffect:
      "Deals low single target Physical damage. 1 hit. Switches to Virtuose Stance if target is Burning Regains 0 to 2 AP",
  },
  {
    name: "Sword Ballet",
    apCost: "9",
    character: "Maelle",
    prerequisite: "Fencer's Flurry",
    skillEffect:
      "Deals extreme single target damage. 5 hits. Uses weapon's element. Critical Hitsdeal double damage.",
  },
  {
    name: "Virtuose Strike",
    apCost: "1 (Gradient Charge Cost)",
    character: "Maelle",
    prerequisite:
      "Automatically unlocked upon learning the Gradient Attacks/Skills feature, which becomes available upon progressing the story.",
    skillEffect: "Deals high single target Physical damage. 5 hits",
  },
  {
    name: "All Set",
    apCost: "3",
    character: "Sciel",
    prerequisite: "Card Weaver",
    skillEffect: "Applies Shell, Powerful, and Rush to all allies.",
  },
  {
    name: "Bad Omen",
    apCost: "3",
    character: "Sciel",
    prerequisite: "Marking Card",
    skillEffect:
      "Deals low Dark damage to all enemies. 2 hits. Applies 2 Foretell per hit.",
  },
  {
    name: "Card Weaver",
    apCost: "3",
    character: "Sciel",
    prerequisite: "Dark Cleansing",
    skillEffect:
      "Deals low single target Physical damage. 1 hit. Propagates target's Foretell to all enemies. Plays a second turn.",
  },
  {
    name: "Dark Cleansing",
    apCost: "0",
    character: "Sciel",
    prerequisite: "Spectral Sweep",
    skillEffect:
      "Cleanses an ally of their Status Effects and propogates the target's buff to all allies.",
  },
  {
    name: "Dark Wave",
    apCost: "6",
    character: "Sciel",
    prerequisite: "Grim Harvest or Delaying Slash",
    skillEffect:
      "Deals high Dark damage to all enemies. 3 hits. Consumes all Foretell to deal additional damage.",
  },
  {
    name: "Delaying Slash",
    apCost: "5",
    character: "Sciel",
    prerequisite: "Bad Omen",
    skillEffect:
      "Deals medium single targe damage. 2 hits. Uses weapon's element. Consumes Foretell to increase damage and delay target's turn.",
  },
  {
    name: "Doom",
    apCost: "2 (Gradient Charge Cost)",
    character: "Sciel",
    prerequisite: "Reach Relationship Level 4 with Sciel.",
    skillEffect:
      "Deals very high single target Dark damage. 3 hits. Applies Powerless, Defenceless, and Slow for 3 turns. Can Break",
  },
  {
    name: "End Slice",
    apCost: "3 (Gradient Charge Cost)",
    character: "Sciel",
    prerequisite: "Reach Relationship Level 7 with Sciel.",
    skillEffect:
      "Deals extreme single target Physical damage. 1 hit. Damage is increased for each Foretell consumed since the beginning of the battle.",
  },
  {
    name: "Final Path",
    apCost: "9",
    character: "Sciel",
    prerequisite: "Dark Wave",
    skillEffect:
      "Deal extreme single target Dark damage and applies 10 Foretell 1 hit. Can Break",
  },
  {
    name: "Firing Shadow",
    apCost: "3",
    character: "Sciel",
    prerequisite: "Searing Bond",
    skillEffect:
      "Deals low Dark damage to all enemies. 3 hits. Consumes 1 Foretell per hit for increased damage.",
  },
  {
    name: "Focused Foretell",
    apCost: "2",
    character: "Sciel",
    prerequisite: "N/A",
    skillEffect:
      "Deals medium single target Physical damage. 1 hit. Applies 2 Foretell Applies 3 additional Foretell if target has 0 Foretell",
  },
  {
    name: "Fortune's Fury",
    apCost: "5",
    character: "Sciel",
    prerequisite: "Firing Shadow",
    skillEffect: "Targeted ally deals double damage for 1 turn.",
  },
  {
    name: "Grim Harvest",
    apCost: "5",
    character: "Sciel",
    prerequisite: "Sealed Fate",
    skillEffect:
      "Deals medium single target Dark damage. 1 hit. Heals all allies by 30% Health. Consumes Foretell to increase Heal by 5% per Foretell",
  },
  {
    name: "Harvest",
    apCost: "3",
    character: "Sciel",
    prerequisite: "Twilight Slash",
    skillEffect:
      "Deals medium single target damage. 1 hit. Uses weapon's element. Heals self by 40% Health. Consumes all Foretell to increase Heal by 5% per Foretell",
  },
  {
    name: "Intervention",
    apCost: "5",
    character: "Sciel",
    prerequisite: "Dark Cleansing",
    skillEffect: "Targeted ally plays immediately and gains 4 AP",
  },
  {
    name: "Marking Card",
    apCost: "3",
    character: "Sciel",
    prerequisite: "Focused Foretell",
    skillEffect:
      "Deals medium single target Dark damge. 2 hits. Applies Mark to the target. Applies 3 Foretell",
  },
  {
    name: "Our Sacrifice",
    apCost: "4",
    character: "Sciel",
    prerequisite: "Fortune's Fury",
    skillEffect:
      "Deals extreme Dark damage to all enemies. 1 hit. Absorbs allies' Health and enemies' Foretell to deal increased damage.",
  },
  {
    name: "Phantom Blade",
    apCost: "5",
    character: "Sciel",
    prerequisite: "Twilight Slash",
    skillEffect:
      "Deals high single target Dark damage. 1 hit. Consumes all Foretell to deal additional damage. Can Break",
  },
  {
    name: "Plentiful Harvest",
    apCost: "4",
    character: "Sciel",
    prerequisite: "Firing Shadow",
    skillEffect:
      "Deals medium single target Physical damage. 2 hits. Consumes all Foretell on a target and gives 1 AP to a party member for each Foretell consumed.",
  },
  {
    name: "Rush",
    apCost: "3",
    character: "Sciel",
    prerequisite: "Focused Foretell",
    skillEffect:
      "Applies Rush to 1-3 allies, increasing their speed for 3 turns.",
  },
  {
    name: "Sealed Fate",
    apCost: "4",
    character: "Sciel",
    prerequisite: "Phantom Blade",
    skillEffect:
      "Deals high single target damage. 5-7 hits. Uses weapon's element. Each hit can consume 1 Foretell to deal 200% more damage. Critical Hitsdon't remove the Foretell but still gets the damage increase.",
  },
  {
    name: "Searing Bond",
    apCost: "4",
    character: "Sciel",
    prerequisite: "Harvest",
    skillEffect:
      "Deals medium single target Dark damage. 1 hit. Applies 5 Foretell Also deals damage and applies Foretell to every other Burning enemies.",
  },
  {
    name: "Shadow Bringer",
    apCost: "1 (Gradient Charge Cost)",
    character: "Sciel",
    prerequisite:
      "Automatically unlocked upon learning the Gradient Attacks/Skills feature, which becomes available upon progressing the story.",
    skillEffect:
      "Deals high single target Dark damage to random enemies. 10 hits. Applies 1 Foretell per hit.",
  },
  {
    name: "Spectral Sweep",
    apCost: "7",
    character: "Sciel",
    prerequisite: "Rush",
    skillEffect:
      "Deals medium single target damage. 2 to 6 hits. Uses weapon's element. Applies 1 Foretell per hit. Critical Hits apply an additional Foretell",
  },
  {
    name: "Twilight Dance",
    apCost: "9",
    character: "Sciel",
    prerequisite: "Final Path or All Set or Our Sacrifice",
    skillEffect:
      "Deals extreme single target Dark damage. 4 hits. During Twilight, extends Twilight duration by 1 turn. Consumes all Foretell to deal additional damage.",
  },
  {
    name: "Twilight Slash",
    apCost: "2",
    character: "Sciel",
    prerequisite: "N/A",
    skillEffect:
      "Deals low single target Dark damage. 1 hit. Consumes all Foretell to deal additional damage.",
  },
  {
    name: "Angel's Eyes",
    apCost: "3 (Gradient Charge Cost)",
    character: "Verso",
    prerequisite: "Reach Relationship Level 7 with Esquie.",
    skillEffect:
      "Deals extreme Physical Damage. 8 hits. Gain 1 additional Perfection per hit. Applies Aureole to Verso, reviving him if he dies.",
  },
  {
    name: "Ascending Assault",
    apCost: "5",
    character: "Verso",
    prerequisite: "Blitz",
    skillEffect:
      "Deals low single target damage. 1 hit. Uses weapon's element. Increase damage at each cast. s rank: Costs 2 AP",
  },
  {
    name: "Assault Zero",
    apCost: "3",
    character: "Verso",
    prerequisite: "N/A",
    skillEffect:
      "Critical Hits generate 1 additional Perfection b rank: Increased damage.",
  },
  {
    name: "Berserk Slash",
    apCost: "4",
    character: "Verso",
    prerequisite: "Quick Strike",
    skillEffect:
      "Deals medium single target Physical damage. 3 hits. Damage is increased for each health Verso is missing. c rank: Increased damage",
  },
  {
    name: "Blitz",
    apCost: "3",
    character: "Verso",
    prerequisite: "Purification",
    skillEffect:
      "Deals low single target Physical damage. 1 hit. Plays a second time. Kills non-boss enemies with less than 10% health. b rank: Increased damage.",
  },
  {
    name: "Burden",
    apCost: "1",
    character: "Verso",
    prerequisite: "Berserk Slash",
    skillEffect:
      "Removes all Status Effects from all allies and applies them to Verso. Gains 1 Rank.",
  },
  {
    name: "Defiant Strike",
    apCost: "3",
    character: "Verso",
    prerequisite: "Berserk Slash",
    skillEffect:
      "Deals high single target Physical damage that applies Mark 2 hits. Costs 30% of current Health. b rank: Increased damage.",
  },
  {
    name: "End Bringer",
    apCost: "9",
    character: "Verso",
    prerequisite: "Light Holder or Steeled Strike",
    skillEffect:
      "Deals extreme single target Physical damage. 6 hits. Increased damage if the target is Stunned a rank: Can reapply Stun",
  },
  {
    name: "Follow Up",
    apCost: "5",
    character: "Verso",
    prerequisite: "Purification",
    skillEffect:
      "Deals medium single target Light damage. 1 hit. Damage increased for each Free Aim shot this turn, up to 10 times. s rank: Costs 2 AP",
  },
  {
    name: "From Fire",
    apCost: "4",
    character: "Verso",
    prerequisite: "N/A",
    skillEffect:
      "Deals medium single target damage. 3 hits. Uses weapon's element. Heals self by 20% Health if the target Burns b rank: Increased damage.",
  },
  {
    name: "Leadership",
    apCost: "3",
    character: "Verso",
    prerequisite: "Powerful",
    skillEffect:
      "Reduces current Rank. Gives 2-4 AP to other allies. c rank: +1 more AP to other allies",
  },
  {
    name: "Light Holder",
    apCost: "4",
    character: "Verso",
    prerequisite: "Radiant Slash",
    skillEffect:
      "Medium single target Light damage. 5 hits. At completion, gains 1 Rank. a rank: +2 AP",
  },
  {
    name: "Marking Shot",
    apCost: "2",
    character: "Verso",
    prerequisite: "Assault Zero",
    skillEffect:
      "Deals low single target damage. 1 hit. Uses weapon's element. Applies Mark c rank: Increased damage",
  },
  {
    name: "Overload",
    apCost: "0",
    character: "Verso",
    prerequisite: "Follow Up or Speed Burst",
    skillEffect:
      "Increases Rank to s rank and refills all AP but sets self-Health to 1.",
  },
  {
    name: "Paradigm Shift",
    apCost: "1",
    character: "Verso",
    prerequisite: "Purification or Quick Strike",
    skillEffect:
      "Deals low Physical single target damage and gives 1-3 AP back. 3 hits. c rank: +1 AP",
  },
  {
    name: "Perfect Break",
    apCost: "7",
    character: "Verso",
    prerequisite: "Blitz or Berserk Slash",
    skillEffect:
      "Deals very high single target Light damage. 1 hit. Can Break Rank s rank on Break b rank: Costs 5 AP",
  },
  {
    name: "Perfect Recovery",
    apCost: "3",
    character: "Verso",
    prerequisite: "From Fire (Verso)",
    skillEffect:
      "Recovers 50% Health and dispels Status Effects. Gives 0-2 Perfection c rank: Increased heal to 100% Health.",
  },
  {
    name: "Phantom Stars",
    apCost: "9",
    character: "Verso",
    prerequisite: "Burden",
    skillEffect:
      "Deals extreme Light damage to all enemies. 5 hits. Can Break s rank: Costs 5 AP",
  },
  {
    name: "Powerful",
    apCost: "3",
    character: "Verso",
    prerequisite: "Quick Strike",
    skillEffect:
      "Applies Powerful to 1-3 Allies, increasing damage they deal for 3 turns. Gives 0-2 Perfection a rank: Duration increased to 5 turns.",
  },
  {
    name: "Purification",
    apCost: "5",
    character: "Verso",
    prerequisite: "Perfect Recovery",
    skillEffect:
      "Deals single target medium Light damage. 2 hits. Dispels self Status Effects. b rank: Increased damage.",
  },
  {
    name: "Quick Strike",
    apCost: "2",
    character: "Verso",
    prerequisite: "Marking Shot",
    skillEffect:
      "Deals low single target Physical damage. 1 hit. d rank: Gives more Perfection",
  },
  {
    name: "Radiant Slash",
    apCost: "2",
    character: "Verso",
    prerequisite: "Blitz",
    skillEffect:
      "Deals low Light damage to all enemies. 1 hit. Can Break c rank: Increased damage.",
  },
  {
    name: "Sabotage",
    apCost: "1 (Gradient Charge Cost)",
    character: "Verso",
    prerequisite:
      "Automatically unlocked upon learning the Gradient Attacks/Skills feature, which becomes available upon progressing the story.",
    skillEffect:
      "Deals medium Physical damage to all enemies. 1 hit. Applies Mark",
  },
  {
    name: "Speed Burst",
    apCost: "6",
    character: "Verso",
    prerequisite: "Ascending Assault or Overload",
    skillEffect:
      "Deals high single target Light damage. 5 hits. Damage increased by Speed difference with the target. c rank: Increased damage",
  },
  {
    name: "Steeled Strike",
    apCost: "9",
    character: "Verso",
    prerequisite: "Strike Storm or End Bringer",
    skillEffect:
      "After 1 turn, deals extreme single target Physical damage. 13 hits. Interrupted if any damage taken. s rank: Increased damage.",
  },
  {
    name: "Striker",
    apCost: "2 (Gradient Charge Cost)",
    character: "Verso",
    prerequisite: "Reach Relationship Level 4 with Esquie.",
    skillEffect: "Deals high single target Physical damage. 1 hit. Can Break",
  },
  {
    name: "Strike Storm",
    apCost: "7",
    character: "Verso",
    prerequisite: "Defiant Strike",
    skillEffect:
      "Deals very high single target damage. 5 hits. Uses weapon's element. Critical Hits generate 2 additional Perfection c rank: Increased damage",
  },
  {
    name: "Abbest Wind",
    apCost: "2",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of an Abbest enemy while Monoco is in the active party.",
    skillEffect:
      "Deals low single target Physical damage. 1 hit. Plays a second turn. Agile Mask: Costs 0 AP",
  },
  {
    name: "Aberration Light",
    apCost: "7",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of an Aberration enemy while Monoco is in the active party.",
    skillEffect:
      "Deals high Light damage to all enemies. 2 hits. Applies 4 Burn per hit. Agile Mask: Applies 2 more Burn per hit.",
  },
  {
    name: "Ballet Charm",
    apCost: "2",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Ballet enemy while Monoco is in the active party.",
    skillEffect:
      "Deals low single target Light damage. 1 hit. Applies Powerless to the taret for 3 turns. Caster Mask: Increased damage.",
  },
  {
    name: "Benisseur Mortar",
    apCost: "5",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Benisseur enemy while Monoco is in the active party.",
    skillEffect:
      "Deals medium single target Ice damage. 3 hits. Change to Almighty Mask if target is Marked Caster Mask: Increased damage.",
  },
  {
    name: "Braseleur Smash",
    apCost: "4",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Braseleur enemy while Monoco is in the active party.",
    skillEffect:
      "Deals medium finslge target Fire damage and applies 3 Burn. 2 hits. Balanced Mask: Increased damage.",
  },
  {
    name: "Break Point",
    apCost: "3 (Gradient Charge Cost)",
    character: "Monoco",
    prerequisite: "Reach Relationship Level 7 with Monoco.",
    skillEffect:
      "Deals extreme single target damage. 1 hit. Uses weapon's element. Fills the target's Break Bar and Breaks it.",
  },
  {
    name: "Boucheclier Fortify",
    apCost: "3",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Bouchelier enemy while Monoco is in the active party.",
    skillEffect:
      "Applies Shell to 1-3 Allies for 3 turns. Heavy Mask: Also applies 1 Shield",
  },
  {
    name: "Bruler Bash",
    apCost: "4",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Bruler enemy while Monoco is in the active party.",
    skillEffect:
      "Deals medium single target Physical damage. 3 hits. Can Break Caster Mask: Increased damage.",
  },
  {
    name: "Chalier Combo",
    apCost: "7",
    character: "Monoco",
    prerequisite: "Starting skill of Monoco upon joining the party.",
    skillEffect:
      "Deals high single target Physical damage. 6 hits. Interrupted if failed. Balanced Mask: Increased damage.",
  },
  {
    name: "Chapelier Slash",
    apCost: "7",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Chapelier enemy while Monoco is in the active party.",
    skillEffect:
      "Deals high Physical damage to all enemies. 3 hits. Applies Mark Agile Mask: Increased damage.",
  },
  {
    name: "Chevaliere Ice",
    apCost: "6",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Gold Chevaliere enemy while Monoco is in the active party.",
    skillEffect:
      "Deals high Ice damage to all enemies. 3 hits. Applies Slow to the targets for 3 turns. Balanced Mask: Increased damage.",
  },
  {
    name: "Chevaliere Piercing",
    apCost: "3",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Ceramic Chevaliere enemy while Monoco is in the active party.",
    skillEffect:
      "Deals single target Physical damage through Shields. 6 hits. Damage increased for each Shield on the target. Agile Mask: Increased damage.",
  },
  {
    name: "Chevaliere Thrusts",
    apCost: "7",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Steel Chevaliere enemy while Monoco is in the active party.",
    skillEffect:
      "Deals high Physical damage to all enemis. 3 hits. Critical Hits deal double damage. Heavy Mask: Increased damage.",
  },
  {
    name: "Clair Enfeeble",
    apCost: "5",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Clair enemy while Monoco is in the active party.",
    skillEffect:
      "Deals medium Light damage to all enemies. 1 hit. Applies Powerless for 3 turns. Balanced Mask: Increased damage.",
  },
  {
    name: "Contorsionniste Blast",
    apCost: "6",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Contorsionniste enemy while Monoco is in the active party.",
    skillEffect:
      "Deals medium Physical damage to all enemies. 1 hit. Heals all allies by 10% Health for each enemy hit. Balanced Mask: Increased damage.",
  },
  {
    name: "Creation Void",
    apCost: "9",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Creation enemy while Monoco is in the active party.",
    skillEffect:
      "Deals extreme Void damage to random targets. 3 hits. More damage if the same target is hit multiple times. Caster Mask: Increased damage",
  },
  {
    name: "Cruler Barrier",
    apCost: "4",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Cruler enemy while Monoco is in the active party.",
    skillEffect:
      "Applies 1-2 Shields to the target. Heavy Mask: Gives 2 AP to the target.",
  },
  {
    name: "Cultist Blood",
    apCost: "3",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Greatsword Cultist enemy while Monoco is in the active party.",
    skillEffect:
      "Deals medium Dark damage to all enemies. 3 hits. Sacrifices 90% Health to increase damage. Heavy Mask: Increased damage.",
  },
  {
    name: "Cultist Slashes",
    apCost: "5",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Reaper Cultist enemy while Monoco is in the active party.",
    skillEffect:
      "Deals medium single target Dark damage. 3 hits. Deals more damage the less Health Monoco has. Agile Mask: Increased Damage.",
  },
  {
    name: "Danseuse Waltz",
    apCost: "8",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Danseuses enemy while Monoco is in the active party.",
    skillEffect:
      "Deals high single target Fire damage. 3 hits. Deals more damage against Burning targets. Balanced Mask: Increased damage.",
  },
  {
    name: "Demineur Thunder",
    apCost: "2",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Demineur enemy while Monoco is in the active party.",
    skillEffect:
      "Deals low single target Lightning damage. 1 hit. Deals extra Break Damage Caster Mask: Increased Break damage.",
  },
  {
    name: "Duallist Storm",
    apCost: "8",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Dualliste enemy while Monoco is in the active party.",
    skillEffect:
      "Deals extreme single target Physical damage. 4 hits. Can Break Almighty Mask: Increased damage.",
  },
  {
    name: "Echassier Stabs",
    apCost: "4",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of an Echassier enemy while Monoco is in the active party.",
    skillEffect:
      "Deals medium single target Physical damage. 2 hits. Second hit applies Mark to the target. Agile Mask: Increased damage.",
  },
  {
    name: "Eveque Spear",
    apCost: "6",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of an Eveque enemy while Monoco is in the active party.",
    skillEffect:
      "Deals high single target Earth damage and applies Powerless for 3 turns. 1 hit. Heavy Mask: Increased damage.",
  },
  {
    name: "Gault Fury",
    apCost: "3",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Gault enemy while Monoco is in the active party.",
    skillEffect:
      "Deals low single target Physical damage. 4 hits. Applies Mark Balanced Mask: Increased damage.",
  },
  {
    name: "Glaise Earthquakes",
    apCost: "4",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Glaise enemy while Monoco is in the active party.",
    skillEffect:
      "Deals medium Earth damage to all enemies. 3 hits. Applies Powerful to self. Heavy Mask: applies Powerful to all allies.",
  },
  {
    name: "Grosse Tete Whack",
    apCost: "6",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Grosse Tete enemy while Monoco is in the active party.",
    skillEffect:
      "Deals high single target Physical damage. 5 hits. Applies Defenceless for 3 turns. Heavy Mask: Increased damage.",
  },
  {
    name: "Hexga Crush",
    apCost: "5",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Hexga enemy while Monoco is in the active party.",
    skillEffect:
      "Deals medium single target Earth damage. 2 hits. Applies Defenceless to the target for 3 turns. Heavy Mask: Increased damage.",
  },
  {
    name: "Jar Lampstorm",
    apCost: "5",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Jar enemy while Monoco is in the active party.",
    skillEffect:
      "Deals medium Physical damage to all enemies. 4 hits. Heavy Mask: Increased damage.",
  },
  {
    name: "Lampmaster Light",
    apCost: "5",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Lampmaster enemy while Monoco is in the active party.",
    skillEffect:
      "Deals high Light damage to all enemies. 1 hit. Increased damage at each cast. Almighty Mask: Increased damage.",
  },
  {
    name: "Lancelier Impale",
    apCost: "2",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Lancelier enemy while Monoco is in the active party.",
    skillEffect:
      "Deals low single target Ice damage. 1 hit. Slows the target for 3 turns. Agile Mask: Increased damage.",
  },
  {
    name: "Luster Slices",
    apCost: "3",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Luster enemy while Monoco is in the active party.",
    skillEffect:
      "Deals low single target Physical damage. 3 hits. Applies Rush to self for 3 turns. Agile Mask: Increased damage.",
  },
  {
    name: "Mighty Strike",
    apCost: "1 (Gradient Charge Cost)",
    character: "Monoco",
    prerequisite:
      "Automatically unlocked upon learning the Gradient Attacks/Skills feature, which becomes available upon progressing the story.",
    skillEffect:
      "Deals double damage if the target is Stunned Goes to Almighty Mask",
  },
  {
    name: "Moissonneuse Vendange",
    apCost: "5",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Moissoneusse enemy while Monoco is in the active party.",
    skillEffect:
      "Deals High single target Physical damage. 3 hits. Can Break Balanced Mask: Increased damage.",
  },
  {
    name: "Obscur Sword",
    apCost: "6",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of an Obscur enemy while Monoco is in the active party.",
    skillEffect:
      "Deals high single target Dark damage. 5 hits. Deals more damage against Powerless targets. Heavy Mask: Increased damage.",
  },
  {
    name: "Orphelin Cheers",
    apCost: "3",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of an Orphelin enemy while Monoco is in the active party.",
    skillEffect:
      "Applies Powerful to 1-3 Allies. Caster Mask: Also gives 3 AP to targets.",
  },
  {
    name: "Pelerin Heal",
    apCost: "5",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Pelerin enemy while Monoco is in the active party.",
    skillEffect:
      "Applies Regen to all allies. Caster Mask: also Heals 40% Health.",
  },
  {
    name: "Portier Crash",
    apCost: "8",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Portier enemy while Monoco is in the active party.",
    skillEffect:
      "Deals high Physical damage to all enemies. 1 hit. Can Break Heavy Mask: Increased damage.",
  },
  {
    name: "Potier Energy",
    apCost: "4",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Potier enemy while Monoco is in the active party.",
    skillEffect:
      "Gives 1-3 AP to all allies. Caster Mask: Gives 1 additional AP",
  },
  {
    name: "Ramasseur Bonk",
    apCost: "2",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Ramasseur enemy while Monoco is in the active party.",
    skillEffect:
      "Deals low single target Dark damage. 1 hit. Can Break Agile Mask: fills 20% of the target's Break Bar.",
  },
  {
    name: "Rocher Hammering",
    apCost: "3",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Rocher enemy while Monoco is in the active party.",
    skillEffect:
      "Deals medium single target Physical damage. 4 hits. Can Break Heavy Mask: Increased damage.",
  },
  {
    name: "Sakapatate Estoc",
    apCost: "3",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Ranger Sakapatate enemy while Monoco is in the active party.",
    skillEffect:
      "Deals low single target Lightning damage. 1 hit. Deals more damage if the target is Stunned Balanced Mask: Increased damage.",
  },
  {
    name: "Sakapatate Explosion",
    apCost: "4",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Catapult Sakapatate enemy while Monoco is in the active party.",
    skillEffect:
      "Deals medium Lightning damage to random enemies. 3 hits. Critical Hits trigger an additional hit. Caster Mask: Increased damage.",
  },
  {
    name: "Sakapatate Fire",
    apCost: "9",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of the Ultimate Sakapatate enemy while Monoco is in the active party.",
    skillEffect:
      "Deals extreme Fire to all enemies. 3 hits. Apply 3 Burn per hit. Almighty Mask: Increased damage.",
  },
  {
    name: "Sakapatate Slam",
    apCost: "7",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Robust Sakapatate enemy while Monoco is in the active party.",
    skillEffect:
      "Deals high Physical damage to all enemies. 1 hit. Increased damage to Marked targets. Heavy Mask: Increased damage.",
  },
  {
    name: "Sanctuary",
    apCost: "2 (Gradient Charge Cost)",
    character: "Monoco",
    prerequisite: "Reach Relationship Level 4 with Monoco.",
    skillEffect:
      "Gives 2 Shields and applies Regen to all allies for 3 turns.",
  },
  {
    name: "Sapling Absorption",
    apCost: "6",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Sapling enemy while Monoco is in the active party.",
    skillEffect:
      "Deals high Dark damage. 3 hits. Recovers 5% Health on hit. Caster Mask: Increased damage and double Heal",
  },
  {
    name: "Stalact Punches",
    apCost: "4",
    character: "Monoco",
    prerequisite: "N/A",
    skillEffect:
      "Deals medium single target Ice damage. 4 hits. High Break damage Heavy Mask: Increased damage.",
  },
  {
    name: "Troubadour Trumpet",
    apCost: "3",
    character: "Monoco",
    prerequisite:
      "Defeat and acquire the foot of a Troubadour enemy while Monoco is in the active party.",
    skillEffect:
      "Applies a random buff to 1 to 3 allies. Caster Mask: applies a second random buff.",
  },
];
