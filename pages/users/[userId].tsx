import {FC} from "react";
import {User} from "../../types/user";
import Head from "next/head";
import {UsersList} from "../../components/UsersList";
import {useRouter} from "next/router";
import {fetchUser, fetchUsers} from "../../api/users";
import {GetStaticPaths, GetStaticProps} from "next";

export const getStaticProps: GetStaticProps = async (context) => {
    // @ts-ignore
    const userId = context.params.userId as string;
    const user = await fetchUser(userId);

    return {
        props: {
            user
        },
        revalidate: 20,
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const users = await fetchUsers();
    const paths = users.map((i) => ({
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
    const router = useRouter();

    return (
        <section>
            <Head>
                <title>User page</title>
            </Head>
            <h1>user detail page</h1>
            <UsersList users={[user]}/>
        </section>
    );
}

export default User
