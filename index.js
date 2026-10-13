//1
// let students = [];

// for(let i = 0; i < 5; i++){
//     let nameS = prompt("Enter student,s name ");
//     let firstM = Number(prompt("Enter student,s 1 mark"));
//     let secondM = Number(prompt("Enter student,s 2 mark"));
//     let thirdM = Number(prompt("Enter student,s 3 mark"));

//     let student = {
//         name: nameS,
//         grades: [firstM, secondM, thirdM]
//     }

//      student.average = (firstM + secondM + thirdM) / 3;
     
//     if(student.average >= 91){
//         student.rate = "A"
//     }else if(student.average >= 81 && student.average <= 90){
//         student.rate = "B"
//     }else if(student.average >= 71 && student.average <= 80){
//         student.rate = "C"
//     }else if(student.average >= 61 && student.average <= 70){
//         student.rate = "D"
//     }else if( student.average <= 60){
//         student.rate = "F"
//     }

//     students.push(student)
// }

// let WholeGroupAverageMark = 0;
// let marksArr = [];
// let max = 0;

// for(let i = 0; i < students.length; i++){
//     marksArr.push(students[i].average)
//     console.log("Student,s name:"+ " " + students[i].name + " " + "Average Mark:" + " " + students[i].average + "Rate:" + " " + students[i].rate)
//     WholeGroupAverageMark += students[i].average;
//      max = Math.max(...marksArr)
// }
// console.log("Groups Average Mark:" + " " + WholeGroupAverageMark);
// console.log("student,s Highest Mark:" + " " + max)




//2

// let Numbers = prompt("Enter 10 Numbers");
// let nums = Numbers.split(" ").map(Number);

// let max = nums[0];
// let min = nums[0];


// let countP = 0;
// let countN = 0;
// let odd = 0;
// let even = 0;

// let jami = 0;
// let average = 0;

// let unikaluririxvebi = [];

// for(let i = 0; i < nums.length; i++){

//     if(max < nums[i]){
//         max = nums[i]
//     }

//     if(min > nums[i]){
//         min = nums[i]
//     }

//     if(nums[i] % 2 === 0){
//          even ++
//     }

//     if(nums[i] % 2 !== 0){
//          odd ++
//     }

//     if(nums[i] > 0){
//         countP++
//     }else if(nums[i] < 0){
//         countN++
//     }

//     jami += nums[i];
//     average = jami / 10;
    
//     if(!unikaluririxvebi.includes(nums[i])){
//         unikaluririxvebi.push(nums[i])
//     }

// }

// nums.sort((a,b) => {return a-b});
// unikaluririxvebi.sort(function(a,b){
//     return a - b
// })


// if( unikaluririxvebi.length >= 2){
//     console.log("second biggest unique Number :" + " " + unikaluririxvebi[unikaluririxvebi.length - 2])
// }else{
//     console.log("there is no second unique number")
// }

// console.log("Max:" + " " + max);
// console.log("Min:" + " " + min);
// console.log("Positive Numbers:" + " " + countP);
// console.log("Negative Numbers:" + " " + countN);
// console.log("odd Numbers:" + " " + odd);
// console.log("Even Numbers:" + " " + even);
// console.log("sum:" + " " + jami);
// console.log("Average:" + " " + average);
// console.log("Unique Nums" + " " + unikaluririxvebi);
// console.log("Sorted Numbers:" + " " + nums)


//3

let accout = {
    owner: prompt("enter owner,s name"),
    balance: Number(prompt("Enter your balance ")),
    transactions: []
}

let enter = Number(prompt("1. ბალანსის ნახვა.\n 2. თანხის შეტანა.\n 3. თანხის გატანა.\n 4. ბოლო ოპერაციების ნახვა.\n 5. ანგარიშზე განხორციელებული ოპერაციების ჯამის გამოთვლა.\n 6. პროგრამიდან გამოსვლა."));

switch(enter){
    case  1:
        alert("Balance:" + " " + accout.balance)
        break
    case  2:
        let money = Number(prompt("siyvane tanxis raodenoba"));
        if(money > 0){
            accout.balance = accout.balance + money;
            accout.transactions.push({
                tipi: "თანხის შეტანა",
                raodenoba: money
            })
            alert("New balance:" + " " + accout.balance)
        }else{
            alert("tanxis raodenoba arasworia")
        }
        break
    case 3:
        let gatana = Number(prompt("siyvane tanxis raodenoba"));
        if(gatana <= 0){
            alert("tanxis raodenoba arasworia")
        }else if(gatana > accout.balance){
             alert("ar aris sakmarisi raodenobis tanxa angarisze")
        } else{
            accout.balance = accout.balance - gatana;
            accout.transactions.push({
                tipi: "თანხის გატანა",
                raodenoba: gatana
            })
             alert("New balance:" + " " + accout.balance)
        }
        break
    case 4:
        console.log("Transactions:")
        for(let i = 0;  i < accout.transactions.length; i++){
            console.log(accout.transactions[i].tipi + ": " + accout.transactions[i].raodenoba)
        }
        break
    case 5:
        let sul = 0;
        for(let i = 0; i < accout.transactions.length; i++){
            sul = sul + accout.transactions[i].raodenoba
        }
        console.log("ანგარიშზე განხორციელებული ოპერაციების ჯამი" + ": " + sul);
        break
    case 6:
        alert("Aba naxvamdis!")
        break
    default:
        alert("Wrong Choice")

}


