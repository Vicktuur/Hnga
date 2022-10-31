import '../App.css'
import styled from 'styled-components'
import I4G from "../assets/I4G.png"
import Icon from "../assets/Icon.png"
import Vector from "../assets/Vector.png"
import slack from "../assets/slack.png"

const Foot = styled.div`
.connect {
  display: flex;
  justify-content: center;
  padding: 24px 0px;
  gap: 64px;
  margin: 30px 0 70px;
}
hr {
  width: 90%;
  margin: auto;
  margin-bottom: 40px;  
}
.text {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: left;
  color: #667085;
}
.end {
  display: grid;
  gap: 16px;
  margin-left: 5%;
  margin-bottom: 40px;
}
@media (min-width: 768px) {
  .end {
    display: flex;
    justify-content: space-around;
    margin-left: 0;
  }
  hr{
    width: 82%;
  }
 }
`
export default function Footer () {
    return (
      <Foot>
        <div className='connect'>
        <a href='https://hng9.slack.com/Vicktuur'><img src={slack}/></a>
        <a href='https://github.com/Vicktuur'><img src={Icon}/></a>
        </div>
        <hr/>
        <div className='end'>
        <img src={Vector}/>
        <div className='text'>
          HNG Internship 9 Frontend Task</div>
        <img src={I4G}/>
        </div>
      </Foot>
    )
}