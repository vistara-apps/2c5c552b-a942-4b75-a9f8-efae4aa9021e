'use client';

import { 
  Home, 
  BarChart3, 
  Shield, 
  DollarSign, 
  FileText, 
  Coins, 
  TrendingUp 
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'portfolio', label: 'Portfolio', icon: BarChart3 },
    { id: 'privacy', label: 'Privacy', icon: Shield },
    { id: 'stream', label: 'Stream', icon: DollarSign },
    { id: 'dexs', label: 'DEXs', icon: Coins, active: true },
    { id: 'contracts', label: 'Contracts', icon: FileText },
    { id: 'domains', label: 'Domains', icon: TrendingUp },
    { id: 'imports', label: 'Imports', icon: TrendingUp },
  ];

  return (
    <div className="w-64 glass-effect border-r border-white/10 p-6">
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = item.active || activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
