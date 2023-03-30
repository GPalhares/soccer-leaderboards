import { Request, Response } from 'express';
import TeamService from '../services/teamService';

class TeamController {
  // GET ALL
  public static async getTeams(req: Request, res: Response) {
    const teams = await TeamService.getTeams();
    res.status(200).json(teams);
  }

  // GET BY ID
  public static async getTeamById(req: Request, res: Response) {
    const { id } = req.params;
    const team = await TeamService.getTeamById(id);

    if (team) {
      res.status(200).json(team);
    } else {
      res.status(404).json({ error: 'Team not found' });
    }
  }
}

export default TeamController;
