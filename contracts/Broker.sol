//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

interface IERC721 {
    function transferFrom(address _from, address _to, uint256 _id) external;
}

contract Broker is ReentrancyGuard {
    address payable private owner;
    uint256 public listingFees = 0.001 ether;
    address public nftAddress;

    uint256 count;

    struct Land {
        uint256 propertyId;
        address payable owner;
        address payable seller;
        uint256 price;
        bool listed;
        bool reSold;
    }

    mapping(uint256 => Land) public property;

    constructor() {
        owner = payable(msg.sender);
    }

    event propertyListed(
        uint256 propertyId,
        address owner,
        address seller,
        uint256 price
    );

    event propertySold(
        uint256 propertyId,
        address owner,
        address seller,
        uint256 price
    );

    function listProperties(
        uint256 _price,
        uint256 _propertyId,
        address _propertyContract
    ) public payable nonReentrant {
        require(_price > 0, "Price must be more than 0");
        require(msg.value == listingFees, "Not enough ether for listing fee");
        IERC721(_propertyContract).transferFrom(
            msg.sender,
            address(this),
            _propertyId
        );
        owner.transfer(listingFees);
        property[_propertyId] = Land(
            _propertyId,
            payable(address(this)),
            payable(msg.sender),
            _price,
            true,
            false
        );
        emit propertyListed(_propertyId, address(this), msg.sender, _price);
    }

    function buyProperties(
        uint256 _propertyId,
        address _propertyContract
    ) public payable nonReentrant {
        Land storage estate = property[_propertyId];
        require(
            msg.value >= estate.price,
            "Not enough ether to cover asking price"
        );
        address payable buyer = payable(msg.sender);
        payable(estate.seller).transfer(msg.value);
        IERC721(_propertyContract).transferFrom(
            address(this),
            buyer,
            estate.propertyId
        );

        estate.owner = buyer;
        estate.listed = false;

        emit propertySold(_propertyId, buyer, estate.seller, estate.price);
    }

    function resellProperties(
        uint256 _price,
        uint256 _propertyId,
        address _propertyContract
    ) public payable nonReentrant {
        require(_price > 0, "Price must be more than 0");
        require(msg.value == listingFees, "Not enough ether for listing fee");

        Land storage estate = property[_propertyId];

        IERC721(_propertyContract).transferFrom(
            msg.sender,
            address(this),
            _propertyId
        );
        estate.price = _price;
        estate.owner = payable(address(this));
        estate.listed = true;
        estate.reSold = true;
    }

    receive() external payable {}

    fallback() external payable {}

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
