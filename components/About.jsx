import React from "react";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import TawkToChat from "./TawkToChat";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const About = () => {
  const handleDemoClick = () => {
    window.location.href = "https://forms.gle/yscHLNqqaHzkpP7f6";
  };

  return (
    <>
      <Head>
        <title>Online Class Nepal | IELTS & PTE Success</title>
        <meta name="description" content="Achieve success in IELTS and PTE with Online Class Nepal. Perfect for busy individuals, offering excellent results, unlimited mock tests, and flexible class timings." />
        <meta name="keywords" content="IELTS, PTE, Online Classes, Mock Tests, Flexible Timing, Success" />
      </Head>

      <TawkToChat />

      <section className="bg-white w-full">
        <div className="flex flex-col md:flex-row items-center p-8 rounded-lg max-w-6xl mx-auto">
          <div className="flex-1 md:ml-8 mt-6 md:mt-0 text-left md:hidden">
            <h2 className="text-sm text-[#1273EB] font-semibold mb-2">
              ONLINE CLASS NEPAL
            </h2>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Your Gateway to Success in IELTS and PTE!
            </h1>
          </div>
          <div className="flex-1">
            <Image
              src="/pic1.jpeg"
              alt="Student studying online"
              width={480}
              height={360}
              className="rounded-lg"
            />
          </div>
          <div className="flex-1 md:ml-8 mt-6 md:mt-0 text-left">
            <h2 className="text-sm text-[#1273EB] font-semibold mb-2 hidden md:block md:text-lg">
              ONLINE CLASS NEPAL
            </h2>
            <h1 className="text-2xl font-bold text-gray-900 mb-4 hidden md:block">
              Your Gateway to Success in IELTS and PTE!
            </h1>
            <p className="text-gray-700 mb-4">
              Our platform is specifically designed for busy job holders and
              individuals struggling to allocate time for physical classes.
            </p>
            <ul className="list-none mb-6 font-semibold text-left">
              <li className="flex items-center mb-2">
                <span className="text-lg mr-2">
                  <FaCheckCircle className="text-[#1273EB]" />
                </span>
                <span className="text-gray-700">EXCELLENT RESULT</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-lg mr-2">
                  <FaCheckCircle className="text-[#1273EB]" />
                </span>
                <span className="text-gray-700">UNLIMITED MOCK TESTS</span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-lg mr-2">
                  <FaCheckCircle className="text-[#1273EB]" />
                </span>
                <span className="text-gray-700">
                  EARLY MORNING AND LATE EVENING CLASSES
                </span>
              </li>
              <li className="flex items-center mb-2">
                <span className="text-lg mr-2">
                  <FaCheckCircle className="text-[#1273EB]" />
                </span>
                <span className="text-gray-700">LIFETIME RESOURCES</span>
              </li>
            </ul>
            <button
              className="bg-[#1273EB] w-full text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              onClick={handleDemoClick}
            >
              Book FREE Demo Class
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
