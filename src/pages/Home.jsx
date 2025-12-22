import Button from '../components/button.jsx';

function Home() {

  return (
    <div className='landingpage'>
        <h1>Job Hunting Sux</h1>
        <p>Update your CV in <em>minutes</em>, not weeks.</p>
        <form className='form-signup'>
            <input className='input__field input__field-medium' placeholder='name' />
            <input className='input__field input__field-medium' placeholder='email address' />
            <Button className='btn-primary' text='Start CV' variant='popup' />
        </form>
    </div>
  );
}

export default Home;
