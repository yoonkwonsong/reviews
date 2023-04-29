import React from "react"
import reviews from "./data"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa"

const Review = () => {
    const [index, setIndex] = React.useState(0)

    //     console.log(index)

    const prevReview = () => {
        setIndex((prevState) => {
            if (prevState - 1 < 0) {
                return reviews.length - 1
            }

            return prevState - 1
        })
    }

    const nextReview = () => {
        setIndex((prevState) => {
            if (prevState + 1 > reviews.length - 1) {
                return 0
            }

            return prevState + 1
        })
    }

    const randomReview = () => {
        setIndex(Math.floor(Math.random() * reviews.length))
    }

    return (
        <article className="review">
            <div className="img-container">
                <img
                    src={reviews[index].image}
                    alt={reviews[index].name}
                    className="person-img"
                />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{reviews[index].name}</h4>
            <p className="job">{reviews[index].job}</p>
            <p className="info">{reviews[index].text}</p>
            <div className="button-container">
                <button className="prev-btn" onClick={prevReview}>
                    <FaChevronLeft />
                </button>
                <button className="next-btn" onClick={nextReview}>
                    <FaChevronRight />
                </button>
            </div>
            <button className="random-btn" onClick={randomReview}>
                surprise me
            </button>
        </article>
    )
}

export default Review
