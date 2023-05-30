import axios from "axios";
import React from "react";

const baseURL = "http://127.0.0.1:8000/api/rooms";

export default function Example() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
        {post.map(item => (
            <div key={item.id}>
                <span>ID: {item.id} </span>
                <span>Nazwa: {item.name}</span>
            </div>
        ))}
        <ul>
            <li>{post[1].name}</li>
            <li>{post[1].id}</li>
            <li>{post[1].game_type}</li>
        </ul>
    </div>
  );
}