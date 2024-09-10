import chalk from 'chalk';

import randomColor from 'randomcolor';

import argv from 'node:process';

function generateRandomColor() {
  const color = randomColor({
    luminosity: argv[0],
    hue: argv[1],
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
