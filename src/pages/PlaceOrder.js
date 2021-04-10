import React,{useEffect} from 'react'

const PlaceOrder = () => {


    
    useEffect(() => {
        window.scrollTo(0,0)
        document.querySelector('title').text = 'AcademiaSteph21 | Place Order'
        

    }, [])

    return (
        <div className=" place-order-page">
            <h1 className="text-4xl">Place Order Here!</h1>
        </div>
    )
}

export default PlaceOrder
