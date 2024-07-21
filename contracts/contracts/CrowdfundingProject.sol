// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./Admin.sol";

interface IERC20 {
    function transfer(address to, uint256 value) external returns (bool);
    function symbol() external returns(string memory);
}

contract CrowdfundingProject is Admin {
    address _fundingTokenAddress;
    string _projectName;
    string _symbol;
    string _projectDescription;
    IERC20 _fundingTokenContract;
    uint256 _fundingGoal;
    uint256 _currentFunding;
    mapping(address => uint256) _contributions;
    address[] _contributors;

    constructor(
        address initialOwner,
        string memory projectName,
        string memory projectDescription,
        address fundingTokenAddress,
        uint256 fundingGoal
    ) Admin(initialOwner) {
        _projectName = projectName;
        _projectDescription = projectDescription;
        _fundingTokenContract = IERC20(fundingTokenAddress);
        _symbol = IERC20(fundingTokenAddress).symbol();
        _fundingGoal = fundingGoal;
    }

    struct ProjectInfo {
        string projectName;
        string projectDescription;
        string symbol;
        address fundingTokenAddress;
        uint256 fundingGoal;
        uint256 currentFunding;
        address[] contributors;
    }

    event Contribute(address contributor, uint256 amount);

    function getProjectInfo() public view returns(ProjectInfo memory) {
        return ProjectInfo(_projectName, _projectDescription, _symbol, _fundingTokenAddress, _fundingGoal, _currentFunding, _contributors);
    }

    function getProjectName() public view returns(string memory) {
        return _projectName;
    }

    function getFundingGoal() public view returns(uint256) {
        return _fundingGoal;
    }

    function getCurrentFunding() public view returns(uint256) {
        return _currentFunding;
    }

    function getCompletionPercentage() public view returns(uint256) {
        return _currentFunding * 100 / _fundingGoal;
    }

    function setProjectName(address caller, string memory name) public onlyOwner(caller) {
        _projectName = name;
    }

    function setProjectDescription(address caller, string memory description) public onlyOwner(caller) {
        _projectDescription = description;
    }

    function contribute(address contributor, uint256 amount) public onlyOwner(contributor) {
        require(amount > 0, "Contribution amount must be greater than zero");
        require(_fundingTokenContract.transfer(address(this), amount), "Couldn't transfer to crowdfunding contract");

        if (_contributions[contributor] == 0) {
            _contributors.push(contributor);
        }

        _contributions[contributor] += amount;
        
        emit Contribute(contributor, amount);
    }
}