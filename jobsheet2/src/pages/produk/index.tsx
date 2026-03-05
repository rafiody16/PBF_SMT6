import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Produk = () => {

    const [isLogin, setIsLogin] = useState(false);
    const { push } = useRouter();

    useEffect(() => {
        if (!isLogin) {
            push("/auth/login")
        }
    }, [])
    return (
        <div>Produk user page</div>
    )
}

export default Produk;