import { Component } from 'react';
import './App.css';
import { PostCard } from './components/PostCard';
import Button from './components/Button/Button';

const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white',
  fontSize: '1.2rem',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
};
class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos');

    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url }
    });

    this.setState({ posts: postsAndPhotos });
  }
  

  render() {
    const { posts } = this.state;

    return (
      
      <section className="container">
  <Button text="Env" />
        <div className="posts">
          {posts.map(post => (
            <PostCard 
              key={post.id}
              title={post.title} 
              body={post.body}
              id={post.id}
              cover={post.cover}
            />
          ))}
        </div>
       
      </section>
    );
  }
  
}

export default App;
