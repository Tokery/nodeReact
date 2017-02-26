import React from 'react';


import Header from './Header';
import ContestList from './ContestList';



// Class notation for stateful components
class App extends React.Component {
    state = { 
        pageHeader: 'Naming Contests',
        contests: this.props.initialContests
    };
    componentDidMount(){
        // axios.get('/api/contests')
        // .then(resp => {
        //     this.setState ({
        //     contests: resp.data.contests
        //     });
        // })
        // .catch(console.error)        
    }
    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <ContestList contests={this.state.contests}/>
            </div>
        )
    }
}

App.propTypes = {
    headerMessage: React.PropTypes.string
};

App.defaultProps = {
    headerMessage: 'Hello!!'
}

export default App;