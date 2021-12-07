import HappyCoinGenerator from "./HappyCoinGenerator.js";
import cliProgress from 'cli-progress';

const attempts = 10000000;
console.log('Attempting to generate Happycoins for attempts: ' + new Intl.NumberFormat().format(attempts) +'');
console.time('Finished attempts in');

// loader setup
const loader = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
loader.start(attempts, 0);

const happyCoinGenerator = new HappyCoinGenerator();
for (let i = 1; i < 10000000; i++) {
  const randomNum = HappyCoinGenerator.random64();
  happyCoinGenerator.is_happycoin(randomNum);

  loader.update(i + 1);
}

loader.stop();

console.log('Happycoins', happyCoinGenerator.happycoins);
console.log('Count', happyCoinGenerator.happycoins.length);
console.timeEnd('Finished attempts in');
