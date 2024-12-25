import React, { useEffect } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import Form from '../components/Form'
import { useLocation } from 'react-router-dom'

const Home = () => {
    const number = import.meta.env.VITE_MY_NUM;
    const message = import.meta.env.VITE_MY_MSG;
  return (<>
      <section className='about-me d-flex justify-content-center my-3' id='about-me'>
        <div className='content container row align-items-center text-secondary'>
    <div className='gap'></div>
    <div className='gap'></div>
            <div className='left col-lg-6 col-md-12 col-sm-12'>
                <h1 className='text-white text-uppercase fw-light'>i am a <span className='fw-bold designation'>software engineer</span></h1>
                <p className='my-4 fw-light'>Versatile and motivated full-stack developer with a strong foundation in Python, Data Structures and
Algorithms, and extensive experience in MERN stack, React.js, and JavaScript. Proficient in backend
technologies including PHP, Laravel, ASP.NET Core, C#, SQL, and MySQL. Seeking a challenging
position where I can leverage my technical skills in full-stack development and contribute to innovative
projects that drive organizational success."</p>
                <a href={`https://wa.me/${number}?Text=${message}`} target='_blank' className='mx-3'>
                    <Button>Whatsapp Me</Button>
                </a>
            </div>
            <div className='col-lg-1'></div>
            <div className='right col-lg-4'>
                <div className='circle'>
                <img src='rose2.png' height={500} />
                </div>
            </div>
        </div>
    </section>
    <section className='services my-3 py-5' id='service'>
        <div className='content container text-center'>
        <div className='gap'></div>
            <h1 className='text-white fw-bold'>MY SERVICES</h1>
            <p className='service-desc'></p>
            <div className='cards row justify-content-center gap-3 mt-5 mb-5'>
            <div className='col-lg-3 col-md-3 col-sm-12'>
                <Card img={'coding.png'} title={'Web Development'} description={'I can build robust Web Application'} i="1"/>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12'>
                <Card img={'mobile-application.png'}  title={'Mobile App Development'} description={'I can build Robust Mobile App Applications.'} i={"2"}/>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-12'>
                <Card img={'algorithm.png'} title={'DSA'} description={'I can manage data in structed way and can perform algorithms for time and space complexities'}  i={"3"}/>
                </div>
            </div>
            <a href={`https://wa.me/${number}?Text=${message}`} target='_blank' className='mx-3 whatsapp_me'>
                    <Button>Whatsapp Me</Button>
                </a>
        </div>
    </section>
    <section className='about_my_resume py-3' id='about_my_resume'>
        <div className='content container'>
        <div className='box'></div>
        <div className='box'></div>
            <div className='gap'></div>
            <h1 className='text-white text-center resume_heading'>About my Resume</h1>
            <div className='gap'></div>
            <div className='actual-content row justify-content-center'>
                <ul className='col-lg-4 information'>
                    <li style={{'--i':"1"}}>
                        <span className='fw-bold'>- Diploma</span>
                        <p>Aptech Learning Centre , ACCP Prime 2.0</p>
                    </li>
                    <li style={{'--i':"2"}}>
                        <span className='fw-bold'>- College</span>
                        <p>I have done my Intermediate in Commerce from Govt Degree Boys Commerce College</p>
                    </li>
                    <li style={{'--i':"3"}}>
                        <span className='fw-bold'>- Certificates</span>
                        <p>Software Engnieering - Aptech</p>
                    </li>
                    <li style={{'--i':"4"}}>
                        <span className='fw-bold'>- Bachelors</span>
                        <p>I am currently enrolled in Bachelors Program in Computer Science</p>
                    </li>
                    <li style={{'--i':"5"}}>
                        <span className='fw-bold'>- Email</span>
                        <p>hassanmuhammad12187@gmail.com</p>
                    </li>
                    <li style={{'--i':"6"}}>
                        <span className='fw-bold'>- Number</span>
                        <p>+92 308-3734443</p>
                    </li>
                </ul>
                <div className='col-lg-1'></div>
                <ul className='col-lg-4 skills'>
                    <li style={{'--i':"1"}}>
                        <span className='fw-bold'>- Software Skills</span>
                        <li style={{'--i':'2'}}>Python</li>
                        <li style={{'--i':'3'}}>Data Structures & Algorithms</li>
                        <li style={{'--i':'4'}}>ASP.NET Core c#</li>
                        <li style={{'--i':'5'}}>c#</li>
                        <li style={{'--i':'6'}}>ReactJs</li>
                        <li style={{'--i':'7'}}>NodeJs / Express Js</li>
                        <li style={{'--i':'8'}}>Mongo DB</li>
                        <li style={{'--i':'9'}}>JavaScript</li>
                        <li style={{'--i':'10'}}>Php</li>
                        <li style={{'--i':'11'}}>MySql</li>
                        <li style={{'--i':'12'}}>SQL</li>
                        <li style={{'--i':'13'}}>Laravel</li>
                    </li>
                </ul>
            </div>
                <a href='Resume.pdf' target='_blank' className='resume'><Button>Download My Resume</Button></a>
        </div>
    </section>
    <div className='gap'></div>
    <section className='contact-me d-flex justify-content-center' id='contact-me'>
        <div className='content container row justify-content-center gap-4 text-center'>
            <h1 className='text-white'>Contact Me</h1>
            {/* <div className='gap'></div> */}
            <div className='text-fields col-lg-5 p-0'>
                <Form />
            </div>
            <div className='map col-lg-4 p-0'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.3141351278177!2d67.1492499752596!3d24.88726427791175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339999415e0c3%3A0x36742eee0fd9c291!2sAptech%20Metro%20Star%20Gate!5e0!3m2!1sen!2s!4v1735069430027!5m2!1sen!2s" style={{border:'0',width:"100%",height:"100%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="gap"></div>
        </div>
    </section>
    </>
  )
}

export default Home