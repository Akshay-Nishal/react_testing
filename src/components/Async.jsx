import { useEffect, useState } from 'react';

const Async = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicod.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      })
      .catch(err=>{
        setPosts([{id:'f1',title:'Fail Post'}])
      })
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;