import { useState } from 'react';
import { Header } from '../components/Header';

export const Demo = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>(['email']); 
    const [selectedColor, setSelectedColor] = useState<string>('#ffffff'); 


    const handleOptionSelection = (option: string) => {
        if (selectedOptions.includes(option)) {
            setSelectedOptions(selectedOptions.filter((item) => item !== option)); 
        } else {
            setSelectedOptions([...selectedOptions, option]); 
        }
    };


    const handleColorChange = (e: any) => {
        setSelectedColor(e.target.value);
    };

    return (
        <div>
            <Header />
            <div className="flex h-screen justify-center items-center">
                <div className="border-2 border-gray-300 p-8 rounded-lg shadow-lg w-3/4 h-3/4">
                    <div className="md:flex h-full">
                        <div className="w-1/2 p-8 md:flex md:flex-col flex-row justify-center items-center md:border-r border-b">
                            <h2 className="text-3xl font-bold mb-8">Customize</h2>
                            <div className="flex items-center mb-8">
                                <label htmlFor="color" className="mr-2 text-gray-700 font-bold">
                                    Background Color:
                                </label>
                                <input
                                    type="color"
                                    id="color"
                                    value={selectedColor}
                                    onChange={handleColorChange}
                                    className="appearance-none w-8 h-8 rounded-full border border-gray-300 cursor-pointer"
                                    style={{ backgroundColor: selectedColor }}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {['email', 'google', 'apple', 'discord', 'github', 'twitter'].map((option) => (
                                    <div className="flex items-center border p-2 rounded-lg" key={option}>
                                        <label htmlFor={option} className="flex-grow cursor-pointer capitalize">
                                            {option}
                                        </label>
                                        <input
                                            type="checkbox"
                                            id={option}
                                            checked={selectedOptions.includes(option)}
                                            onChange={() => handleOptionSelection(option)}
                                            className="ml-2 cursor-pointer appearance-none h-5 w-5 border border-gray-400 rounded-sm checked:border-transparent focus:outline-none"
                                            style={{
                                                backgroundImage: selectedOptions.includes(option)
                                                    ? "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27black%27%3E%3Cpath fill-rule=%27evenodd%27 d=%27M13.854 3.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7 9.793l6.646-6.647a.5.5 0 0 1 .708 0z%27/%3E%3C/svg%3E')"
                                                    : 'none',
                                                backgroundSize: '100% 100%'
                                            }}/>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-1/2 p-8 flex justify-center items-center">
                            <div
                                className="max-w-md mx-auto p-6 bg-white border border-gray-300 rounded-xl shadow-md"
                                style={{ backgroundColor: selectedColor }}>
                                <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">Authentication</h2>

                                {selectedOptions.includes('email') && (
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            className="w-full py-2 px-3 text-gray-700 leading-tight border rounded focus:outline-none focus:shadow-outline"
                                            type="email"
                                            placeholder="Enter your email"/>
                                    </div>
                                )}
                                {selectedOptions.map((option) => option !== 'email' && (
                                    <button
                                        key={option}
                                        className="w-full bg-white border border-gray-300 hover:bg-gray-100 text-gray-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
                                        Sign In with {option.charAt(0).toUpperCase() + option.slice(1)}
                                    </button>
                                ))}
                                <button
                                    className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
