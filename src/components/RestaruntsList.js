import React, { useEffect, useState } from 'react';
import ResCard from './ResCard';

export default function RestaruntsList(props) {
    const [list, setList] = useState([]);
    const [limit, setLimit] = useState(0);
    const [showMore, setShowMore] = useState(true);
    const [randomArray, setRandomArray] = useState([]);
    const [remainingItems, setRemainingItems] = useState(0);

    const toggleShowMore = (newLimit, totalList) => {
        if (newLimit >= totalList.length) {
            setShowMore(false);
        } else {
            setShowMore(true);
        }
    }

    const incrementLimit = (initial) => {
        let totalList;
        if (props.showSwiggyOnly) {
            totalList = props.restaurantList.filter(ele => ele.isExlusive);
        } else {
            totalList = props.restaurantList;
        }
        let newLimit = (initial === true ? 5 : limit + 5);
        if (newLimit <= totalList.length) {
            const newList = totalList.slice(0, newLimit);
            setList(newList);
            setLimit(newLimit);
        } else {
            setList(totalList);
            setLimit(totalList.length);
        }
        toggleShowMore(newLimit, totalList);
        setRemainingItems(totalList.length - newLimit)
    }

    useEffect(() => {
        incrementLimit(true);
        setRandomArray(Array.from({ length: 30 }, () => Math.floor(Math.random() * 30)));
    }, [props.restaurantList, props.showSwiggyOnly])

    return (
        <div className='row container'>
            {list.map((ele, index) =>
                <div className='col-md-4' key={index + '_' + ele.name.replaceAll(' ')}>
                    <ResCard data={ele} index={randomArray[index]}></ResCard>
                </div>
            )}
            {showMore &&
                <div className='col-md-4'>
                    <div className='show-more' onClick={(e) => incrementLimit()}>
                        +{remainingItems} More
                    </div>
                </div>
            }
        </div>
    )
}
