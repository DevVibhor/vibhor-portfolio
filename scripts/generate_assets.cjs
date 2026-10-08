const fs = require('fs');
const path = require('path');

const publicImgDir = path.join(__dirname, '..', 'public', 'images');
const publicArtDir = path.join(__dirname, '..', 'public', 'artifacts');

if (!fs.existsSync(publicImgDir)) fs.mkdirSync(publicImgDir, { recursive: true });
if (!fs.existsSync(publicArtDir)) fs.mkdirSync(publicArtDir, { recursive: true });

// 1. Process Flow SVG
const processFlowSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b132b"/>
      <stop offset="100%" stop-color="#1c2541"/>
    </linearGradient>
    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff5e14"/>
      <stop offset="100%" stop-color="#f97316"/>
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="6" flood-color="#000" flood-opacity="0.4"/>
    </filter>
  </defs>

  <rect width="1200" height="680" fill="url(#bgGrad)" rx="16"/>
  <rect x="20" y="20" width="1160" height="640" fill="none" stroke="#334155" stroke-dasharray="6,6" rx="12"/>

  <!-- Header -->
  <text x="50" y="70" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="24" font-weight="700">Order Fulfillment &amp; Inventory Synchronization Engine</text>
  <text x="50" y="98" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="14">End-to-End BPMN 2.0 Process Flow • Technical Business Analyst Architecture Map</text>
  
  <rect x="1000" y="48" width="150" height="32" rx="16" fill="url(#orangeGrad)"/>
  <text x="1075" y="69" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">ACTIVE SPEC v2.4</text>

  <!-- Swimlanes -->
  <!-- Lane 1: Customer / Web Client -->
  <rect x="50" y="130" width="1100" height="110" rx="8" fill="#111c38" stroke="#1e293b" stroke-width="1.5"/>
  <text x="70" y="160" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="700">LANE 1: CLIENT / FRONTEND APPLICATION</text>

  <!-- Lane 2: API Gateway & Orchestrator -->
  <rect x="50" y="260" width="1100" height="150" rx="8" fill="#132142" stroke="#1e293b" stroke-width="1.5"/>
  <text x="70" y="290" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="13" font-weight="700">LANE 2: API GATEWAY &amp; ORDER ORCHESTRATION SERVICE</text>

  <!-- Lane 3: ERP, Payment & Warehouse -->
  <rect x="50" y="430" width="1100" height="180" rx="8" fill="#0f1933" stroke="#1e293b" stroke-width="1.5"/>
  <text x="70" y="460" fill="#10b981" font-family="system-ui, sans-serif" font-size="13" font-weight="700">LANE 3: ERP / INVENTORY CORE &amp; PAYMENT GATEWAYS</text>

  <!-- Step 1: User Cart Checkout -->
  <g filter="url(#shadow)">
    <rect x="90" y="165" width="160" height="60" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="170" y="195" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">1. User Submits</text>
    <text x="170" y="213" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Cart Checkout</text>
  </g>

  <!-- Flow Arrow 1 to 2 -->
  <path d="M 250 195 L 320 195 L 320 300 L 350 300" fill="none" stroke="#60a5fa" stroke-width="2.5" marker-end="url(#arrow)"/>

  <!-- Step 2: Validate Stock Reservation -->
  <g filter="url(#shadow)">
    <rect x="350" y="280" width="180" height="70" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="440" y="310" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">2. Real-time Inventory</text>
    <text x="440" y="330" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Lock &amp; Soft Reservation</text>
  </g>

  <!-- Flow Arrow to ERP -->
  <path d="M 440 350 L 440 470" fill="none" stroke="#f59e0b" stroke-width="2.5"/>

  <!-- Step 3: ERP Warehouse Check -->
  <g filter="url(#shadow)">
    <rect x="350" y="470" width="180" height="70" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="440" y="502" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">3. ERP Stock Ledger</text>
    <text x="440" y="522" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Audit &amp; Location Allocation</text>
  </g>

  <!-- Step 4: Decision Diamond: Stock Available? -->
  <g filter="url(#shadow)">
    <polygon points="630,285 700,315 630,345 560,315" fill="#1e293b" stroke="#ff5e14" stroke-width="2"/>
    <text x="630" y="313" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Stock</text>
    <text x="630" y="325" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle">Available?</text>
  </g>
  <path d="M 530 315 L 560 315" fill="none" stroke="#f59e0b" stroke-width="2.5"/>

  <!-- Decision Branch No: Release & Return error -->
  <path d="M 630 285 L 630 200 L 250 200" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="635" y="240" fill="#ef4444" font-family="system-ui, sans-serif" font-size="10" font-weight="700">[No: Out of Stock]</text>

  <!-- Decision Branch Yes: Execute Payment Capture -->
  <path d="M 700 315 L 750 315 L 750 470" fill="none" stroke="#22c55e" stroke-width="2.5"/>
  <text x="708" y="305" fill="#22c55e" font-family="system-ui, sans-serif" font-size="11" font-weight="700">[Yes]</text>

  <!-- Step 5: Payment Processing & 3DS -->
  <g filter="url(#shadow)">
    <rect x="670" y="470" width="180" height="70" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="760" y="502" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">4. Payment Gateway</text>
    <text x="760" y="522" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Tokenized 3DS Authorize</text>
  </g>

  <!-- Step 6: Confirmation & Webhook Dispatches -->
  <path d="M 850 505 L 910 505 L 910 350 L 930 350" fill="none" stroke="#10b981" stroke-width="2.5"/>

  <g filter="url(#shadow)">
    <rect x="930" y="300" width="200" height="90" rx="10" fill="#1e293b" stroke="#ff5e14" stroke-width="2"/>
    <text x="1030" y="330" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">5. Order Finalized</text>
    <text x="1030" y="350" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">• Kafka Event Published</text>
    <text x="1030" y="368" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">• WMS Warehouse Pick-pack</text>
  </g>

  <!-- Step 7: Push to Client -->
  <path d="M 1030 300 L 1030 195 L 250 195" fill="none" stroke="#22c55e" stroke-width="2" stroke-dasharray="4,4"/>
  <rect x="940" y="165" width="180" height="60" rx="10" fill="#1e293b" stroke="#22c55e" stroke-width="2"/>
  <text x="1030" y="195" fill="#22c55e" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">Order Success Page</text>
  <text x="1030" y="213" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Immediate confirmation</text>

  <!-- Footer note -->
  <rect x="50" y="625" width="1100" height="30" rx="6" fill="#0b132b"/>
  <text x="600" y="645" fill="#64748b" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">Designed with BPMN Standards • Covers Idempotency, Concurrency Locks, and Graceful Degraded Mode</text>
