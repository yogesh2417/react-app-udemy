import React, { Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import CssClasses from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component{

    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalCode:''
        },
        loading:false
    }

    orderHandler = (event) =>{
        event.preventDefault();
        console.log(this.props.ingredients);

        this.setState({loading:true});
        const order={
            ingredients:this.props.ingredients,
            price:this.props.totalPrice,
            customer:{
                name:"Yogesh",
                address:{
                    street:"testStreet",
                    zipCode:"123456",
                    country:"india"
                },
                email:"test@test.com"
            },
            deliveryMethod:"fastest"
        }
        axios.post("/orders.json",order)
        .then(response=>{
            this.setState({loading:false});
            this.props.history.push('/');
        })
        .catch(error=>{
        this.setState({loading:false});
        })


    }


    render(){

        let form = (
        <form>
            <input className={CssClasses.Input} type="text" name="name" placeholder="Enter your name"/>
            <input className={CssClasses.Input} type="text" name="email" placeholder="Enter your email"/>
            <input className={CssClasses.Input} type="text" name="street" placeholder="Enter your street"/>
            <input className={CssClasses.Input} type="text" name="postal" placeholder="Enter your postal"/>
            <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
        </form>
        );

        if (this.state.loading){
            form = <Spinner/>;
        }

        return(
            <div className={CssClasses.ContactData}>
                <h4>Enter your contact data.</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;