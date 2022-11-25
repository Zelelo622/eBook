import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

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