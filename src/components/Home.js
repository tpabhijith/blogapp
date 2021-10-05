import React,{useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"
import styled from 'styled-components'
import axios from "axios"

function Home() {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=> (
        axios.get("https://traveller.talrop.works/api/v1/blog/")
        .then(function (response) {
            // handle success
            console.log(response.data.data);
            setBlogs(response.data.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    ));
    let renderItems = () => {
        return blogs.map((item) => (
            <Content>
                <Link to={`/article/${item.id}`}>
                    <ImageContainer>
                            <AuthorImage src={item.author.image} alt="Image" />
                    </ImageContainer>
               </Link>
               <AuthorName>{item.title}</AuthorName>
               <Details>A guest post by <Name>{item.author.name} </Name> on {item.posted_date}</Details>
               <Description>{item.description}</Description>
           </Content>
        ))
    }
    return (
       <>
       <MainContainer>
           <Heading>Blog Posts</Heading>
           {renderItems()}
       </MainContainer>
       </>
    )
}
const Name = styled.span`
    color: #3475dc;
    cursor: pointer;
    font-weight: 600;
`;
const MainContainer = styled.div`
    background: #f7f7f7;
    padding:60px 100px;
    margin:0 auto;
    text-align: center;
`;
const Heading = styled.h1`
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 150px;
`;
const Content = styled.div`
    width: 80%;
    background: #fff;
    margin: 0 auto;
    padding:30px 60px;
    margin-bottom: 150px;
    position: relative;
`;
const ImageContainer = styled.div`
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    left: 0;
    right: 0;
`;
const AuthorImage = styled.img`
    width: 100%;
    display: block;
    border-radius: 50%;
`;
const AuthorName = styled.h3`
    font-size: 24px;
    font-weight: 600;
    margin-top: 60px;
    margin-bottom: 30px;
`;
const Details = styled.p`
    color: #7e7e7e;
    font-weight: 600;
    margin-bottom: 60px;
`;
const Description = styled.p`
    text-align: left;
`;


export default Home
