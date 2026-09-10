export const profile = {
  name: 'Sara Chaudhari',
  role: 'Software Engineer — Backend Systems & ML Infrastructure',
  location: 'San Diego, CA',
  email: 's2chaudhari@ucsd.edu',
  github: 'https://github.com/sarac02',
  linkedin: 'https://www.linkedin.com/in/sara-chaudhari/',
  resume: '/resume.pdf',
  blurb:
    "I build backend systems and ML infrastructure — distributed services, data pipelines, and the plumbing that keeps models and APIs reliable under load. Currently finishing my MS at UC San Diego, previously shipping backend and infra work at Genies, Dassault Systèmes, and two earlier engineering roles.",
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
      'Built Python backend orchestration services for distributed AI workflows — request queuing, connection pooling, and failure isolation to keep service reliability up under production load.',
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
  period?: string
  description: string
  bullets: string[]
  tech: string[]
  github?: string
  privateNote?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'LLM Avalon Simulator',
    description:
      'A multi-agent simulation of the social deduction game The Resistance: Avalon, where each player is an LLM-driven agent with a hidden role, its own reasoning policy, and a planning/accusation loop.',
    bullets: [
      'Modeled each role (Merlin, Percival, Assassin, etc.) as an independent agent with role-specific prompts and decision logic.',
      'Built a structured game loop handling team proposals, voting, missions, and end-game assassination, with a dedicated planning-and-accusation logging layer for debugging agent behavior.',
    ],
    tech: ['Python', 'LLM Orchestration', 'Multi-Agent Systems'],
    github: 'https://github.com/sarac02/llm-avalon-simulator',
    featured: true,
  },
  {
    name: 'Multi-PDF RAG Chatbot',
    description:
      'A retrieval-augmented chatbot that answers natural-language questions across multiple PDF documents at once, including numeric lookups like revenue or profit figures.',
    bullets: [
      'Built a document pipeline with PyPDF2 and pdf2image for parsing, chunking, and embedding, backed by a Chroma vector store for similarity search.',
      'Used LangChain to orchestrate retrieval and Hugging Face Transformers for generation, supporting multi-document question answering in one conversation.',
    ],
    tech: ['LangChain', 'Chroma', 'Hugging Face', 'Python'],
    github: 'https://github.com/sarac02/chatwithPDFs',
    featured: true,
  },
  {
    name: 'Hybrid LSTM-VAE-GAN for Time-Series Anomaly Detection',
    description:
      'A hybrid deep-learning architecture combining an LSTM-based VAE with an adversarial discriminator to flag anomalies in time-series data — the modeling approach behind the anomaly-detection pipeline built at Garg Group.',
    bullets: [
      'Combined a sequence-aware VAE encoder-decoder with a GAN discriminator so the model learns to reconstruct normal temporal patterns and flag deviations.',
      'Applied to multivariate time-series data as a research complement to the rule-based anomaly detection used in production.',
    ],
    tech: ['PyTorch', 'LSTM', 'VAE', 'GAN'],
    github: 'https://github.com/sarac02/Hybrid-LSTM-VAE-GAN-for-Time-Series-Anomaly-Detection',
    featured: true,
  },
  {
    name: 'Real-Time Analytics Dashboard',
    description:
      'An internal-tool-style admin dashboard for business operations, with authentication, role-based access, company management, and a Kanban-based task board.',
    bullets: [
      'Built with Refine on React and TypeScript, using GraphQL for data fetching and Ant Design for the component layer.',
      'Companion to the Transaction Analytics Dashboard built with React and Spring Boot, focused on real-time visualization of live system and transaction metrics.',
    ],
    tech: ['React', 'TypeScript', 'GraphQL', 'Ant Design'],
    github: 'https://github.com/sarac02/Real-time-Dashboard-with-React',
    featured: true,
  },
  {
    name: 'Distributed Log Search Engine',
    period: 'Jan 2025 – Mar 2025',
    description:
      'A distributed system for indexing and searching large-scale logs in parallel, built to explore sharding, replication, and fault tolerance under concurrent load.',
    bullets: [
      'Used Java multithreading and a MapReduce-style split to index and query logs in parallel across simulated nodes.',
      'Deployed on AWS EC2 and S3 with Jenkins-based CI/CD, reaching sub-5-second search latency on 50GB+ of data via sharding and replication.',
    ],
    tech: ['Java', 'MapReduce', 'AWS EC2', 'Jenkins'],
    privateNote: 'Source private — details on request',
  },
  {
    name: 'Genome Sequence & Drug–Target Interaction Analysis',
    description:
      'A computational biology project analyzing SARS-CoV-2 genomic sequences and alignment data, later published as a peer-reviewed paper on drug–target interaction prediction with deep learning.',
    bullets: [
      'Applied PCA and k-means clustering to genomic and alignment datasets, and trained linear regression and neural network models to predict alignment bit scores.',
      'Findings extended into a published paper on genome sequence analysis and drug–target interaction prediction (see Publications).',
    ],
    tech: ['Python', 'scikit-learn', 'PCA', 'Neural Networks'],
    github: 'https://github.com/sarac02/Advanced-AI-for-Drug-discovery',
  },
  {
    name: 'WorkoutSync',
    description:
      'A portfolio systems project mimicking Apple Fitness+: live workout data streamed from Apple Watch to iPhone and Apple TV, with synchronized video overlays of heart rate, calories, and activity rings across all three devices.',
    bullets: [
      'Built on pure Swift and C++ with no reliance on Apple’s higher-level frameworks — HealthKit capture on-watch, WatchConnectivity to iPhone, MultipeerConnectivity to Apple TV, each with independent clock synchronization.',
      'Added a plausibility filter to reject physically impossible sensor readings and interpolation logic to keep overlays smooth across three unsynchronized clocks.',
    ],
    tech: ['Swift', 'C++', 'Real-Time Systems', 'HealthKit'],
    github: 'https://github.com/sarac02/WorkoutSync',
  },
]

export type Publication = {
  title: string
  venue: string
}

export const publications: Publication[] = [
  {
    title: 'Genome Sequence Analysis and Drug–Target Interaction Prediction using Deep Learning',
    venue: 'Springer Innovative Computing and Communications, LNNS Series (Vol. 1038)',
  },
  {
    title: 'Two-Pass Pipeline for Automated Medical Infographic Generation Using Text Summarization',
    venue: 'SmartDataCom: International Conference on Smart Data Processing, Communication and Networking (2024)',
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
    detail: 'GPA 3.9/4.0 · Distributed Systems, Operating Systems, Advanced Algorithms, Computer Networks, ML Systems',
  },
  {
    school: 'A.P. Shah Institute of Technology, University of Mumbai',
    degree: 'BE, Computer Engineering',
    period: 'Aug 2020 – Jun 2024',
    detail: 'GPA 3.9/4.0 · Honors in Artificial Intelligence and Machine Learning',
  },
]
