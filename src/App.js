
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='logo'>
            <img src='./images/tdclogo.png' alt='logo' id='logo'/>
        </div>
        <div className='coordonnees'>
          <p>Rue d'aiseau , 36<br></br>6200 Châtelet<br></br>Tel: 071/40.21.07
          <br></br>Gsm : 0475/32.55.48</p>
        </div>
        <div className='infos'>
          <p>TVA BE 0785 712 866<br></br>Affilié CSTC<br></br>ONSS 5127532228</p>
        </div>
        
      </div>
      <div className='accueil'>
            <div className='textaccueil'>
              <h1>Depuis <span>30 ans</span><br></br>à votre service. </h1>
              <p>Toiture - Sanitaire -Peinture <br></br>Décoration - Pignons - Zinguerie<br></br>
              Aménagement grenier<br></br>Transformations intérieures et extérieures.</p>
            <div><a href='https://www.facebook.com/profile.php?id=61553515433327' target='_blank'><img src='.\images\facebook-square-logo-24.png' alt='fblogo'/></a></div>
            </div>
            <div  className='imgaccueil'><img id='imgaccueil' src='.\images\ryunosuke-kikuno-Mu9uo42SXEY-unsplash.jpg' alt='imgtoit'/></div>
            <button id="btn-accueil"><a href='#cont'>Demandez un rendez-vous</a></button>
      </div>
      <div className='realisations'>
        <h1>Nos dernières réalisations.</h1>
        <div className='images'>
          <img src='.\images\andrej-lisakov--vSka6gZTWM-unsplash.jpg'alt='toit' />
          <img src='.\images\dakota-roos-dSRhwPe6v9c-unsplash.jpg'alt='toit' />
          <img src='.\images\michael-jasmund-m_vEaZizd2s-unsplash.jpg'alt='toit' />
          <img src='.\images\robin-joshua-MjLrM8rVMC0-unsplash.jpg'alt='toit' />
          <img src='.\images\ryunosuke-kikuno-Mu9uo42SXEY-unsplash.jpg'alt='toit' />
          <img src='.\images\southeastern-premier-roofing-Dg_vH-Biy9w-unsplash.jpg'alt='toit' />
         
        </div>
      </div>
      <div className='contact' id='cont'>
        <h1>Demandez un rendez-vous.</h1>
        <form name="contact" method="post" className='contact__form' data-netlify="true" onSubmit="submit">
        <input type="hidden" name="form-name" value="contact" />
            <label for='name'>Nom : </label>
            <input type="text" name="name"/>
        
            <label for='firstname'>Prénom :</label>
             <input type="text" name="firstname"/>
        
            <label for='email'>Email: </label>
            <input type="email" name="email"/>
        
            <label for='message'>Message:</label>
             <textarea name="message"></textarea>
      
       
            <button type="submit">Send</button>
        
        </form>,
      </div>
      
    </div>
  );
}

export default App;
