# 🌱 Life Dashboards

A modular React + Tailwind web app for visualising the **seven core domains of life**:

| Domain | Emoji | Color |
|--------|-------|-------|
| Physical Vitality            | 💪 | Red   |
| Mental & Cognitive Mastery   | 🧠 | Blue  |
| Emotional Resilience         | 💟 | Pink  |
| Purpose & Spiritual Connection | 🛐 | Purple|
| Relational Wealth            | 👥 | Green |
| Financial Well-Being         | 💸 | Amber |
| Lifestyle Architecture       | 🏛️ | Indigo|

Each domain has its own dashboard tab with reusable metric cards and Chart.js visualisations, fed today by mock data and tomorrow by your data stack (Supabase, GraphQL, REST—your choice).

---

## 📦 Tech Stack

| Layer          | Choice | Why |
|----------------|--------|-----|
| Front-end      | **React 18** via Vite | Fast HMR & small bundle |
| Styling        | **Tailwind CSS 3**   | Utility-first; no CSS bloat |
| Charts         | **Chart.js 4** + react-chartjs-2 | Time-series, radar, doughnut, bar out-of-box |
| Icons          | Font Awesome 6       | Quick emoji fallback |
| Dev server     | **Vite** (`npm run dev`) |  ~50 ms cold starts |

---

## 🚀 Quick Start

```bash
# 1. Clone
git clone https://github.com/james-techyon/life-dashboards.git
cd life-dashboards

# 2. Install deps (Node 18+)
npm install

# 3. Run DEV server
npm run dev           # ➜ http://localhost:5173
