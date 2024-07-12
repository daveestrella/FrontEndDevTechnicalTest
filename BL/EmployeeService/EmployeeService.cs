using FrontEndTest2.Models;
using System.Collections.Generic;

namespace FrontEndTest2.BL.EmployeeService
{
    public class EmployeeService
    {
        public static List<Employee> GetEmployeeList()
        {
            var response = new List<Employee>()
            {
                new Employee { FullName = "John Doe", EmployeeID = "E001", SIN = "123456789", PhoneNumber = "1234567890", City = "Mississauga", Salary = 60000.50M, Country = "Canada" },
                new Employee { FullName = "Jane Smith", EmployeeID = "E002", SIN = "987654321", PhoneNumber = "9876543210", City = "Toronto", Salary = 5000.75M, Country = "Canada" },
                new Employee { FullName = "Alice Johnson", EmployeeID = "E003", SIN = "111222333", PhoneNumber = "1112223333", City = "Mississauga", Salary = 70000.00M, Country = "Canada" },
                new Employee { FullName = "Bob Brown", EmployeeID = "E004", SIN = "444555666", PhoneNumber = "4445556666", City = "Vancouver", Salary = 45000.00M, Country = "USA" },
                new Employee { FullName = "Charlie Davis", EmployeeID = "E005", SIN = "777888999", PhoneNumber = "7778889999", City = "Mississauga", Salary = 54000.25M, Country = "Canada" },
                new Employee { FullName = "David Wilson", EmployeeID = "E006", SIN = "222333444", PhoneNumber = "2223334444", City = "Calgary", Salary = 62000.75M, Country = "Canada" },
                new Employee { FullName = "Eva Green", EmployeeID = "E007", SIN = "555666777", PhoneNumber = "5556667777", City = "Mississauga", Salary = 48000.00M, Country = "Canada" },
                new Employee { FullName = "Frank Hall", EmployeeID = "E008", SIN = "888999111", PhoneNumber = "8889991111", City = "Edmonton", Salary = 72000.50M, Country = "Canada" },
                new Employee { FullName = "Grace Lee", EmployeeID = "E009", SIN = "333444555", PhoneNumber = "3334445555", City = "Mississauga", Salary = 58000.75M, Country = "Canada" },
                new Employee { FullName = "Henry Martin", EmployeeID = "E010", SIN = "666777888", PhoneNumber = "6667778888", City = "Montreal", Salary = 66000.30M, Country = "Canada" },
                new Employee { FullName = "Ivy Clark", EmployeeID = "E011", SIN = "999111222", PhoneNumber = "9991112222", City = "Mississauga", Salary = 53000.90M, Country = "Canada" },
                new Employee { FullName = "Jack Harris", EmployeeID = "E012", SIN = "112233445", PhoneNumber = "1122334455", City = "Ottawa", Salary = 49000.50M, Country = "USA" },
                new Employee { FullName = "Karen Lewis", EmployeeID = "E013", SIN = "667788990", PhoneNumber = "6677889900", City = "Winnipeg", Salary = 52000.25M, Country = "Canada" },
                new Employee { FullName = "Louis Walker", EmployeeID = "E014", SIN = "223344556", PhoneNumber = "2233445566", City = "Mississauga", Salary = 71000.40M, Country = "Canada" },
                new Employee { FullName = "Maria Young", EmployeeID = "E015", SIN = "334455667", PhoneNumber = "3344556677", City = "Halifax", Salary = 57000.80M, Country = "USA" },
                new Employee { FullName = "Nathan Scott", EmployeeID = "E016", SIN = "445566778", PhoneNumber = "4455667788", City = "Mississauga", Salary = 62000.65M, Country = "Canada" },
                new Employee { FullName = "Olivia King", EmployeeID = "E017", SIN = "556677889", PhoneNumber = "5566778899", City = "Regina", Salary = 46000.00M, Country = "USA" },
                new Employee { FullName = "Paul Adams", EmployeeID = "E018", SIN = "667788990", PhoneNumber = "6677889900", City = "St. John's", Salary = 64000.75M, Country = "Canada" },
                new Employee { FullName = "Quincy Baker", EmployeeID = "E019", SIN = "778899001", PhoneNumber = "7788990011", City = "Victoria", Salary = 59000.20M, Country = "USA" },
                new Employee { FullName = "Rachel Carter", EmployeeID = "E020", SIN = "889900112", PhoneNumber = "8899001122", City = "Quebec City", Salary = 53000.55M, Country = "USA" }


            };

            return response;
        }
    }
}
