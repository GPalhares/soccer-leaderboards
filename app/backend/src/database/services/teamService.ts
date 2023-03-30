import TeamModel from '../models/teamModel';

class TeamService {
  // GetAll
  public static getTeams = async () => TeamModel.findAll();
  // Get By Id
  public static getTeamById = async (id: string) => TeamModel.findOne({
    where: { id },
  });
}

export default TeamService;
