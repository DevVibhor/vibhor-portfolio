# Vibhor Portfolio • Technical Business Analyst Showcase
> An interactive web portfolio showcasing real-world **Business Requirement Documents (BRDs)**, **BPMN 2.0 Process Flows**, **Technical Solution Architecture Proposals**, and **Live Enterprise Client Platforms**.

---

## 🌟 Executive Overview

This modern web application showcases end-to-end deliverables across the software development lifecycle (SDLC). Rather than distributing static PDF or Word attachments, this portfolio offers an interactive, accessible platform with embedded document viewers, zoomable vector workflow canvases, and direct links to live production systems.

### Key Capabilities & Highlights
- **Live Client Platforms**: Direct links to production platforms (e.g., Suzuki SQA Management system, GFL CXO Mobile App).
- **Interactive BPMN 2.0 Flows**: High-resolution process change request workflows and vehicle inspection gateways with interactive zoom controls.
- **Embedded Document Viewer**: In-browser inspection of sanitized BRDs and Solution Proposals with native PDF viewing and direct download options.
- **Dynamic Dark & Light Themes**: Accessible theme switcher with automatic system preference detection and local persistence.
- **Modern Responsive Design**: Engineered with React, Vite, and Tailwind CSS.

---

## 📁 Artifacts & Deliverables Included

1. **Live Production Platforms**:
   - *Suzuki SQA Management Platform* (`suzukisqamanagement.in`) — Enterprise supplier quality assurance and process change tracking.
   - *GFL CXO Mobile Application* — Executive mobile operations dashboard on Google Play Store.
2. **BPMN 2.0 Process Flows**:
   - *PCR Raised by Supplier* — Multi-tier supplier change request lifecycle with validation gateways.
   - *Vehicle Inspection System* — Assembly line defect routing and quality assurance checkpoints.
   - *Die / Mould Duplication Flow* — Tooling verification, dimensional tolerance inspections, and production clearance.
3. **Business Requirement Documents (BRDs)**:
   - *Online Ringi System BRD* — Enterprise proposal circulation, approval routing, and consensus tracking.
4. **Technical Solution Proposals**:
   - *PI DMS Solution Proposal* — Centralized Document Management System architecture, security compliance, and versioning.

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

## 🎨 Theme Configuration

The portfolio uses an executive **Modern Slate & Tech Indigo** palette with full **Light and Dark mode** support:
- Users can toggle themes seamlessly using the Sun/Moon toggle in the header navigation.
- Preferences are automatically persisted across sessions in `localStorage`.
- Initial load honors the visitor's operating system preference (`prefers-color-scheme`).

---

## 🌐 Deploying to GitHub Pages

### Option A: 1-Command Deploy via `gh-pages`

```bash
# Build and deploy automatically to gh-pages branch
npm run deploy
```

In your GitHub repository:
1. Navigate to **Settings** > **Pages**.
2. Under **Build and deployment**, ensure **Source** is set to `Deploy from a branch` and branch is `gh-pages` / `/ (root)`.
3. Your live URL will be active at: `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>/`

### Option B: Automated GitHub Actions
The repository includes a pre-configured `.github/workflows/deploy.yml`. Pushing to the `main` branch automatically triggers GitHub Actions to build and publish the site.

---

## 🛠️ Technology Stack

- **Framework**: React 18 + Vite 5
- **Styling**: Tailwind CSS (with `class` dark mode support & custom scrollbars)
- **Icons**: Lucide React
- **Viewer**: Native PDF Object Viewer + Vector Canvas Zoom Controls
- **Hosting**: GitHub Pages (Zero-Config Relative Base Path)
