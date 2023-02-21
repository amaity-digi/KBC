import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import Start from './components/Start';

function App() {

  const [userName,setUserName] = useState(null);
  const [questionNumber , setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned,setEarned] = useState("₹ 0");

  const data=[
    {
      id:1,
      question:"Which of the following is a superclass of every class in Java?",
      answers:[
        {
          text:'ArrayList',
          correct:false,
        },
        {
          text:'Abstract class',
          correct:false,
        },
        {
          text:'Object class',
          correct:true,
        },
        {
          text:'String',
          correct:false,
        },
      ],
      
    },
    {
      id:2,
      question:"'Good Friday' is observed to commemorate the event of",
      answers:[ 
        {
          text:'birth of Jesus Christ',
          correct:false,
        },
        {
          text:'birth of St. Peter',
          correct:false,
        },
        {
          text:'crucification of Jesus Christ',
          correct:true,
        },
        {
          text:'rebirth of Jesus Christ',
          correct:false,
        },
      ],

    },
    {
      id:3,
      question:"Who is the author of the epic 'Meghdoot?",
      answers:[ 
        {
          text:'Vishakadatta',
          correct:false,
        },
        {
          text:'Valmiki',
          correct:false,
        },
        {
          text:'Banabhatta',
          correct:false,
        },
        {
          text:'Kalidas',
          correct:true,
        },
      ],

    },
    {
      id:4,
      question:"Pongal is a popular festival of which state?",
      answers:[ 
        {
          text:'Karnataka',
          correct:false,
        },
        {
          text:'Kerala',
          correct:false,
        },
        {
          text:'Tamil Nadu',
          correct:true,
        },
        {
          text:'Andhra Pradesh',
          correct:false,
        },
      ],

    },
    {
      id:5,
      question:"Rath Yatra is famous festival at",
      answers:[ 
        {
          text:'Ayodhya',
          correct:false,
        },
        {
          text:'Mathura',
          correct:false,
        },
        {
          text:'Dwaraka',
          correct:false,
        },
        {
          text:'Puri',
          correct:true,
        },
      ],

    },
    {
      id:6,
      question:"Which of the followiing is a folk dance of India?",
      answers:[ 
        {
          text:'Kathakali',
          correct:false,
        },
        {
          text:'Mohiniattam',
          correct:false,
        },
        {
          text:'Garba',
          correct:true,
        },
        {
          text:'Manipuri',
          correct:false,
        },
      ],

    },
    {
      id:7,
      question:"Who called Subhash Chandra Bose as Desh Nayak ?",
      answers:[ 
        {
          text:'Lala Lajpat Rai',
          correct:false,
        },
        {
          text:'Rabindranath Tagore',
          correct:true,
        },
        {
          text:'Mahatma Gandhi',
          correct:false,
        },
        {
          text:'Bal Gangadhar Tilak',
          correct:false,
        },
      ],

    },
    {
      id:8,
      question:"When did the website `FaceBook` lanch?",
      answers:[ 
        {
          text:'2003',
          correct:false,
        },
        {
          text:'2005',
          correct:false,
        },
        {
          text:'2006',
          correct:false,
        },
        {
          text:'2004',
          correct:true,
        },
      ],

    },
    {
      id:9,
      question:"During World War II, when did Germany attack France?",
      answers:[ 
        {
          text:'1940',
          correct:true,
        },
        {
          text:'1941',
          correct:false,
        },
        {
          text:'1942',
          correct:false,
        },
        {
          text:'1943',
          correct:false,
        },
      ],

    },
    {
      id:10,
      question:" The ‘Lady with the Lamp’ was the name given to?",
      answers:[ 
        {
          text:'Vijayalakshmi Pandit',
          correct:false,
        },
        {
          text:'Queen Elizabeth',
          correct:false,
        },
        {
          text:'Florence Nightingale',
          correct:true,
        },
        {
          text:'Princess Diana',
          correct:false,
        },
      ],

    },
    {
      id:11,
      question:"The biggest part of the brain is",
      answers:[ 
        {
          text:'Spinal cord',
          correct:false,
        },
        {
          text:'Cerebellum',
          correct:false,
        },
        {
          text:'Cerebrum',
          correct:true,
        },
        {
          text:'Brain Stem',
          correct:false,
        },
      ],

    },
    {
      id:12,
      question:" At room temperature, which is the only metal that is in liquid form?",
      answers:[ 
        {
          text:'Iron',
          correct:false,
        },
        {
          text:'Aluminum',
          correct:false,
        },
        {
          text:'Mercury',
          correct:false,
        },
        {
          text:'Silver',
          correct:true,
        },
      ],

    },
    {
      id:13,
      question:"The Atomic Nucleus was discovered by—",
      answers:[ 
        {
          text:'Rutherford',
          correct:true,
        },
        {
          text:'Dalton',
          correct:false,
        },
        {
          text:'Einstein',
          correct:false,
        },
        {
          text:'Thompson',
          correct:false,
        },
      ],

    },
    {
      id:14,
      question:"Hydrogen bomb is based on the principle of ",
      answers:[ 
        {
          text:'nuclear fission',
          correct:false,
        },
        {
          text:' nuclear fusion',
          correct:true,
        },
        {
          text:'natural radioactivity',
          correct:false,
        },
        {
          text:' artificial radioactivity',
          correct:false,
        },
      ],

    },
    {
      id:15,
      question:"Which river of India is called Vridha Ganga?",
      answers:[ 
        {
          text:'Krishna',
          correct:false,
        },
        {
          text:'Godavari',
          correct:true,
        },
        {
          text:'Kaveri',
          correct:false,
        },
        {
          text:'Narmada',
          correct:false,
        },
      ],

    },
    {
      id:16,
      question:"Which foreign country is closest to Andaman Islands",
      answers:[ 
        {
          text:'Sri Lanka',
          correct:false,
        },
        {
          text:'Indonesia',
          correct:false,
        },
        {
          text:'Myanmar',
          correct:true,
        },
        {
          text:'Pakistan',
          correct:false,
        },
      ],

    },
  ]

  const moneyPyramid = useMemo(()=>
    [
      {id:1,amount:"₹1,000"},
      {id:2,amount:"₹2,000"},
      {id:3,amount:"₹3,000"},
      {id:4,amount:"₹5,000"},
      {id:5,amount:"₹10,000"},
      {id:6,amount:"₹20,000"},
      {id:7,amount:"₹40,000"},
      {id:8,amount:"₹80,000"},
      {id:9,amount:"₹1,60,000"},
      {id:10,amount:"₹₹3,20,000"},
      {id:11,amount:"₹6,40,000"},
      {id:12,amount:"₹12,50,000"},
      {id:13,amount:"₹25,00,000"},
      {id:14,amount:"₹50,00,000"},
      {id:15,amount:"₹1 Crore"},
      {id:16,amount:"₹7 Crore"},
    ].reverse(),
  []);
   

  useEffect(()=>{
    questionNumber >1 && 
    setEarned(moneyPyramid.find((m)=>m.id===questionNumber-1).amount);
  },[moneyPyramid, questionNumber]);

  return (
    <div className="app">
      {userName ? (
        <>
<div className='main'>
      {stop ? <h1 className='endText'>You earned:{earned}</h1> : (
        <>
      <div className='top'>
        <div className='timer'><Timer  setStop={setStop} questionNumber={questionNumber}/></div>
      </div>
      <div className='bottom'>
        <Quiz
        data={data}
        setStop={setStop} 
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        />
        </div>
        </>

)}
     </div>
     <div className='pyramid'>
      <ul className='moneyList'>
        {moneyPyramid.map((money)=>(
           <li className={questionNumber === money.id ? 'moneyListItem active' : 'moneyListItem'}>
           <span className='moneyListItemNumber'>{money.id}</span>
           <span className='moneyListItemAmount'>{money.amount}</span>
         </li>
        ))}
       

        
      </ul>
     </div>
        </>
      ) : <Start setUserName={setUserName} />} 
     
    </div>
  );
}

export default App;
