import { useState } from "react"

export default function Apple():JSX.Element{
    const[apple, setApple] = useState<string>("Apple");

    function eatApple():void{
        if(apple === "stub") {
            setApple("Apple"); 
        } else {
            setApple("stub");
        }   
    }

    return (
        <>
            <h2>{apple}</h2>
            <button type="button" onClick={eatApple}>{apple === "stub" ? "Restore apple" : "Eat apple"}</button>
        </>
    )
}