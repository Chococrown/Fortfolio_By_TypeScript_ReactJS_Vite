import stou from './images/stou.png'

function About_Education() {
    return <div>

        <h2>🎓  การศึกษา</h2>

        <br/>

        <div>   
            <img 
            src={stou} 
            alt="STOU Univercity" 
            style={{width: '50vw', height: 'auto'}} />
        </div>

        <br/>
           
            <div>ปริญญาตรี วิทยาการคอมพิวเตอร์ มหาวิทยาลัยสุโขทัยธรรมาธิราช 2567</div>
            <div>ปริญญาตรี วิทยาการจัดการ (การตลาด) มหาวิทยาลัยสุโขทัยธรรมาธิราช 2564</div>

        <br />
        <hr />
        <br />      

    </div>
}

export default About_Education ;