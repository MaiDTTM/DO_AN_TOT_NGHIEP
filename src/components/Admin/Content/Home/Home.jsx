import React from 'react';
import { Badge, Calendar, Tabs, Row, Col, Tooltip } from 'antd';
import {
	AndroidOutlined,
	AppleOutlined,
	CopyOutlined,
	InfoCircleOutlined,
	MoneyCollectOutlined,
	QuestionCircleOutlined,
} from '@ant-design/icons';
import Trend from 'ant-design-pro/lib/Trend';
import style from './styles.module.css';
import NumberInfo from 'ant-design-pro/lib/NumberInfo';
import {
	ChartCard,
	Field,
	MiniArea,
	MiniBar,
	MiniProgress,
} from 'ant-design-pro/lib/Charts';
import numeral from 'numeral';
import moment from 'moment';
// import PropTypes from 'prop-types';
const { TabPane } = Tabs;
const visitData = [];
const beginDay = new Date().getTime();
for (let i = 0; i < 20; i += 1) {
	visitData.push({
		x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
		y: Math.floor(Math.random() * 100) + 10,
	});
}
function Home() {
	function getListData(value) {
		let listData;
		switch (value.date()) {
			case 8:
				listData = [
					{ type: 'warning', content: 'This is warning event.' },
					{ type: 'success', content: 'This is usual event.' },
				];
				break;
			case 10:
				listData = [
					{ type: 'warning', content: 'This is warning event.' },
					{ type: 'success', content: 'This is usual event.' },
					{ type: 'error', content: 'This is error event.' },
				];
				break;
			case 15:
				listData = [
					{ type: 'warning', content: 'This is warning event' },
					{ type: 'success', content: 'This is very long usual event。。....' },
					{ type: 'error', content: 'This is error event 1.' },
					{ type: 'error', content: 'This is error event 2.' },
					{ type: 'error', content: 'This is error event 3.' },
					{ type: 'error', content: 'This is error event 4.' },
				];
				break;
			default:
		}
		return listData || [];
	}
	function dateCellRender(value) {
		const listData = getListData(value);
		return (
			<ul className="events">
				{listData.map((item) => (
					<li key={item.content}>
						<Badge status={item.type} text={item.content} />
					</li>
				))}
			</ul>
		);
	}
	function getMonthData(value) {
		if (value.month() === 8) {
			return 1394;
		}
	}
	function monthCellRender(value) {
		const num = getMonthData(value);
		return num ? (
			<div className="notes-month">
				<section>{num}</section>
				<span>Backlog number</span>
			</div>
		) : null;
	}
	return (
		<div className={style.app_main}>
			<Tabs defaultActiveKey="1">
				<TabPane
					tab={
						<span>
							<AppleOutlined />
							Biểu đồ
						</span>
					}
					key="1"
				>
					<div style={{ display: 'flex' }}>
						<div className={style.ItemGrid_grid_282}>
							<div className={style.StatsCard_card_283}>
								<div className={style.StatsCard_card_283_top}>
									<div style={{ margin: 8 }}>
										<CopyOutlined style={{ fontSize: 28, color: '#fff' }} />
									</div>
								</div>
								<div className={style.StatsCard_cardContent_290}>
									<p className={style.StatsCard_cardCategory_293}>Lượt truy cập</p>
									<h2 className={style.StatsCard_cardTitle_294}>
										50 <small className={style.StatsCard_cardTitleSmall_295}>lượt</small>
									</h2>
								</div>
								<div className={style.StatsCard_cardActions_296}>
									<div className={style.StatsCard_cardStats_297}>
										<svg
											className={style.StatsCard_dangerCardStatsIcon_301}
											focusable="false"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
										</svg>
										<a href="#pablo" className={style.StatsCard_cardStatsLink_306}>
											Get More Space...
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className={style.ItemGrid_grid_282}>
							<div className={style.StatsCard_card_283}>
								<div className={style.StatsCard_card_283_top_owe}>
									<div style={{ margin: 8 }}>
										<MoneyCollectOutlined style={{ fontSize: 28, color: '#fff' }} />
									</div>
								</div>
								<div className={style.StatsCard_cardContent_290}>
									<p className={style.StatsCard_cardCategory_293}>Doanh thu</p>
									<h2 className={style.StatsCard_cardTitle_294}>$ 34.245</h2>
								</div>
								<div className={style.StatsCard_cardActions_296}>
									<div className={style.StatsCard_cardStats_297}>
										<svg
											className={style.StatsCard_dangerCardStatsIcon_301_owe}
											focusable="false"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
										</svg>
										<a
											href="#pablo"
											className={style.StatsCard_cardStatsLink_306}
											style={{ color: '#999999' }}
										>
											24 giờ qua
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className={style.ItemGrid_grid_282}>
							<div className={style.StatsCard_card_283}>
								<div
									className={style.StatsCard_card_283_top_owe}
									style={{
										background: 'linear-gradient(\n' + '60deg\n' + ', #ef5350, #e53935)',
									}}
								>
									<div style={{ margin: 8 }}>
										<InfoCircleOutlined style={{ fontSize: 28, color: '#fff' }} />
									</div>
								</div>
								<div className={style.StatsCard_cardContent_290}>
									<p className={style.StatsCard_cardCategory_293}>Doanh thu</p>
									<h2 className={style.StatsCard_cardTitle_294}>$ 34.245</h2>
								</div>
								<div className={style.StatsCard_cardActions_296}>
									<div className={style.StatsCard_cardStats_297}>
										<svg
											className={style.StatsCard_dangerCardStatsIcon_301_owe}
											focusable="false"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
										</svg>
										<a
											href="#pablo"
											className={style.StatsCard_cardStatsLink_306}
											style={{ color: '#999999' }}
										>
											Theo dõi từ Github
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className={style.ItemGrid_grid_282}>
							<div className={style.StatsCard_card_283}>
								<div
									className={style.StatsCard_card_283_top_owe}
									style={{
										background: 'linear-gradient(\n' + '60deg\n' + ', #26c6da, #00acc1)',
									}}
								>
									<div style={{ margin: 3 }}>
										<svg
											className={style.StatsCard_cardIcon_291}
											focusable="false"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
										</svg>
									</div>
								</div>
								<div className={style.StatsCard_cardContent_290}>
									<p className={style.StatsCard_cardCategory_293}>Người theo dõi</p>
									<h2 className={style.StatsCard_cardTitle_294}>+245</h2>
								</div>
								<div className={style.StatsCard_cardActions_296}>
									<div className={style.StatsCard_cardStats_297}>
										<svg
											className={style.StatsCard_dangerCardStatsIcon_301_owe}
											focusable="false"
											viewBox="0 0 24 24"
											aria-hidden="true"
										>
											<path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z" />
										</svg>
										<a
											href="#pablo"
											className={style.StatsCard_cardStatsLink_306}
											style={{ color: '#999999' }}
										>
											Mới cập nhật
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</TabPane>
				<TabPane
					tab={
						<span>
							<AndroidOutlined />
							Lịch
						</span>
					}
					key="2"
				>
					<div className={style.lich}>
						<Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
					</div>
				</TabPane>
			</Tabs>
		</div>
	);
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
