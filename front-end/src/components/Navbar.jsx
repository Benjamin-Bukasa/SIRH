

function Navbar(props) {


  return (
    <div className='w-full h-12 flex justify-between items-center bg-white p-2 shadow-sm rounded-md'>
        <p>{props.title}</p>
    </div>
  )
}

export default Navbar