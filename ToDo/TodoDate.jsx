import { useEffect, useState } from "react";

export const TodoDate = () => {

    useEffect(() => {   // To prevent the Memory Leak
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();
            setTimeDate(`${formattedDate} - ${formattedTime}`);
        }, 1000);
        
        return () => clearInterval(interval);
    },[]);


    const [timeDate , setTimeDate] = useState("");
    return (
        <h2 className="date-time">{timeDate}</h2>
    );
}