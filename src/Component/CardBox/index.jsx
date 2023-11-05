import { Col, Row } from 'antd';
import React, { Component } from 'react';
import './cardbox.less';

export default class CardBox extends Component {
    render() {
        return (
            <>
                <div className="card-fornt spectrum-background">
                    <Row>
                        <Col span={24}>
                            <section>
                                <div className="cricle">
                                    <div className="big"></div>
                                    <div className="small"></div>
                                </div>
                                <div className="number">
                                    <p>0000 0000 0000 0000</p>
                                </div>
                                <div className="name-date">
                                    <div className="name">Hestar Shaw</div>
                                    <div className="expdate">5/2000</div>
                                </div>
                            </section>
                        </Col>
                    </Row>
                </div>
                <div className="card-back ">
                    <Row>
                        <Col span={24}>
                            <div className="section">
                                <div className="blank"></div>
                                <div className="para"><p>000</p></div>
                                <div className="address"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque et reiciendis sint?</p></div>
                            </div>
                        </Col>
                    </Row>
                </div>
                
            </>
        )
    }
}
