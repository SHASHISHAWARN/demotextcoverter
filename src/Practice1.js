import React ,{useState}from 'react'

function Practice1() {
    const countries=[
        {name:'india',value:'in',cities:['delhi','mumbai']},
        {name:'pak',value:'pk',cities:[' lahore','karanchi']},
        {name:'Bangladesh',value:'bg',cities:['dhaka','chittagong']}
    
    ]

const [country,setCountry]=useState(countries)
let [city,setcity]=useState([])
   console.log(country)
 function countryChange(index)
 {
       console.log(index)
       countries.forEach((ele,i)=>{
           if(index==i)
           {
                 for(let i in ele)
                 {
                    setcity(ele[i])
                 }
           }
       })
        


 }
  return (
  <>
        <select onChange={(f)=>{countryChange(f.target.value)}}>
      {
         country.map((ele,index)=>{
              return <option value={index}>{ele.name}</option>
         })
      }
      </select>
      <select>
        {
            city.map((ele,i)=>{
                return <option>{ele}</option>
            })
        }
      </select>
 </>
  )
}

export default Practice1
