import Head from 'next/head'
import Illust_1 from '../components/Illust_1'
import Illust_2 from '../components/Illust_2'
import Illust_3 from '../components/Illust_3'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Portfolio</title>
        <meta property="og:home" content="Home | Portfolio" key="home" />
      </Head>
      <div className={styles.container}>
        <div className={styles.logo}>
          {/* <Illust_1 style={{ height: "100%", width: "100%", objectFit: "contain", }} /> */}
          <Illust_1 />
        </div>
        <div className={styles.intro_main}>
          <h2>Hey, I'm Gill and I make stuff.</h2>
        </div>
        <div className={styles.intro_extra}>
          <h1>A creative - developing and designing today's and the <span style={{ textDecoration: 'underline' }}>future's</span> of application layouts.</h1>
        </div>
        <div className={styles.about}>
          <h1>About</h1>
        </div>
        <section className={styles.about_content}>
          <h2>About Me</h2>
          <p>
            I am a Computer Science student at University of London (UoL) with specialization in Web and Mobile development.
            I am passionate about interfaces, technology and design. I am always on the look out for effective and modern frameworks, libraries, layouts and designs.
          </p>
        </section>
        <section className={styles.info_content}>
          <h2>What I Can Do for <span>You</span></h2>
          <p>
            As a well-rounded individual in the field of programming and design, I analyse and implement design thinking skills and do user research.
            I am always learning new technologies under the frontend domain to ensure all my applications are efficent and optimised, with SEO in mind. <br />
            My process regarding UX/UI consists of creating low and high-fidelity mockups that deliver the best online experience, guaranteeing customer satisfaction and customer loyalty.
            I also design interface elements and layouts catering the client's brand and nuturing them to their fullest potential.
          </p>
        </section>
        <div className={styles.illust_1}>
          <Illust_2 />
        </div>
        <div className={styles.info}>
          <h1>What I do</h1>
        </div>
        <div className={styles.skills}>
          <h1>(Technical) Skills</h1>
        </div>
        <section className={styles.skills_1}>
          <h2>Languages/ Technologies</h2>
          <ul>
            <li>HTML5/ CSS</li>
            <li>Javascript - React.js, Next.js, Node.js, Bootstrap, Strapi.js (Headless CMS)</li>
            <li>Dart - Flutter (Provider, Firebase)</li>
            <li>C++ - JUCE library</li>
            <li>Python - Jupyter Notebook</li>
            <li>SQL</li>
          </ul>
        </section>
        <section className={styles.skills_2}>
          <h2>Design Tools</h2>
          <ul>
            <li>Adobe Photoshop/ Illustrator</li>
            <li>Adobe XD</li>
            <li>Affinity Photo/ Designer</li>
            <li>Canva</li>
            <li>Sony Vegas Pro</li>
            <li>Filmora 9</li>
          </ul>
        </section>
        <div className={styles.illust_2}>
          <Illust_3 />
        </div>

      </div>
    </div>
  )
}
