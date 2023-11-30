import React, { useEffect, useState } from 'react'

const getReturnValues = (targetDate: number) => {

    const dayMs = 86400000;
    const hrMs = 3600000;
    const minMs = 60000;
    const secMs = 1000;

    const dayLefts = Math.floor(targetDate / dayMs)
    const hourLefts = Math.floor((targetDate % dayMs) / hrMs)
    const minLefts = Math.floor((targetDate % dayMs) % hrMs / minMs)
    const secondLefts = Math.floor((targetDate % dayMs) % hrMs % minMs / secMs)

    return [dayLefts, hourLefts, minLefts, secondLefts]

}

const useCountdown = (targetDate: Date) => {
    const currentDate = new Date();
    const [diffDate, setDiffDate] = useState(targetDate.getTime() - currentDate.getTime())

    useEffect(() => {
        const interval = setInterval(() => {
            setDiffDate(targetDate.getTime() - new Date().getTime());
        }, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    return getReturnValues(diffDate)

}

export { useCountdown }