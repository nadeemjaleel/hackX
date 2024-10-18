import Cursor from '../../components/Cursor';
import Preloading from '../../components/Preloading/Preloading';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Preloading />
      {/* <Cursor /> */}
    </main>
  );
}
