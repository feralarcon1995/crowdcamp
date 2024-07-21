import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonTable() {
  return (
    <div className="flex flex-col min-h-screen max-h-full justify-center items-center p-5">
      <div className="w-full">
        <div className="flex items-center justify-between gap-3">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[50px]" />
        </div>
        <div className="space-y-2 flex flex-col gap-3 my-5">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </div>
  );
}
