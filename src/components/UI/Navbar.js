import Link from "next/link";
import React, { use } from "react";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className='navbar bg-base-100'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className='p-2'>
                  <li>
                    <Link href={`/featuredProduct/${"Processor"}`}>
                      CPU/Processor
                    </Link>
                  </li>
                  <li>
                    <Link href={`/featuredProduct/${"Motherboard"}`}>
                      Motherboard
                    </Link>
                  </li>
                  <li>
                    <Link href={`/featuredProduct/${"RAM"}`}>RAM</Link>
                  </li>
                  <li>
                    <Link href={`/featuredProduct/${"PowerSupply"}`}>
                      Power Supply Unit
                    </Link>
                  </li>
                  <li>
                    <Link href={`/featuredProduct/${"StorageDevice"}`}>
                      Storage Device
                    </Link>
                  </li>
                  <li>
                    <Link href={`/featuredProduct/${"Monitor"}`}>Monitor</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link href={"/"} className='btn btn-ghost normal-case text-xl'>
           PC Build
          </Link>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>
            {session?.user ? (
              <li>
                <button onClick={() => signOut()}>Log Out</button>
              </li>
            ) : (
              <li>
                <Link href={"/login"}>Log In</Link>
              </li>
            )}

            <li tabIndex={0}>
              <details>
                <summary>Components</summary>
                <ul className='p-2 z-10'>
                  <li>
                    <Link href={`/featuredProduct/${"Processor"}`}>
                      CPU/Processor
                    </Link>
                  </li>
                  <li>
                    <Link href={`/featuredProduct/${"Motherboard"}`}>
                      Motherboard
                    </Link>
                  </li>
                  <li>
                    <Link href={`/featuredProduct/${"RAM"}`}>RAM</Link>
                  </li>
                  <li>
                    <Link href={`/featuredProduct/${"PowerSupply"}`}>
                      Power Supply Unit
                    </Link>
                  </li>
                  <li>
                    <Link href={`/featuredProduct/${"StorageDevice"}`}>
                      Storage Device
                    </Link>
                  </li>
                  <li>
                    <Link href={`/featuredProduct/${"Monitor"}`}>Monitor</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className='navbar-end'>
          <Link href={"/pcbuilder"} className='btn'>
            Pc Builder
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
