import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "@/pages/produk/produk.module.scss";
// const Produk = () => {

//     const [isLogin, setIsLogin] = useState(false);
//     const { push } = useRouter();

//     useEffect(() => {
//         if (!isLogin) {
//             push("/auth/login")
//         }
//     }, [])
//     return (
//         <div>Produk user page</div>
//     )
// }

// export default Produk;

type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

const TampilanProduk = ({ products } : { products: ProductType[] }) => {
    return (
        <div className={style.produk}>
            <h1 className={style.produk__title}>Daftar Produk</h1>
            <div className={style.produk__content}>
                {products.length > 0 ? (
                    <>
                        {products.map((products: ProductType) => (
                            <div key={products.id} className={style.produk__content__item}>
                                <div className={style.produk__content__item__image}>
                                    <img src={products.image} alt={products.name} width={200} />
                                </div>
                                <h4 className={style.produk__content__item__name}>
                                    {products.name}
                                </h4>
                                <p className={style.produk__content__item__category}>
                                    Kategori: {products.category}
                                </p>
                                <p className={style.produk__content__item__price}>
                                    Rp. {products.price}
                                </p>
                            </div>
                        ))}
                    </>
                ) : (
                <div className={style.produk__content__skeleton}>
                    <div className={style.produk__content__skeleton__image}></div>
                    <div className={style.produk__content__skeleton__name}></div>
                    <div className={style.produk__content__skeleton__category}></div>
                    <div className={style.produk__content__skeleton__price}></div>
                </div>
                )}
            </div>
        </div>
    )
}

export default TampilanProduk;