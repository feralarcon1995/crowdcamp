// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./CrowdfundingProject.sol";

contract CrowdfundingManager is Admin {
    address[] _crowdfundingContracts;

    constructor(
        address initialOwner
    ) Admin(initialOwner) { }

    event CrowdfundingProjectCreated(address deployedAddress, string projectName, uint256 fundingGoal);

    function getCrowdfundingProjects() public view returns(address[] memory) {
        return _crowdfundingContracts;
    }

    function removeCrowdfundingProject(address contractAddress) public {
        address[] memory filteredProjects;

        for (uint i; i < _crowdfundingContracts.length; i++) {
            if (_crowdfundingContracts[i] != contractAddress) filteredProjects[i] = _crowdfundingContracts[i];
        }

        _crowdfundingContracts = filteredProjects;
    }

    function addCrowdfundingProject(
        string memory projectName,
        string memory projectDescription,
        address fundingTokenAddress,
        uint256 fundingGoal,
        uint256 _salt
    ) public onlyOwner(address(0)) {
        bytes memory bytecode = abi.encodePacked(
            type(CrowdfundingProject).creationCode,
            abi.encode(
                msg.sender,
                projectName,
                projectDescription,
                fundingTokenAddress,
                fundingGoal
            )
        );

        address contractAddress;
        assembly {
            contractAddress := create2(0xFF, add(bytecode, 0x20), mload(bytecode), _salt)
        }
        require(contractAddress == address(0), "CREATE2: Failed on deploy CrowdfundingProject.sol");

        emit CrowdfundingProjectCreated(contractAddress, projectName, fundingGoal);

        _crowdfundingContracts.push(contractAddress);

    }
}