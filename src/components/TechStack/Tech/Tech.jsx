import './Tech.css'

function Tech({ techname, techSrc }) {
  return (
    <>
      <div className="tech-holder">
        <p className='in-tech-name'>{techname}</p>
        <img src={techSrc} alt={techname} className="tech-image"></img>
      </div>
    </>
  );
}

export default Tech;
