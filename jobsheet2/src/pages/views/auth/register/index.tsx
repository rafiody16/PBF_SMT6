import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./register.module.css";

const halamanRegister = () => {
    const {push} = useRouter();
    const handlerRegister = () => {
        
        push("/views/auth/login")
    }
    return (
        <div className={styles.register}>
            <h1 className="text-3xl font-bold text-blue-600">Halaman Register</h1>
            <button onClick={handlerRegister}>Register</button> <br />
            <h1 style={{ color:"red", border:"1px solid red", borderRadius:"5px", padding:"5px"}}>Sudah punya akun?</h1>
            <Link href="/views/auth/login">Ke halaman login</Link>
        </div>
    )
}

export default halamanRegister;