const mockProducts = [
    {
        id : 1,
        image : "assets/image/rose.jpg",
        title : "Роза красная",
        price : 1440
    },
    {
        id : 2,
        image : "assets/image/rose.jpg",
        title : "Роза синяя",
        price : 1250
    },
    {
        id : 3,
        image : "assets/image/rose.jpg",
        title : "Роза зеленая",
        price : 2440
    },
    {
        id : 4,
        image : "assets/image/rose.jpg",
        title : "Роза черная",
        price : 5440
    },
    {
        id : 5,
        image : "assets/image/rose.jpg",
        title : "Роза золотая",
        price : 12440
    },
    {
        id : 6,
        image : "assets/image/rose.jpg",
        title : "Роза чупакабра",
        price : 1440
    },
    {
        id : 7,
        image : "assets/image/rose.jpg",
        title : "Роза сэнсей",
        price : 9440
    },
    {
        id : 8,
        image : "assets/image/rose.jpg",
        title : "Роза чистная",
        price : 3440
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    }
    ,
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    }
    ,
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    }
    ,
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    }
    ,
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    }
    ,
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    }
    ,
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    }
    ,
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    }
    ,
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    },
    {
        id : 9,
        image : "assets/image/rose.jpg",
        title : "Роза розачка",
        price : 12
    }
];
const section = document.getElementById('products');

const productElements = mockProducts.map(product => {
const div = document.createElement('div');
const img = document.createElement('img');
const h2 = document.createElement('h2');
const p = document.createElement('p');


 img.src = product.image;
 h2.textContent = product.title;
 p.textContent = product.price + ' грн.';
 div.className = "product-card"
 img.className = "product-image";

 div.appendChild(img);
 div.appendChild(h2);
 div.appendChild(p);

 return div;
});

// Добавьте все элементы продуктов в секцию
productElements.forEach(el => section.appendChild(el));