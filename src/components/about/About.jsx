import './About.css'
import ImageHolder from '../ImageHolder/ImageHolder'

function About(){
    return(
        <>
        <section className="about-section">

            <div className="first-stage">
                <div className="text-container">
                    <span className='hello'>Hello There!</span>
                    <span className='name'>&lt;I'm Josue Marroquin/&gt;</span>
                </div>
                <div className='introduction'>
                    <div className='image-holder'>
                        <ImageHolder image={'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'}/>
                    </div>
                    <div className='description'>
                        <p>I'm Jr Developer</p>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}

export default About