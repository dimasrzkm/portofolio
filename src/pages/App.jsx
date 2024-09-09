import Navbar from "../Components/Elements/Navbar/Navbar";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaPhoneAlt,
  FaLaravel,
  FaReact,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { DiPhp } from "react-icons/di";
import {
  SiLivewire,
  SiInertia,
  SiMariadb,
  SiTailwindcss,
} from "react-icons/si";
import { useEffect, useState } from "react";
import portofolios from "../data/portofolio";

function App() {
  const datas = portofolios;
  let [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setProjects(portofolios);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location = `mailto:${contact.email}?&subject=Invitation to Talk More&body=${contact.message}`;
  };
  const handleFilter = (e) => {
    let tag = e.target.textContent;

    if (tag != "All") {
      projects = portofolios.filter((project) => {
        return project.tags.includes(tag);
      });

      setProjects(projects);
    }

    if (tag == "All") {
      setProjects(datas);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="flex flex-col items-center justify-center px-5 py-12 pt-8 sm:flex-row sm:pt-12 sm:px-28 dark:bg-slate-800">
          <div className="order-2 sm:order-1 sm:w-1/2 main-left">
            <p className="text-xs tracking-[0.2rem] text-gray-700 dark:text-neutral-100 mt-2">
              MY NAME IS
            </p>
            <h3 className="my-2 text-2xl text-indigo-400 sm:text-3xl">
              Dimas Rizki Mahendra
            </h3>
            <p className="max-w-md mb-4 text-sm leading-relaxed text-justify sm:text-base dark:text-slate-100">
              I am a fresh graduate specializing in front-end development,
              proficient in PHP, JavaScript, React, and Laravel. With a keen
              interest in UI/UX design, I am dedicated to crafting compelling
              user interfaces that deliver intuitive user experiences
            </p>

            <div className="flex gap-4">
              <a href="https://github.com/dimasrzkm" target="_blank">
                <FaGithub className="w-7 h-7 text-slate-800 dark:text-slate-100" />
              </a>
              <a href="https://www.instagram.com/dimasrizki1_/" target="_blank">
                <FaInstagram className="w-7 h-7 text-slate-800 dark:text-slate-100" />
              </a>
              <a href="#">
                <FaFacebook className="w-7 h-7 text-slate-800 dark:text-slate-100" />
              </a>
              <a href="#">
                <FaLinkedin className="w-7 h-7 text-slate-800 dark:text-slate-100" />
              </a>
            </div>
          </div>

          <img
            src={"/images/undraw_programming.webp"}
            alt="hero_image"
            className="order-1 sm:w-1/2 sm:order-2"
            loading="lazy"
          />
        </section>
        {/* Skills */}
        <section
          className="px-5 py-12 sm:px-28 dark:text-slate-100 dark:bg-slate-800"
          id="skills"
        >
          <h2 className="text-2xl text-center">My Skills</h2>
          <p className="mt-1 mb-8 text-sm text-center">
            The Skills, tools and technologies I am really good at:
          </p>

          <div className="grid items-center justify-center grid-cols-1 gap-10 sm:grid-cols-3 lg:grid-cols-4">
            <div className="flex items-center justify-center w-full border border-gray-300 dark:border-white/30 hover:dark:border-white rounded-md h-52 hover:bg-[#4d588e] transition duration-300 cursor-pointer  overflow-hidden group relative">
              <DiPhp className="w-full h-full text-[#4d588e] group-hover:text-white" />
              <p className="absolute left-0 right-0 py-4 text-center text-white transition-all -bottom-16 group-hover:bottom-0 bg-white/20">
                PHP
              </p>
            </div>

            <div className="flex items-center justify-center w-full border border-gray-300 rounded-md h-52 hover:bg-[#ff291a] transition duration-300 cursor-pointer group relative overflow-hidden dark:border-white/30 hover:dark:border-white">
              <FaLaravel className="w-48 h-20 flex-1  text-[#ff291a] group-hover:text-white" />
              <p className="absolute left-0 right-0 py-4 text-center text-white transition-all -bottom-16 group-hover:bottom-0 bg-white/20">
                LARAVEL
              </p>
            </div>

            <div className="flex items-center justify-center w-full border border-gray-300 dark:border-white/30 hover:dark:border-white rounded-md h-52 hover:bg-[#efd81d] transition duration-300 cursor-pointer group relative overflow-hidden">
              <IoLogoJavascript className="w-48 h-20 flex-1  text-[#efd81d] group-hover:text-white" />
              <p className="absolute left-0 right-0 py-4 text-center text-gray-900 transition-all -bottom-16 group-hover:bottom-0 bg-white/20">
                JAVASCRIPT
              </p>
            </div>

            <div className="flex items-center justify-center w-full border border-gray-300 dark:border-white/30 hover:dark:border-white rounded-md h-52 hover:bg-[#087a9f] transition duration-300 cursor-pointer group relative overflow-hidden">
              <FaReact className="w-48 h-20 flex-1  text-[#087a9f] group-hover:text-white" />
              <p className="absolute left-0 right-0 py-4 text-center text-white transition-all -bottom-16 group-hover:bottom-0 bg-white/20">
                REACT
              </p>
            </div>

            <div className="flex items-center justify-center w-full border border-gray-300 dark:border-white/30 hover:dark:border-white rounded-md h-52 hover:bg-[#f36ca4] transition duration-300 cursor-pointer group relative overflow-hidden">
              <SiLivewire className="w-48 h-20 flex-1  text-[#f36ca4] group-hover:text-white" />
              <p className="absolute left-0 right-0 py-4 text-center text-white transition-all -bottom-16 group-hover:bottom-0 bg-white/20">
                LIVEWIRE
              </p>
            </div>

            <div className="relative flex items-center justify-center w-full overflow-hidden transition duration-300 border border-gray-300 dark:border-white/30 hover:dark:border-white rounded-md cursor-pointer h-52 hover:bg-gradient-to-r from-purple-600 to-indigo-500 group">
              <SiInertia className="flex-1 w-48 h-20 group-hover:text-white" />
              <p className="absolute left-0 right-0 py-4 text-center text-white transition-all -bottom-16 group-hover:bottom-0 bg-white/20">
                INERTIA
              </p>
            </div>

            <div className="flex items-center justify-center w-full transition duration-300 border border-gray-300 dark:border-white/30 hover:dark:border-white rounded-md cursor-pointer h-52 hover:bg-[#002f43] group relative overflow-hidden">
              <SiMariadb className="flex-1 w-48 h-20 text-[#002f43] dark:text-white group-hover:text-white" />
              <p className="absolute left-0 right-0 py-4 text-center text-white transition-all -bottom-16 group-hover:bottom-0 bg-white/20">
                MARIA DB
              </p>
            </div>

            <div className="flex items-center justify-center w-full transition duration-300 border border-gray-300 dark:border-white/30 hover:dark:border-white rounded-md cursor-pointer h-52 hover:bg-[#38bdf8] group relative overflow-hidden">
              <SiTailwindcss className="flex-1 w-48 h-20 text-[#38bdf8] group-hover:text-white" />
              <p className="absolute left-0 right-0 py-4 text-center text-white transition-all -bottom-16 group-hover:bottom-0 bg-white/20">
                TAILWIND
              </p>
            </div>
          </div>
        </section>
        {/* Portofolio */}
        <section
          className="bg-[#FBFBFB] dark:bg-slate-800/95 px-5 py-12 sm:px-28"
          id="projects"
        >
          <h4 className="text-xs tracking-[0.2rem] text-gray-700 dark:text-slate-100">
            MY WORK
          </h4>
          <h2 className="my-2 text-2xl font-medium sm:text-3xl dark:text-slate-100">
            Featured Portofolios
          </h2>

          <div className="flex flex-col items-start gap-12 mt-16 sm:flex-row gap-y-6">
            <div className="flex flex-row w-full gap-4 overflow-auto text-gray-800 sm:w-1/4 sm:flex-col">
              <div
                className="w-full px-3 py-2 bg-gray-100 rounded hover:cursor-pointer dark:bg-slate-700 dark:text-slate-100"
                onClick={(e) => handleFilter(e)}
              >
                All
              </div>
              <div
                className="w-full px-3 py-2 bg-gray-100 rounded hover:cursor-pointer dark:bg-slate-700 dark:text-slate-100"
                onClick={(e) => handleFilter(e)}
              >
                App
              </div>
              <div
                className="w-full px-3 py-2 bg-gray-100 rounded hover:cursor-pointer dark:bg-slate-700 dark:text-slate-100"
                onClick={(e) => handleFilter(e)}
              >
                Component
              </div>
              <div
                className="w-full px-3 py-2 bg-gray-100 rounded hover:cursor-pointer dark:bg-slate-700 dark:text-slate-100"
                onClick={(e) => handleFilter(e)}
              >
                Page
              </div>
              <div
                className="w-full px-3 py-2 bg-gray-100 rounded hover:cursor-pointer dark:bg-slate-700 dark:text-slate-100"
                onClick={(e) => handleFilter(e)}
              >
                Responsive
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-6 sm:w-3/4 sm:grid-cols-2">
              {projects.length == 0 ? (
                <p className="text-lg p-4 text-black bg-gray-300 dark:bg-slate-700 dark:text-white">
                  Portofolio Belum Tersedia
                </p>
              ) : (
                projects.map((project) => (
                  <div
                    className="flex flex-col justify-between w-full bg-white border border-gray-300 dark:bg-slate-700 dark:text-slate-100 dark:border-white/30 hover:dark:border-white "
                    key={project.id}
                  >
                    <img
                      src={`${project.thumbnail}`}
                      className="object-cover object-center w-full"
                      alt=""
                      loading="lazy"
                    />
                    <div className="flex flex-col justify-between flex-1 p-4 dark:bg-slate-800 dark:text-slate-100 ">
                      <a
                        href={project.links}
                        className="text-xl"
                        target="_blank"
                      >
                        {project.title}
                      </a>
                      {project.uiDesignerName && (
                        <p>
                          Thanks to{" "}
                          <a
                            href={project.uiDesignerProfile}
                            target="_blank"
                            className="tracking-tight text-indigo-300"
                          >
                            {project.uiDesignerName}
                          </a>{" "}
                          for the great assets and design.
                        </p>
                      )}
                      {project.challengeLink && (
                        <a
                          href={project.challengeLink}
                          target="_blank"
                          className="tracking-tight text-indigo-300"
                        >
                          Link Challenge
                        </a>
                      )}
                      <div className="flex flex-row gap-2 mt-3 overflow-auto tags">
                        {project.tags.map((tag, index) => (
                          <p
                            className="bg-[#D9D9D9] dark:bg-slate-700 dark:text-slate-100 max-w-fit px-2 py-1.5 rounded-full text-xs text-gray-800"
                            key={index}
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* Education & Experience Work */}
        <section
          className="px-5 py-12 sm:px-28 dark:bg-slate-800 dark:text-slate-100"
          id="education"
        >
          <h4 className="text-xs tracking-[0.2rem] text-gray-700 dark:text-inherit">
            LEARNING PATH
          </h4>
          <h2 className="my-2 text-2xl font-medium sm:text-3xl">
            Education & Work Experience
          </h2>

          <div className="flex flex-col items-start gap-4 mt-16 sm:flex-row gap-y-6">
            <div className="w-full sm:w-1/2 ">
              {/* Heading */}
              <div className="my-2 ps-2 first:mt-0">
                <h3 className="text-xs font-medium text-gray-500 uppercase dark:text-inherit">
                  7 November, 2023
                </h3>
              </div>
              {/* End Heading */}
              {/* Item */}
              <div className="flex gap-x-3">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                  <div className="relative z-10 flex items-center justify-center size-7">
                    <div className="bg-gray-400 rounded-full size-2" />
                  </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8">
                  <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-inherit">
                    Universitas Teknokrat Indonesia
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-inherit">
                    S-1 Teknik Informatika
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}

              {/* Heading */}
              <div className="my-2 ps-2 first:mt-0">
                <h3 className="text-xs font-medium text-gray-500 uppercase dark:text-inherit">
                  13 Mei, 2019
                </h3>
              </div>
              {/* End Heading */}
              {/* Item */}
              <div className="flex gap-x-3">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                  <div className="relative z-10 flex items-center justify-center size-7">
                    <div className="bg-gray-400 rounded-full size-2" />
                  </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8">
                  <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-inherit">
                    SMKN 4 Bandar Lampung
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-inherit">
                    Rekayasa Perangkat Lunak
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}

              {/* Heading */}
              <div className="my-2 ps-2 first:mt-0">
                <h3 className="text-xs font-medium text-gray-500 uppercase dark:text-inherit">
                  12 Juli, 2016
                </h3>
              </div>
              {/* End Heading */}
              {/* Item */}
              <div className="flex gap-x-3">
                {/* Icon */}
                <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                  <div className="relative z-10 flex items-center justify-center size-7">
                    <div className="bg-gray-400 rounded-full size-2" />
                  </div>
                </div>
                {/* End Icon */}
                {/* Right Content */}
                <div className="grow pt-0.5 pb-8">
                  <h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-inherit">
                    SMPN 25 Bandar Lampung
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-inherit">
                    Small steps 🐛
                  </p>
                </div>
                {/* End Right Content */}
              </div>
              {/* End Item */}
            </div>

            <div className="w-full sm:w-1/2 ">
              <div className="px-4 py-3 mb-4 border border-gray-300 dark:border-white/30 dark:hover:border-white transition rounded-md">
                <h3 className="font-medium">
                  Apprenticeship - BPJS Ketenagakerjaan
                </h3>
                <p className="text-xs text-gray-600 dark:text-inherit">
                  July - September 2022, Service and Membership Section
                </p>

                <ul className="px-4 py-2 text-sm text-gray-800 list-disc dark:text-inherit">
                  <li>Responsible for data claims input.</li>
                  <li>
                    Handle the archiving of work accident insurance application
                    documents for stage 1.
                  </li>
                  <li>
                    Correction and updating of data on BPU Workers (Not Wage
                    Recipients).
                  </li>
                </ul>
              </div>

              <div className="px-4 py-3 border border-gray-300 dark:border-white/30 dark:hover:border-white transition rounded-md">
                <h3 className="font-medium">Apprenticeship - DjCorp</h3>
                <p className="text-xs text-gray-600 dark:text-inherit">
                  Januari - April 2017, Operational Section
                </p>

                <ul className="px-4 py-2 text-sm text-gray-800 list-disc dark:text-inherit">
                  <li>
                    Helps in making articles for application portals SIDesa.
                  </li>
                  <li>Helping in organizing L'Dive event</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Me */}
        <section
          className="bg-[#FBFBFB] dark:bg-slate-800/95 px-5 py-12 sm:px-28"
          id="contactme"
        >
          <h2 className="my-2 mb-16 text-2xl font-medium sm:text-3xl dark:text-slate-100">
            Contact Me
          </h2>

          <div className="flex flex-col sm:flex-row gap-x-12 gap-y-6">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-y-6 sm:w-3/4"
            >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:border-gray-400 transition  duration-100"
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:border-gray-400 transition  duration-100"
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
              />
              <textarea
                name="message"
                id="email"
                cols="30"
                rows="10"
                placeholder="Message"
                className="w-full px-3 py-1.5 border border-gray-300 rounded focus:outline-none focus:border-gray-400 transition  duration-100"
                onChange={(e) =>
                  setContact({ ...contact, message: e.target.value })
                }
              ></textarea>
              <button
                type="submit"
                className="w-full px-3 py-2 text-white bg-indigo-400 rounded"
              >
                Send
              </button>
            </form>

            <div className="flex flex-col sm:w-2/4 gap-y-4">
              <div className="px-4 py-3 bg-white dark:bg-slate-800 dark:text-slate-100 border border-gray-300 dark:border-white/30 dark:hover:border-white transition duration-100 rounded-md">
                <div className="flex items-center mb-2 text-lg gap-x-2">
                  <FaLocationDot />
                  Address
                </div>
                <p className="tracking-tight text-justify text-gray-800 text-md dark:text-inherit">
                  Jl. Dipenogoro Komp. Al-Furqan No. 03, Gulak Galik, Kec. Tlk.
                  Betung Utara, Kota Bandar Lampung, Lampung
                </p>
              </div>

              <div className="px-4 py-3 bg-white dark:bg-slate-800 dark:text-slate-100 border border-gray-300 dark:border-white/30 dark:hover:border-white transition duration-100 rounded-md">
                <div className="flex items-center mb-2 text-lg gap-x-2">
                  <MdEmail />
                  Email
                </div>
                <p className="tracking-tight text-justify text-gray-800 text-md dark:text-inherit">
                  dimas1.mahendra@gmail.com
                </p>
              </div>

              <div className="px-4 py-3 bg-white dark:bg-slate-800 dark:text-slate-100 border border-gray-300 dark:border-white/30 dark:hover:border-white transition duration-100 rounded-md">
                <div className="flex items-center mb-2 text-lg gap-x-2">
                  <FaPhoneAlt />
                  Telp
                </div>
                <p className="tracking-tight text-justify text-gray-800 text-md dark:text-slate-100">
                  (+62) 8953-6348-3552
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full px-4 py-5 text-center bg-white dark:bg-slate-800 border-t dark:border-t-white/15">
        <div className="flex items-center justify-center gap-4 mb-2 dark:text-white">
          <a href="#">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href="#">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="#">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="#">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>

        <p className="text-sm font-medium dark:text-slate-100">
          Design by{" "}
          <a href="" className="underline">
            dimasrzkm
          </a>
          , icons by{" "}
          <a href="#" className="underline">
            react icons
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
