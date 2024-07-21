import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

import Header from '@/components/header';
import Head from 'next/head';
import { useEffect } from 'react';
import { Toaster } from 'sonner';
import { config } from '../wagmi';

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add('dark');
  }, []);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider>
          <Head>
            <title>CrowdCamp</title>
            <meta content="Crowdfunding project on Blockchain Camp Network Testnet" name="description" />
            <link href="/favicon.ico" rel="icon" />
          </Head>
          <div className="container m-auto grid min-h-screen grid-rows-[auto,1fr,auto] px-4 font-sans antialiased overflow-x-hidden relative">
            <Header />
            <Component {...pageProps} />

            <footer className="flex flex-1 py-4 border-t border-gray-200 justify-center items-center">
              Copyrigth © {new Date().getFullYear()} CrowdCamp
            </footer>
          </div>
          <Toaster richColors position="top-right" closeButton />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
