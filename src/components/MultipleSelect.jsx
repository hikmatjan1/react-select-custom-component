import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from './Header';
import search_icon from '../assets/search1.svg';
import right_icon from '../assets/chevron_right.svg';

function MultipleSelect(props) {
    let { index = null, data_index = null, mandatory = false, title = { name: "", size: "11px", color: "#475467" }, placeholder = { name: "Placeholder", size: "11px", color: "gray" }, listItemStyle = { color: "black", size: "11px", maxHeight: "180px" }, isSearch = "true", lang = "en", style = { maxWidth: "200px", height: "30px", borderRadius: "5px", color: "#0073FB", borderColor: "#152DFF" }, className = "react-multiple-select" } = props;
    const [extraData, setExtraData] = useState(props.data);
    const [selected, setSelected] = useState([]);
    const [open, setOpen] = useState(false);
    const modalRef = useRef();

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setOpen(false); // Tashqariga bosilganda yopiladi
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setExtraData(props.data);
    }, [props.data]);

    // open menu
    const openMenuHandler = useCallback((value) => {
        setOpen(value);
    }, []);

    // for search 
    const searchChangeHandler = useCallback((value) => {
        if (value.trim()?.length > 0) {
            setExtraData(props.data?.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1));
        } else {
            setExtraData(props.data);
        }
    }, [extraData]);

    // change select
    const changeSelectHandler = useCallback((e) => {
        let a = selected.find(t => t.id === e.id);

        if (props.changeSelectedHandler)
            props.changeSelectedHandler(a && a.hasOwnProperty("id") ? [...selected.filter(p => p.id != e.id)] : [...selected, e], index, data_index);

        if (a && a.hasOwnProperty("id")) {
            setSelected(prev => {
                return prev.filter(p => p.id != e.id);
            });
        } else setSelected([...selected, e])
    }, [extraData, selected]);

    return (
        <div
            style={{
                maxWidth: style?.maxWidth ? style?.maxWidth : "200px"
            }}
            className={className}
        >
            {title.hasOwnProperty("name") && title.name && (
                <Header title={title?.name} size={title?.size} color={title?.color} mandatory={mandatory} />
            )}
            <div className='relative text-[11px]' ref={modalRef}>
                <div
                    className={`relative appearance-none border px-1 focus:z-10 disabled:bg-[#fff] disabled:border-[#0075FF0D] bg-white overflow-hidden gap-1`}
                    onClick={() => openMenuHandler(!open)}
                    title={selected?.length > 0 ? selected.map((e, k) => ' ' + e.name) : ''}
                    style={{
                        height: style?.height ? style?.height : "30px",
                        borderRadius: style?.borderRadius ? style?.borderRadius : "5px",
                        borderColor: open ? '#152DFF' : '#CFD3D5'
                    }}
                >
                    {selected?.length > 0 ? (
                        <ul className='flex items-center gap-1 h-full w-[73%] line-clamp-1'>
                            {selected.map((item, index) => (
                                <li key={item.id} className='font-inter_medium'
                                    style={{
                                        height: style?.color ? style?.color : "rgb(51, 51, 51)",
                                    }}
                                >
                                    <span className='flex items-center'>{selected?.length - 1 != index ? `${item?.name}, ` : item?.name} </span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className={`pl-1 h-full flex flex-col justify-center`}
                            style={{
                                color: placeholder?.color ? placeholder?.color : "gray",
                                fontSize: placeholder?.size ? placeholder?.size : "12px"
                            }}
                        >
                            {placeholder?.name}
                        </div>
                    )}

                    <div className='absolute top-[1px] right-0 bottom-0 m-auto flex items-center'>
                        {selected?.length > 0 && (
                            <span className='text-[8px] text-gray-400'>{selected?.length}+ more</span>
                        )}
                        <img src={right_icon} alt="no image" className={` transition-all ${open && 'rotate-180'}`} />
                    </div>
                </div>

                {open && (
                    <div className='absolute top-full left-0 right-0 mt-1 overflow-y-scroll rounded-[4px] bg-white shadow-md z-20 multiple-select-list pl-1 pb-0.5'
                        style={{
                            maxHeight: listItemStyle?.maxHeight ? listItemStyle?.maxHeight : "300px"
                        }}
                    >
                        {isSearch && (
                            <div className='flex items-center justify-center px-[6px] pt-[2px] bg-white z-10 dark:bg-dark mb-[4px] w-full multiple-select-search'>
                                <div className='relative w-full'>
                                    <input name='search' type="search" className='border border-[#cfd3d586] h-[26px] w-full dark:border-gray-900 text-[11px] rounded placeholder-gray-500 dark:bg-dark focus:z-10 focus:outline-none pl-[26px] text-[#626262] placeholder:text-[11px]' placeholder={lang == "ru" ? "Поиск" : lang == "en" ? "Search" : lang == "uz" ? "Qidirish" : "Search"}
                                        onChange={event => searchChangeHandler(event.target.value)}
                                    />
                                    <div className='absolute top-0 left-2 bottom-0 pt-[7px]'>
                                        <img src={search_icon} alt="no image" className='w-[14px] text-[#130F26]' />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className='multiple-select-list-items'>
                            {extraData?.length > 0 ? extraData.map(elem => (
                                <label
                                    key={elem.id}
                                    title={elem?.name}
                                    className={`px-[10px] p-1 cursor-pointer hover:bg-gray-100 transition-all flex items-center gap-2 line-clamp-1 multiple-select-list-item`}
                                    htmlFor={elem.name}
                                    style={{
                                        color: listItemStyle?.color ? listItemStyle?.color : "gray",
                                        fontSize: listItemStyle?.size ? listItemStyle?.size : "12px"
                                    }}
                                >
                                    <input
                                        type='checkbox'
                                        id={elem.name}
                                        checked={selected.some(e => e.id === elem.id)}
                                        onChange={() => changeSelectHandler(elem)}
                                    />
                                    <p className='line-clamp-1' id={elem.name}>
                                        {elem?.name}
                                    </p>
                                </label>
                            )) : (
                                <div>
                                    <p className='text-gray-500 text-center'>{lang == "ru" ? "Информация не найдена" : lang == "en" ? "Information not available" : lang == "uz" ? "Ma'lumot topilmadi" : "Information not available"}</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default React.memo(MultipleSelect);