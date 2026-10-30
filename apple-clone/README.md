# 🍎 Apple Website Clone (Static UI)

**A component-based practice project to replicate the Apple homepage UI.**

---

## 🚀 Project Overview

The goal of this project is to achieve a **pixel-perfect visual clone** of the official Apple website (e.g., `https://www.apple.com/in/`) using React's component architecture.

**Key Focus:** Component structure, styling, and responsiveness.
**Note:** This is a **static UI clone** and does not include any dynamic functionality, state management, or backend logic.

---

## 🛠️ Tech Stack

| Technology | Role |
| :--- | :--- |
| **React.js** | Core library for building the user interface. |
| **Vite** / **CRA** | Project scaffolding and development environment. |
| **Tailwind CSS** / **Styled-Components** | CSS framework/library for fast, consistent, and modular styling. |

---

## ✨ Component Architecture

The design is broken down into highly reusable and distinct components to mirror the original site's structure:

| Component | Description | Key Styling Areas |
| :--- | :--- | :--- |
| **`Nav`** | The fixed navigation bar with the logo, links, search, and bag icons. | Iconography, subtle transparency, and micro-typography. |
| **`Hero`** | The main introductory promotional section. | Responsive image handling, precise heading and sub-heading typography. |
| **`Section`** | Reusable card/block for product promotions or service highlights. | Grid layouts (1x1, 1x2), background images, and text positioning. |
| **`Button`** | A highly reusable component for all calls-to-action (e.g., "Learn more", "Buy"). | Consistent padding, color, font weight, and hover effects. |
| **`Footer`** | The complete footer, including the disclaimer, legal links, and nested navigation columns. | Complex flex/grid layout and managing small, detailed text hierarchy. |

---

## ⚙️ Installation and Setup

Follow these steps to get a local copy of the project running:

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPO_URL]
    cd apple-website-clone
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

Open your browser to the URL provided by the console (usually `http://localhost:5173`) to view the clone.

---
