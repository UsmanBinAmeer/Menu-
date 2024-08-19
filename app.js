
let menu = [{ item: "Biryani", Price: 'Rs.500', description: 'Biryani is a flavorful South Asian dish featuring aromatic basmati rice layered with tender meat or vegetables, infused with spices like saffron, cardamom, and cloves.', image: 'https://kfoods.com/images1/newrecipeicon/murgh-biryani_1014.jpg', category: 'Lunch' },

{ item: "Karahi", Price: 'Rs.600', description: 'Karahi, a vibrant Pakistani dish, showcases tender meat (often chicken or lamb) stir-fried with tomatoes, peppers, and a blend of aromatic spices like cumin and coriander. Served sizzling in a traditional wok-shaped karahi, it promises a robust, savory experience with every bite', image: 'https://www.sugarspicenmore.com/wp-content/uploads/2021/04/Boneless-Chicken-karahi-5-1.jpg', category: 'Lunch' },

{ item: "Halwa Puri", Price: 'Rs.200', description: 'Halwa puri, a beloved Pakistani breakfast, pairs flaky, deep-fried puris with a sweet semolina halwa. This indulgent combination is often served with spicy chickpea curry, creating a satisfying balance of flavors and textures, perfect for starting the day on a delicious note.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoK2SdXeHYrxnRXS1G7_AmBnmsjdmJYcqVgg&s', category: 'BreakFast' },

{ item: "Chocolate Shake", Price: 'Rs.150', description: 'Indulge in our creamy chocolate shakes, crafted with rich cocoa and topped with whipped cream and chocolate shavings. Perfectly chilled and irresistibly smooth, they offer a decadent treat for chocolate enthusiasts of all ages.', image: 'https://funmoneymom.com/wp-content/uploads/2021/03/IMG_9553.jpg', category: 'Shakes' },

{ item: "Mango Shake", Price: 'Rs.300', description: 'Savor the tropical delight of our mango shakes, blending sweet, ripe mangoes with chilled milk for a refreshing and creamy beverage. Garnished with a slice of fresh mango and served ice-cold, its a perfect choice to beat the heat and enjoy the essence of summer in every sip', image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/04/mango-milkshake-recipe.jpg', category: 'Shakes' },

{ item: "Zinger Burger", Price: 'Rs.650', description: 'Our famous burger made with crispy on the outside juicy on the inside chicken breast topped with seasoned cabbage & drizzled with spicy Zinger sauce all served in a soft sesame seed bun.', image: './assets/zinger.jfif', category: 'Fast Food' },

{ item: "Crispy Broast", Price: 'Rs.650', description: 'Savor the tropical delight of our mango shakes, blending sweet, ripe mangoes with chilled milk for a refreshing and creamy beverage. Garnished with a slice of fresh mango and served ice-cold, its a perfect choice to beat the heat and enjoy the essence of summer in every sip', image: './assets/broast.jfif', category: 'Fast Food' },

{ item: "Chiken Tikka", Price: 'Rs.450', description: 'Savor the tropical delight of our mango shakes, blending sweet, ripe mangoes with chilled milk for a refreshing and creamy beverage. Garnished with a slice of fresh mango and served ice-cold, its a perfect choice to beat the heat and enjoy the essence of summer in every sip', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRto4n4dAoSeIQeytbn5kfpjFtLlTqTqc0aqw&s', category: 'Bar-B-Q' },

{ item: "Malai Boti", Price: 'Rs.350', description: 'Savor the tropical delight of our mango shakes, blending sweet, ripe mangoes with chilled milk for a refreshing and creamy beverage. Garnished with a slice of fresh mango and served ice-cold, its a perfect choice to beat the heat and enjoy the essence of summer in every sip', image: 'https://i.ytimg.com/vi/5lWCwZ8fzmA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCtbNMNZ0aR8dlfCAEZ9_gBYqe_cA', category: 'Bar-B-Q' },
];


const container = document.querySelector('.cards')


function categoryHandler(category) {
    container.innerHTML = '';
    if (category == 'All') {
        menu.forEach((item) => {
            const firstChild = document.createElement('div')
            firstChild.setAttribute('class', 'first-card')
            firstChild.innerHTML = `
            <div id="image-area">
            <img src = ${item.image} alt="">
          </div>
          <div id="inner-material">
            <div id="item">${item.item} <span id="amount">${item.Price}</span></div>
            <div id="description">${item.description}</div>
          </div>
        </div>
      </div>
    </div>`

            container.appendChild(firstChild)

        })
    }

    else {
        menu.filter((item) => item.category === category).forEach((item) => {
            const firstChild = document.createElement('div')
            firstChild.setAttribute('class', 'first-card')
            firstChild.innerHTML = `
            <div id="image-area">
            <img src = ${item.image} alt="">
          </div>
          <div id="inner-material">
            <div id="item">${item.item} <span id="amount">${item.Price}</span></div>
            <div id="description">${item.description}</div>
          </div>
        </div>
      </div>
    </div>`

            container.appendChild(firstChild)

        })
    }

}





menu.forEach((item) => {
    const firstChild = document.createElement('div')
    firstChild.setAttribute('class', 'first-card')
    firstChild.innerHTML = `
            <div id="image-area">
            <img src = ${item.image} alt="">
          </div>
          <div id="inner-material">
            <div id="item">${item.item} <span id="amount">${item.Price}</span></div>
            <div id="description">${item.description}</div>
          </div>
        </div>
      </div>
    </div>`

    container.appendChild(firstChild)

})
