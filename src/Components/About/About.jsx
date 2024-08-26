import React from 'react'
import { Link} from 'react-router-dom'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/011/382/026/original/group-of-business-people-having-discussion-in-conference-room-3d-character-illustration-png.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        The Importance of the Internet in Modern Society
                        </h2>
                        <p className="mt-6 text-gray-600">
                        The Internet has become an essential part of daily life, transforming the way we communicate, work, and access information. It connects billions of people worldwide, enabling instant communication and collaboration across vast distances. 
                        The Internet has revolutionized industries, from education to healthcare, by providing access to a wealth of knowledge and resources at our fingertips.
                        </p>
                        <p className="mt-4 text-gray-600">
                        Furthermore, it has fostered innovation, creating new opportunities for businesses and individuals alike. As the backbone of the digital age, 
                        the Internet continues to shape our world, making it more interconnected and efficient.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}