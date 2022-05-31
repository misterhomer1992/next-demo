import {GetStaticProps} from "next";
import {FC} from "react";
import {fetchUsers} from "../api/users";
import {Users} from "../types/user";
import {UsersList} from "../components/UsersList";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async () => {
    const users = await fetchUsers();

    return {
        props: {
            users,
        }
    }
}

const SSG: FC<{ users: Users }> = ({users}) => {

    return (
        <section>
            <Head>
                <title>SSG</title>
            </Head>
            <h1>SSG content</h1>
            <UsersList users={users}/>
        </section>
    );
}

export default SSG
