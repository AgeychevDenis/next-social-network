import { LayoutProps } from './Layout.props';
import styles from './Layout.module.scss';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';

const Layout = ({ children }: LayoutProps): JSX.Element => {
   return (
      <div className={styles.wrapper}>

         <Header className={styles.header} />
         <Sidebar className={styles.sidebar} />
         <main className={styles.body}>
            {children}
         </main>

         <Footer className={styles.footer} />
      </div>
   );
};

export const withLayout = <T extends Record<string, unknown>>(Component: React.FunctionComponent<T>) => {
   return function withLayoutComponent(props: T): JSX.Element {
      return (
         <Layout>
            <Component {...props} />
         </Layout>
      );
   };
};