import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import VintzenPreview from "../../assets/vintzen_preview.png";
import useBreakpoint from "../misc/useBreakpoint";

const Projects = () => {
    const isLg = useBreakpoint(1024); // Détecte si l'écran est "lg" (≥1024px)

    const projects = [
        { title: "Vintzen", technologies: ["React", "Motion Framer", "Figma"], preview: VintzenPreview },
        { title: "Project 2", technologies: ["React", "Tailwind", "Design"], preview: VintzenPreview },
        { title: "Project 3", technologies: ["Vue", "Animation", "CSS"], preview: VintzenPreview },
        { title: "Project 4", technologies: ["Angular", "Testing", "API"], preview: VintzenPreview },
    ];

    // Étendre les projets pour simuler un défilement infini
    const extendedProjects = [...projects, ...projects];

    // Durée d'animation en fonction du breakpoint
    const duration = isLg ? 30 : 10;

    return (
        <div id="projects" className="mt-10 overflow-hidden">
            <h2 className="poppins-semibold  text-white text-xl  text-center">
                Mes Projets <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-2xl">Récents.</span>
            </h2>

            <motion.div
                className="mt-5 flex space-x-5"
                style={{ display: "flex", gap: "20px" }}
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: duration, // Utilisation de la durée adaptée
                }}
            >
                {extendedProjects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        technologies={project.technologies}
                        preview={project.preview}
                        alt={`Image de prévisualisation de ${project.title}`}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default Projects;