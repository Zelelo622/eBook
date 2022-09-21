import Admin from "./page/Admin";
import BookMark from "./page/BookMark";
import BookPage from "./page/BookPage";
import Libr from "./page/Libr";
import Auth from "./page/Auth";
import { ADMIN_ROUTE, BOOKMARK_ROUTE, BOOK_ROUTE, LIBR_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BOOKMARK_ROUTE,
        Component: BookMark
    },
]

export const publicRoutes = [
    {
        path: LIBR_ROUTE,
        Component: Libr
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: BOOK_ROUTE + '/:id',
        Component: BookPage
    },
]