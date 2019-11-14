import React, { Component } from 'react'
import {NavBar,Carousel,SearchBar,Grid,Icon} from 'antd-mobile';
const list=[
    'icon-zhuozi','icon-chuang','icon-yizi','icon-chaji','icon-iconset0499',
    'icon-shujia','icon-shafa','icon-shanzi','icon-icon-test','icon-quanbufenlei'
]
const colors=[
    '#fd457e','#25c0fd','#fc950e','#3cd2d0',
    '#fc2d2b','#ae1cff','#5353f9','#19e071','#9088c1','#747379'
]
const title=[
    '桌','床','椅','几','柜',
    '书架','沙发','家居饰品','户外家具','全部分类'
]
const p1=['Top Art Studio欧式风格精细...','顺顺工艺欧式风格塑料外框黑...'];
const price =['￥ 39.95','￥ 83.99']

export default class Shop extends Component {
    render() {
        return (
            <div >
                <NavBar
                    style={{backgroundColor:"#3fcccb",color:"#fff",height:'75px',fontSize:'28px'}}
                    rightContent={[                   
                        <i style={{fontSize:22,lineHeight:'20px',color:'#fff'}} className='iconfont icon-gouwuche'></i>,
                    ]}
                    >商城
                </NavBar>
                <div style={{width:'100%',position:'relative'}}>
                    <div style={{width:'100%',height:'50px',backgroundColor:'#000',background:' rgba(0,0,0,0.5)',position:'absolute',top:'0px',zIndex:5}}>
                        <i style={{fontSize:30,lineHeight:'50px',color:'#fff',marginLeft:'30px'}} className='iconfont icon-caidan1'></i>
                        <div style={{width:'80%',float:'right',marginRight:'15px',marginTop:'2.5px'}}>
                        <SearchBar
                            placeholder="Search"
                            onSubmit={value => console.log(value, 'onSubmit')}
                            onClear={value => console.log(value, 'onClear')}
                            onFocus={() => console.log('onFocus')}
                            onBlur={() => console.log('onBlur')}
                            onCancel={() => console.log('onCancel')}
                            onChange={this.onChange}
                            
                        /></div>
                    </div>
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {[1,2].map(val => (
                            <img
                                src={require(`../images/store-banner1.png`)}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        ))}
                    </Carousel>
                </div>
                <Grid data={[1,2,3,4,5,6,7,8,9,10]} 
                    columnNum={5} 
                    hasLine={false} 
                    activeStyle={false} 
                    itemStyle={
                        {padding:'15px',position:'relative'}
                     }
                    renderItem={dataItem => (
                        <div>
                            <div style={{width:'50%',height:'60px',backgroundColor:`${colors[dataItem-1]}`,borderRadius:'200px'}}>
                                <i style={{fontSize:40,lineHeight:'60px',color:'#fff'}} className={`iconfont ${list[dataItem-1]}`}></i>
                            </div>
                            <div style={{position:'absolute',left:'18%',bottom:'25%'}}>{title[dataItem-1]}</div>
                        </div>
                    )}
                />
                <div>
                    <Grid data={[1,2]} 
                        columnNum={2} 
                        hasLine={false} 
                        activeStyle={false} 
                        itemStyle={
                            {padding:'15px',position:'relative',backgroundColor:'#eee'}
                        }
                        renderItem={dataItem => (
                            <div>
                                <div style={{width:'90%',height:'80%',backgroundColor:'#fff',borderRadius:'5px',paddingTop:'20px'}}>
                                    <img src={require(`../images/store-d${dataItem}.png`)}/>
                                </div>
                                <div style={{fontSize:'22px',color:'#7e7e7e',marginTop:'10px'}}>{p1[dataItem-1]}</div>
                                <span style={{fontSize:'22px',float:'left',marginTop:'10px',marginLeft:'5px'}}>{price[dataItem-1]}</span>
                            </div>
                        )}
                    />
                </div>
            </div>
        )
    }
}
