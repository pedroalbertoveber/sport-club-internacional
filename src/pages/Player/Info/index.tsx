import React, { ReactElement } from 'react';
import styles from './Info.module.scss';

interface Props {
  attribute: string;
  value: string;
}

const Info = (props: Props): ReactElement => {

  const { attribute, value } = props;

  return (
    <div className={styles.infoContainer}>
      <strong>{ value }</strong>
      <span>{ attribute }</span>
    </div>
  );
};

export default Info;