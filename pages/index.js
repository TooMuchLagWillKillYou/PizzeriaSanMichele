import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizzeria San Michele</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="initial-scale=1, width=device-width" /> // MUI: To ensure proper rendering and touch zooming for all devices
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <div>
            <span>With default Theme:</span>
          </div>
          <Switch {...label} defaultChecked />
          <Switch {...label} />
          <Switch {...label} disabled defaultChecked />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
