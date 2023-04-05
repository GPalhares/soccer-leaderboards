import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';
import TeamService from '../services/teamService';

class MatchesController {
  // GET ALL
  public static async getMatches(req: Request, res: Response) {
    const { inProgress } = req.query;
    let matches = {};
    if (inProgress !== 'true' && inProgress !== 'false') {
      matches = await MatchesService.getMatches();
    } if (inProgress === 'true') {
      matches = await MatchesService.getMatchesInProgress(true);
    }
    if (inProgress === 'false') {
      matches = await MatchesService.getMatchesInProgress(false);
    }

    res.status(200).json(matches);
  }

  // Finishing a match
  public static async finishingMatch(req: Request, res: Response) {
    const matchId = Number(req.params.id);
    await MatchesService.finishingMatch(matchId);
    res.status(200).json({ message: 'Finished' });
  }

  // Update Match Goals
  public static async updateMatchResult(req: Request, res: Response) {
    const matchId = Number(req.params.id);
    const { homeTeamGoals, awayTeamGoals } = req.body;

    await MatchesService.updateMatchResult(matchId, homeTeamGoals, awayTeamGoals);
    res.status(200).json({ homeTeamGoals, awayTeamGoals });
  }

  // Create match
  public static async createMatch(req: Request, res: Response) {
    const { homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals } = req.body;
    if (homeTeamId === awayTeamId) {
      return res.status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
    const homeTeam = await TeamService.getTeamById(String(homeTeamId));
    const awayTeam = await TeamService.getTeamById(String(awayTeamId));

    if (!homeTeam || !awayTeam) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }

    const createdMatch = await MatchesService
      .createMatch(homeTeamId, homeTeamGoals, awayTeamId, awayTeamGoals);
    return res.status(201).json(createdMatch);
  }
}

export default MatchesController;
