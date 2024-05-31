import Image from "next/image";
import {SignedIn, UserButton} from "@clerk/nextjs";
import Link from "next/link";
import {currentUser} from "@clerk/nextjs/server";

export default async function Home() {
    const user = await currentUser()
    return (
        <main className="flex items-center justify-center h-screen">
            {user && <UserButton/>}
            {user ? null : <Link href="/sign-in" className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-4 hover:bg-green-700 transition duration-300">Sign
                in
            </Link>}

            {user ? null : <Link href="/sign-up" className="bg-green-500 text-white font-bold py-2 px-4 rounded ml-4 hover:bg-green-700 transition duration-300">Sign
                    up
            </Link>}
        </main>

    );
}
