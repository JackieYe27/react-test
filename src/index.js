import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


const firstBook = {
  img:'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  title: 'Title1',
  author: 'Author1'
}
const secondBook = {
  img:'https://images-na.ssl-images-amazon.com/images/I/91dylEq7LML._AC_UL200_SR200,200_.jpg',
  title: 'Title2',
  author: 'Author2'
}

const BookList = () => {
  return (
  <section className='bookList'>
    <Book img = {firstBook.img} title = {firstBook.title} author = {firstBook.author}> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit adipisci accusantium, a quas ad dicta aliquid libero eius quae veniam!</p>
    </Book>
    <Book img = {secondBook.img} title = {secondBook.title} author = {secondBook.author}/>
  </section>
  )
}

const Book = (props) => {
  const { img, title, author, children} = props
  console.log(props);
  return (
    <article className='book'>
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  )
}


ReactDom.render(<BookList />, document.getElementById('root'));