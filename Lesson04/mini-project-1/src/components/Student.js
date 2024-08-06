import React, { Component } from 'react'

export default class Student extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { key, renderStudent, stt } = this.props;
        console.log(renderStudent.GioiTinh)
        return (
            <tr>
                <td>{stt}</td>
                <td>{renderStudent.MSV}</td>
                <td>{renderStudent.TenSV}</td>
                <td>{renderStudent.Tuoi}</td>
                <td>
                    {renderStudent.GioiTinh == true? "Nam" : "Nữ"}
                </td>
                <td>
                    <div className="template-demo">
                        <button
                            type="button"
                            className="btn btn-danger btn-icon-text"
                        >
                            Xem
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning btn-icon-text"
                        >
                            Sửa
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-icon-text"
                        >
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
}
