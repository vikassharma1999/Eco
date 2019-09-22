import React, {Component} from 'react'
import KidClothings from './kid_clothings/KidClothings';
import img1 from'./images_cloths/img1.jpeg'
import img2 from'./images_cloths/img2.jpeg'
import img3 from'./images_cloths/img3.jpeg'
import img4 from'./images_cloths/img4.jpeg'
import img5 from'./images_cloths/img5.jpeg'
import img6 from'./images_cloths/img6.jpeg'
import img7 from'./images_cloths/img7.jpeg'
import img8 from'./images_cloths/img8.jpeg'
import img9 from'./images_cloths/img9.jpeg'
import img10 from'./images_cloths/img10.jpeg'
class Clothings extends Component{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }
     
    products = [
        {
            id:1,
            name:'Boys Kurta and Pyjama Set',
            price:'749',
            img:img1
        },
        {
            id:2,
            name:'Boys Polka Print Cotton Blend T Shirt',
            price:'599',
            img:img2
        },
        {
            id:3,
            name:'Boys Solid Cotton Blend T Shirt',
            price:'449',
            img:img3
        },
        {
            id:4,
            name:'Boys Party(Festive) T-shirt T-shirt, Pant',
            price:'599',
            img:img4
        },
        {
            id:5,
            name:'Full Sleeve Graphic Print Boys Sweatshirt',
            price:'400',
            img:img5
        },
        {
            id:6,
            name:'Boys Self Design Cotton Lycra Blend T Shirt',
            price:'479',
            img:img6
        },
        {
            id:7,
            name:'Boys Solid Cotton Blend T Shirt',
            price:'319',
            img:img7
        },
        {
            id:8,
            name:'Boys Festive & Party Blazer, Shirt and Trouser Set',
            price:'664',
            img:img8
        },
        {
            id:9,
            name:'Regular Fit Boys Green Trousers',
            price:'739',
            img:img9
        },
        {
            id:10,
            name:'Boys Printed Cotton Blend T Shirt',
            price:'600',
            img:img10
        },

    ]

    render()
    {
        return(
            <>
          {
       this.products.map(p=><KidClothings id={p.id}{...p}/>)
          }
            </>
        )
    }
}
export default Clothings