import dynamic from 'next/dynamic'
const CountdownDemo = dynamic(() => import('./components/CountdownDemo'), { ssr: false })

export default function Home() {
  const targetDate = new Date("2025-01-01")
  return (
    <div>
      <CountdownDemo targetDate={targetDate} />
    </div>
  )
}
