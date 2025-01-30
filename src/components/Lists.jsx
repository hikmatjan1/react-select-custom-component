import React, { memo } from 'react';
import { FixedSizeList as List } from "react-window";
import check_icon from '../assets/check.svg';

function Lists(props) {
    const { extraData, selected, selectedAll, listItemStyle, lang, isMulti } = props;

    const renderRow = ({ index, style }) => {
        let isBool = (isMulti && Array.isArray(selected)) ? selected?.some(e => e.id === extraData[index].id) : (selected && !Array.isArray(selected)) ? selected?.id == extraData[index].id : false;

        return (
            <div
                key={extraData[index].id}
                title={extraData[index].name}
                className={`px-[7px] p-1 cursor-pointer hover:bg-gray-100 transition-all flex items-center gap-2 line-clamp-1 multiple-select-list-item ${(index !== 0 && isMulti) ? 'pl-3' : ''} ${(isBool && !isMulti) ? 'bg-gray-100 justify-between' : ''}`}
                style={{
                    ...style,
                    color: (index == 0 && isMulti) ? "gray" : listItemStyle?.color ? listItemStyle?.color : "gray",
                    fontSize: listItemStyle?.size ? listItemStyle?.size : "12px"
                }}
                onClick={() => props.changeSelectHandler(extraData[index])}
            >
                {isMulti && (
                    <div className={`w-3 h-3 flex items-center justify-center rounded-[2px] border`}
                        style={{ backgroundColor: (isBool || selectedAll) ? listItemStyle.checkboxColor : "transparent" }}
                    >
                        {(isBool || selectedAll) && <img src={check_icon} alt="check" className='w-[10px]' />}
                    </div>
                )}
                <p className='line-clamp-1'>
                    {index === 0 ? (selectedAll ? (lang == "en" ? "Cancel all" : lang == "ru" ? "Отменить все" : lang == "uz" ? "Hammasini bekor qilish" : "Cancel all") : extraData[index].name) : extraData[index].name}
                </p>

                {!isMulti && (
                    <div className={`w-3 h-3 flex items-center justify-center`}>
                        {(isBool || selectedAll) && (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width="26px" fill={listItemStyle.checkboxColor} height="26px"><path d="M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z" /></svg>
                        )}
                    </div>
                )}
            </div>
        )
    };

    return (
        <>
            {extraData?.length > 0 ? (
                <>
                    <List
                        height={listItemStyle.maxHeight} // dropdown height
                        itemCount={extraData.length} // total number of elements
                        itemSize={30} // height of each element (px)
                        width="100%"
                    >
                        {renderRow}
                    </List>
                </>
            ) : (
                <div>
                    <p className='text-gray-500 text-center'>{lang == "ru" ? "Информация не найдена" : lang == "en" ? "Information not available" : lang == "uz" ? "Ma'lumot topilmadi" : "Information not available"}</p>
                </div>
            )}
        </>
    )
}

export default memo(Lists);