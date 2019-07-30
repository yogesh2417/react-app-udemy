import React,{Component} from 'react';


//use this class to wrap the component like person component in app.js whenever person component has encounter error this class will display custom error message on production.

class ErrorBoundary extends Components{
    state={
        hasError:false,
        errorMessage:''
    }

    componentDidCatch = (error,info) =>{
        this.setState({hasError:true,errorMessage:error});
    }

    render(){
        if (this.state.hasError){
            return <h1>{this.state.errorMessage}</h1>
        }else
        return this.props.children;
    }
}

export default ErrorBoundary;