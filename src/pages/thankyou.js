import styles from "./thankyou.module.css";

export default function ThankYou() {
  return (
    <div className={styles.thankYouPage}>
      <div className={styles.thankYouMessage}>Thank you for contacting us.</div>
      <div>You will be contacted within x days.</div>
      <div>
        All the orders done on the website are non bidding until agreement on
        the contract.
      </div>
    </div>
  );
}
