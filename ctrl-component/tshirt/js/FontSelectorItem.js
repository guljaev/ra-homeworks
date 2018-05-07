const FontSelectorItem = ({ fontName, fonts, selected, onSelect }) => {
	function onSelectFont(event) {
		const font = fonts.filter(font => font.name === event.currentTarget.value)[0];
		onSelect(font);
	}
	const isChecked = selected ? (selected.name === fontName) : false;

	return (
		<div className="grid center font-item">
			<input type="radio" name="font" value={fontName} id={fontName} onChange={onSelectFont} checked={isChecked} />
			<label htmlFor={fontName} className="grid-1">
				<PictureFont text={'abc'} path={`./images/${fontName}/images`} />
			</label>
		</div>
	);
}