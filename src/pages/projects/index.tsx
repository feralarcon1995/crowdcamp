import TableData from '@/components/table/TableData';
import SkeletonTable from '@/pages/projects/SkeletonTable';
import { ProjectData } from '@/types';
import useProjectData from '@/utils/getProjects';
import type { NextPage } from 'next';
const Home: NextPage = () => {
  const mockData: ProjectData[] = [
    {
      contract: '1',
      title: 'INV001',
      description: 'Project 1',
      amount: 250.0,
      currency: 'ETH',
    },
    {
      contract: '2',
      title: 'INV002',
      description: 'Project 2',
      amount: 300.0,
      currency: 'BTC',
    },
    {
      contract: '3',
      title: 'INV003',
      description: 'Project 3',
      amount: 450.0,
      currency: 'USD',
    },
    {
      contract: '4',
      title: 'INV004',
      description: 'Project 4',
      amount: 200.0,
      currency: 'ETH',
    },
    {
      contract: '5',
      title: 'INV005',
      description: 'Project 5',
      amount: 320.0,
      currency: 'BTC',
    },
    {
      contract: '6',
      title: 'INV006',
      description: 'Project 6',
      amount: 470.0,
      currency: 'USD',
    },
  ];

  const { data, isLoading, error } = useProjectData();

  console.log({ data });

  if (isLoading) return <SkeletonTable />;
  if (error)
    return (
      <p className="flex items-center justify-center text-center min-h-screen max-h-screen text-2xl text-primary">
        ¡Uups! <br /> Error fetching data
      </p>
    );

  const formattedData: ProjectData[] =
    data?.map((project: any) => ({
      contract: project.result.contractAddress,
      title: project.result.projectName,
      description: project.result.projectDescription,
      amount: 0,
      currency: 'ETH',
    })) || [];

  return (
    <main className="py-16 flex-1 flex flex-col justify-center items-center p-2 md:p-5  ">
      <section className="flex flex-col gap-3 items-start justify-content-start  w-full">
        <h1 className="text-primary text-xl md:text-3xl ">Let's start in investment</h1>
      </section>
      <TableData data={formattedData} />
    </main>
  );
};

export default Home;
