import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { y: 100 },
  show: {
    y: 0,
    transition: {
      staggerChildren: 1,
      ease: "anticipate",
    },
  },
};

const item = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

function Hero() {
  return (
    <div className="absolute bg-white h-screen w-full shadow-inner cursor-default">
      <Image
        src="https://images.unsplash.com/photo-1558901357-ca41e027e43a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1239&q=80"
        layout="fill"
        objectFit="cover"
        className="opacity-95"
      />

      <motion.div
        initial="hidden"
        animate="show"
        transition="transition"
        className="absolute font-light text-3xl text-white w-screen"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col relative justify-center items-center h-[38rem] text-left p-6 space-y-10 drop"
        >
          <motion.p
            variants={item}
            initial="hidden"
            animate="show"
            className="backdrop-blur-sm p-3 rounded-2xl drop-shadow-md shadow-lg opacity-90 py-10 text-center"
          >
            Turn your{" "}
            <span className="text-blue-700 font-semibold">
              textbooks <br />
            </span>{" "}
            into <br />
            <span className="text-blue-700 font-semibold">ex-books</span>
          </motion.p>

          <motion.button
            variants={item}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-700 rounded-full py-2 px-8 font-semibold drop-shadow-md items-center justify-center shadow-lg "
          >
            Start here
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
