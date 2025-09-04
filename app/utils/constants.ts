export const SUPPORTED_TOKENS = {
  USDC: {
    address: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
  },
  DAI: {
    address: '0x50c5725949a6f0c72e6c4a641f24049a917db0cb',
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    decimals: 18,
  },
  USDT: {
    address: '0xfde4c96c8593536e31f229ea8f37b2ada2699bb2',
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: 6,
  },
} as const;

export const SUPPORTED_DEXS = [
  'Uniswap V3',
  'SushiSwap',
  'PancakeSwap',
  'Curve',
  '1inch',
] as const;

export const BASE_CHAIN_ID = 8453;

export const RPC_ENDPOINTS = {
  base: 'https://developer-access-mainnet.base.org',
  baseGoerli: 'https://goerli.base.org',
} as const;
