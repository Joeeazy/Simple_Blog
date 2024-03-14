import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <div>
        <input type="text" className={styles.search} placeholder="Search" />
      </div>
      <div>
        <h1 className={styles.h1}>My First PostMortem</h1>
      </div>
      <div>
        <button className={styles.signinbtn}>Sign In</button>
        <button className={styles.signupbtn}>Sign Up</button>
      </div>
      <div className={styles.lowerdiv}>
        <h1>Blog</h1> By Joe Mwangi
      </div>
    </div>
  );
}
