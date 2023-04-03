import TeamModel from '../models/teamsModel';

class TeamService {
  // GetAll
  public static getTeams = async () => TeamModel.findAll();
  // Get By Id
  public static getTeamById = async (id: string) => TeamModel.findOne({
    where: { id },
  });
}

export default TeamService;
