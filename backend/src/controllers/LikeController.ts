import LikeModel from '../models/LikeModel';

/**
* Like controller
*/
class LikeController {
  /**
  * Gets number of likes from specific APP
  * @param {string} app Client APP ID
  * @returns {number} Number of current likes
  */
  getLikes(app: string) {
    const count = LikeModel.count(app);
    return count;
  }

  /**
  * Adds like to a specific APP
  * @param {string} app Client APP ID
  * @returns {number} Number of current likes
  */
  addLike(app: string) {
    const count = LikeModel.increment(app);
    return count;
  }
}

export = new LikeController();