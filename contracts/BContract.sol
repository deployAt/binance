pragma solidity ^0.7.4;

contract BContract {
    uint256 public data;

    function setData(uint256 _data) external {
        data = _data;
    }
}
