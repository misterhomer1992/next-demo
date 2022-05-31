import {Users} from "../../types/user";
import {FC} from "react";
import Link from "next/link";

type UsersList = {
    users: Users;
    hasDetailPage?: boolean;
};

export const UsersList: FC<UsersList> = (
    {
        users,
        hasDetailPage,
    }
) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">email</th>
                <th scope="col">birth date</th>
                {hasDetailPage && (
                    <th>&nbsp;</th>
                )}
            </tr>
            </thead>
            <tbody>
            {
                users.map((user) => {
                    // const birthDate = new Date(user.birthDate);
                    // const normalizedBirthDate = `${birthDate.getDate()}-${birthDate.getMonth() + 1}-${birthDate.getFullYear()}`;

                    return (
                        <tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{234}</td>
                            {hasDetailPage && (
                                <td>
                                    <Link href={`/users/${user.id}`}>
                                        <a className="btn btn-primary">Detail</a>
                                    </Link>
                                </td>
                            )}
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
}
