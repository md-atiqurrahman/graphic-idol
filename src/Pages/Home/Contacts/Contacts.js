import React from 'react';
import './Contacts.css';

const Contacts = () => {
    return (
        <section id='contacts' className='bg-[#d8edfe] pt-[100px] text-black h-[610px]'>
            <div className='pl-[120px] pr-[175px] flex items-start gap-[210px]'>
                <div>
                    <h2 className='text-[46px] leading-[70px] font-bold'>Let's Chat</h2>
                    <p className='text-[22px] leading-[32px] font-normal'>We'd love to get to know you, discuss your needs, and create
                        a plan for going forward. Please enter your information in the form below, and we'll contact you as soon as possible.</p>
                </div>
                <div>
                    <form className='w-[482px] h-auto'>
                        <div className="card-body p-0">
                            <div className="form-control mb-[8px]">
                                <input type="text" required placeholder="Your Name" className="input h-[60px] rounded-[5px] bg-[#fafafa]" />
                            </div>
                            <div className="form-control mb-[8px]">
                                <input type="email" required placeholder="Your Email" className="input h-[60px] rounded-[5px] bg-[#fafafa] " />
                            </div>
                            <div className="form-control mb-[8px]">
                                <textarea required className="textarea h-[140px] rounded-[5px] bg-[#fafafa] py-0 align-top" placeholder="Message"></textarea>
                            </div>
                            <div className="form-control mb-[8px]">
                                <input type="file" className="rounded-[4px] bg-[#fafafa] h-[46px] p-2" placeholder="Choose Files" accept=".tiff,.jpeg,.jpg,.gif,.png,.pdf,.psd,.ai,.eps,.dwg,.zip,.svg,.mp4,.avi" multiple />
                            </div>
                            <div className='w-[203px] px-[30px] py-[17px] bg-secondary rounded-[50px] text-white text-[18px] font-semibold cursor-pointer hover:bg-primary'>Send Message</div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacts;