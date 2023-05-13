import './App.css'

function App() {
  return (
    <>
      <div className='row-center'>
        <div className='column border-right'>
          <div className='content'>
            <div className='name-main'><h2>Awais</h2><h3>Q</h3></div>
          </div>
          <div className='content border-bottom'>
            <p>
              👋 A software developer with 5+ years of professional experience developing full-stack applications for the web.
              <br /> <br />
              I have a passion for frontend development, where I focus on building design systems and full-fledged user flows primarily in React 🖥️.
              <br /> <br />
              I have added exposure towards designing and deploying both REST and GraphQL APIs that serve millions of users across the globe 🌎.
              <br /> <br />
              My experience ranges from SMBs to large scale corporate organisations, where I have created solutions to solve multiple user dilemmas and meet ever growing business needs 📈.
            </p>
          </div>

          <div>
            {/* AWS */}
            <div className='content row-item-center base-gap'>
              <svg fill="red" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
              </svg>
              <div className='column'>
                <p className='no-margin'>Frontend Engineer @ AWS SageMaker.</p>
                <p className='no-margin'>Jan 2022 - present</p>
                <p className='no-margin'>Vancouver, BC.</p>
              </div>
            </div>

            {/* Fullscript */}
            <div className='content row-item-center base-gap'>
              <svg fill="grey" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
              </svg>
              <div className='column'>
                <p className='no-margin'>Javascript Developer II @ Fullscript.</p>
                <p className='no-margin'>Nov 2019 - Jan 2022</p>
                <p className='no-margin'>Ottawa, ON.</p>
              </div>
            </div>

            {/* Klipfolio */}
            <div className='content row-item-center base-gap'>
              <svg fill="grey" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
              </svg>
              <div className='column'>
                <p className='no-margin'>Fullstack Developer @ Klipfolio.</p>
                <p className='no-margin'>May 2018 - Oct 2019</p>
                <p className='no-margin'>Ottawa, ON.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='content'>
            <img src='https://raw.githubusercontent.com/awaisabir/awaisabir/main/6.png' />
          </div>
        </div>
      </div>
      <div className='column border-top'>
        <div className='content social-link-container'>
          <a className='social-link' target='_blank' href='https://linkedin.com/in/awaisabir'><img src='https://img.shields.io/badge/-awaisabir-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/awaisabir/' /></a>
          <a className='social-link' target='_blank' href='https://medium.com/@awaisabir'><img src='https://img.shields.io/badge/-@awaisabir-03a57a?style=flat-square&labelColor=000000&logo=Medium&link=https://medium.com/@awaisabir)' /></a>
          <a className='social-link' target='_blank' href='https://github.com/awaisabir'><img src='https://img.shields.io/badge/-awaisabir-grey?style=flat-square&logo=Github&logoColor=white&link=https://www.github.com/awaisabir)' /></a>
          <a className='social-link' target='_blank' href='https://drive.google.com/file/d/16Ur5rHwFjoyIadV7Hfkh2pIhMxbyKKn1/view?usp=sharing'><img src='https://img.shields.io/static/v1?label=&message=Resume&color=red' /></a>
        </div>
      </div>
    </>
  )
}

export default App
