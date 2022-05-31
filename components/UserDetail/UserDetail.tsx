import {FC} from "react";
import {User} from "../../types/user";

export const UserDetail: FC<User> = (
    {
        id,
        email,
        firstName,
        lastName,
        birthDate,
    }
) => {
    const handleCopyUserLinkClick = () => navigator.clipboard.writeText(window.location.href);

    return (
        <div className="card" data-user-id={id}>
            <div className="card-body">
                <h5 className="card-title">`{firstName} {lastName}`</h5>
                <p className="card-text">{email}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">id: {id}</li>
                <li className="list-group-item">birth date: {birthDate}</li>
            </ul>
            <div className="card-body">
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleCopyUserLinkClick}
                >
                    Copy user link
                </button>
            </div>
        </div>
    );
}
