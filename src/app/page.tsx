import Image from "next/image";
import Header from "./components/header/header";

export default function Home() {
  return (
    <>
      <Header></Header>
      <body className="bg-slate-400">
        <section>
          <h1 className="text-red-500 font-mono text-6xl">
            Oi, <br></br>
            Eu sou a Du
          </h1>
        </section>
      </body>
    </>
  );
}
