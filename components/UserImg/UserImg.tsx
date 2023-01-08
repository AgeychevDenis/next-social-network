import { UserImgProps } from "./UserImg.props";
import Image from 'next/image';
import styles from './UserImg.module.scss';
import cn from 'classnames';

export const UserImg = ({ size = 'sizeL', w, h, urlImg, name, className, ...props }: UserImgProps): JSX.Element => {
   return (
      <div
         className={cn(styles.img, className, {
            [styles.sizeS]: size == 'sizeS',
            [styles.sizeM]: size == 'sizeM',
            [styles.sizeL]: size == 'sizeL',
         })}
         {...props}
      >
         <Image
            src={urlImg}
            width={w}
            height={h}
            alt={name}
         />
      </div>
   )
}