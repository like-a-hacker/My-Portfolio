
const Footer = () => {
  return (
    <>
        <div className=" text-white bg-transparent pb-5 border-t border-green-500 rounded ">
            <div className="">
                <div className="flex justify-center">
                    <ul className="flex flex-col md:flex-row gap-5 p-5 pt-10 text-xl justify-center text-green-500 border-b-2 border-dotted border-gray-500">
                   
                        <li className="hover:text-white flex justify-center p-2 rounded"> <a href="#">Home</a></li>
                    
                   
                        <li className="hover:text-white flex justify-center p-2 rounded"> <a href="#about">About</a></li>
                    
                   
                        <li className="hover:text-white flex justify-center p-2 rounded"> <a href="#project">Project</a></li>
                    
                   
                        <li className="hover:text-white flex justify-center p-2 rounded"> <a href="#exp">Experience</a></li>
                    
                   
                        <li className="hover:text-white flex justify-center p-2 rounded"> <a href="#contact">Contact</a></li>
                    
                    </ul>
                </div>
                <div className="flex justify-center items-center text-green-500">
                    <div className="flex justify-center w-fit gap-5 py-4 ">
                        <a href="https://github.com/like-a-hacker/"><i className="bi bi-github hover:text-white"></i></a>
                        <a href="https://www.linkedin.com/in/gowtham--r/"><i className="bi bi-linkedin hover:text-white"></i></a>
                        <a href="https://www.instagram.com/gowtham__ramesh_03/"><i className="bi bi-instagram hover:text-white"></i></a>
                    </div>
                </div>
                <div className="flex justify-center text-green-500 ">
                    <span className="border-t-2 pt-5 border-dotted border-gray-500">Designed By <span className="font-kaushan">Gowtham Ramesh</span>.</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer