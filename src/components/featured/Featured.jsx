import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import './Featured.scss'

export default function Featured({type}) {
  return (
    <div className='featured'>
    {type && (
        <div className="category">
            <span>{type === "movie" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
                <option>Thể loại</option>
                <option value="adventure">Phiêu lưu</option>
                <option value="detective">Trinh thám</option>
                <option value="action">Hành dộng</option>
                <option value="emotional">Tình cảm</option>
                <option value="horrified">Kinh dị</option>
                <option value="cartoon">Hoạt hình</option>

            </select>
        </div>

    )}
       <img 
     width="100%"
     src="https://ca-times.brightspotcdn.com/dims4/default/07ea665/2147483647/strip/true/crop/7149x4766+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fbf%2F16%2F8ec9b40c4b869b3685c6c4138138%2Fspain-soccer-champions-league-80128.jpg" alt="" />
    
    <div className="info">
        <img 
      
        src="https://wallpapers.com/images/featured/real-madrid-au2wnwdkhi4d7y9k.jpg" alt="" />

        <span className='desc'>
        Real Madrid Club de Fútbol (có nghĩa là Câu lạc bộ bóng đá Hoàng gia Madrid), thường được gọi là Real Madrid, là một câu lạc bộ bóng đá chuyên nghiệp của Tây Ban Nha có trụ sở tại Madrid.
        Real Madrid là Câu lạc bộ bóng đá xuất sắc nhất thế kỷ 20 của FIFA thành lập vào ngày 6 tháng 3 năm 1902 với tên gọi Câu lạc bộ bóng đá Madrid, câu lạc bộ có truyền thống mặc bộ trang phục sân nhà màu trắng kể từ khi thành lập. Tước hiệu real trong tiếng Tây Ban Nha có nghĩa là "hoàng gia" được vua Alfonso XIII phong tặng cho câu lạc bộ vào năm 1920 cùng với vương miện hoàng gia trên huy hiệu.
        </span>
        <div className="buttons">
            <button className="play">
                <PlayArrow/>
                <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlined/>
                <span>Info</span>
            </button>
        </div>
    </div>
    
    </div>
  )
}
