import {ref, onValue} from 'firebase/database';
import {Users} from "../types/user";
import {clientDatabase} from "../firebase/db";

export async function fetchUsers(): Promise<Users> {
    return new Promise((resolve) => {
        const starCountRef = ref(clientDatabase, 'users');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val() as Users;

            resolve(data);
        });
    });
}
