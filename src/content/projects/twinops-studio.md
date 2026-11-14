---
title: TwinOps Studio
code: PRJ-05
order: 5
status: Design phase
tagline: Digital-twin and mission-ops workbench — model, simulate, command, inject faults into, record and replay complex systems.
meta: "first twin: satellite · fault-injection engine"
stack: [C++, Qt/QML, Simulation]
category: systems
---

## Why this exists

Telemetry tools such as YAMCS display data, and state-sync tools such as Eclipse Ditto reconcile desired and reported state. TwinOps takes a different angle: **the twin is an executable engineering model**, not just a visualisation — and **fault injection** is a first-class feature.

## Planned flow

Platform → twins → simulation engine → telemetry & commands → event engine → fault injection → record / replay → Qt/QML UI.

The first reference twin is a satellite; turbine and robot twins follow.
