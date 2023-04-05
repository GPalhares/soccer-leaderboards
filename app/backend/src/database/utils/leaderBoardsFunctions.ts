import Match from '../../interfaces/match.interface';

function filterMatchesByTeamId(teamId: number, matches: Match[]): number {
  return matches.filter((match) => match.homeTeamId === teamId || match.awayTeamId
  === teamId).length;
}

function getTotalVictories(teamId: number, matches: Match[]): number {
  return matches.filter((match) => {
    if (match.homeTeamId === teamId && match.homeTeamGoals > match.awayTeamGoals) {
      return true;
    } if (match.awayTeamId === teamId && match.awayTeamGoals > match.homeTeamGoals) {
      return true;
    }
    return false;
  }).length;
}

function getTotalDraws(teamId: number, matches: Match[]): number {
  return matches.filter((match) => match.homeTeamGoals === match.awayTeamGoals).length;
}

function getTotalLosses(teamId: number, matches: Match[]): number {
  return matches.filter((match) => {
    if (match.homeTeamId === teamId && match.homeTeamGoals < match.awayTeamGoals) {
      return true;
    } if (match.awayTeamId === teamId && match.awayTeamGoals < match.homeTeamGoals) {
      return true;
    }
    return false;
  }).length;
}

function filterAllMatchesById(id: number, matches: Match[]) {
  return matches.filter((match) => match.homeTeamId === id || match.awayTeamId === id);
}

function getGoalsFavor(teamId: number, matches: Match[]) {
  const teamMatches = filterAllMatchesById(teamId, matches);
  const goalsFavor = teamMatches.map((match) => {
    if (match.homeTeamId === teamId) {
      return match.homeTeamGoals;
    } if (match.awayTeamId === teamId) {
      return match.awayTeamGoals;
    }
    return 0;
  });
  return goalsFavor.reduce((total, goals) => total + goals, 0);
}

function getGoalsOwn(teamId: number, matches: Match[]) {
  const teamMatches = filterAllMatchesById(teamId, matches);
  const goalsOwn = teamMatches.map((match) => {
    if (match.homeTeamId === teamId) {
      return match.awayTeamGoals;
    } if (match.awayTeamId === teamId) {
      return match.homeTeamGoals;
    }
    return 0;
  });
  return goalsOwn.reduce((total, goals) => total + goals, 0);
}

export { filterMatchesByTeamId, getGoalsFavor,
  getGoalsOwn, getTotalLosses, getTotalVictories, getTotalDraws };
