import beadedMuse from "../assets/beaded_muse.png";
import chilledBeer from "../assets/chilled_beer.png";
import recipeVault from "../assets/recipe_vault.png";
import petHaven from "../assets/pet_haven.png";
import myPortfolio from "../assets/my_portfolio.png";
import nextOfKin from "../assets/next_of_kinn.png";
import deliveryPapa from "../assets/delivery_papa.png";
import tPine from "../assets/t-pine.png";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Beaded Muse",
    framework: "Next.js / Bootstrap / CSS",
    description:
      "Developed the frontend for an e-commerce website focused on handcrafted beaded dresses. Implemented secure Stripe payment integration and managed user form handling using React Hook Form for a seamless checkout experience.",
    imageUrl: beadedMuse,
    demoUrl: "https://beaded-muse-w32x.vercel.app/",
    repoUrl: "https://github.com/Thakur168/beaded-muse",
  },
  {
    id: 2,
    name: "Chilled Beer Store",
    framework: "PHP / MySQL / Bootstrap / CSS",
    description:
      "Developed a full-stack e-commerce platform using PHP and MySQL for managing beers, wines, and other beverages. Built a robust database initialization system with schema creation, table setup, and sample data seeding. Integrated user authentication, order management, and dynamic product listings. Styled the frontend using Bootstrap and custom CSS.",
    imageUrl: chilledBeer,
    demoUrl: "https://chilledbeer.42web.io",
    repoUrl: "https://github.com/99arya/chilled-beer-store",
  },
  {
    id: 3,
    name: "The Recipe Vault",
    framework: "React.js / Bootstrap / CSS",
    description:
      "A recipe management web application built with React, allowing users to browse, search, and filter recipes by category or name. Logged-in users can create and submit their own recipes, which are publicly visible. The app includes user authentication (sign-up/login) and showcases dynamic rendering using dummy data for a seamless browsing experience.",
    imageUrl: recipeVault,
    demoUrl: "https://recipe-app-puce-seven.vercel.app/",
    repoUrl: "https://github.com/Thakur168/recipe-app",
  },
  {
    id: 4,
    name: "My Portfolio",
    framework: "React.js / Tailwind CSS",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase development projects, technical skills, and professional experience. The site features smooth scrolling, responsive design, and a modular structure for easy updates and scalability.",
    imageUrl: myPortfolio,
    demoUrl: "https://my-portfolio-blush-ten-43.vercel.app/",
    repoUrl: "https://github.com/Thakur168/my-portfolio",
  },
  {
    id: 5,
    name: "Pet Haven",
    framework: "WordPress / Custom CSS",
    description:
      "An eCommerce website built using WordPress for purchasing pet-related items. Started with a ready-made template and customized the design using custom CSS. Integrated popular plugins such as Elementor, SEO Yoast, and WPForms Lite. Also developed custom plugins including a Scroll-to-Top Button, Pet Tip Shortcode, and a Custom Welcome Message to enhance functionality and user engagement.",
    imageUrl: petHaven,
    demoUrl: "https://pethaven.gamer.gd",
    // repoUrl: "https://github.com/yourusername/kinn",
  },
  {
    id: 6,
    name: "Kinn",
    framework: "Next.js / React",
    description:
      "Frontend development of a vet-patient appointment platform built with Next.js, featuring Google Calendar integration for seamless appointment management. Doctors can create and manage clinics as single practitioners or groups, add multiple patients, and access real-time diagnostic updates and pet history. The platform also includes a blog submission and approval workflow, enabling doctors to share articles after admin approval. The pet owners can view approved blogs via a companion mobile app developed by a separate team.",
    imageUrl: nextOfKin,
    demoUrl: "https://app.nextofkinn.com/login",
  },
  {
    id: 7,
    name: "TPine Truck Rental",
    framework: "Angular",
    description:
      "A comprehensive truck and trailer rental platform serving the USA and Canada, enabling vendors to bid on vehicles, manage bookings, and arrange delivery to their preferred locations through a seamless Angular-based interface.",
    imageUrl: tPine,
    demoUrl: "https://tpinerental.com/",
  },
  {
    id: 8,
    name: "Delivery Papa",
    framework: "Angular",
    description:
      "A real-time food delivery vendor dashboard and admin panel built with Angular and Socket.io. Vendors can manage customer orders across various modes—Delivery, Takeout, Dine-In, and Curbside. Incoming orders are received instantly via popups, and vendors can update statuses such as In-Process, On Hold, and Delivered. Admin panel allows the Delivery Papa team to manage vendors, monitor order flow, assign delivery personnel, and configure platform settings. The customer-facing mobile app is used for placing orders, which are fulfilled by in-house delivery drivers.",
    imageUrl: deliveryPapa,
    demoUrl: "https://vendor.deliverypapa.com",
  },
];

export default function Projects() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-6 py-14 bg-white">
      <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">
        My Projects
      </h2>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {projects.map(
          ({
            id,
            name,
            framework,
            description,
            imageUrl,
            demoUrl,
            repoUrl,
          }) => {
            const shortDescription =
              description.length > 200
                ? description.slice(0, 200) + "..."
                : description;

            return (
              <div
                key={id}
                className="border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 bg-white transform hover:-translate-y-1 flex flex-col"
              >
                <div className="overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={name}
                    className="h-64 w-full rounded-t-xl"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-1 text-slate-800">
                    {name}
                  </h3>
                  <p className="text-purple-600 font-medium mb-2">
                    {framework}
                  </p>
                  <p className="text-slate-600 mb-4 text-sm flex-grow">
                    {isExpanded ? description : shortDescription}
                    {description.length > 200 && (
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-purple-600 font-semibold ml-1 underline text-xs"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </p>
                  <div className="flex space-x-3 mt-auto">
                    {demoUrl && (
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition"
                      >
                        Live Demo
                      </a>
                    )}
                    {repoUrl && (
                      <a
                        href={repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-purple-600 text-purple-600 text-sm rounded-md hover:bg-purple-600 hover:text-white transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
