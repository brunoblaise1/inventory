import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"
const Navbar = () =>{
 return(
    <header className="border-b border-zinc-200 w-full h-14">
        <nav className="flex justify-between p-2">
     <Link href="" className="flex justify-center items-center">
     <Image src="/drawn.png" height={50} width={50} alt={"Logo"} />
     <h1>Notee</h1>
     </Link>
            <ul className="flex gap-4 items-center">
                <li><Link href="" className="underline">Users</Link></li>
                <li><Link href="" >
                <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/shadcn.png"  />          
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </Link></li>
            </ul>
        </nav>
    </header>
 )
}
export default Navbar