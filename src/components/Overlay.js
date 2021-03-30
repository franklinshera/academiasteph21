import React , { useState , useEffect } from 'react'

import  Logo from '.././images/as21logo.png';

const Overlay = () => {

    const [loading, setLoading] = useState(true)
    const [timerOff, setTimerOff] = useState(false)
    const [hasReady, setHasReady] = useState(false)



    useEffect(() => {
        setTimeout(() => {
            if (hasReady) {
                setLoading(false)
                setTimerOff(true)
            }
        },3000)


    },[])

    
    useEffect(() => {
        
       
          document.onreadystatechange = () => {
            if (document.readyState === 'complete' && timerOff) {
                setLoading(false)
                setHasReady(true)
            }
          };
          

    }, [])


  
    return (
        <>
            { (loading) && (                
                <div className={(loading) ? 'overlay' : 'hidden'}>
                    <div className="inn-overlay">
                        <img src={Logo} className="h-20" alt="Academiasteph21 Loading logo"/>
                        <span className="mt-2 text-3xl" data-text="AcademiaSteph21">AcademiaSteph21</span>
                    </div>
                </div>
            )}
        </>
    )
}

export default Overlay
