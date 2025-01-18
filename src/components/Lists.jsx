import React, { memo } from 'react';
import { FixedSizeList as List } from "react-window";
import check_icon from '../assets/check.svg';

function Lists(props) {
    const { extraData, selected, selectedAll, listItemStyle, lang } = props;

    const renderRow = ({ index, style }) => {
        let isBool = selected.some(e => e.id === extraData[index].id);
        return (
            <div
                key={extraData[index].id}
                title={extraData[index].name}
                className={`px-[7px] p-1 cursor-pointer hover:bg-gray-100 transition-all flex items-center gap-2 line-clamp-1 multiple-select-list-item ${index !== 0 ? 'pl-3' : ''}`}
                style={{
                    ...style,
                    color: index == 0 ? "gray" : listItemStyle?.color ? listItemStyle?.color : "gray",
                    fontSize: listItemStyle?.size ? listItemStyle?.size : "12px"
                }}
                onClick={() => props.changeSelectHandler(extraData[index])}
            >
                <div className='w-3 h-3 rounded-[2px] flex items-center justify-center border'
                    style={{ backgroundColor: (isBool || selectedAll) ? listItemStyle.checkboxColor : "transparent" }}
                >
                    {(isBool || selectedAll) && <img src={check_icon} alt="check" className='w-[10px]' />}
                </div>
                <p className='line-clamp-1'>
                    {index === 0 ? (selectedAll ? (lang == "en" ? "Cancel all" : lang == "ru" ? "Отменить все" : lang == "uz" ? "Hammasini bekor qilish" : "Cancel all") : extraData[index].name) : extraData[index].name}
                </p>
            </div>
        )
    };

    return (
        <>
            {extraData?.length > 0 ? (
                <>
                    <List
                        height={listItemStyle.maxHeight} // dropdown balandligi
                        itemCount={extraData.length} // jami elementlar soni
                        itemSize={30} // har bir elementning balandligi (px)
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