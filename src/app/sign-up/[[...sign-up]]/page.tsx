import MaxWidthWrapper from "@/utils/MaxWidth";
import { SignUp } from "@clerk/nextjs";

export default function Page (){
    return(
        <MaxWidthWrapper>
            <div className="flex justify-center items-center p-2">
            <SignUp/>
            </div>
             
        </MaxWidthWrapper>
    )
}