import { Chain, getDefaultConfig } from '@rainbow-me/rainbowkit';

const camp_network = {
  id: 325000,
  name: 'Camp Network Testnet V2',
  iconUrl:
    'https://docs.campnetwork.xyz/~gitbook/image?url=https%3A%2F%2F717020816-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252Fv8eWZlvgwaUEfSyZtuWN%252Ficon%252FrPJFYk7yE1JBavsWZBPI%252FCamp%2520Logo.png%3Falt%3Dmedia%26token%3D40a61513-3b59-4376-ac57-646e8c1195fc&width=32&dpr=1&quality=100&sign=c1c48cd9&sv=1',
  iconBackground: '#fff',
  nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.camp-network-testnet.gelato.digital'] },
  },
  blockExplorers: {
    default: { name: 'blockscout', url: 'https://camp-network-testnet.blockscout.com/' },
  },
} as const satisfies Chain;

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [camp_network],
});
