import FormFields from "./forms/FormFields"
import { Box, Button, Typography } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Box sx={{marginTop: 3}}>
        <div className="App">
            <Routes>
                <Route path='/' element={<FormFields /> } />
            </Routes>
        </div>
      </Box>
    </Router>
  );
}

export default App;
