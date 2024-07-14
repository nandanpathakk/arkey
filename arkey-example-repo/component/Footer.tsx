import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export const Footer = () => {
    return (
        <div className="bg-[#FCFCFD] p-8 md:p-32 font-[inter]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <div className="font-semibold text-2xl mb-4">ArKey</div>
                    <div className="text-xl mb-2">Arweave Hacker House #2</div>
                    <div className="text-gray-600">© 2024 ArKey. All rights reserved.</div>
                </div>
                <div>
                    <div className="font-semibold text-xl mb-4">Quick Links</div>
                    <div className="flex flex-col gap-2">
                        <div className="text-gray-600">About Us</div>
                        <div className="text-gray-600">Features</div>
                        <div className="text-gray-600">Docs</div>
                        <div className="text-gray-600">Security</div>
                        <div className="text-gray-600">Pricing</div>
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-xl mb-4">Follow Us</div>
                    <div className="flex gap-4">
                        <div>
                            <FaFacebook className="text-2xl text-gray-600" />
                        </div>
                        <div>
                            <FaTwitter className="text-2xl text-gray-600" />
                        </div>
                        <div>
                            <FaLinkedin className="text-2xl text-gray-600" />
                        </div>
                        <div>
                            <FaGithub className="text-2xl text-gray-600" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="font-semibold text-xl mb-4">Contact Us</div>
                    <div className="text-gray-600 mb-2">Email: support@arkey.com</div>
                    <div className="text-gray-600">Phone: (123) 456-7890</div>
                </div>
            </div>
        </div>
    );
};
