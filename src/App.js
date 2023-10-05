import './App.css';
import logo from  './assets/logo.svg'
import heromobile from './assets/illustration-hero-mobile.png'
import mouse from './assets/icon-scroll.svg'
import passion from './assets/illustration-passions.svg'
import lifestyle from './assets/illustration-lifestyle.svg'
import anywhere from './assets/illustration-work-anywhere.svg'
import square from './assets/icon-free.svg'
import paid from './assets/icon-paid.svg'
import check from './assets/icon-check.svg'
import ValidateEmail from './ValidadeEmail'
import left from './assets/illustration-hero-left.svg'
import herosquigle from './assets/bg-hero-squiggle.svg'
import right from './assets/illustration-hero-right.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className='logo' src={logo} alt=''></img>
        <img className='heromobile' src={heromobile} alt=''></img>
        <div className='hero-imgs'>
          <img src={left} alt=''></img>
          <img src={herosquigle} alt=''></img>
          <img src={right} alt=''></img>
        </div>
        <div className='tittle'>
          <h1>Transforming Healthcare with Sevacare AI</h1>
          <h2>Experience a new era of value-based care and personalized health solutions with Sevacare AI. Whether you're focused on improving your health or seeking innovative healthcare options, we've got you covered.</h2>
          <img className='mouse' src={mouse} alt=''></img>
        </div>
      </header>
      <main>
        <div className='content'>
          <div className='illustration-card'>
            <div className='illustration passions'>
              <div className='illustration-img'>
                <img src={passion} alt=''></img>
              </div>
              <div className='illustration-txt'>
                <h4>Prioritize Your Health</h4>
                <h5>Your health deserves top-notch care. Sevacare AI empowers you to take control of your well-being.</h5>
              </div>
            </div>
            <div className='illustration lifestyle'>
              <div className='illustration-img'>
                <img src={lifestyle} alt=''></img>
              </div>
              <div className='illustration-txt'>
                <h4>Customized Lifestyle Care</h4>
                <h5>Choose a healthcare approach that suits your lifestyle. Sevacare AI tailors solutions to fit your unique needs.</h5>
              </div>
            </div>
            <div className='illustration anywhere'>
              <div className='illustration-img'>
                <img src={anywhere} alt=''></img>
              </div>
              <div className='illustration-txt'>
                <h4>Accessible Healthcare</h4>
                <h5>Access healthcare from anywhere with Sevacare AI. Your well-being is always within reach.</h5>
              </div>
            </div>
          </div>
          <p className='pricing'>Our Healthcare Solutions</p>
          <p className='paragraph'>We're dedicated to your health and well-being. Sevacare AI offers accessible and value-based healthcare solutions, and it's easy to get started.</p>
          <div className='blue-cards'>
            <div className='dip-card'>
              <img className='square' src={square} alt=''></img>
              <p className='dip'>Get Started</p>
              <p className='start'>New to Sevacare AI? No problem! Our free plan provides you with essential tools for personalized healthcare.</p>
              <p className='free'>Free</p>
              <div className='check-list'>
                <img className='check' src={check} alt=''></img>
                <p className='checks'>Access to essential healthcare features</p>
              </div>
            </div>
            <div className='dive-card'>
              <img className='paid' src={paid} alt=''></img>
              <p className='dive'>Go Premium</p>
              <p className='ready'>Ready to elevate your healthcare experience? Our premium plan offers advanced healthcare solutions and expert guidance.</p>
              <p className='price'>$25.00<span>/month</span></p>
              <div className='check-list'>
                <img className='check-dark' src={check} alt=''></img>
                <p className='checks-d'>Full access to all healthcare features</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='App-footer'>
        <p className='notify'>Stay Informed</p>
        <ValidateEmail/>
      </footer>
    </div>
  );
}

export default App;
