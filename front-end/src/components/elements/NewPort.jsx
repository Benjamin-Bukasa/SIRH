import React from 'react'

const NewPort = () => {

const handleSubmit =()=>{
    console.log("submitted");
}

  return (
    <div className='w-full h-full flex flex-col gap-4 text-[16px]'>
      <h2 className="text-[25px] text-slate-600 font-semibold">Ajouter un Nouveau Portefeuille</h2>
      <form action="" onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className="w-full flex flex-col justify-between items-start gap-2 p-1 border border-slate-50 py-4">
            <h4 className='text-orange-500 font-bold text-[15px]'>Information du portefeuille</h4>
            <div className="w-full flex gap-2">
                <input type="text" placeholder='Nom du portefeuille' className='w-1/2 border h-10 p-1 rounded-sm outline-none'/>
                <input type="text" placeholder='Province' className='w-1/2 border h-10 p-1 rounded-sm outline-none'/>
                <input type="date" placeholder='Date de creation' className='w-1/2 border h-10 p-1 rounded-sm outline-none'value={Date.now()}/>
            </div>
        </div>
        <div className="w-full flex flex-col justify-between items-start gap-2 p-1 border border-slate-50 py-4">
            <h4 className='text-orange-500 font-bold text-[15px]'>Gestionnaires</h4>
            <div className="w-full flex gap-2">
                <input type="text" placeholder='Manager' className='w-1/2 border h-10 p-1 rounded-sm outline-none'/>
                <input type="text" placeholder='Superviseur' className='w-1/2 border h-10 p-1 rounded-sm outline-none'/>
                <input type="text" placeholder='HRBP' className='w-1/2 border h-10 p-1 rounded-sm outline-none'/>
            </div>
        </div>
        <div className="w-full h-[150px] flex flex-col justify-between items-start gap-2 p-1 border border-slate-50 py-4">
                <h4 className='text-orange-500 font-bold text-[15px]'>Commentaire</h4>
                <div className="w-full flex gap-2 h-full">
                    <textarea className='w-full h-full border outline-none p-2' placeholder='Autres informations sur le portefeuille'>

                    </textarea>
                </div>
        </div>
        <div className="w-full flex flex-col justify-between items-center gap-2 p-1 py-4">
                <button className=' w-80 h-12 bg-slate-600 text-white font-bold rounded-md hover:bg-orange-600 transition:ease-in-out duration-100'>Inscription</button>
        </div>
      </form>
    </div>
  )
}

export default NewPort
