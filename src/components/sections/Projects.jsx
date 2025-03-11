import { RevealOnScroll } from "../RevealOnScroll";
import bgImage from "/assets/img_1.png";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}

      >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Library Management System</h3>
              <p className="text-gray-100 mb-4">
                Scalable inventory management system with real-time tracking.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "Sql"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-700 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Favoursimeon/Library-Management-System"
                  className="text-blue-500 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2"> Hotel Management System</h3>
              <p className="text-gray-100 mb-4">
              Another inventory management system with real-time tracking.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "React", "flask", "mongoDb"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-600 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Favoursimeon/Hotel_management-1"
                  className="text-blue-500 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Foovante Global Website</h3>
              <p className="text-gray-100 mb-4">
                <li>Defined the core objectives of the website and aligned them with the company’s goals,</li>
                <li>Collaborated with UI/UX designers to create an intuitive, engaging, and accessible interface,</li>
                <li>Worked closely with developers to break down features into sprints for efficient execution.</li>


              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Trello", "ClickUp", "React.js", "MsTeams"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Foovante Global App</h3>
              <p className="text-gray-100 mb-4">
                The Foovante Project is an initiative aimed at helping businesses, organizations, and individuals measure,
                analyze, and reduce their carbon footprint. By leveraging advanced carbon calculation models and offsetting
                strategies, the project enables users to take actionable steps toward environmental sustainability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["ClickUp", "Trello", "Jira", "Teams"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
