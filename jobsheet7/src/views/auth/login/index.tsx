import Link from "next/link";
import { useRouter } from "next/router";
// import styles from "./login.module.css";
import styles from "./login.module.scss";
import { FormEvent } from "react";
import { useEffect, useState } from "react";

const halamanLogin = () => {
    const {push} = useRouter();
    const handlerLogin = () => {
        
        push("/produk")
    }
    return (
        <div className={styles.login}>
            <h1 className="text-3xl font-bold text-blue-600">Halaman Login</h1>
            {/* <div>
                <label>Email: </label>
                <input type="email" />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" />
            </div> */}
            <button onClick={handlerLogin}>Login</button> <br />
            <h1 style={{ color:"red", border:"1px solid red", borderRadius:"5px", padding:"5px"}}>Belum punya akun?</h1>
            {/* <button onClick={() => push('/produk')}>Login</button> <br />
            <button onClick={() => handlerLogin()}>Login</button> <br /> */}
            <Link href="/auth/register">Ke halaman Registrasi</Link>
        </div>
    )
}

export default halamanLogin;