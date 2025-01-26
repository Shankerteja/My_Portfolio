import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "Travel Story App",
    description: "A full-stack travel story platform where users can create their memories",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    image: "https://raw.githubusercontent.com/Shankerteja/Travel-Story-Frontend/refs/heads/main/public/assets/preview.png",
    github: "https://github.com/Shankerteja/Travel-Story-Frontend.git",
    demo: "https://travel-story-frontend-phi.vercel.app/"
  },
  {
    title: "Multi Vendor Application",
    description: "A full-stack vendor platform where Admin can create services",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    image: "https://i.ibb.co/Y3PLWGz/Screenshot-2025-01-26-134923.png",
    github: "https://github.com/Shankerteja/BiteBuddy_Frontend.git",
    demo: "https://bite-buddy-frontend-five.vercel.app/"
  },
  {
    title: "Ecommerce Website",
    description: "Created Ecommerce Website using REST APIs",
    tags: ["React.js", "Styled Components", "javascript"],
    category: "Frontend",
    image: "https://i.ibb.co/2h8cLyR/Screenshot-2025-01-26-182654.png",
    github: "https://github.com/Shankerteja/Ecommerce-website.git",
    demo: "https://shankertejpro32.ccbp.tech/"
  },
  {
    title: "NxtWatch",
    description: "Created YouTube like Clone using Rest APIs",
    tags: ["React.js", "javascript", "Styled Components"],
    category: "Frontend",
    image: "https://i.ibb.co/8ch5Ydv/Screenshot-2025-01-26-182044.png",
    github: "https://github.com/Shankerteja/NxtWatch.git",
    demo: "https://shankertejpro30.ccbp.tech/"
  },
  {
    title: "Jobby App",
    description: "Created A Jobs Provided platform where users can view jobs in various categories.",
    tags: ["React", "API Integration", "Tailwind CSS"],
    category: "Frontend",
    image: "https://assets.ccbp.in/frontend/content/react-js/jobby-app-home-lg-output.png",
    github: "https://github.com/Shankerteja/jobby-app.git",
    demo: "https://shankertejpro31.ccbp.tech/"
  },
  {
    title: "API Gateway Service",
    description: "Created APIs for the Application",
    tags: ["Node.js", "Express", "MongoDB"],
    category: "Backend",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Shankerteja/BiteBuddy_Backend.git",
    demo: "https://bitebuddy-backend-b2tg.onrender.com"
  },
 
];

const categories = ["All", "Frontend", "Backend", "Full Stack"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = projects.filter(project => 
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="cyan-gradient">My Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? "bg-cyan-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-cyan-100 dark:hover:bg-cyan-900/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-end space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
                    >
                      <FiGithub className="w-6 h-6" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400"
                    >
                      <FiExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;