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

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabledata: [
        { id: 1, name: "Nouran", email: "nouran@gmail.com", face: "" , warnings:"no warning" },
        { id: 2, name: "Mariam", email: "Mariam@gmail.com", face: "", warnings:"no warning" },
        { id: 3, name: "Yara", email: "Yara@gmail.com", face: "" , warnings:"no warning"},
        { id: 4, name: "youssef", email: "youssef@gmail.com", face: "" , warnings:"no warning"},
        { id: 5, name: "mounir", email: "mounir@gmail.com", face: "" , warnings:"no warning"},
        { id: 6, name: "mahmoud", email: "mahmoud@gmail.com", face: "" , warnings:"no warning"},
        { id: 6, name: "mai", email: "mai@gmail.com", face: "" , warnings:"no warning"},
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
            <HeaderTop title="Users" />
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
              <div className="form-group d-flex justify-content-start">
                <Search
                  placeholder="Search"
                  allowClear
                  onSearch={onSearch}
                  style={{
                    height: "38px",
                  }}
                  className="w-50"
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
                    Name
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      opacity: "0.7",
                      color: 'black',
                    }}
                  >
                    Email
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      opacity: "0.7",
                      color: 'black',
                    }}
                  >
                    Face
                  </th>
                  <th
                    style={{
                      textAlign: "center",
                      opacity: "0.7",
                      color: 'black',
                    }}
                  >
                    Warnings
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
                {this.state.tabledata.map(({ name, email, face , warnings }) => {
                  return (
                    <tr
                      style={{
                        fontFamily: "Arial, Helvetica, sans-serif",
                        border: "1px solid rgb(228, 221, 221)",
                      }}
                      className="tr fs-6"
                    >
                      <td style={{ padding: "16px", paddingLeft: "20px" }}>
                        {name}
                      </td>
                      <td
                        style={{
                          padding: "16px",
                          textAlign: "center",
                          opacity: "0.7",
                        }}
                      >
                        {email}
                      </td>
                      <td style={{ padding: "16px", textAlign: "center" }}>
                        <img src={face} alt='' />
                      </td>
                      <td
                        style={{
                          padding: "16px",
                          textAlign: "center",
                          opacity: "0.7",
                        }}
                      >
                        {warnings}
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

export default Users;
