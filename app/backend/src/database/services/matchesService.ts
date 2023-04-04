import MatchesModel from '../models/matchesModel';
import TeamModel from '../models/teamsModel';

class MatchesService {
  // GetAll
  public static getMatches = async () => MatchesModel.findAll({
    include: [
      { model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
      { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] },
    ],
  });

  // Get In Progress
  public static getMatchesInProgress = async (inProgress: boolean) => MatchesModel.findAll({
    include: [
      { model: TeamModel, as: 'homeTeam', attributes: ['teamName'] },
      { model: TeamModel, as: 'awayTeam', attributes: ['teamName'] },
    ],
    where: { inProgress },
  });
}

export default MatchesService;
