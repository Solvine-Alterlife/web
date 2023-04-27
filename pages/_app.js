import "../assets/css/main.css";
import "../assets/css/scrolling-nav.css";
import "../assets/css/animate.min.css";
import "../assets/css/radial.css";
import "../assets/css/style.css";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;