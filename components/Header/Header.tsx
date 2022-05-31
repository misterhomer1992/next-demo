import Link from 'next/link';
import {useRouter} from "next/router";
import classNames from 'classnames';
import {CSR_PATH, SSG_DYNAMIC_ROUTE_PATH, SSG_PATH, SSR_PATH} from "../../const";

export const Header = () => {
    const router = useRouter();
    const ssrLinkClasses = classNames('nav-link', {
        'active': router.pathname === SSR_PATH,
    });
    const ssgLinkClasses = classNames('nav-link', {
        'active': router.pathname === SSG_PATH,
    });
    const ssgDynamicRouteLinkClasses = classNames('nav-link', {
        'active': router.pathname === SSG_DYNAMIC_ROUTE_PATH || router.pathname.indexOf('user') !== -1,
    });
    const csrLinkClasses = classNames('nav-link', {
        'active': router.pathname === CSR_PATH,
    });

    return (
        <header className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <Link href="/">
                    <a className="navbar-brand">Home</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link href={SSR_PATH}>
                                <a className={ssrLinkClasses} aria-current="page">SSR</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={SSG_PATH}>
                                <a className={ssgLinkClasses}>SSG</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={SSG_DYNAMIC_ROUTE_PATH}>
                                <a className={ssgDynamicRouteLinkClasses}>SSG + dynamic route</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href={CSR_PATH}>
                                <a className={csrLinkClasses} href="#">CSR</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};
