import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/client"

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Authentication with Next-Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!session && (
          <>
            Not Signed In! <br />
            <button onClick={signIn}>Sign In</button>
          </>
        )}
        {session && (
          <>
            Signed in as {session.user.email}. Hello {session.user.name}! <br />
            <p>You just access to some secret stuff! y'know?</p>
            <button onClick={signOut}>Sign Out</button>
          </>
        )}
      </main>
    </div>
  );
}
