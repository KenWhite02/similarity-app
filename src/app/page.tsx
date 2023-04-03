import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from './page.module.css';
import Paragraph from './components/ui/Paragraph';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <main>
      <Paragraph>some text</Paragraph>
    </main>
  );
};

export default Home;
