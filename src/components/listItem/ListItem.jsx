import { Add, PlayArrow, ThumbDownRounded, ThumbUpAltOutlined } from "@mui/icons-material"
import "./ListItem.scss"
import { useState } from "react"

export default function ListItem({index}) {

  const [isHovered,setIsHovered] = useState(false);


  // 
  return (
    <div className="listItem" 
    style={{left : isHovered && index * 225 - 50 + index * 2.5}}
    onMouseEnter={() => {
    
      setIsHovered(true);
    }}
    onMouseLeave={() =>
      {
     
        setIsHovered(false);
      }}
    >
      <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2022/01/18-1.jpg" alt="" /> 
     
      {isHovered && (
          <>
      
     
      <iframe src="https://www.youtube.com/embed/lj8TV9q59P4" title="[M/V] V - Christmas Tree :: 그 해 우리는(Our Beloved Summer) OST Part.5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <div className="itemInfo">
      
      <div className="icons">
        <PlayArrow className="icon"/>
        <Add className="icon"/>
        <ThumbUpAltOutlined className="icon"/>
        <ThumbDownRounded className="icon"/>
      </div>

      <div className="itemInfoTop">
        <span>1h14p</span>
        <span className="limit"> +16</span>
        <span> 2023</span>
      </div>

      <div className="desc">
      Một bộ phim hài lãng mạn dành cho tuổi thành niên xoay quanh Choi Woong (Choi Woo-shik) và Kook Yeon-soo (Kim Da-mi), hai người yêu cũ từng chia tay với lời hứa không bao giờ gặp lại. 
      Thật may mắn khi bộ phim tài liệu mà họ quay cách đây 10 năm ở trường cấp ba bỗng nổi đình đám và buộc cả hai phải gặp lại nhau bởi người bạn chung thời cấp ba của họ là cũng là một đạo diễn phim tài liệu.
      </div>

      <div className="genre">Tình cảm lãng mạn</div>
      
      </div>
      </>
      )}
     
    </div>
  )
}
