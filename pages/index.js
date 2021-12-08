import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const fadeInUp = {
    hidden: {
      y: 0,
      opacity: 0,
      scale: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    exit: {
      y: "50%",
      opacity: [1, 1, 0, 0],
      scale: 20,
    },
  };

  return (
    <div className="flex bg-blue-600 min-h-screen ">
      <Head>
        <title>TeXchange</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Main */}
      <Hero />
      {/* Footer */}
    </div>
  );
}
