import React, { useState } from 'react';
import cn from 'classnames';
import { HeaderProps } from './Header.props';
import UserImage from '../../public/assets/img/users/header-user.jpg'
import styles from './Header.module.scss';
import SearchIcon from './search.svg';
import LogoIcon from './logo.svg';

import Link from 'next/link';
import Image from 'next/image';

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
   const [activeIndex, setActiveIndex] = useState(0);

   const onClickCategory = (index: number) => {
      setActiveIndex(index)
   }

   const category = [
      { title: 'Главная', url: '#' },
      { title: 'Уведомление', url: '#' },
      { title: 'Мессенджер', url: '#' },
      { title: 'Новости', url: '#' },
      { title: 'Маркет', url: '#' },
      { title: 'Видео', url: '#' },
   ];

   return (
      <header
         className={cn(className, styles.header)}
         {...props}
      >
         <div className={styles.row}>
            <div className={styles.logo}><Link href="/" className="logo"><a><LogoIcon /></a></Link></div>
            <nav className={styles.menu}>
               <ul className={styles.list}>
                  {category.map((item, idx: number) => <li onClick={() => onClickCategory(idx)} className={activeIndex === idx ? styles.active : ''} key={idx}><Link href={item.url}><a className={styles.link}>{item.title}</a></Link></li>)}
               </ul>
            </nav>
            <div className={styles.use}>
               <div className={styles.search}>
                  <SearchIcon />
               </div>
               <div className={styles.user}>
                  <Link href="/">
                     <a>
                        <Image src={UserImage} width={46} height={46} alt="user" />
                     </a>
                  </Link>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;