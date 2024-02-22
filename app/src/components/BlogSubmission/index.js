import React, { useState } from 'react';
import apiCall from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './BlogSubmission.css';

function BlogSubmission() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Here you can handle the submission of the blog post
        const response = await apiCall('http://localhost:3001/api/blog', 'POST', { title, content }, token);
        navigate(`/blog/${response.blog.id}`);

    };

    return (
        <form onSubmit={handleSubmit} className="blog-submission-form">
            <label>Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <label>Content:</label>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
            <button type="submit">Submit</button>
        </form>
    );
}

export default BlogSubmission;