import Link from "next/link";

import Logo from "./logo";

import styles from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/search">Search movie</Link>
          </li>
          <li>
            <Link href="/addMovie">Add movie</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;