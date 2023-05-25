import React from "react";

function Box({ title, item, result }) {
    let victory;

    if (title === "Computer" && result !== "tie" && result !== "") {
        victory = result === "win" ? "lose" : "win";
    } else {
        victory = result;
    }

    return (
        <div className={`box ${victory}`}>
            <h1>{title} Card</h1>
            {item && (
                <img src={item && item.img} className="item-img" alt="img" />
            )}
            <h2>{victory}</h2>
        </div>
    );
}

export default Box;
