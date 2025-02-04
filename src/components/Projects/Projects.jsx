import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ProjectCard from "./ProjectCard";
import VintzenPreview from "../../assets/vintzen_preview.png";
import useBreakpoint from "../misc/useBreakpoint";

const Projects = () => {
    const isLg = useBreakpoint(1024);
    const controls = useAnimation();

    const projects = [
        { title: "Vintzen", technologies: ["React", "Motion Framer", "Figma"], preview: VintzenPreview },
        { title: "Project 2", technologies: ["React", "Tailwind", "Design"], preview: VintzenPreview },
        { title: "Project 3", technologies: ["Vue", "Animation", "CSS"], preview: VintzenPreview },
        { title: "Project 4", technologies: ["Angular", "Testing", "API"], preview: VintzenPreview },
    ];

    const extendedProjects = [...projects, ...projects];
    const duration = isLg ? 30 : 10;

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    useEffect(() => {
        controls.start({
            x: "-100%",
            transition: {
                repeat: Infinity,
                ease: "linear",
                duration: duration,
            }
        });
    }, [controls, duration]);

    return (
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            transition={{ delay: 0.25, duration: 1 }} 
            viewport={{ once: true }}
            id="projects" 
            className="mt-24 overflow-hidden"
        >
            <h2 className="poppins-semibold text-white text-xl text-center">
                Mes Projets <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-2xl">Récents.</span>
            </h2>

            <motion.div
                className="mt-5 flex space-x-5"
                style={{ display: "flex", gap: "20px" }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                animate={controls}
            >
                {extendedProjects.map((project, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ProjectCard
                            title={project.title}
                            technologies={project.technologies}
                            preview={project.preview}
                            alt={`Image de prévisualisation de ${project.title}`}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Projects;
