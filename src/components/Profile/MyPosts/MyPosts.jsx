import React from "react";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  let postsElement = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  }

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className="content">
      <h2>My posts</h2>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <button onClick={onAddPost}>Add post</button>
      </div>
      {postsElement}
    </div>
  )
}

export default MyPosts;
