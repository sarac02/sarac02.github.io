export const profile = {
  name: 'Sara Chaudhari',
  role: 'Software Engineer, Backend Systems & ML Infrastructure',
  location: 'San Diego, CA',
  email: 's2chaudhari@ucsd.edu',
  github: 'https://github.com/sarac02',
  linkedin: 'https://www.linkedin.com/in/sara-chaudhari/',
  resume: '/resume.pdf',
  headshot: '/images/headshot.jpg',
  graduation: '/images/graduation.jpg',
  travel: '/images/travel.jpg',
  blurb:
    "I build backend systems and ML infrastructure: distributed services, data pipelines, and the plumbing that keeps models and APIs reliable under load. MS in Computer Science and Engineering from UC San Diego, previously shipping backend and infra work at Genies, Dassault Systèmes, and two earlier engineering roles.",
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
      'Built Python backend orchestration services for distributed AI workflows: request queuing, connection pooling, and failure isolation to keep service reliability up under production load.',
      'Cut redundant compute and lifted shared-service capacity by 28% with Redis-backed response caching and batched async processing under concurrent production traffic.',
      'Designed shared configuration and retry utilities adopted across multiple backend services, standardizing failure handling platform-wide.',
    ],
    tech: ['Python', 'Redis', 'Async I/O', 'Distributed Systems'],
  },
  {
    company: 'Dassault Systèmes Americas Corp.',
    title: 'Software Engineer Intern',
    period: 'June 2025 – Sept 2025',
    bullets: [
      'Built Java workflow execution components handling state transitions, retries, and lifecycle management across 2,000+ pipeline artifacts, containing upstream dependency failures before they cascaded downstream.',
      'Containerized Python workloads with Docker and Kubernetes on Terraform-managed infrastructure, adding parallel execution and retry logic for dependency failures in batch workflows.',
      'Automated Jenkins CI/CD validation pipelines in Groovy and Spock, covering regression scenarios and cutting production defects by 20% through systematic pre-deployment testing.',
    ],
    tech: ['Java', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
  },
  {
    company: 'UpSolve Solutions',
    title: 'Software Engineer',
    period: 'Apr 2023 – Jul 2024',
    bullets: [
      'Engineered C++ services on Linux to process streaming user events and run pre-trained models for real-time scoring, cutting end-to-end latency by 30% across 5,000+ daily requests.',
      'Designed an async pipeline with Redis queues and AWS SQS using producer-consumer batching, decoupling compute from request handling and lifting throughput by 22% at peak load.',
      'Instrumented a monitoring pipeline comparing live model outputs against offline benchmarks to catch feature inconsistencies early, publishing service health telemetry that shortened debugging cycles.',
    ],
    tech: ['C++', 'Linux', 'Redis', 'AWS SQS'],
  },
  {
    company: 'Garg Group',
    title: 'Software Engineer',
    period: 'Sept 2022 – Apr 2023',
    bullets: [
      'Architected automated data ingestion and feature-generation pipelines, orchestrating preprocessing and scheduled inference runs to cut manual pipeline overhead by 40%.',
      'Processed 100K+ supply-chain time-series records with Spark on AWS EMR, generating time-based features and cutting end-to-end pipeline latency by 33%.',
      'Orchestrated Airflow-scheduled scoring and evaluation workflows, improving anomaly-detection accuracy by 15% over rule-based baselines and enabling automated alerting for ops teams.',
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
  {
    org: 'Data Science Wizards',
    title: 'ML Research Assistant',
    period: 'Jul 2023 – Apr 2024',
    bullets: [
      'Developed and optimized document retrieval and summarization pipelines using LLaMA2 and Hugging Face Transformers, reaching 94.8% accuracy on benchmark information-extraction datasets.',
      'Integrated multimodal alignment with LLaVA, linking images with retrieved text to improve search relevance by 20%.',
    ],
    tech: ['LLaMA2', 'Hugging Face', 'LLaVA', 'Python'],
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
    tagline: 'Multi-agent deception and hidden-role reasoning',
    description:
      'A full simulation of the social-deduction game The Resistance: Avalon, played entirely by LLM agents. Each agent holds a hidden role, reasons privately about who to trust, and has to bluff, accuse, or stay quiet without ever seeing another agent’s internal state.',
    bullets: [
      'Modeled every role (Merlin, Percival, Assassin, and the rest) as an independent agent with role-specific knowledge, incentives, and prompting.',
      'Built the full game loop: team proposals, voting, missions, and end-game assassination, with a dedicated planning-and-accusation logging layer to trace exactly why an agent voted or accused the way it did.',
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
