import { LastActivityProps } from './LastActivity.props';
import styles from './LastActivity.module.scss';

import { Button } from '../UI/Button/Button';
import { Htag } from '../Htag/Htag';
import { Ptag } from '../Ptag/Ptag';
import { UserImg } from '../UserImg/UserImg';

import UserImage from '../../public/assets/img/users/active-user.jpg'
import UserImage2 from '../../public/assets/img/users/active-user2.jpg'


export const LastActivity = ({ className, ...props }: LastActivityProps) => {
   return (
      <div className={styles.wrapper} {...props}>
         <div className={styles.images}>
            <UserImg className={styles.innerImg} urlImg={UserImage} w={50} h={50} size='sizeL' name='user' />
            <UserImg className={styles.innerImg} urlImg={UserImage2} w={50} h={50} size='sizeL' name='user' />
         </div>
         <Htag tag='h3'>Подготовка к свадьбе</Htag>
         <Ptag size='sizeM' className={styles.subtitle}>сегодня в 8:08</Ptag>
         <div className={styles.buttons}>
            <Button appearance='primary' icon='phone'>Вызов</Button>
            <Button appearance='primary' icon='message'>Видеозвонок</Button>
         </div>
      </div >
   )
}