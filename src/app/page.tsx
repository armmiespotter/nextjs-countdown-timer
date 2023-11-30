"use client"
import { Box } from '@mui/material'
import CountdownTimer from './components/CountdownTimer'

export default function Home() {
  const targetDate = new Date("2024-01-01")
  return (
    <Box sx={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <CountdownTimer targetDate={targetDate} />
    </Box>
  )
}
