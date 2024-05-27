import './SkillSample.css'

function SkillSample({img, text, size}){
    const style = {
        width: size
    }
    return(
        <>
        <div className="img-container">
            <img src={img}></img>
            <a>{text}</a>
        </div>
        </>

    )
}

export default SkillSample;