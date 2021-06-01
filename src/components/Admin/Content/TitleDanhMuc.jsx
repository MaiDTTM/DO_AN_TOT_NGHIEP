import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Popover, Popconfirm } from 'antd';
import {
	AppstoreOutlined,
	DeleteFilled,
	SettingOutlined,
	EditTwoTone,
	FolderAddFilled,
} from '@ant-design/icons';
import { BASE_URL_IMAGE } from '../../../util/TypeApi';

function TitleDanhMuc({ item, handleAdd, handleDelete, handleEdit }) {
	const handleConfirm = () => {
		handleDelete(item._id);
	};
	const handleAddChildren = (event) => {
		event.stopPropagation();
		handleAdd(item._id);
	};

	const onEdit = () => {
		handleEdit(item);
	};
	const content = (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<EditTwoTone style={{ cursor: 'pointer', marginRight: 7 }} onClick={onEdit} />

			<Popconfirm
				placement="right"
				title={'Bạn có chắc chắn muốn xóa nó ?'}
				onConfirm={handleConfirm}
				okText="Phải"
				cancelText="Không"
			>
				<DeleteFilled
					style={{ cursor: 'pointer', color: 'red', marginRight: 7 }}
					// onClick={(event) => event.stopPropagation()}
				/>
			</Popconfirm>
			{item.paramId === '-1' && (
				<FolderAddFilled
					style={{ cursor: 'pointer', color: 'green' }}
					onClick={handleAddChildren}
				/>
			)}
		</div>
	);
	return (
		<>
			<div>
				<Avatar
					style={{ backgroundColor: '#87d068' }}
					icon={<AppstoreOutlined />}
					src={BASE_URL_IMAGE + item.icon}
				/>
				<span style={{ marginLeft: 5 }}>{item && item.name}</span>
				<Popover placement={'right'} content={content} title={null}>
					<SettingOutlined style={{ marginLeft: 10 }} />
				</Popover>
			</div>
		</>
	);
}

TitleDanhMuc.propTypes = {
	item: PropTypes.object,
	handleDelete: PropTypes.func,
	setModal: PropTypes.func,
	setParamId: PropTypes.func,
	handleEdit: PropTypes.func,
};

TitleDanhMuc.defaultProps = {
	item: {},
	handleDelete: () => {},
	handleAdd: () => {},
	handleEdit: () => {},
};

export default TitleDanhMuc;
