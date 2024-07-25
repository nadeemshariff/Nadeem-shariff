import React from 'react'
import './App.css'
import Tabs from './components/Tabs'

function App() {
  // const [otp, setOtp] = useState(['', '', '', '', '', ''])

  // const handleChange = (element, index) => {
  //   if (isNaN(element.value)) return false

  //   setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

  //   if (element.nextSibling) {
  //     element.nextSibling.focus()
  //   }
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const enteredOtp = otp.join('')
  //   console.log('Entered OTP:', enteredOtp)
  //   // Add your OTP verification logic here
  // }

  return (
    <div className="App">
      <h1 className='text-center text-lg uppercase font-bold'>Nadeem Shariff</h1>
      <Tabs />
    </div>
  )
}

export default App

