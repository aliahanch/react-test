import React, {Component} from 'react';
import {tableData} from "./dataTable";

class Tabs extends Component {
    state={
        dataTab:tableData,
    };

    render() {

        const id = this.props.idTab;
        return (
            <div>
                <table className="table table-striped text-ss">
                    <thead>
                    <tr>
                        <th scope="col">مشخصات کلی</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">ابعاد</th>
                        <td>{this.state.dataTab[id-1].size}</td>
                    </tr>
                    <tr>
                        <th scope="row">سیکارت</th>
                        <td>{this.state.dataTab[id-1].sim}</td>

                    </tr>
                    <tr>
                        <th scope="row">وزن</th>
                        <td>{this.state.dataTab[id-1].wight}</td>
                    </tr>
                    <tr>
                        <th scope="row">ساختار بدنه</th>
                        <td>{this.state.dataTab[id-1].body}</td>
                    </tr>
                    <tr>
                        <th scope="row">ویژگی ها</th>
                        <td>{this.state.dataTab[id-1].attrebute}</td>
                    </tr>
                    <tr>
                        <th scope="row">چیپ</th>
                        <td>{this.state.dataTab[id-1].chip}</td>
                    </tr>
                    <tr>
                        <th scope="row">پردازنده</th>
                        <td>{this.state.dataTab[id-1].cpu}</td>
                    </tr>
                    <tr>
                        <th scope="row">نوع پردازنده</th>
                        <td>{this.state.dataTab[id-1].cpuV}</td>
                    </tr>
                    <tr>
                        <th scope="row">فرکانس پردازنده</th>
                        <td>{this.state.dataTab[id-1].cpuF}</td>
                    </tr>
                    <tr>
                        <th scope="row">پردازنده گرافیکی</th>
                        <td>{this.state.dataTab[id-1].gpu}</td>
                    </tr>
                    <tr>
                        <th scope="row">حافظه داخلی</th>
                        <td>{this.state.dataTab[id-1].rom}</td>
                    </tr>
                    <tr>
                        <th scope="row">حافظه رم</th>
                        <td>{this.state.dataTab[id-1].ram}</td>
                    </tr>
                    <tr>
                        <th scope="row">پشتیبانی از کارت microSD</th>
                        <td>{this.state.dataTab[id-1].supportMsd}</td>
                    </tr>
                    <tr>
                        <th scope="row">حداکثر حافظه پشتیبانی </th>
                        <td>{this.state.dataTab[id-1].supportSdMax}</td>
                    </tr>
                    <tr>
                        <th scope="row">صفحه نمایش</th>
                        <td>{this.state.dataTab[id-1].display}</td>
                    </tr>
                    <tr>
                        <th scope="row">اندازه نمایشگر</th>
                        <td>{this.state.dataTab[id-1].displaySize}</td>
                    </tr>
                    <tr>
                        <th scope="row">رزولوشن</th>
                        <td>{this.state.dataTab[id-1].resolotion}</td>
                    </tr>
                    <tr>
                        <th scope="row">تراکم پیکسلی</th>
                        <td>{this.state.dataTab[id-1].pixels}</td>
                    </tr>
                    <tr>
                        <th scope="row">محافظ</th>
                        <td>{this.state.dataTab[id-1].gourd}</td>
                    </tr>
                    <tr>
                        <th scope="row">دیگر ویژگی ها</th>
                        <td>{this.state.dataTab[id-1].other}</td>
                    </tr>
                    <tr>
                        <th scope="row">شکبه</th>
                        <td>{this.state.dataTab[id-1].network}</td>
                    </tr>
                    <tr>
                        <th scope="row">2G</th>
                        <td>{this.state.dataTab[id-1].n2G}</td>
                    </tr>
                    <tr>
                        <th scope="row">3G</th>
                        <td>{this.state.dataTab[id-1].n3G}</td>
                    </tr>
                    <tr>
                        <th scope="row">4G</th>
                        <td>{this.state.dataTab[id-1].n4G}</td>
                    </tr>
                    <tr>
                        <th scope="row">ارتباطات</th>
                        <td>{this.state.dataTab[id-1].transfer}</td>
                    </tr>
                    <tr>
                        <th scope="row">وای فای</th>
                        <td>{this.state.dataTab[id-1].wifi}</td>
                    </tr>
                    <tr>
                        <th scope="row">رادیو</th>
                        <td>{this.state.dataTab[id-1].radio}</td>
                    </tr>
                    <tr>
                        <th scope="row">بلوتوث</th>
                        <td>{this.state.dataTab[id-1].blow}</td>
                    </tr>
                    <tr>
                        <th scope="row">درگاه ورودی</th>
                        <td>{this.state.dataTab[id-1].input}</td>
                    </tr>
                    <tr>
                        <th scope="row">دوربین</th>
                        <td>{this.state.dataTab[id-1].cameraR}</td>
                    </tr>
                    <tr>
                        <th scope="row">فلش</th>
                        <td>{this.state.dataTab[id-1].flash}</td>
                    </tr>
                    <tr>
                        <th scope="row">توضیحات دوربین</th>
                        <td>{this.state.dataTab[id-1].cameraO}</td>
                    </tr>
                    <tr>
                        <th scope="row">فیلم برداری</th>
                        <td>{this.state.dataTab[id-1].cameraVideo}</td>
                    </tr>
                    <tr>
                        <th scope="row">دوربین سلفی</th>
                        <td>{this.state.dataTab[id-1].cameraSelf}</td>
                    </tr>
                    <tr>
                        <th scope="row">سیستم عامل</th>
                        <td>{this.state.dataTab[id-1].OS}</td>
                    </tr>
                    <tr>
                        <th scope="row">ویدیو</th>
                        <td>{this.state.dataTab[id-1].videoSupport}</td>
                    </tr>
                    <tr>
                        <th scope="row">موزیک</th>
                        <td>{this.state.dataTab[id-1].musicSupport}</td>
                    </tr>
                    <tr>
                        <th scope="row">باتری</th>
                        <td>{this.state.dataTab[id-1].battery}</td>
                    </tr>
                    <tr>
                        <th scope="row">ویژگی های باتری</th>
                        <td>{this.state.dataTab[id-1].otherBattery}</td>
                    </tr>
                    <tr>
                        <th scope="row">اقلام داخل جعبه</th>
                        <td>{this.state.dataTab[id-1].inBox}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tabs;