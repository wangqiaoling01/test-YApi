import {Button, message, Table} from 'antd';

import {APIS} from '@/services/api/api';
import { useState } from 'react';
import { ApiBook, ApiUserList } from '@/services';
const {UserApi, BooksApi} = APIS;

const userColumns = [
    {
        title: '编号',
        dataIndex: 'id',
    },
    {
        title: '姓名',
        dataIndex: 'name',
    },
    {
        title: '年龄',
        dataIndex: 'age'
    },
].map(item => {
    return {
        ...item,
        key: item.dataIndex,
        align: 'center'
    }
});

const USERLIST_DEFAULT_DATA: ApiUserList = {
    errno: 0,
    errmsg: '',
    count: 0,
    data: [],
};

const bookColumns = [
    {
        title: '编号',
        dataIndex: 'id',
    },
    {
        title: '图书名称',
        dataIndex: 'name'
    },
    {
        title: '作者',
        dataIndex: 'author'
    }
].map(item => {
    return {
        ...item,
        key: item.dataIndex,
        align: 'center'
    }
});

const BOOKLIST_DEFAULT_DATA: ApiBook = {
    errmsg: '',
    errno: 0,
    count: 0,
    data: [],
};
const App = () => {
    const [userList, setUserList] = useState<ApiUserList>(USERLIST_DEFAULT_DATA);

    const getUserList = async () => {
        try {
            const response = await UserApi.apiUserListGet({});
            const {errno, errmsg} = response;
            if (errno === 0) {
                setUserList(response);
            } else {
                message.error(errmsg);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const [bookList, setBookList] = useState<ApiUserList>(BOOKLIST_DEFAULT_DATA);
    const getBooksList = async () => {
        try {
            const response = await BooksApi.apiBookGet({});
            const {errno, errmsg} = response;
            if (errno === 0) {
                setBookList(response);
            } else {
                message.error(errmsg);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Button onClick={getUserList}>获取用户列表</Button>
            <Table
                columns={userColumns}
                dataSource={userList.data}
                title={()=>(`数据总数：${userList.count}`)}
            />
            <Button onClick={getBooksList}>获取图书列表</Button>
            <Table
                columns={bookColumns}
                dataSource={bookList.data}
                title={()=>(`数据总数：${bookList.count}`)}
            />
        </div>
    )
};

export default App;
