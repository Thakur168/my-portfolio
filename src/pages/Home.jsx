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
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, fullText]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 bg-white shadow-xl rounded-2xl flex flex-col items-center justify-center min-h-[600px] text-center">
      {/* Profile Image */}
      <img
        src={profile}
        alt="Priya Thakur"
        className="w-56 h-56 rounded-full shadow-2xl object-cover mb-8 border-8 border-purple-600"
      />

      {/* Typewriter Text */}
      <h1 className="text-3xl font-bold text-slate-800 mb-6 tracking-wide">
        <span className="text-purple-600">{displayText}</span>
        <span className="text-purple-600 animate-pulse">|</span>
      </h1>

      <p className="text-slate-600 text-sm max-w-3xl leading-relaxed mb-10 px-4">
        I am a{" "}
        <span className="font-medium text-purple-600">
          detail-oriented Frontend Developer
        </span>{" "}
        with nearly 4 years of experience creating scalable, high-performance, and
        accessible web applications. I specialize in{" "}
        <span className="font-medium text-purple-600">
          JavaScript, TypeScript, React.js, Angular, and Next.js
        </span>
        , building modern frontend architectures that deliver seamless user
        experiences. I am passionate about integrating RESTful APIs, optimizing
        performance, and working within agile teams to craft intuitive and
        consistent interfaces that make an impact.{" "}
        <span className="italic">Let’s build something great together!</span>
      </p>

      <div className="flex gap-6">
        <a
          href="/Priya_Thakur_Resume.pdf"
          download
          className="px-8 py-3 bg-purple-600 text-white rounded-md font-medium shadow hover:bg-purple-700 transition"
        >
          Download Resume
        </a>
        <a
          href="/projects"
          className="px-8 py-3 border border-purple-600 text-purple-600 rounded-md font-medium hover:bg-purple-100 transition"
        >
          View Projects
        </a>
      </div>
    </div>
  );
};

export default Home;
