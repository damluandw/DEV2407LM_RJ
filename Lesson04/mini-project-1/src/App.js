import React, { Component } from 'react'
import Title from './components/Title';
import ListStudent from './components/ListStudent';
import Form from './components/Form';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStudent: [
        {
          ID: 1,
          MSV: 'SV001',
          TenSV: 'Nguyễn Văn A',
          Tuoi: 19,
          GioiTinh: true,
          TrangThai: true,
        },
        {
          ID: 2,
          MSV: 'SV002',
          TenSV: 'Nguyễn Văn B',
          Tuoi: 20,
          GioiTinh: true,
          TrangThai: true,
        },
        {
          ID: 3,
          MSV: 'SV003',
          TenSV: 'Nguyễn Thị C',
          Tuoi: 20,
          GioiTinh: false,
          TrangThai: true,
        },
        {
          ID: 4,
          MSV: 'SV004',
          TenSV: 'Nguyễn Văn D',
          Tuoi: 21,
          GioiTinh: true,
          TrangThai: true,
        }
      ],
      check :true
    }
  }

  // let {listStudent} = this.state;

  render() {
    // lấy dữ liệu từ listStudent từ state
    let { listStudent } = this.state;
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <Title />
            {/* truyền dữ liệu listStudent xuống components ListStudent */}
            <ListStudent renderStudents={listStudent} />
          </div>
        </div>
        <Form />
      </div>
    )
  }
}
