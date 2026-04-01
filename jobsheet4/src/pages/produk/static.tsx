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

export async function getStaticProps() {
    const data = await retrieveProducts("products");

    return {
        props: {
            products: data 
        }
    }
}