import Entity from "./Entity"
import Navbar from "./Navbar"


function Timeline() {
  return (
    <div className="w-full h-screen flex flex-col justify-start gap-4 p-2 bg-slate-50">
        <Navbar/>
        <Entity/>
    </div>
  )
}

export default Timeline