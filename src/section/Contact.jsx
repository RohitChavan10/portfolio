import React from 'react';
const Contact = () => {
    return(
        <section id='contact' className='min-h-screen px-6 py-20 bg-gray-100'>
            <div className='max-w-3xl mx-auto text-center'>
                <h2 className='text-3xl md:text-4xl font-bold text-indigo-600 mb-6'>
                        Get in Touch
                </h2>
                <p className='text-gray-700 mb-10'>
                    Want to collaborate or just say hi? Fill out the form below or email me directly.
                </p>

                <form action='https://formspree.io/mrbkajel'
                method='POST'
                className='space-y-6 text-left'
                >
                    <input 
                    type='text'
                    name='name'
                    required
                    placeholder='Your Name'
                    className='w-full p-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    />
                    <textarea
                    name='message'
                    required
                    rows='5'
                    placeholder='Your Message'
                    className='w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'>

                    </textarea>

                    <button type='submit'
                    className='bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition'>
                        Send Message
                    </button>

                </form>
                <p className='text-sm text-gray-500 mt-6'>
                    or email me at <a href='mailto:rohitchavanrc1011@gmail.com'>rohitchavanrc1011@gmail.com</a>
                </p>

            </div>

        </section>
    );
};

export default Contact;