import fs from 'fs';
import path from 'path';
import ErrorHandler from '../models/ErrorHandler';

type LikeData = {
  app: string,
  likes: number
};

/**
* Like model
*/
class LikeModel {
  private dataFile = path.join(process.cwd(), 'data', 'likes.json');
  private data: LikeData[] = [{ app: '12345', likes: 0 }];

  constructor() {
    if (!fs.existsSync(this.dataFile)) {
      this.saveData();
    } else {
      this.data = JSON.parse(String(fs.readFileSync(this.dataFile)));
    }
  }

  /**
  * Saves data to json file
  */
  private saveData() {
    if (!fs.existsSync(path.join(process.cwd(), 'data'))) {
      fs.mkdirSync(path.join(process.cwd(), 'data'));
    }
    fs.writeFile(this.dataFile, JSON.stringify(this.data, null, 2), (error) => {
      if (error) console.error(error);
    })
  }

  /**
  * Counts the number of likes in memory
  * @param {string} app Client APP ID
  * @returns {number} Number of current likes
  */
  count(app: string) {
    const found = this.data.find(x => x.app === app);
    if (!found) {
      throw new ErrorHandler(404, 'APP not found');
    } else {
      return found.likes;
    }
  }

  /**
  * Adds like to memory and to file
  * @param {string} app Client APP ID
  * @returns {number} Number of current likes
  */
  increment(app: string) {
    const found = this.data.find(x => x.app === app);
    if (!found) {
      throw new ErrorHandler(404, 'APP not found');
    } else {
      found.likes++;
      this.saveData();
      return found.likes;
    }
  }
}

export = new LikeModel();