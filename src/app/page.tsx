import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="staticCall"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>Books List (Static Call)</h2>
          <p className={inter.className}>
            Fetch books from api through statis call.
          </p>
        </a>

        <a
          href="serverCall"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>Books List (Server Call)</h2>
          <p className={inter.className}>
            {" "}
            Fetch books from api through server call.
          </p>
        </a>

        <a
          href="clientCall"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>Data Call Client Side</h2>
          <p className={inter.className}>Client side data will be shown.</p>
        </a>
        <a
          href="paralel"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>Paralel Call</h2>
          <p className={inter.className}>Paralel call.</p>
        </a>
        <a
          href="squential"
          className={styles.card}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>Squential Call</h2>
          <p className={inter.className}>Squential call.</p>
        </a>
      </div>
    </main>
  );
}
