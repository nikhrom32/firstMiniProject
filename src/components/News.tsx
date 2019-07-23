import React, { MouseEvent } from 'react'
import {Card, Col, Typography, Button} from 'antd'
import Title from 'antd/lib/typography/Title';
import Paragraph from 'antd/lib/typography/Paragraph';

import './news.css';
import newsMainImage from './img3.jpg';
import NewsService from './NewsService';


const NewsImage = () => {
    return (
        <>
            <img className='news-main-img' alt='News Title' src={newsMainImage} />
        </>
    )
}


const News = () => {

    const NService = new NewsService()

    const getNews = (event: MouseEvent) => {
        event.preventDefault()                
        NService.getNews(1)
    }

    return (
        <>
            <Col span={12} push={4}>
                <NewsImage/>
                <Typography>
                    <Title>NEWS TITLE</Title>
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus malesuada ipsum eget sem ullamcorper maximus. Vivamus imperdiet est quis dignissim dapibus. Aliquam pulvinar urna eu sapien suscipit, sed tincidunt quam posuere. In tristique, massa at maximus tristique, lacus diam interdum mauris, ac dignissim metus elit sit amet dolor. Sed pharetra molestie auctor. Praesent sollicitudin ligula eu tristique fringilla. Aliquam erat volutpat. Aenean interdum fringilla est, eget laoreet nulla ultrices et. Sed feugiat sapien felis, sit amet vehicula dui sodales a. Donec in ornare tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>

                    <Paragraph>Suspendisse pharetra, justo a convallis interdum, libero libero dapibus tellus, eu fermentum justo urna id neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam convallis commodo ligula at maximus. Donec non laoreet enim. Vestibulum velit nisl, vestibulum eget eleifend id, dignissim sit amet dui. Aenean fermentum nisi risus, et posuere velit tincidunt quis. Fusce vel scelerisque lorem.</Paragraph>

                    <Paragraph>Nulla massa turpis, sollicitudin id venenatis et, pellentesque eu lectus. In risus lectus, commodo in libero ut, pretium fringilla magna. Integer venenatis lorem velit, in dictum felis imperdiet at. Donec non elit in lectus lacinia auctor. Cras id enim maximus, volutpat urna vitae, pretium dolor. Suspendisse in nisi porttitor, interdum tortor eu, mollis mi. Fusce sollicitudin egestas varius. Duis egestas massa hendrerit lacus condimentum, in condimentum dolor commodo. Nullam venenatis dui quis neque condimentum fringilla.</Paragraph>

                    <Paragraph>Curabitur porta nisl ultrices, congue dui id, maximus justo. Suspendisse blandit quam nec ante sagittis, a ultrices odio rutrum. Morbi gravida egestas dolor, sed interdum sem placerat vitae. Etiam et volutpat leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis eros ipsum, volutpat vel dolor vel, facilisis elementum lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus luctus at neque eget sodales.</Paragraph>

                    <Paragraph>Nulla eget faucibus odio, eget blandit ligula. Donec fringilla ac urna id molestie. Fusce mattis metus non ipsum volutpat, in aliquet massa varius. Sed sit amet porta libero, ac mollis mauris. In ultricies feugiat enim molestie auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras eu tortor sit amet justo suscipit aliquet. Cras a mauris suscipit, scelerisque leo in, tristique ligula. Integer pulvinar interdum ligula quis dignissim. Vestibulum consequat elementum lorem, id cursus velit porta nec. Nam enim metus, hendrerit sit amet iaculis a, dictum sit amet lorem. Suspendisse porta mauris ultrices lorem faucibus, a fringilla leo fermentum. Morbi lobortis augue eros, ut porttitor felis feugiat consectetur. Mauris molestie pretium augue. Aliquam arcu tellus, sodales quis neque at, scelerisque aliquet justo. </Paragraph>
                </Typography>
            </Col>
            <Col span={4} push={4}>
                <Title level={3}>Recent articles:</Title>
                <Button onClick={event => getNews(event)}> get</Button>
            </Col>
        </>
    );
}


export default News;