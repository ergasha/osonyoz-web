import React from 'react'
import { Tooltip } from '@material-ui/core'
import Zoom from '@material-ui/core/Zoom';
import GitHubIcon from '@material-ui/icons/GitHub';

import './Footer.css'
import footer from '../../media/footer.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="footer_container">
                <div className="footer_left">
                <p>
                    <b>Osonyoz boti</b> Insonlar ishini yengillashtirish uchun yaratildi ! Talab va takliflaringizni bizga yozib qoldiring !
                    <a href='https://github.com/ergashfx2' target="_blank" rel="noopener noreferrer">
                        <Tooltip title="Bog'lanish" placement="bottom" TransitionComponent={Zoom}>
                            <GitHubIcon />
                        </Tooltip> 
                    </a>
                    Albatta botdagi xatoliklarni ko'rsangiz darhol bizga xabar berishni unutmang <br /><br /><br /><br />
                </p>
                </div>
                <div className="footer_right">
                    <img src={footer} alt="img" />
                </div>
            </div>

            <div className="footer_hrt">
                <h3>Biz bilan bog'lanish <a href='https://t.me/Ergashaliuz' target="_blank" rel="noopener noreferrer">Telegram</a></h3>
            </div>
            

        </div>
    )
}

export default Footer
