const questions = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];



const quesHead=document.getElementById("quesHead"); /// can access h2 
const optionInput=document.querySelectorAll(".options"); /// can access option

let index=0;
let total=questions.length; // total number of question
let correct=0; // to calculate no of correct answer
let wrong=0; // to calculate no of wrong answer
let data;

/// rseet the option to unclick
const reset=()=>{
    optionInput.forEach(
        (input)=>{
            input.checked=false;
        }
    )
}

//// this function will end the quiz
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
        <h3>Thankyou for playing the Quiz!!</h3>
        <h2>${correct}/${total} are correct </h2>
        </div>
    `
}


const loadQuestion=()=>{
    if(index===total)return endQuiz(); /// if all questions have completed then end the quiz
    reset(); // to reset all the option, so that in next question no option is to be selected by default
    data=questions[index];
    quesHead.innerText=`${index+1}) ${data.question}`;
    optionInput[0].nextElementSibling.innerText=data.a;
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;
    // console.log(data);
}
///initial call
loadQuestion();

//// to find the answer which has been clicked by user
const getAnswer=()=>{
    let ans;
    optionInput.forEach(
        (input)=>{
            if(input.checked)ans=input.value;
        }
    )
    return ans;
}

/// this fucntion will be called when user click on submit button
const submitQuiz=()=>{
   
    let ans=getAnswer() /// to find the answer
    if(ans=== data.correct)correct++; // increament correct
    else wrong++; /// increament wrong 
    index++;
    loadQuestion();
    return;

}

/// this function will be called when user clicks on previous button
const prevQuiz=()=>{
    if(index>0){
        index--;
        loadQuestion();
        return;

    }
    else return;
    
}
/// this function will be called when user clicks on next button
const nextQuiz=()=>{
    if(index<total-1){
        index++;
        loadQuestion();
        return;
    }
    else return;
    
}



