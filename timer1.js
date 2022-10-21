  
  const beep = function () {
  process.stdout.write('\x07');
  }

  for (let i = 2; i < process.argv.length; i++) {
    if ((process.argv[i] < 0) || (isNaN(process.argv[i]))) {
      return false;
    } else {
    setTimeout(beep, (process.argv[i] * 1000));
  }
};
