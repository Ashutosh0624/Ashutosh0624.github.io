---
title: aeroforge
code: PRJ-03
order: 3
status: Released
tagline: Open-source CLI that brings DO-178C-style workflow discipline to C/C++ projects — scaffolding, build, static analysis and checks in one pipeline.
meta: "32 unit tests · 100% pass"
stack: [Python, Typer, Poetry, CMake, cppcheck]
category: systems
repo: https://github.com/Ashutosh0624/aeroforge
---

## Why this exists

In DO-178C work, process matters as much as code — yet small teams and personal projects usually skip that discipline because the setup is tedious. **aeroforge** is a CLI that automates the boring parts so safety-critical habits become the default.

## What it does

- Scaffolds a C/C++ project with a CMake build and a standard layout
- Runs static analysis (cppcheck) as part of the pipeline
- Wraps the steps in a single Typer-based CLI, packaged with Poetry

## Quality

32 unit tests, all passing.
