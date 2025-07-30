import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const experiences = [
  {
    duration: "March 2023 – December 2023",
    role: "Software Developer",
    company: "PGEIN Pvt. Ltd, Chandigarh",
    description:
      "It is a backend office which provides Business Solutions and Services to Pride Group Enterprises.",
    points: [
      "Used GitHub to maintain code versions with features like branch, merge, pull, and push — improving delivery by 20%.",
      "Resolved front-end performance issues using bundle optimization and lazy loading — boosting efficiency by 30%.",
      "Used Jira to manage sprints, tasks, and progress — improving productivity by 35%.",
    ],
  },
  {
    duration: "January 2023 – February 2023",
    role: "Senior Software Developer",
    company: "Autviz Pvt. Ltd, Mohali",
    description:
      "A professional IT services company with capabilities in hybrid applications, cloud services, machine learning, and e-commerce.",
    points: [
      "Mentored junior developers — increasing team collaboration and productivity by 20%.",
      "Learned and contributed using Vue.js — contributed to top-performing project by 60%.",
      "Trained interns on React and Next.js — improving team efficiency by 70%.",
    ],
  },
  {
    duration: "July 2020 – December 2022",
    role: "Software Developer",
    company: "Illuminz, Mohali",
    description:
      "A creative consultancy providing full-stack mobile/web development services for innovative entrepreneurs.",
    points: [
      "Designed responsive websites using HTML, CSS, and Bootstrap — increasing UX and engagement by 30%.",
      "Used Angular, React, and Next.js to build SPAs — achieving 25% reduction in load time.",
      "Integrated REST APIs with fetch/Axios and used Redux — improving performance by 40%.",
    ],
  },
  {
    duration: "January 2020 – June 2020",
    role: "Software Developer Intern",
    company: "Emilence Pvt. Ltd, Mohali",
    description: "",
    points: [
      "Learned Angular fundamentals and applied them to real projects — contributing 100% to delivery.",
      "Handled specific tasks under senior supervision — met all deadlines successfully.",
      "Wrote unit/end-to-end tests — increasing code reliability by 40%.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-50" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Work Experience
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-all hover:shadow-xl"
            >
              <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                <span className="text-purple-600 mr-2">
                  <FaCalendarAlt />
                </span>{" "}
                {exp.duration}
              </div>
              <h3 className="font-semibold text-lg text-purple-700">
                {exp.role}
              </h3>
              <h4 className="text-gray-700 font-medium mb-2">{exp.company}</h4>
              {exp.description && (
                <p className="text-sm text-gray-600 mb-3">{exp.description}</p>
              )}
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                {exp.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
