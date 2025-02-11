import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from './Header';
import SearchInput from './SearchInput';
import Placeholder from './Placeholder';
import Content from './Content';
import Info from './Info';
import Lists from './Lists';

function MultipleSelect(props) {
    let { index = null, data_index = null, data = [], isMulti = true, mandatory = false, title = { name: "", size: "11px", color: "#475467" }, placeholder = { name: "Placeholder", size: "11px", color: "gray" }, listItemStyle = { color: "black", size: "11px", maxHeight: 150, checkboxColor: "blue" }, isSearch = "true", lang = "en", style = { maxWidth: "200px", height: "30px", borderRadius: "5px", color: "#0073FB", borderColor: "#152DFF" }, className = "react-multiple-select", defaultValue = [] } = props;
    const [extraData, setExtraData] = useState([]);
    const [selected, setSelected] = useState(defaultValue);
    const [selectedAll, setSelectedAll] = useState(null); // If we choose all of them, we can do it separately.
    const [open, setOpen] = useState(false);
    const buttonRef = useRef();
    const modalRef = useRef();

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setOpen(false); // Tashqariga bosilganda yopiladi
            if (extraData?.length < data?.length) {
                setExtraData(data?.length > 0 ? (isMulti ? [{ id: "all", name: lang == "en" ? "Select all" : lang == "ru" ? "Выбрать все" : lang == "uz" ? "Hammasini tanlash" : "Select all" }, ...data] : data) : data);
            }
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // save data to extraData state
    useEffect(() => {
        setExtraData(data?.length > 0 ? (isMulti ? [{ id: "all", name: lang == "en" ? "Select all" : lang == "ru" ? "Выбрать все" : lang == "uz" ? "Hammasini tanlash" : "Select all" }, ...data] : data) : data);
    }, [data]);

    // open menu
    const openMenuHandler = useCallback((value) => {
        setOpen(value);
    }, []);

    // for search 
    const searchChangeHandler = useCallback(value => {
        if (value.trim()?.length > 0) {
            setExtraData(isMulti ? [{ id: "all", name: lang == "en" ? "Select all" : lang == "ru" ? "Выбрать все" : lang == "uz" ? "Hammasini tanlash" : "Select all" }, ...data?.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1)] : data?.filter(item => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1));
        } else {
            setExtraData(data?.length > 0 ? (isMulti ? [{ id: "all", name: lang == "en" ? "Select all" : lang == "ru" ? "Выбрать все" : lang == "uz" ? "Hammasini tanlash" : "Select all" }, ...data] : data) : data);
        }
    }, [extraData]);

    // change select
    const changeSelectHandler = useCallback((e) => {
        if (e.id == "all") {
            if (selectedAll) {
                props.changeSelectedHandler([], index, data_index);
                setSelected([]);
                setSelectedAll(null);
            } else {
                let result = extraData.filter(e => e.id != "all");
                props.changeSelectedHandler(result, index, data_index);
                setSelected(result);
                setSelectedAll(e);
            }
        } else {
            if (isMulti) {
                let a = selected.find(t => t.id === e.id);

                if (props.changeSelectedHandler)
                    props.changeSelectedHandler(a && a.hasOwnProperty("id") ? [...selected.filter(p => p.id != e.id)] : [...selected, e], index, data_index);

                if (a && a.hasOwnProperty("id")) {
                    setSelected(prev => {
                        return prev.filter(p => p.id != e.id);
                    });
                } else setSelected([...selected, e]);

                if (selectedAll) setSelectedAll(null);
            } else {
                props.changeSelectedHandler(e, index, data_index);
                setSelected(e);
            }
        }
    }, [extraData, selected]);

    return (
        <div
            style={{ maxWidth: style?.maxWidth ? style?.maxWidth : "100%" }}
            className={`${className}`}
        >
            {title.hasOwnProperty("name") && title.name && (
                <Header title={title?.name} size={title?.size} color={title?.color} mandatory={mandatory} />
            )}
            <div className='relative text-[11px]' ref={modalRef}>
                <div
                    className={`relative appearance-none border px-2 focus:z-10 disabled:bg-[#fff] disabled:border-[#0075FF0D] bg-white overflow-hidden gap-1`}
                    onClick={() => openMenuHandler(!open)}
                    ref={buttonRef}
                    title={isMulti ? (selected?.length > 0 ? selected.map((e, k) => ' ' + e.name) : '') : selected && !Array.isArray(selected) ? selected?.name : ""}
                    style={{
                        height: style?.height ? style?.height : "30px",
                        borderRadius: style?.borderRadius ? style?.borderRadius : "5px",
                        borderColor: open ? '#152DFF' : style?.borderColor ? style?.borderColor : "#ccc"
                    }}
                >
                    {((Array.isArray(selected) && selected?.length > 0) || (!Array.isArray(selected) && selected)) ? (
                        <Content selected={selected} style={style} isMulti={isMulti} />
                    ) : (
                        <Placeholder placeholder={placeholder} />
                    )}

                    <Info selected={selected} open={open} />
                </div>

                {open && (
                    <div
                        className='absolute top-full left-0 right-0 mt-1 rounded-[4px] bg-white shadow-md multiple-select-list pl-1 pb-0.5'
                        style={{ zIndex: listItemStyle?.zIndex ? listItemStyle?.zIndex : 20 }}
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
                                selectedAll={selectedAll}
                                listItemStyle={listItemStyle}
                                lang={lang}
                                isMulti={isMulti}
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