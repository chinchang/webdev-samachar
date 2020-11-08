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
          className="inline-block mx-auto border-2 border-blue-800 p-3 rounded-md bg-gradient-to-b from-white via-gray-100 to-gray-600  text-black lg:p-8 lg:text-3xl transform hover:scale-110 transition-all duration-150"
        >
          Watch News
        </a>
      </div>
    </div>
  );
}
