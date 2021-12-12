import { motion } from "framer-motion";
import Image from "next/image";
import { useSession } from "next-auth/react";

const container = {
  hidden: { y: 100 },
  show: {
    y: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 200, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

function Hero() {
  // Extract the data object from session to be used later
  const { data: session } = useSession();

  return (
    <>
      {/* Here we check to see if session data exists i.e, the user is logged in. If the user
      is logged in, render the normal TeXchange feed. If the user is not logged in, then
      render the welcome screen */}
      {session ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="container flex flex-col mx-auto"
        >
          {/* Search */}
          <motion.input
            variants={item}
            placeholder="Search..."
            className="p-4 md:mt-5"
          />
          {/* My Courses */}
          <motion.div
            variants={item}
            transition="transition"
            className="midContainer mt-5 md:grid-cols-2 grid"
          >
            <div className="coursesContainer bg-gray-100 rounded-lg  mx-2 shadow-lg">
              <p className="cardTitle font-semibold text-xl text-blue-700 cursor-default">
                My Courses
              </p>
              {/* In a full build, these would be populated with data pulled from the Firebase system */}
              <div className="courseContainer">
                <p className="courseTitle text-2xl">CSC 3380</p>
                <p className="courseDesc text-base">Object Oriented Design</p>
              </div>
              <div className="courseContainer">
                <p className="courseTitle text-2xl">CSC 4101</p>
                <p className="courseDesc text-base">Programming Languages</p>
              </div>
              <div className="courseContainer">
                <p className="courseTitle text-2xl">CSC 2262</p>
                <p className="courseDesc text-base">Numerical Methods</p>
              </div>
            </div>
            {/* My Books */}
            <motion.div
              variants={item}
              className="booksContainer bg-gray-100 rounded-lg mt-5 md:mt-0 mx-2 shadow-lg"
            >
              <p className="cardTitle font-semibold text-xl text-blue-700 cursor-default">
                My Books
              </p>
              <div className="courseContainer">
                <p className="courseTitle text-2xl">
                  Numerical Methods Book Title
                </p>
                <p className="courseDesc text-base">for CSC 2262</p>
              </div>
              <div className="courseContainer">
                <p className="courseTitle text-2xl">
                  Programming Languages Book Title
                </p>
                <p className="courseDesc text-base">for CSC 4101</p>
              </div>
              <div className="courseContainer">
                <p className="courseTitle text-2xl">
                  Object Oriented Book Title
                </p>
                <p className="courseDesc text-base">for CSC 3380</p>
              </div>
            </motion.div>
            {/* Account Settings */}
            <motion.div
              variants={item}
              className="accountContainer bg-gray-100 rounded-lg mx-2 mt-5 mb-5 shadow-lg"
            >
              {/* This would allow users to go to the account settings homepage */}
              <p className="cardTitle text-xl font-semibold text-blue-700 cursor-default">
                Account Settings
              </p>
              <button className="p-2">Go to account settings</button>
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        <div className="flex flex-col justify-center items-center mx-auto">
          <p className="text-4xl text-center mt-5 font-semibold text-white">
            Welcome to TeXchange!
          </p>
          <p className="text-lg">Sign in to continue..</p>
        </div>
      )}
    </>
  );
}

export default Hero;

/* Asynchronous function that loads the user data. */
export async function getServerSideProps(context) {
  return {
    props: { user },
  };
}
