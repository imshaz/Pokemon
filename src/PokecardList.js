import React, { Component } from 'react'

import Pokecard from './Pokecard'; 
import './PokecardList.css'
export default class PokecardList extends Component {
    static defaultProps ={pokemon:[
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
      ]}

    render() {
        // const {id, name, type,base_experience} = this.props; 

        return (
            <div className="">
                <h1>{this.props.title}</h1>
                <h3 className={this.props.winner?"winner":"looser"} >{this.props.winner?"Winner":"Looser"}</h3>
                <h5>Total Experience {this.props.exp}</h5>
                <div className="pokecardList"> 
                {
                    this.props.pokemon.map((p,index)=>
                    {
                   return <div> <Pokecard key={index} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/> 
                </div>})
                }
                </div>
               
            </div>
        )
    }
}
