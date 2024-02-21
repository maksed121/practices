import React from 'react'
import { MdBackspace } from "react-icons/md";

const Button = ({ text, bgColor, input, setInput, validated, setValidated }) => {
    return (
        <div className='bg-[#404452] h-[60px] w-[60px] rounded-2xl gap-2 border-t-2 border-gray-400 flex items-center justify-center
    text-white  cursor-pointer active:scale-95'
            style={{
                backgroundColor: bgColor
            }}
            onClick={() => {
                if (text == "Back") {
                    setInput(input.toString().slice(0, -1))
                } else if (text == "C" || text == "AC") {
                    setInput("");
                } else if (text == "X") {
                    setInput(input + "*");
                } else if (text == "=") {
                    //check the secret key
                    const secretKey = localStorage.getItem("secret_key")
                    if (secretKey== input) {                 
                        setValidated(true);
                    }
                    setInput(eval(input));
                }
                else {
                    setInput(input => input + text);
                }
            }}
        >
            <p className='text-2xl'>
                {text == "Back" ? <MdBackspace /> : text}
            </p>
        </div>
    )
}

export default Button;