import React from "react";
import CommentsListItem from "./CommentsListItem";
import "../index.css";

const CommentsList = ({ posts, onDelete, onToggleLiked }) => {
  const elements = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <CommentsListItem
          {...itemProps}
          onDelete={() => {
            onDelete(id);
          }}

        />
      </li>
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default CommentsList;

// import React from 'react'
// import CommentItem from './CommentItem'
// import PropTypes from 'prop-types'

// const styles = {
//     ul: {
//         listStyle: 'none',
//         margin: 0,
//     }
// }

// function CommentList(props){
//     return (
//         <ul style={styles.ul}>
//             {props.comments.map(comment=>{
//                 return <CommentItem comment={comment} key={comment.id}/>
//             })}
//         </ul>
//     )
// }

// CommentList.propTypes = {
//     comments: PropTypes.arrayOf(PropTypes.object).isRequired
// }
// export default CommentList