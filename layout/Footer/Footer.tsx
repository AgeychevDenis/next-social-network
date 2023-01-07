import { FooterProps } from './Footer.props';
import styles from './Footer.module.scss';


const Footer = ({ className, ...props }: FooterProps) => {
   return (
      <footer {...props}>Footer</footer>
   )
}

export default Footer;