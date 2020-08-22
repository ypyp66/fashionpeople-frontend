import React, {Component} from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';

class Home extends Component{
  render(){
  const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40vh;
  font-size: 10rem;
  color: yellow;
  background: url('https://lh3.googleusercontent.com/proxy/L0ZsKL-OFcgRr4OND5l0tAvbP-eGYlmxeesn4SNkl_AIN_xAGJZu7ondmRa6ROQ-ur6vbNY5UnLi7pSS2B9zyqKZ-zMAa78hcxECcAZ-mV5ydaQmdlmpdn6q9-ruk0hRnLQlGSRf4Rg');
  background-size: cover;
  justify-content: center;
  align-items: center;
`;
  const Market = styled.div`
    background: url('http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988183457049(0).jpg');
    height: 20rem;
    width: 20rem;
  `;
  const Feedback = styled.div`
    background: url('http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755990788361747(0).jpg');
    height: 20rem;
    width: 20rem;
    
  `;
  const Ranking = styled.div`
    background: url('http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755991405189701(0).jpg');
    height: 20rem;
    width: 20rem;
  `;
    return (
      <div>
          <Container>
              OOTD
          </Container>
          <div style={{margin:"5rem" ,display:"flex", justifyContent:"center"}}>
              <div>
                  <Market ></Market>
                  <div style={{textAlign:"center"}}>
                    <Link to='/market'>마켓</Link>
                  </div>
              </div>
              <div style={{marginRight: "5rem", marginLeft: "5rem"}}>
                  <Feedback></Feedback>
                  <div style={{textAlign:"center"}}>
                     피드백</div>
              </div>
              <div>
                  <Ranking></Ranking>
                  <div style={{textAlign:"center"}}>랭킹</div>
              </div>
          </div>
          
      </div>
    );
  }
}
  
export default Home;