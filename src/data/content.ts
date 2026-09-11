export const profile = {
  name: 'Sara Chaudhari',
  role: 'Software Engineer, Backend Systems & ML Infrastructure',
  location: 'San Diego, CA',
  email: 's2chaudhari@ucsd.edu',
  github: 'https://github.com/sarac02',
  linkedin: 'https://www.linkedin.com/in/sara-chaudhari/',
  resume: '/resume.pdf',
  heroPhoto: '/images/graduation-portrait.jpg',
  gallery: [
    { src: '/images/bali.jpg', caption: 'Nusa Penida, Bali', alt: 'Sara at Broken Beach in Nusa Penida, Bali' },
    { src: '/images/bigbear.jpg', caption: 'Big Bear Lake, CA', alt: 'Sara at sunset by Big Bear Lake' },
    { src: '/images/la.jpg', caption: 'Griffith Observatory, LA', alt: 'Sara at Griffith Observatory with the Hollywood sign behind her' },
    { src: '/images/golf.jpg', caption: 'Golf', alt: 'Sara mid-swing at a golf driving range' },
  ],
  blurb:
    "I build backend systems and ML infrastructure: distributed services, data pipelines, and the plumbing that keeps models and APIs reliable under load. MS in Computer Science and Engineering from UC San Diego, previously shipping backend and infra work at Genies, Dassault Systèmes, and two earlier engineering roles.",
  outsideOfWorkTitle: 'Off-Peak',
  outsideOfWork:
    "Most weekends I'm somewhere with a view: a coastline I haven't seen before, a trail I haven't hiked yet, water I can't resist getting into. Bali's broken beach, a frozen sunset over Big Bear, the Hollywood sign from a hill above Griffith Observatory. Closer to home, that same restlessness shows up as golf I'm slowly getting less bad at, and tennis I'm still losing, gracefully, I hope.",
  hobbies: ['Traveling', 'Hiking', 'Golf', 'Tennis', 'Beaches'],
}

export type Role = {
  company: string
  title: string
  period: string
  narrative: string
  tech: string[]
}

