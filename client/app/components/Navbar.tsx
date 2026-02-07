"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  return (
    <nav className="flex items-center justify-between px-32 md:px-16 lg:px-24 xl:px-32 py-2 border-b border-gray-300 bg-white relative transition-all">
      {/* Left */}
      <div className="flex items-center gap-5">
        <Link href="/">
          <Image
            src="/logo.png"
            width={150}
            height={100}
            alt="Logo"
            priority
          />
        </Link>

        <div className="flex">
          <button className="cursor-pointer flex gap-2 items-center border px-5 py-2 border-blue-600 rounded-md" >
            Categories
            <Image 
            src="/icons/category.svg"
            alt="category icon"
            width={34}
            height={34}
            />
          </button>
        </div>
        
        <div className="flex items-center border pl-4 gap-2 bg-white border-gray-300 h-11 max-w-md rounded-full">
          <input
            type="text"
            placeholder="Search product"
            className="flex-1 h-full outline-none text-sm text-gray-600 bg-transparent"
          />
          <button className="bg-indigo-500 h-9 px-6 rounded-full text-sm text-white mr-1 cursor-pointer">
            Search
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <button className="cursor-pointer flex items-center ">
            <Image
            src="/icons/shopping-cart.svg"
            alt="Cart"
            width={34}
            height={34}
          />
            Cart
          </button>
        </div>

        <div>
          <button className="cursor-pointer flex gap-2 items-center border-blue-600 border rounded-md p-5 py-2 hover:bg-cyan-300">
            Account
            <Image 
              src="/icons/account.svg"
              alt="category icon"
              width={32}
              height={32}
              />
          </button>
        </div>
          
      </div>
    </nav>
  );
}
