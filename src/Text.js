import React, { useState } from 'react'
// import PropTypes from 'prop-types'

let c = 0;

function Text(props) {
    let [text, setText] = useState('')
    let [removeText, setremoveText] = useState('')
    let [vCount, setVCount] = useState(0)
    let [cCount, setCCount] = useState(0)

    function upper() {
        setText(text.toUpperCase())
    }
    function lower() {
        setText(text.toLowerCase())
    }
    function vowel() {
        c = c + 1;
        if (c >= 2) {
            alert('refresh your page and re render your text for new vowel')
        }
        else {
            for (let i in text) {
                if (text[i] === 'a' || text[i] === 'e' || text[i] === 'i' || text[i] === 'o' || text[i] === 'u' || text[i] === 'A' || text[i] === 'E' || text[i] === 'I' || text[i] === 'O' || text[i] === 'U') {
                    setVCount(++vCount);

                }
                else {
                    if (text[i] !== ' ')
                        setCCount(++cCount)
                }

            }
        }
        console.log(vCount)
    }

  
    function remove() {
        for (let i in text) {
            console.log(text[i])
            if (text[i] !== ' ') {
                removeText = removeText + text[i];
                setremoveText(removeText)
            }

        }
        console.log(removeText)

    }

    return (
        <>
            <div className='box'>
                <textarea className='textarea' value={text} style={{backgroundColor:(props.color['backgroundColor']==='white')?'white':'#464646',
                color:(props.color['backgroundColor']==='white')?'black':'white'
                }}onChange={(f) => {
                    setText(f.target.value)
                }}></textarea>
            </div>
            <div className='btn'>
                <button style={{backgroundColor:props.color['backgroundColor']==='white'?'#c594a680':'black',
                                 color:props.color['backgroundColor']==='white'?'black':'white'}} className='button' onClick={upper}>Uppercase</button>
                <button style={{backgroundColor:props.color['backgroundColor']==='white'?'#c594a680':'black',
                                   color:props.color['backgroundColor']==='white'?'black':'white'}} className='button' onClick={lower}>Lowercase</button>
                <button style={{backgroundColor:props.color['backgroundColor']==='white'?'#c594a680':'black',
                                   color:props.color['backgroundColor']==='white'?'black':'white'}} className='button' onClick={vowel}>Vowel</button>
        
                <button style={{backgroundColor:props.color['backgroundColor']==='white'?'#c594a680':'black',
                                   color:props.color['backgroundColor']==='white'?'black':'white'}} className='button' onClick={remove}>Remove White space</button>
            </div>
            <div>
                <b>Number Of Words are: [{(text.length>0)?text.split(' ').length:'0'}] and char are:[{text.length}]</b>
            </div>
            <div>
                <b> Vowel are:{vCount}</b>
            </div>
            <div>
                <b>Consonent are:{cCount}</b>
            </div>
            <div>
                <b>Remove White space:{removeText}</b>
            </div>
            <div>
            <b>preview:</b>
            <p> {text}</p>
            </div>
        </>
    )
}
export default Text