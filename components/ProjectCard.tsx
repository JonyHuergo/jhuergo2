import Link from "next/link";
import styles from "../styles/ProjectCard.module.css"

const ProjectCard = ({name, img, pageLink, technologies}) => {
    return (
        <article className={styles.projectCard}>
            <div className={styles.projectCardImgContainer}>
                <img className={styles.projectCardImg} src={img} alt="" />
            </div>
            <div className={styles.projectCardInfoContainer}>
                <Link href={pageLink} rel="noopener noreferrer" target="_blank">
                    <h3 className={styles.projectCardTitle}>{name}</h3>
                </Link>
                <p><b>Tecnologías:&nbsp;</b>{technologies.join(", ")}</p>
            </div>
        </article>
    );
}
 
export default ProjectCard;