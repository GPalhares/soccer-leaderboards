import TeamModel from '../models/teamModel';

class TeamService {
  public static getTeams = async () => TeamModel.findAll();
}

export default TeamService;
