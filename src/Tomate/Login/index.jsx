import React, { Component } from 'react';
import './login.less';
import { Col, Row } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import rightImage from '../../Image/anime-girls.jpg';
import Logo from '../../Image/images.jpg';
// import CreateAccount from '../CreateAccount';


export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            buttonName: 'Create Account'
        }
    }
    handleClick = () => {
        console.log('craete');
        this.setState({
            buttonName: 'Login'
        })
    }
    render() {
        return (
            <div id='section-login'>
                <Row justify='center'>
                    <Col span={10}>
                        <Row>
                            <Col span={24}>
                                <div className="section-logo">
                                    <div className="topmate">
                                        <div className="logo"><img src={Logo} alt="TopMate" /></div>
                                        TopMate
                                    </div>
                                    <div className="button"><button onClick={this.handleClick}>{this.state.buttonName}</button></div>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className="section-signup">
                                    <div className="h4"><h4>Sign in</h4></div>
                                    <div className="google">
                                        <div className="g-icon"><GoogleOutlined /></div>
                                        <div className="g-name">Google</div>
                                    </div>
                                    <div className="devider">
                                        <hr />Or <hr />
                                    </div>
                                </div>
                            </Col>
                            <Col span={24}>
                                <div className="section-input">
                                    <div className="username">
                                        <label htmlFor="">Email/Username</label>
                                        <input type="text" placeholder='Email / Username' />
                                    </div>
                                    <div className="password">
                                        <label htmlFor="">Password</label>
                                        <input type="text" placeholder='Password' />
                                    </div>
                                    <div className="btn-signup">
                                        <button>Sign-in</button>
                                        <hr />
                                    </div>
                                </div>
                            </Col>
                            <Col span={24}><div className="forgot">Forgot Password</div></Col>
                        </Row>
                    </Col>
                    <Col span={10}>
                        <div className="right">
                            <img src={rightImage} alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
