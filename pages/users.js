import React from "react";
import styles from "../styles/Warnings.module.css";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import HeaderTop from "../components/HeaderTop";
import Link from "next/link";
import { AudioOutlined, EyeOutlined } from '@ant-design/icons';
import { Input, Table } from 'antd';
import { useEffect } from "react";
import { newDataSet } from "../lib/users";
import useSafqaTableSearch from "../lib/ShebakTableSearch";
const { Search } = Input;

const UsersPage = () => {

  const onSearch = (value) => console.log(value);
  const { getColumnSearchProps } = useSafqaTableSearch()

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      ...getColumnSearchProps('email'),
    },
    {
      title: 'Face Record',
      dataIndex: 'face_record',
      key: 'face_record',
      render: (_, warning) =>
        <>
          <video className="mx-auto text-center" width="200">
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </>
    },
    // {
    //   title: 'Warnings',
    //   dataIndex: 'warnings',
    //   key: 'warnings',
    //   ...getColumnSearchProps('warnings'),
    // },
    {
      title: 'Show',
      dataIndex: 'show',
      key: 'show',
      render: (_, user) =>
        <div className={`${styles.show} mx-auto`}>
          <Link href={`/users/${user.id}`} >
            <EyeOutlined style={{ fontSize: '16px', color: '#66B4D2' }} />
          </Link>
        </div>
    },
  ];

  useEffect(() => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
    //datepicker on change
    $(".dateadded").on("change", function (ret) {
      var v = ret.target.value; // getting search input value

      $("#example").DataTable().columns(3).search(v).draw();
    });

    $("#example").DataTable({
      //remove search lable dont forget ya mariem
      language: { search: "" },

    });
  }, [])

  return (
    <>
      <div className={`${styles.MainDiv} px-4 me-3`}>

        <div className="warnings mt-5">
          <HeaderTop title="Users" />
        </div>
        <br />

        <div>
          <Table columns={columns} dataSource={newDataSet} />
        </div>
      </div>
    </>
  );

}

export default UsersPage
