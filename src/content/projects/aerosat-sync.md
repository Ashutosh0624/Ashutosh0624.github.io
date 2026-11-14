---
title: AeroSat-Sync
code: PRJ-01
order: 1
status: In development
tagline: Distributed satellite telemetry engine — CCSDS ingest, Raft-replicated storage and real-time SMT verification of every frame.
stack: [C++20, Boost.Asio, NuRaft, RocksDB, Z3, FlatBuffers, Docker]
category: systems
target: DASIA / IEEE Aerospace 2027
---

## Why this exists

Ground segments today mostly **check telemetry after it is stored** — limit checks, dashboards, alarms. Once onboard autonomy and AI agents start generating commands, catching bad data later is no longer enough. I wanted a pipeline that **formally checks every frame at ingest time** — physical limits, mode-transition rules and cross-parameter consistency — while staying fault-tolerant.

AeroSat-Sync tests that idea: a telemetry pipeline where **SMT verification is a first-class stage**, not a post-processing script.

## Architecture

```
CCSDS emulator ──UDP──▶ Ingest (Boost.Asio) ──▶ Decode (FlatBuffers)
                                                     │
                                                     ▼
            RocksDB ◀── Replicated log (NuRaft) ◀── Verify (Z3 constraints)
                                                     │
                                                     ▼
                                           Alerts / Ground UI
```

| Stage | Responsibility | Why this choice |
|---|---|---|
| Ingest | Async UDP receive of CCSDS space packets | Boost.Asio: proven, low-overhead async I/O in C++ |
| Decode | Zero-copy packet → typed frame | FlatBuffers: no parse step, schema evolution |
| Verify | Check frame against SMT constraints | Z3: expresses cross-parameter rules that limit tables can't |
| Replicate | Agree on accepted frames across nodes | NuRaft: embeddable Raft, no external coordinator |
| Store | Persist verified frames | RocksDB: write-heavy LSM store, embeddable |

## Key design decisions

- **Verify before replicate.** Only frames that pass (or are explicitly tagged as failing) go into the Raft log, so every node agrees on the same verdict.
- **Constraint packs per mission.** Rules are data, not code — a satellite's limits and mode rules load as a constraint pack.
- **Multi-node from day one.** Docker-based cluster so failure and leader-election behaviour is tested early, not bolted on.

## Status

- [x] Toolchain: clang-18, Boost, RocksDB, Z3, NuRaft, FlatBuffers
- [x] Docker multi-node setup
- [x] Boost.Asio UDP ingest server + Python CCSDS packet emulator
- [ ] Z3 verification stage with first constraint pack
- [ ] Raft replication of verified frames
- [ ] Latency/throughput benchmarks (published here once measured)
- [ ] Integration with the embedded health system (BITE packets over CCSDS)
