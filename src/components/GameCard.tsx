import { Col, Container, Row } from 'react-bootstrap';

function GameCard(props: any) {

    const {color} = props;

    const gameList = [
        {
            id: "001",
            name: "Super",
            description: "dsdadasd",
            img: "XXX"
        },
        {
            id: "002",
            name: "Super 1",
            description: "dsdadasddddddd",
            img: "XXX"
        },
        {
            id: "003",
            name: "Super 2",
            description: "dsdadasdxxxxx",
            img: "XXX"
        }
    ]

  return (
    <Container className={'card-content ' + color }>
        {gameList.map(game => {
            return (
                <Row>
                    <Col>{game.id}</Col>
                    <Col>{game.name}</Col>
                    <Col>{game.description}</Col>
                </Row>
            )
        })}
    </Container>
  );
}

export default GameCard;

