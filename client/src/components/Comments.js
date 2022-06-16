const Comments = ({list}) => {

    console.log(list)
    const showList = list.map( l => <h2 key={l.id}>{l.comment}</h2> )

  return (
    <div>
        <h3>Comments:</h3>
        {showList}
    </div>
  )
}

export default Comments