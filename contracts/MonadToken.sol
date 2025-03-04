// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

contract MonadToken is ERC20Upgradeable, OwnableUpgradeable, UUPSUpgradeable {
    string public metadataURI;

    event MetadataURIUpdated(string newURI);

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() {
        _disableInitializers();
    }

    function initialize(
        string memory name,
        string memory symbol,
        uint256 initialSupply,
        string memory _metadataURI
    ) public initializer {
        __ERC20_init(name, symbol);
        __Ownable_init();
        __UUPSUpgradeable_init();

        _mint(msg.sender, initialSupply);
        metadataURI = _metadataURI;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    // Fungsi untuk membakar token
    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }

    // Fungsi untuk mint token tambahan (hanya owner)
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // Fungsi untuk mengupdate metadata URI (hanya owner)
    function setMetadataURI(string memory _newURI) public onlyOwner {
        metadataURI = _newURI;
        emit MetadataURIUpdated(_newURI);
    }
}