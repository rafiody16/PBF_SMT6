import styles from './Navbar.module.scss';
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
    const { data } = useSession();

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__brand}>
                My App
            </div>

            <div className={styles.navbar__right}>
                { data ? (
                    <>
                        <div className={styles.navbar__user}>
                            Hello, {data.user?.fullname}
                            {data.user.image && (
                                <img src={data.user.image} alt={data.user.fullname} className={styles.navbar__user__image} />
                            )}
                        </div>
                        <button
                        className={`${styles.navbar__button} ${styles["navbar__button--danger"]}`}
                        onClick={() => signOut({ callbackUrl: "/auth/login" })}>Sign Out</button>
                    </>
                ) : (
                    <button
                    className={`${styles.navbar__button} ${styles["navbar__button--primary"]}`}
                    onClick={() => signIn()}>
                        Sign In
                    </button>
                )}
            </div>
            <div className="big">
                <h1>Navbar Component</h1>
            </div>
        </div>
    )
}

export default Navbar;