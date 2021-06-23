/* eslint-disable */
import React from 'react';
import style from '../styles.module.scss';
import {
	CopyOutlined,
	InfoCircleOutlined,
	MoneyCollectOutlined,
	RiseOutlined,
} from '@ant-design/icons';
import { Bar, Pie, yuan } from 'ant-design-pro/lib/Charts';
// import PropTypes from 'prop-types';

//const
const salesData = [];
for (let i = 0; i < 12; i += 1) {
	salesData.push({
		x: `${i + 1}`,
		y: Math.floor(Math.random() * 1000) + 200,
	});
}
const salesPieData = [
	{
		x: 'Household appliances',
		y: 4544,
	},
	{
		x: 'Edible alcohol',
		y: 3321,
	},
	{
		x: 'Personal health',
		y: 3113,
	},
	{
		x: 'Clothing luggage',
		y: 2341,
	},
	{
		x: 'Maternal and child products',
		y: 1231,
	},
	{
		x: 'other',
		y: 1231,
	},
];
function Dashboard() {
	return (
		<div>
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
			<div className={style.MuiGrid_typeContainer_192}>
				<div className={style.ItemGrid_grid_283}>
					<div className={style.ChartCard_card_340}>
						<div className={style.ChartCard_cardHeader_341}>
							<div className={style.MuiCardHeader_content_310}>
								<span className={style.MuiTypography_headline_318} />
								<span className={style.MuiTypography_body1_322}>
									<div>
										<Bar height={200} data={salesData} color="#fff" />
									</div>
								</span>
							</div>
						</div>
						<div className={style.ChartCard_cardContent_347}>
							<h4 className={style.ChartCard_cardTitle_348}>Doanh số hàng ngày</h4>
							<p className={style.ChartCard_cardCategory_349}>
								<span>
									<RiseOutlined style={{ color: '#4caf50' }} />
									<span style={{ verticalAlign: 'inherit', marginLeft: 5 }}>Tăng </span>
									<span style={{ verticalAlign: 'inherit', color: '#4caf50' }}>55% </span>
									<span style={{ verticalAlign: 'inherit' }}>
										doanh số bán hàng hôm nay.
									</span>
								</span>
							</p>
						</div>
						<div className={style.ChartCard_cardActions_350}>
							<div className={style.ChartCard_cardStats_351}>
								<svg
									className={style.MuiSvgIcon_root_167}
									focusable="false"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
								</svg>
								<span>cập nhật 4 phút trước</span>
							</div>
						</div>
					</div>
				</div>
				<div className={style.ItemGrid_grid_284}>
					<div className={style.ChartCard_card_340}>
						<Pie
							hasLegend
							title="Pie"
							subTitle="pie"
							total={() => (
								<span
									dangerouslySetInnerHTML={{
										__html: yuan(salesPieData.reduce((pre, now) => now.y + pre, 0)),
									}}
								/>
							)}
							data={salesPieData}
							valueFormat={(val) => (
								<span dangerouslySetInnerHTML={{ __html: yuan(val) }} />
							)}
							height={294}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