export const experience: Role[] = [
  {
    company: 'Genies',
    title: 'Software Engineer Intern',
    period: 'Sept 2025 – Dec 2025',
    narrative:
      "I owned the reliability layer in front of the AI response services powering Genies' conversational agents: request queuing, connection pooling, and failure isolation so one slow call couldn't cascade into a platform-wide slowdown. I designed Redis-backed response caching and batched async processing that cut redundant model calls by 28% at peak concurrency, then generalized the retry-and-timeout logic into a shared utility three other backend teams adopted in place of their own.",
    tech: ['Python', 'Redis', 'Async I/O', 'Distributed Systems'],
  },
  {
    company: 'Dassault Systèmes Americas Corp.',
    title: 'Software Engineer Intern',
    period: 'June 2025 – Sept 2025',
    narrative:
      "I rebuilt core parts of the workflow engine running enterprise product-lifecycle operations, a system where a single stuck job could cascade into thousands of blocked downstream tasks. I redesigned the state-transition and retry handling in Java to contain failures at the source, containerized a slow manual rule-processing step onto Kubernetes with parallel execution for a 20% throughput gain, and wrote a Groovy regression suite that caught two recurring classes of state-transition bugs before they ever reached production.",
    tech: ['Java', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
  },
  {
    company: 'UpSolve Solutions',
    title: 'Software Engineer',
    period: 'Apr 2023 – Jul 2024',
    narrative:
      "UpSolve is where I first owned a production system end to end. I rewrote the real-time scoring path as a C++ service on Linux, cutting median latency by 30%, and built a Redis-queued producer-consumer pipeline that kept the service stable through bursts of 5,000+ requests a day instead of buckling under load. I also shipped a drift-detection job comparing live model outputs against offline benchmarks daily, catching degradation automatically instead of waiting for someone downstream to notice.",
    tech: ['C++', 'Linux', 'Redis', 'AWS SQS'],
  },
  {
    company: 'Garg Group',
    title: 'Software Engineer',
    period: 'Sept 2022 – Apr 2023',
    narrative:
      "At Garg Group I built the data infrastructure a supply-chain team didn't have: an automated ingestion and feature pipeline that replaced manual data pulls entirely, a Spark job generating rolling-window features across 100K+ inventory records, and a real anomaly-detection model on Airflow that replaced brittle static rules. Together they cut manual overhead by 40% and gave the operations team automated alerting where they'd previously had none.",
    tech: ['Spark', 'AWS EMR', 'Airflow', 'Python'],
  },
]

export type Research = {
  org: string
  title: string
  period: string
  narrative: string
  tech: string[]
}

export const research: Research[] = [
  {
    org: 'UC San Diego',
    title: 'Graduate Researcher',
    period: 'Mar 2025 – Sept 2025',
    narrative:
      "I investigated causal discovery from observational data under distribution shift and hidden confounding, implementing constraint-based and score-based methods across 40+ controlled experiments and reaching an 18% improvement in structural recovery accuracy over baseline methods. To make that experimentation possible at all, I built the infrastructure behind it: a Kubernetes-based framework running 40+ training and evaluation configurations in parallel across a 2M-record dataset, containerized with Docker for reproducibility across lab machines, cutting per-experiment setup time from hours to minutes.",
    tech: ['Kubernetes', 'Docker', 'Causal ML', 'Python'],
  },
]

export type Project = {
  name: string
  tagline: string
  description: string
  bullets: string[]
  tech: string[]
  github?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'Hybrid Semantic Retrieval and Ranking System',
    tagline: '+4.9% NDCG@10, +8.1% Recall@50 over BM25, measured, not estimated',
    description:
      'A production-style hybrid retrieval system fusing BM25 lexical search with FAISS-indexed sentence embeddings through Reciprocal Rank Fusion, benchmarked against a BM25-only baseline on SciFact, a labeled IR benchmark from the BEIR suite, and stress-tested at 1 million documents.',
    bullets: [
      'Reached a 4.9% NDCG@10, 5.6% MAP, and 8.1% Recall@50 gain over BM25 alone across SciFact\'s 300 labeled test queries, fusing rankers instead of blending incomparable raw scores.',
      'Load-tested indexing and query latency at 1M documents, isolating BM25\'s linear-scan cost, not the vector index, as the actual bottleneck at scale.',
    ],
    tech: ['Python', 'FAISS', 'Sentence-Transformers', 'BM25'],
    github: 'https://github.com/sarac02/hybrid-retrieval',
    featured: true,
  },
  {
    name: 'Distributed Log Indexing and Search System',
    tagline: 'A measured 2.83x indexing speedup, not a projected one',
    description:
      'A sharded, multithreaded log search engine built to prove out how far a shard-per-thread design scales on a single machine before you\'d actually need to split shards across nodes, backed by a real benchmark harness rather than back-of-envelope math.',
    bullets: [
      'Split indexing into a single-threaded parse/partition phase and a parallel per-shard build phase, measuring a 2.83x speedup building an 8-shard index over 6M log lines (587MB) on 8 threads versus 1.',
      'Benchmarked concurrent cross-shard query fan-out, resolving multi-million-hit term searches across 8 shards in 150 to 415ms.',
    ],
    tech: ['Java', 'Multithreading', 'CompletableFuture', 'Inverted Index'],
    github: 'https://github.com/sarac02/distributed-log-index',
    featured: true,
  },
  {
    name: 'WorkoutSync',
    tagline: 'Real-time state sync across three unsynchronized clocks',
    description:
      'A from-scratch clone of the Apple Fitness+ live-overlay experience: workout data captured on Apple Watch, streamed to iPhone and mirrored to Apple TV, with heart rate, calories, and activity rings overlaid on video in real time on all three screens at once.',
    bullets: [
      'Built on pure Swift and C++ with no dependency on Apple’s higher-level frameworks: HealthKit capture on-watch, WatchConnectivity to iPhone, MultipeerConnectivity relaying to Apple TV, each leg running its own clock.',
      'Wrote a plausibility filter that rejects physically impossible sensor readings before they reach the UI, and an interpolation layer that keeps the three-device overlay smooth despite independent, drifting clocks.',
      'Tested on real builds, not simulators only: caught a watchOS API that silently no-ops, a missing framework link, and a data race that would have crashed playback under load.',
    ],
    tech: ['Swift', 'C++', 'HealthKit', 'Real-Time Systems'],
    github: 'https://github.com/sarac02/WorkoutSync',
    featured: true,
  },
  {
    name: 'LLM Avalon Simulator',
    tagline: 'Hidden roles, private knowledge, zero visibility into other agents',
    description:
      'A full simulation of The Resistance: Avalon, the hidden-role social deduction game, played entirely by LLM agents. Each agent gets a secret role and private knowledge and sees only what a human player would: chat, proposed teams, votes, and quest outcomes, nothing else.',
    bullets: [
      'Built guardrails against the failure modes LLMs actually hit in this game: fact-checking every message against the real quest and vote history so agents can\'t invent outcomes, scanning for role and prompt leaks before a message reaches the log, and auto-retrying vague responses that dodge naming names.',
      'Implemented the real Avalon rulebook as a state machine, exact team sizes and fail thresholds for 5 to 10 players, the fifth-rejected-proposal-ends-the-game rule, and the Assassin\'s Merlin-guess endgame, with a hard runtime check that refuses to start an illegally configured game.',
      'Added a structured per-turn accusation output (who each agent suspects, who they trust, and why) logged separately from the chat transcript, so suspicion patterns can be analyzed turn by turn instead of parsed back out of free text.',
    ],
    tech: ['Python', 'LLM Orchestration', 'Multi-Agent Systems'],
    github: 'https://github.com/sarac02/llm-avalon-simulator',
    featured: true,
  },
  {
    name: 'Hybrid LSTM-VAE-GAN Anomaly Detector',
    tagline: 'Learns what "normal" looks like instead of relying on hand-tuned rules',
    description:
      'A hybrid deep-learning architecture fusing a sequence-aware variational autoencoder with an adversarial discriminator, the research-grade successor to the rule-based anomaly detection I shipped in production at Garg Group.',
    bullets: [
      'Combined an LSTM-based VAE encoder-decoder with a GAN discriminator: the VAE reconstructs normal temporal patterns, the discriminator sharpens what counts as a convincing reconstruction, catching anomalies reconstruction error alone would miss.',
      'Built as a direct upgrade path from the static rule-based detection used in production for supply-chain time-series monitoring.',
    ],
    tech: ['PyTorch', 'LSTM', 'VAE', 'GAN'],
    github: 'https://github.com/sarac02/Hybrid-LSTM-VAE-GAN-for-Time-Series-Anomaly-Detection',
    featured: true,
  },
  {
    name: 'Genome Sequence & Drug-Target Interaction Analysis',
    tagline: 'Peer-reviewed, Springer LNNS Series',
    description:
      'A computational biology project analyzing SARS-CoV-2 genomic sequences and alignment data that became a peer-reviewed publication on drug-target interaction prediction with deep learning (see Publications).',
    bullets: [
      'Applied PCA and k-means clustering to genomic and alignment datasets to surface structure in high-dimensional sequence data no manual inspection would catch.',
      'Trained linear regression and neural network models to predict alignment bit scores from sequence features, findings that carried through to publication.',
    ],
    tech: ['Python', 'scikit-learn', 'PCA', 'Neural Networks'],
    github: 'https://github.com/sarac02/Advanced-AI-for-Drug-discovery',
  },
]

