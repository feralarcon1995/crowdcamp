import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ProjectData } from '@/types';
import { useRouter } from 'next/router';

export default function TableData({ data }: { data: ProjectData[] }) {
  const router = useRouter();
  const handleOnClick = (contract: string) => {
    router.push(`/project-details/${contract}`);
  };
  return (
    <Table className="border-separate border-spacing-y-3">
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Projects</TableHead>
          <TableHead className="w-full text-center">Description</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((project) => (
          <TableRow
            key={project.contract}
            className="even:bg-primary/30 odd:bg-[#eee]/50 shadow-md rounded-md cursor-pointer"
            onClick={() => handleOnClick(project.contract)}
          >
            <TableCell className="font-medium whitespace-nowrap">{project.title}</TableCell>
            <TableCell className="text-center">{`${project.description}`}</TableCell>
            <TableCell className="text-right">{`${project.amount} ${project.currency}`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
