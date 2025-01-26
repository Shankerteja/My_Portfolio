import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiGithub, FiDownload ,FiLinkedin,FiTwitter} from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h2 className="text-xl sm:text-2xl text-cyan-500 dark:text-cyan-400 font-medium">
              Hello, I'm
            </h2>
            <h1 className="text-4xl sm:text-6xl font-bold">
              <span className="cyan-gradient">Shankerteja Baki</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto sm:mx-0">
              MERN Stack Developer crafting beautiful and functional web experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full transition-colors cursor-pointer flex items-center space-x-2"
            >
              <span>View Projects</span>
            </Link>
            <a
              href="/shankerteja_resume.pdf" download='resume'
              className="px-6 py-3 border-2 border-cyan-600 dark:border-cyan-400 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-gray-900 rounded-full transition-colors flex items-center space-x-2"
            >
              <FiDownload className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex items-center justify-center sm:justify-start space-x-6"
          >
            <a
              href="https://github.com/Shankerteja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
            >
              <FiGithub className="w-6 h-6" />
            </a>
               <a
                          href="https://www.linkedin.com/in/shankerteja-baki/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                        >
                          <FiLinkedin className="w-6 h-6" />
                        </a>
                           <a
                                      href="https://x.com/TejaVangur43105"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                                    >
                                      <FiTwitter className="w-6 h-6" />
                                    </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-cyan-400 flex justify-center items-start p-2 cursor-pointer">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-cyan-400 mb-1"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;