import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import Placeholder from './Placeholder';
import Content from './Content';
import Info from './Info';
import Lists from './Lists';

function MultipleSelect(props) {
    let { index = null, data_index = null, mandatory = false, title = { name: "", size: "11px", color: "#475467" }, placeholder = { name: "Placeholder", size: "11px", color: "gray" }, listItemStyle = { color: "black", size: "11px", maxHeight: 150, checkboxColor: "blue" }, isSearch = "true", lang = "en", style = { maxWidth: "200px", height: "30px", borderRadius: "5px", color: "#0073FB", borderColor: "#152DFF" }, className = "react-multiple-select", defaultValue = [] } = props;
    const [extraData, setExtraData] = useState(props.data);
    const [selected, setSelected] = useState(defaultValue);
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
            style={{ maxWidth: style?.maxWidth ? style?.maxWidth : "200px" }}
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
                        <Content selected={selected} style={style} />
                    ) : (
                        <Placeholder placeholder={placeholder} />
                    )}

                    <Info selected={selected} open={open} />
                </div>

                {open && (
                    <div
                        className='absolute top-full left-0 right-0 mt-1 rounded-[4px] bg-white shadow-md z-20 multiple-select-list pl-1 pb-0.5'
                        // style={{ maxHeight: listItemStyle?.maxHeight ? listItemStyle?.maxHeight : "200" }}
                    >
                        <SearchInput
                            isSearch={isSearch}
                            lang={lang}
                            searchChangeHandler={searchChangeHandler}
                        />

                        <div className='multiple-select-list-items'>
                            <Lists
                                extraData={extraData}
                                selected={selected}
                                listItemStyle={listItemStyle}
                                lang={lang}
                                changeSelectHandler={changeSelectHandler}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default React.memo(MultipleSelect);