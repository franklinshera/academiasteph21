import React,{useEffect} from 'react'
import { InputField , RadioInputField , TextAreaInputField } from '../config/FormElements.js'

const PlaceOrder = () => {
  
    
    useEffect(() => {
        window.scrollTo(0,0)
        document.querySelector('title').text = 'AcademiaSteph21 | Place Order'
       

    }, [])

    return (
        <div className=" place-order-page">
            <h1 className="text-4xl">Place Order Here!</h1>
            <form action="" className="w-5/6 sm:w-3/4 lg:w-3/5 mt-7 mb-14 lg:mb-28 2xl:w-1/2">                    
                    <InputField labelName='Name' type='text' placeholder="Type Your Name Here" />
                    <InputField labelName='Email' type='text' placeholder="Type Your Email Here" />
                    <InputField labelName='WhatsApp Number' type='number' placeholder="Type Your WhatsApp Number Here" />                   
                    <TextAreaInputField labelText='Message' textareaName='message' id='message' placeholder='Type Message Here'/>
                    <RadioInputField labelText='Email Me Back' inputName='mailback'/>
                    <RadioInputField labelText='Add Me On WhatsApp' inputName='addonwhatsapp'/>

                    <button type="submit" className="btn-pri">SUBMIT</button>
                    
            </form>
        </div>
    )
}

export default PlaceOrder
