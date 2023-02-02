import { useState } from "react";
import { ModalProps } from "./Modal.props";
import styles from './Modal.module.scss';
import cn from 'classnames';

export const Modal = ({ title, children, className, ...props }: ModalProps): JSX.Element => {
   const [open, setOpen] = useState<boolean>(false);

   const handleClickOpen = () => {
      setOpen(!open)
   }
   console.log(styles);


   return (
      <div {...props} className={cn(styles.wrapper, open ? styles.none : '')}>
         <div className={styles.inner}>
            <button onClick={handleClickOpen}
               className={cn(styles.close)}>x</button>
            {children}
         </div>
      </div >

   );
}