export type LandingUserType = {
    address: {
        geolocation: {
            lat: string;
            long: string;
        };
        city: string;
        street: string;
        number: number;
        zipcode: string;
    };
    id: 1;
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    };
    phone: string;
    __v: number;
};

export type LandingProductType = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
};


// 1. Реалізувати власну стилізацію проекту
// 2. Реалізувати input для пошуку LandingUsers та LandingProducts
//  - Під час введення даних у input (onChange, state)
//  Відбувається фільтрація (filter даних користувачів та продуктів)
//  Виводяться лише ті, що мають (includes) у назві (title/name) фрагмент
// з пошукового input

// ** можна створити окремий компонент Search (props)
// *** users - filter, products - api query