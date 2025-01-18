declare module 'react-select-custom-component' {
    import { FC } from 'react';

    // Komponentga kerakli propslarni qo'shish
    export interface CustomComponentProps {
        // Bu erda xohlagan propslarni qo'shing
        data: any[],
        title: object;
        placeholder: object;
        listItemStyle: object;
        isSearch: boolean;
        lang: string;
        mandatory: boolean;
        style: object;
        className: string;
        changeSelectedHandler: (value: string) => any;
        // Agar boshqa propslar mavjud bo'lsa, ularni ham kiritishingiz mumkin
    }
    // Komponentning tipi
    export const MultipleSelect: FC<CustomComponentProps>;

    // export default MultipleSelect;

    // export interface Content {
    //     selected: any[];
    //     style: object;
    // }
    // export const Content: FC<Content>;

    // export interface Header {
    //     title: object;
    //     mandatory: boolean;
    //     size: string;
    //     color: string;
    // }
    // export const Header: FC<Header>;

    // export interface Info {
    //     selected: any[];
    //     open: boolean;
    // }
    // export const Info: FC<Info>;

    // export interface Lists {
    //     extraData: any[];
    //     selected: any[];
    //     listItemStyle: object;
    //     lang: string;
    // }
    // export const Lists: FC<Lists>;

    // export interface Placeholder {
    //     placeholder: object;
    // }
    // export const Placeholder: FC<Placeholder>;

    // export interface SearchInput {
    //     isSearch: boolean;
    //     lang: string;
    // }
    // export const SearchInput: FC<SearchInput>;
}