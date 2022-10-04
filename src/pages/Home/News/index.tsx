import React, { ReactElement } from "react";
import styles from './News.module.scss';
import { INews } from "interfaces";

const News = (props: INews): ReactElement => {

  const { title, description, imagePath } = props;

  return (
    <div className={styles.container}>
      <figure>
        <img src={imagePath} alt={title} />
      </figure>
      <figcaption>
        <h4>{title}</h4>
        <p>{description}</p>
      </figcaption>
    </div>
  );
};

export default News;