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
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/slices/userSlice";
const { Search } = Input;

const UsersPage = () => {

  const dispatch = useDispatch()
  const { users, is_loading } = useSelector(state => state.user)
  const onSearch = (value) => console.log(value);
  const { getColumnSearchProps } = useSafqaTableSearch()

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
      render: (_, user) =>
        <>
          <img
            width="200"
            className="mx-auto text-center"
            src={`http://localhost:8000/${user.photo}`}
          />
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


  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <>
      <div className={`${styles.MainDiv} px-4 me-3`}>

        <div className="warnings mt-5">
          <HeaderTop title="Users" />
        </div>
        <br />

        <div>
          <Table
            columns={columns}
            dataSource={users}
            loading={is_loading}
          />
        </div>
      </div>
    </>
  );

}

export default UsersPage
