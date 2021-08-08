// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

contract RpsGame {
    uint256 matchId = 0;
    struct Player {
        // This can be Rock, Paper or Scissors
        uint256 wins;
        uint256 losses;
    }
    struct Match {
        uint8 cardA;
        uint8 cardB;
        address playerA;
        address playerB;
        uint256 bet;
    }
    address payable houseAddress;

    constructor(address payable _houseAddress) {
        houseAddress = _houseAddress;
    }

    mapping(uint256 => Match) public matches;
    mapping(address => Player) public players;

    // This function is called by player A
    function startMatch(
        address _playerB,
        uint8 _cardA,
        uint256 _bet
    ) public payable {
        uint256 newMatchId = matchId + 1;
        matches[newMatchId].playerA = msg.sender;
        matches[newMatchId].playerB = _playerB;
        matches[newMatchId].cardA = _cardA;
        matches[newMatchId].bet = _bet;
        houseAddress.transfer(msg.value);
    }

    // This function is called by player B
    function acceptMatch(uint8 _cardB, uint256 newMatchId) public payable {
        require(_cardB >= 0 && _cardB < 3, "Select a card");
        require(matches[newMatchId].playerB == msg.sender, "Invalid Player");
        houseAddress.transfer(msg.value);
        matches[newMatchId].cardB = _cardB;
        // The first one is winner and the second one looses
        (address winner, address looser) = evaluateMatch(
            matches[newMatchId].cardA,
            _cardB,
            matches[newMatchId].playerA,
            matches[newMatchId].playerB
        );
        players[winner].wins = players[winner].wins + 1;
        payable(winner).transfer(msg.value * 2);
        players[looser].losses = players[looser].losses + 1;
    }

    function evaluateMatch(
        uint8 _cardA,
        uint8 _cardB,
        address _playerA,
        address _playerB
    ) private pure returns (address, address) {
        // Rock 0
        // Paper 1
        // Scissors 2
        if (
            _cardA == _cardB ||
            (_cardA == 0 && _cardB != 1) ||
            (_cardA == 1 && _cardB != 2) ||
            (_cardA == 2 && _cardB != 0)
        ) {
            return (_playerA, _playerB);
        }
        return (_playerB, _playerA);
    }
}
