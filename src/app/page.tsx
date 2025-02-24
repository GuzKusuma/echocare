/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollRef = useRef(null);
  
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col relative ">
        <motion.div
          ref={scrollRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Elemen mulai animasi saat 20% terlihat di viewport
          variants={{
            hidden: { opacity: 0, y: 100, scale: 0.9 },
            visible: {
              opacity: 1,
              y: 0,
              // Efek sedikit bergetar saat muncul
              transition: {
                duration: 1.2, // Memperpanjang durasi agar lebih dramatis
                ease: "easeInOut", // Efek smooth saat muncul
                delay: 0.2, // Memberikan jeda sebelum animasi dimulai
              },
            },
          }}
          className="dot-1 "
        >
          <img
            src="/dot.png"
            alt=""
            width={70}
            height={20}
            loading="lazy"
            draggable="false"
          />
        </motion.div>
        {/* Navbar */}
        <div className="flex flex-row justify-between w-full h-[100px] items-center  xsm:px-3 px-[5rem] z-999 ">
          <div className="flex flex-row gap-5 items-center">
            <Image src="/echocare.svg" width={50} height={50} alt="Echocare" />
            <h3 className="text-black font-bold">Echocare</h3>
          </div>

          {/* Tombol untuk desktop */}
          <div className="hidden sm:flex flex-row gap-5">
            <button className="text-white rounded-[35px] border bg-[#39C1C7] w-[135px] h-[39px]">
              Sign up
            </button>
            <button className="text-white rounded-[35px] border w-[135px] h-[39px] bg-[#39C1C7]">
              Login
            </button>
          </div>

          {/* Hamburger Menu untuk Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-black text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Dropdown Menu (Muncul hanya jika hamburger diklik) */}
        {menuOpen && (
          <div className="sm:hidden absolute top-[100px] right-5 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3 z-2  ">
            <button className="text-white rounded-[35px] border bg-[#39C1C7] w-[135px] h-[39px]">
              Sign up
            </button>
            <button className="text-white rounded-[35px] border w-[135px] h-[39px] bg-[#39C1C7]">
              Login
            </button>
          </div>
        )}

        {/* Main Content */}
        <motion.div
          ref={scrollRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Elemen mulai animasi saat 20% terlihat di viewport
          variants={{
            hidden: { opacity: 0, y: 100, scale: 0.9 },
            visible: {
              opacity: 1,
              y: 0,

              // Efek sedikit bergetar saat muncul
              transition: {
                duration: 1.2, // Memperpanjang durasi agar lebih dramatis
                ease: "easeInOut", // Efek smooth saat muncul
                delay: 0.2, // Memberikan jeda sebelum animasi dimulai
              },
            },
          }}
          className="flex flex-row justify-between py-[80px] xsm:flex-wrap-reverse gap-4 xsm:gap-16 xsm:py-[40px] xsm:justify-center px-[5rem] z-[-1] mt-8 xsm:mt-0 relative"
        >
          <motion.div
            ref={scrollRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Elemen mulai animasi saat 20% terlihat di viewport
            variants={{
              hidden: { opacity: 0, y: 100, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,

                // Efek sedikit bergetar saat muncul
                transition: {
                  duration: 1.2, // Memperpanjang durasi agar lebih dramatis
                  ease: "easeInOut", // Efek smooth saat muncul
                  delay: 0.2, // Memberikan jeda sebelum animasi dimulai
                },
              },
            }}
            className="dot-2 "
          >
            <img
              src="/dot.png"
              alt=""
              width={70}
              height={20}
              loading="lazy"
              draggable="false"
            />
          </motion.div>
          <motion.div
            ref={scrollRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Elemen mulai animasi saat 20% terlihat di viewport
            variants={{
              hidden: { opacity: 0, y: 100, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,

                // Efek sedikit bergetar saat muncul
                transition: {
                  duration: 1.2, // Memperpanjang durasi agar lebih dramatis
                  ease: "easeInOut", // Efek smooth saat muncul
                  delay: 0.2, // Memberikan jeda sebelum animasi dimulai
                },
              },
            }}
            className="dot-3 "
          >
            <img
              src="/dot.png"
              alt=""
              width={70}
              height={20}
              loading="lazy"
              draggable="false"
            />
          </motion.div>
          <div className="flex flex-col">
            <h1 className="min-w-[250px] text-black text-2xl font-semibold">
              Track Your Heart, Embrace Better Health
            </h1>
            <p className="min-w-[250px] text-slate-500 text-lg font-light">
              Echocare helps you monitor your heart health with ease, delivering
              accurate insights whenever you need them.
            </p>
            <div className="flex flex-row gap-5 mt-[2rem] xsm:justify-center">
              <button className="text-white rounded-[35px] border bg-[#39C1C7] w-[135px] h-[39px]">
                Get Started
              </button>
              <button className="text-[#39C1C7] rounded-[35px] border-[#39C1C7] border-[1.5px] w-[135px] h-[39px] bg-[#ffffff]">
                Learn More
              </button>
            </div>
          </div>

          <img
            className="z-[-1]"
            width={300}
            height={300}
            src="/Heart.png"
            draggable="false"
            alt="gambar jantung"
            loading="lazy"
          />
        </motion.div>

        {/* Cards Section */}
        <div className="flex flex-col items-center justify-center relative mt-[10.3rem]">
          <motion.div
            ref={scrollRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Elemen mulai animasi saat 20% terlihat di viewport
            variants={{
              hidden: { opacity: 0, y: 100, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,

                // Efek sedikit bergetar saat muncul
                transition: {
                  duration: 1, // Memperpanjang durasi agar lebih dramatis
                  ease: "easeInOut", // Efek smooth saat muncul
                  delay: 0.2, // Memberikan jeda sebelum animasi dimulai
                },
              },
            }}
            className="text-line flex flex-row items-center gap-5 mb-20"
          >
            <div className="line w-10 h-[3px] rounded-md bg-slate-300 "></div>
            <h1 className="text-black font-bold text-2xl"> Key Features</h1>
            <div className="line w-10 h-[3px] rounded-md bg-slate-300 "></div>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-10  z-2 relative"
            ref={scrollRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Elemen mulai animasi saat 20% terlihat di viewport
            variants={{
              hidden: { opacity: 0, y: 100, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,

                // Efek sedikit bergetar saat muncul
                transition: {
                  duration: 1, // Memperpanjang durasi agar lebih dramatis
                  ease: "easeInOut", // Efek smooth saat muncul
                  delay: 0.2, // Memberikan jeda sebelum animasi dimulai
                },
              },
            }}
          >
            {[
              {
                img: "/statistic.svg",
                title: "Real-Time Monitoring",
                desc: "Track your heart health instantly, anytime, anywhere",
              },
              {
                img: "/monitor.svg",
                title: "Seamless Connectivity",
                desc: "Easily access your data through our website anytime, with smooth connectivity",
              },
              {
                img: "/reportt.svg",
                title: "Heart Report",
                desc: "Get clear and detailed heart health reports to monitor your progress",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="flex flex-col text-black rounded-xl w-[300px] h-[300px]  bg-white drop-shadow-xl p-4 gap-10"
              >
                <div className="flex justify-start">
                  <img loading="lazy" src={card.img} width={40} height={50} alt={card.title} />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold text-xl">{card.title}</h2>
                  <p>{card.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
          <motion.div
            className="background-img "
            ref={scrollRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Elemen mulai animasi saat 20% terlihat di viewport
            variants={{
              hidden: { opacity: 0, y: 100, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1.1,
                rotate: [0, 3, -3, 0],
                transition: {
                  duration: 1.6,
                  ease: "easeInOut",
                  delay: 0.2,
                },
              },
            }}
          >
            <img loading="lazy" src="blob.png" alt="" />
          </motion.div>
        </div>
        {/* MPV video */}
        <div className="flex flex-col justify-center gap-10  items-center mt-[16rem]">
          <div className="text-line flex flex-row items-center gap-5">
            <div className="line w-10 h-[3px] rounded-md bg-slate-300 "></div>
            <h1 className="text-black font-bold text-2xl"> Our Product</h1>
            <div className="line w-10 h-[3px] rounded-md bg-slate-300 "></div>
          </div>
          <motion.video
            className="videoMPV shadow-xl"
            width={600}
            controls
            src="Echocare.mp4"
            ref={scrollRef}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Elemen mulai animasi saat 20% terlihat di viewport
            variants={{
              hidden: { opacity: 0, y: 100, scale: 0.9 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1,
                  ease: "easeInOut",
                  delay: 0.2,
                },
              },
            }}
          >
            Your browser does not support the video tag.
          </motion.video>
        </div>

        <div className="footer bg-[#39C1C7]  h-[350px] overflow-y-auto bottom-0 mt-20 px-8 pt-9 justify-center z-0 ">
          <div className="dot-4 ">
            <img
              src="/dot-white.png"
              alt=""
              width={70}
              height={20}
              loading="lazy"
              draggable="false"
            />
          </div>
          <div className="flex flex-row gap-10 flex-wrap text-white">
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex flex-row gap-3  ">
                <img
                  src="/echocaresm.png"
                  width={30}
                  height={30}
                  alt="gambar echocare"
                />
                <h1 className="text-lg font-bold">Echocare</h1>
              </div>
              <p className="text-sm font-light">
                Echocare delivers innovative, AI-powered heart and lung health
                monitoring solutions, accessible anytime, anywhere through web
                and mobile platforms
              </p>
              <p className="mt-5 text-sm font-light ">
                ©Echocare 2025. All rights reserved
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <h1 className="font-bold text-lg">Company</h1>
              <p className="text-sm font-light">
                About <br /> Testimonials <br /> Find a doctor <br /> Apps
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <h1 className="font-bold text-lg">Region</h1>
              <p className="text-sm font-light">
                Indonesia <br /> Taiwan <br /> China
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <h1 className="font-bold text-lg">Help</h1>
              <p className="text-sm font-light">
                Help Center <br /> Contact Support <br /> Instructions <br />{" "}
                How it Works
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/* eslint-enable @next/next/no-img-element */
