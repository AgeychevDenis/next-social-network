import { StoriesProps } from './Stories.props';
import styles from './Stories.module.scss';
import Image from 'next/image';

import UserImage from '../../public/assets/img/users/online1.jpg';
import UserImage2 from '../../public/assets/img/users/online2.jpg';
import UserImage3 from '../../public/assets/img/users/online3.jpg';

import ImgStory from '../../public/assets/img/stories/story1.jpg';
import ImgStory2 from '../../public/assets/img/stories/story2.jpg';
import ImgStory3 from '../../public/assets/img/stories/story3.jpg';
import { UserImg } from '../UserImg/UserImg';
import { Htag } from '../Htag/Htag';

export const Stories = ({ className, ...props }: StoriesProps): JSX.Element => {
   return (
      <div {...props} className={styles.wrapper}>
         <div className={styles.story}>
            <Image src={ImgStory} alt='story' />
            <div className={styles.wrapperImg}>
               <UserImg urlImg={UserImage} size='sizeM' w={36} h={36} name='user' />
               <Htag tag='h4'>Елена Зверьева</Htag>
            </div>
         </div>
         <div className={styles.story}>
            <Image src={ImgStory2} alt='story' />
            <div className={styles.wrapperImg}>
               <UserImg urlImg={UserImage2} size='sizeM' w={36} h={36} name='user' />
               <Htag tag='h4'>Тимур Хабибул...</Htag>
            </div>
         </div>
         <div className={styles.story}>
            <Image src={ImgStory3} alt='story' />
            <div className={styles.wrapperImg}>
               <UserImg urlImg={UserImage3} size='sizeM' w={36} h={36} name='user' />
               <Htag tag='h4'>Регина Брюлова</Htag>
            </div>
         </div>
      </div>
   );
};
