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
            {blogPosts.map((post) => {
                return (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default BlogList;