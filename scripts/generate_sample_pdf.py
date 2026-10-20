import os

def create_simple_pdf(filename, title, subtitle, author, sections):
    # Minimal valid multi-page PDF generator without third-party dependencies
    lines = []
    
    # We will build pages
    page_contents = []
    
    # Page 1: Cover & Overview
    c1 = []
    c1.append("BT /F1 22 Tf 50 740 Td (" + title + ") Tj ET")
    c1.append("BT /F2 13 Tf 50 715 Td (" + subtitle + ") Tj ET")
    c1.append("BT /F2 10 Tf 50 685 Td (Author: " + author + " | Technical BA Portfolio Spec) Tj ET")
    c1.append("BT /F2 10 Tf 50 670 Td (Status: Approved for Technical Evaluation | Version: 2.4) Tj ET")
    
    # Line divider
    c1.append("0.2 0.4 0.8 RG 2 w 50 655 m 550 655 l S")
    
    y = 620
    for sec_title, body_lines in sections[:3]:
        c1.append(f"BT /F1 14 Tf 50 {y} Td ({sec_title}) Tj ET")
        y -= 22
        for b in body_lines:
            c1.append(f"BT /F2 10 Tf 50 {y} Td ({b}) Tj ET")
            y -= 16
        y -= 15
    
    page_contents.append("\n".join(c1))
    
    # Page 2: Detailed specs
    c2 = []
    c2.append(f"BT /F1 16 Tf 50 740 Td ({title} - Detailed Specifications) Tj ET")
    c2.append("0.2 0.4 0.8 RG 1 w 50 725 m 550 725 l S")
    y = 690
    for sec_title, body_lines in sections[3:]:
        c2.append(f"BT /F1 13 Tf 50 {y} Td ({sec_title}) Tj ET")
        y -= 20
        for b in body_lines:
            c2.append(f"BT /F2 10 Tf 50 {y} Td ({b}) Tj ET")
            y -= 15
        y -= 15
    c2.append("BT /F2 9 Tf 50 50 Td (Vibhor - Technical Business Analyst Portfolio | Confidential) Tj ET")
    page_contents.append("\n".join(c2))

    # Assemble objects
    objects = []
    # 1: Catalog
    # 2: Pages
    # 3: Font F1 (Helvetica-Bold)
    # 4: Font F2 (Helvetica)
    # Then for each page: Page obj, Content stream obj
    
    num_pages = len(page_contents)
    page_obj_ids = [5 + i*2 for i in range(num_pages)]
    
    objects.append("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj")
    
    kids_str = " ".join([f"{pid} 0 R" for pid in page_obj_ids])
    objects.append(f"2 0 obj\n<< /Type /Pages /Kids [{kids_str}] /Count {num_pages} >>\nendobj")
    objects.append("3 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj")
    objects.append("4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj")
    
    for i, content in enumerate(page_contents):
        page_id = 5 + i*2
        content_id = 6 + i*2
        page_str = (
            f"{page_id} 0 obj\n"
            f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
            f"/Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> "
            f"/Contents {content_id} 0 R >>\n"
            f"endobj"
        )
        stream_bytes = content.encode('utf-8')
        content_str = (
            f"{content_id} 0 obj\n"
            f"<< /Length {len(stream_bytes)} >>\n"
            f"stream\n"
            f"{content}\n"
            f"endstream\n"
            f"endobj"
        )
        objects.append(page_str)
        objects.append(content_str)
        
    # Build file
    out = ["%PDF-1.4\n"]
    xref = [0]
    offset = len(out[0].encode('utf-8'))
    
    for obj in objects:
        xref.append(offset)
        out.append(obj + "\n")
        offset += len((obj + "\n").encode('utf-8'))
        
    xref_offset = offset
    out.append("xref\n")
    out.append(f"0 {len(xref)}\n")
    out.append("0000000000 65535 f \n")
    for off in xref[1:]:
        out.append(f"{off:010d} 00000 n \n")
        
    out.append("trailer\n")
    out.append(f"<< /Size {len(xref)} /Root 1 0 R >>\n")
    out.append("startxref\n")
    out.append(f"{xref_offset}\n")
    out.append("%%EOF\n")
    
    with open(filename, "wb") as f:
        f.write("".join(out).encode('utf-8'))
    print(f"Generated {filename}")

