---
translationKey: "mge"
title: "What Is MGE in TF2: How to Play and How the Ranking Works"
seoTitle: "What Is MGE in TF2 and How to Play | SKYNET"
description: "Learn about TF2's MGE: 1v1 duels in arenas, how to join an arena, the commands, the ELO and the ranking of SKYNET Gaming's 100 tick MGE server."
date: 2026-10-21
cover: ../../../assets/img/mge-soldier-capa.jpg
draft: false
---

MGE is Team Fortress 2's 1v1 dueling mode: two players face off in an arena, and whoever reaches the arena's frag limit first wins. It's the most direct way to train aim, movement and dueling, and competitive players use it a lot to warm up before matches. SKYNET now has a 100 tick MGE server: see how to join at the end of the post.

## What is MGE

In MGE, nobody plays as a team. The map is split into several separate **arenas**, and each arena takes **two players at a time**, one against the other. Whoever reaches the arena's frag limit first wins the duel, and whoever was waiting in line takes the loser's place. That way the whole server is full of duels happening at the same time.

The mode runs on the **MGEMod** plugin. The name comes from the **My Gaming Edge** community, where it started, created by Lange and Cprice from an earlier plugin, kAmmomod. Today the most used version is maintained by the community (sappho.io and other contributors), and it's the one running on our server.

## The arenas on our map

The server runs `mge_training_v8_beta4b`, the best-known MGE map, with **18 arenas**:

- **11 classic MGE arenas** that recreate famous spots from competitive maps: Viaduct, Granary (mid and last), Badlands (mid and spire), Gullywash, Waste, Snakewater, Gravelpit, Process and Trainyard. There the duel goes to **20 frags**, and the allowed classes are **Soldier, Demoman, Scout and Sniper**.
- **Special arenas** with their own rules: **Turris** (1v1 king of the hill), **Ammomod**, **No Splash** (no explosion splash damage), **Endif** (rockets that launch your opponent into the air) and **BBall 2v2**, TF2's basketball.

## How to play on our server

1. Join the server and type **`!add`** in chat. A menu opens with every arena; pick one.
2. If the arena is busy, you join the **queue** and play as soon as a duel ends.
3. Pick one of the classes allowed in the arena and duel. Every time you kill your opponent, you get 1 frag.
4. Whoever reaches the arena's limit first wins. To leave, type **`!remove`**.

| Command | What it does |
|---|---|
| `!add` | opens the arena menu (or `!add number` to go straight to one) |
| `!first` | joins the first free arena |
| `!remove` | leaves the arena |
| `!rank` | shows your MGE ELO (or `!rank name` for another player) |
| `!top5` | shows the server's top 5 ELO ratings |
| `!hud` | toggles the on-screen scoreboard |
| `!hitblip` | toggles the hit sound |
| `!handicap` | lowers your max health, to train at a disadvantage |
| `!mgehelp` | shows the MGE help |

## How the ranking works

The server has **two rankings** at the same time, and each one measures something different.

### The MGE ELO (in game)

This is MGEMod's own ranking, which you see with `!rank`. Everyone starts at **1600**, and each duel changes both players' ELO based on how strong each one is, like in chess:

| Situation | Winner | Loser |
|---|---|---|
| Two players of the same level | +8 | −8 |
| The weaker player (400 points below) wins | +14 | −14 |
| The stronger player (400 points above) wins | +1 | −1 |

Beating someone stronger is worth a lot, and beating someone much weaker is worth almost nothing. That's why the ELO shows each player's real strength. Above 2400 points the changes get smaller, so the top doesn't swing too much.

### The SKYNET ranking (on the website)

This is the HLstatsZ ranking, the same panel as our other servers, with a simple rule:

- **+5 points** for every duel you win;
- **−2 points** for every duel you lose;
- kills and deaths **don't** change your points: only the duel's result counts;
- leaving in the middle of a duel may count as a loss;
- in BBall 2v2, both players on the winning team get +5 and both on the losing team lose 2.

Here whoever plays more and wins more climbs, even against weaker opponents. In other words: the ELO measures who the best duelist is, and the SKYNET ranking rewards whoever is always on the server winning duels.

**[See the MGE ranking](https://stats.skynet-tf2.com.br/hlstats.php?game=tfmge)**

## What our server is like

- **Name:** SKYNET BRASIL - MGE [100 TICK]
- **Online since:** 10/21/2026
- **Capacity:** 12 slots, **100 tick**, hosted in São Paulo.
- **Map:** `mge_training_v8_beta4b`, with 18 arenas. The first time, the map downloads automatically when you join.
- **Same administration:** rules, admins, SourceBans and Discord are the same as on the other servers. Saw cheating? Type `!report` in chat.

Want to understand why 100 tick makes a difference in a duel? Read [What is tickrate and why 100 tick makes a difference in TF2](/en/blog/what-is-tickrate-in-tf2/).

## How to join

Open the game console and type:

`connect 212.38.89.226:27055`

Or join directly, with TF2 already connected:

<a class="btn btn-gold" href="steam://connect/212.38.89.226:27055">Play now</a> <button class="btn btn-ghost" type="button" data-copy="212.38.89.226:27055" data-done="IP copied!"><span class="copy-label">Copy IP</span></button>

Check your position on the [MGE ranking](https://stats.skynet-tf2.com.br/hlstats.php?game=tfmge).
