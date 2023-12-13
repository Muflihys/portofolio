"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Coffe Shop Design UI",
    description: "Design UI for Coffe Shop Application",
    image: "./images/projects/10.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.figma.com/file/OZUwyPw81otXzUwWoTkrG9/Coffe-Shop-App?type=design&node-id=0%3A4&mode=design&t=Of0YyzK40oJf0OP1-1",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Real Estate Application",
    description: "Real Estate Apllication Desain",
    image: "./images/projects/8.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.figma.com/file/x137N0nxf7cTmu4uYWh9VA/Real-Estate-App?type=design&node-id=0%3A1&mode=design&t=nZQbk8fEOkv83QBR-1'",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Travel Application",
    description: "Travel Application For Mobile Apllication",
    image: "./images/projects/9.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Muflihys/Travel_App_Flutter.git",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
