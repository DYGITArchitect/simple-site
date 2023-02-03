import { Card, Layout, Row } from 'antd';
import React from 'react';
import DYGLogin from '../components/Login/DYGLogin';

const Login = () => {  
  return(<Layout>
    <Row justify="center" align="middle" className="h100">
        <Card>
            <DYGLogin/>
        </Card>
    </Row>
</Layout>)
};


export default Login