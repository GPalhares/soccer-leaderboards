import MatchesModel from '../models/matchesModel';
import TeamModel from '../models/teamsModel';
import { filterMatchesByTeamId, getTotalVictories,
  getTotalDraws, getTotalLosses, getGoalsFavor, getGoalsOwn } from '../utils/leaderBoardsFunctions';

class LeaderBoardsService {
  // Get LeaderBoards
  public static getLeaderBoards = async () => {
    const teams = await TeamModel.findAll({
      attributes: [
        'id',
        'teamName',
      ],
    });
    const matches = await MatchesModel.findAll({});
    const leaderBoard = teams.map((team) => ({
      name: team.teamName,
      totalGames: filterMatchesByTeamId(team.id, matches),
      totalVictories: getTotalVictories(team.id, matches),
      totalDraws: getTotalDraws(team.id, matches),
      totalLosses: getTotalLosses(team.id, matches),
      goalsFavor: getGoalsFavor(team.id, matches),
      goalsOwn: getGoalsOwn(team.id, matches),
    }));
    return leaderBoard;
  };
}

export default LeaderBoardsService;
