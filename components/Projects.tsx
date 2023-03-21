import ProjectCard from "./ProjectCard";
import styles from "../styles/Projects.module.css"

const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <h2>PROYECTOS</h2>
            <div className={styles.projectsContainer}>
                <ProjectCard name={"History-Blog"} img={"historyBlog.png"} pageLink={"https://history-blog-gamma.vercel.app/"} technologies={["HTML", "CSS", "JAVASCRIPT", "REACT", "NEXT", "GRAPHQL", "TAILWIND"]}/>
                <ProjectCard name={"Comercio Conectado"} img={"comercioConectado.png"} pageLink={"https://comercio-conectado.vercel.app/"} technologies={["HTML", "CSS", "JAVASCRIPT", "REACT", "NEXT", "GRAPHQL"]}/>
            </div>
        </section>
    );
}
 
export default Projects;