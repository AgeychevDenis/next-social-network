import React from 'react';
import { PostFrendsProps } from './PostFrends.props';
import styles from './PostFrends.module.scss';

import { Htag } from '../Htag/Htag';
import { Ptag } from '../Ptag/Ptag';
import { MenuPost } from '../MenuPost/MenuPost';

import { UserImg } from '../UserImg/UserImg';
import PostImg from '../../public/assets/img/users/post1.jpg';
import IconLike from './icons/like.svg';
import IconMessage from './icons/message.svg';
import IconShare from './icons/share.svg';


export const PostFrends = ({ className, ...props }: PostFrendsProps): JSX.Element => {
   return (
      <div className={styles.wrapper} {...props}>
         <div className={styles.inner}>
            <UserImg urlImg={PostImg} size="sizeL" w={50} h={50} name="user" />
            <div>
               <Htag tag='h3'>Диана Кузьмина</Htag>
               <Ptag className={styles.activity}>45 минут назад</Ptag>
            </div>
            <MenuPost className={styles.menuPst} />
         </div>
         <Ptag size='sizeL' className={styles.text}>Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Единственное повстречался себя то рот прямо, текстов бросил, дорогу грамматики заголовок парадигматическая моей от всех семь рукопись по всей наш несколько домах?</Ptag>
         <div className={styles.actions}>
            <div><IconLike /> <span>4</span></div>
            <div><IconMessage /><span>11</span></div>
            <div><IconShare /><span>1</span></div>
         </div>
      </div>
   );
};
