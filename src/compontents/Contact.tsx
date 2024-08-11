import Svg from '../assets/1184889.svg'
import { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const sendMail = (str: string | number | boolean) => {
        const link = `mailto:gowthamramesh.pub@gmail.com?subject=${encodeURIComponent("Say Hello")}&body=${encodeURIComponent(str)}`;
        window.location.href = link;
    };
    const submitComment = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const { name, email, message } = formData;
        if (name && email  && location && message) {
            sendMail(message);
        }
    };
  return (
    <>
        <div className="lg:mx-5  flex justify-center flex-wrap md:py-24 py-14 " id="contact">
            <div className="w-11/12 md:w-9/12 bg-transparent border-2 border-green-500 rounded shadow-2xy backdrop-blur">
                <div className="m-2 md:m-3">
                    <h1 className="text-white border-b border-green-500 px-2 lg:text-4xl text-2xl md:text-3xl lg:pb-3 pb-1 pt-3 flex  gap-3">
                        <div><span className="text-green-500">Con</span>tact Me</div>
                        <i className="bi bi-envelope text-lg text-green-500"></i>
                    </h1>
                    <div className="grid lg:grid-cols-2 text-white p-3 gap-3">
                        <div className="border flex justify-center align-middle border-green-500 rounded">
                            <img className='' src={Svg} alt="contact" />
                        </div>
                        <div className="border border-green-500 rounded">
                        
                                <form className='flex flex-col p-2 gap-5 text-green-500' onSubmit={submitComment} name="contact_form">
                                    <input  name="name" value={formData.name} onChange={handleChange} className="bg-transparent border border-green-500 rounded p-3 w-full" type="text" placeholder="Enter Name" />
                                    <input name="email" value={formData.email} onChange={handleChange} className="bg-transparent border border-green-500 rounded p-3 w-full" type="email" placeholder="Enter Email" />
                                    <textarea name="message" value={formData.message} onChange={handleChange} className="w-full bg-transparent rounded border border-green-500 p-3 resize-none" placeholder="Message" rows={10} ></textarea>
                                    <div className="flex justify-center align-middle">
                                        <button type='submit' className="border border-green-500 p-2 rounded text-green-500  hover:bg-green-500 hover:text-black">Message</button>
                                    </div>
                                </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact