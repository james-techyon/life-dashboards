import React, { useState } from 'react';
import DashboardLayout from './components/DashboardLayout';
import Physical from './components/domains/Physical';

export default function App() {
  const [active, setActive] = useState('physical');

  const renderDomain = () => {
    switch (active) {
      case 'physical':
        return <Physical />;
      default:
        return <div className="p-8">Coming soon…</div>;
    }
  };

  return (
    <DashboardLayout active={active} setActive={setActive}>
      {renderDomain()}
    </DashboardLayout>
  );
}