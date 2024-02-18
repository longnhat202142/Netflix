import { ArrowBackOutlined } from "@mui/icons-material"
import "./Watch.scss"

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined/>
        Home
      </div>

      <video
       src="https://media.istockphoto.com/id/1460210231/vi/video/r%C3%B9a-bi%E1%BB%83n-xanh-t%C6%B0%C6%A1i-b%C6%A1i-tr%C3%AAn-m%E1%BA%B7t-n%C6%B0%E1%BB%9Bc-ph%C3%ADa-tr%C3%AAn-r%E1%BA%A1n-san-h%C3%B4-ch%E1%BA%BFt.mp4?s=mp4-640x640-is&k=20&c=uwxpCzXKBt2Oa9f_OdmpQp7_P8dEz2-C9cVe-aY1rJI=" 
       autoPlay={true}
       progress="true"
       className="video" 
       controls/>
    </div>
  )
}
