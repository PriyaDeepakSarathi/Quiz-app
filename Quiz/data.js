const quesDB=[
    {question:'Q1:The value of 5x when x = 5 is',
    a:'25',
     b:'10',
     c:'5',
     d:'15',
    ans:'ans1',
      },
     {question:'Q2:The value of 3x when x = 5 is',
    a:'25',
     b:'10',
     c:'5',
     d:'15',
    ans:'ans4',
      },
       {question:'Q3:The value of 4+6=',
     a:'25',
     b:'10',
     c:'5',
     d:'15',
    ans:'ans2',
      },
       {question:'Q4:The value of 10-5=',
     a:'25',
     b:'0',
     c:'5',
     d:'15',
    ans:'ans3',
      },

        {question:'Q5:The value of 5*5=',
     a:'25',
     b:'0',
     c:'5',
     d:'15',
    ans:'ans1',
      },

      
        {question:'Q6:The value of 5-5=',
    a:'25',
     b:'0',
     c:'5',
     d:'15',
    ans:'ans2',
      },
      
        {question:'Q7:The value of 1*0=',
     a:'25',
     b:'0',
     c:'5',
     d:'15',
    ans:'ans2',
      },
     {question:'Q8:The value of 2*2=',
     a:'4',
     b:'0',
     c:'6',
     d:'10',
    ans:'ans4',
      },
           {question:'Q9:The value of 25/5=',
    a:'25',
     b:'10',
     c:'5',
     d:'15',
    ans:'ans3',
      },
           {question:'Q10:The value of 20/2=',
     a:'25',
     b:'10',
     c:'5',
     d:'15',
    ans:'ans2',
      },
]


const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit= document.querySelector('#submit');
const answers=document.querySelectorAll('.answer')
const innerdiv=document.querySelector('.check');
const next =document.querySelector('#next');

let questionCount=0;

const loadQuestion=()=>{

  const questionList= quesDB[questionCount];
  question.innerText=questionList.question;
  option1.innerText=questionList.a;
  option2.innerText=questionList.b;
  option3.innerText=questionList.c;
   option4.innerText=questionList.d;
}

loadQuestion();

const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curAnsElem)=>{
 
        if(curAnsElem.checked){
         
            answer=curAnsElem.id;
        }
    })
    return answer;
}


submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
   
    if(checkedAnswer==quesDB[questionCount].ans){
    console.log('correct');
    innerdiv.style.backgroundColor = 'green';
  }
  else{
    innerdiv.style.backgroundColor = 'red';
  }
  
  ;})

  next.addEventListener('click',()=>{
     questionCount++;
       innerdiv.style.backgroundColor = '#cccccc';
    if(questionCount<quesDB.length){
        loadQuestion();
    
  }});

 