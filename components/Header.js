import {
  MenuIcon as MenuIconOutline,
  SearchIcon as SearchIconOutline,
  UserCircleIcon as UserCircleIconOutline,
  BookOpenIcon as BookOpenIconOutline,
  HomeIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
  ShieldCheckIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

import {
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  BookOpenIcon,
} from "@heroicons/react/solid";
import { animate, motion } from "framer-motion";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { data } from "autoprefixer";
import Image from "next/image";

const container = {
  hidden: {},
  show: {},
};

const item = {
  hidden: { x: 0, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

function Header() {
  const { data: session } = useSession();
  console.log(session);
  const [search, setSearch] = useState("");

  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col z-50 bg-gray-100"
    >
      <motion.div
        className="linksContainer flex flex-col justify-between"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Top */}
        <motion.h1
          variants={item}
          initial="hidden"
          animate="show"
          className="logoContainer flex items-center justify-center place font-bold text-blue-600 text-2xl p-4 cursor-pointer relative"
        >
          <BookOpenIcon className="h-10 mr-2 mt-1" />
          <p className="hidden md:inline-flex">TeXchange</p>
        </motion.h1>
        <motion.br className="break" />

        {/* UserInfo */}
        {session && (
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            className="userContainer hidden md:flex flex-col items-center justify-center place font-bold text-base cursor-pointer -mt-6 mb-4"
          >
            <img
              src={session.user.image}
              className="h-16 rounded-full"
              alt="profile pic"
            />
            <motion.p className="">{session.user.name}</motion.p>
          </motion.div>
        )}

        <motion.div variants={item} className="space-y-4">
          <motion.div className="linkActive">
            <HomeIcon className="navIconActive" />
            <motion.p className="navLinkActive">Home</motion.p>
          </motion.div>
        </motion.div>
        <hr className="break" />

        {session && (
          <>
            <motion.div variants={item} className="space-y-4">
              <div className="link">
                <PencilIcon className="navIcon" />
                <motion.p className="navLink">My Courses</motion.p>
              </div>
              <div className="link">
                <BookOpenIconOutline className="navIcon" />
                <motion.p className="navLink">My Books</motion.p>
              </div>
            </motion.div>
            <hr className="break" />
          </>
        )}

        {/* Bottom */}
        <motion.div variants={item} className="space-y-4">
          <div className="link">
            <QuestionMarkCircleIcon className="navIcon" />
            <motion.p className="navLink">About</motion.p>
          </div>

          <div className="link">
            <ShieldCheckIcon className="navIcon" />
            <motion.p className="navLink">Privacy & Security</motion.p>
          </div>

          <div variants={item} className="link">
            {session ? (
              <>
                <LogoutIcon onClick={signOut} className="navIcon" />
                <motion.button className="navLink" onClick={signOut}>
                  Sign Out
                </motion.button>
              </>
            ) : (
              <>
                <LogoutIcon onClick={signIn} className="navIcon" />
                <motion.button className="navLink" onClick={signIn}>
                  Sign In
                </motion.button>
              </>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
}

export default Header;
