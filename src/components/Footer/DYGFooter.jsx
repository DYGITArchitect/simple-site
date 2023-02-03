import { Row } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import React from 'react';

const DYGFooter = () => {
  return(<Footer >
    <Row justify={'center'} style={{color: 'white'}}>
      © 2023 ООО «Иванов Иван Иванович»
    </Row>
    </Footer>)
};

export default DYGFooter