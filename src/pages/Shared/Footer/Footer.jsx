import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagramSquare, FaTwitter, FaYoutube, FaLinkedin, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer mt-32 p-20 bg-black text-base-content">
            <div className='text-white font-bold text-3xl'>
                <p>DrawWiseCamp</p>
            </div>
            <div className='text-white'>
                <span className="footer-title">Contact Us</span>
                <div className="contact-info space-y-2">
                    <a className='flex items-center' href="tel:+8801712345678">
                        <FaPhone className="mr-2" /> +8801712345678
                    </a>
                    <a className='flex items-center' href="kingdomoftoys@info.com">
                        <FaEnvelope className="mr-2" /> DrawWiseCamp@info.com
                    </a>

                    <a className='flex items-center' href="https://maps.google.com">
                        <FaMapMarkerAlt className="mr-2" /> Dhanmondi 27, Dhaka, Bangladesh
                    </a>
                </div>

            </div>
            <div className='text-white'>
                <span className="footer-title">Social</span>
                <div className="grid grid-flow-col  gap-4">
                    <a href='https://twitter.com/'>
                        <FaTwitter className="mr-2" />
                    </a>
                    <a href='https://www.youtube.com/'>
                        <FaYoutube className="mr-2" />
                    </a>
                    <a href='https://www.instagram.com/'>
                        <FaInstagramSquare className="mr-2" />
                    </a>
                    <a href='https://www.facebook.com/'>
                        <FaFacebookSquare className="mr-2" />
                    </a>
                    <a href="https://www.linkedin.com/">
                        <FaLinkedin className="mr-2" />
                    </a>
                </div>
                <div>
                </div>
                <p>Copyright © 2023 -  All right reserved by DrawWiseCamp</p>
            </div>
        </footer>

    );
};

export default Footer;