import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ProjectDetails() {
  const router = useRouter();
  const projectId = router.query.id as string | undefined;
  const [isAlertDialogOpen, setAlertDialogOpen] = useState(false);
  const [isDonateDialogOpen, setDonateDialogOpen] = useState(false);

  const handleDonate = () => {
    toast.success('The donation was sent');
    setAlertDialogOpen(false);
    setDonateDialogOpen(false);
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <Alert className="w-fit">
        <AlertDescription className="text-center">
          <span className="font-semibold">Total raised:</span> 200 usdc
        </AlertDescription>
      </Alert>
      Project Details: {projectId}
      <img
        src="https://img.freepik.com/foto-gratis/interior-restaurante_1127-3392.jpg?t=st=1721588621~exp=1721592221~hmac=9b0638110b4a84d001f5bfb85c67c6f9153a0f9b381586d3d1015aed04436718&w=900"
        alt=""
        className="w-full h-96 object-cover rounded-sm"
      />
      <div>
        <span className="font-bold">Title:</span> {projectId}
      </div>
      <div>
        <span className="font-bold">Description:</span> {projectId}
      </div>
      <div>
        <Dialog open={isDonateDialogOpen} onOpenChange={setDonateDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="bg-primary px-10 py-3 text-center font-bold text-white">
              Donate
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Donate</DialogTitle>
              <DialogDescription>How much you want to donate?</DialogDescription>
            </DialogHeader>
            <div className="flex items-center gap-4 py-4">
              <Input id="price" value="$10.00" className="w-full outline-none" />
              <Label htmlFor="price" className="text-right">
                USDC
              </Label>
            </div>
            <DialogFooter>
              <AlertDialog open={isAlertDialogOpen} onOpenChange={setAlertDialogOpen}>
                <AlertDialogTrigger className="px-10 py-2 text-center bg-primary rounded-sm text-white">
                  Donate
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will send the money from your wallet to the project.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDonate}> Confirm Donate</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
