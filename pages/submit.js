import Head from "next/head";
import NextLink from "next/link";

const Link = (props) => {
  return <a className="text-white underline" {...props} />;
};

const LinkDivider = (props) => {
  return <span className="mx-4">//</span>;
};

export default function SubmitPage() {
  return (
    <div>
      <Head>
        <title>Submit News / Web Dev Samachar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form className="mb-10" name="news" method="POST" data-netlify="true">
        <label className="block mb-4">
          <div>Your Name</div>
          <input name="name" type="text" className="border-0 p-3 w-full" />
        </label>

        <label>
          <div>What's the news?</div>
          <textarea name="news" className="border-0 p-3 w-full" />
        </label>

        <input name="date" type="hidden" value={new Date().toGMTString()} />

        <div className="flex justify-center mt-3">
          <button className="inline-block mx-auto border-2 border-blue-800 p-3 rounded-md bg-gradient-to-b from-white via-gray-100 to-gray-500 text-black">
            Submit News
          </button>
        </div>
      </form>

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
