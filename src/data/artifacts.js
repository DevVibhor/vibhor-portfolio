export const PERSONAL_INFO = {
  name: "Vibhor Kashyap",
  role: "Technical Business Analyst",
  targetRole: "Technical Business Analyst",
  tagline: "Bridging Enterprise Business Needs with Scalable Technical Architecture & High-Impact Delivery",
  bio: "I take projects from the first stakeholder conversation to go-live: gathering requirements, writing BRDs, mapping process flows and working alongside development teams to ship web and mobile platforms that are running in production today.",
  yearsExperience: "6+",
  email: "heyvibhor@outlook.com",
  linkedin: "https://www.linkedin.com/in/vibhor-kashyap/",
  github: "https://github.com/DevVibhor",
  cvUrl: "cv/Vibhor_Kashyap_Technical_Business_Analyst_Resume.pdf",
};

// Headline numbers from the CV, shown under the intro
export const KEY_NUMBERS = [
  { value: '6+', label: 'years in IT, as a BA and a developer' },
  { value: '30+', label: 'discovery calls, solution proposals and client walkthroughs in pre-sales' },
];

// Clients I've delivered for. `logo` is a path under public/ (sources in logo-sources.md);
// until a file is added the name is typeset instead. `logoClass` adjusts size or tone for one logo.
export const CLIENTS = [
  { name: 'Suzuki Motorcycle India', logo: 'logos/suzuki.png' },
  { name: 'CNH Industrial', logo: 'logos/cnh-industrial.png' },
  { name: 'James Walker Inmarco', logo: 'logos/james-walker-inmarco.png' },
  { name: 'V2 Retail', logo: 'logos/v2-retail.png' },
  { name: 'Gujarat Fluorochemicals (GFL)', logo: 'logos/gfl.webp', logoClass: 'h-12' },
];

// Work history, most recent first (from the CV)
export const EXPERIENCE = [
  {
    company: 'Team Computers Pvt. Ltd.',
    logo: 'logos/team-computers.png',
    location: 'Gurugram',
    role: 'Business Analyst',
    dates: 'May 2023 – Sep 2026',
    summary: "Led business analysis for Suzuki Motorcycle India's digital transformation across the full SDLC: a Dealer Management System, the Vehicle Inspection System, Ringi approvals and a Training Management System. Ran requirements workshops, wrote BRDs and FRDs, drove Scrum delivery in Jira and coordinated UAT, and supported pre-sales with 30+ client calls and proposals.",
  },
  {
    company: 'Kockpit Analytics Pvt. Ltd.',
    logo: 'logos/kockpit.png',
    location: 'New Delhi',
    role: 'Senior Developer',
    dates: 'Jul 2020 – Apr 2023',
    summary: "Built cross-platform React Native apps for Android and iOS for clients including CNH Industrial, James Walker Inmarco and V2 Retail, from architecture and API integration through to Play Store and App Store release. This is where the 'technical' in Technical BA comes from.",
  },
];

// Single-item labels for each deliverable type
export const CATEGORY_LABELS = {
  design: 'Live project',
  brd: 'Business requirement document',
  solution: 'Solution proposal',
  flow: 'Process flow',
};

// Order of deliverable types in the work carousel
export const WORK_ORDER = ['design', 'brd', 'solution', 'flow'];

