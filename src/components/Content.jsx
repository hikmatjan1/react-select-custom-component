import React, { memo } from 'react';

function Content(props) {
    const { selected, style } = props;
    
    return (
        <ul className='flex items-center gap-1 h-full w-[73%] line-clamp-1'>
            {selected.map((item, index) => (
                <li key={item.id} className='font-inter_medium'
                    style={{
                        height: style?.color ? style?.color : "rgb(51, 51, 51)",
                    }}
                >
                    <span className='flex items-center'>
                        {selected?.length - 1 != index ? `${item?.name}, ` : item?.name}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default memo(Content);