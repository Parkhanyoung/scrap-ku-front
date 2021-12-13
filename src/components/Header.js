import { Link } from 'react-router-dom'
import styles from './css/Header.module.css'

export default function Header() {
  return (
    <div className={styles.Header}>
    <a className={`${styles.smallLink} ${styles.noDeco}`} 
       href="https://www.수알.com">
      <strong>
        수강신청알리미
      </strong>
    </a>
    <Link className={styles.noDeco} to="/">
      <h1>
        <span className={styles.ku}>KU</span>Clock ⏰<br/>
        <span className={styles.desc}>
          수강신청에 필요한 서버시간 + 메모장을 한 번에!
        </span>
      </h1>
    </Link>
    <Link className={`${styles.smallLink} ${styles.noDeco}`} to="/login">
      <strong>
        로그인하기
      </strong>
    </Link>
    </div>
  );
}