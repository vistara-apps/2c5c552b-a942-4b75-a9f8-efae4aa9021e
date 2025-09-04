export interface SwapTransaction {
  id: string;
  userAddress: string;
  inputToken: string;
  outputToken: string;
  inputAmount: string;
  outputAmount: string;
  executionTimestamp: number;
  feesPaid: string;
  dexUsed: string;
  transactionHash: string;
}

export interface LiquidityPool {
  dexName: string;
  poolAddress: string;
  token0: string;
  token1: string;
  reserve0: string;
  reserve1: string;
  totalValueLocked: string;
  volume24h: string;
}

export interface TokenInfo {
  address: string;
  symbol: string;
  name: string;
  decimals: number;
  logoURI?: string;
}

export interface SwapRoute {
  dex: string;
  inputAmount: string;
  outputAmount: string;
  slippage: string;
  fee: string;
  gasEstimate: string;
}
