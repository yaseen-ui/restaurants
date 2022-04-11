import React from 'react';
import { tumbnails } from './../config/constants';

export default function ResCard({ data, showSwiggyOnly, index }) {
    return (
        <div className='row'>
            <div className='col-12'>
                <div className="card">
                    <img className='res-image' alt='Loading..'
                        src={`https://images.unsplash.com/photo-${tumbnails[index]}?auto=format&fit=crop&w=500&q=60`}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                        <p className="card-text" title={data.food_types.toString()}>{data.food_types.toString()}</p>
                        <div className='row'>
                            <div className='col-4'>
                                {data.ratings ? <label className='star-label'>* {data.ratings}</label> : '---'}
                            </div>
                            <div className='col-4'>
                                <li>{data.delivery_time}</li>
                            </div>
                            <div className='col-4'>
                                <li>{data.price_for_two}</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
