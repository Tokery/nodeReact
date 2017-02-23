import React from 'react';
import axios from 'axios';

import Header from './Header';
import ContestPreview from './ContestPreview';



// Class notation for stateful components
class App extends React.Component {
    state = { 
        pageHeader: 'Naming Contests',
        contests: []
    };
    componentDidMount(){
        axios.get('/api/contests')
        .then(resp => {
            this.setState ({
            contests: resp.data.contests
            });
        })
        .catch(console.error)

        
    }
    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader}/>
                <div>
                    {this.state.contests.map(contest => 
                        <ContestPreview key={contest.id} {...contest}/>
                    )}
                </div>
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