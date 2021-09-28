import {
  MenuIcon as MenuIconOutline,
  SearchIcon as SearchIconOutline,
  UserCircleIcon as UserCircleIconOutline,
  BookOpenIcon as BookOpenIconOutline,
} from "@heroicons/react/outline";

import {
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  BookOpenIcon,
} from "@heroicons/react/solid";
import { animate, motion } from "framer-motion";
import { useState } from "react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: -100 },
  show: { y: 0 },
};

function Header() {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    console.log(search);
  };

  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="show"
      className="flex justify-between items-center  shadow-md backdrop-blur-sm  z-50 bg-transparent rounded-b-3xl sticky top-0"
    >
      {/* Left */}
      <motion.h1
        variants={item}
        whileHover={{ scale: 1.2 }}
        className="logoContainer flex items-center font-semibold text-white text-2xl p-4 cursor-pointer"
      >
        <BookOpenIcon className="h-12 mr-2" />
        <p className="hidden md:inline-flex">TeXchange</p>
      </motion.h1>

      {/* Middle */}

      <form onSubmit={handleSubmit} className="flex flex-grow justify-center">
        <motion.div
          variants={item}
          className="searchContainer flex md:flex-grow max-w-md md:border md:rounded-full md:shadow-lg md:bg-white transition-all duration-100 ease-out"
        >
          <motion.input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Start searching books and courses..."
            className="w-1/2 md:w-auto border-b md:border-none md:inline-flex flex-grow bg-transparent text-white placeholder-white md:placeholder-gray-500 outline-none  focus:text-white md:focus:text-purple-800 focus:placeholder-purple-500 transition-all duration-100 ease-out px-4 mb-2 py-1 md:mb-0 md:py-0 "
            style="search"
          />

          <SearchIconOutline className="navButton mr-3  hidden md:inline-flex mx-auto text-white md:text-blue-700" />
        </motion.div>
      </form>

      {/* Right */}
      <motion.div variants={item} className="rightContainer flex p-2">
        <motion.div
          variants={container}
          className="buttonsContainer flex items-center"
        >
          <motion.p
            whileHover={{ scale: 1.2 }}
            variants={item}
            className="navLink"
          >
            Home
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.2 }}
            variants={item}
            className="navLink"
          >
            Textbooks
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.2 }}
            variants={item}
            className="navLink"
          >
            Courses
          </motion.p>
          <motion.div variants={item}>
            <MenuIcon className="navButton md:hidden" />
          </motion.div>
          <motion.div variants={item}>
            <UserCircleIcon className="navButton md:h-12 rounded-full " />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}

export default Header;
