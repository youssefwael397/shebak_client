import React from 'react';
import styles from '../styles/Warnings.module.css';
import 'jquery/dist/jquery.min.js';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from 'jquery';
import HeaderTop from '../components/HeaderTop';
import Link from 'next/link';
import { AudioOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { Input, Table } from 'antd';
import { useEffect, useState } from 'react';
import { newDataSet } from '../lib/users';
import useSafqaTableSearch from '../lib/ShebakTableSearch';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../store/slices/userSlice';
import ImgPreview from '../components/ImgPreview';
const { Search } = Input;

const UsersPage = () => {
  const dispatch = useDispatch();
  const { users, is_loading, imgPath } = useSelector((state) => state.user);
  const onSearch = (value) => console.log(value);
  const { getColumnSearchProps } = useSafqaTableSearch();

  const columns = [
    {
      title: 'Name',
      dataIndex: 'username',
      key: 'username',
      ...getColumnSearchProps('username'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Face Image',
      dataIndex: 'photo',
      key: 'photo',
      render: (_, user) => (
        <div div className="text-center mx-auto">
          <ImgPreview
            alt={user?.username}
            src={`${imgPath}/${user?.photo}`}
            // src={'../images/person.jpg'}
          />
          {/* <img
            width="200"
            className="mx-auto text-center"
            src={`http://localhost:8000/${user.photo}`}
          /> */}
        </div>
      ),
    },
    // {
    //   title: 'Warnings',
    //   dataIndex: 'warnings',
    //   key: 'warnings',
    //   ...getColumnSearchProps('warnings'),
    // },
    {
      title: 'Actions',
      dataIndex: 'show',
      key: 'show',
      render: (_, user) => (
        <div className='d-flex justify-content-center align-items-center'>
          <div className={`${styles.show} me-3`}>
            <Link href={`/users/${user.id}`}>
              <EyeOutlined style={{ fontSize: '16px', color: '#66B4D2' }} />
            </Link>
          </div>
          <div className={`${styles.show} ${styles.delete} text-white`}>
            <Link href={`/users/${user.id}`}>
              <DeleteOutlined style={{ fontSize: '16px', color: '#66B4D2' }} />
            </Link>
          </div>
        </div>
      ),
    },
  ];

  const dataSource = [
    {
      key: '1',
      id: 1,

      username: 'Mike',
      email: 'Mike@gmail.com',
    },
    {
      key: '2',
      id: 2,

      username: 'Johnnnn',
      email: 'Johnnnn@gmail.com',
    },
    {
      key: '3',
      id: 3,

      username: 'John',
      email: 'John@gmail.com',
    },
    {
      key: '4',
      id: 4,

      username: 'John',
      email: 'John@gmail.com',
    },
  ];

  useEffect(() => {
    $(document).ready(function () {
      $('#example').DataTable();
    });
    //datepicker on change
    $('.dateadded').on('change', function (ret) {
      var v = ret.target.value; // getting search input value

      $('#example').DataTable().columns(3).search(v).draw();
    });

    $('#example').DataTable({
      //remove search lable dont forget ya mariem
      language: { search: '' },
    });
  }, []);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <div className={`${styles.MainDiv} ${styles.UsersPage} px-4`}>
        {/* <div className="warnings mt-5">
          <HeaderTop title="Users" />
        </div> */}
        <br />

        <div className={styles.table}>
          <Table
            columns={columns}
            dataSource={users}
            loading={is_loading}
            pagination={{
              position: [`bottomRight`],
              pageSize: '5',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default UsersPage;
