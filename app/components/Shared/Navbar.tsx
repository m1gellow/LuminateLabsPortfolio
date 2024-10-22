import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="absolute  z-50 py-3 container  flex items-center justify-end gap-10">
      <div>
        <Link className="font-bold text-xl text-white" href={'/'}>Luminate Labs</Link>
      </div>
    </div>
  );
};

export default Navbar;
