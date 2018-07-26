import {React, Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';


class homeMain extends Component{
    static propTypes = {
        username: PropTypes.strings.isrequied
    }

    state = {
        username:''
    }

    siys() {
        console.log(this.state.username, '现在是在从测试获取用户名')
    }

    render() {
        return (
            <div className="loginname">
                <div>
                    <input type="text" />
                    <input type="password" />
                    <button onClick={() => this.siys}>登录</button>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    username: state.username
}), {
    homeMain
})(homeMain)