import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apiCall from '../utils/api';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

export const BlogReaderPage = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    useEffect(() => {
        const fetchBlog = async () => {
            const response = await apiCall(`http://localhost:3001/api/blog/${id}`, 'GET');
            const data = await response.blog
            setBlog(data);
        };
        fetchBlog();
    }, [id]);

    return (
        <div className="App">
            <Header />
            <div className="App-body">
                <SideMenu />
                <div className="blog-reader-page">
                    <h1>{blog.title}</h1>
                    <p>{blog.content}</p>
                </div>
            </div>
        </div>
    );
}