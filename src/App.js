import { useState } from 'react';
import './App.css';
import SigleContent from './component/SingleContent';
import data from './data'

function App() {
  //เอา Array data มากำหนดค่าให้กับ state content
  const [content,setContent] = useState(data)

  return (
    <main>
      <div className="container">
        <h3>เครื่องมือพัฒนาเว็บ</h3>
        <section>
          {/* วนลูป content โดยใช้การ map เพื่อเข้าถึง content แต่ละตัว */}
          {content.map((data)=>{
            return <SigleContent key={data.id} {...data}/> //เรามีข้อมูล 3 อัน ก็ทำการสร้าง siglecontent 3 อัน เกิดจากเราทำการ map
            //เราต้องการส่งข้อมูล state ไปทำงานใน sigle content จึงทำการ props ข้อมูล กำหนด key={data.id} และชื่อ props{...data}
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
