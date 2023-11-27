import React from "react";
import './cards.css';
import dummy from '../../../images/dummy.png';

const Cards = ({ title, content, author, imageUrl}) => {
    // console.log("triggered",{ title, content, author, imageUrl})
    return (
        <>
        <div className="card">
            <div className='cards-page'>
                <div className="cards-card">
                    <img src={imageUrl} className="cards-image" />
                    <div className="cards-info">
                        <h2 className="cards-title">{title}</h2>
                        <p className="cards-descp">{content}</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default Cards;

// const Cards = ({ title, content, author, imageUrl}) => {
//     return (
//         <>
//             <div className='cards-page'>
//             <div className="cards-title"><p className="card-p-title">{title}</p></div>
//                 <div className="cards-card">
//                     <img src={dummy} className="cards-image" />
//                     <div className="cards-info">
//                         <p>{content}</p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
// export default Cards;