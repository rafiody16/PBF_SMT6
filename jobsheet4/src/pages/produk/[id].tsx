import { useRouter } from "next/router";
import useSWR from "swr";
import fetcher from "../../utils/swr/fetcher";
import DetailProduk from "@/views/DetailProduk";
import { ProductType } from "../../types/Product.type";

const HalamanProduk = ({product}:{ product: ProductType }) => {
    // {product}:{ product: ProductType }
    // const Router = useRouter();
    // console.log(Router);
    // const {query} = useRouter();
    // const {data, error, isLoading} = useSWR(`/api/produk/${query.id}`, fetcher);
    // return (
    //     <div>
    //         <DetailProduk products={isLoading ? [] : data.data}></DetailProduk>
    //     </div>
    // )

    //SSR && SSG
    return (
        <div>
            <DetailProduk products={product} />
        </div>
    )
}

export default HalamanProduk;

// Untuk SSR
// export async function getServerSideProps({ params }: { params: { id: string }}) {
//     const res = await fetch(`http://localhost:3000/api/produk/${params?.id}`);
//     const response = await res.json();
//     return {
//         props: {
//             product: response.data,
//         },
//     }
// }

// Untuk SSG
export async function getStaticPaths() {
    const res = await fetch(`http://localhost:3000/api/produk`);
    const response = await res.json();

    const paths = response.data.map((product: ProductType) => ({
        params: { id: product.id }
    }))
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }: { params: { id: string }}) {
    const res = await fetch(`http://localhost:3000/api/produk/${params?.id}`);
    const response: { data: ProductType[] } = await res.json();
    return {
        props: {
            product: response.data,
        },
    }
}