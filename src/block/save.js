import { useBlockProps } from '@wordpress/block-editor';
import classNames from 'classnames';
import poster from "./img/poster.jpg";
export default function save({ attributes }) {
	const blockProps = useBlockProps.save({
		className: classNames('cover-video'),
	});

	return (
		<>
			<div {...blockProps}>
				<div className="cover-video-content" style={{ backgroundImage: `url(${poster})` }}>
					<div className="cover-video-content-wrapper">
						<button className="cover-video-popup-btn">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 72 72">
								<circle cx="36" cy="36" r="35" fill="#000" fillOpacity=".7" stroke="#fff" strokeWidth="2" />
								<path fill="#fff" d="M49 34.268c1.333.77 1.333 2.694 0 3.464L31 48.124c-1.333.77-3-.192-3-1.732V25.608c0-1.54 1.667-2.502 3-1.732l18 10.392Z" />
							</svg>
						</button>
						<div className="cover-video-text-box">
							<h3 className="cover-video-title">Panther Paradise</h3>
							<p className="cover-video-description">Kabini Photo Tour</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
