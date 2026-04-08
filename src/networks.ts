import importedRpcs from "./rpcs.json" with { type: "json" };

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
  | "Lens"
  | "Linea"
  | "Plasma"
  | "Ink";

// This line is here to type check the JSON file, so that the compiler throws an
// error if a network is missing from the JSON object.
export const rpcs: Record<
  SupportedNetworks,
  { url: string; comment?: string }
> = importedRpcs;

export function getRpc(network: SupportedNetworks): string {
  // For more information about the RPC nodes: https://chainlist.org/
  const url = rpcs[network].url;
  if (typeof url != "string") {
    throw new Error(`Invalid network ${network}`);
  }
  return url;
}
