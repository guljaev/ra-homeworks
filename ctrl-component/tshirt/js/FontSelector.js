'use strict';

// const FontSelector = ({ fonts, selected, onSelect }) => {
// 	function onSelectFont(event) {
// 		const font = fonts.filter(font => font.name === event.currentTarget.value)[0];
// 		onSelect(font);
// 	}
// 	function isChecked(fontName) {
// 		if (selected) return (selected.name === fontName);
// 		return false;
// 	}

// 	return (
// 		<div className="font-picker">
// 			<FontSelectorItem fontName="abc1" onChange={onSelectFont} isChecked={isChecked} />
// 			<div className="grid center font-item">
// 				<input type="radio" name="font" value="abc1" id="abc1" onChange={onSelectFont} checked={isChecked('abc1')} />
// 				<label htmlFor="abc1" className="grid-1">
// 					<PictureFont text={'abc'} path={'./images/abc1/images'} />
// 				</label>
// 			</div>
// 			<div className="grid center font-item">
// 				<input type="radio" name="font" value="abc2" id="abc2" onChange={onSelectFont} checked={isChecked('abc2')} />
// 				<label htmlFor="abc2" className="grid-1">
// 					<PictureFont text={'abc'} path={'./images/abc2/images'} />
// 				</label>
// 			</div>
// 			<div className="grid center font-item">
// 				<input type="radio" name="font" value="abc3" id="abc3" onChange={onSelectFont} checked={isChecked('abc3')} />
// 				<label htmlFor="abc3" className="grid-1">
// 					<PictureFont text={'abc'} path={'./images/abc3/images'} />
// 				</label>
// 			</div>
// 		</div>
// 	)
// };

const FontSelector = (props) => {
	return (
		<div className="font-picker">
			<FontSelectorItem fontName="abc1" {...props} />
			<FontSelectorItem fontName="abc2" {...props} />
			<FontSelectorItem fontName="abc3" {...props} />
			<FontSelectorItem fontName="abc4" {...props} />
		</div>
	);
};
