const Profile = () => {
    return (
        <div>
            <h1>Profile Page</h1>
            <br />
            <a href="/profile/edit">Edit Profile</a>
            <br />
            <table>
                <tbody>
                    <tr>
                        <td>Nama: </td>
                        <td>Rafi Ody Prasetyo</td>
                    </tr>
                    <tr>
                        <td>Email: </td>
                        <td>rafiodyprasetyo@gmail.com</td>
                    </tr>
                    <tr>
                        <td>Alamat: </td>
                        <td>Malang</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Profile;