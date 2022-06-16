const Comments = ({list}) => {

  // let aColor = Math.floor(Math.random()*16777215).toString(16);

    console.log(list)
    const showList = list.map( l => <h2 style={{color : "#" + Math.floor(Math.random()*16777215).toString(16)}} key={l.id}>{l.comment}</h2> )

  return (
    <div>
        <h3>Comments:</h3>
        {showList}
    </div>
  )
}

export default Comments