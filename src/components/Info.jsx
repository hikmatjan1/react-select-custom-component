import React, { memo } from 'react';
import right_icon from '../assets/chevron_right.svg';

function Info(props) {
    const { selected, open } = props;

    return (
        <div className='absolute top-[1px] right-0 bottom-0 m-auto flex items-center'>
            {selected?.length > 0 && (
                <span className='text-[8px] text-gray-400'>{selected?.length}+ more</span>
            )}
            <img src={right_icon} alt="no image" className={`transition-all ${open && 'rotate-180'}`} />
        </div>
    )
}

export default memo(Info);