// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "../lib/forge-std/src/Script.sol";
import {Storage} from "../src/Storage.sol";

contract StorageScript is Script {
    Storage public storageContract;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        storageContract = new Storage();

        vm.stopBroadcast();
    }
}
