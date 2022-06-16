import {useState} from 'react'

const NewComment = ({user, list, setList}) => {

    console.log(user)

const [input, setInput] = useState('')

const commentHandler = (e) => {
    console.log(e.target.value)
    setInput(e.target.value)
}

const commentSubmit = (e) => {
    e.preventDefault()

    const newComment = {
        personal_id: user.id,
        comment: input
    }

    fetch('/comments',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(newComment)
      })
      .then(r => r.json())
      .then(data => setList([data, ...list]))
      setInput('')
}

  return (
    <div>NewComment

        <form onSubmit={commentSubmit}>
            <input style={{textAlign: 'center', color: 'red'}} onChange={commentHandler} type='text' placeholder='say hi!' value={input} ></input>
        </form>
    </div>
  )
}

export default NewComment