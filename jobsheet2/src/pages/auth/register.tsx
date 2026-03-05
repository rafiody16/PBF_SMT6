import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent } from "react";
import { useEffect, useState } from "react";

const halamanRegister = () => {
    const {push} = useRouter();
    const handlerRegister = () => {
        
        push("/auth/login")
    }
    return (
        <div>
            <h1>Halaman Register</h1>
            <div>
                <label>Username: </label>
                <input type="text" />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" />
            </div>
            <button onClick={handlerRegister}>Register</button> <br />
        </div>
    )
}

export default halamanRegister;