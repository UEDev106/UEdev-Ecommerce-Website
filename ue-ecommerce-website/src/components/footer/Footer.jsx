// Footer.jsx
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="text-white-600 body-font bg-gray-700">
                <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
                    <Link 
                        to="/" 
                        className="flex title-font font-medium items-center md:justify-start justify-center text-white"
                    >
                        <span className="text-xl font-bold">UE-Developer</span>
                    </Link>
                    <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2024 UEDev —
                        <Link
                            to="/"
                            className="text-gray-100 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            @Ecommerce
                        </Link>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a 
                            href="https://www.facebook.com/aliraza.watto.336" 
                            className="text-white cursor-pointer p-2 rounded-full bg-blue-700 hover:bg-blue-900 transform hover:scale-125 transition duration-300" 
                            aria-label="Facebook"
                        >
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                            </svg>
                        </a>

                        <a 
                            href="https://x.com/Ue_dev106?t=eo-SY5-OJ4Z5fy4Cbgkvqg&s=09" 
                            className="ml-3 text-white cursor-pointer p-2 rounded-full bg-blue-500 hover:bg-blue-700 transform hover:scale-125 transition duration-300" 
                            aria-label="Twitter"
                        >
                            <svg
                                fill="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                            </svg>
                        </a>

                        <a 
                            href="https://www.instagram.com/woo_nhee_hunn_maen?igsh=YzljYTk1ODg3Zg==" 
                            className="ml-3 text-white cursor-pointer p-2 rounded-full bg-pink-500 hover:bg-pink-700 transform hover:scale-125 transition duration-300" 
                            aria-label="Instagram"
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                            </svg>
                        </a>

                        <a 
                            href="https://www.linkedin.com/in/aliraza106?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                            className="ml-3 text-white cursor-pointer p-2 rounded-full bg-blue-700 hover:bg-blue-800 transform hover:scale-125 transition duration-300" 
                            aria-label="LinkedIn"
                        >
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path d="M3 2h18a2 2 0 012 2v16a2 2 0 01-2 2H3a2 2 0 01-2-2V4a2 2 0 012-2zm4.82 14.56h3.12v-4.89c0-1.17.02-2.68 1.64-2.68 1.64 0 1.9 1.28 1.9 2.6v5.01h3.12v-5.36c0-2.88-1.55-4.21-3.61-4.21-1.67 0-2.41.93-2.82 1.57h.02V8.93H7.82c.05 1.12 0 12.63 0 12.63z" />
                            </svg>
                        </a>

                        <a 
                            href="https://github.com/UEDev106" 
                            className="ml-3 text-white cursor-pointer p-2 rounded-full bg-gray-800 hover:bg-black transform hover:scale-125 transition duration-300" 
                            aria-label="GitHub"
                        >
                            <svg
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={0}
                                className="w-5 h-5"
                                viewBox="0 0 24 24"
                            >
                                <path fill="currentColor" d="M12 0a12 12 0 00-3.8 23.39c.6.12.82-.26.82-.58v-2.02c-3.34.72-4.05-1.61-4.05-1.61a3.18 3.18 0 00-1.33-1.75c-1.09-.74.08-.73.08-.73a2.52 2.52 0 011.76 1.18 2.56 2.56 0 003.5.98 2.55 2.55 0 01.76-1.6c-2.67-.3-5.47-1.33-5.47-5.93a4.64 4.64 0 011.24-3.22 4.3 4.3 0 01.11-3.17s1-.32 3.3 1.23a11.28 11.28 0 017.09 0c2.3-1.55 3.3-1.23 3.3-1.23a4.29 4.29 0 01.12 3.17 4.64 4.64 0 011.23 3.22c0 4.61-2.8 5.63-5.47 5.93a2.88 2.88 0 01.82 2.24v3.33c0 .32.22.7.83.58A12 12 0 0012 0z" />
                            </svg>
                        </a>
                    </span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
