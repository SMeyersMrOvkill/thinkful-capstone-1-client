import React from 'react';

class Genre extends React.Component
{
    state = {
        name: {
            value: '',
            touched: false
        }
    }

    updateName(name) {
        this.setState({name: {value: name, touched: true}})
    }

    render() {
        return (
            <div className="Genre">
                <input
                onChange={e => this.updateName(e.target.value)}
                defaultValue={this.props.genre.name} 
                />
                <button 
                disabled={!this.state.name.touched}
                >Update</button>
                <button>Delete</button>
            </div>
        )
    }
}

export default Genre;