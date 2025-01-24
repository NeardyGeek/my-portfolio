import React from "react";
import Image from "next/image";
import Link from "next/link";

const Contacts = () => {
  return (
    <>
      <section id="contact">
        <div className="flex flex-col xl:flex-row justify-center items-center p-20 gap-5 font-Inconsolata">
          <div className="flex flex-col gap-4 p-6 flex-1 items-center xl:items-start  xl:ml-[35px]"> 
            <img className="size-12" src="/logo.png" alt="Logo" />
            <p className="text-[#F0E3CA] text-xl text-center xl:text-left">
              let's create your next experience together
            </p>
          </div>
          <div className="flex flex-col items-start gap-5 flex-wrap flex-1 xl:ml-[300px]">
            <h1 className="text-white text-3xl font-extrabold">Contacts</h1>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
              <div className="flex justify-center items-center gap-4">
                <Image
                  src="/mail.png"
                  width={32}
                  height={32}
                  alt="image not found"
                />
                <Link
                  className="text-white text-xl text-center"
                  href="mailto:gen.li2@outlook.com"
                >
                  gen.li2@outlook.com
                </Link>
              </div>
              <div className="flex justify-center items-center gap-4">
                <Image
                  src="/linkedIn logo.png"
                  width={32}
                  height={32}
                  alt="image not found"
                />
                <Link
                  className="text-white text-2xl text-center"
                  href="https://www.linkedin.com/in/gen-li1024/"
                >
                  Li Gen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
