import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <section id="about" className="max-w-3xl mx-auto">
        <div className="text-lg items-center gap-3 text-[#F0E3CA] pt-24 pb-24">
          {/* Image */}
          <img
            src="/pp.png"
            alt="Mountain Image"
            className="w-48 float-right ml-4 mb-4 object-cover rounded-lg shadow-md"
          />

          {/* Text Content */}

          <p className="text-lg text-white font-mono">
            Hello,
            <h1 className="text-6xl mb-4 text-white font-bold font-sans">
              I'm Gen Li, Android Developer based in the US
            </h1>
            As part of T-Mobile's Android Application Team, I design, implement,
            and maintain multiple Android applications and an authentication
            SDK, enabling seamless deployment across Android and Flutter
            projects. This effort reduced development time by 20% and
            application size by 25%. I also improved the Visual Voicemail app by
            refactoring the sorting mechanism, cutting runtime by 23%. My
            expertise in Android, Kotlin, Git, and Agile methodologies has made
            me a key contributor, consistently delivering high-impact results.
            Managing multiple projects has honed my problem-solving and
            collaboration skills. Driven by curiosity, I constantly explore new
            technologies to refine my skills and deliver even greater value.
          </p>
          <div className="mt-6">
            <a
              className="bg-transparent shadow-2xl text-xl hover:bg-gradient-to-br from-cyan-500 to-pink-500 text-white font-semibold hover:text-white py-4 px-8 rounded"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
