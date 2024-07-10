import React, { useEffect, useState } from "react";

export default function UseEffectExample () {
    const [count, setCount] = useState(0);
    const userId = "user" + count;

    useEffect(()=> {
        console.log('in use effect: ' + userId)
        let ignore = false;
        const fetchData = async () => {
            // Make a network request using userId
            const response = await fetchCall(userId);
            if (!ignore) {
                console.log("RECEIVED API response FOR : " + response);
            }
        };

        fetchData();

        return () => {
            console.log('Clean up for: ' + userId)
            ignore = true;
        }
    }, [userId])

    const fetchCall = (userId) => {
        return new Promise((resolve, reject) => {
            setTimeout((userId) => {
              resolve(userId);
            }, 3000, userId);
          });
    }

    const handleClick = () => {
        setCount(count + 1);
    }

    return <>
        <button onClick={handleClick}>Click for calling API with new userID</button>
        <button >{userId}</button>
    </>
}