import React ,{useState}from 'react'

function Component() {
    const countries=[
        {name:'india',value:'in',cities:['delhi','mumbai','patna','banglore']},
        {name:'pak',value:'pk',cities:[' lahore','karanchi','pxy','gky']},
        {name:'Bangladesh',value:'bg',cities:['dhaka','chittagong']}
    ]
const [country,setCountry]=useState(countries)
const [cities,setCities]=useState([])
function mychange(i)
{
console.log(i)
country.forEach((ele,index)=>{
     if(i==index)
    {
        setCities(ele['cities'])  
    }
})
console.log(cities)
}
  return (
    <>
 <select onChange={(f)=>{mychange(f.target.value)}}>
{
country.map((ele,i)=>{
    return <option value={i}>{ele.name}</option>
})
}
 </select>
 <select>
 {
    cities.map((ele,i)=>{
        return <option >{ele}</option>
    })
 }
 </select>
 </>
  )
}

export default Component
