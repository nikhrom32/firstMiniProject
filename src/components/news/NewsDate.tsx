import React  from "react";


interface iJsonObj {
    [prop: string]: string | number,
}

const months: iJsonObj = {
    '01': 'Января',
    '02': 'Февраля',
    '03': 'Марта',
    '04': 'Апреля',
    '05': 'Мая',
    '06': 'Июня',
    '07': 'Июля',
    '08': 'Августа',
    '09': 'Сентября',
    '10': 'Октября',
    '11': 'Ноября',
    '12': 'Декабря',
}

interface NewsDateProps {
    date: string,
}

const formatDate = (date: string) => {
    const result = date.split('T')[0].split('-') // разделяем строку вида 2089-07-23T12:15:38.308020Z
    result[1] = months[result[1]] as string
    return result
}

const NewsDate = ({ date }: NewsDateProps) => {
    return (
        <>
            {formatDate(date).reverse().join(' ')}
        </>
    )
}

export default NewsDate;