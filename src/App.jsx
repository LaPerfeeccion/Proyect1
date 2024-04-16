import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Send from './components/send'
import { Stack, Typography,Container } from '@mui/material'
import Text from './components/text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Stack className='formulario'>
      <Typography variant='h1'> 
          Login 
      </Typography>
      <Container className='textfield'>
      <Text></Text>
         </Container>
      <Send> </Send>
    </Stack>
      
    </>
  )
}

export default App