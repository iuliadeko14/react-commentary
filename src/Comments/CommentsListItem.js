
import React, { Component } from "react";
import "../index.css";

export default class CommentsListItem extends Component {
  render() {
    const { name, label, time, onDelete } = this.props;

    let classNames = "app-comments-item d-flex justify-content-between";



    return (
      <div className={classNames}>
        <span className="app-comments-item-label">
          <span style={{ color: "#000" }}>{name}</span> :{" "}
          <span style={{ color: "#1c1e21" }}>
            {label.replace(/<[^>]+>/g, "").trim()}
          </span>
          <br />
          <span className="time">{time}</span>{" "}
        </span>
        <div >
          <button type="button" className="button_exit" onClick={onDelete}>&times;
            {/* <i className="fa fa-trash-o"></i> */}
          </button>
    
        </div>
      </div>
    );
  }
}

//  import React, {useContext} from 'react'
// import PropTypes from 'prop-types'
// import Context from '../context'


// function CommentItem({comment}){
//     const {removeComment} = useContext(Context)
//     const time = new Date().toLocaleString();

    
//     return(
//     <li>
//     <span>{comment.title}</span>
//     <span>{comment.commentary}</span>
//     <span>{time}</span>
//     <button className="button_exit" onClick={removeComment.bind(null, comment.id)}>&times;</button>
//     </li>
//     )
// }

// CommentItem.propTypes = {
//     comment: PropTypes.object.isRequired
    
// }

// export default CommentItem