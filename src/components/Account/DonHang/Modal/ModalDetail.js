import React, { useState } from 'react';
import Draggable from 'react-draggable';
import style from '../styles.module.scss';
import { Modal } from 'antd';
import PropTypes from 'prop-types';
import ConvertStringToVND from '../../../../util/ConvertStringToVND';
import useCartLogicData from '../../../../hooks/useCartLogicData';
import useProductLogicData from '../../../../hooks/useProductLogicData';
import { BASE_URL_IMAGE } from '../../../../util/TypeApi';

function ModalDetail(props) {
	const { item, setItem } = props;

	// hooks
	const { carts } = useCartLogicData();
	const { product } = useProductLogicData();
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
		setItem();
	};
	if (!item && Object.keys(product).length === 0 && Object.keys(carts).length === 0)
		return <React.Fragment />;
	return (
		<Modal
			title={'CHI TIẾT ĐƠN HÀNG CỦA BẠN'}
			visible={!!item}
			onCancel={handleCancelDetail}
			footer={null}
			width={'750px'}
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
								<b>{item._id}</b>
							</span>
						</div>
						<div className={style.line_order_info}>
							<span className={style.left_order_info}>Ngày đặt hàng:</span>
							<span className={style.right_order_info}>
								{new Date(item.created).toLocaleDateString()}
							</span>
						</div>
						<div className={style.line_order_info}>
							<span className={style.left_order_info}>Tổng giá trị:</span>
							<span className={style.right_order_info}>
								{ConvertStringToVND(item.amount)}
							</span>
						</div>
						<div className={style.line_order_info}>
							<div className={style.line_order_info_left}>
								<span className={style.left_order_info}>Trạng thái:</span>
								<span className={style.right_order_info} style={{ fontWeight: 'bold' }}>
									{item.status_transaction}
								</span>
							</div>
							{item.messageError && (
								<div className={style.line_order_info_right}>
									<span style={{ color: '#c32d2d', width: '20%', paddingLeft: 10 }}>
										Lý do hủy :
									</span>
									<span style={{ width: '80%', paddingLeft: 10 }}>
										{item.messageError}
									</span>
								</div>
							)}
						</div>
					</div>
					<div className={style.add_giaohang}>
						<span style={{ textTransform: 'uppercase' }}>Địa chỉ giao hàng :</span>
						<span style={{ marginLeft: 10 }}>{item.address}</span>
					</div>
				</div>
				<div className={style.content_order_detail}>
					<div className={style.header_manage_order}>
						<span className={style.head_col1}>Danh sách sản phẩm</span>
						<span className={style.head_col2}>Đơn giá</span>
						<span className={style.head_col3}>Thành tiền</span>
					</div>
					<div className={style.inside_order_detail}>
						{item.carts_id.map(
							(cartId) =>
								carts[cartId] &&
								product[carts[cartId].product_id] && (
									<div className={style.item_order} key={cartId}>
										<img
											src={BASE_URL_IMAGE + product[carts[cartId].product_id].image}
											alt={cartId}
										/>
										<div className={style.item_order_name}>
											<span className={style.name_order_detail}>
												{product[carts[cartId].product_id].name}
											</span>
											<span style={{ marginLeft: 10 }}>
												Số lượng: {carts[cartId].amount}
											</span>
										</div>
										<span className={style.item_order_gia}>
											{ConvertStringToVND(product[carts[cartId].product_id].amount)}
										</span>
										<span className={style.item_order_tien}>
											{ConvertStringToVND(
												carts[cartId].amount * product[carts[cartId].product_id].amount
											)}
										</span>
									</div>
								)
						)}
						{/*<div className={style.bottom_order}>*/}
						{/*	<span className={style.count_pro_order}>*/}
						{/*		Tổng cộng: <b>1 sản phẩm</b>*/}
						{/*	</span>*/}
						{/*	<span className={style.total_price_order}>*/}
						{/*		Tạm tính: <b>54.000đ</b>*/}
						{/*	</span>*/}
						{/*	<span className={style.total_price_order_clear}>*/}
						{/*		Tổng tiền: <b>54.000đ</b>*/}
						{/*	</span>*/}
						{/*</div>*/}
					</div>
				</div>
			</div>
		</Modal>
	);
}

ModalDetail.propTypes = {
	item: PropTypes.string,
	setItem: PropTypes.func,
};

ModalDetail.defaultProps = {
	item: '',
	setItem: () => null,
};

export default React.memo(ModalDetail);
