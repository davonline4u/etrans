import { useEffect } from 'react';
import React from 'react';

const Items = ({items, deleteItem}) =>{
    
        const itemList = items.map(items =>{
        return(
            <div key={items.id}>
                <span onClick={() => {deleteItem(items.id)}}>{items.content}</span> 

            </div>
            )
        })
        useEffect(() => {
            fetch('https://etranzact-test-api.herokuapp.com/api-docs')
            .then(res => {
                return res.json();
            } ).then(data => {
                console.log(data);
            })
        }, []);
        return(

            <div className="items-category" >
                {itemList}
            </div>
            );           
}

export default Items