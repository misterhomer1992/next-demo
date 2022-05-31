import {FETCH_USER_API_PATH, FETCH_USERS_API_PATH, FETCH_USERS_WITH_DELAY_API_PATH} from "../const";
import {User, Users} from "../types/user";

export async function fetchUsers(): Promise<Users> {
    const data = await fetch(FETCH_USERS_API_PATH);

    return data.json();
}

export async function fetchUser(id: string): Promise<User> {
    const data = await fetch(`${FETCH_USER_API_PATH}?id=${id}`);

    return data.json();
}

export async function fetchUsersWithDelay(): Promise<Users> {
    const data = await fetch(FETCH_USERS_WITH_DELAY_API_PATH);

    return data.json();
}
