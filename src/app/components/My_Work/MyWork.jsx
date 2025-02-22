import React from "react";
import Image from "next/image";

const MyWork = () => {
  return (
    <>
      <section id="services">
        <div className="flex flex-col justify-center items-center font-Inconsolata  gap-12 py-52">
          <div className="flex justify-center items-center">
            <h1 className="text-white text-6xl font-semibold">My Work</h1>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <a
              className="relative"
              href="https://play.google.com/store/apps/details?id=com.tmobile.services.nameid&hl=en_US"
              target="_blank"
            >
              <Image
                src="/demo scam shield.gif"
                width={300}
                height={325}
                alt="work"
              />
              <div className="bg-transparent absolute top-0 flex flex-col justify-center items-center py-8 px-4  gap-4 opacity-95">
                <h1 className="text-pink-800/65 text-base font-semibold">
                  T-Mobile Scam Shield
                </h1>
              </div>
            </a>

            <a
              className="relative"
              href="https://play.google.com/store/apps/details?id=com.tmobile.vvm.application&hl=en_US"
              target="_blank"
            >
              <Image
                src="/demo sorting.gif"
                width={300}
                height={325}
                alt="work"
              />
              <div className="bg-transparent absolute top-0 flex flex-col justify-center items-center py-8 px-4  gap-4 opacity-95">
                <h1 className="text-pink-800/65 text-base font-semibold">
                  T-Mobile Visual Voicemail
                </h1>
              </div>
            </a>

            <div className="relative">
              <Image
                src="/demo sim swap.gif"
                width={300}
                height={325}
                alt="work"
              />
              <div className="bg-transparent absolute top-0 flex flex-col justify-center items-center py-8 px-4  gap-4 opacity-95">
                <h1 className="text-pink-800/65 text-base font-semibold">
                  left menu
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyWork;
