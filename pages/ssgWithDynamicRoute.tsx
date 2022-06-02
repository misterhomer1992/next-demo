import {GetStaticProps} from "next";
import {FC} from "react";
import {Users} from "../types/user";
import {UsersList} from "../components/UsersList";
import Head from "next/head";
import {fetchDraftUsers, fetchUsers} from "../appAPI/firebaseAdmin";

export const getStaticProps: GetStaticProps = async (context) => {
    let users: Users = [];

    if (context.preview) {
        users = await fetchDraftUsers();
    } else {
        users = await fetchUsers();
    }

    return {
        props: {
            users,
        }
    }
}

const SSGWithDynamicRoute: FC<{ users: Users }> = ({users}) => {

    return (
        <section>
            <Head>
                <title>SSG + dynamic route</title>
            </Head>
            <h1>SSG + dynamic route content</h1>
            <UsersList users={users} hasDetailPage/>
        </section>
    );
}

export default SSGWithDynamicRoute
