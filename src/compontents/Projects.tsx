import Prj1 from '../assets/project/oneproj.png' 
import Prj2 from '../assets/project/nit.png'


const Projects = () => {
  return (
    <>
        <div className="lg:mx-5 flex flex-wrap justify-center md:pt-24 pt-14 " id="project">
            <div className="w-11/12 md:w-9/12 bg-transparent border-2 border-green-500 rounded shadow-2xy backdrop-blur">
                <div className="m-2 md:m-3">
                    <h1 className="text-white border-b border-green-500 px-2 lg:text-4xl md:text-3xl text-2xl lg:pb-3 pb-1 pt-3 flex  gap-3">
                        <div><span className="text-green-500">Pro</span>jects</div>
                        <svg aria-hidden="true" width='22px' focusable="false" data-prefix="fas" data-icon="laptop-code" className="svg-inline--fa fa-laptop-code text-green-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"></path></svg>
                    </h1>
                    <div className="text-white my-8 flex flex-col gap-5">
                        <div className="border-2 border-green-500 rounded-lg ">
                            <div className="p-3">
                                <div className='mb-3 flex align-middle justify-between '>
                                    <h1 className='text-green-500 lg:text-3xl md:text-2xl text-xl '>File-Sharing Website</h1>
                                    <h1 className='lg:text-xl md:text-lg text-base'>Duration:6 Months.</h1>
                                </div>
                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 mx-4 font-sourcecd">
                                    <div>
                                        <a href="https://project2-uwcm.onrender.com/index.html"><img className='rounded opacity-70 hover:opacity-100' src={Prj1} alt="filesharingweb" /></a>
                                    </div>
                                    <div>
                                    <h1 className='lg:text-2xl md:text-xl text-lg mb-5'>Real-Time File Sharing Website.</h1>
                                    Here we can easily share the all type of data by using a single room,
                                    it was build over the websockets using socket.io api.
                                    <div className='mt-5 flex gap-3 flex-wrap'>
                                        <i className="lg:text-6xl md:text-4xl text-3xl devicon-html5-plain-wordmark colored"></i>
                                        <i className="lg:text-6xl md:text-4xl text-3xl devicon-css3-plain-wordmark colored"></i>
                                        <i className="lg:text-6xl md:text-4xl text-3xl devicon-javascript-plain colored"></i>
                                        <i className="lg:text-6xl md:text-4xl text-3xl devicon-nodejs-plain-wordmark colored"></i>
                                        <i className="lg:text-6xl md:text-4xl text-3xl devicon-express-original-wordmark colored"></i>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-2 border-green-500 rounded-lg ">
                            <div className="p-3">
                                <div className='mb-3 flex align-middle justify-between'>
                                    <h1 className='text-green-500 lg:text-3xl md:text-2xl text-xl'>Dynamic portfolio Website.</h1>
                                    <h1 className='lg:text-xl md:text-lg text-base'>Duration:1 Months.</h1>
                                </div>
                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-3 mx-4 font-sourcecd">
                                    <div>
                                        <a href="#"><img className='rounded opacity-70 hover:opacity-100' src={Prj2} alt="filesharingweb" /></a>
                                    </div>
                                    <div>
                                    <h1 className='lg:text-2xl md:text-xl text-lg mb-5'>Dynamic portfolio Website.</h1>
                                    This project is collaborated project, I recently attend the internship with my friends 
                                    on NITPY karaikal. They given certain task like create admin panel and it will connect with client side 
                                    a user or owner of the website change the client side using the admin panel.
                                    <div className='mt-5 flex gap-3 flex-wrap'>
                                        <i className="lg:text-6xl md:text-4xl text-3xl devicon-html5-plain-wordmark colored"></i>
                                        <i className="lg:text-6xl md:text-4xl text-3xl devicon-css3-plain-wordmark colored"></i>
                                        <i className="lg:text-6xl md:text-4xl text-3xl devicon-react-original-wordmark colored"></i>
                                        <i className="lg:text-6xl md:text-4xl text-3xl devicon-nodejs-plain-wordmark colored"></i>
                                        <i className="lg:text-6xl md:text-4xl text-3xl devicon-express-original-wordmark colored"></i>
                                        <i className="lg:text-6xl md:text-4xl text-3xl devicon-mongodb-plain-wordmark colored"></i>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Projects