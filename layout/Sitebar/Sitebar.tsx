import Link from 'next/link';
import React from 'react';
import styles from './Sitebar.module.scss';
import { SitebarProps } from './Sitebar.props';

import AppIcon from './icons/app.svg';
import BookmarksIcon from './icons/bookmarks.svg';
import CalendarIcon from './icons/calendar.svg';
import FavoriteIcon from './icons/favorite.svg';
import FolderIcon from './icons/folder.svg';
import GameIcon from './icons/game.svg';
import QuestionIcon from './icons/question.svg';
import SettingIcon from './icons/setting.svg';

const Sitebar = ({ className, ...props }: SitebarProps): JSX.Element => {
   return (
      <aside className={styles.wrapper} {...props}>
         <div className="container">
            <nav className={styles.menu}>
               <ul>
                  <li>
                     <Link href="/"><a><AppIcon /></a></Link>
                  </li>
                  <li>
                     <Link href="/"><a><BookmarksIcon /></a></Link>
                  </li>
                  <li>
                     <Link href="/"><a><CalendarIcon /></a></Link>
                  </li>
                  <li>
                     <Link href="/"><a><FavoriteIcon /></a></Link>
                  </li>
                  <li>
                     <Link href="/"><a><FolderIcon /></a></Link>
                  </li>
                  <li>
                     <Link href="/"><a><GameIcon /></a></Link>
                  </li>
                  <li>
                     <Link href="/"><a><QuestionIcon /></a></Link>
                  </li>
                  <li>
                     <Link href="/"><a><SettingIcon /></a></Link>
                  </li>
               </ul>
            </nav>
         </div>
      </aside>
   )
}

export default Sitebar;