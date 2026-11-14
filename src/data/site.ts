// Ek jagah saari personal info — CV, homepage aur footer yahin se padhte hain.
export const person = {
  name: 'Ashutosh Kumar Tiwari',
  short: 'AKT',
  role: 'Engineer II, Connectivity & Embedded Systems',
  employer: 'Safran Engineering Services',
  location: 'Bangalore, India',
  email: 'ashutoshktiwari91@gmail.com',
  github: 'https://github.com/Ashutosh0624',
  linkedin: 'https://linkedin.com/in/ashutoshktiwari',
  tagline:
    'Embedded & connectivity software for systems that fly — and research on making autonomous ones provably safe.',
  summary:
    'Engineer II at Safran Engineering Services, working on satellite modem management for aircraft connectivity. Previously DO-178C DAL-A software for the Rolls-Royce Trent 900 FADEC and marine navigation HMIs at Raymarine. I build in C++ and Python, and my research applies formal verification (Z3/SMT) to AI agents in aerospace and maritime systems.',
};

export const telemetry: [string, string][] = [
  ['ROLE', 'Engineer II, Connectivity & Embedded'],
  ['DOMAIN', 'SATCOM · Avionics · Maritime'],
  ['EXPERIENCE', '5 yrs · Safran, ALTEN/Rolls-Royce, Raymarine'],
  ['STANDARDS', 'DO-178C DAL-A · CCSDS · DVB-S2X'],
  ['STACK', 'C++20 · Python · Qt/QML · Embedded Linux · Z3'],
  ['EDUCATION', 'MSc (Distinction), University of Leicester'],
];

export const now = [
  {
    label: 'DAY JOB · SAFRAN',
    title: 'Satellite modem management',
    text: 'Modem manager software for aircraft satellite connectivity terminals — integration, field-issue analysis and fixes across multiple modem families.',
  },
  {
    label: 'RESEARCH · SATGUARD',
    title: 'Formally guarded LLM command agents',
    text: 'Prompt-injection attacks on LLM-based satellite command agents, defended by Z3 constraints on link physics (Shannon bound, EIRP, ModCod validity). Preprint in preparation.',
  },
  {
    label: 'BUILDING · AEROSAT-SYNC',
    title: 'Distributed telemetry engine',
    text: 'C++20 telemetry pipeline with Raft replication and real-time SMT verification of incoming frames, plus an embedded BITE/health system on Raspberry Pi and STM32.',
  },
];

export const papers = [
  {
    status: 'PREPRINT IN PREP',
    venue: 'Target: IEEE Aerospace Conference 2027',
    title: 'SatGuard: Adversarial Prompt Injection and Z3-Based Defense for LLM Satellite Command Agents',
    blurb:
      'A malformed SNMP trap carries an injection payload that pushes an LLM agent to issue an attacker-chosen ModCod override; SMT constraints on link physics block it.',
    authors: 'A. K. Tiwari',
  },
  {
    status: 'MANUSCRIPT IN PREP',
    venue: 'Target: MDPI Journal of Marine Science and Engineering',
    title: 'COLREGS-Compliant Collision Avoidance with PPO and a Z3 Runtime Safety Verifier',
    blurb:
      'Learning-based ship collision avoidance with a Simplex-style formal safety layer, evaluated on MMG vessel dynamics.',
    authors: 'A. K. Tiwari, S. Alam',
  },
  {
    status: 'IN PROGRESS',
    venue: 'Target: ICASSP 2027',
    title: 'Physics-Informed Learning for DVB-S2X Link Adaptation under Atmospheric Disturbance',
    blurb: 'Shannon-bound and Eb/N0 constraints built into the loss of an ML/RL ModCod selector.',
    authors: 'A. K. Tiwari',
  },
];

export const interests = [
  'Formal verification',
  'Runtime assurance',
  'Satellite link adaptation',
  'Safe RL',
  'AI security',
];

// Dates: jab confirm ho, `period` add karo (e.g. '2023 — Present'); khaali ho toh UI mein nahi dikhega.
export const jobs = [
  {
    period: '',
    role: 'Engineer II, Connectivity & Embedded Systems',
    org: 'Safran Engineering Services',
    place: 'Bangalore, India',
    summary:
      'Satellite modem management for aircraft connectivity; BITE, service manager, connectivity LRU manager and HAL components.',
    points: [
      'Modem manager and HAL work for in-flight satellite connectivity terminals across several modem families.',
      'Built-in test (BITE) and service/process manager components for a connectivity LRU.',
      'Field-issue analysis and fixes; hardware-in-the-loop testing with real data.',
    ],
  },
  {
    period: '',
    role: 'Software Engineer',
    org: 'ALTEN — for Rolls-Royce',
    place: '',
    summary: 'Trent 900 FADEC software developed and verified to DO-178C DAL-A.',
    points: [
      'Engine control software for the Trent 900 FADEC under DO-178C Design Assurance Level A.',
      'Requirements-based development and verification with full traceability.',
    ],
  },
  {
    period: '',
    role: 'Software Engineer',
    org: 'Raymarine',
    place: '',
    summary: 'Marine navigation displays and HMIs in C++ and Qt/QML.',
    points: ['Marine navigation display software and HMI features in C++ and Qt/QML.'],
  },
];

export const education = [
  { degree: 'MSc', school: 'University of Leicester, UK', detail: 'Distinction (84%)' },
  { degree: 'BE', school: '', detail: 'CGPA 7.82 / 10' },
];

export const skills: [string, string][] = [
  ['Languages', 'C++17/20, Python, C, Rust (learning)'],
  ['Systems', 'Embedded Linux, D-Bus, Boost.Asio, multithreading, IPC, HAL design'],
  ['UI', 'Qt 6, Qt/QML, MVP/MVVM architectures'],
  ['Safety & standards', 'DO-178C (DAL-A), CCSDS, DVB-S2X, requirements traceability'],
  ['Verification & ML', 'Z3/SMT, runtime assurance, PyTorch, PPO, physics-informed ML'],
  ['Tooling', 'CMake, Git, Docker, GitHub Actions, cppcheck, HIL testing'],
];
