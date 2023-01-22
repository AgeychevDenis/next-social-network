import { OnlineContactsProps } from "./OnlineContacts.props";
import styles from './OnlineContacts.module.scss';
import { Htag } from "../Htag/Htag";
import { UserImg } from "../UserImg/UserImg";

import UserImage from '../../public/assets/img/users/online1.jpg';
import UserImage2 from '../../public/assets/img/users/online2.jpg';
import UserImage3 from '../../public/assets/img/users/online3.jpg';
import UserImage4 from '../../public/assets/img/users/online4.jpg';
import { MenuPost } from "../MenuPost/MenuPost";

export const OnlineContacts = ({ className, ...props }: OnlineContactsProps): JSX.Element => {
   return (
      <div
         className={styles.wrapper}
         {...props}
      >
         <div className={styles.top}>
            <div className={styles.titleBlock}>
               <Htag tag="h2">Друзья онлайн</Htag>
               <span className={styles.state}></span>
            </div>
            <MenuPost />
         </div>

         <div className={styles.inner}>
            <div className={styles.user}>
               <UserImg urlImg={UserImage} size="sizeM" w={34} h={34} name="user" />
               <Htag tag="h4">Екатерина Митрохина</Htag>
            </div>
            <div className={styles.user}>
               <UserImg urlImg={UserImage2} size="sizeM" w={34} h={34} name="user" />
               <Htag tag="h4">Вадим Жаринов</Htag>
            </div>
            <div className={styles.user}>
               <UserImg urlImg={UserImage3} size="sizeM" w={34} h={34} name="user" />
               <Htag tag="h4">Ксения Глувинская</Htag>
            </div>
            <div className={styles.user}>
               <UserImg urlImg={UserImage4} size="sizeM" w={34} h={34} name="user" />
               <Htag tag="h4">Анна Буканова</Htag>
            </div>
         </div>

      </div>
   );
};