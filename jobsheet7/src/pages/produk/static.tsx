import TampilanProduk from "../../views/produk/index";
import { ProductType } from "../../types/Product.type";
import { retrieveProducts } from '../../utils/db/servicefirebase';

const halamanProdukStatic = (props: { products: ProductType[] }) => {
    const { products } = props;
    return (
        <div>
            <h1>Halaman Produk Static</h1>
            <TampilanProduk products={products} />
        </div>
    )
}

export default halamanProdukStatic;

// export async function getStaticProps() {
//     // const data = await retrieveProducts("products");

//     // return {
//     //     props: {
//     //         products: data 
//     //     }
//     // }
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/produk`);
//     const response: { data: ProductType[] } = await res.json();

//     return {
//         props: {
//             products: response.data,
//         },
//         revalidate: 10,
//     }
// }

export async function getStaticProps() {
    // Panggil service Firebase secara langsung, tanpa fetch ke API route internal
    const data = await retrieveProducts("products");

    return {
        props: {
            // Pastikan data yang direturn bisa di-serialize (misal bukan object Date bawaan Firebase)
            products: data || [], 
        },
        revalidate: 10,
    }
}