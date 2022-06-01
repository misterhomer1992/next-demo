import {User, Users} from "../types/user";
import {adminDatabase} from "../firebase/adminDB";

export async function fetchUsers(): Promise<Users> {
    const data = await adminDatabase
        .database()
        .ref('users')
        .get();

    return data.val() as Users | [];
}

export async function fetchUser(id: string): Promise<User | undefined> {
    const users = await fetchUsers();

    return users.find(user => user.id === id);
}
