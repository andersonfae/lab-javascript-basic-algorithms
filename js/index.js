console.log("I'm ready!");
// Iteration 1: Names and Input
//
  let hacker1 = "Anderson";
    console.log(`The driver's name is ${hacker1}`)

  let hacker2 = "Alexandre";
    console.log(`The navigators name is ${hacker2}`)

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
  else if (hacker1.length > hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }
  else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
  }


// Iteration 3: Loops

  let capitalName = "";
    for (let i = 0; i < hacker1.length; i++) {
      capitalName += hacker1[i].toUpperCase();
      if(i !== hacker1.length-1) capitalName+= " "; {
        console.log(`${capitalName}`)
      }
    }

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

  let reverseName = "";
    for (let i = hacker2.length-1; i>= 0; i--) {
      if (reverseName.length !== hacker2.length -1)
        reverseName += hacker2[i];
      else reverseName += hacker2[i].toUpperCase();
    } console.log(`${reverseName}`)

// 3.3 Depending on the lexicographic order of the strings, print:

  if (hacker1 < hacker2) console.log(`The ${hacker1} goes first`)
    else if (hacker1 > hacker2) console.log(`Yo, the ${hacker2} goes first definitely`)
    else console.log(`What?! You both have the same name?`);
