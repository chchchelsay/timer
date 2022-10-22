//fn beep helper function used to create sound in node.js
const beep = function() {
  process.stdout.write('\x07');
};
//loop through arguments passed in node representing the seconds that the timer sound will execute
//process.argv starts at [2]
//arguments will NOT pass if they are not numbers/if they are negative numbers

const newTimer = function() {
  for (let i = 2; i < process.argv.length; i++) {
    if ((process.argv[i] < 0) || (isNaN(process.argv[i]))) {
      return false;
    } else {
//setTimeout callback of beep function, * 1000 depending on process.argv argument in milliseconds
      setTimeout(beep, (process.argv[i] * 1000));
    }
  }
};

newTimer();
