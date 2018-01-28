import React, {Component} from 'react';
import Higher from './higherOrderComponent';
import './index.css';

class Input extends Component{
	state = {
		input:''
	}

	newMessage = msg => {
		this.setState({input:this.textInput.value})
	}
	
    render() {

		const {message, phrase, count, reset} = this.props 
		const {input} = this.state
		
        return (
            <div className="look">
				<p>{phrase}</p>

				<form onSubmit={ e => {
					
					e.preventDefault()
					if (this.textInput.value === '') {
						alert('Enter a value first, DUH!')
					}
					this.newMessage(this.textInput.value)
					this.textInput.value = ''}}>

					<input type='text' 
						className='input-box'
						ref={input => this.textInput = input}
					/>

					<input type='submit'/>
				</form>

				<p>{message} {count}</p>

				<p> What you typed: <span className='your-input'>{input}</span></p>

				<button className='reset' onClick={()=> {
					reset()
					this.setState({input:''})
				}}>Reset</button>

			</div>
        )
    }
}  

const WithHigher = Higher(Input)

export default WithHigher