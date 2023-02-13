import { useState, useEffect } from 'react';
import { TyperWrapper, Keyframes, TyperStarter, DisplayedText, Cursor } from './styles/Typer.styled'

type TyperProps = {
  text?: string;
  typingSpeed?: number;
  cursor?: string;
  typerStarter?: string;
}

function Typer(props: TyperProps) {
  const [text, setText] = useState<string>('');
  const [displayedText, setDisplayedText] = useState<string>('');
  const [typingSpeed] = useState<number>(props.typingSpeed ? props.typingSpeed : 150);
  const [cursor] = useState<string>(props.cursor ? props.cursor : '▌'); 
  const [typerStarter] = useState<string>(props.typerStarter ? props.typerStarter : "> [#EBCB8B]root[/]@[#A3BE8C]localhost[/]:~$ ");

  const tS = props.typerStarter? props.typerStarter : typerStarter;
  const typerStarterSpan = tS.replace(/(\[.*?\])/g, (p1: string) => {
    if (p1.includes('/')) {
      return '</span>';
    } else {
      return `<span style="color: ${p1.replace(/[\[\]]/g, '')}">`;
    }
  });

  useEffect(() => {
    setText(props.text ? props.text : 'Test');
  }, [props.text]);

  useEffect(() => {
    const type = () => {
      if (displayedText.length < text.length) {
        const typingSpeedVariation = Math.random() * (typingSpeed - typingSpeed * 0.3) + typingSpeed * 0.3;
        setTimeout(() => setDisplayedText(prevText => prevText + text[prevText.length]), typingSpeedVariation);
      }
    };
    type();
  }, [text, typingSpeed, displayedText]);

  return (
    <TyperWrapper>
      <Keyframes />
      <TyperStarter dangerouslySetInnerHTML={{ __html: typerStarterSpan }} />
      <DisplayedText>{displayedText}</DisplayedText>
      <Cursor>{cursor}</Cursor>
    </TyperWrapper>
  );
}


export default Typer;