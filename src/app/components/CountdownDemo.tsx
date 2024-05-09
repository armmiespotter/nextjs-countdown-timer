"use client"
import { useCountdown } from '@/hooks/useCountdown';
import React from 'react'

type Props = {
    targetDate: Date
}

const CountdownTimer = ({ targetDate }: Props) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    return (
        <div>
            <div>
                <div>{days}</div>
                <div>Days</div>
            </div>
            <div>
                <div>{hours}</div>
                <div>Hours</div>
            </div>
            <div>
                <div>{minutes}</div>
                <div>Minutes</div>
            </div>
            <div>
                <div>{seconds}</div>
                <div>Seconds</div>
            </div>
        </div>
    )
}

export default CountdownTimer
