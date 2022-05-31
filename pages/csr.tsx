import {FETCH_USERS_WITH_DELAY_API_PATH} from "../const";
import useSWR from "swr";
import Head from "next/head";
import {fetchUsersWithDelay} from "../api/users";
import {UsersList} from "../components/UsersList";
import {Users} from "../types/user";

const CSR = () => {
    const {data, isValidating} = useSWR<Users>(FETCH_USERS_WITH_DELAY_API_PATH, fetchUsersWithDelay);
    const hasData = typeof data !== 'undefined';

    return (
        <section>
            <Head>
                <title>CSR</title>
            </Head>
            <h1>CSR content</h1>
            {isValidating && (
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            {!isValidating && hasData && (
                <UsersList users={data}/>
            )}
        </section>
    );
}

export default CSR
