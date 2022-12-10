import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { Context } from '../index';
import ListAuthorElement from './authorElem/ListAuthorElement';
import UpdateAuthorElement from './authorElem/UpdateAuthorElement';
import ListBookElement from './bookElem/ListBookElement';
import UpdateBookElement from './bookElem/UpdateBookElement';
import ListBookReader from './readerElem/ListBookReader';
import BookRead from './readerElem/BookRead';

const AppRouter = () => {

    const { user } = useContext(Context);
    // console.log(user);

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )};
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component />} exact />
            )};

            <Route path="/author" exact element={<ListAuthorElement />} />
            <Route path="/update-author/:id" element={<UpdateAuthorElement />} />

            <Route path="/book" exact element={<ListBookElement />} />
            <Route path="/update-book/:id" element={<UpdateBookElement />} />

            <Route path='/list-book' exact element={<ListBookReader />} />
            <Route path='/book/:id' exact element={<BookRead />} />
        </Routes>
    )
}

export default AppRouter;
