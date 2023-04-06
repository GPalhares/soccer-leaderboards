import LeaderBoard from '../../interfaces/leaderboards.interface';

function sortByVictories(a: LeaderBoard, b: LeaderBoard) {
  if (a.totalVictories > b.totalVictories) {
    return -1;
  } if (a.totalVictories < b.totalVictories) {
    return 1;
  }
  return 0;
}

function sortByGoalsBalance(a: LeaderBoard, b: LeaderBoard) {
  if (a.goalsBalance > b.goalsBalance) {
    return -1;
  } if (a.goalsBalance < b.goalsBalance) {
    return 1;
  }
  return 0;
}

function sortByGoalsFavor(a: LeaderBoard, b: LeaderBoard) {
  if (a.goalsFavor > b.goalsFavor) {
    return -1;
  } if (a.goalsFavor < b.goalsFavor) {
    return 1;
  }
  return 0;
}

function sortLeaderBoard(leaderBoards: LeaderBoard[]) {
  leaderBoards.sort((a:LeaderBoard, b:LeaderBoard) => {
    const sortByVictoriesResult = sortByVictories(a, b);
    if (sortByVictoriesResult !== 0) {
      return sortByVictoriesResult;
    }
    const sortByGoalsBalanceResult = sortByGoalsBalance(a, b);
    if (sortByGoalsBalanceResult !== 0) {
      return sortByGoalsBalanceResult;
    }
    const sortByGoalsFavorResult = sortByGoalsFavor(a, b);
    if (sortByGoalsFavorResult !== 0) {
      return sortByGoalsFavorResult;
    }
    return 0;
  });
  return leaderBoards;
}

export default sortLeaderBoard;
