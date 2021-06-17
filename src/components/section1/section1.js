import React,{useState, useEffect} from 'react'
import "./section1.css"
import Typewriter from 'typewriter-effect'
function Section1(props) {

  return(
    <section className="section1" id="section1">
      <div className="container-fluid intro h-100">
        <div className="row h-100 ">
          <div className="col-lg-6 intro-left align-center">
            <div className="intro-left-con h-50 w-">
              <Typewriter
                options={{

                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString('HELLO !')
                  .callFunction(() => {
                    console.log('');
                  })
                  .pauseFor(1000)
                  .deleteAll()
                  typewriter.typeString('I AM SUBHADEEP')
                  .pauseFor(300)
                  typewriter.typeString('<br/>WELCOME TO MY PAGE...')
                  .pauseFor(100)
                  typewriter.typeString('<br/>I AM A WEB DEVELOPER.')
                  .pauseFor(100)
                  .deleteChars(14)
                  typewriter.typeString('CSE UNDERGRAD.')
                  .pauseFor(100)
                  .deleteChars(14)
                  typewriter.typeString('<strong style="color:red;">CODER </strong> .')
                  .callFunction(() => {
                    console.log('');
                  })
                  .start();

                }}
              />
            </div>
          </div>
          <div className="col-lg-6 pic">
            <div className="intro-right">
              <div className="animation-box">
                

              </div>


            </div>
          </div>
          </div>
      </div>
    </section>
  )
}
export default Section1
