import React from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import PhoneIcon from './phone.svg'
import CameraIcon from './camera.svg'

export const Button = ({ appearance, icon = 'none', children, className, ...props }: ButtonProps): JSX.Element => {

   return (
      <button
         className={cn(styles.btn, {
            [styles.primary]: appearance === 'primary',
            [styles.secondary]: appearance === 'secondary'
         })}

         {...props}
      >
         {icon !== 'none' && icon === 'phone' ? <PhoneIcon /> : null}
         {icon !== 'none' && icon === 'message' ? <CameraIcon /> : null}
         {children}
      </button>
   );
};
