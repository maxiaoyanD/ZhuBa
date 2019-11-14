import React, { Component } from 'react'
import { NavBar, Grid,Carousel} from 'antd-mobile';
const list=['热门内容','私人搭配师','选购指南']

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:"#3fcccb",color:"#fff",height:'75px',fontSize:'16px'}}
                    >住吧家居
                </NavBar>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {[1,2].map(val => (
                        
                        <img
                            src={require(`../images/banner-${val}.png`)}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    ))}
                </Carousel>

                <Grid data={[1,2,3]} 
                    hasLine={false}
                    columnNum={3}
                    renderItem={dataItem => (
                        <div style={{position:"relative",backgroundColor:"#eeeeee",padding:'12.5px'}}>
                            <div style={{position:"absolute",left:'5%',width:"90%",height:"100%",backgroundColor:"grey",opacity:"0.6"}}></div>
                                <img src={require(`../images/m-${dataItem}.png`)} style={{width:'100%',height:'100%'}}  alt="" />
                                <div style={{ color: '#fff', fontSize: '14px',position:"absolute",top:"45%",left:"30%"}}>
                                    {list[dataItem-1]}
                                </div>
                        </div>
                    )}
                    />
                
                <div style={{width:'100%',height:'75px',backgroundColor:'#fff',padding:'15px',lineHeight:'75px'}}>
                        <div style={{borderLeft:'5px solid #3fcccb',height:'40px',fontSize:'20px',position:"relative"}}>
                            <span style={{position:"absolute",left:'15px',top:'-20px'}}>热门内容</span>
                        </div>
                
                    </div>
                <div style={{width:'100%',backgroundColor:'#fff',overflow:'hidden',position:"relative"}}>
                    
                    <img src={require('../images/back.png')} style={{width:'100%'}}/>
                    <span style={{position:"absolute",left:"5%",bottom:'5%',fontSize:'28px',color:'#fff'}}>什么是英伦装修风格 英伦风家装 英伦风格装修图</span>
                </div>
            </div>
        )
    }
}
