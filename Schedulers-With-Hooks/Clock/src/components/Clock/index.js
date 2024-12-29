import {useEffect, useState} from 'react'

import {
  ClockContainer,
  Heading,
  ClockImage,
  Time,
  Own,
} from './styledComponents'

const Clock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date())
    }, 1000)
    console.log('Effect executed and Interval scheduled')

    return () => {
      clearInterval(timerId)
      console.log('Cleanup Function executed')
    }
  }, [])

  return (
    <ClockContainer>
      <Heading>Clock</Heading>
      <Own>Designed by Ashiq</Own>
      <ClockImage
        src="https://assets.ccbp.in/frontend/hooks/clock-img.png"
        alt="clock"
      />
      <Time> {date.toLocaleTimeString()} </Time>
    </ClockContainer>
  )
}

export default Clock
