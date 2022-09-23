const DialogItem = (props) => {
  let path = "/dialog/1";
  return (
    <div id={props.id} className="dialog">
      <a href={path}>
        <h2>{props.name}</h2>
      </a>
    </div>
  )
}

export default DialogItem;
