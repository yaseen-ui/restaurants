import React from 'react';

export default function SideMenu(props) {
    return (
        <div className='row'>
            <div className='col-12 side-menu-item'>
                <label>Category:</label>
                <select className='form-control' value={props.selectedCategory} onChange={e => props.handleCategoryChange(e.target.value)}>
                    {props.categoryList.map(ele => <option key={ele} value={ele}>{ele}</option>)}
                </select>
            </div>
            <div className='col-12 side-menu-item'>
                <button className={`btn btn-sm ${props.showSwiggyOnly ? 'btn-primary' : 'btn-light'}`} onClick={(e) => props.handleShowSwiggy(true)}>Only on Swiggy</button>
                <button className={`btn btn-sm ${!props.showSwiggyOnly ? 'btn-primary' : 'btn-light'}`} onClick={(e) => props.handleShowSwiggy(false)}>See All</button>
            </div>
        </div>
    )
}
