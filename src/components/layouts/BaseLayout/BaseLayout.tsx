import { Aside } from "../../Aside";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";

import styles from "./BaseLayout.module.css";

export const BaseLayout = () => {
  return (
    <div className={styles.viewport}>
      <Aside />
      <div className={styles.content}>
        <ProjectsPage />
      </div>
    </div>
  );
};
