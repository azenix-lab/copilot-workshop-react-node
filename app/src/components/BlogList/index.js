import { Link } from 'react-router-dom';

import React, { useState, useEffect } from "react";

function BlogList() {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            const response = await fetch("http://localhost:3001/api/blog/list");
            const data = await response.json();
            setBlogPosts(data);
        };
        fetchBlogPosts();
    }, []);

    return (
<div>
    <h1>Blog Posts</h1>
    {blogPosts && 
        <table className="blog-table">
            <thead>
                <tr>
                    <th>Blog Title</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                {blogPosts.map((post, index) => {
                    return (
                        <tr key={post.id || index}>
                            <td>{post.title}</td>
                            <td><Link to={`/blog/${post.id}`}>Read</Link></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    }
</div>
    );
}

export default BlogList;