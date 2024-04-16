import { useState } from 'react'

import './App.css'
import Send from './components/send'
import { Stack, Typography,Container } from '@mui/material'
import Text from './components/text'

function App() {

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