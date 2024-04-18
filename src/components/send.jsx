import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

export default function Send({ validateForm }) {
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={validateForm} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  );
}