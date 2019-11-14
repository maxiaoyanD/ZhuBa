import React, { Component } from 'react'
import {NavBar,Tabs,Grid,Icon} from 'antd-mobile';
const tabs = [
    { title: '推荐' },
    { title: '冬季' },
    { title: '宜家' },
    { title: '小清新'},
    { title: '小户型' },
    { title: '个性色彩' }
  ];
const title=[
    '橙色律动','儿童房','翻滚吧地毯君','角落里的遐想','橙色律动','儿童房'
]
export default class lingGan extends Component {
    render() {
        return (
            <div>
                 <NavBar
                    style={{backgroundColor:"#3fcccb",color:"#fff",height:'75px',fontSize:'16px'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                    >灵感
                </NavBar>
                <div style={{width:'100%',position:'relative'}}>
                    <div style={{position:"absolute",right:'0',width:'50px',height:'50px',zIndex:'2',textAlign:'center',lineHeight:'40px',fontSize:'32px'}}>+</div>
                    <Tabs tabs={tabs}
                        initialPage={0}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        >
                        <div style={{width:'100%',backgroundColor:'#eee'}}>
                            <Grid data={[1,2,3,4,5,6]} 
                                columnNum={2}
                                square={false}
                                hasLine={false}
                                itemStyle={
                                   { width:'40%',backgroundColor:'#eee',padding:'15px',overflow:'hidden'}
                                }
                                renderItem={ dataItem => (
                                    <div style={{width:'100%',height:'340px',backgroundColor:'#fff',borderRadius:'10px',position:'relative'}}>
                                        <img src={require(`../images/lg-${dataItem}.png`)} style={{width:'100%',height:'100%'}}/>
                                        <img src={require(`../images/lg-head${dataItem}.png`)} style={{position:'absolute',left:'5px',bottom:'15px'}}/>
                                        <div style={{position:'absolute',left:'25%',bottom:'15px',fontSize:'16px',color:'#8e8e8e'}}>{title[dataItem-1]}</div>
                                        <i style={{fontSize:30,lineHeight:'30px',color:'red',position:'absolute',right:'15px',bottom:'10px'}} className='iconfont icon-xin'></i>
                                    </div>
                                )}
                            />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        冬季
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        宜家
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        小清新
                        </div>
                       
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            小户型
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        个性色彩
                        </div>
                    </Tabs>
                </div>
            </div>
        )
    }
}

