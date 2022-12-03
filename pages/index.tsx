import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import { BsChevronDoubleDown } from "react-icons/bs";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | Dalmoore</title>
        <meta name="description" content="Home page for the Dalmoore" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <div className={`${styles.main} flex flex-col h-full`}>
          <div className="h-full w-full flex-1 backdrop-saturate-50 bg-black/50 flex justify-center items-center text-white">
            <div className="h-full flex flex-col justify-between">
              <div></div>
              <div className="font-monts text-center ">
                <h1 className=" font-default md:text-[40px] text-[36px] font-[500] ">
                  AN IMPROVED WAY OF LIFE
                </h1>
                <div className="font-[500] ">
                  <p className="leading-10">THE DALMOORE II</p>
                  <p className="tracking-wide">
                    where functionality meets luxury...
                  </p>
                </div>
                <Link href={"/contact"}>
                  <button className="py-[8px] px-[15px] font-default text-[18px] mt-[30px] font-[500] bg-primary">
                    LEARN MORE
                  </button>
                </Link>
              </div>
              <div className="text-center w-full text-[3em] font-[900] flex justify-center relative md:top-[3em] top-[4em] ">
                <BsChevronDoubleDown />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-screen"></div>
      </main>
    </div>
  );
}

// return (
//   <div className={styles.container}>
//     <Head>
//       <title>Create Next App</title>
//       <meta name="description" content="Generated by create next app" />
//       <link rel="icon" href="/favicon.ico" />
//     </Head>

//     <main className={styles.main}>
//       <h1 className={styles.title}>
//         Welcome to <a href="https://nextjs.org">Next.js!</a>
//       </h1>

//       <p className={styles.description}>
//         Get started by editing{' '}
//         <code className={styles.code}>pages/index.tsx</code>
//       </p>

//       <div className={styles.grid}>
//         <a href="https://nextjs.org/docs" className={styles.card}>
//           <h2>Documentation &rarr;</h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a href="https://nextjs.org/learn" className={styles.card}>
//           <h2>Learn &rarr;</h2>
//           <p>Learn about Next.js in an interactive course with quizzes!</p>
//         </a>

//         <a
//           href="https://github.com/vercel/next.js/tree/canary/examples"
//           className={styles.card}
//         >
//           <h2>Examples &rarr;</h2>
//           <p>Discover and deploy boilerplate example Next.js projects.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//           className={styles.card}
//         >
//           <h2>Deploy &rarr;</h2>
//           <p>
//             Instantly deploy your Next.js site to a public URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>

//     <footer className={styles.footer}>
//       <a
//         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Powered by{' '}
//         <span className={styles.logo}>
//           <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//         </span>
//       </a>
//     </footer>
//   </div>
// )
