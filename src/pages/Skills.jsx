import { FaCode, FaTools } from "react-icons/fa";

const skillsData = [
  {
    category: "Languages",
    icon: <FaCode className="text-purple-600 w-6 h-6" />,
    skills: [
      { name: "JavaScript (ES6+)", level: "90%" },
      { name: "TypeScript", level: "75%" },
      { name: "HTML5", level: "95%" },
      { name: "CSS", level: "90%" },
      { name: "C", level: "70%" },
      { name: "C++", level: "70%" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: <FaTools className="text-green-600 w-6 h-6" />,
    skills: [
      { name: "ReactJS", level: "90%" },
      { name: "Angular", level: "85%" },
      { name: "RxJS", level: "75%" },
      { name: "NgRx", level: "70%" },
      { name: "Next.js", level: "80%" },
      { name: "Bootstrap", level: "90%" },
      { name: "Angular Material", level: "85%" },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-16 bg-white rounded-lg"
    >
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        Skills
      </h2>
      {/* <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-14">
        Skills
      </h1> */}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
        {skillsData.map(({ category, skills, icon }) => (
          <div
            key={category}
            className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="flex items-center mb-5">
              <div className="p-2 bg-white rounded-full shadow-sm mr-3">
                {icon}
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                {category}
              </h2>
            </div>
            <div className="space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500">{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-purple-500 h-2.5 rounded-full transition-all duration-1000"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
