import React, { Component } from 'react'; 

import PokecardList from './PokecardList'

export default class Pokegame extends Component {

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

        let hand1=[]; 
        let hand2=[...this.props.pokemon]; 

        while(hand1.length<hand2.length){

            let random_index= Math.floor(Math.random()*hand2.length); 
            // console.log(random_index)
            // console.log("hand1", hand1)
            // console.log("hand2", hand2)

            hand1.push(hand2.splice(random_index,1)[0]);
        }
        
        let listOne = hand1.reduce((accumulator, currentItem)=>{return (accumulator+ currentItem.base_experience)},0); 
        let listTwo = hand2.reduce((accumulator, currentItem)=>{return (accumulator+ currentItem.base_experience)},0); 

        // console.log("List One", listOne)
        // console.log("List Two", listTwo)
        
        return (
            <div>
                <PokecardList winner={listOne>listTwo} exp={listOne} title="Pokemon Set One" pokemon={hand1}></PokecardList>
                <PokecardList winner={listOne<listTwo} exp={listTwo} title="Pokemon Set Two" pokemon={hand2}></PokecardList>
            </div>
        )
    }
}
