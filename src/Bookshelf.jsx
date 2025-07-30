import { useState } from 'react'

const Bookshelf = () => {
  const [books, setBooks] = useState([])
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  })

  const handleInputChange = (event) => {
    setNewBook({...newBook, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setBooks([...books, newBook])
    setNewBook({
    title: '',
    author: '',
    })
  }

  return(
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}> 
          <label htmlFor="title">Title:</label>
          <input type="text" name='title' value={newBook.title} onChange={handleInputChange} />

          <label htmlFor="author">Author:</label>
          <input type="text" name='author' value={newBook.author} onChange={handleInputChange} />
          <button type="submit">Add</button>
        </form>
      </div>

      <div className="bookCardsDiv">
        {books.map( (book) => (

          <div className='bookCard'>
            <h3>{book.title}</h3>
            <span>{book.author}</span>  
          </div>

        ))}
      </div>
    </div>
  )
}

export default Bookshelf