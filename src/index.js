import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const books = [
{
  id:1,
  img:'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'Title1',
  author: 'Author1'
},
{
  id:2,
  img:'https://images-na.ssl-images-amazon.com/images/I/91dylEq7LML._AC_UL200_SR200,200_.jpg',
  title: 'Title2',
  author: 'Author2'
},
{
  id:3,
  img:'https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL200_SR200,200_.jpg',
  title: 'Title3',
  author: 'Author3'
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
  return (
    <article className='book'>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}


ReactDom.render(<BookList />, document.getElementById('root'));