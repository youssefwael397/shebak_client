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
import { newDataSet } from "../lib/warnings";
import useSafqaTableSearch from "../lib/ShebakTableSearch";
const { Search } = Input;

const WarningsPage = () => {

  const onSearch = (value) => console.log(value);
  const { getColumnSearchProps } = useSafqaTableSearch()

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
      title: 'Thumbnail',
      dataIndex: 'video_name',
      key: 'video_name',
      render: (_, warning) =>
        <>
          <video className="mx-auto text-center" width="200">
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </>
    },
    {
      title: 'Show',
      dataIndex: 'show',
      key: 'show',
  render: (_, warning) =>
    <div className={`${styles.show} mx-auto`}>
      <Link href={`/warnings/${warning.id}`} >
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
        <HeaderTop title="Warnings History" />
      </div>
      <br />

      <div>
        <Table columns={columns} dataSource={newDataSet}/>
      </div>
    </div>
  </>
);

}

export default WarningsPage