import React from 'react';
import styles from '../styles/Warnings.module.css';
import 'jquery/dist/jquery.min.js';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import $ from 'jquery';
import HeaderTop from '../components/HeaderTop';
import Link from 'next/link';
import {
  AudioOutlined,
  EyeOutlined,
  DownloadOutlined,
} from '@ant-design/icons';
import { Input, Table } from 'antd';
import { useEffect } from 'react';
import { newDataSet } from '../lib/warnings';
import useSafqaTableSearch from '../lib/ShebakTableSearch';
import { getUsers } from '../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getWarnings } from '../store/slices/warningSlice';
import VideoPlayer from '../components/VideoPlayer';
const { Search } = Input;

const WarningsPage = () => {
  const dispatch = useDispatch();
  const { warnings, is_loading } = useSelector((state) => state.warning);
  const onSearch = (value) => console.log(value);
  const { getColumnSearchProps } = useSafqaTableSearch();

  const columns = [
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      ...getColumnSearchProps('status'),
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      ...getColumnSearchProps('date'),
    },
    {
      title: 'Download Video',
      dataIndex: 'video_name',
      key: 'video_name',
      render: (_, warning) => (
        <>
          <Link
            className="d-flex justify-content-center align-items-center"
            download={true}
            href={`http://localhost:8000/api/warnings/video/${warning.video_name}`}
          >
            <DownloadOutlined style={{ fontSize: '16px', color: '#66B4D2' }} />
          </Link>
        </>
      ),
    },
    {
      title: 'Show',
      dataIndex: 'show',
      key: 'show',
      render: (_, warning) => (
        <div className={`${styles.show} mx-auto`}>
          <Link href={`/warnings/${warning.id}`}>
            <EyeOutlined style={{ fontSize: '16px', color: '#66B4D2' }} />
          </Link>
        </div>
      ),
    },
  ];

  // const dataSource = [
  //   {
  //     id: 1,
  //     status: 'Iwett',
  //     date: '23/7/2001',
  //   },
  //   {
  //     id: 2,
  //     status: '2hfdh',
  //     date: '23/7/2002',
  //   },
  //   {
  //     id: 3,
  //     status: '3dfhdh',
  //     date: '23/7/2003',
  //   },
  //   {
  //     id: 4,
  //     status: 'fgdfh',
  //     date: '23/7/2004',
  //   },
  // ];

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
    dispatch(getWarnings());
  }, [dispatch]);

  return (
    <>
      <div
        className={`${styles.MainDiv} ${styles.WarningsPage} warningspage px-4`}
      >
        {/* <div className="warnings mt-5">
          <HeaderTop title="Warnings History" />
        </div> */}
        <br />

        <div className={styles.table}>
          <Table
            columns={columns}
            dataSource={warnings}
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

export default WarningsPage;
