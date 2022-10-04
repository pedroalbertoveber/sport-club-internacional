import React, { createContext, useState, ReactElement } from "react";

const initialValue = {
  name: '',
  setName: () => {},
  password: '',
  setPassword: () => {},
  isLogged: false,
  setIsLogged: () => {},
};

type Props = {
  children: React.ReactNode,
}

type UserContextType = {
  name: string,
  setName: (newState: string) => void,
  password: string,
  setPassword: (newState: string) => void,
  isLogged: boolean,
  setIsLogged: (newState: boolean) => void,
}

export const UserContext = createContext<UserContextType>(initialValue);
UserContext.displayName = 'UserContext';

export const UserContextProvider = ({ children }: Props): ReactElement => {
  const [ name, setName ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ isLogged, setIsLogged ] = useState<boolean>(false);

  return (
    <UserContext.Provider value = {{ name, setName, password, setPassword, isLogged, setIsLogged }}>
      { children }
    </UserContext.Provider>
  );
};