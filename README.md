# 🏛️ CivicPortal: Next.js + Firebase Citizen Engagement Platform

**CivicPortal** is a high-performance, real-time digital solution designed to streamline citizen-government interactions. Built with **Next.js 14** and **Firebase**, the platform provides a seamless experience for reporting civic issues and enables administrative oversight through a centralized **DC Dashboard**.

---

## 🌟 Key Features

### **For Citizens**
*   **Instant Complaint Filing:** Submit civic grievances (Electricity, Water, Roads) with a modern, mobile-responsive UI.
*   **Real-Time Tracking:** Monitor the status of reports from "Pending" to "Resolved" without refreshing the page.
*   **Secure Auth:** Protected user sessions and data privacy powered by Firebase Authentication.

### **For Administrators (DC & Department Dashboards)**
*   **Live Notification Center:** A persistent "Bell Icon" that alerts officials to new, unread complaints using Firestore listeners.
*   **Centralized Control Room:** A high-level overview for District Collectors to monitor city-wide progress.
*   **Department-wise Analytics:** Specialized views for departments (e.g., Electricity) to manage and resolve localized issues.
*   **AI-Ready Infrastructure:** Dedicated architecture for future integration of automated complaint routing.

---

## 🛠️ Tech Stack

*   **Framework:** Next.js 14+ (App Router)
*   **Styling:** Tailwind CSS & Shadcn/UI
*   **Icons:** Lucide-React
*   **Backend & Database:** Firebase
    *   **Firestore:** NoSQL real-time database for complaint logs.
    *   **Authentication:** Identity management for citizens and admins.
*   **Development Environment:** Google Project IDX

---

## 📂 Project Structure

Matching the current repository architecture:

```text
CivicPortal/
├── .idx/                  # Google IDX configuration
├── docs/                  # Project documentation & design assets
├── src/                   
│   ├── ai/                # AI logic & automated routing scripts
│   ├── app/               # Next.js App Router (Pages, Layouts, APIs)
│   ├── components/        # Reusable UI (Dashboards, Bell Icon, Forms)
│   ├── firebase/          # Firebase SDK initialization & config
│   ├── hooks/             # Custom React hooks for Firebase data fetching
│   └── lib/               # Utility functions & shared constants
├── DEPLOYMENT.md          # Production setup instructions
├── .firebaserc            # Firebase environment configuration
└── .gitignore             # Git exclusion rules
