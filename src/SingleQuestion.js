import React, {useState} from "react";
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';


const Question = ({title,answer}) => {
     
    const [showInfo, setShowInfo]  = useState(false)

    const changeIcon = () =>{
        setShowInfo(!showInfo)
    }

    return <article className="header">
        <header>
            <h4>{title}</h4>
            <button className="btn" onClick={changeIcon}>
              {showInfo? <AiOutlineMinus/> : <AiOutlinePlus />}
            </button>
        </header>
        {showInfo && <p>{answer}</p>}
    </article>
}

export default Question;