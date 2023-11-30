import React, {Component} from 'react';
import YoutubeComponent from '../../YoutubeComponent/YoutubeComponent';

class Home extends Component{
    render(){
        return(
            <div>
            <p>Youtube Component</p>
            <YoutubeComponent time="7.20" title="Tutorial React Bagian - 1" desc="500x ditonton 10 hari yang lalu" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4O6VYWZwD-0DzDLUpwi6tqEwvw1QIxCTT0g&usqp=CAU" />
            <YoutubeComponent time="8.20" title="Tutorial React Bagian - 2" desc="500x ditonton 10 hari yang lalu" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOePNWT93vwpHCtezIGfxwV3MdNZIoqKa-fg&usqp=CAU" />
            <YoutubeComponent time="9.20" title="Tutorial React Bagian - 3 " desc="500x ditonton 10 hari yang lalu" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlhbEVoLcTzdmbu25RkOb-dkGFH9ZKercBxw&usqp=CAU" />
            <YoutubeComponent />
            </div>
        )
    }
}

export default Home;