export const ARTIFACTS = [
  // 1. Live Client Website Deliverable
  {
    id: 'suzuki-sqa-platform',
    title: 'Suzuki SQA Management',
    category: 'design',
    version: 'Live v3.2',
    date: 'Active Production',
    status: 'Live In Production',
    liveUrl: 'https://suzukisqamanagement.in/',
    summary: 'Live enterprise Supplier Quality Assurance (SQA) management platform connecting automotive component suppliers with quality assurance engineers for PCR change requests, vehicle quality tracking, and compliance verification.',
    impact: 'Deployed in production at suzukisqamanagement.in — automated multi-tier approval cycles and digital audit compliance.',
    tools: ['React', 'Enterprise SQA', 'SDLC', 'BPMN 2.0', 'Figma'],
    stakeholders: ['Suzuki SQA Leadership', 'Tier-1 Automotive Suppliers', 'Plant Quality Auditors'],
    highlights: [
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

  // 2. Live Mobile App Deliverable
  {
    id: 'gfl-cxo-app',
    title: 'GFL CXO Mobile App',
    category: 'design',
    version: 'Production Release',
    date: 'Active Production',
    status: 'Live on Google Play',
    liveUrl: 'https://play.google.com/store/apps/details?id=com.gfl.cxo&hl=en_IN',
    summary: 'Live enterprise mobile application deployed on Google Play Store for CXO-level executives, providing real-time business insights, approval workflows, and executive dashboards.',
    impact: 'Developed for C-level leadership to access real-time operational telemetry on mobile devices.',
    tools: ['React Native', 'Mobile SDLC', 'Executive Dashboards', 'Android'],
    stakeholders: ['CXO Executives', 'Business Leadership', 'Operations'],
    highlights: [
      'Optimized for mobile enterprise performance'
    ],
    sections: [
      {
        heading: '1. Executive Mobile App Overview',
        content: 'Active production mobile application deployed on the Google Play Store designed to digitize executive decision-making, operational oversight, and key performance metric tracking.'
      },
      {
        heading: '2. Technical BA Responsibilities',
        content: '• Authored mobile BRD, screen user flows, and wireframes for iOS & Android.\n• Coordinated API contract specifications with enterprise ERP backend teams.\n• Designed system workflows and user acceptance criteria (UAT) for mobile developers.'
      },
      {
        heading: '3. Core Application Capabilities',
        content: '• Real-time plant & operational KPI metrics tailored for executive decision-making.\n• 1-Click approval queues for high-value procurement requests and plant workflows.\n• Offline Capability: Cached data access for seamless executive travel.'
      }
    ]
  },

  // 3. BRD: Online Ringi System
  {
    id: 'brd-online-ringi',
    title: 'Online Ringi System BRD',
    category: 'brd',
    version: 'Final',
    date: '2026',
    status: 'Completed',
    fileType: 'pdf',
    fileUrl: 'brd/Sanitized - BRD - Online Ringi System.pdf',
    summary: 'Requirements for a digital Ringi (approval workflow) system, with automated reminder alerts and time-based escalation to senior management so approvals keep moving and every delay has an owner.',
    impact: 'Moved paper-based Ringi approvals online, adding accountability through reminders and escalation, and fast-tracking approvals.',
    tools: ['BRD', 'Workflow Analysis', 'Requirement Gathering', 'Process Modeling'],
    stakeholders: ['Internal Management', 'Department Heads', 'Process Owners'],
    highlights: [
      'Digital Ringi workflow implementation',
      'Approval routing and consensus tracking',
      'Automated reminder alerts for pending approvals',
      'Time-based escalation to senior management'
    ],
    sections: [
      {
        heading: '1. Overview',
        content: 'This BRD covers the digitization of the traditional Ringi approval process, focusing on seamless electronic document circulation, secure sign-offs, and consensus building among key stakeholders. Automated reminders and time-based escalation to senior management make sure no proposal stalls unnoticed.'
      }
    ]
  },

  // 4. Solution Proposal: PI DMS
  {
    id: 'solution-pi-dms',
    title: 'PI DMS Solution Proposal',
    category: 'solution',
    version: 'Final',
    date: '2026',
    status: 'Proposed',
    fileType: 'pdf',
    fileUrl: 'solution/Sanitized - Solution Proposal - PI DMS.pdf',
    summary: 'A comprehensive solution proposal for the PI Document Management System (DMS), outlining architecture, core features, and implementation strategy.',
    impact: 'Proposed a scalable document management architecture to improve enterprise content retrieval, version control, and compliance.',
    tools: ['Solution Architecture', 'DMS', 'Enterprise Content Management'],
    stakeholders: ['IT Leadership', 'Operations', 'Compliance Officers'],
    highlights: [
      'Proposed scalable Document Management System (DMS) architecture',
      'Secure document storage and compliance workflows'
    ],
    sections: [
      {
        heading: '1. Solution Overview',
        content: 'Detailed technical and functional proposal for implementing a centralized Document Management System (DMS) to handle secure document storage, advanced versioning, access control, and regulatory compliance.'
      }
    ]
  },

  // 5. Process Flow 1: PCR raised by Supplier
  {
    id: 'flow-pcr-supplier',
    title: 'PCR raised by Supplier',
    category: 'flow',
    project: 'Suzuki SQA',
    version: 'Approved Spec',
    date: 'Suzuki SQA System',
    status: 'Approved',
    fileType: 'image',
    fileUrl: 'processflows/pcr-raised-by-supplier.png',
    previewImage: 'processflows/thumbs/pcr-raised-by-supplier.jpg',
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

  // 6. Process Flow 2: Vehicle Inspection System
  {
    id: 'flow-vehicle-inspection',
    title: 'Vehicle Inspection System',
    category: 'flow',
    project: 'Suzuki SQA',
    version: 'Production Flow',
    date: 'Suzuki SQA System',
    status: 'Approved',
    fileType: 'image',
    fileUrl: 'processflows/vehicle-inspection-system.png',
    previewImage: 'processflows/thumbs/vehicle-inspection-system.jpg',
    summary: 'System process flow and interaction map for vehicle inspection, capturing quality checkpoint gateways, defect logging, and auditor sign-off sequences. The system now inspects 4,000+ vehicles a day.',
    impact: 'Used on every vehicle produced since go-live: 4,000+ vehicles inspected a day, with defects routed to rework in real time.',
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

  // 7. Process Flow 3: Die:Mould Duplication Process Flow
  {
    id: 'flow-die-mould',
    title: 'Die/Mould Duplication Process Flow',
    category: 'flow',
    project: 'Suzuki SQA',
    version: 'Approved Spec',
    date: 'Suzuki SQA System',
    status: 'Approved',
    fileType: 'image',
    fileUrl: 'processflows/die-mould-duplication-flow.png',
    previewImage: 'processflows/thumbs/die-mould-duplication-flow.jpg',
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
  }
];
