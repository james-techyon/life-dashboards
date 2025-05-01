import React from 'react';

export default function DashboardLayout({ active, setActive, children }) {
  const tabs = [
    { id: 'physical', color: 'text-red-500', icon: '💪', label: 'Physical Vitality' },
    { id: 'mental', color: 'text-blue-500', icon: '🧠', label: 'Mental & Cognitive' },
    { id: 'emotional', color: 'text-pink-500', icon: '💟', label: 'Emotional Resilience' },
    { id: 'purpose', color: 'text-purple-500', icon: '🛐', label: 'Purpose & Spirituality' },
    { id: 'relational', color: 'text-green-500', icon: '👥', label: 'Relational Wealth' },
    { id: 'financial', color: 'text-yellow-600', icon: '💸', label: 'Financial Well‑being' },
    { id: 'lifestyle', color: 'text-indigo-500', icon: '🏛️', label: 'Lifestyle Architecture' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center my-8">Integrated Life Domain Dashboards</h1>
      <nav className="flex overflow-x-auto mb-6">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={\`px-4 py-2 mr-2 rounded-t whitespace-nowrap font-medium \${active === t.id ? 'bg-white shadow font-bold' : 'bg-gray-100'} \${t.color}\`}
          >
            {t.icon} {t.label}
          </button>
        ))}
      </nav>
      {children}
    </div>
  );
}