export const profile = {
  name: 'Sara Chaudhari',
  role: 'Software Engineer, Backend Systems & ML Infrastructure',
  location: 'San Diego, CA',
  email: 's2chaudhari@ucsd.edu',
  github: 'https://github.com/sarac02',
  linkedin: 'https://www.linkedin.com/in/sara-chaudhari/',
  resume: '/resume.pdf',
  graduation: '/images/graduation.jpg',
  travel: '/images/travel.jpg',
  blurb:
    "I build backend systems and ML infrastructure: distributed services, data pipelines, and the plumbing that keeps models and APIs reliable under load. MS in Computer Science and Engineering from UC San Diego, previously shipping backend and infra work at Genies, Dassault Systèmes, and two earlier engineering roles.",
  outsideOfWork:
    "Outside of work I'm most likely planning the next trip. I like finding a new place and just walking it, hiking it, or floating in the ocean off it, that broken-beach photo is from Nusa Penida, Indonesia. Closer to home you'll find me on a golf course losing balls or on a tennis court losing games with slightly better grace.",
  hobbies: ['Traveling', 'Hiking', 'Golf', 'Tennis', 'Beaches'],
}

export type Role = {
  company: string
  title: string
  period: string
  bullets: string[]
  tech: string[]
}

export const experience: Role[] = [
  {
    company: 'Genies',
    title: 'Software Engineer Intern',
    period: 'Sept 2025 – Dec 2025',
    bullets: [
      'Sat in front of a handful of AI response services that all called each other, and none of them handled a slow neighbor gracefully. Added queuing and connection pooling in Python so one laggy call stopped taking the rest down with it.',
      'Noticed the same query kept hitting the model over and over during traffic spikes. Put Redis-backed caching in front of it, which took about a quarter of that redundant load off the system without touching response quality.',
      'Tired of every team writing its own retry logic slightly differently, I built one shared retry-and-timeout utility. Three other backend teams adopted it instead of maintaining their own.',
    ],
    tech: ['Python', 'Redis', 'Async I/O', 'Distributed Systems'],
  },
  {
    company: 'Dassault Systèmes Americas Corp.',
    title: 'Software Engineer Intern',
    period: 'June 2025 – Sept 2025',
    bullets: [
      'One stuck workflow job was enough to jam up thousands of tasks waiting behind it. Rebuilt the state-transition and retry handling in Java so a single failure stayed contained instead of cascading.',
      'A manual rule-processing step was the slowest part of the pipeline. Containerized it and moved it onto Kubernetes with parallel execution, which brought average batch time down by about 20%.',
      'Regression bugs kept slipping into the workflow engine unnoticed. Wrote a Groovy test suite against Jenkins CI/CD that caught two recurring classes of state-transition bugs before they ever reached release.',
    ],
    tech: ['Java', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
  },
  {
    company: 'UpSolve Solutions',
    title: 'Software Engineer',
    period: 'Apr 2023 – Jul 2024',
    bullets: [
      'The existing scoring path was too slow for real-time use. Rewrote it as a C++ service on Linux that scores events against a pre-trained model inline, cutting median latency by roughly 30%.',
      'Traffic came in bursts, not evenly, and the service would choke during spikes. Fronted it with Redis-backed queues in a producer-consumer setup so it stayed stable through 5,000+ requests a day at peak.',
      'Model drift was only ever caught when someone noticed something looked off downstream. Added a daily job comparing live outputs to offline batch results, so drift shows up before anyone has to go looking for it.',
    ],
    tech: ['C++', 'Linux', 'Redis', 'AWS SQS'],
  },
  {
    company: 'Garg Group',
    title: 'Software Engineer',
    period: 'Sept 2022 – Apr 2023',
    bullets: [
      'Supply-chain reporting relied on a lot of manual pulling and cleaning. Automated the ingestion and feature-generation pipeline end to end, cutting the manual overhead by about 40%.',
      'Needed features out of raw time-series records fast enough to be useful. Ran rolling-window feature generation over 100K+ inventory records with Spark on EMR, which cut end-to-end latency by a third.',
      'Anomaly alerts were rule-based and missed a lot. Wired the anomaly-scoring workflow through Airflow with a better model behind it, improving detection accuracy by 15% over the old rules and giving ops team automated alerts instead of manual checks.',
    ],
    tech: ['Spark', 'AWS EMR', 'Airflow', 'Python'],
  },
]

export type Research = {
  org: string
  title: string
  period: string
  bullets: string[]
  tech: string[]
}

export const research: Research[] = [
  {
    org: 'UC San Diego',
    title: 'Graduate Researcher',
    period: 'Mar 2025 – Sept 2025',
    bullets: [
      'Investigated causal discovery from observational data under distribution shift and hidden confounding, implementing constraint-based and score-based methods across 40+ controlled experiments.',
      'Evaluated causal-inference workflows with nonlinear models and missing-data handling, reaching an 18% improvement in structural recovery accuracy over baseline methods.',
      'Built reproducible experimentation pipelines on Linux-based Kubernetes clusters for consistent cross-environment evaluation, using structural Hamming distance and intervention-accuracy metrics.',
    ],
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
    tagline: 'Measured gains over BM25 on a real labeled benchmark',
    description:
      'A hybrid search system combining BM25 lexical retrieval with FAISS-indexed sentence embeddings, fused with Reciprocal Rank Fusion. Evaluated against a BM25-only baseline on SciFact, a labeled IR benchmark from the BEIR suite, and load-tested at 1 million documents.',
    bullets: [
      'Measured a 4.9% NDCG@10, 5.6% MAP, and 8.1% Recall@50 gain over BM25 alone on SciFact\'s 300 labeled test queries, using rank fusion instead of blending raw, incomparable scores.',
      'Load-tested indexing and query latency at 1M synthetic documents, isolating BM25\'s linear-scan query cost as the real bottleneck at that scale, not the vector index.',
    ],
    tech: ['Python', 'FAISS', 'Sentence-Transformers', 'BM25'],
    github: 'https://github.com/sarac02/hybrid-retrieval',
    featured: true,
  },
  {
    name: 'Distributed Log Indexing and Search System',
    tagline: 'Sharded, multithreaded search with a measured 2.83x speedup',
    description:
      'A sharded log indexing and search engine that partitions incoming logs across shards, builds each shard\'s inverted index in parallel, then fans queries out across every shard concurrently and merges the results.',
    bullets: [
      'Split indexing into a single-threaded parse/partition phase and a parallel per-shard build phase, measuring a real 2.83x speedup building an 8-shard index over 6M log lines (587MB) on 8 threads versus 1.',
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
    tagline: 'Adversarial training for time-series anomaly detection',
    description:
      'A hybrid deep-learning architecture that fuses a sequence-aware variational autoencoder with an adversarial discriminator, so the model learns what "normal" looks like and flags deviations instead of relying on hand-tuned thresholds.',
    bullets: [
      'Combined an LSTM-based VAE encoder-decoder with a GAN discriminator: the VAE reconstructs normal temporal patterns, the discriminator sharpens what counts as a convincing reconstruction.',
      'Built as a research upgrade to the rule-based anomaly detection used in production for supply-chain time-series monitoring.',
    ],
    tech: ['PyTorch', 'LSTM', 'VAE', 'GAN'],
    github: 'https://github.com/sarac02/Hybrid-LSTM-VAE-GAN-for-Time-Series-Anomaly-Detection',
    featured: true,
  },
  {
    name: 'Genome Sequence & Drug-Target Interaction Analysis',
    tagline: 'Published research: deep learning on viral genomic data',
    description:
      'A computational biology project analyzing SARS-CoV-2 genomic sequences and alignment data, the work that became a peer-reviewed paper on drug-target interaction prediction with deep learning (see Publications).',
    bullets: [
      'Applied PCA and k-means clustering to genomic and alignment datasets to surface structure in high-dimensional sequence data.',
      'Trained linear regression and neural network models to predict alignment bit scores from sequence features.',
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
    items: ['Jenkins', 'Git', 'GitHub Actions', 'Cursor', 'Claude Code'],
  },
]

export const education = [
  {
    school: 'University of California, San Diego',
    degree: 'MS, Computer Science and Engineering',
    period: 'Sept 2024 – Jun 2026',
    detail: 'GPA 3.9/4.0',
  },
  {
    school: 'A.P. Shah Institute of Technology, University of Mumbai',
    degree: 'BE, Computer Engineering',
    period: 'Aug 2020 – Jun 2024',
    detail: 'GPA 3.9/4.0 · Honors in Artificial Intelligence and Machine Learning',
  },
]
