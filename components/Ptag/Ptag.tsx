import { PtagProps } from "./Ptag.props";
import styles from './Ptag.module.scss';
import cn from 'classnames';

export const Ptag = ({ size = 'sizeM', children, className, ...props }: PtagProps): JSX.Element => {
   return (
      <p className={cn(className, {
         [styles.sizeS]: size == 'sizeS',
         [styles.sizeM]: size == 'sizeM',
         [styles.sizeL]: size == 'sizeL',
      })}
         {...props}
      >
         {children}
      </p>
   )
}