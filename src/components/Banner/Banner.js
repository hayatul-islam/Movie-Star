import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-section d-flex align-items-center text-white">
            <div className="container">
                <p className="text-warning">ACTION, ADVENTURE, FANTASY</p>
                <h1>End of the World: Part II</h1>
                <p style={{ maxWidth: '900px' }}>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum.</p>
                <div className="btn btn-warning px-5 py-3 rounded-pill">Play now</div>
            </div>
        </div>
    );
};

export default Banner;