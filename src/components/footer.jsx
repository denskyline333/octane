import React from 'react'
import ficon from '../img/icons/footer-icon.png'
function Footer(){

return(
            <footer className="site-footer">
       				 <h2 className = "footer-title">демонстрационный сайт, не для коммерческого использования.</h2>
       				 <img src={ficon} alt="Apex legend and respawn icons" className="footer-icon"/>
   			 </footer>
)

}

export default Footer