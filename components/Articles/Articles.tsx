import React from 'react';
import { ArticlesProps } from './Articles.props';
import styles from './Articles.module.scss';
import Image from 'next/image';

import ImgArticle from '../../public/assets/img/articles/block1.jpg';
import ImgArticle2 from '../../public/assets/img/articles/block2.jpg';
import { Htag } from '../Htag/Htag';
import { Ptag } from '../Ptag/Ptag';
import { Button } from '../UI/Button/Button';


export const Articles = ({ className, ...props }: ArticlesProps): JSX.Element => {
   return (
      <div {...props} className={styles.wrapper}>

         <div className={styles.article}>
            <div className={styles.articleImg}>
               <Image src={ImgArticle} alt='story' />
               <div className={styles.title}>
                  <Htag tag='h3'>Pop Corn</Htag>
                  <Ptag>Join events near you for free.</Ptag>

                  <Button appearance='secondary'>Watch Now</Button>
               </div>
            </div>
         </div>
         <div className={styles.article}>
            <div className={styles.articleImg}>
               <Image src={ImgArticle2} alt='story' />
               <div className={styles.title}>
                  <Htag tag='h3'>Pop Corn</Htag>
                  <Ptag>Join events near you for free.</Ptag>

                  <Button appearance='secondary'>Watch Now</Button>
               </div>
            </div>

         </div>

      </div>
   );
};
