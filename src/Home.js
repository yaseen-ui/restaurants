import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import RestaruntsList from './components/RestaruntsList';
import SideMenu from './SideMenu';


export default function Home() {

    const [apiData, setApiData] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [restaurantList, setRestaurantList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showSwiggyOnly, setShowSwiggyOnly] = useState(false);


    useEffect(() => {
        const list = apiData.map(ele => ele.category);
        if (list.length) {
            handleCategoryChange(list[0]); // default value is set as the first option
        }
        setCategoryList(list);
    }, [apiData]);

    const handleShowSwiggy = (flag) => {
        setShowSwiggyOnly(flag);
    }

    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
        if (value === 'all') {
            const allCategories = [];
            apiData.forEach(ele => {
                allCategories.push(...ele.restaurantList);
            })
            setRestaurantList(allCategories);
        } else {
            const index = apiData.findIndex(ele => ele.category === value);
            setRestaurantList(apiData[index].restaurantList);
        }
    }

    useEffect(() => {
        fetch("https://cdn.adpushup.com/reactTask.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setApiData(result);
                },
                (error) => {
                    console.log(error);
                }
            )
    }, [])

    return (
        <>
            <div className='container-fluid'>
                <Header></Header>
                <div className='row restarunts-list'>
                    <div className='col-md-2'>
                        <SideMenu
                            categoryList={categoryList}
                            selectedCategory={selectedCategory}
                            handleCategoryChange={handleCategoryChange}
                            handleShowSwiggy={handleShowSwiggy}
                            showSwiggyOnly={showSwiggyOnly}
                        ></SideMenu>
                    </div>
                    {restaurantList.length && <div className='col-md-10'>
                        <RestaruntsList showSwiggyOnly={showSwiggyOnly} restaurantList={restaurantList}></RestaruntsList>
                    </div>}
                </div>
            </div>
        </>
    )
}
