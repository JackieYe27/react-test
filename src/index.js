import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const books = [
{
  id:1,
  img:'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth'
},
{
  id:2,
  img:'https://images-na.ssl-images-amazon.com/images/I/91dylEq7LML._AC_UL200_SR200,200_.jpg',
  title: 'World Travel: An Irreverent Guide',
  author: 'Anthony Bourdain'
},
{
  id:3,
  img:'https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg',
  title: 'If Animals Kissed Good Night ',
  author: 'Ann Whitford Paul'
}
]


const BookList = () => {
  return (
  <section className='bookList'>
    {books.map(book => {
      return (
        <Book key={book.id} book ={book}/>
      )
    })}
  </section>
  )
}

const Book = (props) => {
  const { img, title, author} = props.book
  console.log(props);

  const clickHandler = () => {
    console.log(title);
  }

  return (
    <article className='book' onMouseOver={() => {console.log(title)}}>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}> Click Me</button>
    </article>
  )
}


ReactDom.render(<BookList />, document.getElementById('root'));