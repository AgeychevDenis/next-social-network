import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';
import Header from './Header/Header';
import Sitebar from './Sitebar/Sitebar';
import Footer from './Footer/Footer';

const Layout = ({ children }: LayoutProps): JSX.Element => {
   return (
      <div className={styles.wrapper}>

         <Header className={styles.header} />

         <main className={styles.body}>
            <Sitebar className={styles.sitebar} />
            {children}
         </main>

         <Footer className={styles.footer} />
      </div>
   )
}

export const withLayout = <T extends Record<string, unknown>>(Component: React.FunctionComponent<T>) => {
   return function withLayoutComponent(props: T): JSX.Element {
      return (
         <Layout>
            <Component {...props} />
         </Layout>
      );
   };
};