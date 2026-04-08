import React from 'react';
import { Link } from 'react-router';


const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white px-4">
            
            <div className="text-center max-w-lg">
                
                {/* Big 404 */}
                <h1 className="text-8xl font-extrabold mb-4 drop-shadow-lg">
                    404
                </h1>

                {/* Title */}
                <h2 className="text-3xl font-bold mb-3">
                    Oops! Page Not Found
                </h2>

                {/* Description */}
                <p className="text-lg opacity-90 mb-6">
                    The page you are looking for doesn't exist or has been moved.
                </p>

                {/* Button */}
                <Link 
                    to="/"
                    className="inline-block bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-gray-100 transition duration-300"
                >
                    Go Back Home
                </Link>

            </div>

        </div>
    );
};

export default ErrorPage;