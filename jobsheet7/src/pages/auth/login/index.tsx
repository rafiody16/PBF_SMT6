import style from '../login.module.scss';
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from "next-auth/react";

const tampilanLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { push, query } = useRouter();
    const callbackUrl: any = query.callbackUrl || "/";
    const [error, setError] = useState("");
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setIsLoading(true);
        setError("");
        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: event.target.email.value,
                password: event.target.password.value,
                callbackUrl
            })

            if (!res?.error) {
                setIsLoading(false);
                push(callbackUrl);
            } else {
                setIsLoading(false);
                setError(res?.error || "Login failed. Please try again.");
            }
        } catch (error) {
            setIsLoading(false);
            setError("An error occurred. Please try again.");
        }
    }
    return (
        <>
            <div className={style.login}>
                    {error && <p className={style.login__error}>{error}</p>}
                <h1 className={style.login__title}>Halaman Login</h1>
                <div className={style.login__form}>
                    <form onSubmit={handleSubmit}>
                        <div className={style.login__form__item}>
                            <label 
                                htmlFor="email" 
                                className={style.login__form__item__label}>
                                    Email
                            </label>
                            <input 
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Masukkan email"
                                className={style.login__form__item__input} 
                            />
                        </div>
                        <div className={style.login__form__item}>
                            <label 
                                htmlFor="Password" 
                                className={style.login__form__item__label}>
                                    Password
                            </label>
                            <input 
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Masukkan password"
                                className={style.login__form__item__input} 
                            />
                        </div>
                        <button type="submit" className={style.login__form__button} disabled={isLoading}>
                            {isLoading ? "Loading..." : "Login"}
                        </button>
                        <br /><br />
                        <button
                            onClick={() => signIn("google", { callbackUrl, redirect: false })}
                            className={style.login__form__button}
                            disabled={isLoading}
                        >
                            {isLoading ? "Loading..." : "Login dengan Google"}
                        </button>
                    </form>
                    <br />
                    <p className={style.login__form__item__text}>
                        Belum punya akun? <Link href="/auth/register">Ke Halaman Register.</Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default tampilanLogin;