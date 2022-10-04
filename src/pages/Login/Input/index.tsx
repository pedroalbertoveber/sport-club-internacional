import React, { ReactElement } from 'react';
import { BsPerson, BsLockFill } from 'react-icons/bs';
import styles from './Input.module.scss';

interface Props {
  state: string;
  setState: (newState: string ) => void;
  type: 'text' | 'password';
}

const Input = (props: Props): ReactElement => {

  const { state, setState, type } = props;

  return (
    <div className={styles.container}>
      <label>{type === 'text' ? 'Nome de Usuário' : 'Senha'}</label>
      <div className={styles.inputContainer}>
        { type === 'text' ? <BsPerson /> : <BsLockFill /> }
        <input type={type} value={state} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)}/>
      </div>
    </div>
  );
};

export default Input;