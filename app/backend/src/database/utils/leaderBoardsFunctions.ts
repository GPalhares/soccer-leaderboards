import Team from '../../interfaces/team.interface';
import LeaderBoard from '../../interfaces/leaderboards.interface';
import Match from '../../interfaces/match.interface';
import sortLeaderBoard from './sorterFunctions';

function filterMatchesByTeamId(teamId: number, matches: Match[], location: string): number {
  let filteredMatches = matches;

  if (location === 'home') {
    filteredMatches = matches.filter((match) => match.homeTeamId === teamId);
  } else if (location === 'away') {
    filteredMatches = matches.filter((match) => match.awayTeamId === teamId);
  } else if (location === 'all') {
    filteredMatches = matches.filter((match) => match.homeTeamId === teamId || match.awayTeamId
    === teamId);
  }

  return filteredMatches.length;
}

function getTotalVictories(teamId: number, matches: Match[], location: string): number {
  return matches.filter((match) => {
    if (location === 'home') {
      if (match.homeTeamId === teamId && match.homeTeamGoals > match.awayTeamGoals) {
        return true;
      }
    } else if (location === 'away') {
      if (match.awayTeamId === teamId && match.awayTeamGoals > match.homeTeamGoals) {
        return true;
      }
    } else if ((match.homeTeamId === teamId && match.homeTeamGoals > match.awayTeamGoals)
            || (match.awayTeamId === teamId && match.awayTeamGoals > match.homeTeamGoals)) {
      return true;
    }
    return false;
  }).length;
}

function getTotalDraws(
  teamId: number,
  matches: Match[],
  location: string,
): number {
  const filteredMatches = matches.filter((match) => {
    const isDraw = match.homeTeamGoals === match.awayTeamGoals;
    const isHomeMatch = match.homeTeamId === teamId;
    const isAwayMatch = match.awayTeamId === teamId;

    if (location === 'home') {
      return isDraw && isHomeMatch;
    } if (location === 'away') {
      return isDraw && isAwayMatch;
    }
    return isDraw && (isHomeMatch || isAwayMatch);
  });

  return filteredMatches.length;
}

function getTotalLosses(teamId: number, matches: Match[], location: string): number {
  return matches.filter((match) => {
    if (location === 'home') {
      if (match.homeTeamId === teamId && match.homeTeamGoals < match.awayTeamGoals) {
        return true;
      }
    } else if (location === 'away') {
      if (match.awayTeamId === teamId && match.awayTeamGoals < match.homeTeamGoals) {
        return true;
      }
    } else if ((match.homeTeamId === teamId && match.homeTeamGoals < match.awayTeamGoals)
              || (match.awayTeamId === teamId && match.awayTeamGoals < match.homeTeamGoals)) {
      return true;
    }
    return false;
  }).length;
}
function filterMatchesByLocationAndId(id: number, matches: Match[], location: string): Match[] {
  let filteredMatches = matches.filter((match) => match.homeTeamId === id
   || match.awayTeamId === id);

  if (location === 'home') {
    filteredMatches = filteredMatches.filter((match) => match.homeTeamId === id);
  } else if (location === 'away') {
    filteredMatches = filteredMatches.filter((match) => match.awayTeamId === id);
  }

  return filteredMatches;
}

function getGoalsFavor(teamId: number, matches: Match[], location: string) {
  const teamMatches = filterMatchesByLocationAndId(teamId, matches, location);
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

function getGoalsOwn(teamId: number, matches: Match[], location: string) {
  const teamMatches = filterMatchesByLocationAndId(teamId, matches, location);
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

function getGoalsBalance(teamId: number, matches: Match[], location:string) {
  const goalsFavor = getGoalsFavor(teamId, matches, location);
  const goalsOwn = getGoalsOwn(teamId, matches, location);
  const goalsBalance = goalsFavor - goalsOwn;
  return goalsBalance;
}

function getTotalPoints(teamId: number, matches: Match[], location:string) {
  const victories = getTotalVictories(teamId, matches, location);
  const draws = getTotalDraws(teamId, matches, location);
  const totalPoints = victories * 3 + draws;
  return totalPoints;
}

function getTeamEfficiency(teamId: number, matches: Match[], location:string) {
  const totalMatches = filterMatchesByTeamId(teamId, matches, location);
  const totalPoints = getTotalPoints(teamId, matches, location);
  const efficiency = (totalPoints / (totalMatches * 3)) * 100;
  return Number(efficiency.toFixed(2));
}

function calculateAllLeaderBoards(teams:Team[], matches: Match[], location : string) {
  const leaderBoards: LeaderBoard[] = teams.map((team) => ({
    name: team.teamName,
    totalPoints: getTotalPoints(team.id, matches, location),
    totalGames: filterMatchesByTeamId(team.id, matches, location),
    totalVictories: getTotalVictories(team.id, matches, location),
    totalDraws: getTotalDraws(team.id, matches, location),
    totalLosses: getTotalLosses(team.id, matches, location),
    goalsFavor: getGoalsFavor(team.id, matches, location),
    goalsOwn: getGoalsOwn(team.id, matches, location),
    goalsBalance: getGoalsBalance(team.id, matches, location),
    efficiency: getTeamEfficiency(team.id, matches, location),
  }));
  const sortedLeaderBoard = sortLeaderBoard(leaderBoards);
  return sortedLeaderBoard;
}

export default calculateAllLeaderBoards;
