import React from 'react'
import { ImPen } from "react-icons/im";

import './Info.css'
import image from '../../media/pen.svg'

function Info() {
    return (
        <div className="info">
            <div className="info_about">
                <p>
                    <ImPen className="penIcon"/>
                    Konspekt yozishdan charchadingizmi ? U holda ushbu mini ilovamiz aynan siz uchun. Kerakli matnni kiriting va bir zumda uni qo'lyozma shaklda yuklab oling
                    <ImPen className="penIcon"/>
                </p>
            </div>
            <div className="info_image">
                <img src={image} alt="pen" />
            </div>
        </div>
    )
}

export default Info
