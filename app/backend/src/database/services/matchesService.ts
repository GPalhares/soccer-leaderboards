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

  // Finishing a match

  public static finishingMatch = async (id: number) => {
    const match = await MatchesModel.findByPk(id);

    if (!match) {
      throw new Error('Partida não encontrada');
    }

    return match.update({ inProgress: false });
  };

  // Update Match Goals
  public static updateMatchResult = async (
    matchId: number,
    homeTeamGoals: number,
    awayTeamGoals: number,
  ) => {
    const match = await MatchesModel.findByPk(matchId);
    if (!match) {
      throw new Error('Partida não encontrada');
    }
    return match.update({ homeTeamGoals, awayTeamGoals });
  };

  // Create a new Match

  public static createMatch = async (
    homeTeamId: number,
    homeTeamGoals: number,
    awayTeamId: number,
    awayTeamGoals: number,
  ) => MatchesModel.create({
    homeTeamId,
    homeTeamGoals,
    awayTeamId,
    awayTeamGoals,
    inProgress: true,
  });
}

export default MatchesService;
