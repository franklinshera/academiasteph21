import React , { useState , useEffect } from 'react'

import  Logo from '.././images/as21logo.png';

const Overlay = () => {

    const [loading, setLoading] = useState(true)


    // useEffect(() => {
        
    //      setTimeout(() => {
    //          setLoading(false)
    //      },3000)


    // }, [])

    return (
        <>
            { (loading) && (                
                <div className="overlay">
                    <div className="inn-overlay">
                        <img src={Logo} className="h-20" alt="academiasteph21 logo"/>
                        <span className="mt-2 text-3xl" data-text="AcademiaSteph21">AcademiaSteph21</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default Overlay
