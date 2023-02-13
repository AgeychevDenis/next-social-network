import { ModalProps } from "./Modal.props";
import styles from './Modal.module.scss';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../redux/slice/modalSlice';

export const Modal = ({ title, children, className, ...props }: ModalProps): JSX.Element => {
   const dispatch = useDispatch();
   const { open }: any = useSelector((state: any) => ({
      open: state.modal.open,
   }));

   const onClickOpen = (payload: any) => {
      dispatch(setOpen(payload));
   };

   console.log(useDispatch);


   return (
      <div {...props} className={cn(styles.wrapper, open ? styles.none : '')}>
         <div className={styles.inner}>
            <button onClick={onClickOpen}
               className={cn(styles.close)}>x</button>
            {children}
         </div>
      </div >
   );
}