import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
const BlogList = () => {
  const [blog, setBlog] = useState([]);
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/posts?type=' + type + '&search=' + search + '&page')
      .then((res) => {
        setBlog(res.data);
      });
    console.log('search: ', search);
  }, [search, type]);
  function renderBlog() {
    if (blog.length > 0) {
      return blog.map((value, key) => {
        const imgLink = value.image.name;
        return (
          <div className="blog-list">
            <img src={imgLink} alt="" className="blog-list-img" />
            <div className="container-blog">
              <Link to={'/blog-detail/' + value._id}>
                <h3>{value.title}</h3>
              </Link>
              <span
                className="material-symbols-outlined"
                style={{ marginRight: '5px', fontSize: '20px' }}>
                sell
              </span>
              <Link style={{ fontSize: '16px', color: '#333' }}>{value.type}</Link>
              <br />
              <span className="content-blog-list">{value.content}</span>
            </div>
          </div>
        );
      });
    }
  }
  function hanldeInput(e) {
    const nameInput = e.target.name;
    const value = e.target.value;
    setSearch((state) => ({ ...state, [nameInput]: value }));
  }
  function hanldeType(e) {
    const value = e.target.value;
    setType(value);
  }
  return (
    <div>
      <div className="center">
        <h1>BLOG LIST</h1>
      </div>
      <div style={{ marginBottom: '30px' }} className="center">
        <input
          style={{
            height: '40px',
            backgroundColor: '#F7FFF7',
            width: '60%',
            padding: '20px',
            fontSize: '18px',
            border: '1px solid',
            borderRadius: '5px'
          }}
          type="text"
          placeholder="Search Blog"
          name="search"
          defaultValue={''}
          onChange={hanldeInput}
        />
        <select onChange={hanldeType} name="tag">
          <option value="">All Blog</option>
          <option value="Grammar">Grammar</option>
          <option value="Vocabulary">Vocabulary</option>
        </select>
      </div>
      {renderBlog()}
      <div className="center">
        <nav aria-label="...">
          <ul class="pagination pagination-lg">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default BlogList;
