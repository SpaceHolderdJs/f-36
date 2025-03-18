import axios from "axios";

axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => console.log(response.data));

export const sayHello = () => {
    console.log("Hello typescript!");

    const n: number = 10;
    let n2: string = "10";

    n2 = "20";

    let n3: boolean = true;
    n3 = false;

    let res1: undefined = undefined;
    let res2: null = null;

    let a: boolean = Boolean(undefined);

    let a1: number | undefined = 100;

    // const arrayOfNumbers: number[] = [1, 2, 3, 4];
    const arrayOfNumbers: Array<number> = [1, 2, 3, 4];
    arrayOfNumbers.push(100);
    arrayOfNumbers.forEach((n) => console.log(n));

    const arrayOfNumbersAndStrings: Array<number | string | boolean> = [
        1,
        2,
        3,
        "hello",
        true,
    ];

    let answer: boolean | string = true;
    answer = true;

    // Not a best way to go
    let q: any = 10;
    q = "hello";
    q = true;
    q = {};
    q = [];

    // Not a best way to go
    // const data: {} = {
    //     a: 10,
    // }

    type DataType = {
        a: number;
        items: Array<string>;
        b?: number;
        c?: string;
    };

    const data: DataType = {
        a: 100,
        b: 50,
        items: ["item1"],
    };

    const dataWithoutB: DataType = {
        a: 50,
        c: "Hello",
        items: [],
    };

    console.log(data, "data");
    console.log(dataWithoutB, "dataWithoutB");

    const arrayOfData: Array<DataType> = [
        { a: 10, b: 11, c: "c", items: [] },
        { a: 100, items: [] },
    ];

    // Not available element
    const firstDataElement = arrayOfData[100];

    if (firstDataElement) {
        console.log(firstDataElement);
    }

    arrayOfData[0] = {
        a: 12,
        b: 100,
        items: [],
    };

    arrayOfData.push({ a: 13, items: [] });

    for (const dataItem of arrayOfData) {
        console.log(dataItem.a);
    }

    for (let i = 0; i < arrayOfData.length; i++) {
        console.log(arrayOfData[i]);
    }

    arrayOfData.map((el) => console.log(el.a));
    arrayOfData.reduce<number>((acc, el) => (acc += el.a), 0);

    type AddressType = {
        street: string;
        city: string;
        index: number;
    };

    type UserType = {
        id: number;
        name: string;
        address: AddressType;
    };

    const user: UserType = {
        id: 1,
        name: "Igor",
        address: { city: "Kyiv", street: "Drahomanova", index: 2001 },
    };

    console.log(user.address.index, "index");

    for (const key in user) {
        console.log(key, user, "key-object");
        console.log(user[key as keyof UserType]);
    }
};

// https://jsonplaceholder.typicode.com/users

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },

// Завдання:
// 1. Розбити на типи відповідь серверу (https://jsonplaceholder.typicode.com/users)
// UserType, CompanyType, GeoType, AddressType - типізація
// 2. Створити загальний тип UserType, що містить всі типи (CompanyType, GeoType, AddressType)
// 3. Зробити запит на сервер
// 4. Типізувати відповідь серверу вашим типом
// 5. Вивести дані в консоль циклом for of
