---
title: Embedded Health System
code: PRJ-04
order: 4
status: In development
tagline: BITE, HAL, service manager and D-Bus health monitoring distributed across Raspberry Pi, STM32 Nucleo and Linux, reporting over CCSDS.
meta: "feeds health packets into AeroSat-Sync"
stack: [C++, Python, Embedded Linux, D-Bus, STM32]
category: embedded
---

## Why this exists

Avionics LRUs all rely on **built-in test (BITE)**, hardware abstraction and process supervision, but these designs are rarely public. This project rebuilds the pattern on open hardware — a Raspberry Pi as the "LRU", an STM32 Nucleo-F446RE as a sensor/IO node, and a Linux laptop as ground.

## Design

- **HAL** isolates board-specific I/O so the same services run on Pi and laptop
- **Service manager** starts, monitors and restarts services (SPM-style)
- **BITE** runs power-on and continuous tests, publishing results on **D-Bus**
- Health status is packed into **CCSDS packets** and sent to AeroSat-Sync

Separate repo, linked to AeroSat-Sync only through CCSDS packets — no shared code.
