let raceNumber = Math.floor(Math.random() * 1000);

const earlyRacer = true;

const runnerAge = 18;


/* having trouble with the else situation where runner is below 18

update - had to remove else and replace with else if ... will look into why this makes a difference.
*/
if( earlyRacer && runnerAge > 18) {
  raceNumber += 1000;
  console.log(`Racer #` + raceNumber + ` will race at 9:30 am.`);
} else if (!earlyRacer && runnerAge > 18) {
  console.log(`Racer #` + raceNumber + ` will race at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Racer #` + raceNumber + ` will race at 12:30 pm.`);
} else if (runnerAge === 18) {
  console.log(`Runners who are 18 should report to the registration desk.`)
}
