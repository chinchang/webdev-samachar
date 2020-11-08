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

      <h2 className="text-center text-bold text-2xl">Submit News</h2>
      <form
        className="mb-10 lg:w-1/3 mx-auto"
        name="news"
        method="POST"
        data-netlify="true"
      >
        <label className="block mb-4">
          <div>Your Name</div>
          <input
            name="name"
            type="text"
            className="border-0 p-3 w-full bg-blue-700"
          />
        </label>

        <label>
          <div>What's the news?</div>
          <textarea name="news" className="border-0 p-3 w-full bg-blue-700" />
        </label>

        <input name="date" type="hidden" value={new Date().toGMTString()} />
        <input type="hidden" name="form-name" value="news" />

        <div className="flex justify-center mt-3">
          <button className="inline-block mx-auto border-2 border-blue-800 p-3 rounded-md bg-gradient-to-b from-white via-gray-100 to-gray-500 text-black">
            Submit News
          </button>
        </div>
      </form>
    </div>
  );
}
