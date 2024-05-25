import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import backgroundImage from '../../assets/bg1.jpg'

function Contact() {
  

  const sendEmail = (e) => {
    e.preventDefault();

    const formElement = e.target;

    emailjs.sendForm(
      "service_f2h6n5m",
      "template_d7oawwr",
      formElement,
      "D_bES6Cy1hgbX9-dk")
      .then((result) => {
          console.log(result.text);
          toast.success('Message send Successfully!')
          formElement.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div id='contacts'  onSubmit={sendEmail} className="flex flex-col items-center pt-8" style={{ backgroundImage: `url(${backgroundImage})` }} >
        <div className="flex flex-col items-center gap-8 mt-8 px-4">
            <h3 className="text-4xl font-customFont1 mt-8 text-gray-600 flex flex-col items-center">
              CONTACT
              <p className="border-b-4 border-purple-700 border-full mt-3 w-16 place-self-center"></p>
            </h3>
            <p className="text-center text-lg font-customFont1 font-semibold mb-6 text-gray-600">Feel free to Contact me by submitting the form below and I will get back to you as soon as <br className='hidden lg:block'/> possible</p>
        </div>
        
            <form className="flex flex-col gap-4 lg:w-1/2 bg-gray-100 p-8 rounded mb-8">
                <label htmlFor="name" className="font-semibold text-gray-600">Name</label>
                <input type="text" id="name" placeholder="Enter Your Name" name='user_name' className="rounded px-3 py-4 outline-none"/>

                <label htmlFor="email" className="font-semibold text-gray-600">Email</label>
                <input type="email" id="email" placeholder="Enter Your Email" name='user_email' className="rounded px-3 py-4 outline-none"/>

                <label htmlFor="message" className="font-semibold text-gray-600">Message</label>
                <textarea name="message" id="message" cols="20" rows="10" placeholder="Enter Your Message" className="rounded px-3 py-4 outline-none"></textarea>
                 
                 <button type='submit' value="Send" className="ml-5 my-8 bg-purple-700 hover:bg-purple-600 text-white py-3 px-8 rounded-xl font-semibold self-end text-sm">SUBMIT</button>
            </form>
       
    </div>
  )
}

export default Contact