"use client"
import { useCountdown } from '@/hooks/useCountdown';
import { Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react'

type Props = {
    targetDate: Date
}

const CountdownTimer = ({ targetDate }: Props) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    return (
        <Box>
            <Typography variant='h1'>Countdown...</Typography>
            <Stack direction={`row`} spacing={4} textAlign={`center`}>
                <CardContent>
                    <Typography variant='h2'>{days}</Typography>
                    <Typography variant='h4'>Days</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant='h2'>{hours}</Typography>
                    <Typography variant='h4'>Hours</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant='h2'>{minutes}</Typography>
                    <Typography variant='h4'>Minutes</Typography>
                </CardContent>
                <CardContent>
                    <Typography variant='h2'>{seconds}</Typography>
                    <Typography variant='h4'>Seconds</Typography>
                </CardContent>
            </Stack>
        </Box>
    )
}

export default CountdownTimer
