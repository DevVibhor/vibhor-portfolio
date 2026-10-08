export const PERSONAL_INFO = {
  name: "Vibhor",
  targetRole: "Technical Business Analyst",
  targetCompany: "OrangeMantra",
  tagline: "Bridging Enterprise Business Needs with Scalable Technical Architecture & AI-Accelerated Engineering",
  bio: "Technical Business Analyst | 6 Years IT Experience | Requirements to Delivery | SDLC | Requirement Gathering | BRD | Mobile App Development",
  email: "vibhorkshp7@example.com",
  linkedin: "https://www.linkedin.com/in/vibhor-kashyap/",
  github: "https://github.com/DevVibhor",
};

export const CATEGORIES = [
  { id: 'all', name: 'All Deliverables' },
  { id: 'flow', name: 'Process Flows' },
  { id: 'design', name: 'Live Project URL' },
  { id: 'brd', name: 'BRDs' },
  { id: 'solution', name: 'Solution Proposals' }
];

export const ARTIFACTS = [
  // 1. Live Client Website Deliverable
  {
    id: 'suzuki-sqa-platform',
    title: 'Suzuki SQA Management',
    category: 'design',
    categoryName: 'Live Client Website',
    badge: 'Live Production Platform',
    version: 'Live v3.2',
    date: 'Active Production',
    status: 'Live In Production',
    liveUrl: 'https://suzukisqamanagement.in/',
    fileType: 'image',
    fileUrl: 'images/suzuki-sqa-management.svg',
    previewImage: 'images/suzuki-sqa-management.svg',
    summary: 'Live enterprise Supplier Quality Assurance (SQA) management platform connecting automotive component suppliers with quality assurance engineers for PCR change requests, vehicle quality tracking, and compliance verification.',
    impact: 'Deployed in production at suzukisqamanagement.in — automated multi-tier approval cycles and digital audit compliance.',
    tools: ['React', 'Enterprise SQA', 'SDLC', 'BPMN 2.0', 'Figma'],
    stakeholders: ['Suzuki SQA Leadership', 'Tier-1 Automotive Suppliers', 'Plant Quality Auditors'],
    highlights: [
      'Live in production at https://suzukisqamanagement.in/',
      'Supplier Quality Assurance (SQA) centralized portal',
      'Automated PCR (Process Change Request) submission & multi-level review',
      'Vehicle quality inspection gateway audit workflows'
    ],
    sections: [
      {
        heading: '1. Live Client Platform Overview',
        content: 'Active production web platform deployed at https://suzukisqamanagement.in/ designed to digitize supplier quality management, process change requests (PCR), die/mould validations, and vehicle assembly line inspection checkpoints.'
      },
      {
        heading: '2. Technical Business Analyst Role & Contribution',
        content: '• Led requirement elicitation sessions with Suzuki SQA leads and automotive component suppliers.\n• Authored comprehensive BRDs and mapped out end-to-end BPMN process flows for Supplier PCRs, Die/Mould Duplication, and Vehicle Inspection systems.\n• Designed system workflows, API contracts, and user acceptance criteria (UAT) for frontend React developers and backend architects.'
      },
      {
        heading: '3. Core Modules & Production Capabilities',
        content: '• Supplier PCR Portal: Online submission of process and part change requests with supporting test documentation.\n• Vehicle Inspection System: Step-by-step quality gateway inspection and defect logging.\n• Tooling QA: Die & mould duplication validation audit trail.\n• Real-time Analytics: Vendor compliance scores and SLA tracking.'
      }
    ]
  },

  // 2. Process Flow 1: PCR raised by Supplier
  {
    id: 'flow-pcr-supplier',
    title: 'PCR raised by Supplier',
    category: 'flow',
    categoryName: 'Process Flow & BPMN Diagram',
    badge: 'SQA Process Flow',
    version: 'Approved Spec',
    date: 'Suzuki SQA System',
    status: 'Approved',
    fileType: 'image',
    fileUrl: 'processflows/pcr-raised-by-supplier.png',
    previewImage: 'processflows/pcr-raised-by-supplier.png',
    summary: 'Comprehensive Process Change Request (PCR) lifecycle flow detailing supplier initiation, internal quality review, trial lot evaluation, and executive approval gate for automotive components.',
    impact: 'Standardized supplier change request approvals, eliminating undocumented component changes and ensuring 100% audit compliance.',
    tools: ['BPMN 2.0', 'Process Flowcharting', 'Supplier Quality Assurance', 'Miro'],
    stakeholders: ['Tier-1 Suppliers', 'SQA Engineers', 'Plant Quality Managers'],
    highlights: [
      'Step-by-step supplier PCR initiation and validation criteria',
      'Decision gateways for initial review, trial evaluation, and final signoff',
      'Multi-stage notification & feedback loops between supplier and OEM',
      'Formal verification checkpoints before production authorization'
    ],
    sections: [
      {
        heading: 'Process Overview: PCR Raised by Supplier',
        content: 'Detailed workflow modeling the end-to-end lifecycle when a component supplier submits a Process Change Request (PCR) for manufacturing line modifications, material alterations, or tool relocations in the Suzuki SQA ecosystem.'
      },
      {
        heading: 'Approval Checkpoints & Gateways',
        content: '1. PCR Submission: Supplier registers request with technical justification and test reports.\n2. Initial Screening: SQA engineer reviews risk severity and feasibility.\n3. Trial Production: Sample evaluation and CMM dimensional checks.\n4. Final Approval: Executive signoff and production cutover authorization.'
      }
    ]
  },

  // 3. Process Flow 2: Vehicle Inspection System
  {
    id: 'flow-vehicle-inspection',
    title: 'Vehicle Inspection System',
    category: 'flow',
    categoryName: 'Process Flow & System Architecture',
    badge: 'System Architecture Flow',
    version: 'Production Flow',
    date: 'Suzuki SQA System',
    status: 'Approved',
    fileType: 'image',
    fileUrl: 'processflows/vehicle-inspection-system.png',
    previewImage: 'processflows/vehicle-inspection-system.png',
    summary: 'System process flow and interaction map for vehicle inspection, capturing quality checkpoint gateways, defect logging, and auditor sign-off sequences.',
    impact: 'Streamlined real-time vehicle defect detection and reduced assembly line bottlenecks across inspection bays.',
    tools: ['System Architecture', 'Process Modeling', 'Quality Management System'],
    stakeholders: ['Inspection Line Auditors', 'Plant Operations', 'Systems Architect'],
    highlights: [
      'Sequential inspection gateway verification along the vehicle line',
      'Real-time defect severity categorization and rework routing',
      'Digital auditor signoff capturing timestamps and inspector credentials',
      'Automated quality certificate dispatch upon passing all checkpoints'
    ],
    sections: [
      {
        heading: 'Vehicle Inspection Architecture & Workflow',
        content: 'Process and system interaction mapping detailing how vehicles progress through consecutive inspection stations, capturing sensor and manual audit findings into the central SQA database.'
      },
      {
        heading: 'Gateway Verification & Defect Routing',
        content: '• Bay 1-N Quality Audits: Line inspectors check mechanical, electrical, and cosmetic parameters.\n• Defect Logging: Instant routing to rework bay for items failing tolerance thresholds.\n• Final Buyoff: Verified stamp generated upon passing all gateway parameters.'
      }
    ]
  },

  // 4. Process Flow 3: Die:Mould Duplication Process Flow
  {
    id: 'flow-die-mould',
    title: 'Die:Mould Duplication Process Flow',
    category: 'flow',
    categoryName: 'Process Flow & BPMN Diagram',
    badge: 'Tooling Quality Flow',
    version: 'Approved Spec',
    date: 'Suzuki SQA System',
    status: 'Approved',
    fileType: 'image',
    fileUrl: 'processflows/die-mould-duplication-flow.png',
    previewImage: 'processflows/die-mould-duplication-flow.png',
    summary: 'Quality assurance process flow governing die and mould duplication, tooling validation trials, dimensional tolerance inspections, and production clearance.',
    impact: 'Ensures 100% tooling consistency and prevents defective component production from worn or unverified duplicate dies.',
    tools: ['BPMN 2.0', 'Tooling QA', 'Process Modeling'],
    stakeholders: ['Tooling Engineers', 'Supplier Tool Rooms', 'SQA Managers'],
    highlights: [
      'Die/mould duplication request and feasibility review',
      'Trial run part sampling and CMM dimensional inspection',
      'Approval matrix for pilot batch production and full release',
      'Comprehensive audit trail for automotive supplier tool rooms'
    ],
    sections: [
      {
        heading: 'Die / Mould Duplication Lifecycle',
        content: 'Formalized process flow detailing the stages required when suppliers duplicate dies or moulds to scale capacity or replace worn tooling, ensuring zero deviation in component geometry.'
      },
      {
        heading: 'Tooling Validation Stages',
        content: '1. Duplication Notification: Supplier notifies OEM with CAD data.\n2. Trial Sampling: First-off-tool parts measured against master engineering drawings.\n3. Capability Study: CPK analysis ensuring process stability.\n4. Final Clearance: Production die signoff and serial release.'
      }
    ]
  },

  // 5. BRD: Omnichannel Platform
  {
    id: 'brd-omnichannel',
    title: 'Omnichannel Order & Inventory Sync Platform',
    category: 'brd',
    categoryName: 'Business Requirement Document (BRD)',
    badge: 'Core Enterprise Spec',
    version: 'v2.4',
    date: 'October 2026',
    status: 'Ready for Review',
    fileType: 'pdf',
    fileUrl: 'artifacts/brd-omnichannel-platform.pdf',
    previewImage: 'images/brd-cover-1.svg',
    summary: 'A comprehensive, enterprise-grade Business Requirement Document outlining an omnichannel order management and soft-reservation inventory engine across physical stores, mobile apps, and e-commerce storefronts.',
    impact: 'Engineered to reduce inventory discrepancies by 98% and achieve sub-120ms stock allocation during peak transaction concurrency.',
    tools: ['Confluence', 'Jira', 'Draw.io', 'Postman'],
    stakeholders: ['VP Retail Operations', 'Chief Architect', 'Warehouse Management Lead'],
    highlights: [
      'Distributed soft reservation mechanism with 15-minute expiration lock',
      'Idempotent payment webhook intake with automatic replay safety',
      'Asynchronous Kafka event topic definition for SAP ERP updates',
      'BDD Acceptance criteria in Gherkin syntax (Given-When-Then)'
    ],
    sections: [
      {
        heading: '1. Executive Summary & Business Need',
        content: 'Retailers face stockouts and double-selling during flash traffic surges. This BRD formalizes a centralized order orchestrator with distributed Redis concurrency locks and real-time ERP reconciliation.'
      },
      {
        heading: '2. Functional Scope (Epics)',
        content: '• FR-101: Real-time stock decrement with sub-50ms latency\n• FR-102: Split-shipment logic based on geo-proximity of fulfillment centers\n• FR-103: Automated refund trigger upon failed 3DS payment gateway authorization\n• FR-104: Comprehensive audit ledger capturing every inventory mutation.'
      }
    ]
  },

  // 6. Solution Proposal: Microservices
  {
    id: 'solution-microservices',
    title: 'Monolith Decoupling into Event-Driven Microservices',
    category: 'solution',
    categoryName: 'Solution Proposal',
    badge: 'Cloud Architecture',
    version: 'v3.0',
    date: 'October 2026',
    status: 'Proposed',
    fileType: 'image',
    fileUrl: 'images/solution-arch-diagram.svg',
    pdfFallback: 'artifacts/solution-proposal-microservices.pdf',
    previewImage: 'images/solution-arch-diagram.svg',
    summary: 'A comprehensive technical solution proposal outlining the phased Strangler Fig migration of an enterprise monolithic core into independent, cloud-native microservices with Kong API Gateway and Kafka.',
    impact: 'Projects a 4x increase in release velocity, zero single-point-of-failure downtimes, and a 28% reduction in cloud infrastructure spend.',
    tools: ['AWS Architecture', 'Kafka', 'Kong API Gateway', 'Docker/K8s'],
    stakeholders: ['CTO', 'Head of Engineering', 'DevOps & Infrastructure Lead'],
    highlights: [
      'Domain-Driven Design (DDD) bounded contexts for Users, Orders, Catalog, and Billing',
      'Strangler Fig migration pattern enabling zero-downtime progressive cutover',
      'Centralized Kong Gateway handling rate-limiting, JWT validation, and CORS',
      'Debezium CDC (Change Data Capture) synchronizing data from legacy databases'
    ],
    sections: [
      {
        heading: 'Problem Statement & Bottlenecks',
        content: 'The existing monolith suffered from thread pool exhaustion during promotional bursts, tightly coupled database schema migrations, and risky monthly deployment cycles.'
      },
      {
        heading: 'Proposed Solution Architecture',
        content: 'Deconstruct domain logic into isolated microservices behind a unified API gateway. Implement asynchronous event streaming with Apache Kafka for non-blocking transactions and data lake ingestion.'
      }
    ]
  },

  
];
