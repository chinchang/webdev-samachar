import * as React from "react";
import "../styles/globals.css";
import NextLink from "next/link";
import Head from "next/head";

const linkClasses =
  "lg:text-xl text-white hover:text-gray-300 uppercase border-b-4 transform hover:scale-110 transition-all duration-200 ease-in-out";
const Link = React.forwardRef((props, ref) => {
  return <a ref={ref} className={linkClasses} {...props} />;
});

const LinkDivider = (props) => {
  return <span className="mx-3 lg:mx-5">//</span>;
};

function MyApp({ Component, pageProps }) {
  const year = new Date().getFullYear();
  return (
    <div className="px-4 py-4 lg:p-10 h-screen flex flex-col">
      <Head>
        <meta
          name="description"
          content=" भारत का सबसे पहला Web Development हिंदी News Channel"
        />
      </Head>
      <main>
        <h1 className="text-center mb-3">
          <a href="/">
            <img
              alt="WebDev Samachar logo"
              src="/logo.png"
              className="mx-auto mb-4 w-56 lg:w-1/3"
              style={{ filter: "drop-shadow(2px 6px 10px rgba(0,0,0,0.25))" }}
            />
          </a>
        </h1>

        <p className="text-center text-xl lg:text-4xl mb-8">
          भारत का सबसे पहला Web Development हिंदी News Channel
        </p>

        <Component {...pageProps} />

        <div className="flex justify-center my-5 items-center">
          <Link href="https://www.youtube.com/channel/UCi3sYPCwBuKWZmYvo598wOQ">
            Watch News
          </Link>
          <LinkDivider />
          <NextLink href="/submit">
            <a className={linkClasses}>Submit News</a>
          </NextLink>
          <LinkDivider />
          <Link
            target="_blank"
            href={`https://twitter.com/intent/tweet?url=https://www.youtube.com/channel/UCi3sYPCwBuKWZmYvo598wOQ&text=Bharat ka sabse pehla Web Development हिंदी News Channel! 🥳🗞 \n Web Development main updated rehna ka best tareeka!  #webdev #news`}
          >
            Share
          </Link>
        </div>
      </main>

      <footer className="text-center mt-auto">
        Copyright {year} WebDev Samachar
      </footer>
    </div>
  );
}

export default MyApp;
