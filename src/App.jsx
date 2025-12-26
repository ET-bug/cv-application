import { useState } from 'react';
import './styles/App.css';
import Home from './pages/Home.jsx';
import Form from './pages/Form.jsx';

function App() {
  
  const [started,setStarted] = useState(false);
  const [initialData, setInitialData] = useState({fullName:'',email:''});
  
  const handleStart = ({fullName, email}) => {
    setInitialData({fullName,email});
    setStarted(true);
  }
  
  return (
    <>
      {started ? (
        <Form initialData={initialData} />
      ) : (
        <Home onStart={handleStart} />
      )}
    </>
  )
}

export default App;