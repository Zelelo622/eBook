import { $authHost, $host } from "./index";

export const createAuthor = async (author) => {
    const { data } = await $authHost.post('api/author', author);
    return data;
}

export const fetchAuthor = async () => {
    const { data } = await $host.get('api/author');
    return data;
}

export const fetchAuthorOne = async (id) => {
    const { data } = await $host.get('api/author/' + id);
    return data;
}

export const updateAuthor = async (author, id) => {
    const { data } = await $authHost.put('api/author/' + id, author);
    return data
}

export const deleteAuthor = async (id) => {
    const { data } = await $authHost.delete('api/author/' + id);
    return data;
}

export const createBook = async (book) => {
    const { data } = await $authHost.post('api/book', book);
    return data;
}

export const fetchBook = async () => {
    const { data } = await $host.get('api/book');
    return data;
}

export const fetchBookOne = async (id) => {
    const { data } = await $host.get('api/book/' + id);
    return data;
}

export const updateBook = async (book, id) => {
    const { data } = await $authHost.put('api/book/' + id, book);
    return data
}

export const deleteBook = async (id) => {
    const { data } = await $authHost.delete('api/book/' + id);
    return data;
}