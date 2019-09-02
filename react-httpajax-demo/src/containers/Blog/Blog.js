import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state={
        posts:[],
        selectedId:null
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response=>{
                const posts=response.data.splice(0,4);
                const updatedPosts= posts.map(post=>{
                    return {
                        ...post,
                        author:'Max'
                    }
                })
                this.setState({posts:updatedPosts});
            })
    }

    selectedIdHandler=(id)=>{
        this.setState({selectedId:id});
    }


    render () {

        const posts=this.state.posts.map(post=>{
            return <Post key={post.id} 
            title={post.title} 
            author={post.author}
            clicked={()=>this.selectedIdHandler(post.id)}/>
        })

        return (
            <div>
                <section className="Posts">
                {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;