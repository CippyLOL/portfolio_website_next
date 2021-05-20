import Head from 'next/head'
import Image from 'next/image'
import Logo from '../components/Logo'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO HERE</div>
      <div className={styles.intro_main}>introduction here</div>
      <div className={styles.intro_extra}>introduction extra here</div>
      <div className={styles.about}>
        <h1>About</h1>
      </div>
      <div className={styles.about_content}>About content here</div>
      <div className={styles.info_content}>info content here</div>
      <div className={styles.illust_1}>illustration 1 here</div>
      <div className={styles.info}>
        <h1>What I do</h1>
      </div>
      <div className={styles.skills}>
        <h1>Skills</h1>
      </div>
      <div className={styles.skills_1}>skill-1</div>
      <div className={styles.skills_2}>skill-2</div>
      <div className={styles.illust_2}>illustration 2 here</div>

    </div>
  )
}
