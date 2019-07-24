import React from 'react';

interface NewsMainTitleProps {
    title: string,
}

const NewsMainTitle = ({ title }: NewsMainTitleProps) => {
    return (
        <>
            {title}
        </>
    )
}

export default NewsMainTitle;