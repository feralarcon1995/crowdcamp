import Spinner from '@/components/spinner';
import TableData from '@/components/table/TableData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeftIcon } from 'lucide-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useAccount } from 'wagmi';

export default function MyProjectPage() {
  const [createForm, setCreateForm] = useState(false);
  const [data, setData] = useState({
    title: '',
    description: '',
    currency: '0x945eF9D1dAC30Fdb1Dae20b5396889668da6FEc5',
    amount: 0,
  });
  const router = useRouter();
  const account = useAccount();

  useEffect(() => {
    if (account.isConnecting || account.isReconnecting) {
      return;
    }

    if (account.isDisconnected) {
      toast.error('You must connect your wallet.');
      router.push('/');
    }
  }, [account.status]);

  const mockData = [
    { contract: '1', title: 'INV001', description: 'Project 1', amount: 250.0, currency: 'ETH' },
    { contract: '2', title: 'INV002', description: 'Project 2', amount: 300.0, currency: 'BTC' },
    { contract: '3', title: 'INV003', description: 'Project 3', amount: 450.0, currency: 'USD' },
    { contract: '4', title: 'INV004', description: 'Project 4', amount: 200.0, currency: 'ETH' },
    { contract: '5', title: 'INV005', description: 'Project 5', amount: 320.0, currency: 'BTC' },
    { contract: '6', title: 'INV006', description: 'Project 6', amount: 470.0, currency: 'USD' },
  ];

  if (account.isConnecting || account.isReconnecting) {
    return (
      <div className="flex justify-center pt-40">
        <Spinner />
      </div>
    );
  }

  const handleOnChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div>
        <h2 className="text-center text-2xl font-bold py-4">My projects</h2>
        {createForm ? (
          <form className="flex flex-col gap-4 max-w-xl mx-auto">
            <Button onClick={() => setCreateForm(false)} className="w-fit" variant={'link'} size="icon">
              <ArrowLeftIcon /> <span className="inline-block ml-2">Volver</span>
            </Button>
            <Label htmlFor="title">
              <span className="mb-2 block">Title</span>
              <Input type="text" id="title" placeholder="Title" value={data.title} onChange={handleOnChange} />
            </Label>
            <Label htmlFor="description">
              <span className="mb-2 block">Description</span>
              <Input type="text" id="description" placeholder="Description" value={data.description} onChange={handleOnChange} />
            </Label>
            <Label htmlFor="currency">
              <span className="mb-2 block">Currency</span>
              <Select value={data.currency} onValueChange={handleOnChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0x945eF9D1dAC30Fdb1Dae20b5396889668da6FEc5">USDC</SelectItem>
                  <SelectItem value="0xf4198401867c3644E03267b4465A9615768D7a6b">WETH</SelectItem>
                  <SelectItem value="0x91d9Ba3d1e9851405c251A652a0d908f49f5cfA5">cUSDT</SelectItem>
                </SelectContent>
              </Select>
            </Label>

            <Label htmlFor="amount">
              <span className="mb-2 block">Amount</span>
              <Input type="number" id="amount" placeholder="Amount" value={data.amount} onChange={handleOnChange} />
            </Label>
            <Button type="submit">Create</Button>
          </form>
        ) : (
          <>
            <Button onClick={() => setCreateForm(true)} className="block ml-auto">
              Create new project +
            </Button>
            <TableData data={mockData} />
          </>
        )}
      </div>
    </div>
  );
}
