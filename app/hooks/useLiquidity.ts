'use client';

import { useState, useEffect } from 'react';
import type { LiquidityPool } from '../types';

export function useLiquidity() {
  const [pools, setPools] = useState<LiquidityPool[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPools = async () => {
      setIsLoading(true);
      
      try {
        // Mock data for demonstration
        const mockPools: LiquidityPool[] = [
          {
            dexName: 'Uniswap V3',
            poolAddress: '0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640',
            token0: 'USDC',
            token1: 'DAI',
            reserve0: '1200000',
            reserve1: '1198000',
            totalValueLocked: '2400000',
            volume24h: '145000',
          },
          {
            dexName: 'SushiSwap',
            poolAddress: '0x397ff1542f962076d0bfe58ea045ffa2d347aca0',
            token0: 'USDC',
            token1: 'USDT',
            reserve0: '900000',
            reserve1: '901000',
            totalValueLocked: '1800000',
            volume24h: '98000',
          },
        ];

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setPools(mockPools);
      } catch (error) {
        console.error('Error fetching pools:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPools();
  }, []);

  return {
    pools,
    isLoading,
  };
}
