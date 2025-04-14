// Network names based on .name in: https://github.com/ethereum-lists/chains/tree/master/_data/chains
export type SupportedNetworks =
  | "Ethereum Mainnet"
  | "Bsc"
  | "Gnosis"
  | "Sepolia"
  | "Polygon"
  | "Optimism"
  | "Avalanche"
  | "Arbitrum One"
  | "Base";

export function getRpc(network: SupportedNetworks): string {
  switch (network) {
    case "Ethereum Mainnet":
      // https://mevblocker.io/#rpc
      return "https://rpc.mevblocker.io";
    case "Gnosis":
      // https://docs.gnosischain.com/tools/rpc/
      return "https://rpc.gnosischain.com";
    case "Sepolia":
      // https://chainlist.org/chain/11155111
      return "https://ethereum-sepolia.publicnode.com";
    case "Arbitrum One":
      // https://chainlist.org/chain/42161
      return "https://arbitrum-one-rpc.publicnode.com";
    case "Bsc":
      // https://chainlist.org/chain/8453
      return "https://bsc-dataseed.binance.org"
    case "Polygon":
      // https://chainlist.org/chain/8453
      return "https://polygon-rpc.com/"
    case "Optimism":
      // https://chainlist.org/chain/8453
      return "https://mainnet.optimism.io"
    case "Avalanche":
      // https://chainlist.org/chain/8453
      return "https://api.avax.network/ext/bc/C/rpc"
    default:
      throw new Error(`Invalid network ${network}`);
  }
}
