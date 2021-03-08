import Head from "next/head";

export default function Home ({
  title = "Hola Mundo!", 
  metaContent = "Generic SEO Pitch", 
  copy = "I'm having writer's block.", 
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={metaContent} />
      </Head>

      <div>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>

    </>
  );
}

export const getStaticProps = async () => {
// Thi is a full server-side Node enviroment, 
// which means that you an make network requests, 
// talk to databases, read from the file-system, 
// and do whatever you want to fetch your data. 

return {
  props: {
    title: "My Very Cool Venture", 
    metaContent: " Amazin SEO Property", 
    copy: "I'm in the business of making people smile. That's all I'm in it for", 
  },
  revalidate: 1, // number of seconds to wait before revalidating 
};
};