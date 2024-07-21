import { CustomConnectButton } from '@/components/custom-connect-button';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';
import { useAccountEffect } from 'wagmi';

type Props = {};

export default function Header({}: Props) {
  const [isConnected, setIsConnected] = useState(false);

  useAccountEffect({ onConnect: () => setIsConnected(true), onDisconnect: () => setIsConnected(false) });

  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-2xl font-extrabold tracking-wide text-primary">CROWDCAMP</h1>
      </Link>
      <div className="flex items-center gap-4">
        {isConnected && (
          <Link href="/my-projects" className={buttonVariants({ variant: 'link' })}>
            My Projects
          </Link>
        )}
        <CustomConnectButton />
      </div>
    </header>
  );
}
