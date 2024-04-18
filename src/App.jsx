import { useState } from 'react';
import './App.css';
import Text from './components/text'; // Asegúrate de que la ruta sea correcta
import Text2 from './components/text2'; // Asegúrate de que la ruta sea correcta
import { Typography, Container, Button, Stack } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function App() {
 const [user, setUser] = useState({
    email: '',
    password: ''
 });

 const handleInfo = (e) => {
    e.preventDefault();
    if (user.email === '' || user.password === '') {
      console.error('El email o la contraseña están vacíos');
      alert('El email o la contraseña están vacíos');
    } else {
      if (user.email === "usuario@ejemplo.com" && user.password === "contraseña123") {
        alert('Inicio de sesión exitoso');
        // Aquí puedes redirigir al usuario a otra página o realizar otras acciones
      } else {
        alert('Correo electrónico o contraseña incorrectos');
      }
    }
 }

 const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
 }

 return (
    <div className="App">
      <form onSubmit={handleInfo} className='formulario'>
        <Typography variant='h1'>Login</Typography>
        <Container className='textfield'>
          <Text2
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
          <Text
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </Container>
        <Stack direction="row" spacing={2}>
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </Stack>
      </form>
    </div>
 );
}

export default App;
