import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavButton from '../NavButton';
import apiCall from '../../utils/api';


function BlogMenu() {
    const user = useSelector((state) => state.auth.user);

    const [blogMenuTitles, setblogMenuTitles] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            if(!user) return;
            const response = await apiCall(`http://localhost:3001/api/blog/user/${user.name}`, 'GET');
            const data = response.blogs;
            setblogMenuTitles(data);
        }
        fetchBlogs();

    }, [user]);

    if(user)
    {
        return (
            <div>
                <h2>Blogs</h2>
                <NavButton path="/blog/new">New Blog</NavButton>
                {blogMenuTitles && blogMenuTitles.map((post) => {
                    return (
                        <div key={post.id}>
                            <Link to={`/blog/${post.id}`}>{post.title}</Link>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default BlogMenu;