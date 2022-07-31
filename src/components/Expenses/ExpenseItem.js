import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"
import React, { useState } from "react";

const ExpenseItem=(props)=>{

    
    const [title,setTitle] = useState(props.title);
    
    
    
    const clickHandler = () =>{
        setTitle('Dibot');
    }

    return (
            <div className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__discription">
                    <h2>{title}</h2>
                </div>
                <div className="expense-item__price">
                    ${props.price}
                </div>
                <button onClick={clickHandler}>Change Title</button>

            </div>
        
    );
}

export default ExpenseItem;