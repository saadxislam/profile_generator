const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



rl.question("What's your nickname? ", (answer1) => {
  rl.question("What's an activity that you like doing? ", (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which is your favorite meal? ', (answer4) => {
        rl.question('Which is your your absolute favorite sport? ', (answer5) => {
          rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer6) => {
            console.log(`${answer1} enjoys ${answer2} and he listens to ${answer3} while doing that. He loves to devour ${answer4}. On weekends, he loves to watch ${answer5}. His superpower is ${answer6} and he uses it often!`);
            rl.close();        
          });          
        });
      });
    });
  });
});





rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});



// It's hard to come up with fun and quirky descriptions for our online profiles. 
// Meanwhile, research has shown that they result in 256% higher engagement online and a 55% 
// increase in "overall internet happiness" (source). Let's help out our fellow internetters by 
// creating a handy profile generator.