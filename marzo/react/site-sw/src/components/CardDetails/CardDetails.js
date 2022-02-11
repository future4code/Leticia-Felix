import { CardContainer, Nome, Subtitulo, Props, Section, Box } from './styles';




function CardDetails (props) {
  
  return (
    <CardContainer>
      <Nome>{props.name}</Nome>
      <Box>
        <Section>
          <Props>{props.planet}</Props>
          <Subtitulo>planet</Subtitulo>
        </Section>
        <Section>
          <Props>{props.gender}</Props>
          <Subtitulo>Gender</Subtitulo>
        </Section>
        <Section>
          <Props>{props.birthyear}</Props>
          <Subtitulo>Birth year</Subtitulo>
        </Section>
      </Box>
    </CardContainer>
  )
}

export default CardDetails;