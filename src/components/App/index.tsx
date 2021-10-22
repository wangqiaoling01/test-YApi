import {Button} from 'antd';

import {APIS} from '@/services/api/api';
const {hotspotApiGetlemmataskGet, hotspotBrowseShowauditingnewsGet} = APIS.DefaultApi;

import { useState } from 'react';
import { HotspotApiGetlemmataskData } from '@/services';
import {HotspotBrowseShowauditingnewsData} from '@/services';
interface IserverData1 {
    data: HotspotApiGetlemmataskData;
}
const DEFAULT_SERVAERDATA1: IserverData1 = {
    data: {}
}
interface IserverData2 {
    count: number;
    list: HotspotBrowseShowauditingnewsData[];
}
const DEFAULT_SERVAERDATA2: IserverData2 = {
    count: 0,
    list: []
}
const App = () => {
    const [serverData1, setServerData1] = useState<IserverData1>(DEFAULT_SERVAERDATA1);
    const [serverData2, setServerData2] = useState<IserverData2>(DEFAULT_SERVAERDATA2);

    const getData1 = async () => {
        try {
            const {errno, errmsg, data} = await hotspotApiGetlemmataskGet();
            setServerData1({data});
        } catch (error) {
            console.error(error);
        }
    };
    const getData2 = async () => {
        try {
            const {errno, errmsg, data, count} = await hotspotBrowseShowauditingnewsGet({
                limit: 20,
                offset: 0,
            });
            setServerData2({
                count,
                list: data || [],
            });
        } catch (error) {
            console.error(error);
        }
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
            <Button onClick={getData1}>测试1</Button>
            <p>
                测试1: {serverData1.data.website}
            </p>
            <Button onClick={getData2}>测试2</Button>
            <p>
                测试2: count - {serverData2.count}
            </p>
        </div>
    )
};

export default App;
