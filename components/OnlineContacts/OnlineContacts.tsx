import { OnlineContactsProps } from "./OnlineContacts.props";
import styles from './OnlineContacts.module.scss';
import { Htag } from "../Htag/Htag";

export const OnlineContacts = ({ className, ...props }: OnlineContactsProps): JSX.Element => {
   return (
      <div
         className={styles.wrapper}
         {...props}
      >
         <Htag tag="h2">Друзья онлайн 20</Htag>

      </div>
   )
}