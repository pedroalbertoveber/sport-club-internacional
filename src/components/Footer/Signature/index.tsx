import React, { ReactElement } from "react";
import styles from './Signature.module.scss';

const Signature = (): ReactElement => {
  return (
    <address className={styles.addressContainer}>
      <span className={styles.title}>Sport Club Internacional</span>
      <p>Av. Padre Cacique, 891 - CEP 90810-240 - Porto Alegre - RS <br />(51) 3230-4600</p>
    </address>
  );
};

export default Signature;