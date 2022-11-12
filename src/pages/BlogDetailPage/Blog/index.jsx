import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

import blog1 from "../../../assets/image/blog-1.jpg";

const Blog = () => {
    return (
        <>
            <section className="blogs">
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-8 col-md-8">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="blog-title">
                                        <p className="blog-title-time">
                                            06/08/2022
                                        </p>
                                        <h2>
                                            Bông cải xanh kỵ gì? Những trường
                                            hợp không nên ăn bông cải xanh
                                        </h2>
                                    </div>
                                    <div className="blog-content">
                                        <p>
                                            Bữa ăn gia đình không chỉ thơm ngon
                                            hơn mà còn mang màu sắc bắt mắt, hấp
                                            dẫn hơn khi có sự xuất hiện của bông
                                            cải xanh. Nhưng liệu có phải bông
                                            cải xanh có thể nấu như thế nào cũng
                                            được và đối tượng nào cũng sử dụng
                                            được hay không? Hãy cùng Organica
                                            tìm hiểu kỹ hơn xem bông cải xanh kỵ
                                            gì và những người nào không nên ăn
                                            bông cải xanh thường xuyên nhé!
                                        </p>
                                        <h2>Vì sao nên ăn bông cải xanh?</h2>
                                        <p>
                                            Bông cải xanh chứa nhiều dưỡng chất
                                            thiết yếu cho cơ thể như:
                                        </p>
                                        <ul>
                                            <li>
                                                Vitamin B1, B2, B3, B5, B6 và B9
                                            </li>
                                            <li>Vitamin C và K</li>
                                            <li>Omega-3</li>
                                            <li>Protein</li>
                                            <li>Kali, mangan, phốtpho</li>
                                        </ul>
                                        <div className="blog-image">
                                            <img
                                                src="https://y5kbp0ifnvobj.vcdn.cloud/uploads/filecloud/2022/August/11/13633-530691660198932-1660198932.jpg"
                                                alt=""
                                            />
                                            <span>
                                                Vì sao nên ăn bông cải xanh?
                                            </span>
                                        </div>
                                        <p>
                                            Với những dưỡng chất thiết yếu căn
                                            bản này, bông cải xanh mang về nhiều
                                            lợi ích sức khỏe cho người sử dụng.
                                            Cụ thể như là:
                                        </p>
                                        <ul>
                                            <li>
                                                Chứa hợp chất thiocyanat giúp
                                                gan loại bỏ độc tố, hỗ trợ thanh
                                                lọc cơ thể.
                                            </li>
                                            <li>
                                                Chất xơ trong bông cải xanh giúp
                                                hệ tiêu hóa làm sạch chất thải.
                                            </li>
                                            <li>
                                                Chứa các chất chống oxy hóa ngăn
                                                ngừa tổn thương do gốc tự do,
                                                giảm thiểu stress oxy hóa.
                                            </li>
                                            <li>
                                                Chứa các hợp chất chống viêm,
                                                tốt cho người bệnh viêm khớp,
                                                viêm ruột, tiểu đường,...
                                            </li>
                                            <li>
                                                Hỗ trợ phòng ngừa bệnh tim mạch
                                                nhờ khả năng giảm viêm của mạch
                                                máu và các rối loạn liên quan.
                                            </li>
                                        </ul>
                                        <p>{"==> Mời bạn xem thêm:"}</p>
                                        <ul>
                                            <li>
                                                <a href="">
                                                    Mới mắc bệnh tiểu đường nên
                                                    ăn rau củ quả nào?
                                                </a>
                                            </li>
                                            <li>
                                                <a href="">
                                                    Ăn súp lơ xanh (bông cải) có
                                                    tốt cho người giảm cân và
                                                    người bệnh tiểu đường?
                                                </a>
                                            </li>
                                        </ul>
                                        <p>
                                            Ngoài ra bông cải xanh cũng hỗ trợ
                                            phòng ngừa một số loại ung thư,
                                            chẳng hạn như: ung thư đại tràng,
                                            ung thư vú, ung thư buồng trứng, ung
                                            thư tuyến tiền liệt, ung thư bàng
                                            quang,...
                                        </p>
                                        <h2>Bông cải xanh kỵ gì?</h2>
                                        <p>
                                            Là thực phẩm mang lại nhiều dưỡng
                                            chất cho cơ thể, tuy nhiên, trước
                                            khi bạn đến các cửa hàng thực phẩm
                                            để chọn cho mình các loại rau hữu cơ
                                            cho bữa ăn của mình, hãy xem thử các
                                            nội dung bên dưới các bạn nhé.
                                        </p>
                                        <div className="blog-image">
                                            <img
                                                src="https://y5kbp0ifnvobj.vcdn.cloud/uploads/filecloud/2022/August/11/13631-842621660198932-1660198932.jpg"
                                                alt=""
                                            />
                                            <span>Bông cải xanh kỵ gì?</span>
                                        </div>
                                        <p>
                                            Dưới đây là một số thực phẩm tuy
                                            thơm ngon, quen thuộc nhưng nên
                                            tránh kết hợp cùng bông cải xanh để
                                            hạn chế những tác dụng không mong
                                            muốn.
                                        </p>
                                        <p>
                                            <strong>Sữa bò</strong>: sự kết hợp
                                            làm giảm bớt giá trị dinh dưỡng và
                                            ảnh hưởng tới quá trình hấp thụ
                                            canxi.
                                        </p>
                                        <p>
                                            <strong>Dưa leo</strong>: tương tự
                                            như bí ngòi, dưa leo cũng có chứa
                                            các enzyme phân hủy vitamin C, kết
                                            hợp với bông cải xanh sẽ làm giảm
                                            giá trị dinh dưỡng của nó.
                                        </p>
                                        <p>
                                            <strong>Gan lợn</strong>: chất xơ
                                            trong bông cải xanh sẽ làm giảm sự
                                            hấp thụ các khoáng chất sắt,
                                            đồng,... có trong gan lợn.
                                        </p>
                                        <p>
                                            <strong>Gan bò</strong>: vitamin C
                                            trong bông cải xanh và đồng trong
                                            gan bò kết hợp với nhau sẽ làm oxy
                                            hóa vitamin và mất đi giá trị dinh
                                            dưỡng vốn có của bông cải xanh.
                                        </p>
                                        <p>
                                            Ngoài những thực phẩm này thì bông
                                            cải xanh có thể kết hợp với rất
                                            nhiều thực phẩm khác mang tới giá
                                            trị dinh dưỡng cao và món ăn ngon
                                            cho gia đình, ví dụ có thể kể đến:
                                            thịt gà, thịt bò, tôm, nấm, cà rốt,
                                            cà chua,...
                                        </p>
                                        <p>
                                            Organica tự hào là đơn vị cung cấp
                                            bông cải xanh nói riêng và các thực
                                            phẩm đạt chuẩn hữu cơ quốc tế USDA
                                            và EU nói chung.
                                        </p>
                                        <p>
                                            Bông cải xanh của Organica được canh
                                            tác theo hướng hữu cơ - quá trình
                                            canh tác hoàn toàn không sử dụng
                                            phân bón hóa học, thuốc diệt cỏ, trừ
                                            sâu, thuốc bảo vệ thực vật và chất
                                            kích thích tăng trưởng. Lựa chọn
                                            bông cải xanh của Organica là mang
                                            tới nguồn thực phẩm giàu dinh dưỡng,
                                            đạt chuẩn chất lượng, thơm ngon cho
                                            bữa cơm gia đình bạn!
                                        </p>
                                        <p>
                                            Một món ăn ngon miệng, giàu dinh
                                            dưỡng như bông cải xanh cũng cần có
                                            những lưu ý để đảm bảo giá trị dinh
                                            dưỡng trọn vẹn. Với những chia sẻ từ
                                            Organica về việc bông cải xanh kỵ gì
                                            và không nên sử dụng cho đối tượng
                                            nào, hy vọng bạn sẽ có những lựa
                                            chọn tinh tế, hợp lý khi chế biến
                                            bông cải xanh. Và đừng quên mua bông
                                            cải thơm ngon, đạt chuẩn chất lượng
                                            từ hệ thống của Organica nhé, xem
                                            ngay tại sản phẩm Bông cải xanh hữu
                                            cơ Organica.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row">
                        <div className="col-lg-12">
                            <div className="shop-paginate">
                                <p>Hiển Thị 12 Trên 60 Kết Quả</p>
                                <ul className="pagination">
                                    <li className="pagination-item">
                                        <a href="">
                                            <i className="fa-solid fa-arrow-left-long"></i>
                                        </a>
                                    </li>
                                    <li className="pagination-item">
                                        <a className=" active" href="">1</a>
                                    </li>
                                    <li className="pagination-item">
                                        <a href="">2</a>
                                    </li>
                                    <li className="pagination-item">
                                        <a href="">3</a>
                                    </li>
                                    <li className="pagination-item">
                                        ...
                                    </li>
                                    <li className="pagination-item">
                                        <a href="">60</a>
                                    </li>
                                    <li className="pagination-item">
                                        <a href="">
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>  */}
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <div className="blogs-widget">
                                <h3 className="bolgs-widget-title">Tìm Blog</h3>
                                <form className="blogs-widget-form">
                                    <input
                                        type="text"
                                        placeholder="Tìm blogs"
                                    />
                                    <button>
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </form>
                            </div>
                            <div className="blogs-widget">
                                <h3 className="bolgs-widget-title">
                                    Bài Viết Nổi Bật
                                </h3>
                                <ul className="blogs-widget-featured">
                                    <li>
                                        <Link to="/blog-detail-page">
                                            <img src={blog1} alt="" />
                                        </Link>
                                        <h6>
                                            <Link to="/blog-detail-page">
                                                Gợi ý các món ăn với ốc hương
                                                ngon khó cưỡng cho team mê hải
                                                sản
                                            </Link>
                                            <span>tháng 2 năm 2021</span>
                                        </h6>
                                    </li>
                                    <li>
                                        <Link to="/blog-detail-page">
                                            <img src={blog1} alt="" />
                                        </Link>
                                        <h6>
                                            <Link to="/blog-detail-page">
                                                Những cách tăng cân cho người
                                                gầy khó hấp thụ được chuyên gia
                                                bật mí
                                            </Link>
                                            <span>tháng 2 năm 2021</span>
                                        </h6>
                                    </li>
                                    <li>
                                        <Link to="/blog-detail-page">
                                            <img src={blog1} alt="" />
                                        </Link>
                                        <h6>
                                            <Link to="/blog-detail-page">
                                                Ăn gì để giảm mụn? Lưu lại ngay
                                                danh sách dưới đây để trị mụn
                                                hiệu quả
                                            </Link>
                                            <span>tháng 2 năm 2021</span>
                                        </h6>
                                    </li>
                                    <li>
                                        <Link to="/blog-detail-page">
                                            <img src={blog1} alt="" />
                                        </Link>
                                        <h6>
                                            <Link to="/blog-detail-page">
                                                Xuýt xoa trước những món ăn với
                                                bạch tuộc giòn ngon đậm đà
                                            </Link>
                                            <span>tháng 2 năm 2021</span>
                                        </h6>
                                    </li>
                                    <li>
                                        <Link to="/blog-detail-page">
                                            <img src={blog1} alt="" />
                                        </Link>
                                        <h6>
                                            <Link to="/blog-detail-page">
                                                Cá nục làm gì ngon nhất? Khám
                                                phá món ăn ngon giàu dinh dưỡng
                                            </Link>
                                            <span>tháng 2 năm 2021</span>
                                        </h6>
                                    </li>
                                </ul>
                            </div>
                            <div className="blogs-widget">
                                <h3 className="bolgs-widget-title">
                                    Chia sẻ Blog
                                </h3>
                                <ul className="blogs-widget-social">
                                    <li>
                                        <a href="">
                                            <i className="fa-brands fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="fa-brands fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="fa-brands fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
