import ReactDOM from "react-dom/client";
import styles from "./index.module.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <div className={styles.global}>
    <App />
  </div>
);
