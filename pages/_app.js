import Globals from '../styles/globals.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Globals />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
