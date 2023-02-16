import {
  Wrapper,
  Title,
  Text,
  Link,
  GoBack,
  Name,
} from "../styles/About.styled";

function About() {
  return (
    <div className="about">
      <Wrapper>
        <Title>about-me</Title>
        <Text>
          hey! my name is <Name>Rafał</Name> and i am a software developer from
          Poland.
        </Text>
        <Text>
          i mainly work in web development. i am supporting <b>open-source</b>{" "}
          projects and most of my work is available on{" "}
          <Link href="https://github.com/TheRafal" target="_blank">
            github
          </Link>
          .
        </Text>
        <Text>
          if you want to contact me, you can do it via{" "}
          <Link
            href="https://discord.com/users/524881001470492692"
            target="_blank"
          >
            discord
          </Link>
          .
        </Text>
        <GoBack href="javascript:window.history.back();">return</GoBack>
      </Wrapper>
    </div>
  );
}

export default About;
