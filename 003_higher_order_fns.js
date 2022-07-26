const companies = [
    {name: "Company One", category: "Technology",start:1926,end:2006},
    {name: "Company Two", category: "Retail",start:1936,end:2016},
    {name: "Company Three", category: "Auto",start:1921,end:2002},
    {name: "Company Four", category: "Retail",start:1902,end:2001},
    {name: "Company Five", category: "Manufacturing",start:1920,end:2000},
    {name: "Company Six", category: "Instrumentation",start:1910,end:2005},
    {name: "Company Seven", category: "Retail",start:1900,end:2001},
    {name: "Company Eight", category: "Banking",start:1929 ,end:2009},
    {name: "Company Nine", category: "Catering",start:1973,end:2008},
]

const ages = [32,33,12,44,60,18,17,14,35,38,43,53,52,57,66,88,55] 



// FOR EACH
console.log("FOR EACH")

companies.forEach(function(company){
    console.log(company.name);
    console.log(company);
});

console.log("FILTER")

// FILTER 

// Get over 21 years from the ages arr
const canDrink = ages.filter(function(age){
    if(age>=21){
        return true;
    }
});

console.log(canDrink)
// Using arrow functions
const drink = ages.filter(age => age >=21)


// Task: Filter retail companies from the companies array
 // Method 1 
 let retCompanies = companies.filter(function(company){
    if(company.category === "Retail"){
        return true
    }
 });
 
 // Short hand way
 let retail = companies.filter(company => company.category === "Retail");
 console.log(retail)
 
 // Generate array of company names 
 
 // MAP
 
 const names = companies.map(function(company){
    return company.name
 })
 
 console.log(names)
 
 
 // SORT 
 const sortedCompanies = companies.sort(
    function(c1,c2){
        if(c1.start > c2.start){
            return 1
        }else{
            return 0
        }      
    }
 )
 console.log(sortedCompanies)
 // Short form 
 
 const sortCompanies =  companies.sort((a,b) => (a.start>b.start? 1 : 0))
 console.log(sortCompanies)
 
 // Sort ages 
 // Ascending
 const sortAges = ages.sort((a,b)=>a-b);
 
 // Descending 
 const sortAgesDesc = ages.sort((a,b)=>b-a);
 
 console.log(sortAges)
 console.log(sortAgesDesc)
 
 // REDUCE 
 
 // add all ages
 const ageSum = ages.reduce(function(total,age){
    return total+age
 },0)
 
 console.log(ageSum)
 
 // Get total years for all companies 
 
 const totalYears = companies.reduce((total,company)=>(total+ (company.end - company.start)),0)
 
 console.log(totalYears)
 
 
 // Combine Methods 
 const nums = [32,33,12,44,60,18,17,14,35,38,43,53,52,57,66,88,55] 

 const combined = nums.map(age=>age*2)
 .filter(age=>age>=40)
 .sort((a,b)=> a-b)
 .reduce((a,b) => a+b,0);
 
 console.log(combined)