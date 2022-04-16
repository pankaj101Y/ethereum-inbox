pragma solidity ^0.4.17;
// linter warnings (red underline) about pragma version can igonored!

// contract code will go here

contract Inbox{
  string public message;

  function Inbox(string msg) public {
    message=msg;
  }

  function setMessage(string msg) public {
    message=msg;
  }
}
