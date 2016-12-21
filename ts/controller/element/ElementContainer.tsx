import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { changeListAction } from '../../redux/actions/HomeAction';
import {
    AppPage,
    Row,
    Flex,
    Col,
    Carousel,
    Icon,
    Buttons,
    FormGroup,
    FormItems,
    InputText,
    InputSelect,
    InputRadio,
    RadioGroup,
    SwitchCell,
    CheckGroup,
    Dialog,
    Tabel, Container
} from '../../components/index';

let divStyle = {
    marginBottom: '10px',
};
export default class ElementContainer extends React.Component<any, any> {
    date: any;
    constructor(props) {
        super(props);
        this.state = {
            columns: [{
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                render: (text) => <a href="#">{text}</a>,
            }, {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            }, {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            }, {
                title: '操作',
                key: 'operation',
                render: (text, record) => (
                    <span>
                        <Buttons type="danger" size="small" onClick={() => { this.handDelete(text, record) } }><Icon type="delete" /> 删除</Buttons>
                    </span>
                ),
            }],
            data: [{
                key: '1',
                name: '小明',
                age: 32,
                address: '西湖区湖底公园1号',
            }, {
                key: '2',
                name: '小红',
                age: 42,
                address: '西湖区湖底公园2号',
            }, {
                key: '3',
                name: '小东',
                age: 32,
                address: '西湖区湖底公园3号',
            }
            ]
        }
        this.date = [{
            label: '北京',
            value: '1'
        }];
    }
    handDelete(text, record) {
        this.state.data.map((d, i) => {
            if (d.key == record.key) {
                this.state.data.splice(i, 1)
            }
        })
        this.setState({
            data: this.state.data
        })
    }
    handleInputChange(event) {
        console.log(event.target.value)
    }
    handleButton() {
        alert('点击')
    }