</svg>`;

// 2. Solution Architecture SVG
const solutionArchSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0f1d"/>
      <stop offset="100%" stop-color="#141e33"/>
    </linearGradient>
    <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#2563eb"/>
    </linearGradient>
    <linearGradient id="omGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff5e14"/>
      <stop offset="100%" stop-color="#f97316"/>
    </linearGradient>
    <filter id="shadow2" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="5" flood-color="#000" flood-opacity="0.5"/>
    </filter>
  </defs>

  <rect width="1200" height="680" fill="url(#bgGrad2)" rx="16"/>
  <rect x="20" y="20" width="1160" height="640" fill="none" stroke="#334155" stroke-dasharray="6,6" rx="12"/>

  <!-- Title -->
  <text x="50" y="70" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="24" font-weight="700">Target State Solution Architecture: Microservices Transition</text>
  <text x="50" y="98" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="14">Technical Business Analyst Proposal: Monolith Decoupling &amp; Cloud-Native Event Bus</text>

  <!-- Tag -->
  <rect x="980" y="48" width="170" height="32" rx="16" fill="url(#omGrad)"/>
  <text x="1065" y="69" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="700" text-anchor="middle">PROPOSAL TARGET v3</text>

  <!-- Layer 1: Access & Channels -->
  <rect x="60" y="130" width="220" height="490" rx="12" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
  <text x="170" y="165" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="700" text-anchor="middle">1. Client Tier</text>

  <g filter="url(#shadow2)">
    <rect x="80" y="190" width="180" height="65" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="170" y="222" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">React Single Page App</text>
    <text x="170" y="240" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Responsive Web Client</text>

    <rect x="80" y="280" width="180" height="65" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="170" y="312" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">Mobile iOS / Android</text>
    <text x="170" y="330" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Native App Gateway</text>

    <rect x="80" y="370" width="180" height="65" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="170" y="402" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">Partner B2B Portal</text>
    <text x="170" y="420" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">OpenAPI / Webhooks</text>

    <rect x="80" y="460" width="180" height="65" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="170" y="492" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">Admin &amp; Back-Office</text>
    <text x="170" y="510" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Operations Console</text>
  </g>

  <!-- Layer 2: API Gateway & Security -->
  <rect x="310" y="130" width="200" height="490" rx="12" fill="#111c38" stroke="#334155" stroke-width="1.5"/>
  <text x="410" y="165" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="15" font-weight="700" text-anchor="middle">2. API Gateway &amp; Auth</text>

  <g filter="url(#shadow2)">
    <rect x="325" y="200" width="170" height="120" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="410" y="235" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">Kong API Gateway</text>
    <text x="410" y="260" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">• Rate Limiting</text>
    <text x="410" y="280" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">• TLS Termination</text>
    <text x="410" y="300" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">• CORS &amp; Routing</text>

    <rect x="325" y="350" width="170" height="110" rx="10" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="410" y="385" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">Identity Provider</text>
    <text x="410" y="410" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Keycloak / OAuth2</text>
    <text x="410" y="430" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">JWT Token Claims</text>
  </g>

  <!-- Connectors 1 to 2 -->
  <line x1="280" y1="220" x2="325" y2="240" stroke="#60a5fa" stroke-width="2"/>
  <line x1="280" y1="310" x2="325" y2="260" stroke="#60a5fa" stroke-width="2"/>
  <line x1="280" y1="400" x2="325" y2="280" stroke="#60a5fa" stroke-width="2"/>

  <!-- Layer 3: Microservices Domain -->
  <rect x="540" y="130" width="310" height="490" rx="12" fill="#0f1933" stroke="#334155" stroke-width="1.5"/>
  <text x="695" y="165" fill="#10b981" font-family="system-ui, sans-serif" font-size="15" font-weight="700" text-anchor="middle">3. Microservices Core</text>

  <g filter="url(#shadow2)">
    <rect x="560" y="195" width="270" height="60" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
    <text x="695" y="225" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">User &amp; Organization Service</text>
    <text x="695" y="242" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">PostgreSQL • Domain Driven Design</text>

    <rect x="560" y="275" width="270" height="60" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
    <text x="695" y="305" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">Order &amp; Billing Engine</text>
    <text x="695" y="322" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Transactional Outbox • Redis Cache</text>

    <rect x="560" y="355" width="270" height="60" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
    <text x="695" y="385" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">Catalog &amp; Search Service</text>
    <text x="695" y="402" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Elasticsearch / MongoDB Clusters</text>

    <rect x="560" y="435" width="270" height="60" rx="8" fill="#1e293b" stroke="#ff5e14" stroke-width="2"/>
    <text x="695" y="465" fill="#ff5e14" font-family="system-ui, sans-serif" font-size="13" font-weight="700" text-anchor="middle">Notification &amp; Webhook Hub</text>
    <text x="695" y="482" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Async Delivery • Retry DLQ</text>
  </g>

  <!-- Layer 4: Event Bus & Enterprise Data -->
  <rect x="880" y="130" width="260" height="490" rx="12" fill="#111c38" stroke="#334155" stroke-width="1.5"/>
  <text x="1010" y="165" fill="#ff5e14" font-family="system-ui, sans-serif" font-size="15" font-weight="700" text-anchor="middle">4. Event Bus &amp; Integration</text>

  <g filter="url(#shadow2)">
    <rect x="900" y="210" width="220" height="90" rx="10" fill="#1e293b" stroke="#ff5e14" stroke-width="2"/>
    <text x="1010" y="245" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="700" text-anchor="middle">Apache Kafka Event Bus</text>
    <text x="1010" y="270" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Partitioned Topics &amp; Schemas</text>
    <text x="1010" y="288" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Guaranteed Delivery</text>

    <rect x="900" y="340" width="220" height="80" rx="10" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
    <text x="1010" y="375" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">Snowflake / Data Lake</text>
    <text x="1010" y="398" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">BI Analytics &amp; Reporting</text>

    <rect x="900" y="450" width="220" height="80" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
    <text x="1010" y="485" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="600" text-anchor="middle">Legacy SAP / ERP Sync</text>
    <text x="1010" y="508" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">CDC Debezium Connectors</text>
  </g>

  <!-- Connectors -->
  <line x1="495" y1="260" x2="560" y2="230" stroke="#f59e0b" stroke-width="2"/>
  <line x1="495" y1="260" x2="560" y2="300" stroke="#f59e0b" stroke-width="2"/>
  <line x1="495" y1="260" x2="560" y2="380" stroke="#f59e0b" stroke-width="2"/>

  <line x1="830" y1="300" x2="900" y2="255" stroke="#10b981" stroke-width="2"/>
  <line x1="830" y1="465" x2="900" y2="265" stroke="#ff5e14" stroke-width="2"/>
  <line x1="1010" y1="300" x2="1010" y2="340" stroke="#ff5e14" stroke-width="2"/>
  <line x1="1010" y1="300" x2="1010" y2="450" stroke="#ff5e14" stroke-width="2"/>
</svg>`;

