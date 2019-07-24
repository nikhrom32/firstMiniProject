import React  from "react";

interface NewsAuthorProps {
    author: string
}

const NewsAuthor = ({ author }: NewsAuthorProps) => {
    return (
        <>
            {author}
        </>
    )
}

export default NewsAuthor;