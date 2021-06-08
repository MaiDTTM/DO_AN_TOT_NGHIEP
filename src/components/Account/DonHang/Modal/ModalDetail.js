import React, { useState } from 'react';
import Draggable from 'react-draggable';
import style from '../styles.module.scss';
import { Modal } from 'antd';
// import PropTypes from 'prop-types';

function ModalDetail(props) {
	const { isModalVisible2, setIsModalVisible2 } = props;
	const draggleRef = React.createRef();
	const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });

	const onStart = (event, uiData) => {
		const { clientWidth, clientHeight } = window?.document?.documentElement;
		const targetRect = draggleRef?.current?.getBoundingClientRect();
		setBounds({
			left: -targetRect?.left + uiData?.x,
			right: clientWidth - (targetRect?.right - uiData?.x),
			top: -targetRect?.top + uiData?.y,
			bottom: clientHeight - (targetRect?.bottom - uiData?.y),
		});
	};
	const handleCancelDetail = () => {
		setIsModalVisible2(false);
	};
	return (
		<Modal
			title="CHI TIẾT ĐƠN HÀNG CỦA BẠN"
			visible={isModalVisible2}
			onCancel={handleCancelDetail}
			footer={null}
			width="750px"
			modalRender={(modal) => (
				<Draggable bounds={bounds} onStart={(event, uiData) => onStart(event, uiData)}>
					<div ref={draggleRef}>{modal}</div>
				</Draggable>
			)}
		>
			<div className={style.modal_xem_detail}>
				<div className={style.top_order_detail}>
					<div className={style.title_order}>
						<b>Chi tiết đơn hàng</b>
					</div>
					<div className={style.order_info}>
						<div className={style.line_order_info}>
							<span className={style.left_order_info}>Mã đơn hàng:</span>
							<span className={style.right_order_info}>
								<b>PC36529905D53D4</b>
							</span>
						</div>
						<div className={style.line_order_info}>
							<span className={style.left_order_info}>Ngày đặt hàng:</span>
							<span className={style.right_order_info}>21/33/21 10:33</span>
						</div>
						<div className={style.line_order_info}>
							<span className={style.left_order_info}>Tổng giá trị:</span>
							<span className={style.right_order_info}>54.000đ</span>
						</div>
						<div className={style.line_order_info}>
							<div className={style.line_order_info_left}>
								<span className={style.left_order_info}>Trạng thái:</span>
								<span className={style.right_order_info} style={{ fontWeight: 'bold' }}>
									Chờ xác nhận
								</span>
							</div>
							<div className={style.line_order_info_right}>
								<span style={{ color: '#c32d2d', width: '20%', paddingLeft: 10 }}>
									Lý do hủy :
								</span>
								<span style={{ width: '80%', paddingLeft: 10 }}>
									sdfffffffffffffffffffffffffffsdfffffffffffffffffffffffffffffffffffffffffffffffffffff
								</span>
							</div>
						</div>
					</div>
					<div className={style.add_giaohang}>
						<span style={{ textTransform: 'uppercase' }}>Địa chỉ giao hàng :</span>
						<span style={{ marginLeft: 10 }}>
							Cuối ngõ 68 Triều Khúc - Tân Triều - Hà Nội{' '}
						</span>
					</div>
				</div>
				<div className={style.content_order_detail}>
					<div className={style.header_manage_order}>
						<span className={style.head_col1}>Danh sách sản phẩm</span>
						<span className={style.head_col2}>Đơn giá</span>
						<span className={style.head_col3}>Thành tiền</span>
					</div>
					<div className={style.inside_order_detail}>
						<div className={style.item_order}>
							<img src="https://media.shoptretho.com.vn/upload/image/product/20200616/body-coc-tay-be-trai-ubb1007-mau-ghi-1.jpg?mode=max&width=63&height=63" />
							<div className={style.item_order_name}>
								<span className={style.name_order_detail}>
									Body cộc tay bé trai Uri&Finn UBB1007 (ghi)
								</span>
								<span style={{ marginLeft: 10 }}>Số lượng: 1</span>
							</div>
							<span className={style.item_order_gia}>54.000đ</span>
							<span className={style.item_order_tien}>54.000đ</span>
						</div>
						<div className={style.bottom_order}>
							<span className={style.count_pro_order}>
								Tổng cộng: <b>1 sản phẩm</b>
							</span>
							<span className={style.total_price_order}>
								Tạm tính: <b>54.000đ</b>
							</span>
							<span className={style.total_price_order_clear}>
								Tổng tiền: <b>54.000đ</b>
							</span>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
}

ModalDetail.propTypes = {};

ModalDetail.defaultProps = {};

export default ModalDetail;
