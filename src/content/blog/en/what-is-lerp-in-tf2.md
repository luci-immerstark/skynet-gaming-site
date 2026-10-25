---
translationKey: "lerp"
title: "What Is Lerp in TF2 and How to Set It Up (cl_interp and Rates)"
seoTitle: "Lerp in TF2: What It Is and How to Set It Up | SKYNET"
description: "Understand TF2's lerp (cl_interp) and rates, the pros and cons of lowering the delay, and ready-made settings for 66 and 100 tick servers like SKYNET's."
date: 2026-10-21
cover: ../../../assets/img/blog-lerp-capa.jpg
draft: false
---

Lerp is a small delay that TF2 itself adds to what you see on screen, so other players' movement looks smoother. The default is 100 ms, meant for bad connections, and almost everyone today can use much less. In this guide you'll learn what lerp is, what rates are, and copy the right settings for your PC and for the server you play on.

![Four frames of the same Scout running: with high lerp the shot misses, with low lerp it hits](../../../assets/img/blog-lerp-hit-miss.jpg)
*With high lerp, what you see lags behind the server: a shot that looked spot on can miss.*

## What is lerp

Lerp comes from *interpolation*. Your game doesn't receive other players' positions all the time, but in packets. To avoid showing everyone "jumping", it waits a little and draws the path between one packet and the next. That waiting time is the lerp.

The default value, **100 ms (0.1 s)**, was designed for people playing on unstable internet, like a 3G modem. For anyone with a reasonable PC and a stable connection, it's overkill: the lower the lerp, the more what you see matches what's happening on the server.

### Pros of lowering lerp

- **More accurate hits:** with precise weapons, the time between your click and the registered hit gets shorter.
- **More faithful projectiles:** the Soldier's rocket and the Demoman's grenade leave the enemy's weapon and travel the whole way, instead of appearing mid-flight and "teleporting" into your face.
- **You aim where the enemy is**, not where they'll be a split second from now. This applies to both bullets and projectiles.

### Cons

- **It needs a good server.** The server has FPS too: if it drops, you feel it right away. It needs stable performance and correct network settings.
- **Players with bad connections look choppy on your screen.** With projectiles you can manage, but with precise weapons it's hard to hit someone who lags a lot.

## How to change lerp

The command is `cl_interp`, with the time in seconds. For example, `cl_interp 0.035` is a 35 ms lerp. The tip is to start at the lowest value and raise it little by little if any problem shows up.

- **You can't change it mid-match:** you need to be spectating or out of the server.
- **Your real lerp never reaches zero.** The game uses the higher value between `cl_interp` and `cl_interp_ratio ÷ cl_updaterate`. On a 66 tick server, the minimum is around **15.2 ms**; on a **100 tick** server, like SKYNET's Classic Maps, Dodgeball and MGE, it drops to **10 ms**.

## What are rates

Rates are how many times per second your game exchanges data with the server:

- `cl_updaterate`: how many packets per second you **receive**;
- `cl_cmdrate`: how many packets per second you **send**.

A regular TF2 server simulates the match 66.7 times per second, and our 100 tick servers 100 times. Even so, the game's old defaults were only 20 packets received and 30 sent per second. Raising your rates up to the server's tick makes other players' movement smoother and your hits more accurate. To understand tick, read [What is tickrate and why 100 tick makes a difference in TF2](/en/blog/what-is-tickrate-in-tf2/).

Raising rates has no downside, as long as your PC and internet can handle it:

- **FPS:** the game can't send data more often than it draws frames. If your FPS drops below your rates, raising them won't help.
- **Bandwidth:** in the middle of a fight, traffic can reach about 50 KB/s (400 kbit/s).
- **Stability:** if your ping keeps jumping, say between 80 and 120 all the time, you're better off with lower rates.

And the same goes as in the lerp section: with rates maxed out, any server FPS drop turns into lag on your screen. Before blaming your settings, check whether the server you're on can keep up.

## Ready-made settings

Start with the first one on the list and only move down if you get constant lag on every server.

**100 tick servers (SKYNET's Classic Maps, Dodgeball and MGE)**, for a PC that holds more than 100 FPS:

```
cl_cmdrate 100; cl_updaterate 100; cl_interp_ratio 1; cl_interp 0; rate 196608
```

**Ideal for 66 tick servers:**

```
cl_cmdrate 66; cl_updaterate 66; cl_interp_ratio 1; cl_interp 0.0151515; rate 66000
```

**A little lower:**

```
cl_cmdrate 50; cl_updaterate 50; cl_interp_ratio 1; cl_interp 0.023; rate 50000
```

**If the others lag:**

```
cl_cmdrate 40; cl_updaterate 40; cl_interp_ratio 1; cl_interp 0.04; rate 40000
```

**Really bad connection (anything worse is just the game's defaults):**

```
cl_cmdrate 30; cl_updaterate 30; cl_interp_ratio 2; cl_interp 0.066666; rate 30000
```

`rate` is the most data per second you accept to receive. TF2's current default is already 196608, higher than the values on the list. If yours is already that, you can keep it, and the rest of the line still applies. `cl_interp_ratio` sets how many spare packets the game keeps for interpolation: with 1 your lerp stays at the minimum, and with 2 it handles packet loss better.

### Keeping your settings

Console commands only last until you close the game. To use them every time:

1. Open the game folder, at `Team Fortress 2/tf/cfg`. On Steam: right-click TF2 → **Manage** → **Browse local files**.
2. Create (or open) the `autoexec.cfg` file.
3. Paste the line with your chosen settings and save. TF2 loads this file every time it starts.

To check, type `net_graph 1` in the console: it shows your lerp, ping, packet loss and the rates in use.

---

*This post is an adaptation of the lerp and rates guide written by sheo, with settings for SKYNET's 100 tick servers.*

**By sheo**
