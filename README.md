


#### Difference between interface and type 

ইন্টারফেস --নন-প্রিমিটিভ ড্যাটার ক্ষেত্রে ব্যবহার হয় । ননপ্রিমিটিভ ড্যাটা টাইপ যেমনঃ object, array, tuple, function, class, interface, enum  
 
 object ক্ষেত্রে ইন্টারফেস ব্যবহার করা উত্তম

 এক্সাম্পল ঃ

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}


টাইপ --প্রিমিটিভ নিনপ্রিমিটিভ উভয় ক্ষেত্রেই ব্যবহার হয়। ননপ্রিমিটিভ ড্যাটা টাইপ 
যেমনঃ number, string, boolean, null, undefined।

array, function ক্ষেত্রে টাইপ ব্যবহার করা উত্তম

এক্সাম্পল ঃ

type Person = {
name: string;
age: number;
};

type Salary ={
    payment : number;
    joiningDAte:any;


};

type Employee = Person & Salary;


##### usage of key

type User = {
  id: number;
  name: string;
  email: string;
};

const getValueFrmObj =<X>(obj:X, key: keyof X) => {
return obj[key]

};
 

 user1:User ={
 id: 222,
 name:"mariam" ,
 email: "mariam@gmail.com"

 }

getValueFrmObj(user1, "name")

টারমিনাল এ আমার ইউজার নামক অব্জেক্ট এর 'কি'- নেইম থেকে তার  ভ্যালু 'মারিয়াম' পাব।

