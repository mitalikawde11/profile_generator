// Profile generator using nested callback functions

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (listen) => {
      rl.question('Which meal is your favourite?(eg: dinner,brunch, etc) ', (favMeal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (favFood) => {
          rl.question('Which sport is your absolute favourite? ', (sport) => {
            rl.question('What is your superpower? ', (superpower) => {
              console.log(`${name} loves listening to ${listen} while ${activity}, ${favFood} for ${favMeal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              
              rl.close();
            });
          });
        });
      });
    });
    
  });
  
});

