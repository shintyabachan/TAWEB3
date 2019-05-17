import React from 'react'
import { Row,Col,Typography,List } from 'antd';

const { Title } = Typography;
const data = [
    { name:'Name',icons:'home',content:"Shintya Devi Bachan"},
    { name:'Date of birth',icons:'home',content:"October 15, 1999"},
    { name:'Address',icons:'home',content:"Jl. Lempuyangan Tengah, Yogyakarta"},
    { name:'Phone',icons:'home',content:"+62 852-2859-9018"},
    { name:'Email',icons:'home',content:"icinbachan15@gmail.com"},
  ];
  
class Home extends React.Component{       
    render(){
        return(
            <div>
               <h2>Home</h2>
            </div>
        )
    }
}

export default Home;