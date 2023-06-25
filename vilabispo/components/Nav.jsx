"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";


function Nav() {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href='/' className="flex gap-2 flex-center">
            <p className="logo_text">VilaBispo</p>
        </Link>
        <Link href='/land' className="flex gap-2 flex-center">
            Land
        </Link>
        <Link href='/about' className="flex gap-2 flex-center">
            About
        </Link>
        <Link href='/ideas' className="flex gap-2 flex-center">
            Ideas
        </Link>
    </nav>
  )
}

export default Nav;