export type Publication = {
  title: string
  venue: string
  link?: string
  type: 'paper' | 'poster'
}

export const publications: Publication[] = [
  {
    title: 'Genome Sequence Analysis and Drug-Target Interaction Prediction using Deep Learning',
    venue: 'Springer Innovative Computing and Communications, LNNS Series (Vol. 1038)',
    link: 'https://link.springer.com/chapter/10.1007/978-981-97-4149-6_39',
    type: 'paper',
  },
  {
    title: 'Two-Pass Pipeline for Automated Medical Infographic Generation Using Text Summarization',
    venue: 'Poster presentation, SmartDataCom: International Conference on Smart Data Processing, Communication and Networking (2024)',
    type: 'poster',
  },
]

export const skills: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['C++', 'Python', 'Java', 'TypeScript', 'SQL'] },
  {
    label: 'Systems & Backend',
    items: ['Linux', 'Multithreading', 'Async Architecture', 'Concurrency', 'Distributed Task Orchestration'],
  },
  {
    label: 'Cloud & Infra',
    items: ['AWS', 'Terraform', 'Docker', 'Kubernetes', 'ECS', 'S3', 'Postgres', 'Redis', 'SQS', 'CI/CD'],
  },
  {
    label: 'ML & Data',
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face', 'LLMs', 'Causal ML', 'Spark', 'Airflow'],
  },
  {
    label: 'Tooling',
    items: ['Jenkins', 'Git', 'Cursor', 'Claude Code'],
  },
]

export const education = [
  {
    school: 'University of California, San Diego',
    degree: 'MS, Computer Science and Engineering',
    period: 'Sept 2024 – Jun 2026',
    gpa: 'GPA 3.9/4.0',
    honors: null,
  },
  {
    school: 'A.P. Shah Institute of Technology, University of Mumbai',
    degree: 'BE, Computer Engineering',
    period: 'Aug 2020 – Jun 2024',
    gpa: 'GPA 3.9/4.0',
    honors: 'Honors in Artificial Intelligence and Machine Learning',
  },
]
