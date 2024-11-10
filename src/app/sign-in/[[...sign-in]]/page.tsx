import MaxWidthWrapper from "@/utils/MaxWidth";
import { SignIn } from "@clerk/nextjs";



export default function Page(){
    return (
<MaxWidthWrapper>
    <div className="flex justify-center items-center mx-auto w-full p-2">

  
<SignIn/>
</div>
</MaxWidthWrapper>
    )
    
   
}