import { Request, Response } from 'express';
import MatchesService from '../services/matchesService';

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

  // UPDATE
  public static async updateMatchResult(req: Request, res: Response) {
    const matchId = Number(req.params.id);
    const { homeTeamGoals, awayTeamGoals } = req.body;

    await MatchesService.updateMatchResult(matchId, homeTeamGoals, awayTeamGoals);
    res.status(200).json({ homeTeamGoals, awayTeamGoals });
  }
}

export default MatchesController;
