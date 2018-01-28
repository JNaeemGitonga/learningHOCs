import React from 'react';
import './index.css';

const Higher = Component  => class extends React.Component {
        
    state = {
        phrase: 'eat to live!',
        count:0,
        message:''
    }


    movingMouse = event => {
        this.setState({
            message:'You have moved the mouse',
            count:this.state.count + 1
        })
    }

    render() {
        return (
            <div className='hoc'  onMouseMove={this.movingMouse}  onDoubleClick={this.doubleClick}>
                <Component {...this.state} {...this.props} reset={() => this.setState({message:'',count:0})} />
            </div>
        )
    }
}


export default Higher