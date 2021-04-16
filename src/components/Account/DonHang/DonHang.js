import React from 'react';
// import PropTypes from 'prop-types';
import style from './styles.module.css';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
function DonHang() {
	return (
		<div className={style.purchase_list_page__tabs_container}>
			<div className={style.card_container}>
				<Tabs type="card">
					<TabPane tab="Tất cả" key="1">
						<p>Content of Tab Pane 1</p>
						<p>Content of Tab Pane 1</p>
						<p>Content of Tab Pane 1</p>
					</TabPane>
					<TabPane tab="Chờ xác nhận" key="2">
						<p>Content of Tab Pane 2</p>
						<p>Content of Tab Pane 2</p>
						<p>Content of Tab Pane 2</p>
					</TabPane>
					<TabPane tab="Chờ lấy hàng" key="3">
						<p>Content of Tab Pane 3</p>
						<p>Content of Tab Pane 3</p>
						<p>Content of Tab Pane 3</p>
					</TabPane>
					<TabPane tab="Đang giao" key="4">
						<p>Content of Tab Pane 4</p>
						<p>Content of Tab Pane 4</p>
						<p>Content of Tab Pane 4</p>
					</TabPane>
					<TabPane tab="Đã giao" key="5">
						<p>Content of Tab Pane 5</p>
						<p>Content of Tab Pane 5</p>
						<p>Content of Tab Pane 5</p>
					</TabPane>
					<TabPane tab="Đã hủy" key="6">
						<p>Content of Tab Pane 6</p>
						<p>Content of Tab Pane 6</p>
						<p>Content of Tab Pane 6</p>
					</TabPane>
				</Tabs>
			</div>
		</div>
	);
}

DonHang.propTypes = {};

DonHang.defaultProps = {};

export default DonHang;
