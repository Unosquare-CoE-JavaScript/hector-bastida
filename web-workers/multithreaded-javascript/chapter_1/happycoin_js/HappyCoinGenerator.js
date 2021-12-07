import crypto from 'crypto';

class HappyCoinGenerator {
  constructor() {
    this.happycoins = [];
  }
  static random64() {
    const result = new BigUint64Array(1);
    crypto.randomFillSync(result);
    return result[0];
  }
  sum_digits_squared(n) {
    let total = 0n;
    while (n > 0) {
      const num_mod_base = n % 10n;
      total += num_mod_base * num_mod_base;
      n = n / 10n;
    }
    return total;
  }
  is_happy(n) {
    while (n !== 1n && n !== 4n) {
      n = this.sum_digits_squared(n);
    }
    return n === 1n;
  }
  is_happycoin(n) {
    const is_happy = this.is_happy(n) && (n % 10000n === 0n);
    if (is_happy) this.happycoins.push(n);
    return is_happy;
  }
}

export default HappyCoinGenerator;