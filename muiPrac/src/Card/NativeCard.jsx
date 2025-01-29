import { useState } from "react";
import per from '../assets/per.png'
export const NativeCard = () =>{
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
    }

    return (
        <div className={`card ${isDark ? 'dark' : ''}`}>
            <div className="card-header">
                <div className="avatar">R</div>
                <div className="header-text">
                    <h3 className="title">Рублев Николай Евгеньевич</h3>
                    <span className="subheader">Сентябрь 14, 2016</span>
                </div>
            </div>
            
            <img 
                src={per} 
                alt="Paella dish" 
                className="card-image"
            />

            <div className="card-content">
                <p className="card-text">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </p>
            </div>
            
            <div className="card-actions">
                <button className="button">Share</button>
                <button className="button" onClick={toggleTheme}>Theme</button>
            </div>
        </div>
    )
}