# Generate sample BRD
sections_brd = [
    ("1.0 Business Context and Executive Summary", [
        "This project establishes a unified Omnichannel Order Orchestration and Real-time",
        "Inventory Reconciliation Engine across e-commerce storefronts, mobile channels, and ERP.",
        "Expected outcome: 40% reduction in fulfillment latency, zero inventory drift, 99.98% sync SLA."
    ]),
    ("2.0 Stakeholders and RACI Matrix", [
        "Product Sponsor: VP of Retail Operations (Accountable)",
        "Technical BA: Vibhor (Responsible for requirements, specs, BDD criteria, and system flows)",
        "Engineering Lead: Chief Architect (Consulted on API contracts and microservice latency limits)",
        "QA and Compliance: Security & Regulatory Officer (Informed on tokenized payment PCI-DSS)"
    ]),
    ("3.0 Functional Scope and User Stories", [
        "FR-101 [Soft Reservation]: When a customer reaches step 2 of checkout, reserve SKU for 15 min.",
        "FR-102 [Distributed Concurrency]: Prevent overselling when concurrent checkouts exceed stock count.",
        "FR-103 [Payment Webhook Idempotency]: Handle duplicate payment notifications without double-charging.",
        "FR-104 [ERP Synchronization]: Push confirmed orders to SAP within 500ms via Kafka topic."
    ]),
    ("4.0 Non-Functional Requirements (NFRs)", [
        "NFR-01 Performance: P99 latency for stock reservation under 120ms during peak 50,000 RPM load.",
        "NFR-02 Availability: 99.99% high-availability multi-region active-active deployment on AWS.",
        "NFR-03 Security: Full end-to-end TLS 1.3 encryption, OAuth 2.0 JWT bearer tokens, and PCI-DSS compliance."
    ]),
    ("5.0 BDD Acceptance Criteria (Given-When-Then)", [
        "Scenario: Concurrent purchase of final inventory unit",
        "  Given SKU-1048 has an available stock quantity of 1",
        "  When User A and User B trigger checkout confirmation within 50ms",
        "  Then User A acquires the distributed Redis lock and receives Order Confirmation",
        "  And User B receives an out-of-stock notification with an alternative recommendation."
    ])
]

os.makedirs("public/artifacts", exist_ok=True)
create_simple_pdf(
    "public/artifacts/brd-omnichannel-platform.pdf",
    "BRD: Omnichannel Order & Inventory Platform",
    "Business Requirement Document - Enterprise Spec v2.4",
    "Vibhor",
    sections_brd
)

# Generate sample Solution Proposal PDF
sections_proposal = [
    ("1.0 Problem Statement & Architecture Bottlenecks", [
        "The legacy monolithic e-commerce application experiences thread pool exhaustion during flash sales,",
        "cascading database lockups, and tight coupling preventing independent team deployments.",
        "Proposed solution: Event-driven microservices architecture leveraging Apache Kafka and Kong Gateway."
    ]),
    ("2.0 Proposed Target State Architecture", [
        "Edge Tier: Cloudflare CDN and Kong API Gateway handling rate limiting, WAF, and SSL offloading.",
        "Application Core: Independent containerized services (Order, Inventory, Customer, Notifications).",
        "Data Tier: Polyglot persistence (PostgreSQL for transactions, Redis for locks, Elastic for search).",
        "Event Streaming: Kafka distributed log for decoupled asynchronous event propagation."
    ]),
    ("3.0 Phased Implementation Roadmap", [
        "Phase 1 (Weeks 1-4): Implement API Gateway and Strangler Fig proxy layer around the monolith.",
        "Phase 2 (Weeks 5-8): Decouple Order & Inventory into microservices with Kafka CDC pipeline.",
        "Phase 3 (Weeks 9-12): Implement OAuth 2.0 Identity Provider and decommission legacy monolith."
    ]),
    ("4.0 Cost-Benefit & ROI Analysis", [
        "Infrastructure cost optimization: 28% reduction in over-provisioned idle compute servers.",
        "Operational efficiency: Mean-time-to-resolution (MTTR) reduced from 4 hours to under 15 minutes.",
        "Deployment frequency: Increased from bi-weekly release windows to on-demand continuous deployment."
    ])
]

create_simple_pdf(
    "public/artifacts/solution-proposal-microservices.pdf",
    "Solution Proposal: Microservices Migration",
    "Technical Architecture & Modernization Blueprint",
    "Vibhor",
    sections_proposal
)
