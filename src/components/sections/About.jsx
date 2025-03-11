import { RevealOnScroll } from "../RevealOnScroll.jsx";
import bgImage from "/assets/About.png";

export const About = () => {
  const frontendSkills = ["React", "TypeScript", "TailwindCSS", "JavaScript", "Next.js"];
  const backendSkills = ["Node.js", "Express.js", "MySQL", ".NET", "MongoDB"];
  const productSkills = ["Scrum", "Jira", "ClickUp", "Trello", "Asana", "User Research"];

  return (
      <section id="about" className="relative py-20 bg-gray-950 text-white">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${bgImage})` }}></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">

          {/* Introduction Section */}
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                About Me
              </h2>              <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
                A <b>Full-Stack Developer</b> & <b>Product Manager</b> passionate about crafting innovative web solutions,
                user-centered applications, and leading digital transformation projects with an <b>Agile mindset</b>.
              </p>
            </div>
          </RevealOnScroll>

          {/* Skills Overview */}
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Frontend Skills */}
              <div className="p-6 rounded-xl bg-gray-800/70 border border-gray-700 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4">Frontend Expertise</h3>
                <ul className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, index) => (
                      <span key={index} className="bg-blue-600/20 text-white py-1 px-3 rounded-full text-sm hover:bg-blue-600/40 transition">
                    {tech}
                  </span>
                  ))}
                </ul>
              </div>

              {/* Backend Skills */}
              <div className="p-6 rounded-xl bg-gray-800/70 border border-gray-700 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4">Backend Mastery</h3>
                <ul className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, index) => (
                      <span key={index} className="bg-purple-600/20 text-white py-1 px-3 rounded-full text-sm hover:bg-purple-600/40 transition">
                    {tech}
                  </span>
                  ))}
                </ul>
              </div>

              {/* Product Management Skills */}
              <div className="p-6 rounded-xl bg-gray-800/70 border border-gray-700 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4">Product Management</h3>
                <ul className="flex flex-wrap gap-2">
                  {productSkills.map((tech, index) => (
                      <span key={index} className="bg-green-600/20 text-white py-1 px-3 rounded-full text-sm hover:bg-green-600/40 transition">
                    {tech}
                  </span>
                  ))}
                </ul>
              </div>
            </div>
          </RevealOnScroll>

          {/* Experience & Education */}
          <RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {/* Education Section */}
              <div className="p-6 rounded-xl bg-gray-800/70 border border-gray-700 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4">🎓 Education</h3>
                <ul className="list-disc list-inside text-white space-y-3">
                  <li>
                    <strong>B.S. in Computer Science</strong> - University of the People (2024-2027)
                    <p className="text-gray-400 text-sm">Focus:
                      <li>Data Structure</li>
                      <li>Web Development</li>
                      <li>Cloud Computing</li>
                      <li>Object-Oriented Programming</li>
                      .</p>
                  </li>
                  <li>
                    <strong>Full-Stack Software Engineering(Front-end Specialization)</strong> - ALX Africa (2023-2024)
                    <p className="text-gray-400 text-sm">Focus:  <li>Data Structure</li>
                      <li>Devops</li>
                      <li>Product Management</li>
                      <li>Software Engineering</li>
                      <li>Object-Oriented Programming</li></p>
                  </li>
                </ul>
              </div>

              {/* Work Experience Section */}
              <div className="p-6 rounded-xl bg-gray-800/70 border border-gray-700 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold mb-4">💼 Work Experience</h3>
                <div className="space-y-4 text-white">
                  <div>
                    <h4 className="font-semibold">Product Manager Intern & Application Tester - SIP Consult (2023 - 2024)</h4>
                    <ul className="text-gray-400 text-sm list-disc list-inside mt-2 space-y-1">
                      <li>Facilitated seamless collaboration between teams to enhance product development.</li>
                      <li>Conducted usability testing & documented software improvements.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Product Manager - Foovante Global Startups (2024)</h4>
                    <ul className="text-gray-400 text-sm list-disc list-inside mt-2 space-y-1">
                      <li>Developed strategic product roadmaps based on market trends & user feedback.</li>
                      <li>Led Agile teams in delivering high-quality digital solutions.</li>
                      <li>Wrote detailed PRDs, user stories, and acceptance criteria.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
  );
};
