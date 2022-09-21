import { makeAutoObservable } from "mobx";

export default class BookLib {
    constructor() {
        makeAutoObservable(this);
    }
}