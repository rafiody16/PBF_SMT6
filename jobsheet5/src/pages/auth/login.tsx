import { NextRequest, NextResponse } from 'next/server';
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "../auth/login.module.css";

const halamanLogin = () => {
    const { push } = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handlerLogin = () => {
        if (username === "admin" && password === "admin") {
            push("/produk");
        }
        else {
            alert("Login Gagal, pastikan username dan password benar!")
        }
    }
    
    return (
        <div className={style.login}>
            <h1 className="font-bold text-2xl">Halaman Login</h1>
            <div className={style.form}>
                <div className={style.formGroup}>
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className={style.input} />
                </div>
                <div className={style.formGroup}>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={style.input} />
                </div>
                <button onClick={handlerLogin} className={style.button}>Login</button> <br />
                <p>Belum punya akun? <Link href="/auth/register">Register</Link></p>
            </div>
        </div>
    )
}

export default halamanLogin;