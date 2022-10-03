import React, { ReactElement, useState } from 'react';
import Input from './Input';
import CamisaFrente from 'assets/img/camisa-frente.jpg';
import CamisaCostas from 'assets/img/camisa-costas.jpg';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';

const Login = (): ReactElement => {

  const [ username, setUsername ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');

  const navigate = useNavigate();

  return (
    <section className={styles.loginContainer}>
      <div className={styles.loginContainer__title}>
        <h2>Área do Sócio</h2>
      </div>
      <div className={styles.loginContainer__info}>
        <figure className={styles.background}>
          { username.length === 0 ? <img src={CamisaFrente} alt='Camisa do Sport Club Internacional' /> : <img src={CamisaCostas} alt='Camisa do Sport Club Internacional' />}
          {username && <span>{username}</span>}
        </figure>
        <form className={styles.form}>
          <Input state={username} setState={setUsername} type='text' />
          <Input state={password} setState={setPassword} type='password' />
          <a href='https://internacional.com.br/associe-se' target='_blank' rel="noreferrer">Seja Sócio</a>
          <button type='button' onClick={() => navigate('/', { replace: true })}
          disabled={username.length === 0 || password.length === 0}>Entrar</button>
        </form>
      </div>
    </section>
  );
};

export default Login;