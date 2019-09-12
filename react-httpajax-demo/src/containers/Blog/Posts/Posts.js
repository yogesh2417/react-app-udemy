import React,{Component} from 'react';
import axios from 'axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

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
                return <Post key={post.id} 
                title={post.title} 
                author={post.author}
                clicked={()=>this.selectedIdHandler(post.id)}/>
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