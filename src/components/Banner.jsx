import Profile from '../assets/banner.jpg'
import React from 'react';

const Banner = () => {
    return (
        <div
            className="rounded-lg max-w-[1320px] max-h-[600px] mx-auto overflow-hidden py-28 my-10"
            style={{
                backgroundImage: `url(${Profile})`,
                backgroundSize: 'cover', // Ensures the image covers the entire hero section
                backgroundPosition: 'center', // Centers the image
            }}>
            <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-4xl">
                    <h1 className="text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5">
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                    </p>
                    <div className='flex gap-10 justify-center'>
                        <button className="btn btn-success">Explore Now</button>
                        <button className="btn glass text-white">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;