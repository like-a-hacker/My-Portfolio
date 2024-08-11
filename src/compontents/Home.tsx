import Typing from "./Typing"


const Home = () => {
  const phrases1 = ['Hi, I`m GOWTHAM RAMESH'];
  const delay1 = 200;
  return (
    <>
        <div className="lg:mx-5 mx-2 font-sourcecd" id="home">
            <div className="flex flex-wrap justify-center items-center flex-col h-screen">
                <div className="bg-zinc-800 shadow-2xy border border-green-500 rounded-lg p-3 md:p-5 flex justify-center items-center flex-col gap-5">
                  <h1 className="">
                  <Typing phrases={phrases1} delay={delay1}/>
                  </h1>
                  <h1 className="text-sm md:text-lg lg:text-2xl text-white">
                  SOFTWARE ENGINEER, FRONTEND & WEB DEVELOPER.
                  </h1>
                </div>
            </div>
        </div>
        <div className="fixed bottom-0 left-4 z-10 text-green-500 flex border h-40 w-0">
          <div className="relative top-0 flex flex-col transform -translate-y-20 -translate-x-2">
            <a href="https://github.com/like-a-hacker/"><i className="bi bi-github hover:text-white"></i></a>
            <a href="https://www.linkedin.com/in/gowtham--r/"><i className="bi bi-linkedin hover:text-white"></i></a>
            <a href="https://www.instagram.com/gowtham__ramesh_03/"><i className="bi bi-instagram hover:text-white"></i></a>
          </div>
        </div>
    </>
  )
}

export default Home