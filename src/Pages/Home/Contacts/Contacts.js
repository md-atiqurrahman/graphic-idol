import React, { useRef } from 'react';
import './Contacts.css';
import emailjs from '@emailjs/browser';


const Contacts = () => {
    const form = useRef();

    const sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7ul5kra', 'template_mtsfx5r', form.current, 'CgK1RkWuOLQ5gqBPe')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <section id='contacts' className='bg-[#d8edfe] pt-[100px] text-black h-[620px]'>
            <div className='pl-[120px] pr-[175px] flex items-start gap-[210px]'>
                <div>
                    <h2 className='text-[46px] leading-[70px] font-bold'>Let's Chat</h2>
                    <p className='text-[22px] leading-[32px] font-normal'>We'd love to get to know you, discuss your needs, and create
                        a plan for going forward. Please enter your information in the form below, and we'll contact you as soon as possible.</p>
                </div>
                <div>
                    <form ref={form} onSubmit={sendMail} className='w-[482px] h-auto'>
                        <div className="card-body p-0">
                            <div className="form-control mb-[8px]">
                                <input type="text" name='user_name' required placeholder="Your Name" className="input h-[60px] rounded-[5px] bg-[#fafafa] focus:bg-white" />
                            </div>
                            <div className="form-control mb-[8px]">
                                <input name='user_email' type="email" required placeholder="Your Email" className="input h-[60px] rounded-[5px] bg-[#fafafa] focus:bg-white" />
                            </div>
                            <div className="form-control mb-[8px]">
                                <select name='service' required className="select  w-full font-normal">
                                    <option value='' selected>
                                        Which service do you need?
                                    </option>
                                    <option value='Logo Design'>Logo Design</option>
                                    <option value='Brand Style Guides'>
                                        Brand Style Guides
                                    </option>
                                    <option value='Company Folder'>
                                        Company Folder
                                    </option>
                                    <option value='Business Cards'>
                                        Business Cards
                                    </option>
                                    <option value='Letterhead'>Letterhead</option>
                                    <option value='Envelope'>Envelope</option>
                                    <option value='Pattern Design'>
                                        Pattern Design
                                    </option>
                                    <option value='Social Media Kit'>
                                        Social Media Kit
                                    </option>
                                    <option value='Social Post Design'>
                                        Social Post Design
                                    </option>
                                    <option value='Banner'>Banner</option>
                                    <option value='Book Cover'>Book Cover</option>
                                    <option value='Email Template'>
                                        Email Template
                                    </option>
                                    <option value='Vector Tracing'>
                                        Vector Tracing
                                    </option>
                                </select>
                            </div>
                            <div className="form-control mb-[8px]">
                                <textarea name='message' required className="textarea h-[140px] rounded-[5px] bg-[#fafafa] py-0 align-top" placeholder="Message"></textarea>
                            </div>
                            {/* <div className="form-control mb-[8px]">
                                <input type="file" className="rounded-[4px] bg-[#fafafa] h-[46px] p-2" placeholder="Choose Files" accept=".tiff,.jpeg,.jpg,.gif,.png,.pdf,.psd,.ai,.eps,.dwg,.zip,.svg,.mp4,.avi" multiple />
                            </div> */}
                            <input type='submit' value='Send Message' className='w-[203px] px-[30px] py-[17px] bg-secondary rounded-[50px] text-white text-[18px] font-semibold cursor-pointer hover:bg-primary' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacts;