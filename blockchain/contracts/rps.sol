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
  mapping(uint256 => Match) public matches;
  mapping(address => Player) public players;

  // This function is called by player A
  function startMatch(
    address _playerB,
    uint8 _cardA,
    uint256 _bet
  ) public {
    uint256 newMatchId = matchId + 1;
    matches[newMatchId].playerA = msg.sender;
    matches[newMatchId].playerB = _playerB;
    matches[newMatchId].cardA = _cardA;
    matches[newMatchId].bet = _bet;
  }

  // This function is called by player B
  function acceptMatch(uint8 _cardB, uint256 newMatchId) public {
    require(_cardB >= 0 && _cardB < 3, "Select a card");
    require(matches[newMatchId].playerB == msg.sender, "Invalid Player");
    matches[newMatchId].cardB = _cardB;
    address winner = evaluateMatch(
      matches[newMatchId].cardA,
      _cardB,
      matches[newMatchId].playerA,
      matches[newMatchId].playerB
    );
    players[winner].wins = players[winner].wins + 1;
  }

  function evaluateMatch(
    uint8 _cardA,
    uint8 _cardB,
    address _playerA,
    address _playerB
  ) private pure returns (address) {
    // Rock 0
    // Paper 1
    // Scissors 2
    if (_cardA == _cardB) {
      return _playerA;
    } else if (_cardA == 0 && _cardB != 1) {
      return _playerA;
    } else if (_cardA == 1 && _cardB != 2) {
      return _playerA;
    } else if (_cardA == 2 && _cardB != 0) {
      return _playerA;
    } else {
      return _playerB;
    }
  }
}
