import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { changeListAction } from '../../redux/actions/HomeAction';
import { AppPage,AppHeader } from '../../components/index';
function unescapeHTML(escapedHTML) {
  return escapedHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/&quot;/g, '"');
}
let data = {"result":{"data":{"detail":"&lt;p&gt;&lt;span style=&quot;font-size: 18px;&quot;&gt;&lt;strong&gt;\u91cd\u8981\u8bf4\u660e\uff1a&lt;\/strong&gt;&lt;\/span&gt;&lt;\/p&gt;&lt;p&gt;1\u3001\u4ee5\u4e0b\u8be6\u60c5\u9875\u9762\u5c55\u793a\u4fe1\u606f\u4ec5\u4f9b\u53c2\u8003\uff0c\u5b9d\u8d1d\u4ee5\u5b9e\u7269\u4e3a\u51c6\uff1b&lt;\/p&gt;&lt;p&gt;2\u3001\u8be5\u5b9d\u8d1d\u7531\u7b2c\u4e09\u65b9\u63d0\u4f9b\uff0c\u7531\u7b2c\u4e09\u65b9\u63d0\u4f9b\u8d28\u91cf\u4fdd\u8bc1\u53ca\u552e\u540e\u670d\u52a1\uff1b&lt;\/p&gt;&lt;p&gt;3\u3001\u5982\u5feb\u9012\u65e0\u6cd5\u914d\u9001\u81f3\u83b7\u5956\u8005\u63d0\u4f9b\u7684\u9001\u8d27\u5730\u5740\uff0c\u5c06\u9ed8\u8ba4\u914d\u9001\u5230\u8ddd\u79bb\u6700\u8fd1\u7684\u9001\u8d27\u5730\uff0c\u7531\u83b7\u5956\u8005\u672c\u4eba\u81ea\u63d0\u3002&lt;\/p&gt;&lt;p style=&quot;text-align: center&quot;&gt;&lt;img src=&quot;http:\/\/7xkg3h.com1.z0.glb.clouddn.com\/146094373300070.jpg&quot; style=&quot;&quot;\/&gt;&lt;\/p&gt;&lt;p style=&quot;text-align: center&quot;&gt;&lt;img src=&quot;http:\/\/7xkg3h.com1.z0.glb.clouddn.com\/1460943733000910.jpg&quot; style=&quot;&quot;\/&gt;&lt;\/p&gt;&lt;p style=&quot;text-align: center&quot;&gt;&lt;img src=&quot;http:\/\/7xkg3h.com1.z0.glb.clouddn.com\/146094373300068.jpg&quot; style=&quot;&quot;\/&gt;&lt;\/p&gt;&lt;p style=&quot;text-align: center&quot;&gt;&lt;img src=&quot;http:\/\/7xkg3h.com1.z0.glb.clouddn.com\/146094373300088.jpg&quot; style=&quot;&quot;\/&gt;&lt;\/p&gt;&lt;p style=&quot;text-align: center&quot;&gt;&lt;img src=&quot;http:\/\/7xkg3h.com1.z0.glb.clouddn.com\/1460943733000318.jpg&quot; style=&quot;&quot;\/&gt;&lt;\/p&gt;&lt;p style=&quot;text-align: center&quot;&gt;&lt;img src=&quot;http:\/\/7xkg3h.com1.z0.glb.clouddn.com\/146094373400092.jpg&quot; style=&quot;&quot;\/&gt;&lt;\/p&gt;&lt;p style=&quot;text-align: center&quot;&gt;&lt;img src=&quot;http:\/\/7xkg3h.com1.z0.glb.clouddn.com\/146094373400061.jpg&quot; style=&quot;&quot;\/&gt;&lt;\/p&gt;&lt;p style=&quot;text-align: center&quot;&gt;&lt;img src=&quot;http:\/\/7xkg3h.com1.z0.glb.clouddn.com\/1460943734000313.jpg&quot; style=&quot;&quot;\/&gt;&lt;\/p&gt;&lt;p style=&quot;text-align: center&quot;&gt;&lt;img src=&quot;http:\/\/7xkg3h.com1.z0.glb.clouddn.com\/146094373400002.jpg&quot; style=&quot;&quot;\/&gt;&lt;\/p&gt;&lt;p style=&quot;text-align: center&quot;&gt;&lt;img src=&quot;http:\/\/7xkg3h.com1.z0.glb.clouddn.com\/1460943734000510.jpg&quot; style=&quot;&quot;\/&gt;&lt;\/p&gt;&lt;p&gt;&lt;br\/&gt;&lt;\/p&gt;"}}}
export default class ContentContainer extends React.Component<any, any> {
  
  static defaultProps = {
        actions: [],
        className: '',
        show: true,
        type: 'confirm'
    }
    
  constructor(props) {
        super(props);
    }

  render() {
    let {params} = this.props;
    return (
          <AppPage >
            <div className="content-view">
              <h2 className="title">你一定想知道：我是标题{params.id}</h2>
              <div>
                <div dangerouslySetInnerHTML={{__html: unescapeHTML(data.result.data.detail)}}/>
              </div>
            </div>
          </AppPage>
    )
  }
  
  componentDidMount():void {

    }

  componentWillUnmount():void {
      
  }
    
}
