'use client';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SwapForm from './components/SwapForm';
import LiquidityDisplay from './components/LiquidityDisplay';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('swap');

  return (
    <div className="min-h-screen gradient-bg text-white">
      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-6 h-6 bg-purple-400 rounded opacity-30 animate-float"></div>
        <div className="absolute top-32 right-20 w-8 h-8 bg-blue-400 rounded-lg opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-pink-400 rounded-full opacity-40 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-10 w-12 h-12 border-2 border-cyan-400 rounded opacity-20 animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-6 h-6 bg-yellow-400 rounded opacity-25 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="flex h-screen">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-8">
            <div className="max-w-[768px] mx-auto">
              {/* Title Section */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  StableSwap Base
                </h1>
                <p className="text-gray-400 text-lg">
                  Instantly swap stablecoins across Base DEXs for the best rates
                </p>
              </div>

              {/* Tab Navigation */}
              <div className="flex justify-center mb-8">
                <div className="glass-effect rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab('swap')}
                    className={`px-6 py-2 rounded-md transition-all duration-200 ${
                      activeTab === 'swap'
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Swap
                  </button>
                  <button
                    onClick={() => setActiveTab('liquidity')}
                    className={`px-6 py-2 rounded-md transition-all duration-200 ${
                      activeTab === 'liquidity'
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Liquidity
                  </button>
                  <button
                    onClick={() => setActiveTab('analytics')}
                    className={`px-6 py-2 rounded-md transition-all duration-200 ${
                      activeTab === 'analytics'
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Analytics
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="grid grid-cols-12 gap-6">
                {activeTab === 'swap' && (
                  <>
                    <div className="col-span-7">
                      <SwapForm />
                    </div>
                    <div className="col-span-5">
                      <LiquidityDisplay variant="compact" />
                    </div>
                  </>
                )}
                
                {activeTab === 'liquidity' && (
                  <div className="col-span-12">
                    <LiquidityDisplay variant="detailed" />
                  </div>
                )}

                {activeTab === 'analytics' && (
                  <div className="col-span-12">
                    <LiquidityDisplay variant="detailed" />
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
