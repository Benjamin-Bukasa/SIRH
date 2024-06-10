import Sidebar from "./components/Sidebar"
import Timeline from "./components/Timeline"


function App() {


  return (
    <>
      <div className="w-full h-screen flex justify-start items-start">
        <Sidebar/>
        <Timeline/>
      </div>
    </>
  )
}

export default App
