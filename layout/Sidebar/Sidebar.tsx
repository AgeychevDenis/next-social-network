import Link from 'next/link';
import React from 'react';
import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.props';
import cn from 'classnames';

import AppIcon from './icons/app.svg';
import BookmarksIcon from './icons/bookmarks.svg';
import CalendarIcon from './icons/calendar.svg';
import FavoriteIcon from './icons/favorite.svg';
import FolderIcon from './icons/folder.svg';
import GameIcon from './icons/game.svg';
import QuestionIcon from './icons/question.svg';
import SettingIcon from './icons/setting.svg';

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
   return (
      <aside className={cn(className, styles.sidebar)} {...props}>
         <nav className={styles.menu}>
            <ul className={styles.list}>
               <li className={styles.item}>
                  <Link href="/"><a><CalendarIcon /></a></Link>
               </li>
               <li className={styles.item}>
                  <Link href="/"><a><BookmarksIcon /></a></Link>
               </li>
               <li className={styles.item}>
                  <Link href="/"><a><GameIcon /></a></Link>
               </li>
               <li className={styles.item}>
                  <Link href="/"><a><FavoriteIcon /></a></Link>
               </li>
               <li className={styles.item}>
                  <Link href="/"><a><FolderIcon /></a></Link>
               </li>
               <li className={styles.item}>
                  <Link href="/"><a><QuestionIcon /></a></Link>
               </li>
               <li className={styles.item}>
                  <Link href="/"><a><SettingIcon /></a></Link>
               </li>
               <li className={styles.item}>
                  <Link href="/"><a><AppIcon /></a></Link>
               </li>
            </ul>
         </nav>
      </aside>
   )
}

export default Sidebar;