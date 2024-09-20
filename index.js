import chalk from 'chalk';

import randomColor from 'randomcolor';

function generateRandomColor() {
  const color = randomColor({
    luminosity: process.argv[3],
    hue: process.argv[2],
  });

  console.log(
    chalk.hex(color)(`
   ###############################
   ###############################
   ###############################
   #####                     #####
   #####        ${color}      #####
   #####                     #####
   ###############################
   ###############################
   ###############################`),
  );
}

generateRandomColor();
