import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={styles.footerContent}>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </nav>
        <div className={styles.socialicons}>
          <a href="#" target="_blank">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <p>&copy; 2024 Your Company Name</p>
      </div>
    </div>
  );
}
