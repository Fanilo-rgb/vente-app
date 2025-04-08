import Link from "next/link";

export default async function Home() {
  await new Promise(resolve => {
    setTimeout(() => {
      resolve("Intentional delay");
    }, 1000);
  });
  return (
    <div className="w-full h-full flex items-center justify-between">
      <div className="grid place-items-center w-1/2 h-full">
        <div className="intro-10 w-md">
          <h1 className="uppercase">
            Soyez <span className="text-gradient font-bold">tranquille</span>
            <br />
            je me charge de{" "}
            <span className="text-gradient font-bold">tout</span>
          </h1>
          <h2 className="mt-4">Organisation</h2>
          <h2>Simplicité</h2>
          <h2 className="mb-4">Coordination</h2>
          <h3>C&apos;est ce que MagiAPP vous offre</h3>
        </div>
      </div>
      <div className="grid place-items-center w-1/2 h-full bg-white/20 shadow-xl backdrop-blur-xs ">
        <div className="grid place-items-center bg-white/60 w-2xs h-40 shadow-lg rounded-2xl">
          <Link href={`/login`}>
            <button className="btn">
              Let&apos;s start
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
