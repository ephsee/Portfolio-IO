import {useEffect, useState} from 'react'

const Comments = ({list}) => {

    // const [list, setList] = useState([])

    // useEffect(()=>{
    //     fetch('/comments')
    //     .then(r=>r.json())
    //     .then(setList)
    // },[])

    console.log(list)
    const showList = list.map( l => <h2 key={l.id}>{l.comment}</h2>)

  return (
    <div>
        <h3>Comments:</h3>
        {showList}
    </div>
  )
}

export default Comments