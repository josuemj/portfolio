import './IconM.css'
function IconM({
    source,
    x,
    y, 
    goesTo
}){
    const iconStyle = {
        width: x,
        height: y
    }
    return(
        <>
        <a href={goesTo} target="_blank" rel="noopener noreferrer">
        <img src={source} className='icon' style={iconStyle}>
        </img>
        </a>
      
        </>
    )
}

export default IconM