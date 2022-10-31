import './App.css';
import DSC_5564 from "./assets/DSC_5564.jpg"
import share from "./assets/share.png"
import option from "./assets/option.png"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={DSC_5564} alt='profile-img' id='profile__img'/>
        <p>Abiye Iniabere</p>
        <a href=''><img src={option} className='option'/></a>
        <a href=''><img src={share} className='share'/></a>
      </header>
      <section className='profile'>
        <a href='https://hng9.slack.com/vicktuur' id='slack'>Abiye Iniabere</a>
        <a href='https://twitter.com/Victor_Abiye' id='twitter'>Twitter Link</a>
        <a href='https://training.zuri.team/' id='btn__zuri'>Zuri Team</a>
        <a href='https://books.zuri.team/' id='books'>Zuri Books</a>
        <a href='https://books.zuri.team/python-for-beginners?ref_id=Vicktuur' id='book__python'>Python books</a>
        <a href='https://background.zuri.team/' id='pitch'>Background Check for Coders</a>
        <a href='https://books.zuri.team/design-rules'>Design Books</a>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
