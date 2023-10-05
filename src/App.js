import './App.css';
import logo from  './assets/logo.svg'
import heromobile from './assets/illustration-hero-mobile.png'
import mouse from './assets/icon-scroll.svg'
import passion from './assets/illustration-passions.svg'
import freedom from './assets/illustration-financial-freedom.svg'
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
          <h1>Get paid for the work you <span>love</span> to do.</h1>
          <h2>The 9-5 grind is so last century. We believe in living life on your 
          own terms. Whether you’re looking to escape the rat race or set up 
          a side hustle, we’ve got you covered.</h2>
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
              <h4>Indulge your passions</h4>
              <h5>Your passions shouldn't be just for the weekend. Earn a living doing what you love.</h5>
              </div>
            </div>
            <div className='illustration freedom'>
              <div className='illustration-img'>
              <img src={freedom} alt=''></img>
              </div>
              <div className='illustration-txt'>
              <h4>Gain financial freedom</h4>
              <h5>Start making money work for you. There’s nothing quite like earning while you sleep.</h5>
              </div>
            </div>
            <div className='illustration lifestyle'>
              <div className='illustration-img'>
              <img src={lifestyle} alt=''></img>
              </div>
              <div className='illustration-txt'>
              <h4>Choose your lifestyle</h4>
              <h5>Own your daily schedule. Fancy a lie-in? Go for it! Take charge of your week.</h5>
              </div>
            </div>
            <div className='illustration anywhere'>
              <div className='illustration-img'>
              <img src={anywhere} alt=''></img>
              </div>
              <div className='illustration-txt'>
              <h4>Work from anywhere</h4>
              <h5>Selling online means not being pinned down. Want to work AND travel? Go for it!</h5>
              </div>
            </div>
          </div>
          <p className='pricing'>Our pricing plans</p>
          <p className='paragraph'>We only make money when our creators make money. Our plans are always affordable, and 
          it’s completely free to get started.</p>
          <div className='blue-cards'>
            <div className='dip-card'>
            <img className='square' src={square} alt=''></img>
            <p className='dip'>Dip your toe</p>
            <p className='start'>Just getting started? No problem at all! Our free plan will take you a long way.</p>
            <p className='free'>Free</p>
              <div className='check-list'>
                <img className='check' src={check} alt=''></img>
                <p className='checks'>Unlimited products</p></div>
              <div className='check-list'>
                <img className='check' src={check} alt=''></img>
                <p className='checks'>Basic analytics</p></div>
              <div className='check-list'>
                <img className='check' src={check} alt=''></img>
                <p className='checks'>Limited marketplace exposure</p></div>
              <div className='check-list'>             
                <img className='check' src={check} alt=''></img>
                <p className='checks'>10% fee per transaction</p>
              </div>
            </div>
            <div className='dive-card'>
              <img className='paid' src={paid} alt=''></img>
            <p className='dive'>Dive right in</p>
            <p className='ready'>Ready for the big time? Our paid plan will help you take your business to the next level.</p>
            <p className='price'>$25.00<span>/month</span></p>
            <div className='check-list'>
                <img className='check-dark' src={check} alt=''></img>
                <p className='checks-d'>Custom domain</p></div>
              <div className='check-list'>
                <img className='check-dark' src={check} alt=''></img>
                <p className='checks-d'>Advanced analytics and reports</p></div>
              <div className='check-list'>
                <img className='check-dark' src={check} alt=''></img>
                <p className='checks-d'>High marketplace visibility</p></div>
              <div className='check-list'>             
                <img className='check-dark' src={check} alt=''></img>
                <p className='checks-d'>5% fee per transaction</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='App-footer'>
        <p className='notify'>Get notified when we launch</p>
        <ValidateEmail/>
      </footer>
    </div>
  );
}

export default App;
