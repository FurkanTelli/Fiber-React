import React from 'react';
import "./middle.css";


function MiddlePage() {
    return (
        <>
                    <section class="second-section">
            <a href="#">Why Fiber?</a>
            <h1>A good portfolio<br />
                means good<br />
                employability</h1>
            <div class="hour-custom-responsive">
                <div class="hour">
                    <img alt='time' class="second-img" src="/images/time.svg"/>
                    <h3>Build in minutes</h3>
                    <p>With a selection of premade templates,<br />
                        you can buit out a portfolio in less<br />
                        than 10 minutes</p>
                </div>
                <div class="custom">
                    <img alt='code' class="second-img" src="/images/code.svg"/>
                    <h3>Add custom CSS</h3>
                    <p>Customize your personal portfolio<br />
                        even more with the ability to add your<br />
                        own custom CSS styles</p>
                </div>
                <div class="responsive">
                    <img alt='all sizes' class="second-img" src="/images/allSizes.svg"/>
                    <h3>Responsive</h3>
                    <p>All Fiber templates are fully responsive<br />
                        to ensure the experience is seemless<br />
                        across all devices</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default MiddlePage;