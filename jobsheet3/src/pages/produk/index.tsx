import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TampilanProduk from "../views/produk";
import useSWR from "swr";
import fetcher from "../utils/swr/fetcher";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

const kategori = () => {

    const [products, setProducts] = useState([]);

    const { data, error, isLoading } = useSWR("/api/produk", fetcher);

    const fetchData = async () => {
        try {
            const response = await fetch("/api/produk");
            const responseData = await response.json();
            setProducts(responseData.data);
        }
        catch (error) {
            console.error("Error fetching produk:", error);
        }
    }

    return (
        <div>
            {/* <TampilanProduk products={products} /> */}
            <TampilanProduk products={isLoading ? [] : data.data} />
            <br /><br />
            <button onClick={fetchData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Refresh Products</button>
        </div>
    )
}

export default kategori;