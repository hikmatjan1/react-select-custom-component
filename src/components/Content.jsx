import React, { memo } from 'react';

function Content(props) {
    const { selected, style, isMulti } = props;

    return (
        <ul className='flex items-center gap-1 h-full w-[73%] line-clamp-1'
        >
            {isMulti ? (
                selected?.length > 0 && selected.map((item, index) => (
                    <li key={item.id} className='font-inter_medium'
                        style={{
                            color: style?.color ? style?.color : "rgb(51, 51, 51)",
                        }}
                    >
                        <span className='flex items-center'>
                            {selected?.length - 1 != index ? `${item?.name}, ` : item?.name}
                        </span>
                    </li>
                ))
            ) : (
                <li className='font-inter_medium'
                    style={{
                        color: style?.color ? style?.color : "rgb(51, 51, 51)",
                    }}
                >
                    {selected?.name}
                </li>
            )}
        </ul >
    )
}

export default memo(Content);