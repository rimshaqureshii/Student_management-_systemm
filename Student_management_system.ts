#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
 

     console.log(chalk.yellow("\nWelcome to my Student System Management Project\n"));
     
  const randomNumber = Math.floor(10000 + Math.random() * 9000);
     
  let mybalance = 0
    let answer = await inquirer.prompt([ 
      {
        name: "students",
        type: "input",
        message: chalk.greenBright("Enter student name:"),
        validate: function(value){ 
          if (value.trim() !== ""){
            return true;
          }
          return "Please enter a non-empty value";
        },
      },
      {
        name: "courses",
        type: "list",
        message: chalk.greenBright("Select the course to enrolled"),
        choices: ["Web Development", "MS Office ", "Data Science", "Cyber Security", "Artificial Intelligence "]
      }
    ]);
      const tuitionFee: {[key: string] : number}={
        "Web Development":6000,
        "MS Office ": 2000,
        "Data Science": 10000,
        "Cyber Security":5000,
        "Artificial Intelligence": 15000
      };
      console.log(chalk.green(`\nTuition Fees: ${tuitionFee[answer.courses]}/-\n`));
       console.log(`Balance: ${mybalance}\n`);

        let paymentType = await inquirer.prompt([
          {
        name: "payment",
        type: "list",
        message: chalk.green("Select payment method "),
        choices: ["Bank Tansfer", "Easypaisa","Jazzcash"]
          },
          {
            name: "amount",
            type: "input ",
            message: chalk.green("Transfer Money:"),
            validate: function (value) {
              if (value.trim() !== ""){
                return true;
              }
              return "Please enter a non-empty value.";
            },
            
          }
        ]);
        console.log(chalk.green(`\nYou select payment method ${paymentType.payment}\n`));
        
         const tuition_Fees = tuitionFee[answer.courses];
          const payment_Amount = parseFloat(paymentType.amount)

       if (tuition_Fees === payment_Amount){
        console.log(chalk.yellow(`Congratulations, you have successfully enrolled in ${answer.courses}.\n`));

      
        let ans = await inquirer.prompt([
          {
            name: "select",
            type: "list",
            message: chalk.green("what would you like to do next "),
            choices: ["View status", "Exit"]
          }
        ])
          if(ans.select === "View status"){
            console.log(chalk.yellow("\n*******Status********\n"));
              console.log(chalk.yellow(`Student Name: ${answer.students}`));
                console.log(chalk.yellow(`Student ID: ${randomNumber}`));
                  console.log(chalk.yellow(`Course" ${answer.courses}`));
                    console.log(chalk.yellow(`Tuition fees paid: ${payment_Amount}`));
                      console.log(chalk.yellow(`Balance: ${mybalance += payment_Amount}`));
          }else{
            console.log(chalk.yellow("\nExisting Student Management System \n"));
            
          }
      }
else{
  console.log(chalk.red("Invalid amount due to course\n"));
}
       
      








