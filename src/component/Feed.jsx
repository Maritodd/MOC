import React from 'react';
import '../style.scss';

function Feed(props) {

    return (
            <div key={props.id}>
                <section className="news">
                    <h2 className="news-title">{props.title}</h2>
                    <span className="news-date">{props.pubDate}</span>
                    <div className="news-link">
                        <a href={props.link}>{props.link}</a>
                    </div>
                    <p className="news-content">{props.content}</p>
                </section>
                <br/>
            </div>
    );
}

export default Feed;
