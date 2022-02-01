import { Card } from "react-bootstrap";

function GitHubCard() {
    return (
        <Card>
            <Card.Img variant='top' src="http://placekitten.com/300/200" />
            <Card.Body>
                <Card.Title>Jack Roehrig</Card.Title>
                <Card.Subtitle>Born May 17th, 2001</Card.Subtitle>
                <Card.Text>
                    Hi! My name is Jack, I am from Verona, WI. I played football, hockey, and golf in highschool.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GitHubCard