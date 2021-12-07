import fs from 'fs/promises';

export async function getNum(filepath, debugPerfomance) {
    if (debugPerfomance) console.info('File ' + filepath + ' Running on ', performance.now());
    const n = parseInt(await fs.readFile(filepath, 'utf8'), 10);
    if (debugPerfomance) console.info('File ' + filepath + ' Finished on ', performance.now());
    return n;
}

export async function sleeper(ms) {
    return new Promise(resolve => setTimeout(() => resolve(ms), ms));
  }