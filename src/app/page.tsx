import Header from "@/components/Header";
import { Compare } from "@/components/ui/compare";
import MaxWidthWrapper from "@/utils/MaxWidth";
export default function Home() {
  
  return ( 
    <MaxWidthWrapper >
     <Header />
        <div className="py-10 mx-auto text-center flex flex-col items-center max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-600 sm:text-6xl">Welcome to the migthy  legendary inventory  management for
      {" "}
      <span className="text-orange-500">
      small business 
      </span>
      .
    </h1> 
    <p className="mt-6 text-sm max-w-prose text-zinc-400"> 
      <span className="bg-green-200 m-1p-1 rounded-full">
      Introducing
      </span>
      {"Notee." } Your busines partner in everysay to day inventory management tool at your figure tips.</p>
    <div>
              <div className="mt-6">
                {/* <div className="rounded-xl bg-green-400/5 p-2 ring-1 ring-inset ring-green-400/10 lg:rounded-2xl">
     <Image src="/cards-light.webp" alt="Image" width={1280} height={1214} />
       </div> */}
      <div className="p-2 border rounded-3xl ring-1 ring-inset ring-green-400/10 bg-green-400/5">
      <Compare
        firstImage="https://assets.aceternity.com/code-problem.png"
        secondImage="https://assets.aceternity.com/code-solution.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[350px] w-[360px] md:h-[500px] md:w-[800px]"
        slideMode="hover"
      />
    </div>
      </div>
    </div>
      </div> 
    </MaxWidthWrapper>
    
  );
}
