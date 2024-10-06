import Image from "next/image";
import Poster from "@/assets/images/camon.webp"

export default function Home() {
  return (
  <main className="mt-10 mx-10 my-5 bg-slate-400 px-48 py-36 items-center">
    <section className="flex gap-6 mt-5 items-center">
      <div className="flex-1">
       < Image src={Poster} alt="Mobilephone"/>
      </div>
      <div className="flex-1">
<h1 className="font-bold text-3xl text-black ">TECHNO CAMON 30</h1>
<h2  className="font-semibold text-black  text-3xl">Ultra Clear Dark</h2>
     <button className="bg-black text-white py-2 mt-4 px-4">Explore More</button>
      </div>

    </section>
  </main>
  );
}
