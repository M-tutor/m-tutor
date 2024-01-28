import { doc, getDoc, setDoc} from "firebase/firestore";
import {firestore} from "../config/firebase";

export const createUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = doc(firestore, `users/${user.uid}`);
    const snapshot = await getDoc(userRef);

    if (snapshot.exists){
        const {email} = user;
        const {name, school, address, district, dob, contactnum, year} = additionalData;

        try {
            await setDoc(userRef, {
                name,
                school,
                address,
                district,
                dob,
                contactnum,
                year,
                email,
                createdAt: new Date(),
              });
        } catch(err){
            console.log('Error in creating user', err);
        }
    }
}