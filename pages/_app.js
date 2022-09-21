import LoadingScreen from "./LoadingScreen";
import Login from "./Login";
import React from "react";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoading(true), 8000);
  }, []);
  return (
    <>
      <LoadingScreen />
    </>
  );
}

export default MyApp
