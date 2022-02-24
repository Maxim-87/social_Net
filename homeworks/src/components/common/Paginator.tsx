import React, {useState} from 'react';
import s from './Paginator.module.css';
// import {UserType} from "../../redux/users-reducer";

type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
}

export const Paginator = (props: PaginatorPropsType) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPotionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return <div className={s.pageItem}>
        {portionNumber > 1 &&
        <button onClick={() => {setPotionNumber(portionNumber - 1)}}> Back </button>}

        {pages.filter (p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map(p => {
                // @ts-ignore
                return <span className={({
                [s.selectedPage] : props.currentPage === p}, s.pageNumber)}
                             key={p}
                             onClick={(e) => {
                             props.onPageChanged(p);
                             }}> {p} </span>
            })}

        {portionCount > portionNumber && <button onClick={() => {setPotionNumber(portionNumber + 1)}}> next </button>}
    </div>

}


