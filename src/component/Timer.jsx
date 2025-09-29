import { useState, useEffect } from "react"

export default function Timer(){
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [])


    return(
        <p>타이머: {seconds}초</p>
    )
}