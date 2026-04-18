import { getFirestore, collection, getDocs, Firestore, doc, getDoc, query, where, addDoc, updateDoc } from "firebase/firestore";
import app  from "./firebase";
import bcrypt from "bcrypt";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
    const snapshot = await getDocs(collection(db, collectionName));
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(db, collectionName, id));
    const data = snapshot.data();
    return data;
}

export async function signUp (
    userData: {
        email: string,
        fullname: string,
        password: string,
        role?: string,
        timestamp?: any
    },
    callback: Function,
) {
    try {
        const q = query(
        collection(db, "users"),
        where("email", "==", userData.email),
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            return callback({
                status: "failed",
                message: "Email already exists.",
            })
        }
        if (userData.password.length < 6) {
            return callback({
                status: "failed",
                message: "Password must be at least 6 characters long.",
            })
        }
        userData.password = await bcrypt.hash(userData.password, 6);
        userData.role = "member";
        userData.timestamp = new Date();
        await addDoc(collection(db, "users"), userData)
            return callback({
                status: "success",
                message: "User registered successfully.",
            });
    } catch (error: any) {
        return callback({
            status: "error",
            message: error.message,
        });
    }
    
    // const data = querySnapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data(),
    // }));
    //     userData.password = await bcrypt.hash(userData.password, 10);
    //     userData.role = "user";
    //     await addDoc(collection(db, "users"), userData)
    //         .then(() => {
    //             callback({
    //                 status: "success",
    //                 message: "User registered successfully.",
    //             });
    //         })
    //         .catch((error) => {
    //             callback({
    //                 status: "error",
    //                 message: error.message,
    //             });
    //         });
}

export async function signIn (
    email: string,
) {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    if (data) {
        return data[0];
    } else {
        return null;
    }
}

export async function signInWithGoogle (userData: any, callback: any) {
    try {
        const q = query(
            collection(db, "users"),
            where("email", "==", userData.email),
        )

        const querySnapshot = await getDocs(q);
        const data: any = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        if (data.length > 0) {
            userData.role = data[0].role;
            await updateDoc(doc(db, "users", data[0].id), userData);
            return callback({
                status: "success",
                message: "User registered and logged with google.",
                data: userData,
            });
        } else {
            userData.role = "member";
            await addDoc(collection(db, "users"), userData);
            return callback({
                status: "success",
                message: "User registered and logged with google.",
                data: userData,
            });
        }
    } catch (error: any) {
        return callback({
            status: "error",
            message: error.message,
        });
    }
}