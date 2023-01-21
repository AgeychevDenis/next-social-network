import { MenuPostProps } from './MenuPost.props';
import styles from './MenuPost.module.scss';
import cn from 'classnames';

export const MenuPost = ({ className, ...props }: MenuPostProps): JSX.Element => {
   return (
      <div className={cn(className, styles.menu)} {...props}>
         <span></span>
         <span></span>
         <span></span>
      </div>
   );
};
