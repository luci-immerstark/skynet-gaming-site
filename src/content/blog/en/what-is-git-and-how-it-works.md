---
translationKey: "o-que-e-git"
title: "What is Git and how it works: a basic guide to get started"
seoTitle: "What is Git? How it works and a basic command guide | SKYNET"
description: "Understand what Git is, how it works (commits, the staging area, branches and remote repositories) and learn, step by step, the basic commands to version your projects."
date: 2026-11-09
cover: ../../../assets/img/blog-git.jpg
draft: false
---

You know when you save the game before a hard boss, so you can go back if things go wrong? **Git** does that for entire projects: each "save" stores a snapshot of all the files, with a date, an author and a message explaining what changed. You can go back in time, try ideas without fear and work as a team without overwriting each other's work.

In this post we explain what Git is, how it works under the hood, and finish with a basic guide, command by command. The content is based on the [official Git tutorial](https://git-scm.com/docs/gittutorial) and on the classic [git - the simple guide](https://rogerdudler.github.io/git-guide/), by Roger Dudler, updated with the newer commands.

## What is Git

Git is a **version control system**: a program that records the history of changes to a set of files. It was created in **2005 by Linus Torvalds**, the same person who created Linux, to organize the development of the kernel, a project with thousands of people contributing at the same time. Today it is free software and the most widely used version control system in the world, in projects of every size.

Git is **distributed**: each person has a full copy of the project, with all of its history, on their own computer. You can work offline, look at old versions and create new records without depending on a server.

### Git is not GitHub

This is a common mix-up. **Git** is the program that runs on your computer. **GitHub**, like GitLab and Bitbucket, is a **website that hosts Git repositories** on the internet and adds collaboration features, such as code review and issue tracking. You can use Git without any of these sites.

## How Git works

### Repository

A **repository** is the project folder tracked by Git. All the history lives in a hidden folder called `.git`, inside it. Delete `.git` and the history goes with it; the current files stay where they are.

### Commits: snapshots of the project

Each record in Git is called a **commit**. A commit is a **full snapshot** of how the files were at that moment, together with the author, the date, a message and a link to the previous commit. That is how a chain of versions is born. Each commit gets a unique ID, a code like `3d6e2aa`, which you can use to find it later.

### The three areas

Before becoming a commit, a change goes through three places:

| Area | What it is |
|---|---|
| **Working directory** | The files as they are on your disk, where you edit. |
| **Staging area** (or index) | A "waiting room" with the changes chosen for the next commit. |
| **Repository** | The history of commits stored in the `.git` folder. |

The path is always the same: you edit in the working directory, choose what goes in with `git add` and save it with `git commit`. The staging area looks like an extra step, but it is what lets you split different changes into different commits, keeping the history organized.

### Branches: parallel lines of work

A **branch** is an independent line of development. The main one is usually called `main` (in older projects, `master`). To build something new without breaking what already works, you open a branch, make your commits there and, when it is ready, **merge** it back into the main one. In Git, creating and switching branches is instant, so feel free to use them.

### Remote repositories

A **remote** is a copy of the repository somewhere else, such as a server or GitHub. By convention, the main one is called `origin`. You **send** your commits with `git push` and **receive** other people's with `git pull`.

## Basic guide, step by step

### 1. Install and configure

On Linux, install it from the package manager (on Ubuntu and Debian, `sudo apt install git`). On Windows, download Git for Windows from [git-scm.com](https://git-scm.com/). On macOS, it comes with the Xcode command line tools. Check it with `git --version`.

Then tell Git who you are. This information shows up in every commit:

```bash
git config --global user.name "Your Name"
git config --global user.email you@example.com
git config --global init.defaultBranch main
```

### 2. Create or copy a repository

To start a project from scratch:

```bash
mkdir my-project
cd my-project
git init
```

To download an existing project, with all its history:

```bash
git clone https://github.com/user/project.git
```

### 3. The first commit

Create or edit a file and see what Git sees:

```bash
git status
```

Choose what goes into the commit and save it:

```bash
git add README.md        # one file
git add .                # or everything that changed in the folder
git commit -m "First commit: create the README"
```

### 4. See changes and history

```bash
git diff                 # what changed and is not staged yet
git diff --staged        # what is already staged for the commit
git log --oneline        # short history
git log --graph --oneline --all   # history with the branch drawing
```

### 5. Work with branches

```bash
git switch -c new-feature    # create the branch and switch to it
# ...edit, git add, git commit...
git switch main              # go back to the main branch
git merge new-feature        # merge the work
git branch -d new-feature    # delete the branch that was merged
```

In older tutorials you will see `git checkout -b new-feature` and `git checkout main`. They work the same; `git switch` is the newer, clearer way.

### 6. Resolve conflicts

If two branches changed the same line, Git does not guess which one wins and marks the **conflict** in the file:

```text
<<<<<<< HEAD
your branch's version
=======
the other branch's version
>>>>>>> new-feature
```

Edit that part keeping the right version, delete the markers and finish with `git add file` and `git commit`.

### 7. Send to and receive from a server

```bash
git remote add origin https://github.com/user/project.git
git push -u origin main      # first push; after that, just git push
git pull                     # download and merge other people's changes
git fetch                    # only download, so you can look before merging
```

### 8. Undo safely

```bash
git restore file              # discard changes that are not staged
git restore --staged file     # take the file out of the staging area
git revert 3d6e2aa            # create a commit that undoes another one
```

Be careful with `git reset --hard`: it deletes changes that are not committed, with no way back. To undo something that was already pushed to the server, prefer `git revert`, which does not rewrite other people's history.

### 9. Mark versions with tags

```bash
git tag v1.0.0
git push origin v1.0.0
```

Tags give a name to an important commit, such as a released version.

## Command summary

| Command | What it is for |
|---|---|
| `git init` | Creates a repository in the current folder. |
| `git clone URL` | Copies an existing repository. |
| `git status` | Shows what changed and what is staged. |
| `git add` | Stages changes for the next commit. |
| `git commit -m "..."` | Saves a commit with a message. |
| `git log` | Shows the history. |
| `git diff` | Shows the differences line by line. |
| `git switch -c name` | Creates a branch and switches to it. |
| `git merge name` | Merges another branch into the current one. |
| `git push` / `git pull` | Sends and receives commits from a remote. |
| `git restore` | Discards local changes. |
| `git revert` | Undoes a commit by creating another one. |

## Good practices

- **Small commits with one idea each.** It makes the history easy to understand and lets you undo only what went wrong.
- **Clear messages:** a short title (up to about 50 characters) saying what the commit does and, if needed, an explanation after a blank line.
- **Use a `.gitignore`** so Git ignores files that should not be versioned, such as temporary files and automatically generated folders.
- **Never commit passwords, tokens or keys.** Even if you delete them later, they stay in the history. In a public repository, assume they have already leaked and change them right away.
- **Run `git pull` before you start** working on a shared project, so you begin from the newest version.

## Git at SKYNET

Around here, Git is part of the daily routine. The plugins we create for the servers, the Docker images we publish for the community and the website itself are versioned with Git: every change becomes a commit with a message explaining what was done, and the site is published automatically on every push. When something goes wrong, we can see exactly what changed and roll back in minutes.

If you are getting started with Linux, also read [What is Linux and why it runs the world's servers](/en/blog/what-is-linux-and-why-it-runs-the-worlds-servers/) and [Linux directories explained: what each folder is for](/en/blog/linux-directory-structure-explained/). And when you get tired of the terminal, come play on our servers and check the [ranking](https://stats.skynet-tf2.com.br/hlstats.php).
