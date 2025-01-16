import React, { memo } from 'react';

function Header(props) {
    const { title, mandatory, size = "", color = "" } = props;

    return (
        <span className='font-inter_medium text-[13px] lg:text-[14px] text-header_color' style={{ fontSize: size, color: color }}>
            {title}
            {mandatory && (
                <span className='text-red-500'> *</span>
            )}
        </span>
    )
}

export default memo(Header);