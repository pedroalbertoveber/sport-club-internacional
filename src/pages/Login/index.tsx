import React, { ReactElement, useContext, useState } from 'react';
import Input from './Input';
import CamisaFrente from 'assets/img/camisa-frente.jpg';
import CamisaCostas from 'assets/img/camisa-costas.jpg';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import { UserContext } from 'context/UserContext';

const Login = (): ReactElement => {

  const { name, setName, password, setPassword, setIsLogged, isLogged } = useContext(UserContext);
  const navigate = useNavigate();

  if (isLogged) {
    navigate('/');
  }

  return (
    <section className={styles.loginContainer}>
      <div className={styles.loginContainer__title}>
        <h2>Área do Sócio</h2>
      </div>
      <div className={styles.loginContainer__info}>
        <figure className={styles.background}>
          { name.length === 0 ? <img src={CamisaFrente} alt='Camisa do Sport Club Internacional' /> : <img src={CamisaCostas} alt='Camisa do Sport Club Internacional' />}
          {name && <span>{name}</span>}
        </figure>
        <form className={styles.form}>
          <Input state={name} setState={setName} type='text' />
          <Input state={password} setState={setPassword} type='password' />
          <a href='https://internacional.com.br/associe-se' target='_blank' rel="noreferrer">Seja Sócio</a>
          <button type='button' onClick={() => {
            setIsLogged(true);
            navigate('/', { replace: true });
          }}
          disabled={name.length === 0 || password.length === 0}>Entrar</button>
        </form>
      </div>
    </section>
  );
};

export default Login;