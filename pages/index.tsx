import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Google Drive React UI</title>
        <meta name="description" content="Googgle drive React UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        Body here.
      </main>

      <footer className={styles.footer}>
        Footer here.
      </footer>
    </div>
  )
}
