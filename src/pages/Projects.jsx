import beadedMuse from "../assets/beaded_muse.png";
import chilledBeer from "../assets/chilled_beer.png";
import recipeVault from "../assets/recipe_vault.png";
import petHaven from "../assets/pet_haven.png";
import myPortfolio from "../assets/my_portfolio.png";

// Helper placeholder image URL or color block (use your own image if you want)
const placeholderImage =
  "https://via.placeholder.com/400x200?text=Project+Screenshot";

const projects = [
  // College Projects (no demoUrl or imageUrl, so will use placeholder image)
  {
    id: 1,
    name: "Beaded Muse",
    framework: "React.js / Next.js",
    description:
      "A creative portfolio template built using modern web technologies.",
    imageUrl: beadedMuse,
    demoUrl: "https://beaded-muse-w32x.vercel.app/",
    repoUrl: "https://github.com/Thakur168/beaded-muse",
  },
  {
    id: 2,
    name: "Chilled Beer Store",
    framework: "PHP",
    description: "An e-commerce frontend for a fictional beverage store.",
    imageUrl: chilledBeer,
    demoUrl: "https://chilledbeer.42web.io/index.php",
    repoUrl: "https://github.com/99arya/chilled-beer-store",
  },
  {
    id: 3,
    name: "The Recipe Vault",
    framework: "React.js",
    description: "A user-friendly app to browse and save recipes.",
    imageUrl: recipeVault,
    demoUrl: "https://recipe-app-puce-seven.vercel.app/",
    repoUrl: "https://github.com/Thakur168/recipe-app",
  },

  {
    id: 4,
    name: "My Portfolio",
    framework: "React / Tailwind CSS",
    description:
      "Personal portfolio website showcasing projects and skills with clean UI.",
    imageUrl: myPortfolio,
    demoUrl: "https://yourportfolio.com",
    repoUrl: "https://github.com/yourusername/portfolio",
  },
  {
    id: 5,
    name: "Pet Haven",
    framework: "WordPress",
    description:
      "An ecommerce website where users can purchase the items for their pets",
    imageUrl: petHaven,
    demoUrl: "https://kinn-demo.com",
    repoUrl: "https://github.com/yourusername/kinn",
  },
  {
    id: 6,
    name: "Kinn",
    framework: "Next.js / React",
    description:
      "A vet-patient appointment app with Google Calendar integration and secure authentication.",
    imageUrl: "/images/kinn-home.png",
    // demoUrl: "https://kinn-demo.com",
    // repoUrl: "https://github.com/yourusername/kinn",
  },
  {
    id: 7,
    name: "TPine Truck Rental",
    framework: "Angular",
    description:
      "Truck rental service app designed with Angular, providing easy booking and management.",
    imageUrl: "/images/tpine-home.png",
    demoUrl: "https://tpine-demo.com",
    repoUrl: "https://github.com/yourusername/tpine-truck-rental",
  },
  {
    id: 8,
    name: "Delivery Papa",
    framework: "Angular",
    description: "It is a food delivery",
    imageUrl: "/images/tpine-home.png",
    // demoUrl: "https://tpine-demo.com",
    // repoUrl: "https://github.com/yourusername/tpine-truck-rental",
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-10 text-center">My Projects</h2>
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
          }) => (
            <div
              key={id}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white transform hover:-translate-y-1 flex flex-col"
            >
              <div className="overflow-hidden">
                <img
                  src={imageUrl}
                  alt={`Screenshot of ${name} home page`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-1">{name}</h3>
                <p className="text-indigo-600 font-medium mb-2">{framework}</p>
                <p className="text-gray-700 mb-4 text-sm flex-grow">
                  {description}
                </p>
                <div className="flex space-x-4 mt-auto">
                  {demoUrl && (
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                    >
                      Live Demo
                    </a>
                  )}
                  {repoUrl && (
                    <a
                      href={repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
