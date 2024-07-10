export const Wallet = () => {
    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white border border-gray-300 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Authentication</h2>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email Address
                </label>
                <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Enter your email" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                </label>
                <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    placeholder="Enter your password" />
                <p className="text-sm text-blue-500 cursor-pointer">Forgot Password?</p>
            </div>
            <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4">
                Login
            </button>
            <div className="flex justify-center mb-2 text-gray-600">OR</div>
            <button className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-4">
                Sign Up with Google
            </button>
        </div>
    );
};
