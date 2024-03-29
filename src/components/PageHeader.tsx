import CardAdd from "./CardAdd"
import Editor from "./Editor"

const PageHeader = () => {
  return (
    <div>
      <div className='fixed left-0 top-0 z-50 flex bg-gray-800 bg-opacity-70'>
        <CardAdd />
        <Editor />
      </div>
      <div>
        <div className='w-52 h-40 right-0 top-0 fixed bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate bg-opacity-20'></div>
        <div className='w-80 h-20 right-0 top-0 fixed bg-gray-50 bg-opacity-20'></div>
        <div className='w-40 h-80 right-0 top-0 fixed bg-gray-50 bg-opacity-20'></div>
        <section className='logo fixed z-10 text-gray-200 h-40 w-48 top-0 right-0'>
          <div className='absolute bottom-12 -left-8 -rotate-90 text-[3rem] '>
            prompt
          </div>
          <div className='absolute inset-y-0 right-2'>
            <div className='text-[5rem] mt-3'>Anna</div>
            <div className=' font-sans text-xl mt-4 float-right'>ReactTS</div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PageHeader
