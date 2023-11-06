import axios from "axios";
import RepoCard from "../../components/RepoCard";
import styles from "./Projects.module.scss";
import { useEffect, useState } from "react";
import { Repo } from "../../types/repository";

export default function Projects() {
  const URL = "https://api.github.com/users/guipaex/repos";
  const FILTER = "portfolio";

  const [projects, setProjects] = useState<Repo[]>([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const projects = response.data;
        const selectedProjects = projects.filter((repo: Repo) => repo.topics?.includes(FILTER));
        setProjects(selectedProjects.reverse());
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className={styles.container} id='projects'>
      <h2 className={styles.title}>
        Selected <span className={styles.title__highlight}>Works</span>
        <span className={styles.title__dot}>.</span>
      </h2>
      <div className={styles.projectsGallery}>
        {projects.map((project) => (
          <RepoCard
            key={project.id}
            name={project.name}
            repoLink={project.html_url}
            desc={project.description}
            demoLink={project.homepage}
            langsLink={project.languages_url}
            tags={project.topics}
          />
        ))}
      </div>
    </section>
  );
}
