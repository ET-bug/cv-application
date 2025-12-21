import Button from '../components/button.jsx';

function Home() {

  return (
    <div className='landing'>
        <h1>Job Hunting Sux</h1>
        <p>Update your CV in <em>minutes</em>, not weeks.</p>
        <form className='form-signup'>
            <input className='input-small' placeholder='name' />
            <input className='input-small' placeholder='email address' />
            <Button className='btn-primary' text='Generate CV' variant='popup' />
        </form>
    </div>
  );
}

export default Home;