// 3. Website Design UI Mockup SVG
const websiteDesignDashboardSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" width="100%" height="100%">
  <defs>
    <linearGradient id="bgUI" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0e1726"/>
      <stop offset="100%" stop-color="#1b2a47"/>
    </linearGradient>
    <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ff5e14" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="#ff5e14" stop-opacity="0.0"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="700" fill="url(#bgUI)" rx="16"/>

  <!-- Top App Navigation -->
  <rect x="0" y="0" width="1200" height="64" fill="#0b132b" stroke-bottom="#334155"/>
  <circle cx="36" cy="32" r="14" fill="#ff5e14"/>
  <text x="60" y="38" fill="#ffffff" font-family="system-ui, sans-serif" font-size="16" font-weight="800">NEXUS ENTERPRISE</text>
  <rect x="240" y="18" width="280" height="30" rx="15" fill="#1e293b" stroke="#334155"/>
  <text x="260" y="38" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Search orders, clients, tickets...</text>

  <rect x="1040" y="18" width="120" height="30" rx="6" fill="#ff5e14"/>
  <text x="1100" y="38" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="600" text-anchor="middle">+ New Order</text>

  <!-- Sidebar -->
  <rect x="0" y="64" width="220" height="636" fill="#0b132b"/>
  <rect x="15" y="85" width="190" height="40" rx="8" fill="#ff5e14" fill-opacity="0.15" stroke="#ff5e14" stroke-width="1.5"/>
  <text x="45" y="110" fill="#ff5e14" font-family="system-ui, sans-serif" font-size="13" font-weight="700">Executive Dashboard</text>
  <text x="45" y="160" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">Inventory Matrix</text>
  <text x="45" y="205" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">Fulfillment Queue</text>
  <text x="45" y="250" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">B2B Customers</text>
  <text x="45" y="295" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">API Webhook Logs</text>
  <text x="45" y="340" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">System Settings</text>

  <!-- Main Content Area -->
  <text x="250" y="110" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="20" font-weight="700">Enterprise Operations Overview</text>
  <text x="250" y="132" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">Live KPI Metrics &amp; Real-time Throughput Stream</text>

  <!-- Stat Cards -->
  <rect x="250" y="155" width="210" height="95" rx="10" fill="#132142" stroke="#334155"/>
  <text x="270" y="185" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Daily Order Volume</text>
  <text x="270" y="222" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="24" font-weight="800">42,850</text>
  <text x="390" y="222" fill="#22c55e" font-family="system-ui, sans-serif" font-size="12" font-weight="700">+14.2%</text>

  <rect x="480" y="155" width="210" height="95" rx="10" fill="#132142" stroke="#334155"/>
  <text x="500" y="185" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Reconciliation Rate</text>
  <text x="500" y="222" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="24" font-weight="800">99.98%</text>
  <text x="620" y="222" fill="#22c55e" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Healthy</text>

  <rect x="710" y="155" width="210" height="95" rx="10" fill="#132142" stroke="#334155"/>
  <text x="730" y="185" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Avg Processing Latency</text>
  <text x="730" y="222" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="24" font-weight="800">112 ms</text>
  <text x="850" y="222" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="700">-24ms</text>

  <rect x="940" y="155" width="220" height="95" rx="10" fill="#132142" stroke="#334155"/>
  <text x="960" y="185" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">DLQ Error Backlog</text>
  <text x="960" y="222" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="24" font-weight="800">0</text>
  <text x="1080" y="222" fill="#22c55e" font-family="system-ui, sans-serif" font-size="12" font-weight="700">Zero errors</text>

  <!-- Big Chart Panel -->
  <rect x="250" y="270" width="670" height="240" rx="12" fill="#101932" stroke="#334155"/>
  <text x="275" y="305" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="15" font-weight="700">Real-time Order Processing Throughput (24h)</text>
  
  <path d="M 280 460 Q 350 430, 420 400 T 560 380 T 700 340 T 820 320 L 890 310 L 890 470 L 280 470 Z" fill="url(#chartGrad)"/>
  <path d="M 280 460 Q 350 430, 420 400 T 560 380 T 700 340 T 820 320 L 890 310" fill="none" stroke="#ff5e14" stroke-width="3"/>

  <!-- Right Panel: Live Feed -->
  <rect x="940" y="270" width="220" height="390" rx="12" fill="#101932" stroke="#334155"/>
  <text x="960" y="305" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Recent Webhooks</text>
  
  <rect x="955" y="330" width="190" height="55" rx="8" fill="#1e293b"/>
  <text x="970" y="352" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="700">#ORD-98402 COMPLETED</text>
  <text x="970" y="370" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Captured $349.00 • 2s ago</text>

  <rect x="955" y="395" width="190" height="55" rx="8" fill="#1e293b"/>
  <text x="970" y="417" fill="#10b981" font-family="system-ui, sans-serif" font-size="11" font-weight="700">INVENTORY SYNC SUCCESS</text>
  <text x="970" y="435" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">SKU-29831 updated • 14s ago</text>

  <rect x="955" y="460" width="190" height="55" rx="8" fill="#1e293b"/>
  <text x="970" y="482" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="11" font-weight="700">KYC VERIFIED</text>
  <text x="970" y="500" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="10">Org ID #ORG-481 • 45s ago</text>

  <!-- Bottom Table Panel -->
  <rect x="250" y="525" width="670" height="135" rx="12" fill="#101932" stroke="#334155"/>
  <text x="275" y="555" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="14" font-weight="700">Active Service Level Agreements (SLAs)</text>
  <rect x="275" y="575" width="620" height="28" rx="6" fill="#1e293b"/>
  <text x="290" y="594" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">Payment Auth Latency (&lt; 250ms)</text>
  <text x="830" y="594" fill="#22c55e" font-family="system-ui, sans-serif" font-size="12" font-weight="700">99.99% Met</text>

  <rect x="275" y="612" width="620" height="28" rx="6" fill="#1e293b"/>
  <text x="290" y="631" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">Order Dispatch to ERP Queue (&lt; 500ms)</text>
  <text x="830" y="631" fill="#22c55e" font-family="system-ui, sans-serif" font-size="12" font-weight="700">100% Met</text>
