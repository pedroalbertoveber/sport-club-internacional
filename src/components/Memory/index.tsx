import React, { ReactElement } from "react";
import { IMemory } from "interfaces";
import styles from './Memory.module.scss';

const Memory = ({ title, description, imgPath }: IMemory): ReactElement => {
  return (
    <article className={styles.memoryContainer}>
      <figcaption>
        <h2>{ title }</h2>
        <p>{ description }</p>
      </figcaption>
      <figure>
        <img src={ imgPath } alt={ title }/>
      </figure>
    </article>
  );
};

export default Memory;