import React, { Component } from 'react';
import { connect } from 'react-redux';



class Home extends Component {

    render() {
const { questions } = this.props;
console.log(questions);
        return (
            <div>
                home
            </div>
        )
    }
}

const mapStateToProps = ({questions}, props) => {
return {
    questions
}
}

export default connect(mapStateToProps)(Home);