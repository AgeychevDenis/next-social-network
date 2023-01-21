import React from 'react';
import { PostFieldProps } from './PostField.props';
import styles from './PostField.module.scss';
import { Htag } from '../Htag/Htag';
import ArrowUp from './arrow-up.svg'

export const PostField = ({ className, ...props }: PostFieldProps): JSX.Element => {
   return (
      <div className={styles.wrapper} {...props}>
         <Htag tag='h1'>Что у вас нового?</Htag>
         <ArrowUp className={styles.icon} />
      </div>
   );
};