    render() {
        return (
            <Container>
                <section className="container-scrollable">
                    <div>
                        <h3>总布局</h3>
                    </div>
                    <div>
                        <h3>文本字体颜色</h3>
                        <div className="ui-text-muted">在鼠标经过时颜色可以加深，就像默认的链接一样</div>
                        <div className="ui-text-primary">在鼠标经过时颜色可以加深，就像默认的链接一样</div>
                        <div className="ui-text-danger">在鼠标经过时颜色可以加深，就像默认的链接一样</div>
                        <div className="ui-text-warning">在鼠标经过时颜色可以加深，就像默认的链接一样</div>
                    </div>
                    <div>
                        <h3>箭头链接</h3>
                        <div className="ui-list">
                            <div className="ui-arrowlink">
                                箭头链接
                  </div>
                        </div>
                    </div>
                    <div>
                        <h3>浮动布局</h3>
                        <Row>
                            <Col span="10">10%</Col>
                            <Col span="90">90%</Col>
                        </Row>
                        <Row>
                            <Col span="20">20%</Col>
                            <Col span="80">80%</Col>
                        </Row>
                        <Row>
                            <Col span="25">25%</Col>
                            <Col span="75">75%</Col>
                        </Row>
                        <Row>
                            <Col span="33">33%</Col>
                            <Col span="67">67%</Col>
                        </Row>
                        <Row>
                            <Col span="50">50%</Col>
                            <Col span="50">50%</Col>
                        </Row>
                    </div>
                    <div>
                        <h3>盒子布局</h3>
                        <Flex>
                            <Col flex="1">平均分</Col>
                            <Col flex="1">平均分</Col>
                        </Flex>
                        <Flex>
                            <Col flex="2">2/3</Col>
                            <Col flex="1">1/3</Col>
                        </Flex>
                        <Flex>
                            <Col flex="3">3/4</Col>
                            <Col flex="1">1/4</Col>
                        </Flex>
                        <Flex>
                            <Col flex="3">3/5</Col>
                            <Col flex="2">2/5</Col>
                        </Flex>
                    </div>
                    <div>
                        <h3>图文栅格布局 3列</h3>
                        <Row className="ui-grid">
                            <Col span="33">
                                <img src="https://gw.alicdn.com/tps/TB1i45NMpXXXXbwXVXXXXXXXXXX-206-206.jpg_300x300q75" />
                            </Col>
                            <Col span="33">
                                <img src="https://gw.alicdn.com/tps/TB1i45NMpXXXXbwXVXXXXXXXXXX-206-206.jpg_300x300q75" />
                            </Col>
                            <Col span="33">
                                <img src="https://gw.alicdn.com/tps/TB1i45NMpXXXXbwXVXXXXXXXXXX-206-206.jpg_300x300q75" />
                            </Col>
                        </Row>
                        <h3>图文栅格布局 2列</h3>
                        <Row className="ui-grid">
                            <Col span="50">
                                <img src="https://gw.alicdn.com/tps/TB1i45NMpXXXXbwXVXXXXXXXXXX-206-206.jpg_300x300q75" />
                            </Col>
                            <Col span="50">
                                <img src="https://gw.alicdn.com/tps/TB1i45NMpXXXXbwXVXXXXXXXXXX-206-206.jpg_300x300q75" />
                            </Col>
                        </Row>
                        <h3>左文右图</h3>
                        <Flex className="ui-grid-flex">
                            <Col flex="1" className="ui-grid-flex-info">
                                世界最大玻璃观景台来中国了！去的人都吓跪了…
                  </Col>
                            <Col className="ui-grid-flex-img">
                                <img src="https://img.alicdn.com/bao/uploaded/i1/100000229582992594/TB2RC0DpVXXXXc7XXXXXXXXXXXX_!!0-0-travel.jpg_300x300q75" />
                            </Col>
                        </Flex>
                        <h3>左图右文</h3>
                        <Flex className="ui-grid-flex  ui-arrowlink">
                            <Col className="ui-grid-flex-img">
                                <img src="https://img.alicdn.com/bao/uploaded/i1/100000229582992594/TB2RC0DpVXXXXc7XXXXXXXXXXXX_!!0-0-travel.jpg_300x300q75" />
                            </Col>
                            <Col flex="1" className="ui-grid-flex-info">
                                世界最大玻璃观景台来中国了！去的人都吓跪了…
                  </Col>
                        </Flex>
                        <h3>按钮</h3>
                        <div>
                            <Buttons>默认default</Buttons>
                            <Buttons type="primary" >首选primary</Buttons>
                            <Buttons type="success">成功success</Buttons>
                            <Buttons type="danger">危险danger</Buttons>
                            <Buttons type="info">一般info</Buttons>
                            <Buttons type="warning">警告warning</Buttons>
                            <Buttons type="link">链接link</Buttons>
                        </div>
                        <h3>按钮尺寸</h3>
                        <div>
                            <Buttons type="primary" size="large">大号按钮</Buttons>
                            <Buttons type="primary" >中号按钮(默认)</Buttons>
                            <Buttons type="primary" size="small">小号按钮</Buttons>
                        </div>
                        <h3>按钮块</h3>
                        <div>
                            <Buttons style={divStyle} display="block" > 默认default</Buttons>
                            <Buttons style={divStyle} type="primary" display="block" onClick={() => this.handleButton()} >首选primary</Buttons>
                            <Buttons style={divStyle} type="success" display="block" >成功success</Buttons>
                            <Buttons style={divStyle} type="danger" display="block" >危险danger</Buttons>
                            <Buttons style={divStyle} type="info" display="block" >一般info</Buttons>
                            <Buttons style={divStyle} type="warning" display="block" >警告warning</Buttons>
                        </div>
                        <h3>按钮图标</h3>
                        <div>
                            <Buttons type="link"><Icon type="cloudupload" /> 上传文件</Buttons>
                            <Buttons type="link" ><Icon type="delete" /> 删除</Buttons>
                            <Buttons type="link" ><Icon type="eyeo" /> 预览</Buttons>
                            <Buttons type="link" ><Icon type="edit" /> 修改</Buttons>
                            <Buttons type="link" ><Icon type="pluscircle" /> 添加</Buttons>
                            <Buttons type="primary" ><Icon type="search" /> 搜索</Buttons>
                            <Buttons type="warning" ><Icon type="like" /> 89</Buttons>
                        </div>
                        <h3>表单</h3>
                        <FormGroup>
                            <FormItems className="ui-border-b">
                                <InputText type="text" placeholder="QQ号/手机号/邮箱" />
                            </FormItems>
                            <FormItems >
                                <InputText type="password" placeholder="密码" />
                            </FormItems>
                        </FormGroup>
                        <h3>表单-行</h3>
                        <FormGroup>
                            <FormItems label="用户名" className="ui-border-b" horizontal>
                                <InputText type="text" placeholder="请输入账号" />
                            </FormItems>
                            <FormItems label="城市" className="ui-border-b" horizontal>
                                <InputSelect items={this.date} onChange={(event) => this.handleInputChange(event)} />
                            </FormItems>
                            <FormItems label="登录密码" horizontal>
                                <InputText type="password" placeholder="请输入密码" />
                            </FormItems>
                        </FormGroup>
                        <h3>表单-单选按钮</h3>
                        <FormGroup>
                            <FormItems className="ui-border-b">
                                <InputRadio label="支付宝" name="delivery_channel" value="1" />
                            </FormItems>
                            <FormItems className="ui-border-b">
                                <InputRadio label="微信" name="delivery_channel" value="2" />
                            </FormItems>
                        </FormGroup>
                        <h3>表单-单选按钮-行</h3>
                        <FormGroup>
                            <FormItems label="性别" horizontal>
                                <RadioGroup>
                                    <InputRadio label="男" name="delivery_channel" value="1" />
                                    <InputRadio label="女" name="delivery_channel" value="2" />
                                </RadioGroup>
                            </FormItems>
                        </FormGroup>
                        <h3>表单-复选框-开光</h3>
                        <div>
                            <FormGroup>
                                <FormItems label="开关"  >
                                    <SwitchCell checked />
                                </FormItems>
                            </FormGroup>
                        </div>
                        <h3>表单-复选框</h3>
                        <div>
                            <FormGroup>
                                <FormItems>
                                    <CheckGroup options={[{ label: '短信通知', value: '1' }, { label: '邮件通知', value: '2' }]} defaultValue={['1']} />
                                </FormItems>
                            </FormGroup>
                        </div>
                        <h3>表格</h3>
                        <div>
                            <Tabel columns={this.state.columns} dataSource={this.state.data} />
                        </div>
                    </div>
                </section>
            </Container>
        )
    }

    componentDidMount(): void {

    }

    componentWillUnmount(): void {

    }

}
