export const advanced = () => {
    class User {
        public name: string;
        public age: number;
        private password: string;

        protected surname: string;

        public readonly id: number = 1;

        constructor(name: string, surname: string, age: number) {
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.password = "123456789";
        }
    }

    const user = new User("Igor", "Sergienko", 25);
    console.log(user, "!!!");


    class Admin extends User {
        public isAdmin: boolean = true;

        constructor(name: string, surname: string, age: number) {
            super(name, surname, age);
        }

        public showSurname() {
            console.log(this.surname, "showSurname");
            this.showMessage();
        }

        public showPassword() {
            console.log(this.password, "showPassword");
        }

        protected showMessage() { }
        private showMessagePrivate() { }
    }

    const admin = new Admin("Admin", "Admin", 30);
    console.log(admin, "admin!!!");
    admin.showSurname();

    interface CarInterface {
        color: string;
        price?: number;
        speed: number;
        name: string;
    }

    const car: CarInterface = {
        color: "black",
        price: 100,
        speed: 200,
        name: "Kia"
    }

    class Car implements CarInterface {
        color: string;
        name: string;
        price?: number | undefined;
        speed: number;

        wheels: number = 4;

        constructor() {
            this.color = "black";
            this.name = "name";
            this.speed = 200;
        }
    }

    console.log(new Car(), "car");

    interface SuperCarInterface extends CarInterface {
        isSuper: boolean
    }

    const superCar: SuperCarInterface = {
        name: "Super Car",
        price: 500,
        speed: 300,
        color: "red",
        isSuper: true
    }

    type DocumentType = {
        title: string,
        text: string,
    };

    type SignedDocumentType = DocumentType & { signature: string }

    const document1: DocumentType = {
        text: "text",
        title: "title"
    }

    const signedDocument1: SignedDocumentType = {
        signature: "sign",
        text: "text",
        title: "title"
    }

    console.log(document1, signedDocument1);

    function fromCapitalLetter(str: string): string {
        return `${str[0].toUpperCase()}${str.slice(1)}`;
    }

    const res1 = fromCapitalLetter("igor");
    console.log(res1, "res1");

    function promiseToReturn(a: number): Promise<number> {
        return new Promise<number>((res, rej) => {
            res(a);
        });
    }

    promiseToReturn(10).then((a) => {
        console.log(a, "a!!!");
    });

    const arrowFunc = (a: number): number => {
        return a;
    }

    type ResponseType<BodyType, ErrorType = Error> = {
        status: number,
        message?: string,
        request: any,
        date: Date,
        body: BodyType,
        error?: ErrorType
    }

    const resp1: ResponseType<DocumentType> = {
        message: "message",
        request: {},
        date: new Date(),
        status: 200,
        body: {
            title: "",
            text: ""
        }
    }

    const resp2: ResponseType<CarInterface, { msg: string }> = {
        message: "message",
        request: {},
        date: new Date(),
        status: 200,
        body: {
            color: "",
            name: "",
            speed: 300,
            price: 100
        },
        error: { msg: "Error" }
    }
}


// Завдання: 

class Payment { }
class CancelledPayment { }
class FulfilledPayment { }

// 1. Унаслідувати клас Payment для CancelledPayment, FulfilledPayment
// 2. Реалізувати ПРИВАТНИЙ метод cancel для CancelledPayment
// 3. Реалізувати ЗАХИЩЕНИЙ метод fulfill для FulfilledPayment
// 4. У класі Payment реалізувати метод close (ЗАХИЩЕНИЙ) (закриває платіж без статусу)
// 5. Додати ЗАХИЩЕНЕ поле status: string (canceled, fulfilled, closed)
// 6. Протестувати

// new Payment("fulfilled");
// new CancelledPayment("fulfilled");
// new FulfilledPayment("fulfilled");