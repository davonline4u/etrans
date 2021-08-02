import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState([false]);
    const [currentPage, setCurrentPage] = useState([1]);
    const [postsPerPage, setPostPerPage] = useState([10]);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('https://www.pexels.com/api/documentation/#photos-curated');
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
       
    }, []);
    console.log(posts);
    return(
        <div className="container">
            <div className="card mt-4">
                <div className="card-body">
                    <h2>Products Page -Guest</h2>
                </div>
            </div>
        </div>
    )
}
export default Products