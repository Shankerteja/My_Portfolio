import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="cyan-gradient">About Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                I'm a passionate Full Stack Developer with a strong foundation in both front-end and back-end development. 
                My journey in web development started with a curiosity about how things work on the internet, 
                and it has evolved into a professional career building robust web applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                With expertise in modern web technologies and a keen eye for design, 
                I create seamless user experiences that combine functionality with aesthetic appeal.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-2 cyan-gradient">Key Skills</h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Frontend Development (React, TailwindCSS)</li>
                  <li>Backend Development (Node.js, Express)</li>
                  <li>Database Management (MongoDB, PostgreSQL)</li>
                  <li>RESTful API Design</li>
                </ul>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full h-80 bg-cyan-100 dark:bg-cyan-900/20 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://i.postimg.cc/fk44wXkH/my-image.jpg"
                  alt="Profile"
                  className="w-full h-full object-fit"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;