import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <>
      <div className={styles["main-header"]}>
        <div className={styles["one-header"]}>
          <img
            className={styles["one-header-img-smartbasket"]}
            src="https://cdn-icons-png.flaticon.com/512/6783/6783480.png"
            alt=""
          />
          <span className={styles["one-header-smartbasket"]}>SmartBasket</span>
        </div>
        <div className={styles["two-header"]}>
          <img
            className={styles["two-header-img"]}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTatOVRDENelIbuzdGYva7nrItNTvPd_pdamQ&s"
            alt=""
          />
        </div>
      </div>
      
    </>
  );
};

export default LoginPage;
