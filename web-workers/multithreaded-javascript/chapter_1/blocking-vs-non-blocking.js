import { sleeper } from './utils.js';

const run = async function () {
  try {
    //does NOT run in paralel, blocking behavior
    const test1 = async () => {
      console.time('result 1');
      const sleeper1 = await sleeper(600); //runs 1st
      const sleeper2 = await sleeper(600); //waits for sleeper1 to run
      const sleeper3 = await sleeper(600); //waits for sleeper2 to run
      console.timeEnd('result 1');
    };

    //async behavior
    const test2 = async () => {
      console.time('result 2');
      const sleeper1 = sleeper(600);
      const sleeper2 = sleeper(600);
      const sleeper3 = sleeper(600);

      const data1 = await sleeper1;
      const data2 = await sleeper2;
      const data3 = await sleeper3;
      console.timeEnd('result 2');
    }

    //async behavior
    const test3 = async () => {
      console.time('result 3');
      await Promise.all([sleeper(600), sleeper(600), sleeper(600)]);
      console.timeEnd('result 3');
    };
    test1();
    test2();
    test3();
  } catch (err) {
    console.error('Something went wrong:'); console.error(err);
  }
};
run();
export default run;