//4


let products = [
    {id:1, name: "computer", price: 1200, quantity: 12, category: "Electronics"},
    {id:2, name: "Phone", price: 700, quantity: 20, category: "Electronics"},
    {id:3, name: "Keyboard", price: 200, quantity: 92, category: "Accessories"},
    {id:4, name: "Mouse", price: 100, quantity: 120, category: "Accessories"}
]


let choose = Number(prompt("1 ახალი პროდუქტის დამატება.\n 2 პროდუქტის მოძებნას id-ის მიხედვით. \n 3 პროდუქტის ფასის შეცვლა.\n 4 პროდუქტის რაოდენობის შეცვლა.\n 5 პროდუქტის წაშლა.\n 6 ყველა პროდუქტის გამოტანა.\n 7 ყველაზე ძვირადღირებული პროდუქტის პოვნა.\n 8 საერთო მარაგის ღირებულების გამოთვლა.\n 9 კატეგორიის მიხედვით პროდუქტების გაფილტვრა."));

switch(choose){
    case 1:
        let id = Number(prompt("Enter Product,s ID:"));
        let smth = false;

        for(let i = 0; i < products.length; i++){
            if(products[i].id === id){
                 smth = true;
            }
        }

        if(smth){
            console.log("Product,s ID already exists")
        }else{
            let name = prompt("Enter product,s name");
            let price = Number(prompt("Enter product,s Price"));
            let quantity = Number(prompt("Enter product,s quantity"));
            let category = prompt("Enter product,s category")

            if(price < 0 || quantity < 0){
                console.log("Price and quantity can,t be negative")
            }else{
                products.push({
                    id:id,
                    name:name,
                    price:price,
                    quantity:quantity,
                    category:category
                })
                console.log("Product has been added, CONGRATS ^^")
            }
        }
        break
    case 2:
        let ID = Number(prompt("Enter product,s id that your looking for"));
        let find = false;
    
        for(let i = 0; i < products.length; i++){
            if(products[i].id === ID){
                console.log(products[i])
                find = true
            }
        }

        if(!find){
            console.log("Product not found")
        }
        break
    case 3:
        let id1 = Number(prompt("Enter product,s id"));
        let find1 = false;
        for(let i = 0; i< products.length; i++){
            if(products[i].id === id1){
                let price = Number(prompt("Enter new price"));

                if(price < 0){
                    console.log("Price can,t be negative")
                }else{
                    products[i].price = price;
                    console.log("New price added")
                }
                find1 = true
            }
            if(!find1){
                console.log("Product not found")
            }
        }
        break
    case 4:
        let id2 = Number(products("Enter product,s id"));
        let find2 = false;
        for(let i = 0; i< products.length; i++){
            if(products[i].id === id2){
                let qua = Number(prompt("ENter new quantity"));
                
                if(qua < 0){
                    console.log("qua can,t be negative")
                }else{
                    products[i].quantity = qua;
                    console.log("New qua added")
                }
                find2 = true
            }
                if(!find2){
                    console.log("Product not found")
                }
        }break
    case 5:
        let id3 = Number(prompt("Enter product,s id"));
        let find3 = false;
        for(let i = 0; i< products.length; i++){
            if(products[i].id === id3){
                products.splice(i,1);
                console.log("Product deleted")
                find3 = true;
                break;
            }
        }
        if(!find3){
            console.log("Product not found")
        }break
    case 6:
        console.log(products)
        break
    case 7:
        if(products.length === 0){
            console.log("There is no Product")
        }else{
            let max = products[0];
            for(let i = 1; i< products.length; i++){
                if(products[i].price > max.price){
                    max = products[i]
                }
            }
            console.log("Most expensive product:" + max.name + " " + max.price + "$")
        };
        break
    case 8:
        let sul = 0;
        for(let i = 0; i< products.length; i++){
            sul = sul + products[i].price * products[i].quantity
        }
        console.log("All products' price:" + " " + sul) ;break
    case 9:
        let category = Number(prompt("Enter category"));
        let find4 = false;
        for(let i = 0; i< products.length; i++){
            if(products[i].category.toLocaleLowerCase() === category.toLocaleLowerCase()){
                console.log(products[i])
                find4 = true
            }
        }

        if(!find4){
            console.log("No products found in this category")
        }break

}

