import React, { Component } from "react";
import "../index.css";

export default class CommentsAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      comment: "",
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }
  onValueChange(event) {
    this.setState({
      comment: event.target.value,
    });
  }
  onSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.state.name, this.state.comment);
    this.setState({
      name: "",
      comment: "",
    });
  }

  render() {
    return (
      <form  onSubmit={this.onSubmit}>
        <input
          type="text"
          required
          placeholder="Введите свое имя"
          onChange={this.onNameChange}
          value={this.state.name}
        />
        <textarea
          type="text"
          required
          placeholder="Напишите комментарий"
          onChange={this.onValueChange}
          value={this.state.comment}
        ></textarea>
        <button type="submit" className="btn_add">
          Добавить комментарий
        </button>
      </form>
    );
  }
}

// import React, { Component} from 'react'
// // import PropTypes from 'prop-types'

// export default class AddComment extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         title: "",
//         commentary: "",
//       };
//       this.onTitleChange = this.onTitleChange.bind(this);
//       this.onValueChange = this.onValueChange.bind(this);
//       this.onSubmit = this.onSubmit.bind(this);
//     }
  
//     onTitleChange(event) {
//       this.setState({
//         title: event.target.value,
//       });
//     }
//     onValueChange(event) {
//       this.setState({
//         commentary: event.target.value,
//       });
//     }
//     onSubmit(event) {
//       event.preventDefault();
//       this.props.onAdd(this.state.title, this.state.commentary);
//       this.setState({
//         title: "",
//         commentary: "",
//       });
//     }
  
//     render() {
//       return (
//         <form  onSubmit={this.onSubmit}>
//           <input
//             type="text"
//             required
//             placeholder="Введите свое имя"
//             onChange={this.onTitleChange}
//             value={this.state.title}
//           />
//           <textarea
//             type="text"
//             required
//             placeholder="Напишите комментарий"
//             onChange={this.onValueChange}
//             value={this.state.commentary}
//           ></textarea>
//           <button type="submit" className="btn_add">
//             Добавить комментарий
//           </button>
//         </form>
//       );
//     }
//   }


// // function AddComment({ onCreate }) {
// //     const [value, setValue] = useState('')
// //     const [comment, setComment] = useState('')


// //     function submitHandler(event){
// //         event.preventDefault();

// //         if (value.trim()) {
// //             onCreate(value);
// //             setValue('');
            
// //         }

// //         if (comment.trim()) {
// //             onCreate(comment);
// //             setComment('')
// //         }
// //     }


// //     return(
// //         <form onSubmit={submitHandler}>
// //             <input placeholder="Введите имя" value={value} onChange={event => setValue(event.target.value)} />
// //             <textarea placeholder="Введите комментарий" value={comment} onChange={event => setComment(event.target.value)} ></textarea>
// //             <button className="btn_add" type='submit'>Добавить комментарий</button>
// //         </form>
// //     )

// // }


// // AddComment.propTypes = {
// //     onCreate: PropTypes.func.isRequired
// // }

// // export default AddComment