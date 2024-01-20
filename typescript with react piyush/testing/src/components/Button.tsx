import React, { ReactHTMLElement, useState } from "react";

interface ButtonProps{
    text:string | number,
    onClick? : () =>void; 

}
interface Book{
    name:string,
    price?:number,

}



const Button : React.FC<ButtonProps>= (props) => {
    // destructing
    const  {text,onClick}= props;


    const [value,setValue] = useState<string| number>("")

    const handleOnchange = (e: React.ChangeEvent <HTMLInputElement>) =>{
        setValue(e.target.value);

    }
    const handlesubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(e);
    }


    return(
        <div>  
            <form onSubmit={handlesubmit}>
            <input onChange={handleOnchange} type="text" placeholder="Enter your name:" value={value} />
           
            </form>                  
            <h2>{value}</h2>
        </div>
    )
}
export default Button;
