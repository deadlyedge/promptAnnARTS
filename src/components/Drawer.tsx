import { FC, ReactElement } from "react"

interface IDrawer {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const Drawer: FC<IDrawer> = ({ isOpen, setIsOpen }): ReactElement => {
  console.log("Drawer")
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-y-0  "
          : " transition-all delay-500 opacity-0 translate-y-full  ")
      }>
      <section
        className={
          " h-screen max-h-28 bottom-0 absolute bg-white w-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform text-xs " +
          (isOpen ? " translate-y-0 " : " translate-y-full ")
        }>
        <div className='p-4 text-gray-700'>
          <p>
            This project is made for fun. It's used several API for informations
            / images.
          </p>
          <p>Here's a list:</p>
          <p className="text-gray-400">'Today in history' from numbersapi.com --
          'Quotes' from quote-garden and favqs.com -- 'Images' from pixabay.com -- 'translate' by deepl.com and microsoft azure </p>
          <p className="float-right text-gray-300"> - xdream oldlu: an old student</p>
        </div>
      </section>
      <section
        className=' h-screen w-full cursor-pointer '
        onClick={() => setIsOpen(false)}></section>
    </main>
  )
}

export default Drawer
