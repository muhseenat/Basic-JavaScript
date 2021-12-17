let input=require('readline-sync');

class Area {
     circle() {
        console.log("Enter the radius");
        let r=input.questionFloat();
        const pi=3.14;
        let  area= pi*(r*r);
        console.log("Area of the circle is:"+ area);
        
    }
    Square() {
        console.log("Enter the side");
        let a=input.question();
        let  area=(a*a);
        console.log("Area of the square is:"+ area);
        
    }
    rectangle() {
        console.log("Enter the length and breadth");
        let l=input.question();
        let b=input.question();
         let area=(l*b);
         console.log("Area of the rectangle is:" +area);
        
    }
     triangle() {
        console.log("Enter the breadth and height");
        let b=input.question();
        let h=input.question();
        let area=0.5*(h*b);
        console.log("Area of the triangle is:" +area);
        
    }


}


class MyClass extends Area{

    main(){
      let choice=input.questionInt('Enter your choice   \n 1 - Circle \n 2 - Square\n 3 - Rectangle \n 4 - Triangle\n');
       switch(choice) {
         case 1:super.circle();break;
         case 2: super.Square();break;	
         case 3:super.rectangle();break;
         case 4:super.triangle();break;	
         default:console.log("Invalid choice");
         }
 
    }
}  

let obj=new MyClass;
obj.main();