import React from 'react';
// import PropTypes from 'prop-types';
import './styles.css';
function Slider() {
	var slideIndex = 1;
	showDivs(slideIndex);
	function plusDivs(n) {
		showDivs((slideIndex += n));
	}

	function currentDiv(n) {
		showDivs((slideIndex = n));
	}
	function showDivs(n) {
		var i;
		var x = document.getElementsByClassName('mySlides');
		console.log('x', x);
		var dots = document.getElementsByClassName('demo');
		console.log('dots', dots);
		// if (n > x.length) {
		// 	slideIndex = 1;
		// }
		// if (n < 1) {
		// 	slideIndex = x.length;
		// }
		// for (i = 0; i < x.length; i++) {
		// 	x[i].style.display = 'none';
		// }
		// for (i = 0; i < dots.length; i++) {
		// 	dots[i].className = dots[i].className.replace(' w3-white', '');
		// }
		// x[slideIndex - 1].style.display = 'block';
		// dots[slideIndex - 1].className += ' w3-white';
	}
	return (
		<div className="w3-content w3-display-container" style={{ maxWidth: '800px' }}>
			<img
				className="mySlides"
				src="https://giupban.com.vn/wp-content/uploads/2019/09/anh-thien-nhien-dep-2.jpeg"
				style={{ width: '100%' }}
			/>
			<img
				className="mySlides"
				src="https://i.pinimg.com/originals/a8/45/76/a84576a04c1874304735604d9f47d5a4.jpg"
				style={{ width: '100%' }}
			/>
			<img
				className="mySlides"
				src="https://giupban.com.vn/wp-content/uploads/2019/09/anh-thien-nhien-dep-2.jpeg"
				style={{ width: '100%' }}
			/>
			<div
				className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle"
				style={{ width: '100%' }}
			>
				<div className="w3-left w3-hover-text-khaki" onClick={plusDivs(-1)}>
					&#10094;
				</div>
				<div className="w3-right w3-hover-text-khaki" onClick={plusDivs(1)}>
					&#10095;
				</div>
				<span
					className="w3-badge demo w3-border w3-transparent w3-hover-white"
					onClick={currentDiv(1)}
				/>
				<span
					className="w3-badge demo w3-border w3-transparent w3-hover-white"
					onClick={currentDiv(2)}
				/>
				<span
					className="w3-badge demo w3-border w3-transparent w3-hover-white"
					onClick={currentDiv(3)}
				/>
			</div>
		</div>
	);
}
Slider.propTypes = {};

Slider.defaultProps = {};

export default Slider;
