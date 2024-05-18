import { useState } from "react";
import './App.css'


function Imagegenerator(){

    const [input,Setinput] =  useState("");
    const [resimage,SetresImage] =  useState("")


    // function SearchImage(){
    //     query(input)
    // }

    async function query(data) {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/prompthero/openjourney-v4",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.blob();
        return result;
    }
   


    const  gennerateImage = async () =>{
            await  query({"inputs":input}).then((response) => {
                let imgsrc = URL.createObjectURL(response)
                SetresImage(imgsrc)
            });
    }

    return(
        <>
            
              <div className="outerdiv">
                <span>Image Generator App  :</span>
              <input type="text" placeholder="Search for image" onChange={(e)=>Setinput(e.target.value)}></input>
                <button onClick={gennerateImage}>Search</button> 
            </div><br></br>
            <div className="imagediv">
                
                <img src={resimage}></img>

            </div> 
        </>
    )
}

export default Imagegenerator;;