import React, {useState} from 'react';
import data from './data';
import './index.css';
import SingleQuestion from "./SingleQuestion";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [questions, SingleQuestions] = useState(data)


  return (
    <div className='about-me'>
     

     <div className='container'>
       <h3 className='topic'>
              Five Things About Me As A Developer
       </h3>
       <section className='info'>
         {
           questions.map((question)=>{
             return <SingleQuestion key={question.id} {...question} />
           })
         }

       </section>

     </div>
      
    </div>
  );
}

export default App;
