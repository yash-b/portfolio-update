import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function SMSCard() {
    function handleSubmit(e) {
      e.preventDefault();
      const content = e.target[0].value;
      const number = e.target[1].value;

      window.alert(number);
    };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Send Text Message!
          <br/>Messages are sent via the <a href="https://trumpia.com/" target="_blank">Trumpia API</a>
        </Typography>
      </CardContent>
      <CardActions>
        <form onSubmit={handleSubmit}>
            <TextField id="message" label="Message goes here.." variant="standard" />
            <TextField id="text-number" label="Number goes here.." variant="standard" />
            <br/><br/><Button type="submit" variant="contained" size="small">Send</Button>
        </form>
      </CardActions>
    </Card>
  );
}
