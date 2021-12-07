import { getNum } from './utils.js';
// From Example 1-3
const run = async function (debugPerfomance) {
    try {
      console.log('Read Files with Promise.all');
      if (debugPerfomance) {
        console.time('Read Files total time with Promise.all');
        console.info('Starting reading on ', performance.now());
      }
      const numberPromises = [1, 2, 3].map(i => getNum(`./${i}.txt`, debugPerfomance));
      const numbers = await Promise.all(numberPromises);
      if (debugPerfomance) {
        console.timeEnd('Read Files total time with Promise.all');
        console.info('Finished reading on ', performance.now());
      }
      console.log(numbers[0] + numbers[1] + numbers[2]);
    } catch (err) {
      console.error('Something went wrong:'); console.error(err);
    }
};
run(true);
export default run;
