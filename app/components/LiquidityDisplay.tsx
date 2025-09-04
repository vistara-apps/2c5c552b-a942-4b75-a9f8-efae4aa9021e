'use client';

import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { ChevronDown, TrendingUp } from 'lucide-react';

interface LiquidityDisplayProps {
  variant: 'compact' | 'detailed';
}

const mockData = [
  { name: 'May21', value: 400 },
  { name: 'Jun24', value: 450 },
  { name: 'Jul02', value: 420 },
  { name: 'Jul17', value: 480 },
  { name: 'Jul31', value: 520 },
  { name: 'Aug15', value: 510 },
  { name: 'Sep13', value: 600 },
];

const liquidityPools = [
  {
    pair: 'USDC/DAI',
    dex: 'Uniswap V3',
    tvl: '$2.4M',
    volume24h: '$145K',
    apy: '12.5%',
    slippage: '0.01%',
  },
  {
    pair: 'USDC/USDT',
    dex: 'SushiSwap',
    tvl: '$1.8M',
    volume24h: '$98K',
    apy: '8.2%',
    slippage: '0.02%',
  },
  {
    pair: 'DAI/USDT',
    dex: 'Curve',
    tvl: '$3.1M',
    volume24h: '$203K',
    apy: '15.8%',
    slippage: '0.005%',
  },
];

export default function LiquidityDisplay({ variant }: LiquidityDisplayProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');

  if (variant === 'compact') {
    return (
      <div className="glass-effect rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Select Liquidity</h3>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            <span className="text-sm">Saved</span>
            <ChevronDown className="w-4 h-4" />
          </div>
        </div>

        <div className="mb-4">
          <div className="text-sm text-gray-400 mb-1">Real-time Liquidity Output</div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm">Live</span>
            <span className="text-sm text-gray-400">Deep</span>
          </div>
        </div>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData}>
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6B7280' }}
              />
              <YAxis hide />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="#8B5CF6" 
                strokeWidth={3}
                dot={false}
                fill="url(#gradient)"
              />
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0}/>
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-gray-400">TVL</div>
          <div className="text-lg font-semibold">$4.2M</div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Liquidity Pools</h2>
        <div className="flex items-center space-x-4">
          <select 
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="glass-effect rounded-lg px-4 py-2 bg-transparent border border-white/20"
          >
            <option value="1d">1D</option>
            <option value="7d">7D</option>
            <option value="30d">30D</option>
            <option value="90d">90D</option>
          </select>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-5 h-5 text-green-400" />
            <span className="text-sm text-gray-400">Total TVL</span>
          </div>
          <div className="text-2xl font-bold">$12.8M</div>
          <div className="text-sm text-green-400">+8.2% 24h</div>
        </div>

        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-gray-400">24h Volume</span>
          </div>
          <div className="text-2xl font-bold">$546K</div>
          <div className="text-sm text-blue-400">+12.5% 24h</div>
        </div>

        <div className="glass-effect rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-gray-400">Avg APY</span>
          </div>
          <div className="text-2xl font-bold">12.2%</div>
          <div className="text-sm text-purple-400">Stable</div>
        </div>
      </div>

      {/* Liquidity Pools Table */}
      <div className="glass-effect rounded-xl overflow-hidden">
        <div className="p-6 border-b border-white/10">
          <h3 className="text-lg font-semibold">Active Pools</h3>
        </div>
        
        <div className="divide-y divide-white/10">
          {liquidityPools.map((pool, index) => (
            <div key={index} className="p-6 hover:bg-white/5 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    <div className="w-8 h-8 bg-green-500 rounded-full -ml-2"></div>
                  </div>
                  <div>
                    <div className="font-semibold">{pool.pair}</div>
                    <div className="text-sm text-gray-400">{pool.dex}</div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-8 flex-1 ml-8">
                  <div>
                    <div className="text-sm text-gray-400">TVL</div>
                    <div className="font-semibold">{pool.tvl}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">24h Volume</div>
                    <div className="font-semibold">{pool.volume24h}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">APY</div>
                    <div className="font-semibold text-green-400">{pool.apy}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Slippage</div>
                    <div className="font-semibold">{pool.slippage}</div>
                  </div>
                </div>

                <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
                  Add Liquidity
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
