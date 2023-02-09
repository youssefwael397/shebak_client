import React from "react";
import styles from "../styles/Warnings.module.css";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import HeaderTop from "../components/HeaderTop";
import Link from "next/link";
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = (value) => console.log(value);

class Warnings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabledata: [
        { id: 1, stats: "fire", image: "", date: "2021-09-20" },
        { id: 2, stats: "fight", image: "", date: "2021-09-17" },
        { id: 3, stats: "fight", image: "", date: "2021-09-17" },
        { id: 4, stats: "fire", image: "", date: "2021-09-17" },
        { id: 5, stats: "fight", image: "", date: "2021-09-14" },
        { id: 6, stats: "fight", image: "", date: "2021-09-14" },
      ],
    };
  }
  componentDidMount() {
    //initialize datatable
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
    //   $('#example').dataTable( {
    //     language: {
    //         searchPlaceholder: "Search records"
    //     }
    // } );
  }

  render() {

    return (
      <>
        <div className={`${styles.MainDiv} px-5`}>

          <div className="warnings mt-5">
            <HeaderTop title="Warnings History" />
            {/* <div>
              <button
                type="text"
                value=""
                style={{
                  marginRight: "25px",
                  padding: "10px",
                  color: "black",
                  background: "white",
                  borderRadius: "7px",
                  border: "1px solid rgb(176, 167, 167)",
                  fontFamily: "Arial, Helvetica, sans-serif",
                  fontSize: "15px",
                  fontWeight: "550",
                }}
              >
                <i
                  style={{ marginRight: "10px", fontSize: '17px', color: ' black', fontWeight: '800' }}
                  className="bi bi-cloud-download"
                ></i>
                Download CSV
              </button>
              <button style={{ padding: "10px 18px", background: '#21688a', color: 'white', border: 'none', borderRadius: "7px", fontWeight: "550", fontSize: '15px' }} > <i style={{ fontSize: '18px' }} className="bi bi-plus-lg"></i> Add </button>
            </div>*/}
          </div>
          <br />

          <div>
            <div className="mb-3">
              <div className="form-group d-flex justify-content-between">
                <input
                  type="date"
                  className="dateadded form-control shadow-none w-25"
                />
                <Search
                  placeholder="Search"
                  allowClear
                  onSearch={onSearch}
                  style={{
                    height: "38px",
                  }}
                  className="w-25"
                />
                {/* <i className="bi bi-search me-4 mt-2"></i> */}
              </div>
            </div>

            <table id="example" className={`${styles.display} mb-2`}>
              <thead>
                <tr className="fs-6">
                  <th
                    style={{
                      paddingLeft: "15px",
                      opacity: "0.7",
                      color: 'black',
                    }}
                  >
                    Stats
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      opacity: "0.7",
                      color: 'black',
                    }}
                  >
                    Date
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      opacity: "0.7",
                      color: 'black',
                    }}
                  >
                    Capure
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      opacity: "0.7",
                      color: 'black',
                    }}
                  >
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.tabledata.map(({ stats, date, image, link }) => {
                  return (
                    <tr
                      style={{
                        fontFamily: "Arial, Helvetica, sans-serif",
                        border: "1px solid rgb(228, 221, 221)",
                      }}
                      className="tr fs-6"
                    >
                      <td style={{ padding: "16px", paddingLeft: "20px" }}>
                        {stats}
                      </td>
                      <td
                        style={{
                          padding: "16px",
                          textAlign: "center",
                          opacity: "0.7",
                        }}
                      >
                        {date}
                      </td>
                      <td style={{ padding: "16px", textAlign: "center" }}>
                        <img src={image} alt='' />
                      </td>
                      <td style={{ padding: "16px" }} className="text-center">
                        <Link href={`warnings/1`} style={{ color: '#21688a', fontWeight: '600' }}>
                          View
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Warnings;