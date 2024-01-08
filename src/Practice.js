
import React, { useState } from 'react'

function Practice() {
    let a = {name:'shruti sharma',age:'22 year',gender:'female',husband:'shashi shawarn',qualification:"InterPass",father:'vijay Sharma',daughter:'pitchu'}
    let c = [];
    let d = [];
    let e;
    let [car, setCar] = useState(a)
    // console.log(car)
    let [cari, setCari] = useState(c)
    let [cark, setCark] = useState(d)
    let [str,setStr]=useState('')
    let [carinfo,setcarinfo]=useState('')
    for (let i in car) {
        c.push(i)
        d.push(car[i])
    }
    // console.log(str)

    // console.log(e)
    // console.log(cari)
    // console.log(cark)
    return (
        <>
         { 
            // cari.map((ele,i)=>{
            //     return <li>{ele}={cark[i]}</li>
            // })
         }
         <div className='box'>
            <b>you can see your information :)</b>
         <input  onChange={(f)=>{
            // console.log(f.target.value)
            setStr(f.target.value)
         }}className='carInqueary'></input>
          <h1>{a[str]}</h1>
          </div>
        </>
    )
}
export default Practice