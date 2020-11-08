import Head from "next/head";
import NextLink from "next/link";
// import Image from "next/image";

const Link = (props) => {
  return <a className="text-white underline" {...props} />;
};

const LinkDivider = (props) => {
  return <span className="mx-4">//</span>;
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Dev Samachar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center my-20">
        <a className="inline-block mx-auto border-2 border-blue-800 p-3 rounded-md bg-gradient-to-b from-white via-gray-100 to-gray-500 text-black">
          Watch News
        </a>
      </div>

      <div className="flex justify-center my-5">
        <NextLink href="/submit">
          <Link>Submit News</Link>
        </NextLink>
        <LinkDivider />
        <Link
          target="_blank"
          href={`https://twitter.com/intent/tweet?url=https://www.youtube.com/channel/UCi3sYPCwBuKWZmYvo598wOQ&text=Bharat ka sabse pehla Web Development हिंदी News Channel! 🥳🗞 \n Web Development main updated rehna ka best tareeka!  #webdev #news`}
        >
          Share
        </Link>
      </div>
    </div>
  );
}
