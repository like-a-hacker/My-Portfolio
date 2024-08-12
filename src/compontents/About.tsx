import Png from '../assets/my-photo.jpg'

const About = () => {
    
  return (
    <>
        <div className="lg:mx-5  flex  justify-center flex-wrap md:pt-24 pt-14" id="about">
            <div className="w-11/12 md:w-9/12 bg-transparent border-2 border-green-500 rounded shadow-2xy backdrop-blur">
                <div className="m-2 md:m-3">
                    <h1 className="text-white border-b border-green-500 px-2 lg:text-4xl text-2xl md:text-3xl lg:pb-3 pb-1 pt-3 flex gap-2">
                        <div><span className="text-green-500">Ab</span>out Me</div> 
                        <i className="bi bi-question-circle text-lg text-green-500"></i>
                    </h1>
                    <div className="grid lg:grid-cols-3 grid-cols-1  text-white">
                        <div className="my-4 lg:order-last flex justify-center align-middle">
                            <div className=""><img className='rounded' src={Png} alt="my-photo" /></div>
                        </div>
                        <div className="lg:col-span-2 md:col-span-1  my-4 mx-2">
                            <div className='mb-5 lg:text-xl md:text-lg font-sourcecd'>
                            Hello, I’m Gowtham Ramesh, and I have a strong passion for programming. 
                            I am currently pursuing a Bachelor of Engineering in Computer Science and
                             Engineering at University College of Engineering, Arni. I am a quick learner, 
                             especially when it comes to technical concepts.
                            </div>
                            <h1 className='lg:text-3xl text-xl md:text-2xl flex gap-1 text-green-500 mb-2'>
                                Education
                                <i className="bi bi-mortarboard-fill lg:text-lg md:text-base"></i>
                            </h1>
                            <div className='lg:ms-20 md:ms-16 ms-8 pl-5 border-l-2 my-0 font-sourcecd'>
                                <div>
                                    <h1 className='lg:text-xl md:text-lg'>University College of Engineering, Arni.<br/>
                                    (A constituent college of Anna University)</h1>
                                    B.E. Computer Science of Engineering,<br/>
                                    CGPA: 7.69(upto 5th SEM)<br/>
                                    2022-2025.
                                </div>
                                <div className='mt-4'>
                                    <h1 className='lg:text-xl md:text-lg'>Rajagopal Polytechnic College,Gudiyattam.</h1>
                                    Diploma in Civil Engineering.<br/>
                                    Percentage: 90%.<br/>
                                    2019-2021.
                                </div>
                                <div className="mt-4">
                                    <h1 className='lg:text-xl md:text-lg'>Thiruvalluvar Higher Sec School,Gudiyattam.</h1>
                                    Mark in 12th(Bio-Maths) : 308/600<br/>
                                    (2018-2019).<br/>
                                    Mark in 10th : 377/500<br/>
                                    (2016-2017).
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="mx-2 mb-6">
                            <h1 className='text-green-500 lg:text-3xl text-xl md:text-2xl mb-4 flex gap-1'>
                                Skills and tools 
                                <i className="bi bi-tools text-lg"></i>
                            </h1>
                            <div className="ms-10 md:ms-8 flex flex-wrap gap-2">
                                <i className="lg:text-6xl md:text-4xl text-3xl devicon-html5-plain-wordmark colored"></i>
                                <i className="lg:text-6xl md:text-4xl text-3xl devicon-css3-plain-wordmark colored"></i>
                                <i className="lg:text-6xl md:text-4xl text-3xl devicon-javascript-plain colored"></i>
                                <i className="lg:text-6xl md:text-4xl text-3xl devicon-java-plain-wordmark colored"></i>
                                <i className="lg:text-6xl md:text-4xl text-3xl devicon-python-plain-wordmark colored"></i>
                                <i className="lg:text-6xl md:text-4xl text-3xl devicon-react-original-wordmark colored"></i>
                                <i className="lg:text-6xl md:text-4xl text-3xl devicon-nodejs-plain-wordmark colored"></i>
                                <i className="lg:text-6xl md:text-4xl text-3xl devicon-mongodb-plain-wordmark colored"></i>
                                <i className="lg:text-6xl md:text-4xl text-3xl devicon-express-original-wordmark colored"></i>
                                <i className="lg:text-6xl md:text-4xl text-3xl devicon-php-plain colored"></i>
                                <i className="lg:text-6xl md:text-4xl text-3xl devicon-git-plain-wordmark colored"></i>
                                <i className="lg:text-6xl md:text-4xl text-3xl devicon-github-original-wordmark colored"></i>
                                <i className="lg:text-6xl md:text-4xl text-3xl devicon-vscode-plain-wordmark colored"></i>
          
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default About