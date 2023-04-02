
     const results = [
      {
        "category": "Entertainment: Film",
        "type": "multiple",
        "difficulty": "easy",
        "question": " What name did Tom Hanks give to his volleyball companion in the film `Cast Away`?",
        a: "Wilson",
        b:  "Friday",
        c:  "Jones",
        d:  "Billy",
        anws: "ans1"
        
      },
      {
        "category": "Science: Computers",
        "type": "boolean",
        "difficulty": "medium",
        "question": " FLAC stands for &quot;Free Lossless Audio Condenser&quot;&#039;",
        a: "False",
        b: "True",
        anws: "ans1"
      },
      {
        "category": "Entertainment: Music",
        "type": "multiple",
        "difficulty": "medium",
        "question": "The 1952 musical composition 4&#039;33&quot;, composed by prolific American composer John Cage, is mainly comprised of what sound?",
        a: "Silence",//correct 
        b:  "Farts",
        c:  "People talking",
        d:  "Cricket chirps",
        anws: "ans1"
      },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What animal is on Link&#039;s pajamas in The Legend of Zelda: The Wind Waker?",
        a: "Crawfish",//correct
        b: "Lobster",
        c: "Salmon",
        d: "Swordfish",
        anws: "ans1"
        
      },
      {
        "category": "Science & Nature",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Deuterium is an isotope of which element?",
         a: "Hydrogen",//correct
         b: "Nitrogen",
         c: "Helium",
         d: "Neon",
         anws: "ans1" 
        
      },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "hard",
        "question": "In Super Smash Bros. for Nintendo 3DS and Nintendo Wii U, who was the sixth fighter to be added to the game post-launch?",
        a: "Corrin",
        b:  "Cloud",
        c:  "Bayonnetta",
        d: "Ryu",
        anws: "ans1" 
        
      },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In the game Pok&eacute;mon Conquest, how many kingdoms make up the region of Ransei?",
          a: "17",
          b:"18",
          c:"15",
          d:"16",
          anws:"ans1"
      },
      
      {
        "category": "Geography",
        "type": "multiple",
        "difficulty": "hard",
        "question": "What is the land connecting North America and South America?",
        a:"Isthmus of Panama",//correct
        b: "Isthmus of Suez",
        c:  "Urals",
        d:  "Australasia",
        anws: "ans1"
        
      },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Which character was introduced to the Super Smash Bros franchise in Super Smash Bros Melee?",
        a: "Sheik",//correct
         b: "Samus",
         c: "Lucas",
         d: "Mega Man",
        anws: "ans1"
        
      },
      {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of the following characters is NOT playable in &quot;Resident Evil 6&quot;?",
        a: "Jill Valentine",//correct
        b:  "Chris Redfield",
        c:  "Sherry Birkin",
        d:  "Helena Harper",
        anws: "ans1"
        
      },
    ]
    const question = document.querySelector('.question');
    const o1 = document.querySelector('#o1') ;
    const o2 = document.querySelector('#o2') ;
    const o3 = document.querySelector('#o3') ;
    const o4 = document.querySelector('#o4') ;
    const Submit = document.querySelector('#Submit') ;
    const answers  = document.querySelectorAll('.ans') ;
    const viewscore = document.querySelector('#viewscore');
    // const ans = querySelector
let qCount = 0;    
let score = 0;
const getQuestion = () => {
    console.log(results[0])
    const qList = results[qCount];
    question.innerHTML = qList.question;

    o1.innerHTML = qList.a;
    o2.innerHTML = qList.b;
    o3.innerHTML = qList.c;
    o4.innerHTML = qList.d;
   
}     
    
getQuestion();

const getCheckAnswer = () => {
let ans;

answers.forEach((curAnsElem) =>{
if(curAnsElem.checked){
    ans = curAnsElem.id;
    }

  });
return ans;

};
Submit.addEventListener('click', () => { 

    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
  if(checkedAnswer === results[qCount].ans ){
     score++;
  }
   qCount++;
  if(qCount<results.length){
    getQuestion();
  }
  else{
  viewscore.innerHTML = `
  <h3>Your Final score ${score}/${results.length}</h3>
  <button class="btn" onclick="location.relaod()"> Play Again </button>
  `;
  viewscore.classList.remove('scorePlace')
  }

});