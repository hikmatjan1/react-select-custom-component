import React, { memo } from 'react';
import search_icon from '../assets/search1.svg';

function SearchInput(props) {
    const { isSearch, lang } = props;
    return (
        isSearch && (
            <div className='flex items-center justify-center px-[6px] pt-[2px] bg-white z-10 dark:bg-dark mb-[4px] w-full multiple-select-search'>
                <div className='relative w-full'>
                    <input name='search' type="search" className='border border-[#cfd3d586] h-[26px] w-full dark:border-gray-900 text-[11px] rounded placeholder-gray-500 dark:bg-dark focus:z-10 focus:outline-none pl-[26px] text-[#626262] placeholder:text-[11px]' placeholder={lang == "ru" ? "Поиск" : lang == "en" ? "Search" : lang == "uz" ? "Qidirish" : "Search"}
                        onChange={event => props.searchChangeHandler(event.target.value)}
                    />
                    <div className='absolute top-0 left-2 bottom-0 pt-[7px]'>
                        <img src={search_icon} alt="no image" className='w-[14px] text-[#130F26]' />
                    </div>
                </div>
            </div>
        )
    )
}

export default memo(SearchInput);