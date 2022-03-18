
const Contact = () => {
  return    (
      <div name='contact' className="bg-[#0a192f] w-full h-screen text-gray-300 flex justify-center items-center p-4">
          <form action="https://getform.io/f/dca77663-3f18-4892-bcbe-b1849cb984ba" method="POST" className="flex flex-col max-w-2xl w-full">
              <div className="pb-8">
                  <p className="text-4xl font-bold inline border-b-4 border-pink-600">Contact</p>
                  <p className="py-4">//Submit the form below or shoot me an email - harshdeepraghuwanshi@gmail.com</p>
              </div>
              
              <input className="p-2 bg-gray-500 " type="text" placeholder="Name" name='name' />
              <input className="p-2 my-4 bg-gray-500 " type="text" placeholder="Email" name='email' />
              <textarea className="bg-gray-500 p-2" name="message" rows='10' placeholder='Message'></textarea>
              <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-2 mx-auto my-8">Let's Collaborate</button>
          </form>
      </div>
  )
}

export default Contact