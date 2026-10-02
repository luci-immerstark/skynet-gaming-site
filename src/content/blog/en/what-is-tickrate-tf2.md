---
title: "What is tickrate, and why does a 100 tick server matter in TF2?"
seoTitle: "What Is Tickrate in TF2? Why 100 Tick Matters"
description: "Learn what tickrate is, the difference between 66 and 100 tick, and what a 100 tick server does (and doesn't) change in Team Fortress 2."
date: 2026-10-02
updated: 2026-10-02
cover: ../../../assets/img/hero-bg.jpg
draft: false
---

Tickrate is how many times per second the server updates the state of the match: positions, shots, damage and events. A 100 tick server does it 100 times per second (every 10 ms), versus about 66 times on TF2's default (every ~15 ms). In practice, that makes shot and movement registration a little more precise and responsive.

## What is a "tick"

The server doesn't process the game continuously: it advances in discrete steps called ticks. On each tick it reads player actions, works out the result and sends the new state back. The more ticks per second, the shorter the gap between one update and the next.

## Why 100 tick makes a difference

- **Finer shot registration:** with shorter intervals, a shot is less likely to be processed "between" two updates and lose precision, which mainly helps hitscan weapons like the Sniper's and the Scout's.
- **More faithful movement:** player positions refresh more often, reducing the "teleporting" feel in fast fights.
- **More consistent responses:** the longest wait for an update drops from about 15 ms to 10 ms.

## What 100 tick doesn't change

- **Your ping:** tickrate doesn't replace a good connection. A nearby server is still what lowers latency the most (ours is in São Paulo).
- **Your skill:** the difference is subtle. It helps cut frustration, but it doesn't play for you.
- **Your hardware:** a computer that can't hold good FPS limits the gain.

## Getting the most out of it

To benefit from a 100 tick server, you want a stable connection and an FPS comfortably above 100. Your game's `cl_cmdrate` and `cl_updaterate` values also affect the data rate exchanged with the server (which enforces its own limits); you can check your connection in the console with `net_graph 1`, which shows ping, packet loss and the update rate.

The SKYNET Gaming server runs at 100 tick, with 40 slots, hosted in São Paulo. To get in, see [how to join a TF2 community server](/en/blog/how-to-join-tf2-community-server/).
