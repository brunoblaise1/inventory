import Header from "@/components/Header";
import MaxWidthWrapper from "@/utils/MaxWidth";
import Image from "next/image";


export default function Home() {
  return (
    <>
        <header className="w-full bg-orange-300/5 border-b p-2">
      <nav>
        <div className="flex justify-between m-1 p2">
        <Image alt="drawn" src ="/drawn.png" width={591} height={510}  className="w-10 static top-0 left-0 bottom-0 "/>
    <ul className="flex gap-2 md:gap-3 text-zinc-600 tracking-tight m-2">
    
      <li>About us</li>
      <li>
        LInk
        Login</li>
    </ul>
        </div>
      
      </nav>
    </header>
    
    
    <MaxWidthWrapper >
  
  <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
    <div className="p-2">
    <Header/>
    </div>


  <h1 className="text-4xl font-bold tracking-tight text-zinc-600 sm:text-6xl">Welcome to the migthy legendary inventory  management for
  {" "}
  <span className="text-orange-500">
  small business 
  </span>
  .
</h1>


<p className="mt-6 text-sm max-w-prose text-zinc-400 m-2"> <span className="border rounded-lg p-1">
Introducing </span> {" "}
{"Notee." } Your busines parrtner every assets managesment tool at your figure tips.</p>

<div>
          <div className="mt-6">
            <div className="rounded-xl bg-orange-900/5 p-2 ring-1 ring-inset ring-orange-900/10 lg:rounded-2xl">
 <Image src="/cards-light.webp" alt="Image" width={1280} height={1214} />
   </div>
  </div>
</div>
  </div>
  
</MaxWidthWrapper>

    
    </>
  
  );
}
