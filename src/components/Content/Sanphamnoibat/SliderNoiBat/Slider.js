import React from 'react';
// import PropTypes from 'prop-types';
import './styles.css';
import slider0 from '../../../../img/slidernoibat0.jpg';
import slider2 from '../../../../img/slidernoibat2.jpg';
import slider3 from '../../../../img/slidernoibat3.png';

function Slider() {
	//khai báo biến slideIndex đại diện cho slide hiện tại
	let slideIndex;
	const currentSlide = (n) => {
		showSlides((slideIndex = n));
	};
	// KHai bào hàm hiển thị slide
	const showSlides = () => {
		console.log('slideIndex', slideIndex);
		let i;
		const slides = document.getElementsByClassName('mySlides');
		const dots = document.getElementsByClassName('dot');
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = 'none';
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(' active', '');
		}
		//
		slides[slideIndex].style.display = 'block';
		dots[slideIndex].className += ' active';
		//chuyển đến slide tiếp theo
		slideIndex++;
		//nếu đang ở slide cuối cùng thì chuyển về slide đầu
		if (slideIndex > slides.length - 1) {
			slideIndex = 0;
		}
		//tự động chuyển đổi slide sau 5s
		setTimeout(showSlides, 5000);
	};
	React.useEffect(() => {
		showSlides((slideIndex = 0));
	});
	return (
		<div className="slider_noi_bat">
			<div className="slideshow-container">
				<div className="mySlides fade">
					<img
						src={slider0}
						style={{ width: '100%', height: '100%', objectFit: 'cover' }}
					/>
				</div>
				<div className="mySlides fade">
					<img
						src={slider2}
						style={{ width: '100%', height: '100%', objectFit: 'cover' }}
					/>
				</div>
				<div className="mySlides fade">
					<img src={slider3} style={{ width: '100%', height: '100%' }} />
				</div>
			</div>
			<div style={{ textAlign: 'center' }}>
				<span className="dot" onClick={() => currentSlide(0)} />
				<span className="dot" onClick={() => currentSlide(1)} />
				<span className="dot" onClick={() => currentSlide(2)} />
			</div>
		</div>
	);
}
Slider.propTypes = {};

Slider.defaultProps = {};

export default Slider;
