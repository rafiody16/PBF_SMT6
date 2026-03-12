import styles from "@/styles/404.module.scss";

const Custom404 = () => {
    return (
        <div>
            <head>
                <title>404 - Halaman Tidak Ditemukan</title>
            </head>
            <div className={styles.error}>
                <img src="/page-not-found.png" alt="404" className={ styles.error__image }/>
                <h1 className="text-4xl font-bold text-red-600">404 - Halaman Tidak Ditemukan !</h1>
                <p>Maaf, halaman yang Anda cari tidak ditemukan.</p>
                <a href="/" className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Kembali ke Beranda
                </a>
            </div>
        </div>
    )
}

export default Custom404;