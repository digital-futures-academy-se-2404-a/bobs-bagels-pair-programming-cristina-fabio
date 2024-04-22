const basket = {
	addItem: function (item) {
		item && this.basketItems.push(item);
	},
	basketItems: [],
};

export default basket;
