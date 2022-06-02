import {FC} from "react";
import {User, Users} from "../../types/user";
import Head from "next/head";
import {GetStaticPaths, GetStaticProps} from "next";
import {users1} from "../../mockData/users";
import {UserDetail} from "../../components/UserDetail";
import {fetchDraftUser, fetchUser} from "../../appAPI/firebaseAdmin";

export const getStaticProps: GetStaticProps = async (context) => {
    // @ts-ignore
    const userId = context.params.userId as string;
    let user: User | undefined;

    if (context.preview) {
        user = await fetchDraftUser(userId);
    } else {
        user = await fetchUser(userId);
    }

    return {
        props: {
            user
        },
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
