import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Web Dev Samachar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center my-20">
        <a
          href="https://www.youtube.com/channel/UCi3sYPCwBuKWZmYvo598wOQ"
          className="inline-block mx-auto border-2 border-blue-800 p-3 rounded-md bg-gradient-to-b from-white via-gray-100 to-gray-500 hover:from-theme-blue hover:to-blue-900 hover:text-white text-black hover:bg-theme-blue lg:p-8 lg:text-3xl"
        >
          Watch News
        </a>
      </div>
    </div>
  );
}
