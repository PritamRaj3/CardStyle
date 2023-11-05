import { Col, Row } from 'antd'
import React, { Component } from 'react'
import carrerImage from '../../Image/girl.jpg';
import './CreAcc.less';

export default class CreateAccount extends Component {
  render() {
    return (
      <div id='createaccount'>
        <Row justify='center'>
          <Col span={14}>left</Col>
          <Col span={10}>
            <Row>
              <Col span={24}>
                <div className="paragarph">
                  <p>“I found Topmate to be an excellent tool for connecting with my followers 1:1. The first session made me realise the whole beauty of it. The whole journey is extremely convenient and allows me to share my knowledge and expertise with my followers in a more effective way.“</p>
                </div>
              </Col>
              <Col span={24}>
                <div className="carrer">
                  <div className="carrer-image">
                    <img src={carrerImage} alt="" />
                  </div>
                  <div className="carrer-about">
                    <p>Yargun Devi</p>
                    <p>Carrer Coach</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
