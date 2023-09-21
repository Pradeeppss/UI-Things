import { Link, useResolvedPath, useMatch } from "react-router-dom";
import styles from "./navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <CustomLink to={"/"} name={"Home"} />
      <ul>
        <li>
          <CustomLink to={"/buttons"} name={"Buttons"} />
        </li>
        <li>
          <CustomLink to={"/cards"} name={"Cards"} />
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, name }: { to: string; name: string }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <div
      className={
        isActive
          ? `${styles.linkContainer} ${styles.active}`
          : `${styles.linkContainer}`
      }
    >
      <Link to={to}>{name}</Link>
    </div>
  );
}
