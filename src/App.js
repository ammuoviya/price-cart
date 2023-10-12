
import './App.css';
import Card from './components/card.js'
function App() {
  return (
    <div className="App">
     <section className="pricing py-5">
        <div className="container">
          <div className="row">
            <Card price="0" 
              title="FREE"
              text1="Single User"
              text2="5GB Storage"
              text3="Unlimited Public Projects"
              text4="Community Access"/>
              <Card price="9" 
              title="PLUS"
              text1="5 Users"
              text2="50GB Storage"
              text3="Unlimited Public Projects"
              text4="Community Access"
              text5="Unlimited Private Projects"
              text6="Dedicated Phone Support"
              text7="Free Subdomain"/>
              <Card price="49" 
              title="PRO"
              text1="Unlimited Users"
              text2="150GB Storage"
              text3="Unlimited Public Projects"
              text4="Community Access"
              text5="Unlimited Private Projects"
              text6="Dedicated Phone Support"
              text7="Unlimited Free Subdomains"
              text8="Monthly Status Reports"/>
           
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
