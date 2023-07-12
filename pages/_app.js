/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

// import NavBar from '../components/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <NavBar /> */}
      <h1>Joke Generator</h1>
      <br />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
