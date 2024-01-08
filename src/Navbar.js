
// import Proptypes from'prop-types'
function Navbar(props) {

  return (
    <div className='navbar' style={props.color}>
      <ul>
        <li>TEXT CONVERTER {} </li>
      </ul>
      <button onClick={props.a} style={{padding:"8px",backgroundColor:(props.color['backgroundColor']==='white')?'white':'black',color:(props.color['backgroundColor']==='white')?'black':'white'}}>{props.name}</button>
    </div>
  )
}

export default Navbar
