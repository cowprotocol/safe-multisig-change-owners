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
  | "Base"
  | "Lens";

export function getRpc(network: SupportedNetworks): string {
  // For more information about the RPC nodes: https://chainlist.org/
  switch (network) {
    case "Ethereum Mainnet":
      // https://mevblocker.io/#rpc
      return "https://rpc.mevblocker.io";
    case "Gnosis":
      // https://docs.gnosischain.com/tools/rpc/
      return "https://rpc.gnosischain.com";
    case "Sepolia":
      return "https://ethereum-sepolia.publicnode.com";
    case "Arbitrum One":
      return "https://arbitrum-one-rpc.publicnode.com";
    case "Base":
      return "https://base.llamarpc.com";
    case "Bsc":
      return "https://bsc-dataseed.binance.org";
    case "Polygon":
      return "https://polygon-rpc.com/";
    case "Optimism":
      return "https://mainnet.optimism.io";
    case "Avalanche":
      return "https://api.avax.network/ext/bc/C/rpc";
    case "Lens":
      return "https://rpc.lens.xyz";
    default:
      throw new Error(`Invalid network ${network}`);
  }
}
