---
title: Marine COLREGS RL
code: PRJ-02
order: 2
status: Paper in prep
tagline: PPO collision-avoidance agent on MMG ship dynamics, wrapped in a Z3 Simplex / runtime-assurance safety verifier, with a Qt/QML HMI.
meta: "verifier 2.02 ms · 0% miss rate · 92% waypoint success"
stack: [Python, PyTorch, PPO, Z3, Qt/QML]
category: ml-formal
target: MDPI JMSE
---

## Why this exists

RL agents perform well at collision avoidance, but their behaviour cannot be **guaranteed** — and "usually safe" is not acceptable on a ship's bridge. So the RL policy sits under a **Simplex-style runtime assurance layer**: every proposed action is checked by Z3 against COLREGS-derived safety constraints, and a verified fallback controller takes over when it is unsafe.

## What's built

- PPO agent trained on MMG (Maneuvering Modeling Group) ship dynamics
- Z3-based safety verifier in the action loop — Simplex / RTA switching
- Qt/QML HMI for visualising encounters and verifier decisions

## Results so far

| Metric | Value |
|---|---|
| Verifier overhead per decision | 2.02 ms |
| Unsafe-action miss rate | 0% |
| Waypoint success rate | 92% |

Manuscript in preparation with S. Alam.
