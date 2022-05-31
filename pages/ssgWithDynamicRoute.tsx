import {GetStaticPaths, GetStaticProps} from "next";
import {FC} from "react";
import {fetchUsers} from "../api/users";
import {Users} from "../types/user";
import {UsersList} from "../components/UsersList";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async (context) => {
    const users = await fetchUsers();

    return {
        props: {
            users,
        }
    }
}

const SSR: FC<{ users: Users }> = ({users}) => {

    return (
        <section>
            <Head>
                <title>SSG + dynamic route</title>
            </Head>
            <h1>SSG + dynamic route content</h1>
            <UsersList users={users} hasDetailPage />
        </section>
    );
}

export default SSR