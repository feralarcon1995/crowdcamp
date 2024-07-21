import CrowdfundingManagerABI from '@/abi/CrowdfundingManagerABI.json';
import CrowdfundingProjectABI from '@/abi/CrowdfundingProjectABI.json';
import { useReadContract, useReadContracts } from 'wagmi';

export default function useProjectData() {
  const MANAGER_ADDRESS = '0x5D4a230a9F0c02bA248825F30A1A1B652D4C7322';

  const {
    data: projectAddresses,
    isLoading: isLoadingProjects,
    error: errorProjects,
  } = useReadContract({
    address: MANAGER_ADDRESS,
    abi: CrowdfundingManagerABI,
    functionName: 'getCrowdfundingProjects',
  });

  // Lee los datos de todos los contratos de proyectos
  const projectContracts = (projectAddresses || []).map((address: string) => ({
    address,
    abi: CrowdfundingProjectABI,
    functionName: 'getProjectInfo',
  }));

  const {
    data: projectsData,
    isLoading: isLoadingProjectsData,
    error: errorProjectsData,
  } = useReadContracts({
    contracts: projectContracts,
  });

  const isLoading = isLoadingProjects || isLoadingProjectsData;
  const error = errorProjects || errorProjectsData;

  /* // Combina la información de los proyectos
  const combinedProjects = (projectsData || []).map((projectData, index) => {
    const projectInfo = projectData as any;
    return {
      address: projectAddresses[index],
      name: projectNames ? projectNames[index] : 'Unknown',
      projectInfo: projectInfo?.[0] || {},
    };
  }); */

  return {
    data: projectsData as any[],
    isLoading,
    error,
  };
}
