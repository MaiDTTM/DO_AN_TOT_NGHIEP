import React from 'react';
import PropTypes from 'prop-types';
import { Editor } from '@tinymce/tinymce-react';

function EditorBase({ content, setContent }) {
	const onChange = (e) => {
		setContent(e.target.getContent());
	};
	const editorRef = React.useRef(null);
	const log = () => {
		if (editorRef.current) {
			console.log(editorRef.current.getContent());
		}
	};
	return (
		// <Editor
		// 	apiKey="4k95hdk87th2mmwysccl9lvu2ap1ehtwjn1hd7qnkk4d6ziv4k95hdk87th2mmwysccl9lvu2ap1ehtwjn1hd7qnkk4d6ziv"
		// 	initialValue="<p>This is the initial content of the editor</p>"
		// 	onChange={onChange}
		// 	init={{
		// 		// height: heightApp || windowSize.heightApp,
		// 		menubar: true,
		// 		plugins: [
		// 			'advlist autolink lists link image charmap print preview anchor',
		// 			'searchreplace visualblocks code fullscreen',
		// 			'insertdatetime media table paste code help wordcount',
		// 		],
		// 		toolbar:
		// 			'formatselect | bold italic backcolor forecolor | link image |\
		// alignleft aligncenter alignright alignjustify | \
		// bullist numlist outdent indent | code table | removeformat | fullscreen  preview save print help',
		// 		// toolbar:
		// 		//     'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist | forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl | showcomments addcomment',
		// 		image_title: true,
		// 		/* enable automatic uploads of images represented by blob or data URIs*/
		// 		automatic_uploads: true,
		// 		/*
		//           URL of our upload handler (for more details check: https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_url)
		//           images_upload_url: 'postAcceptor.php',
		//           here we add custom filepicker only to Image dialog
		//         */
		// 		fullscreen_native: true,
		// 		file_picker_types: 'image',
		// 		/* and here's our custom image picker*/
		// 		file_picker_callback: function (callback, value, meta) {
		// 			// Provide file and text for the link dialog
		// 			if (meta.filetype == 'file') {
		// 				callback('mypage.html', { text: 'My text' });
		// 			}
		//
		// 			// Provide image and alt text for the image dialog
		// 			if (meta.filetype == 'image') {
		// 				callback('myimage.jpg', { alt: 'My alt text' });
		// 			}
		//
		// 			// Provide alternative source and posted for the media dialog
		// 			if (meta.filetype == 'media') {
		// 				callback('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' });
		// 			}
		// 		},
		// 	}}
		// />
		<Editor
			onInit={(evt, editor) => (editorRef.current = editor)}
			initialValue="<p>This is the initial content of the editor.</p>"
			init={{
				height: 500,
				menubar: false,
				plugins: [
					'advlist autolink lists link image charmap print preview anchor',
					'searchreplace visualblocks code fullscreen',
					'insertdatetime media table paste code help wordcount',
				],
				toolbar:
					'undo redo | formatselect | ' +
					'bold italic backcolor | alignleft aligncenter ' +
					'alignright alignjustify | bullist numlist outdent indent | ' +
					'removeformat | help',
				content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
			}}
		/>
	);
}

EditorBase.propTypes = {
	content: PropTypes.string,
	setContent: PropTypes.func,
};

EditorBase.defaultProps = {
	content: '',
	setContent: () => {},
};

export default EditorBase;
