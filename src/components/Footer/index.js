import React from 'react';
import "./footer.css"

function Comments() {
    return (
        <>
        <section class="comment-section">
            <div class="comments">
                <div class="sarah">
                    <div class="sarah-img">
                        <img alt='Sarah' src="/images/User Avatar.svg"/>
                        <div class="sarah-text">
                            <h4>Sarah Andrews</h4>
                            <p>$100 in revenue</p>
                        </div>
                    </div>
                    <p>Setting up my portfolio with Fİber <br />
                        took no more than 10 minuts,<br />
                        Since then, my portfolio has<br />attracted a lot of clients and<br />
                        made me more than $100k.</p>
                </div>
                <div class="matthew">
                    <div class="matthew-img">
                        <img alt='Matthew' src="/images/User Avatar 2.svg"/>
                        <div class="matthew-text">
                            <h4>Matthew Higgins</h4>
                            <p>$20 in revenue</p>
                        </div>
                    </div>
                    <p>I have been getting A LOT of<br />
                        leads ever since I used Fiber's<br />
                        premade templates, now I just<br />
                        need to work on my case studies<br />
                        and I'll be ready to go!</p>
                </div>
                <div class="janice">
                    <div class="janice-img">
                        <img alt='Janice' src="/images/User Avatar 32.svg"/>
                        <div class="janice-text">
                            <h4>Janice Dave</h4>
                            <p>$30 in revenue</p>
                        </div>
                    </div>
                    <p>I only just started freelancing this<br />
                        year and I hace already made<br />
                        more than I ecer made in my<br />
                        full-time job. The templates are<br />
                        just so amazing</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Comments;