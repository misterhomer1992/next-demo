import {GetServerSideProps} from "next";
import {FC} from "react";
import {Users} from "../types/user";
import {UsersList} from "../components/UsersList";
import Head from "next/head";
import {users1} from "../mockData/users";

export const getServerSideProps: GetServerSideProps = async () => {
    const users = users1;

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
                <title>SSR (Server side rendering)</title>
            </Head>
            <h1>SSR content</h1>
            <UsersList users={users}/>
        </section>
    );
}

export default SSR
