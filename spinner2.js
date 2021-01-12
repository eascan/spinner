const spinner = (elements) => {
  let interval = 100;
  for (let i = 0; i < elements.length; i++) {
      setTimeout(() => {
        process.stdout.write('\r' + elements[i]   );
      }, interval);
    interval += 200;}
    setTimeout(() => {
      process.stdout.write('\n');
    }, interval);}

spinner(['|', '/', '-', '\\', '|']);
