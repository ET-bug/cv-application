import Button from '../components/Button.jsx';
import { useState } from 'react';

function Home({onStart}) {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (!fullName || !email) {
      alert('Please enter your name and email')
      return;
    }
    onStart({fullName, email});
  };

  return (
    <div className='landingpage'>
        <h1>Job Hunting Sux</h1>
        <p>Update your CV in <em>minutes</em>, not weeks.</p>
        <div className='form-signup'>
            <input className='input__field input__field-medium' placeholder='name' value={fullName} onChange={e => setFullName(e.target.value)}/>
            <input className='input__field input__field-medium' placeholder='email address' value={email} onChange={e => setEmail(e.target.value)}/>
            <Button className='btn-primary' text='Start CV' variant='popup' onClick={handleSubmit}/>
        </div>
    </div>
  );
}

export default Home;
