// import { useState } from 'react';
// import axios from 'axios';
// import Button  from "@mui/material/Button"
// import { TextField, Typography } from "@mui/material";

// export default function Home() {
//   const [message, setMessage] = useState('');
//   const [token, setToken] = useState('');
//   const [retrievedMessage, setRetrievedMessage] = useState('');
//   const [error, setError] = useState('');

//   // Handle storing a message
//   const storeMessage = async () => {
//     if (!message) {
//       alert('Please enter a message');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:3004/store', { message });
//       setToken(response.data.token);
//       setMessage('');
//     } catch (error) {
//       console.error('Error storing message:', error);
//     }
//   };

//   // Handle retrieving a message by token
//   const retrieveMessage = async () => {
//     if (!token) {
//       alert('Please enter a token');
//       return;
//     }

//     try {
//       const response = await axios.get(`http://localhost:3004/retrieve/${token}`);
//       setRetrievedMessage(response.data.message);
//       setError('');
//     } catch (error) {
//       console.error('Error retrieving message:', error);
//       setError('Failed to retrieve the message. It may have expired or be invalid.');
//     }
//   };

//   return (
//     <div >
      

//     <div>

//         <div>
//         <h1>Message Store</h1>
//         <h2>Store a Message</h2>
//         <TextField
//          multiline 
//          rows={10}
          
//           style={{ width: '600px',height:"50px" }}
        
         
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Enter your message here"
          
//         />
//         </div>
      
//       <div>
//         <Button onClick={storeMessage}>Store Message</Button>
//         {token && <p>Your token: <strong>{token}</strong></p>}
//       </div>
//     </div>
      

//       <div>
//         <h2>Retrieve a Message</h2>
//         <input
//           type="text"
//           value={token}
//           onChange={(e) => setToken(e.target.value)}
//           placeholder="Enter token to retrieve message"
//         />
//         <button onClick={retrieveMessage}>Retrieve Message</button>

//         {retrievedMessage && (
//           <div>
//             <h3>Retrieved Message:</h3>
//             <pre>{retrievedMessage}</pre>
//           </div>
//         )}

//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import axios from 'axios';
import {
  Button,
  TextField,
  Typography,
  Box,
  Stack,
  Paper
} from '@mui/material';

export default function Home() {
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  const [retrievedMessage, setRetrievedMessage] = useState('');
  const [error, setError] = useState('');

  const storeMessage = async () => {
    if (!message) {
      alert('Please enter a message');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3004/store', { message });
      setToken(response.data.token);
      setMessage('');
    } catch (error) {
      console.error('Error storing message:', error);
    }
  };

  const retrieveMessage = async () => {
    if (!token) {
      alert('Please enter a token');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3004/retrieve/${token}`);
      setRetrievedMessage(response.data.message);
      setError('');
    } catch (error) {
      console.error('Error retrieving message:', error);
      setError('Failed to retrieve the message. It may have expired or be invalid.');
    }
  };

  return (
   
    

    <Box minHeight="100vh" pb="17%">
      <Box p={4}>
        <Typography variant="h4" gutterBottom>
        🔐 Token Text Exchange
        </Typography>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6">Store Message</Typography>
          <Stack spacing={2} mt={2}>
            <TextField
              multiline
              rows={6}
              fullWidth
              label="Enter your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button variant="contained" onClick={storeMessage}>
              Store Message
            </Button>
            {token && (
              <Typography>
                Your token: <strong>{token}</strong>
              </Typography>
            )}
          </Stack>
        </Paper>

        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6">Retrieve a Message</Typography>
          <Stack spacing={2} mt={2}>
            <TextField
              fullWidth
              label="Enter token to retrieve message"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <Button variant="outlined" onClick={retrieveMessage}>
              Retrieve Message
            </Button>
            {retrievedMessage && (
              <Box>
                <Typography variant="subtitle1">Retrieved Message:</Typography>
                <Paper sx={{ p: 2, mt: 1, backgroundColor: '#f4f4f4' }}>
                  <pre style={{ margin: 0 }}>{retrievedMessage}</pre>
                </Paper>
              </Box>
            )}
            {error && <Typography color="error">{error}</Typography>}
          </Stack>
        </Paper>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          width: '100%',
          height: '12%',
          backgroundColor: '#808080',
          color: 'white',
          textAlign: 'center',
          p: 2,
        }}
      >
        <Typography variant="body1">
          website by{' '}
          <a href="https://github.com/Komal-vm" style={{ color: 'white', textDecoration: 'underline' }}>
            @komal-vm
          </a>
        </Typography>


  <Typography variant="body2" color="white">
    © {new Date().getFullYear()} copyit
  </Typography>
  <br></br>
  <div style={{display:'flex',justifyContent:"space-evenly",flexWrap:"wrap"}}>
  <a href="/privacy-policy" style={{ color: 'white', textDecoration: 'underline' }}>
    📃🔏 Privacy Policy
  </a>
  <div>
    |
  </div>
  <a href="/terms-of-service" style={{ color: 'white', textDecoration: 'underline' }}>
    📃 Terms of Service
  </a>
  <div>
    |
  </div>
  <a href="mailto:komalchakradhar123@gmail.com" style={{ color: 'white', textDecoration: 'underline' }}>
   ✉️  komalchakradhar123@gmail.com
  </a>
  <div>
    |
  </div>
  <a href="tel:+917892253772" style={{ color: 'white', textDecoration: 'underline' }}>
    📞 +91 7892253772
  </a>

  </div>
  

      </Box>
    </Box>
  );
}

   
    
 
