import faceIcon from '../images/ico-facebook.png'
import dh from '../images/DH.png'
import wapp from '../images/ico-whatsapp.png'
import ig from '../images/ico-instagram.png'
import tik from '../images/ico-tiktok.png'
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <footer >
      <div className={styles.footer}>
        <div className={styles.dh_footer}>
          <p>Powered by</p>
          <a href="https://www.digitalhouse.com" target='blank'><img className={styles.dhicon} src={dh} alt='DH-logo' /></a>
        </div>
        <div className={styles.icons_footer}>
          <a href="https://www.fb.com" target='blank'><img className={styles.icon} src={faceIcon} alt='fbIcon' /></a>
          <a href="https://www.whatsapp.com" target='blank'><img className={styles.icon} src={wapp} alt='wappIcon' /></a>
          <a href="https://www.instagram.com" target='blank'><img className={styles.icon} src={ig} alt='igIcon' /></a>
          <a href="https://www.tiktok.com" target='blank'><img className={styles.icon} src={tik} alt='tikIcon' /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer