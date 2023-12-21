import React from 'react'

import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
import {
    BsFillMoonStarsFill,
    BsTwitter,
    BsInstagram,
    BsLinkedin,
  } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="">
          <div className="py-5 text-center dark:text-white">
            <ul className="flex justify-center py-2 items-center">
              <li>
                <a href="https://twitter.com/ShijazKs" className='hover:text-cyan-500'>
                  <FaXTwitter className="cursor-pointer text-xl mx-2" />
                </a>
              </li>
              <li>
                <a href="http://instagram.com/_u/shijaz_ks/" className='hover:text-cyan-500' >
                  <BsInstagram className="cursor-pointer text-xl mx-2" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shijaz-ks/" className='hover:text-cyan-500' >
                  <BsLinkedin className="cursor-pointer text-xl mx-2" />
                </a>
              </li>
              <li>
                <a href="mailto:hafizshijaz@gmail.com" className='hover:text-cyan-500' >
                  <MdEmail className="cursor-pointer text-2xl mx-2" />
                </a>
              </li>
            </ul>
            <p className="text-sm">
              Copyright©2022{" "}
              <span className="text-blue-800 dark:text-yellow-500">
                {" "}
                Jaz Design{" "}
              </span>{" "}
              all rights reserved.
            </p>
          </div>
        </footer>
  )
}

export default Footer