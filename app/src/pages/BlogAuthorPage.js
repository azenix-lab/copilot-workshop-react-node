import React from 'react';
import BlogSubmission from '../components/BlogSubmission';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

export const BlogAuthorPage = () =>{
    return (
        <div className="App">
            <Header />
            <div className="App-body">
                <SideMenu />
                <div className="blog-submission-page">
                    <h1>Submit a Blog</h1>
                    <BlogSubmission />
                </div>
            </div>
        </div>
    );
}
