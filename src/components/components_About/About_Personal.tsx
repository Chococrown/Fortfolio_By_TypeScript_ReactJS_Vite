import profile from './images/profile.jpeg'

function About_Personal() {
    return <div>

        <h2>เกี่ยวกับ</h2>

        <br/>

        <div>
            <img 
            src = {profile} 
            alt = "Prasert Thunkor" 
            style={{width: '20vw', height: 'auto'}} 
            className = "about__img__profile" /> 
        </div>

        <br/>
            
            <div>สวัสดีครับผมชื่อประเสริฐ ตุ่นก่อ ที่สนใจด้านการพัฒนาเว็บแอปพลิเคชันด้วยเทคโนโลยีสมัยใหม่</div>
            <div>ผมมุ่งมั่นที่จะพัฒนาเว็บแอปพลิเคชันด้วยเทคโนโลยีสมัยใหม่ให้มีความสวยงามและทันสมัย และพร้อมรับโอกาสใหม่ๆ
                ในการพัฒนาทักษะและสร้างผลงานที่มีคุณค่า</div>

        <br />
        <hr />
        <br />        

    </div>
}

export default About_Personal ;