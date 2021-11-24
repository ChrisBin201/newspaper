import styles from '../styles/Home.module.css'
import Image from 'next/image'
export default function Footer() {

    return (
        <footer className="bg-gray-100">
            <div className="bg-gray-600 py-3">
                <div className={"flex justify-between text-white text-sm font-bold " + styles.container} >
                    <a style={{ backgroundImage: "url('/ico-home-white.png')" }}
                        className="bg-no-repeat pl-6"
                        href="" >
                        Trang chủ
                    </a>
                    <div className="divide-x-2" >
                        <a className="px-2"
                            href="https://mail.google.com/mail/u/0/?view=cm&su=Báo Thế giới và Việt Nam&to=baoquocte2016@gmail.com&body=https://baoquocte.vn/&fs=1&tf=1" >
                            Liên hệ tòa soạn
                        </a>
                        <a className="px-2"
                            href="https://baoquocte.vn/thong-tin-toa-soan" >
                            Thông tin tòa soạn
                        </a>
                        <a className="px-2"
                            href="https://baoquocte.vn/lien-he-quang-cao" >
                            Liên hệ quảng cáo
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.container} >
                <div className="flex items-center justify-between py-6 text-sm " >
                    <div className="">
                        <p><b>Báo Thế giới và Việt Nam</b></p>
                        <p>Tổng Biên tập: <b>Nguyễn Văn Trung</b></p>
                        <p>Phó Tổng Biên tập: <b>Đỗ Xuân Thông, Vũ Quang Tùng, Nguyễn Thị Minh Nguyệt</b></p>
                        <p>Giấy phép số 196/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 15/4/2016.</p>
                        <p>Tòa soạn: Số 6 Chu Văn An, Ba Đình, Hà Nội.</p>
                        <p>Điện thoại: 84-24-3799.3206, Hotline: 0879553979, Fax: 84-24-38234169, Email: baoquocte2016@gmail.com</p>
                        <p>© Copyright 2021 "Báo Thế giới &amp; Việt Nam", All rights reserved.</p>
                        <p>® Ghi rõ nguồn "Báo Thế giới &amp; Việt Nam" khi bạn phát hành lại thông tin từ website này.</p>
                    </div>
                    <div>
                        <Image src="/Header/logo.png" width={247} height={90} />
                    </div>
                </div>
            </div>
        </footer>
    )
}