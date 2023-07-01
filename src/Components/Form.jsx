import { useState } from 'react';
import styles from '../styles/form.module.css'

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [onSuccess, setOnSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 5 && !email.includes('@')) {
      setError('Por favor verifique su información nuevamente');
      return;
    }
    setName('')
    setEmail('')
    setError('')


    setOnSuccess(`Gracias ${name}, nos pondremos en contacto con usted a la brevedad`);
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>
        <span style={{fontWeight: 'bold'}}>Nombre completo: </span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          <span style={{fontWeight: 'bold'}}>Email: </span>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button style={{width: '5rem', borderRadius:'0.2rem'}} type="submit">Enviar</button>
      </form>
      {error && <p className={styles.form_p}>{error}</p>}
      {onSuccess && <p className={styles.form_p}>{onSuccess}</p>}
    </div>
  );
};

export default Form;
