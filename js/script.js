let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];

let Kitchen = {
    category: 'Kitchen'
};

let Devices = {
    category: 'Devices'
};

let Cosmetics = {
    category: 'Cosmetics'
};

let modProducts = [];

let getProto = (arr, proto) => {
    modProducts = arr
    .map(products => {
        let newProducts = Object.create(proto);
        for(let key in products) {
            newProducts[key] = products[key];
        }
        return newProducts;
    })
    return modProducts;
}

arr = [
    getProto(kitchenProducts, Kitchen),
    getProto(devicesProducts, Devices),
    getProto(cosmeticsProducts, Cosmetics)
]

// console.log(modProducts)

let renderArr = [];
let newarr = [];

arr.forEach(element => {
    element.map(obj => {
		console.log(obj.category)
        renderArr.push(`<div class="category_box">
                            <div class="category_img">
                                <img src="img/${obj.type}.svg" alt="">
                            </div>
                            <div class="category_title">
                                <p class="title_name">Name:
                                    <span> ${obj.type}</span>
                                </p>
                                <p class="title_price">Price:
                                    <span> $${Array.isArray(obj.price) === true ? String(obj.price[0])+-+String(obj.price[1]) : obj.price}</span>
                                </p>
                            </div>
                        </div>`)
    })
    document.write(`<div class="category"> <span class="category__main_title"> Category: ${element[0].category} </span> ${renderArr.join('')}</div>`);
	console.log(renderArr.join(''))
    renderArr.splice(0);
})