import styles from "@/styles/Home.module.css";
import { getPageIds } from "@/utils/mock";
import Link from "next/link";
import React from "react";

export default function EditorPage() {
  const pages = getPageIds();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Welcome to Our Website!</h1>
        <p className={styles.description}>
          We are glad to have you here. Enjoy exploring our content.
          <br />
          Learn more about Brizy builder and its powerful features:
        </p>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href={`/admin/page/${pages.HomePage}`}>Page Builder</Link>
            </li>
            <li>
              <Link href="/admin/popup">Popup Builder</Link>
            </li>
            <li>
              <Link href="/admin/story">Story Builder</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
