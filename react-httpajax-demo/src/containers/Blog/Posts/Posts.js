import React,{Component} from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
import {Link} from 'react-router-dom';

class Posts extends Component {
    state={
        posts:[]
    }

    componentDidMount(){
        axios.get("/posts")
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
            .catch(error=>{
                console.log(error);
            })
    }


    selectedIdHandler=(id)=>{
        this.setState({selectedId:id});
    }

    render(){
        let posts=<p style={{textAlign:'center'}}>Something Went Wrong!!!</p>
        if(!this.state.error){
            posts=this.state.posts.map(post=>{
                return (
                    <Link to={'/'+ post.id} key={post.id}>
                    <Post  
                title={post.title} 
                author={post.author}
                clicked={()=>this.selectedIdHandler(post.id)}/>
                    </Link>
                ) 
            })
        }
        return(
            <section className="Posts">
                {posts}
                </section>
        )
    }
}

export default Posts;