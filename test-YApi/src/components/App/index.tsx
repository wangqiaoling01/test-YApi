import {Input, Button, DatePicker, Form, Menu} from 'antd';
import {get, cloneDeep, uniq, uniqBy, debounce} from 'lodash';
import moment from 'moment';

// console.log(get, uniq, uniqBy, debounce);
// console.log(cloneDeep({a: 1}));
// console.log(moment('2021-01-21'));

import {APIS} from '@/services/api/api';
// console.log(APIS.DefaultApi.hotspotApiGetlemmataskGet);
const {hotspotApiGetlemmataskGet, hotspotBrowseShowauditingnewsGet} = APIS;
const App = () => {
    const getData1 = async () => {
        const res = await hotspotApiGetlemmataskGet();
        console.log(res);
    };
    const getData2 = async () => {
        const res = await hotspotBrowseShowauditingnewsGet({
            limit: 20,
            offset: 0,
        })
        console.log(res);
    };
    return (
        <div>
            <h1>恭喜你跑起来了</h1>
            <p>能看到这个页面，至少你已经能够启动系统，后面还需要清理一些TODO~</p>
            <h2>检查项</h2>
            <ul>
                <li>确保<code>node</code>和<code>npm</code>都是最新版本。</li>
                <li>搜索各处的<code>TODO</code>并相应修改。</li>
                <li>阅读<a href="https://ecomfe.github.io/reskript">reSKRipt的文档</a>了解更多配置和开发方式。</li>
            </ul>
            <Input />
            <Button onClick={getData1}>测试1</Button>
            <Button onClick={getData2}>测试2</Button>

            <DatePicker />
            <Form></Form>
            <Menu></Menu>
        </div>
    )
};

export default App;
