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
}

export default MatchesController;
