import './App.css';
import { Button } from '@mui/material';
import MuiButton from './Components/MuiButton';

function App() {
  return (
   <>
      <Button variant='contained' color="primary">hello</Button>
      <Button variant='contained' color="secondary">hello</Button>
      ------
      <MuiButton>Aqui </MuiButton>
   </>
   
  );
}

export default App;
