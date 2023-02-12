import React from 'react'
import { Breadcrumb } from 'antd';
const BreadCrumb = () => (
    <Breadcrumb style={{marginTop :'60px'  , fontSize:'1.25rem'}} separator=">">
      <Breadcrumb.Item>Warnings</Breadcrumb.Item>
      <Breadcrumb.Item href="">View Page</Breadcrumb.Item>
      {/* ont-size: !important; */}
      {/* <Breadcrumb.Item href="">Application List</Breadcrumb.Item> */}
      {/* <Breadcrumb.Item>An Application</Breadcrumb.Item> */}
    </Breadcrumb>
  );
  export default BreadCrumb;
