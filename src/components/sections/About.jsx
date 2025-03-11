import { RevealOnScroll } from "../RevealOnScroll.jsx";
import bgImage from "/assets/About.png";

export const About = () => {
  const frontendSkills = ["React", "TypeScript", "TailwindCSS", "JavaScript", "Next.js"];
  const backendSkills = ["Node.js", "Express.js", "MySQL", ".NET", "MongoDB"];
  const productSkills = ["Scrum", "Jira", "ClickUp", "Trello", "Asana", "User Research"];

  return (
      <section
          id="about"
          className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat md:bg-fixed"
          style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <RevealOnScroll>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-white text-center">
            <h2 className="text-4xl font-extrabold mb-6 tracking-wide">About Me</h2>

            <div className="rounded-xl p-8 border border-white/20 backdrop-blur-lg bg-white/10 transition-all hover:-translate-y-1">
              <p className="text-lg leading-relaxed mb-6 font-light">
                <strong className="text-blue-400">Innovative Developer & Strategic Product Manager</strong>
                with a passion for building seamless digital experiences.
                I blend technical expertise with strategic thinking to craft **scalable web solutions** and drive impactful products.
              </p>

              {/* Skills Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Frontend Skills */}
                <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-700 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {frontendSkills.map((tech, index) => (
                        <span key={index} className="bg-blue-500/20 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-500/40 transition">
                      {tech}
                    </span>
                    ))}
                  </div>
                </div>

                {/* Backend Skills */}
                <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-700 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold mb-4">Backend</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {backendSkills.map((tech, index) => (
                        <span key={index} className="bg-purple-500/20 text-white py-1 px-3 rounded-full text-sm hover:bg-purple-500/40 transition">
                      {tech}
                    </span>
                    ))}
                  </div>
                </div>

                {/* Product Management Skills */}
                <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-700 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold mb-4">Product Management</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {productSkills.map((tech, index) => (
                        <span key={index} className="bg-green-500/20 text-white py-1 px-3 rounded-full text-sm hover:bg-green-500/40 transition">
                      {tech}
                    </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Experience & Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {/* Education Section */}
              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-700 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-semibold mb-4">🏫 Education</h3>
                <ul className="list-disc list-inside text-white space-y-2">
                  <li>
                    <strong>B.S. in Computer Science</strong> - University of the People (2024-2027)
                    <p className="text-gray-300 text-sm">Focus: Data Structures, Web Development, Cloud Computing.</p>
                  </li>
                  <li>
                    <strong>Software Engineering</strong> - ALX Africa (2023-2024)
                    <p className="text-gray-300 text-sm">Focus: DevOps, Full-Stack Development, Agile Methodologies.</p>
                  </li>
                </ul>
              </div>

              {/* Work Experience Section */}
              <div className="p-6 rounded-xl bg-gray-900/50 border border-gray-700 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-semibold mb-4">💼 Work Experience</h3>
                <div className="space-y-4 text-white">
                  <div>
                    <h4 className="font-semibold">Product Manager Intern & Application Tester - SIP Consult (2023 - 2024)</h4>
                    <ul className="text-gray-300 text-sm list-disc list-inside mt-2 space-y-1">
                      <li>Facilitated seamless collaboration between teams to enhance product development.</li>
                      <li>Conducted usability testing & documented software improvements.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Product Manager - Foovante Global Startups (2024)</h4>
                    <ul className="text-gray-300 text-sm list-disc list-inside mt-2 space-y-1">
                      <li>Developed strategic product roadmaps based on market trends & user feedback.</li>
                      <li>Led Agile teams in delivering high-quality digital solutions.</li>
                      <li>Wrote detailed PRDs, user stories, and acceptance criteria.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </section>
  );
};
