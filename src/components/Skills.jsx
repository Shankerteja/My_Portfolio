import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiRedux,
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: FaReact, level: 90 },
  { name: 'Node.js', icon: FaNodeJs, level: 85 },
  { name: 'JavaScript', icon: SiJavascript, level: 90 },
  { name: 'HTML5', icon: FaHtml5, level: 95 },
  { name: 'CSS3', icon: FaCss3Alt, level: 90 },
  { name: 'TailwindCSS', icon: SiTailwindcss, level: 85 },
  { name: 'MongoDB', icon: SiMongodb, level: 80 },
  { name: 'PostgreSQL', icon: SiPostgresql, level: 75 },
  { name: 'Express', icon: SiExpress, level: 85 },
  { name: 'Redux', icon: SiRedux, level: 80 },
  { name: 'Git', icon: FaGitAlt, level: 85 },
  { name: 'SQL', icon: FaDatabase, level: 80 },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className="cyan-gradient">Technical Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <skill.icon className="w-12 h-12 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-cyan-600 dark:bg-cyan-400 h-2.5 rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  {skill.level}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;