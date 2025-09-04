'use client';

import { ConnectWallet } from '@coinbase/onchainkit/wallet';
import { Copy, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="p-6 border-b border-white/10">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">S</span>
          </div>
          <span className="text-xl font-semibold">StableSwap</span>
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 glass-effect rounded-lg hover:bg-white/10 transition-colors">
            <Copy className="w-5 h-5" />
          </button>
          <button className="p-2 glass-effect rounded-lg hover:bg-white/10 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-2 glass-effect rounded-lg px-3 py-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <span className="text-sm">Payless</span>
          </div>
          <ConnectWallet />
        </div>
      </div>
    </header>
  );
}