</svg>`;

// 4. BRD Cover SVG
const brdCoverSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" width="100%" height="100%">
  <defs>
    <linearGradient id="coverBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b132b"/>
      <stop offset="100%" stop-color="#1c2541"/>
    </linearGradient>
    <linearGradient id="accentOrange" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ff5e14"/>
      <stop offset="100%" stop-color="#f97316"/>
    </linearGradient>
  </defs>

  <rect width="800" height="1000" fill="url(#coverBg)"/>
  
  <!-- Left accent bar -->
  <rect x="0" y="0" width="16" height="1000" fill="url(#accentOrange)"/>
  
  <!-- OrangeMantra Badge -->
  <rect x="60" y="60" width="300" height="36" rx="18" fill="#1e293b" stroke="#ff5e14" stroke-width="1.5"/>
  <circle cx="80" cy="78" r="6" fill="#ff5e14"/>
  <text x="96" y="83" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="700">ORANGEMANTRA CANDIDATE SUBMISSION</text>

  <!-- Header Category -->
  <text x="60" y="160" fill="#ff5e14" font-family="system-ui, sans-serif" font-size="14" font-weight="800" letter-spacing="2">BUSINESS REQUIREMENT DOCUMENT (BRD)</text>
  
  <!-- Document Title -->
  <text x="60" y="220" fill="#ffffff" font-family="system-ui, sans-serif" font-size="34" font-weight="800">Omnichannel Order &amp;</text>
  <text x="60" y="265" fill="#ffffff" font-family="system-ui, sans-serif" font-size="34" font-weight="800">Inventory Sync Platform</text>
  
  <!-- Subtitle -->
  <text x="60" y="315" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="16">Enterprise Specification &amp; Technical Requirements Specification v2.4</text>
  
  <line x1="60" y1="360" x2="740" y2="360" stroke="#334155" stroke-width="2"/>

  <!-- Metadata Table -->
  <text x="60" y="410" fill="#64748b" font-family="system-ui, sans-serif" font-size="12" font-weight="700">AUTHOR / TECHNICAL BA</text>
  <text x="60" y="435" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="16" font-weight="600">Vibhor</text>

  <text x="320" y="410" fill="#64748b" font-family="system-ui, sans-serif" font-size="12" font-weight="700">TARGET AUDIENCE</text>
  <text x="320" y="435" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="16" font-weight="600">OrangeMantra Technical Leadership</text>

  <text x="60" y="490" fill="#64748b" font-family="system-ui, sans-serif" font-size="12" font-weight="700">METHODOLOGY</text>
  <text x="60" y="515" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="16" font-weight="600">Agile / Scrum with User Stories &amp; Gherkin BDD</text>

  <text x="320" y="490" fill="#64748b" font-family="system-ui, sans-serif" font-size="12" font-weight="700">STATUS &amp; CONFIDENTIALITY</text>
  <text x="320" y="515" fill="#22c55e" font-family="system-ui, sans-serif" font-size="16" font-weight="600">Approved for Evaluation</text>

  <!-- Table of Contents Preview -->
  <rect x="60" y="570" width="680" height="340" rx="12" fill="#132142" stroke="#334155"/>
  <text x="90" y="615" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="16" font-weight="700">Table of Contents &amp; Scope Overview</text>
  
  <text x="90" y="660" fill="#ff5e14" font-family="system-ui, sans-serif" font-size="14" font-weight="600">1. Executive Summary &amp; Business Objectives</text>
  <text x="680" y="660" fill="#64748b" font-family="system-ui, sans-serif" font-size="13" text-anchor="end">Section 1.0</text>

  <text x="90" y="700" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="14">2. Stakeholder RACI Matrix &amp; User Personas</text>
  <text x="680" y="700" fill="#64748b" font-family="system-ui, sans-serif" font-size="13" text-anchor="end">Section 2.0</text>

  <text x="90" y="740" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="14">3. Scope Definition: In-Scope vs. Out-of-Scope</text>
  <text x="680" y="740" fill="#64748b" font-family="system-ui, sans-serif" font-size="13" text-anchor="end">Section 3.0</text>

  <text x="90" y="780" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="14">4. Functional Specifications &amp; Epics (FR-101 to FR-185)</text>
  <text x="680" y="780" fill="#64748b" font-family="system-ui, sans-serif" font-size="13" text-anchor="end">Section 4.0</text>

  <text x="90" y="820" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="14">5. Non-Functional Requirements (NFRs: Latency, Security, SLAs)</text>
  <text x="680" y="820" fill="#64748b" font-family="system-ui, sans-serif" font-size="13" text-anchor="end">Section 5.0</text>

  <text x="90" y="860" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="14">6. Acceptance Criteria (BDD Given-When-Then Format)</text>
  <text x="680" y="860" fill="#64748b" font-family="system-ui, sans-serif" font-size="13" text-anchor="end">Section 6.0</text>

  <!-- Footer -->
  <text x="60" y="950" fill="#475569" font-family="system-ui, sans-serif" font-size="12">Authored for Technical BA Showcase • Live interactive spec available in portfolio</text>
</svg>`;

// Write all images
fs.writeFileSync(path.join(publicImgDir, 'process-flow-order-engine.svg'), processFlowSvg);
fs.writeFileSync(path.join(publicImgDir, 'solution-arch-diagram.svg'), solutionArchSvg);
fs.writeFileSync(path.join(publicImgDir, 'website-design-dashboard.svg'), websiteDesignDashboardSvg);
fs.writeFileSync(path.join(publicImgDir, 'brd-cover-1.svg'), brdCoverSvg);

console.log('Successfully generated SVGs in public/images');
