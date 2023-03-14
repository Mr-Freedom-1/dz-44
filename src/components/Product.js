import styles from './Product.module.scss';
import iphone from "../assets/iphone.jpg";
import watch from "../assets/watch.jpg";
import no_foto from "../assets/no-foto.jpg";
import React from "react";

function Product(props){

    const remove = () => {
        props.onRemove(props.id)
    }

    let image;

    if (props.name === "Iphone") {
        image = iphone;
    } else if (props.name === "Watch") {
        image = watch;
    } else {
        image = no_foto;
    }

    return (
        <div className={styles.product}>
            <div className={styles.img}>
                <img src={image} />
            </div>
            <div className={styles.body}>
                <h1 className={styles.title}>{props.name}</h1>
                <div className={styles.price}>{props.price}</div>
            </div>
            <button onClick={remove} type="button">Remove</button>
        </div>
    )
}

export default Product;

