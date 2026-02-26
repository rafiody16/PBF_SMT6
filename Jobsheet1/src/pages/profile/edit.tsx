const EditProfile = () => {
    return (
        <div>
            <h1>Edit Profile</h1>
            <br />
            <form action="">
                <label htmlFor="nama">Nama: </label>
                <input type="text" id="nama" name="nama" defaultValue="Rafi Ody Prasetyo" />
                <br />
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" defaultValue="rafiodyprasetyo@gmail" />
                <br />
                <label htmlFor="alamat">Alamat: </label>
                <input type="text" id="alamat" name="alamat" defaultValue="Malang" />
                <br />
                <button type="submit">Simpan</button>
            </form>
        </div>
    )
}

export default EditProfile;