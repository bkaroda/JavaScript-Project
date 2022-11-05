const num1 = Math.ceil(Math.random()*10);   //1 defind number 1 for randomly
const num2 = Math.ceil(Math.random()*10);   //2   defind number 2 for randomly

const questionE1 = document.getElementById("question"); 

const formE1 = document.getElementById('form'); 



const scoreE1 = document.getElementById("score")  

let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score = 0;                                        

}
scoreE1.innerText = `score: ${score}`               //the end
const inputE1 = document.getElementById("input");    

questionE1.innerText = `what is ${num1} multiply by ${num2}?`;   // heading for multiplication randomly number1 and number2


 const correctAns = num1 * num2; //4  logic

 formE1.addEventListener("submit", ()=>{   //  arrow function
    const userAns = +inputE1.value;

    if(userAns === correctAns)  //condition
    {
           score++;
           updateLocalStorage(); // we are updating in local storage
    }
else{
    score--;
    updateLocalStorage();  
}

         
 });

 function updateLocalStorage(){            //call back function
    localStorage.setItem("score",JSON.stringify(score))  
 }
