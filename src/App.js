import { useState } from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

//////////// dark mode

const lightTheme = {
  type: "light",

  color: "palevioletred",
  color2: "white",
  description: "white",
  article: "white",
  Background: "#282c35",
  ico: "left",
  toggle:"black",
};

const darkTheme = {
  type: "dark",
  color: "#ffa7c4",
  color2: "black",
  Background: "white",
  ico: "right",
  toggle:"black",
};


const Button = styled.button`
 
  background-color: ${({ theme }) => theme.toggle};
  width:45px;
  padding: 0 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  text-align: ${({ theme }) => theme.ico};
`;
///////////////////////// 

const Main = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
  background-color: ${(props) => props.theme.Background};
  
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
  
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.625rem;
`;
const Wrapper = styled.div`
  display: block;
`;

const PresentationWrapper  = styled.div`
display: block;
`;

const Presentation = styled.div`
  display: flex;
  
  margin-bottom: 3.5rem;
  max-width: 310px;
  align-items: center;
  font-family: 'Merriweather', serif;
`;
const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  
`;
const Description = styled.p`
 color: ${({ theme }) => theme.color2};
  width: 100%;
  font-family: Montserrat, sans-serif;
  font-size: 15px;
  padding-left: 20px;
  
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.color2};
  font-weight: bold;
  font-size: 30px;
  padding:0;
  text-align: left;
`;


const Title2 = styled.h1`
  color: ${({ theme }) => theme.color};
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 30px;
`;
const Article = styled.h2`
 color: ${({ theme }) => theme.color2};
  width: 100%;
  font-family: Montserrat, sans-serif;
  font-size: 15px;
  text-align: left;
`;

const Data = styled.h6`
  color: ${({ theme }) => theme.color2};
  font-weight: bold;
  font-size: 10px;
  text-align: left;
`;

function App() {
  const [theme, setTheme] = useState("☀️");
  const themeToggler = () => {
    theme === "☀️" ? setTheme("🌙") : setTheme("☀️");
  };

  return (
    <ThemeProvider theme={theme === "☀️" ?  darkTheme : lightTheme}>

    <Main>
       <Container>

       <Header>
       <Title>Overreacted</Title>
       <Button onClick={themeToggler}>{theme}</Button>
       </Header>

      <PresentationWrapper>
      <Presentation>
        <ProfileImage src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"/>
        <Description>Personal blog by Dan Abramov. I explain with words and code.</Description>
      </Presentation>
      </PresentationWrapper>
      <Wrapper>

       <Title2>npm audit: Broken by Design</Title2>
       <Data>July 7, 2021 • ☕️☕️☕️ 14 min read</Data>
       <Article>Found 99 vulnerabilities (84 moderately irrelevant, 15 highly irrelevant)</Article>
           
       <Title2>Before You memo()</Title2>
       <Data>February 23, 2021 • ☕️ 5 min read</Data>
       <Article>Rendering optimizations that come naturally.</Article>

       <Title2>The WET Codebase</Title2>
       <Data>July 13, 2020 • ☕️ 1 min read</Data>
       <Article>Come waste your time with me.</Article>

       <Title2>Goodbye, Clean Code</Title2>
       <Data>January 11, 2020 • ☕️ 5 min read</Data>
       <Article>Let clean code guide you. Then let it go.</Article>

       <Title2>My Decade in Review</Title2>
       <Data>January 1, 2020 • ☕️☕️☕️☕️☕️ 26 min read</Data>
       <Article>A personal reflection.</Article>  
       
       <Title2>What Are the React Team Principles?</Title2>
       <Data>December 25, 2019 • ☕️ 5 min read</Data>
       <Article>UI Before API.</Article>

      </Wrapper>

    </Container>
    </Main>
    </ThemeProvider>
  );
}

export default App;