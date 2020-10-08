import React from 'react';
import Feed from "./Feed";
import '../style.scss';


let Parser = require('rss-parser');
let parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
let RSS_URL = `http://rss.cnn.com/rss/edition.rss`;

class FeedContainer extends React.Component {
    state = {
        feed: [],
        count: 0,
    };

    handleClick = () => {
        this.setState({count: this.state.count + 1 });
    }

    async componentDidMount() {

        const feed = await parser.parseURL(CORS_PROXY + RSS_URL);
        this.setState(feed)
    }

    render() {
        let newFeedContent = this.state.items && this.state.items.map(e => <Feed id={e.id} title={e.title}
                                                                                 pubDate={e.pubDate} link={e.link}
                                                                                 content={e.content}/>);
        return (
            <div className="Feed">
                <div className="Feed-container">
                    <h1 className="news-name">Blog CNN</h1>
                    {newFeedContent}
                </div>
                <div className="Feed-subscriber">
                        <h2 className="Feed-subscriber__num">Subscribers: {this.state.count}</h2>
                        <button className="Feed-subscriber__btn" onClick={this.handleClick}>Subscribe</button>
                    </div>
            </div>
        );
    }
}

export default FeedContainer;





