"use client";

import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex gap-5 items-center justify-between px-32 md:px-16 lg:px-24 xl:px-32 py-2 border-b border-gray-300 bg-white relative transition-all">
    
      <div className="flex gap-5 items-center">
        <Link href="/">
          <div>
            <Image
              src="/logo.png"
              width={150}
              height={100}
              alt="Logo"
              priority
            />
          </div>
        </Link>

        <div>
            <button className="cursor-pointer">Categories</button>
        </div>

        <div>
          <div className="flex items-center border pl-4 gap-2 bg-white border-gray-300 h-11.5 max-w-md rounded-full">
            <input
              type="text"
              placeholder="Search product"
              className="flex-1 h-full outline-none text-sm text-gray-600"
            />
            <button className="bg-indigo-500 h-9 px-6 rounded-full text-sm text-white mr-1 cursor-pointer" >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-5 items-center">
        <div>
          <button className="cursor-pointer">Cart</button>
        </div>

        <div>
          <button className="cursor-pointer">Account</button>
        </div>
      </div>
     
    </nav>
  );
}

export default Navbar ;
