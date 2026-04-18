import style from '../register.module.scss';
import Link from "next/link";
import { useState } from 'react';
import { useRouter } from 'next/router';

const tampilanRegister = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { push } = useRouter();
    const [error, setError] = useState("");
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError("");
        const form = event.currentTarget;
        const formData = new FormData(form);
        const email = formData.get("email") as string;
        const fullname = formData.get("Fullname") as string;
        const password = formData.get("Password") as string;
        const response = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, fullname, password}),
        })
        const data = await response.json();
        if (response.status === 200) {
            form.reset();
            setIsLoading(false);
            push("/auth/login");
        } else {
            setIsLoading(false);
            setError(
                response.status === 400 ? data.name : "An error occurred. Please try again."
            )
        }
    }
    return (
        <div className={style.register}>
                {error && <p className={style.register__error}>{error}</p>}
            <h1 className={style.register__title}>Halaman Register</h1>
            <div className={style.register__form}>
                <form onSubmit={handleSubmit}>
                    <div className={style.register__form__item}>
                        <label 
                            htmlFor="email" 
                            className={style.register__form__item__label}>
                                Email
                        </label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Masukkan email"
                            className={style.register__form__item__input} 
                        />
                    </div>
                    <div className={style.register__form__item}>
                        <label 
                            htmlFor="Fullname"
                            className={style.register__form__item__label}>
                                Fullname
                        </label>
                        <input 
                            type="text"
                            id="Fullname"
                            name="Fullname"
                            placeholder="Masukkan nama lengkap"
                            className={style.register__form__item__input} 
                        />
                    </div>
                    <div className={style.register__form__item}>
                        <label 
                            htmlFor="Password" 
                            className={style.register__form__item__label}>
                                Password
                        </label>
                        <input 
                            type="password"
                            id="Password"
                            name="Password"
                            placeholder="Masukkan password"
                            className={style.register__form__item__input} 
                        />
                    </div>
                    <button type="submit" className={style.register__form__button} disabled={isLoading}>
                        {isLoading ? "Loading..." : "Register"}
                    </button>
                </form>
                <br />
                <p className={style.register__form__item__text}>
                    Sudah punya akun? <Link href="/auth/login">Ke Halaman Login.</Link>
                </p>
            </div>
        </div>
    );
}

export default tampilanRegister;