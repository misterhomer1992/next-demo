import {InferGetStaticPropsType} from "next";
import {UsersList} from "../components/UsersList";
import Head from "next/head";
import {fetchUsers} from "../appAPI/firebaseAdmin";

export const getStaticProps = async () => {
    const users = await fetchUsers();

    return {
        props: {
            users,
        },
        revalidate: 20,
    }
}

function SSGRevalidate({users}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <section>
            <Head>
                <title>SSG (revalidate)</title>
            </Head>
            <h1>SSG content</h1>
            <UsersList users={users}/>
        </section>
    );
}

export default SSGRevalidate
