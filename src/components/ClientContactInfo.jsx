import { useState } from "react";
import styles from "./ClientContactInfo.module.css";
import ThankYouMsg from "./ThankYouMsg"

export default function ClientContactInfo() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [submited, setSubmited] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    e.preventDefault();
    setSubmited(true);

  };

  return (
    <>
    {submited ? 
  <ThankYouMsg/>  :
      <div>
      <p className={styles.title}>Client Contact Info</p>
      <form onSubmit={handleSubmit} className={styles.clientContactInfoForm}>
        <label className={styles.label}>Name</label>
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={handleName}
        />

        <label className={styles.label}>Email Address</label>
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={handleEmail}
        />

        <input className={styles.btnSubmit} type="submit" value="Submit" />
      </form>
    </div> 
  }
  </>
  );
}
