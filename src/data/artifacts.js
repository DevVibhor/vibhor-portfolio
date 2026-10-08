export const PERSONAL_INFO = {
  name: "Vibhor",
  targetRole: "Technical Business Analyst",
  targetCompany: "OrangeMantra",
  tagline: "Bridging Enterprise Business Needs with Scalable Technical Architecture & AI-Accelerated Engineering",
  bio: "Technical Business Analyst | 6 Years IT Experience | Requirements to Delivery | SDLC | Requirement Gathering | BRD | Mobile App Development",
  email: "vibhorkshp7@example.com", // easily customizable
  linkedin: "https://www.linkedin.com/in/vibhor-kashyap/",
  github: "https://github.com/DevVibhor",
};

export const CATEGORIES = [
  { id: 'all', name: 'All Artifacts', count: 6 },
  { id: 'brd', name: 'BRDs', count: 2, icon: 'FileText' },
  { id: 'flow', name: 'Process Flows', count: 2, icon: 'GitMerge' },
  { id: 'solution', name: 'Solution Proposals', count: 2, icon: 'Cpu' },
  { id: 'design', name: 'Website Designs', count: 2, icon: 'Layout' }
];

export const ARTIFACTS = [
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
    stakeholders: ['VP Retail Operations', 'Chief Architect', 'Warehouse Management Lead', 'Payment Ops'],
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
      },
      {
        heading: '3. Non-Functional Criteria (NFRs)',
        content: '• Latency: P99 < 120ms\n• Throughput: 50,000 requests/minute\n• High Availability: 99.99% multi-region active-active deployment\n• Compliance: SOC2 Type II and PCI-DSS Level 1'
      }
    ]
  },
  {
    id: 'process-flow-order',
    title: 'Order Fulfillment & Real-Time Inventory Reconciliation',
    category: 'flow',
    categoryName: 'Process Flow & BPMN Diagram',
    badge: 'BPMN 2.0 Architecture',
    version: 'v2.1',
    date: 'October 2026',
    status: 'Approved',
    fileType: 'image',
    fileUrl: 'images/process-flow-order-engine.svg',
    previewImage: 'images/process-flow-order-engine.svg',
    summary: 'Multi-tier swimlane diagram detailing the entire lifecycle of an order: from client submission and soft reservation, to 3DS payment capture, ERP ledger audit, and warehouse pick-pack dispatch.',
    impact: 'Eliminates race conditions between concurrent checkout threads, providing graceful degradation and automated rollback workflows.',
    tools: ['BPMN 2.0', 'Lucidchart', 'Enterprise Architect', 'Miro'],
    stakeholders: ['Lead Solution Architect', 'Core Backend Engineers', 'QA Team'],
    highlights: [
      '3 Dedicated Swimlanes: Client Tier, Orchestration Gateway, and ERP/Payment Core',
      'Explicit Decision Diamond logic for Stock Availability and 3DS Fallbacks',
      'Kafka async pub/sub queues decoupled from user-facing HTTP responses',
      'Comprehensive error handling paths for network timeouts and card declines'
    ],
    sections: [
      {
        heading: 'Process Flow Stages',
        content: '1. Ingestion: Client POST /v1/checkout -> 2. Inventory Lock: Redis Distributed Mutex -> 3. Authorization: Payment Provider Tokenization -> 4. Settlement: Kafka event emission -> 5. WMS Alert: Warehouse packing slip generation.'
      },
      {
        heading: 'Exception Handling & Rollback Protocol',
        content: 'If payment fails or times out after 3 retries, a compensating transaction (Saga pattern) immediately releases the inventory lock and notifies the client without data corruption.'
      }
    ]
  },
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
    tools: ['AWS Architecture', 'Kafka', 'Kong API Gateway', 'Docker/K8s', 'Draw.io'],
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
        content: 'Deconstruct domain logic into isolated microservices behind a unified API gateway. Implement asynchronous event streaming with Apache Kafka for non-blocking transactions and Snowflake data lake ingestion.'
      },
      {
        heading: 'Phased Execution Roadmap',
        content: '• Phase 1 (Month 1): API Gateway & Identity Service Proxy\n• Phase 2 (Month 2-3): Order & Inventory Extraction with CDC\n• Phase 3 (Month 4): Decommissioning legacy monolithic routes.'
      }
    ]
  },
  {
    id: 'design-dashboard',
    title: 'Nexus Enterprise Operations & SLA Analytics Console',
    category: 'design',
    categoryName: 'Website & UI/UX Design',
    badge: 'High-Fidelity Wireframe & UX',
    version: 'v1.4',
    date: 'October 2026',
    status: 'Interactive Spec',
    fileType: 'image',
    fileUrl: 'images/website-design-dashboard.svg',
    previewImage: 'images/website-design-dashboard.svg',
    summary: 'Enterprise web application design for operations managers and technical analysts to monitor real-time order throughput, webhook deliveries, system health, and SLA compliance.',
    impact: 'Reduces operational MTTR by 65% by centralizing key incident metrics, dead-letter queue (DLQ) alerts, and live event telemetry into a unified pane.',
    tools: ['Figma', 'Tailwind CSS', 'Design Systems', 'User Journey Mapping'],
    stakeholders: ['Operations Lead', 'B2B Account Managers', 'Frontend Tech Lead'],
    highlights: [
      'Information architecture optimized for high-density enterprise data ingestion',
      'Live metric cards with percentage trends and dynamic health indicators',
      'Real-time throughput area chart showcasing 24-hour volume velocity',
      'Side-rail live webhook monitor with instant status color coding'
    ],
    sections: [
      {
        heading: 'Design Rationale & Usability Principles',
        content: 'Designed with a high-contrast dark theme (Slate & OrangeMantra accents) to prevent eye fatigue during continuous control-room shifts. Critical status metrics utilize WCAG AAA compliant color contrasts.'
      },
      {
        heading: 'Key Functional Components',
        content: '• Global omnibox search with keyboard shortcuts (Ctrl+K)\n• Quick-action modal triggers for manual order overrides\n• Real-time WebSocket connection badge showing live telemetry status.'
      }
    ]
  },
  {
    id: 'brd-kyc-onboarding',
    title: 'B2B Multi-Tenant Client Onboarding & Automated KYC',
    category: 'brd',
    categoryName: 'Business Requirement Document (BRD)',
    badge: 'Fintech & Compliance Spec',
    version: 'v1.8',
    date: 'October 2026',
    status: 'Approved',
    fileType: 'pdf',
    fileUrl: 'artifacts/brd-omnichannel-platform.pdf',
    previewImage: 'images/brd-cover-1.svg',
    summary: 'End-to-end business and technical requirements for automated corporate verification, identity validation, multi-jurisdiction AML sanctions screening, and role-based access control.',
    impact: 'Automated 82% of manual B2B onboarding approvals, cutting customer time-to-first-transaction from 4 business days to under 12 minutes.',
    tools: ['Confluence', 'Miro', 'OpenAPI 3.0', 'Jira'],
    stakeholders: ['Chief Compliance Officer', 'Head of Product', 'Legal & Security'],
    highlights: [
      'Multi-tenant workspace isolation with Row-Level Security (RLS)',
      'Automated OCR document ingestion and biometric liveness checks',
      'Sanction list and PEP screening integration with automated risk scoring',
      'Audit trail export compliant with FATF and FINRA guidelines'
    ],
    sections: [
      {
        heading: 'Business Drivers',
        content: 'Manual document review created high drop-off rates for corporate accounts. This specification creates an automated workflow pipeline verifying company registries and UBOs via API.'
      },
      {
        heading: 'Security & Compliance Matrix',
        content: 'Zero-knowledge encryption for PII at rest (AES-256), strict token expiration, and complete immutable audit logs stored in append-only storage.'
      }
    ]
  },
  {
    id: 'flow-payment-gateway',
    title: 'OAuth 2.0 & Payment Webhook Reconciliation Sequence',
    category: 'flow',
    categoryName: 'Process Flow & System Sequence',
    badge: 'API Sequence Flow',
    version: 'v1.9',
    date: 'October 2026',
    status: 'Production Spec',
    fileType: 'image',
    fileUrl: 'images/process-flow-order-engine.svg',
    previewImage: 'images/process-flow-order-engine.svg',
    summary: 'Detailed UML sequence and process flow demonstrating asynchronous webhook verification, SHA-256 HMAC signature validation, and database state reconciliation.',
    impact: 'Guarantees zero payment reconciliation slippage and protects payment endpoints from replay attacks.',
    tools: ['Sequence Diagrams', 'Draw.io', 'Postman', 'OAuth 2.0 / OpenID'],
    stakeholders: ['Payment Engineering Team', 'Security Auditor'],
    highlights: [
      'HMAC SHA-256 signature verification preventing spoofed webhook deliveries',
      'Exponential backoff retry policy for transient third-party downstream timeouts',
      'Dead-letter queue (DLQ) automated alerting for payload formatting discrepancies',
      'Idempotency key enforcement using atomic distributed Redis sets'
    ],
    sections: [
      {
        heading: 'Security & Authentication Protocol',
        content: 'All incoming webhook payloads require a signed timestamp and HMAC digest. Replay attacks older than 300 seconds are rejected automatically at the gateway tier.'
      }
    ]
  }
];
