import { useSession } from "next-auth/react";

const HalamanProfile = () => {
    const { data } = useSession();
    return (
        <div>
            <h1>Halaman Profile</h1>
            <p>Nama: {data?.user?.fullname}</p>
        </div>
    )
}

export default HalamanProfile;