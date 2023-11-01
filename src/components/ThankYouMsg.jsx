import styles from "./ThankYouMsg.module.css"

export default function ThankYouMsg() {

return (
    <div className={styles.thankyoucontainer}>
        <p className={styles.thankyoumessage}>
            Vielen Dank, dass Sie sich für uns entschieden haben
        </p>
    </div>
)
}