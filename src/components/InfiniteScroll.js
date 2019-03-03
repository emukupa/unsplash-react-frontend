import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './Image';
import './InfiniteScroll.css';

export class componentName extends Component {
  state = {
    start: 1,
    count: 10,
    images: [],
    error: null,
  };

  componentDidMount() {
    this.fetchImages();
  }

  updateState = () => {
    console.log('Heloo');
    this.setState(
      {
        start: this.state.start + this.state.count,
      },
      this.fetchImages
    );
  };

  fetchImages = async () => {
    const { start, count } = this.state;

    try {
      const response = await axios.get(
        `/api/photos?start=${start}&count=${count}`
      );
      const images = this.state.images.concat(response.data);
      this.setState({
        images,
      });
    } catch (e) {
      console.log(e);
      this.setState({
        error: 'Error occurred',
      });
    }
  };
  render() {
    return (
      <InfiniteScroll
        className="Images"
        dataLength={this.state.images.length}
        next={this.updateState}
        hasMore={true}
        loader={<h3>Loading....</h3>}
      >
        {this.state.images.map(image => (
          <Image key={image.id} image={image} />
        ))}
      </InfiniteScroll>
    );
  }
}

export default componentName;
