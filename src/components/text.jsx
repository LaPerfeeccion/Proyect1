import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Text({ type, name, value, onChange }) {
 return (
    <TextField
      id="outlined-basic"
      label="password"
      variant="outlined"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
 );
}