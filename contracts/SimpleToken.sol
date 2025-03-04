// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract SimpleToken is ERC20, Ownable, Pausable {
    string private _metadataURI;

    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        string memory metadataURI
    ) ERC20(name, symbol) {
        _metadataURI = metadataURI;
        _mint(msg.sender, initialSupply);
    }

    function metadataURI() public view returns (string memory) {
        return _metadataURI;
    }

    function setMetadataURI(string memory newMetadataURI) public onlyOwner {
        _metadataURI = newMetadataURI;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, amount);
    }
}