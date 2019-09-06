import React from 'react';
import {Row,Col} from 'antd'
import 'antd/dist/antd.css'
import './style/common.less'
import Header from './components/header'
import Footer from './components/footer'
import Navbar from './components/navbar'
class Admain extends React.Component{
    render(){
        return (
            <div>
                <Row className="container">
                    <Col span={3} className="nav-left">
                         <Navbar></Navbar>
                    </Col>
                    <Col span={21} className="main">
                      <Header>
                          header
                      </Header>
                      <Row className="content">
                          content
                      </Row>
                      <Footer>
                          footer
                      </Footer>
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default Admain