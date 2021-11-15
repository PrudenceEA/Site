import React, {Component} from 'react';
import Field from './Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';
const fields ={
    sections:[
    [
        {name:'name', elementName:'input', type:'text', placeholder:'Your Name'},
        {name:'email', elementName:'input', type:'email', placeholder:'Your Email'},
        {name:'phone', elementName:'input', type:'text', placeholder:'Your Phone Number'},
    ],
    [
        {name:'message', elementName:'textarea', type:'text', placeholder:'Type your message...!'},
    ]
]
}




class Contact extends Component{

    render(){
        return(
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={this.props.handleSubmit}>
                    <div class="row align-items-stretch mb-5">
                    {fields.sections.map((section, sectionIndex) => {
                            return(
                                <div className="col-md-6" key={sectionIndex}>
                                    {section.map((field, i) => {
                                        return <Field 
                                        {...field} 
                                        key={i}
                                        // value={this.state[field.name]}
                                        // onChange={e => this.setState({
                                        //     [field.name]: e.target.value})}
                                        value = {this.props.values[field.name]}
                                        name = {field.name}
                                        onChange={this.props.handleChange}
                                        onBlur = {this.props.handleBlur}
                                        touched = {(this.props.touched[field.name])}
                                        errors = {this.props.errors[field.name]}
                                        />
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    <div class="text-center">
                        <div id="success"></div>
                        <button class="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        name:'',
        email:'',
        phone:'',
        message:'',
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'Name is shorter than expected').required('You must provide your name!'),
        email: Yup.string().email('You need to provide us with your email').required('We need your Email'),
        phone: Yup.string()
        .min(10, 'Phone Number less than expected.')
        .max(15, 'Your  phone number is too long.')
        .required('You need to provide us with your email number.'),
        message: Yup.string().min(500, 'You need to provide us with more information')
            .required('Message is required!')
    }),    
    handleSubmit: (values, {setSubmitting}) => {
        alert('You have submitted the Form', JSON.stringify(values));
    }
})(Contact);