import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const year = new Date().getFullYear();
  return (
    <div className="px-4 py-4 h-screen flex flex-col">
      <main>
        <h1 className="text-center mb-3">
          <a href="/">
            <img
              alt="WebDev Samachar logo"
              src="/logo.png"
              className="mx-auto mb-4"
              width={250}
              height={100}
            />
          </a>
        </h1>

        <p className="text-center text-xl mb-8">
          भारत का सबसे पहला Web Development हिंदी News Channel
        </p>

        <Component {...pageProps} />
      </main>

      <footer className="text-center mt-auto">
        Copyright {year} WebDev Samachar
      </footer>
    </div>
  );
}

export default MyApp;
