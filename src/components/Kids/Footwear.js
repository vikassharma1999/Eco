import React, {Component} from 'react'
import KidFootwear from './kid_footwear/KidFootwear';
import img1 from'./images/img1.jpeg'
import img2 from'./images/img2.jpeg'
import img3 from'./images/img3.jpeg'
import img4 from'./images/img4.jpeg'
import img5 from'./images/img5.jpeg'
import img6 from'./images/img6.jpeg'
import img7 from'./images/img7.jpeg'
import img8 from'./images/img8.jpeg'
import img9 from'./images/img9.jpeg'
import img10 from'./images/img10.jpeg'
class Footwear extends Component{
    constructor(props)
    {
        super(props)
        this.state={

        }
    }
     
    products = [
        {
            id:1,
            name:'Boys & Girls Velcro Casual Boots',
            price:'285',
            img:img1
        },
        {
            id:2,
            name:'LMN Child Care Booties',
            price:'199',
            img:img2
        },
        {
            id:3,
            name:'BABY FIRST STEP Booties',
            price:'229',
            img:img3
        },
        {
            id:4,
            name:'Boys Slip-on Flats',
            price:'300',
            img:img4
        },
        {
            id:5,
            name:'Boys & Girls Lace Casual Boots',
            price:'324',
            img:img5
        },
        {
            id:6,
            name:'Boys Slip-on Clogs',
            price:'1,199',
            img:img6
        },
        {
            id:7,
            name:'Boys & Girls Lace Formal Boots',
            price:'296',
            img:img7
        },
        {
            id:8,
            name:'Girls Velcro Ballerinas',
            price:'200',
            img:img8
        },
        {
            id:9,
            name:'Girls Slip on Ballerinas',
            price:'499',
            img:img9
        },
        {
            id:10,
            name:'Boys & Girls Velcro Running Shoes',
            price:'429',
            img:img10
        },

    ]

    render()
    {
        return(
            <>
          {
       this.products.map(p=><KidFootwear id={p.id}{...p}/>)
          }
            </>
        )
    }
}
export default Footwear