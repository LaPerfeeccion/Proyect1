import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Text2({ type, name, value, onChange }) {
 return (
    <TextField
      id="outlined-basic"
      label="email"
      variant="outlined"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
 );
}
