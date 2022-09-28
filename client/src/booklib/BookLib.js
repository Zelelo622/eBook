import { makeAutoObservable } from "mobx";

export default class BookLib {
    constructor() {
        this._books = [
            { id: 1, title: 'Искусство войны', publication_date: 2000 - 01 - 01, link_file: 'google.com' },
            { id: 1, title: 'Удушье', publication_date: 2000 - 01 - 01, link_file: 'google.com' },
            { id: 1, title: 'На дороге', publication_date: 2000 - 01 - 01, link_file: 'google.com' },
        ]
        makeAutoObservable(this);
    }

    setBooks(bool) {
        this._books = bool;
    }

    get books() {
        return this._books;
    }
}