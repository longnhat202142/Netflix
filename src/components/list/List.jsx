import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from "@mui/icons-material"
import "./List.scss"
import { useRef } from "react"
import ListItem from "../listItem/ListItem"

export default function List() {
    const listRef = useRef(null)
    const handleClick =(direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 50;
        
        if (direction === "left"){
          
            if (listRef.current){
                listRef.current.style.transform = `translateX(${230 + distance}px)`;
            }
        }

        if (direction === "right"){
          
            if (listRef.current){
                listRef.current.style.transform = `translateX(${ -230 + distance}px)`;
            }
        }
    }
  return (
    <div className="list">
      <span className="listTitle">Tiếp tục xem</span>
      <div className="wrapper">
        <ArrowBackIosNewOutlined className="sideArrow left" 
        onClick={() => handleClick("left")}/>

    <div className="container" ref={listRef}>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>

    </div>
        <ArrowForwardIosOutlined className="sideArrow right" onClick={() => handleClick("right")}/>
      </div>
    </div>
  )
}
