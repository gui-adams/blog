import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <div className={styles.upper}></div>
        <div className={styles.lower}></div>
      </div>
    </div>
  );
};

export default Loader;
