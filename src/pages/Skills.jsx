import {
  FaCode,
  FaTools,
  FaNetworkWired,
  FaLaptopCode,
  FaVial,
} from "react-icons/fa";

const skillsData = [
  {
    category: "Languages",
    icon: <FaCode className="text-purple-600 w-5 h-5" />,
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS", "C", "C++"],
  },
  {
    category: "Frameworks & Libraries",
    icon: <FaTools className="text-green-600 w-5 h-5" />,
    items: [
      "ReactJS",
      "Angular",
      "RxJS",
      "NgRx",
      "Next.js",
      "Bootstrap",
      "Angular Material",
      "Tailwind CSS"
    ],
  },
  {
    category: "API Integration",
    icon: <FaNetworkWired className="text-blue-600 w-5 h-5" />,
    items: ["RESTful APIs", "Axios", "Fetch"],
  },
  {
    category: "Developer Tools",
    icon: <FaLaptopCode className="text-yellow-600 w-5 h-5" />,
    items: [
      "Visual Studio Code",
      "GitHub",
      "Jira",
      "Redux",
      "Figma",
      "WordPress",
    ],
  },
  {
    category: "Testing",
    icon: <FaVial className="text-red-600 w-5 h-5" />,
    items: ["Unit testing", "End-to-End testing", "Jest", "Karma"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map(({ category, icon, items }, index) => (
          <div
            key={category}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 animate-fadeInUp"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="flex items-center mb-4 gap-2">
              {icon}
              <h3 className="text-lg font-semibold text-gray-700">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
