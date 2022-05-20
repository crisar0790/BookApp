import React, { useState } from "react";
import Modal from "./Modal";

export default function Card({ book }) {

    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();

    return (
        <>
            {
                book?.map((b) => {

                    let thumbnail = b.volumeInfo.imageLinks && b.volumeInfo.imageLinks.smallThumbnail;
                    let amount = b.saleInfo.listPrice && b.saleInfo.listPrice.amount;

                    if (thumbnail !== undefined && amount !== undefined) {
                        return (
                            <>
                                <div className="card" onClick={() => { setShow(true); setItem(b) }}>
                                    <img src={thumbnail} alt="book" />
                                    <div className="bottom">
                                        <h3 className="title">{b.volumeInfo.title}</h3>
                                        <p className="amount">$  {amount}</p>
                                    </div>
                                </div>
                                <Modal show={show} item={bookItem} onClose={() => setShow(false)}/>
                            </>
                        )
                    }
                })
            }
        </>
    )
}