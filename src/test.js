/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 07/05/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
// import PropTypes from 'prop-types';

function Test() {
    return(
			<Editor
				apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
				// onEditorChange={this.handleEditorChange}
				// value={this.state.editorContent}
				init={{
					icons: "jam",
					skin: "fabric",
					content_css: "document",
					resize: false
				}}
			/>
    );
}

Test.propTypes = {};

Test.defaultProps = {};

export default Test;
