import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-600" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-cyan-500" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-700" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" /> },
  { name: 'GitHub', icon: <FaGithub className="text-black" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
];

export default skills;
