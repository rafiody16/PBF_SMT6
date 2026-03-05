import { useRouter } from "next/router";

const halamanCategory = () => {
    const { query } = useRouter();

    return (
        <div>
            <h1>Halaman Category</h1>
            {query.slug && Array.isArray(query.slug) ? (
                query.slug.map((slug, index) => (
                    <ul>
                        <li> {index + 1}. {slug}</li>
                    </ul>
                ))
            ) : (
                <p>No slug found</p>
            )}
        </div>
    )
}

export default halamanCategory;