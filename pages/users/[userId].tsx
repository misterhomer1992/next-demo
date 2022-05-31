import {FC} from "react";
import {User} from "../../types/user";
import Head from "next/head";
import {UsersList} from "../../components/UsersList";
import {GetStaticPaths, GetStaticProps} from "next";
import {users1} from "../../mockData/users";
import {UserDetail} from "../../components/UserDetail";

export const getStaticProps: GetStaticProps = async (context) => {
    // @ts-ignore
    const userId = context.params.userId as string;
    const user = users1.find(i => i.id === userId);

    return {
        props: {
            user
        },
        revalidate: 20,
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = users1.map((i) => ({
        params: {
            userId: i.id,
        }
    }));

    return {
        paths,
        fallback: true,
    }
}

const User: FC<{ user: User }> = ({user}) => {
    return (
        <section>
            <Head>
                <title>User page</title>
            </Head>
            <h1>user detail page</h1>
            <UserDetail {...user} />
        </section>
    );
}

export default User
