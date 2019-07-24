import React from 'react';

interface NewsMainDescriptionProps {
    descr: string,
}

const NewsMainDescription = ({ descr }: NewsMainDescriptionProps) => {
    return (
        <>
            {descr}
        </>
    )
}

export default NewsMainDescription;