import React, { useState, useEffect } from "react";
import profile from "../assets/profile.jpeg";

const Home = () => {
  const fullText = "Hi, I'm Priya Thakur";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 100;

    if (isDeleting) typingSpeed = 50;

    const timeout = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        setDisplayText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      } else if (!isDeleting && index === fullText.length) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && index === 0) {
        // Pause before re-typing
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-white shadow-lg rounded-lg flex flex-col items-center justify-center min-h-[600px] text-center">
      {/* Profile Image */}
      <img
        src={profile}
        alt="Priya Thakur"
        className="w-60 h-60 rounded-full shadow-lg object-cover mb-6 border-4 border-purple-500"
      />

      {/* Typewriter Text */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4">
        <span className="text-purple-600">{displayText}</span>
        <span className="text-purple-600 animate-pulse">|</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        A passionate Frontend Developer with experience in React,
        Angular, and Next.js. I love turning ideas into responsive,
        high-performing web apps with a focus on clean UI and seamless user
        experience.
      </p>

      <div className="flex gap-4">
        <a
          href="/Priya_Thakur_Resume.pdf"
          download
          className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
        >
          Resume
        </a>
        <a
          href="/projects"
          className="px-6 py-3 border border-purple-600 text-purple-600 rounded-xl hover:bg-purple-100 transition"
        >
          View Projects
        </a>
      </div>
    </div>
  );
};

export default Home;
