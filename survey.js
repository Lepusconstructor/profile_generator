const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :)', (name) => {
  rl.question('What is an activity you like doing?', (activity) => {
    rl.question('What do you listen to while doing that?', (content) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
        rl.question('What is your favourite thing to eat for that meal?', (food) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (forte) => {
  console.log(`My name is ${name} and I like ${activity}, I listen to ${content} while I do that, because I can multitask and I am awesome :D. My favourite meal during the day is ${meal}, and I like to have ${food} for ${meal}. Don't talk to me if you don't like ${sport}! Big fan here! My super power is ${forte}, and I can help you with that!`);

  rl.close();
});
});
});
  
});
});
});
});









