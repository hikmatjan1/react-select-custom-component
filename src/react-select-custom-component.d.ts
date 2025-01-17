declare module 'react-select-custom-component' {
    import { FC } from 'react';

    // Komponentga kerakli propslarni qo'shish
    export interface CustomComponentProps {
        // Bu erda xohlagan propslarni qo'shing
        data: any,
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
    const MultipleSelect: FC<CustomComponentProps>;

    export default MultipleSelect;
}