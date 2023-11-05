import { Col, Row } from 'antd'
import React, { Component } from 'react'
import CardBox from '../CardBox';
import CardDetails from '../CardDetails';
import './main.less';
export default class Main extends Component {
  render() {
    return (
      <div>
        <Row>
            <Col span={8} id='left'></Col>
            <Col span={16} id='right'>
                <CardDetails />
                <CardBox />
            </Col>
        </Row>
      </div>
    )
  }
}
