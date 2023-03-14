import CardAdd from "./CardAdd"
import Editor from "./Editor"

const PageHeader = () => {
  return (
    <div className="">
      <div className='fixed left-0 top-0 z-50 flex bg-gray-800 bg-opacity-70'>
        <Editor />
        <CardAdd />
      </div>
      <section className='logo fixed z-10 text-gray-400 h-20 w-48 top-0 right-0'>
        <div className='absolute -bottom-10 -left-8 -rotate-90 text-[3rem] '>
          prompt
        </div>
        <div className='absolute inset-y-0 right-2 block'>
          <div className='text-[5rem] mt-3'>Anna</div>
          <div className='text-2xl mt-3 float-right'>ReactTS</div>
        </div>
      </section>
    </div>
  )
}

export default PageHeader
