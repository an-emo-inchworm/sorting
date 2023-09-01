import React from "react";
import './Sorting.css';
import "/Users/yinuotang/my-app/src/SortingAlgorithms/SortingAlgorithms";
import { getInsertionSortAnimations, partition } from "/Users/yinuotang/my-app/src/SortingAlgorithms/SortingAlgorithms";
import { getSelectionSortAnimations } from "/Users/yinuotang/my-app/src/SortingAlgorithms/SortingAlgorithms";
import { getQuickSortAnimations} from "/Users/yinuotang/my-app/src/SortingAlgorithms/SortingAlgorithms";
import { getMergeSortAnimations } from "/Users/yinuotang/my-app/src/SortingAlgorithms/SortingAlgorithms";
import { getBubbleSortAnimations } from "/Users/yinuotang/my-app/src/SortingAlgorithms/SortingAlgorithms";

export default class Sorting extends React.Component{
    constructor(props){
        super(props);
        this.state = {array: [],};
        this.playing = false
        this.animation_finished = false;
        this.new_arr = false
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = []
        for (let i = 0; i < (window.screen.width-800)/7; i++) {
            array.push(this.getRandomInt(5, 650));
        }
        this.setState({array});
        this.playing = false
    }

    getRandomInt(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    insertionSort(){
        if(this.playing == false && this.animation_finished == false){
            this.playing = true;
            const animations = getInsertionSortAnimations(this.state.array);
            const arrayBars = document.getElementsByClassName('array-bar');
            for(let i = 0; i < animations.length; i++){
                const [barOneIdx, barTwoIdx, barThreeIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style
                const barThreeStyle = arrayBars[barThreeIdx].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = 'red';
                    barTwoStyle.backgroundColor = 'red';
                    barThreeStyle.backgroundColor = 'darkcyan';
                }, i * 3);
                
                setTimeout(() => {
                    const temp = barOneStyle.height
                    barOneStyle.height = barTwoStyle.height
                    barTwoStyle.height = temp;
                    barOneStyle.backgroundColor = 'bisque';
                    barTwoStyle.backgroundColor = 'bisque';
                    barThreeStyle.backgroundColor = 'bisque';
                }, (i+1) * 3);
            }
         } 
    }

    selectionSort(){
        if(this.playing == false){
            this.playing = true;
            const animations = getSelectionSortAnimations(this.state.array);
            const arrayBars = document.getElementsByClassName('array-bar');
            for(let i = 0; i < animations.length; i++){
                const [barOneIdx, barTwoIdx] = animations[i];
                setTimeout(() => {
                    barOneStyle.backgroundColor = 'red';
                    barTwoStyle.backgroundColor = 'red';
                }, i * 3);
                setTimeout(() => {
                    barOneStyle.backgroundColor = 'bisque';
                    barTwoStyle.backgroundColor = 'bisque';
                }, (i+1) * 3);
                
                if(animations[i][2] == true){
                    setTimeout(() => {
                    const temp = barOneStyle.height
                    barOneStyle.height = barTwoStyle.height
                    barTwoStyle.height = temp;

                    barOneStyle.backgroundColor = 'bisque';
                    barTwoStyle.backgroundColor = 'bisque';
                }, (i+1) * 3);
                }
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style
             }
         } 
    }

    mergeSort(){
        if(this.playing == false){
            this.playing = true;
            const animations = getMergeSortAnimations(this.state.array);
            const arrayBars = document.getElementsByClassName('array-bar');
            for(let i = 0; i < animations.length; i++){
                if(i % 3 !== 2){
                    const [barOneIdx, barTwoIdx] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    var color;
                    if(i % 3 === 0){
                        setTimeout(() => {
                            barOneStyle.backgroundColor = 'red';
                            barTwoStyle.backgroundColor = 'red';
                        }, i * 3);
                    } else {
                        setTimeout(() => {
                            barOneStyle.backgroundColor = 'bisque';
                            barTwoStyle.backgroundColor = 'bisque';
                        }, i * 3);
                    }
                } else{
                    setTimeout(() => {
                        const [barOneIdx, newHeight] = animations[i];
                        const barOneStyle = arrayBars[barOneIdx].style;
                        barOneStyle.height = `${newHeight}px`;
                    }, (i) * 3);
                }
            }
         } 
    }

    quickSort(){
        if(this.playing == false){
            this.playing = true;
            const animations = getQuickSortAnimations(this.state.array);
            const arrayBars = document.getElementsByClassName('array-bar');
            for(let i = 0; i < animations.length; i++){
                const [barOneIdx, barTwoIdx] = animations[i];
                setTimeout(() => {
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.backgroundColor = 'red';
                    barTwoStyle.backgroundColor = 'red';

                    setTimeout(() => {
                        const tempheight = barOneStyle.height;
                        barOneStyle.height = barTwoStyle.height;
                        barTwoStyle.height = tempheight;
                        barOneStyle.backgroundColor = 'bisque';
                        barTwoStyle.backgroundColor = 'bisque';
                    })
                }, i * 3);
            }
        }
    }

    bubbleSort(){
        if(this.playing == false){
            this.playing = true;
            const animations = getBubbleSortAnimations(this.state.array);
            for(let i = 0; i < animations.length; i++){
                const arrayBars = document.getElementsByClassName('array-bar');
                const [barOneIdx, barTwoIdx, barThreeIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style
                const barThreeStyle = arrayBars[barThreeIdx].style
                setTimeout(() => {
                    barOneStyle.backgroundColor = 'darkcyan';
                    barTwoStyle.backgroundColor = 'red';
                    barThreeStyle.backgroundColor = 'red';
                }, i * 3);
                
                setTimeout(() => {
                    const temp = barTwoStyle.height;
                    barTwoStyle.height = barThreeStyle.height;
                    barThreeStyle.height = temp;
                    barOneStyle.backgroundColor = 'bisque';
                    barTwoStyle.backgroundColor = 'bisque';
                    barThreeStyle.backgroundColor = 'bisque';
                }, (i+1) * 3);
            }
        } 
    }

    render(){
        const {array} = this.state;
        return(
            <div className="array-container">
            { array.map((value, idx) =>(
                <div className="array-bar" key={idx} style={{
                    height: `${value}px`,
                  }}>
                </div>
            ))}
            <button onClick={() => this.resetArray()}>Create new array</button>
            <button onClick={() => this.insertionSort()}>Insertion sort</button>
            <button onClick={() => this.selectionSort()}>Selection sort</button>
            <button onClick={() => this.mergeSort()}>Merge sort</button>
            <button onClick={() => this.quickSort()}>Quick sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble sort</button>
            </div>
        );
    }
}