/**
 * @properties={type:12,typeid:36,uuid:"69AABBFE-CE49-4D42-B386-F04BF98967DE"}
 */
function css_quantity()
{
	if (quantity < 10) {
		return 'quantity-low';
	} else if (quantity > 30) {
		return 'quantity-high';		
	} else {
		return null;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"8C8F029E-D6C6-43E8-B771-15DD7A57AEC8"}
 */
function css_is_checked()
{
	if (is_checked) {
		return 'checked';
	} else {
		return 'unchecked';
	}
}

/**
 * @properties={type:4,typeid:36,uuid:"A668173E-1CF0-4063-AF98-8AEE9ED6D3D6"}
 */
function is_checked()
{
	return 0;
}

/**
 * @properties={type:8,typeid:36,uuid:"76D65BDC-5ECD-4EBF-9DB6-6E60FA1FC066"}
 */
function sales()
{
	return quantity * unitprice;
}
