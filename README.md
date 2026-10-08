# Vibhor Portfolio • Technical Business Analyst Showcase
> **Prepared Exclusively for OrangeMantra** • Addressing the evaluation requirement for **Technical BA Documentation & AI-Assisted Prototyping**.

---

## 🌟 Executive Overview

This web application is a tailored evaluation portfolio showcasing real-world **Business Requirement Documents (BRDs)**, **BPMN Swimlane Process Flows**, **Technical Solution Proposals**, and **Website UI/UX Designs**.

Rather than sending static document attachments over email, this project was **rapidly engineered and deployed with the assistance of Generative AI in React & Vite**, directly addressing the interview requirement: *demonstrating the ability to bridge business requirements with execution by coding with AI*.

---

## 📁 Artifacts Included

1. **BRDs (Business Requirement Documents)**:
   - *Omnichannel Order & Inventory Sync Platform Spec (v2.4)*
   - *B2B Multi-Tenant Client Onboarding & Automated KYC Spec (v1.8)*
   - Features embedded PDF viewers, RACI matrices, user stories, and Gherkin BDD criteria.
2. **Process Flow**:
   - *End-to-End Order Fulfillment & Soft Inventory Reservation BPMN 2.0*
   - *OAuth 2.0 & Payment Webhook Reconciliation Sequence*
   - Features interactive vector zoom canvas, decision diamonds, and saga rollback flows.
3. **Solution Proposals**:
   - *Monolithic Decoupling into Event-Driven Microservices (Kong + Kafka + CDC)*
   - Covers problem statement, target architecture, phased Strangler Fig roadmap, and ROI metrics.
4. **Website Designs**:
   - *Nexus Enterprise Operations & SLA Analytics Dashboard*
   - Real-time telemetry, WCAG AAA accessibility, information architecture, and UI mockups.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Start local Vite development server
npm run dev

# 3. Open browser at http://localhost:5173
```

---

## 📄 How to Add Your Own Custom PDFs & Images

Adding your own documents is seamless:

1. **Place your PDF files**:
   Drop your `.pdf` files into the `public/artifacts/` folder (e.g., `public/artifacts/my-actual-brd.pdf`).
2. **Place your Diagrams / Mockup Images**:
   Drop your images/diagrams into the `public/images/` folder (PNG, JPG, or SVG).
3. **Update metadata in `src/data/artifacts.js`**:
   Edit or add entries in the `ARTIFACTS` array:
   ```javascript
   {
     id: 'my-custom-brd',
     title: 'My Custom Business Requirement Document',
     category: 'brd', // 'brd' | 'flow' | 'solution' | 'design'
     fileType: 'pdf', // 'pdf' or 'image'
     fileUrl: 'artifacts/my-actual-brd.pdf',
     previewImage: 'images/my-cover.png',
     summary: 'Summary of the requirements...',
     // ...
   }
   ```
4. **Update Personal Info**:
   Edit `PERSONAL_INFO` in `src/data/artifacts.js` (name, email, LinkedIn, stats, bio).

---

## 🌐 Deploying to GitHub Pages (2 Minutes)

### Option A: 1-Command Deploy via `gh-pages` (Easiest)

1. Create a repository on GitHub (e.g. `Vibhor-Portfolio` or `vibhor-portfolio`).
2. Initialize git and link your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of OrangeMantra Technical BA portfolio"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```
3. Deploy to GitHub Pages with one command:
   ```bash
   npm run deploy
   ```
4. In your GitHub repository:
   - Go to **Settings** > **Pages**.
   - Under **Build and deployment**, ensure **Source** is set to `Deploy from a branch` and branch is `gh-pages` / `/ (root)`.
   - Your live URL will be: `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>/`

### Option B: Automated GitHub Actions (Included)
The repository includes a pre-configured `.github/workflows/deploy.yml`. When you push to `main`, GitHub Actions will automatically build and deploy the site! Just enable **GitHub Actions** under **Settings > Pages > Source**.

---

## 🛠️ Technology Stack

- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS + Custom OrangeMantra color palette
- **Icons**: Lucide React
- **Viewer**: Native PDF Object Viewer + Vector SVG Zoom Canvas
- **Hosting**: GitHub Pages (Relative Base Path Configured)
- **Engineered With**: Google Antigravity & AI Pair Programming
