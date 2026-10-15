---
translationKey: "o-que-e-linux"
title: "What is Linux and why it runs the world's servers"
seoTitle: "What is Linux? History, distros and servers | SKYNET"
description: "Learn what Linux is, what free software and open source mean, the history of GNU and the kernel, distributions, basic commands and why Linux dominates servers."
date: 2026-10-15
cover: ../../../assets/img/blog-linux.jpg
draft: false
---

If you play online, you have almost certainly used Linux without realizing it: it runs a huge share of the internet's servers, and also inside Android phones and many everyday devices. In this guide we explain, from scratch, what Linux is, where it came from, how to use it and why it is the number one choice for servers, including ours.

![Tux, the penguin mascot of Linux](../../../assets/img/blog-linux-tux.webp)

## What open source and free software mean

**Open source** is software whose source code, the program's "recipe", can be read, studied, modified and shared by anyone, under a license.

**Free software** is the older idea behind it, championed by the Free Software Foundation. For them, users have four freedoms: to **run** the program for any purpose, to **study** how it works and adapt it, to **redistribute** copies, and to **improve** the program and share the improvements. The two terms overlap a lot, but the focus differs: "free software" is about freedom; "open source" is more about the practical benefits of open development.

Careful: "free" doesn't necessarily mean "gratis". A lot of free software costs nothing, but the word refers to freedom, not price.

## The history: GNU and Linux

- **1983:** Richard Stallman announces the **GNU project**, aiming to create a complete, free, Unix-like operating system. Within a few years GNU had a compiler, editors, terminal tools and much more. One central piece was missing: the kernel.
- **1991:** Finnish student **Linus Torvalds** starts writing a kernel as a personal project and announces it online. That kernel is named **Linux**. People around the world begin contributing, and the project has kept growing ever since.

Combining the GNU tools with the Linux kernel produced a complete, free operating system.

## What the kernel is and why people say "GNU/Linux"

The **kernel** is the "heart" of the operating system: it talks to the hardware (processor, memory, disk, network) and hands those resources to programs. Without a kernel, no program can use the machine.

Technically, **Linux is just the kernel**. The system we use every day is the kernel plus many tools, largely coming from the GNU project. That's why some people and projects prefer to say **GNU/Linux**, acknowledging both parts. In everyday conversation, most people simply say "Linux" for the whole thing.

## Distributions: which one to pick?

A **distribution** (or "distro") is the Linux kernel packaged with programs, an installer and a system to update everything. They all use the same kernel, but each has its own profile:

- **Debian:** known for stability and its free software philosophy. It is the base of many other distributions and widely used on servers.
- **Ubuntu:** based on Debian, focused on ease of use. One of the most popular distributions, on both desktops and servers.
- **Fedora:** brings new technologies early and is sponsored by Red Hat. Good for people who like the latest features.
- **Arch Linux:** minimalist and build-it-yourself: you assemble the system the way you want it, with continuous updates. It asks for more knowledge.
- **Others:** Linux Mint (very beginner-friendly), openSUSE, Red Hat Enterprise Linux and its derivatives (widely used in companies), Alpine (lightweight, common in containers) and many more.

To get started, Ubuntu and Linux Mint are usually the easiest choices.

## The command line

Besides windows and menus, Linux can be controlled with text, in the **terminal**. On servers this is the main way of working: it is fast, precise and easy to automate. Some basic commands:

| Command | What it does |
|---|---|
| `pwd` | Shows which folder you are in. |
| `ls` | Lists the files in the current folder. |
| `cd folder` | Enters a folder (`cd ..` goes back one). |
| `mkdir name` | Creates a folder. |
| `cp source destination` | Copies a file. |
| `mv source destination` | Moves or renames a file. |
| `cat file` | Shows the contents of a file. |
| `grep text file` | Searches for text inside a file. |
| `sudo command` | Runs the command with administrator permissions. |
| `man command` | Opens the manual for any command. |

One important warning: commands like `rm` delete files **without going through the trash**, and `sudo` gives full power. Read carefully before running something you don't understand.

## Why Linux dominates servers

- **Stability:** Linux servers often stay on for long periods, and most updates don't require rebooting the whole machine.
- **Security:** open code can be reviewed by many people, and the system has a well-defined permission model. Fixes tend to arrive quickly.
- **Cost:** the system has no paid license, which makes a difference when you have dozens or thousands of servers.
- **Performance:** it can be lean and tuned to use the hardware well, with no unnecessary programs running.
- **Automation:** almost everything in Linux can be done from the command line, so it is easy to write scripts and automate tasks.
- **Containers:** technologies like Docker were built around Linux kernel features, and today they are the basis of how many applications are deployed.
- **Cloud:** the vast majority of public cloud services run Linux underneath.
- **Supercomputers:** the world's most powerful computers, listed in the TOP500 ranking, have been running Linux for years.

## Linux at SKYNET

So where do we fit in? **Our servers run on Linux, with Docker**: a VPS with Ubuntu, one container for each game server, automatic backups and scheduled restarts. All of this is possible thanks to free software. If you want to see in practice how we put each piece together, read the post [How the SKYNET servers work behind the scenes](/en/blog/how-skynet-servers-work-behind-the-scenes/).

Then, why not try the result? See the [SKYNET ranking](https://stats.skynet-tf2.com.br/hlstats.php), check [SourceBans](https://bans.skynet-tf2.com.br/index.php?p=home) and join one of our servers.
