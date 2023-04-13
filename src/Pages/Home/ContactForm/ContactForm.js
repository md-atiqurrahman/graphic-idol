import React, { useRef, useState } from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import Select from "react-select";


const ContactForm = () => {
    const [selectedOptions, setSelectedOptions] = useState();
    const form = useRef();

    const optionList = [
        { value: "Logo Design", label: "Logo Design" },
        { value: "Brand Style Guides", label: "Brand Style Guides" },
        { value: "Company Folder", label: "Company Folder" },
        { value: "Business Cards", label: "Business Cards" },
        { value: "Letterhead", label: "Letterhead" },
        { value: "Envelope", label: "Envelope" },
        { value: "Pattern Design", label: "Pattern Design" },
        { value: "Social Media Kit", label: "Social Media Kit" },
        { value: "Social Post Design", label: "Social Post Design" },
        { value: "Banner", label: "Banner" },
        { value: "Book Cover", label: "Book Cover" },
        { value: "Email Template", label: "Email Template" },
        { value: "Vector Tracing", label: "Vector Tracing" }
    ];

    const handleSelect = (data) => {
        setSelectedOptions(data);
    }

    const sendMail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7ul5kra', 'template_mtsfx5r', form.current, 'CgK1RkWuOLQ5gqBPe')
            .then((result) => {
                // console.log(result.text);
            }, (error) => {
                // console.log(error.text);
            });

        e.target.reset();
        setSelectedOptions('');
    }

    return (
        <section id='contacts' className='bg-[#d8edfe] pt-[100px]  text-black h-[642px]'>
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
                                <div className="focus:border-none">
                                    <Select
                                        name='service'
                                        options={optionList}
                                        placeholder="Which service do you need?"
                                        value={selectedOptions}
                                        onChange={handleSelect}
                                        isSearchable={true}
                                        isMulti
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-control mb-[8px]">
                                <textarea name='message' required className="textarea h-[140px] rounded-[5px] bg-white py-0 align-top" placeholder="Message"></textarea>
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

export default ContactForm;