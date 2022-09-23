import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <img src="https://www.facebeautyscience.com/wp-content/uploads/2020/04/face-beauty-skin-face2-proc.jpg" alt=""/>
      {props.message}
      <div>{props.likesCount}</div>
    </div>
  )
}

export default Post;
