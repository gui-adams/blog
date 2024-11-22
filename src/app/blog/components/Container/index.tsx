// src/app/blog/componets/index.tsx
import { ReactNode } from "react";
import styles from "./Container.module.scss";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
}
