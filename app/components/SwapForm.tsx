'use client';

import { useState } from 'react';
import { ChevronDown, ArrowUpDown, Zap } from 'lucide-react';
import InputField from './InputField';
import Button from './Button';

export default function SwapForm() {
  const [inputAmount, setInputAmount] = useState('1,58,0.00');
  const [inputToken, setInputToken] = useState('USDC');
  const [outputToken, setOutputToken] = useState('DAI');
  const [isSwapping, setIsSwapping] = useState(false);

  const handleSwap = async () => {
    setIsSwapping(true);
    // Simulate swap transaction
    setTimeout(() => {
      setIsSwapping(false);
      // Show success notification
    }, 2000);
  };

  const swapTokens = () => {
    const temp = inputToken;
    setInputToken(outputToken);
    setOutputToken(temp);
  };

  return (
    <div className="glass-effect rounded-2xl p-6 card-glow">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">DEXs</h3>
        <p className="text-gray-400 text-sm">Best rates across Base DEXs</p>
      </div>

      {/* Input Token */}
      <div className="mb-4">
        <div className="glass-effect rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">From</span>
            <span className="text-sm text-gray-400">Balance: 0.00</span>
          </div>
          <div className="flex items-center justify-between">
            <input
              type="text"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
              className="bg-transparent text-2xl font-semibold outline-none flex-1"
              placeholder="0.00"
            />
            <button className="flex items-center space-x-2 bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <span className="font-medium">{inputToken}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={swapTokens}
          className="p-2 glass-effect rounded-lg hover:bg-white/10 transition-colors"
        >
          <ArrowUpDown className="w-5 h-5" />
        </button>
      </div>

      {/* Output Token */}
      <div className="mb-6">
        <div className="glass-effect rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">To</span>
            <span className="text-sm text-gray-400">Balance: 0.00</span>
          </div>
          <div className="flex items-center justify-between">
            <input
              type="text"
              value="157,342.23"
              readOnly
              className="bg-transparent text-2xl font-semibold outline-none flex-1 text-gray-300"
            />
            <button className="flex items-center space-x-2 glass-effect border border-white/20 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
              <span className="font-medium">{outputToken}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* DEX Options */}
      <div className="mb-6 space-y-3">
        <div className="text-sm text-gray-400">Select Output</div>
        
        {/* Best Option */}
        <div className="glass-effect border-2 border-green-500/30 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-400">Best Option</span>
              <Zap className="w-4 h-4 text-yellow-400" />
            </div>
            <span className="text-sm text-gray-400">4.04 GWEI</span>
          </div>
          <div className="text-xl font-semibold">$157 Stablecoin</div>
        </div>

        {/* Other Options */}
        <div className="grid grid-cols-2 gap-3">
          <div className="glass-effect rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs font-bold">U</div>
              <span className="text-sm">Uniswap</span>
            </div>
            <div className="text-lg font-semibold">0% Fee</div>
            <div className="text-xs text-gray-400">Slippage</div>
          </div>

          <div className="glass-effect rounded-lg p-3">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold">P</div>
              <span className="text-sm">PancakeSwap</span>
            </div>
            <div className="text-lg font-semibold">0% Fee</div>
            <div className="text-xs text-gray-400">Slippage</div>
          </div>
        </div>

        {/* Additional DEXs */}
        <div className="space-y-2">
          <div className="flex items-center justify-between glass-effect rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm">Liquify</span>
            </div>
            <span className="text-sm">0% Slippage</span>
          </div>

          <div className="flex items-center justify-between glass-effect rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm">1Swap-USDC</span>
            </div>
            <span className="text-sm">$159 USDC</span>
          </div>

          <div className="flex items-center justify-between glass-effect rounded-lg p-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Cowswap</span>
            </div>
            <span className="text-sm">Gas optimized</span>
          </div>
        </div>
      </div>

      {/* Swap Button */}
      <Button
        variant="primary"
        onClick={handleSwap}
        disabled={isSwapping}
        className="w-full"
      >
        {isSwapping ? 'Swapping...' : 'Swap'}
      </Button>

      {/* Transaction Details */}
      <div className="mt-4 space-y-2 text-sm text-gray-400">
        <div className="flex justify-between">
          <span>Rate</span>
          <span>1 USDC = 0.9998 DAI</span>
        </div>
        <div className="flex justify-between">
          <span>Price Impact</span>
          <span className="text-green-400">&lt; 0.01%</span>
        </div>
        <div className="flex justify-between">
          <span>Network Fee</span>
          <span>~$0.12</span>
        </div>
      </div>
    </div>
  );
}
