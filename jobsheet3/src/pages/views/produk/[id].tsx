import { useRouter } from "next/router";

const HalamanProduk = () => {
    const { query } = useRouter();

    return (
        <div className="min-h-screen bg-gray-50 font-sans antialiased">
        
            <header className="bg-indigo-700 py-16 px-4 shadow-md">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
                        Detail Produk
                    </h1>
                    <p className="mt-3 text-indigo-100 text-lg font-medium opacity-90">
                        Informasi lengkap mengenai item yang Anda pilih
                    </p>
                </div>
            </header>

            <main className="max-w-3xl mx-auto -mt-10 px-4 pb-12">
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <div className="flex flex-col items-center py-6">
                        <span className="px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest">
                            Product ID Found
                        </span>
                        
                        <h2 className="mt-6 text-5xl font-mono font-bold text-gray-900 border-b-4 border-indigo-500 pb-2">
                            #{query.id || "000"}
                        </h2>
                    </div>
                </div>

            </main>

        </div>
    );
}

export default HalamanProduk;