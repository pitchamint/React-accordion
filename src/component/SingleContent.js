import { useState } from "react"
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";

//นำเอา state มาใช้งาน
const SigleContent = ({title,description}) => {
    //สร้าง state ที่ทำการซ่อนข้อมูล
    const [showContent,setShowContent] =useState(false)
    return(
        <article className="content">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={()=>setShowContent(!showContent)}>
                    {/* เช็คค่า showcontent ถ้าเป็นจริง แสดง เครื่องหมายลบ เท็จบวก */}
                    {showContent ? <AiOutlineMinus/>:<AiOutlinePlus/>}
                </button>
                {/* ความหมายคือ เมื่อกดปุ่ม จะให้เปลี่ยนค่าโชว์ออกมาว่าเป็นจริง / true */}
            </header>
            {showContent && <p>{description}</p>}
            {/* ความหมายคือ เมื่อ State show content เป็นจริงจะทำการแสดงเนื้อหาออกมา */}
        </article>
    )
}

export default SigleContent