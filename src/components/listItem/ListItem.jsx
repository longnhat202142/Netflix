import { Add, PlayArrow, ThumbDownRounded, ThumbUpAltOutlined } from "@mui/icons-material"
import "./ListItem.scss"
import { useState } from "react"

export default function ListItem({index}) {

  const [isHovered,setIsHovered] = useState(false);
 
  const tralier =  "C:\Users\admin\Downloads\Tree.mp4";
  // 
  return (
    <div className="listItem" 
    style={{left : isHovered && index * 225 - 50 + index * 2.5}}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() =>setIsHovered(false)}
    >
      <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2022/01/18-1.jpg" alt="" />
     
      {isHovered && (
          <>
      
     <video src={tralier} autoPlay={true} loop /> 
      <div className="icons">
        <PlayArrow/>
        <Add/>
        <ThumbUpAltOutlined/>
        <ThumbDownRounded/>
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

      <div className="genre">Hành động</div>
      
     
      </>
      )}
     
    </div>
  )
}
