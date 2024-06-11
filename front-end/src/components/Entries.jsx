

function Entries() {

const handleSubmit = ()=>{
    console.log('Submitted !');
}



  return (
    <div className="">
        <form action="" onSubmit={handleSubmit}>
            <input type="file" placeholder=""/>
        </form>
    </div>
  )
}

export default Entries