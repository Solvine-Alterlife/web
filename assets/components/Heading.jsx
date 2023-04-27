/*  ./components/Footer.jsx     */
import Head from 'next/head'
import Script from 'next/script'

export const Heading = () => {
  return (
    <>
        <Head>
        <meta charSet="utf-8" />
        <title>Solvine Alterlife - Discord Leaderboard</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Solvine Alterlife - Discord Leaderboard" />
        <meta name="description" content="Solvine - A community for socialize and have fun." />
        <meta name="keywords" content="solvine, alterlife, solvine alterlife, aku ganteng, leaderboards" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="3 days" />
        <meta name="author" content="clemiee" />
        <meta property="og:image" content="../wi-logo.png" />
        </Head>
        <Script src="../assets/js/discord.js"></Script>
        <Script src="../assets/js/jquery.easing.min.js"></Script>
        <Script src="../assets/js/script.js"></Script>
        <Script src="../assets/js/scrolling-nav.js"></Script>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js"></Script>
    </>
  );
};