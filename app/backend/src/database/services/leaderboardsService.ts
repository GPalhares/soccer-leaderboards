import MatchesModel from '../models/matchesModel';
import TeamModel from '../models/teamsModel';
import calculateAllLeaderBoards from '../utils/leaderBoardsFunctions';

class LeaderBoardsService {
  // Get LeaderBoards
  public static getLeaderBoards = async () => {
    const location = 'all';
    const teams = await TeamModel.findAll({
      attributes: ['id', 'teamName'] });
    const matches = await MatchesModel.findAll({ where: { inProgress: false } });
    const leaderBoard = calculateAllLeaderBoards(teams, matches, location);
    return leaderBoard;
  };

  // Get Home LeaderBoards
  public static getHomeLeaderBoards = async () => {
    const location = 'home';
    const teams = await TeamModel.findAll({
      attributes: ['id', 'teamName'] });
    const matches = await MatchesModel.findAll({ where: { inProgress: false } });
    const leaderBoard = calculateAllLeaderBoards(teams, matches, location);
    return leaderBoard;
  };

  // Get Away LeaderBoards
  public static getAwayLeaderBoards = async () => {
    const location = 'away';
    const teams = await TeamModel.findAll({
      attributes: ['id', 'teamName'] });
    const matches = await MatchesModel.findAll({ where: { inProgress: false } });
    const leaderBoard = calculateAllLeaderBoards(teams, matches, location);
    return leaderBoard;
  };
}
export default LeaderBoardsService;
