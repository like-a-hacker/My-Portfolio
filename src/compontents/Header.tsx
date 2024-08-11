
const Header = () => {
    const handlechange = () => {
        const element = document.getElementById('nv');
        if (element?.classList.contains('hidden')) {
            element.classList.remove('hidden');
        } else {
            element?.classList.add('hidden');
        }
    }
    const handleLinkClick = () => {
        handlechange();
      };
  return (
    <>
    <h1 className="text-2xl absolute top-5 left-5 text-white lg:hidden"><span className="text-green-500">MR.</span>GOWTHAM R</h1>
    <i className="absolute right-6 top-5 text-green-500 text-3xl lg:hidden  bi bi-list" onClick={handlechange}></i>
    <div id="nv" className="hidden nav-bar font-sourcecd lg:flex lg:justify-center lg:top-0 lg:right-0 w-fit absolute top-20 right-5 lg:fixed lg:border-t-0 lg:border-x-0 lg:border-b-2 border-2 rounded lg:p-0 p-5 border-green-500 lg:w-screen bg-transparent backdrop-blur shadow-2xx">
            <ul className="nav-ul flex gap-4 flex-col lg:flex-row p-2 text-xl justify-center text-white ">
                    <li className="hover:text-green-500 p-2 flex justify-center rounded"><a href="#" onClick={handleLinkClick}>// Home</a></li>
                    <li className="hover:text-green-500 p-2 flex justify-center rounded"><a href="#about" onClick={handleLinkClick}>// About</a></li>
                    <li className="hover:text-green-500 p-2 flex justify-center rounded"><a href="#project" onClick={handleLinkClick}>// Project</a></li>
                    <li className="hover:text-green-500 p-2 flex justify-center rounded"><a href="#exp" onClick={handleLinkClick}>// Experience</a></li>
                    <li className="hover:text-green-500 p-2 flex justify-center rounded"><a href="#contact" onClick={handleLinkClick}>// Contact</a></li>
            </ul>
    </div>
    </>
  )
}

export default Header