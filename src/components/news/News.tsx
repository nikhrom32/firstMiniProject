import React, { MouseEvent, useState } from 'react'
import { Card, Col, Typography, Button, Divider, Tag, Row } from 'antd'
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';

import './news.css';
import newsMainImage from './img3.jpg';
import NewsService from './NewsService';

import NewsDate from './NewsDate';
import NewsAuthor from './NewsAuthor';
import NewsMainDescription from './NewsMainDescription';
import NewsMainTitle from './NewsMainTitle';



interface iDictionary {
    [prop: string]: string | number,
}



const NewsImage = () => {
    return (
        <>
            <img className='news-main-img' alt='News Title' src={newsMainImage} />
        </>
    )
}



interface NewsTagsProps {
    tags: string,
}

const range = (count: number) => {
    return Array.from({ length: count }, (_, i) => 0 + i)
}


const NewsTags = ({ tags }: NewsTagsProps) => {
    return (
        <>
            {range(tags.split(' ').length).map(tagId =>
                <Tag
                    key={tagId}
                >
                    {tags.split(' ')[tagId]}
                </Tag>)}
        </>
    )
}



interface NewsMainTextProps {
    text: string,
}

const NewsMainText = ({ text }: NewsMainTextProps) => {
    return (
        <>
            {range(text.split('\n').length).map(parId =>
                <Paragraph
                    key={parId}
                >
                    {text.split('\n')[parId]}
                </Paragraph>)}
        </>
    )    
}



const News = () => {

    const [newsMainTags, setNewsMainTags] = useState('')
    const [newsMainDate, setNewsMainDate] = useState('')
    const [newsMainAuthor, setNewsMainAuthor] = useState('')
    const [newsMainDescr, setNewsMainDescr] = useState('')
    const [newsMaintitle, setNewsMainTitle] = useState('')
    const [newsMainText, setNewsMainText] = useState('')

    const NService = new NewsService()


    const getNews = async (event: MouseEvent) => {
        event.preventDefault()

        const newsMain: iDictionary = await NService.getNews(1)

        setNewsMainTags(newsMain.tags as string)
        setNewsMainDate(newsMain.date_published as string)
        setNewsMainAuthor(newsMain.author as string)
        setNewsMainDescr(newsMain.data_short as string)
        setNewsMainTitle(newsMain.header as string)
        setNewsMainText(newsMain.data_full as string)
    }

    return (
        <>
            <Col span={12} push={4}>
                <NewsImage />

                <Typography>
                    <Title>
                        <NewsMainTitle
                            title={newsMaintitle}
                        />
                    </Title>

                    <Row
                        gutter={10}
                        justify='center'
                    >

                        <Col span={2}>
                            <NewsAuthor
                                author={newsMainAuthor}
                            />
                        </Col>

                        <Col span={8}>
                            <NewsTags
                                tags={newsMainTags}
                            />
                        </Col>

                        <Col span={8}>
                            <NewsDate
                                date={newsMainDate}
                            />
                        </Col>
                    </Row>

                    <Divider />

                    <Title
                        level={2}
                    >
                        <NewsMainDescription
                            descr={newsMainDescr}
                        />
                    </Title>

                    <div className='news-main-text'>
                        <NewsMainText
                            text={newsMainText}
                        />
                    </div>

                </Typography>
            </Col>

            <Col span={4} push={4}>
                <Title level={3}>Recent articles:</Title>
                <Button onClick={event => getNews(event)}> get main</Button>
            </Col>
        </>
    );
}


export default News;