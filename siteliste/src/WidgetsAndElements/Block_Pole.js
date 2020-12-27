import React from 'react';
import './Styles/Block.css'

export default function Block_Pole(props) {
    if (props.nbr == 1) {
        return (
            <div className="block">
                <h3 className="motdupole">{props.title} </h3>
                <div className="imgtext">
                    <img src={props.imgone} className="one_img_pole" alt={props.title} title={props.title} />
                    <h5 className="text">{props.text} </h5>
                </div>
            </div>
        )
    } else if (props.nbr == 2) {
        return (
            <div className="block">
                <h3 className="motdupole">{props.title} </h3>
                <div className="imgtext">
                    <div className="photos">
                        <img src={props.imgone} className="two_img_pole" alt={props.title} title={props.title} />
                        <img src={props.imgtwo} className="two_img_pole" alt={props.title} title={props.title} />
                    </div>
                    <h5 className="text">{props.text} </h5>
                </div>
            </div>
        )
    } else if (props.nbr == 3) {
        return (
            <div className="block">
                <h3 className="motdupole">{props.title} </h3>
                <div className="imgtext">
                    <div className="photos">
                        <img src={props.imgone} className="three_img_pole" alt={props.title} title={props.title} />
                        <img src={props.imgtwo} className="three_img_pole" alt={props.title} title={props.title} />
                        <img src={props.imgthree} className="three_img_pole" alt={props.title} title={props.title} />
                    </div>
                    <h5 className="text">{props.text} </h5>
                </div>
            </div>
        )
    } else if (props.nbr == 4) {
        return (
            <div className="block">
                <h3 className="motdupole">{props.title} </h3>
                <div className="imgtext">
                    <div className="photos">
                        <img src={props.imgone} className="four_img_pole" alt={props.title} title={props.title} />
                        <img src={props.imgtwo} className="four_img_pole" alt={props.title} title={props.title} />
                        <img src={props.imgthree} className="four_img_pole" alt={props.title} title={props.title} />
                        <img src={props.imgfour} className="four_img_pole" alt={props.title} title={props.title} />
                    </div>
                    <h5 className="text">{props.text} </h5>
                </div>
            </div>
        )
    } else if (props.nbr == 5) {
        return (
            <div className="block">
                <h3 className="motdupole">{props.title} </h3>
                <div className="imgtext">
                    <div className="photos">
                        <img src={props.imgone} className="five_img_pole" alt={props.title} title={props.title} />
                        <img src={props.imgtwo} className="five_img_pole" alt={props.title} title={props.title} />
                        <img src={props.imgthree} className="five_img_pole" alt={props.title} title={props.title} />
                        <img src={props.imgfour} className="five_img_pole" alt={props.title} title={props.title} />
                        <img src={props.imgfive} className="five_img_pole" alt={props.title} title={props.title} />
                    </div>
                    <h5 className="text">{props.text} </h5>
                </div>
            </div>
        )
    } else {
        return (
            <h5 className="text">error dans Block_Pole </h5>
        )
    }
}
