import { useEffect } from "react";
import AOS from "aos";

const AboutDev = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="py-16 px-4 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About the Developer
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-1" data-aos="fade-right">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                TD
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Taha Rukaiya
              </h2>
              <p className="text-blue-600 font-semibold mb-4">
                Full Stack Developer
              </p>
              <p className="text-gray-600 mb-6">
                Passionate about creating innovative web applications that solve
                real-world problems
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/taharukaiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/taharukaiya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="mailto:taharukaiya@gmail.com"
                  className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* About & Skills Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* About Me */}
            <div
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              data-aos="fade-left"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                About Me
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a passionate full-stack developer with a strong foundation
                in modern web technologies. I love creating user-friendly
                applications that solve real-world problems and provide
                excellent user experiences. My journey in web development
                started with curiosity and has evolved into a deep passion for
                creating innovative digital solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies,
                contributing to open-source projects, and sharing knowledge with
                the developer community. I believe in continuous learning and
                staying updated with the latest trends in technology.
              </p>
            </div>

            {/* Technical Skills */}
            <div
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 text-purple-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
                Technical Skills
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Frontend</h4>
                  <div className="space-y-2">
                    {[
                      { name: "React.js", level: 90 },
                      { name: "JavaScript (ES6+)", level: 85 },
                      { name: "HTML5 & CSS3", level: 95 },
                      { name: "Tailwind CSS", level: 90 },
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-600 text-sm">
                          {skill.name}
                        </span>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Backend & Tools
                  </h4>
                  <div className="space-y-2">
                    {[
                      { name: "Node.js", level: 80 },
                      { name: "Firebase", level: 85 },
                      { name: "MongoDB", level: 75 },
                      { name: "Git & GitHub", level: 90 },
                    ].map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <span className="text-gray-600 text-sm">
                          {skill.name}
                        </span>
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-16" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Discount PRO",
                description:
                  "A comprehensive coupon collecting application with Firebase authentication",
                tech: ["React", "Firebase", "Tailwind CSS"],
                color: "from-blue-500 to-purple-500",
              },
              {
                title: "E-Commerce Platform",
                description:
                  "Full-stack e-commerce solution with payment integration",
                tech: ["React", "Node.js", "MongoDB"],
                color: "from-green-500 to-blue-500",
              },
              {
                title: "Task Management App",
                description:
                  "Collaborative project management tool with real-time updates",
                tech: ["React", "Socket.io", "Express"],
                color: "from-purple-500 to-pink-500",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-full h-32 bg-gradient-to-r ${project.color} rounded-lg mb-4 flex items-center justify-center text-white text-2xl font-bold`}
                >
                  {project.title.charAt(0)}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together!</h3>
            <p className="mb-6">
              I'm always interested in new opportunities and exciting projects.
              Feel free to reach out if you'd like to collaborate!
            </p>
            <a
              href="mailto:taharukaiya@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDev;
