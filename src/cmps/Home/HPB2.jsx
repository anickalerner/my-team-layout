import React from 'react'

export default function HPB2() {
    return (
        <section className="hp-block2 bg-light">
            <div>
                <h1>Delivering real results for top companies. Some of our success stories.</h1>
                <div className="stories flex">
                    <div className="story-card">
                        <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        <div className="author">
                            <p>Kady Baker</p>
                            <p>Product Manager at Bookmark</p>
                            <div>
                                <img src={require('../../assets/img/stories/story1.png')} alt="Kady Baker"/>
                            </div>
                        </div>
                    </div>
                    <div className="story-card">
                        <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                        <div className="author">
                            <p>Aiysha Reese</p>
                            <p>Founder of Manage</p>
                            <div>
                                <img src={require('../../assets/img/stories/story2.png')} alt="Aiysha Reese" />
                            </div>
                        </div>
                    </div>
                    <div className="story-card">
                        <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                        <div className="author">
                            <p>Arthur Clarke</p>
                            <p>Co-founder of MyPhysio</p>
                            <div>
                                <img src={require('../../assets/img/stories/story3.png')} alt="Arthur Clarke" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
