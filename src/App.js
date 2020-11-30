import React, { Component } from "react";

import CommentsList from "./Comments/CommentsList";
import CommentsAddForm from "./Comments/CommentsAddForm";
import "./index.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    localStorage.getItem("key") &&
      this.setState({
        data: JSON.parse(localStorage.getItem("key")),
      });
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("key", JSON.stringify(nextState.data));
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return {
        data: newArr,
      };
    });
  }

  addItem(bodyName, bodyComment) {
    const newItem = {
      name: bodyName,
      label: bodyComment,
      time: new Date().toLocaleString(),
      id: Date.now(),
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }


  render() {
    

    return (
      <div className="app">
        {/* <AppHeader liked={liked} allComments={allComments} /> */}
        <CommentsList
          posts={this.state.data}
          onDelete={this.deleteItem}
          onToggleLiked={this.onToggleLiked}
        />
        <CommentsAddForm onAdd={this.addItem} />
      </div>
    );
  }
}


// import React from 'react'
// import AddComment from './Comments/AddComment'
// import CommentList from './Comments/CommentList'
// import Context from './context';
// import LocalStorage from './Comments/LocalStorage'






// function App() {
//     const [comments, setComments] = LocalStorage("comments")
//     // React.useState([
//     //     {id: 1, completed: false, title: 'Света', commentary: 'Изучить React', time: "10:15"},
//     //     {id: 2, completed: false, title: "Петя", commentary: 'Выполнить домашку по React', time: "10"},
//     //     {id: 3, completed: false, title: 'Юля', commentary: 'Изучить следущий модуль', time: "15"},
//     // ])



//     function removeComment(id){
//         setComments(comments.filter(comment=> comment.id !== id))
//     }

//     function addComment(title, commentary, time) {
    
//         setComments(comments.concat([
//             {
//             title,
//             commentary,
//             id: Date.now(),
//             completed: false,
//             time: new Date().toLocaleString()
//         }
//     ]))
//     }

    
//     return (
        
//         <Context.Provider value={{removeComment: removeComment}}>
//     <div className="wrapper">

//       <h1>react comment</h1>

//       {/* <AddComment onCreate={ AddComment } /> */}
      

//       <AddComment onAdd={ addComment}/>

//       { comments.length ? (
    
//       <CommentList comments={comments} />
//       ) : (
//           <p>Нет комментариев</p>
//       )}
//     </div>
//     </Context.Provider>
//     )
// }

// export default App