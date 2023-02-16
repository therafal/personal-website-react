import { Wrapper, Title, Text, Link } from "../styles/About.styled";

function About() {
  return (
    <div className="about">
      <Wrapper>
        <Title>about-me</Title>
        <Text>
          hey! i'm Rafał. i'm a software developer from Poland. i mainly work in
          web development. i'm supporting <b>open-source</b> projects and most
          of my work is available on{" "}
          <Link href="https://github.com/TheRafal">github</Link>.
        </Text>
      </Wrapper>
    </div>
  );
}

export default About;
