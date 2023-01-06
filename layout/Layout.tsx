import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';
import Header from './Header/Header';
import Sitebar from './Sitebar/Sitebar';

const Layout = ({ children }: LayoutProps): JSX.Element => {
   return (
      <div className={styles.wrapper}>

         <Header className={styles.header} />

         <Sitebar className={styles.sitebar} />

         <main className={styles.body}>
            {children}
         </main>
      </div>
   )
}

export default Layout;