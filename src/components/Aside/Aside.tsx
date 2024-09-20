import { Logo } from "../shared/Logo";

import styles from "./Aside.module.css";

export const Aside = () => {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <div className={styles.nav}>links</div>
    </aside>
  );
};
