import React, { memo } from 'react';

function Placeholder(props) {
    const { placeholder } = props;

    return (
        <div className="pl-1 h-full flex flex-col items-start justify-center"
            style={{
                color: placeholder?.color ? placeholder?.color : "gray",
                fontSize: placeholder?.size ? placeholder?.size : "12px"
            }}
        >
            {placeholder?.name}
        </div>
    )
}

export default memo(Placeholder);