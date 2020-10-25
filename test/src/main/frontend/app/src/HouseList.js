import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';

class HouseList extends Component {

    constructor(props) {
        super(props);
        this.state = {houses: [], isLoading: true};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('house/type')
            .then(response => response.json())
    .then(data => this.setState({houses: data, isLoading: false}));
    }

    async remove(id) {
        await fetch(`/api/group/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedGroups = [...this.state.houses].filter(i => i.id !== id);
        this.setState({houses: updatedGroups});
    });
    }

    render() {
        const {houses, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const groupList = houses.map(house => {
            const address = `${house.rooms || ''} ${house.zipcode || ''} ${house.condo || ''}`;
        return <tr key={house.id}>
            <td style={{whiteSpace: 'nowrap'}}>{house.name}</td>
        <td>{address}</td>
        <td>{house.events.map(event => {
                return <div key={event.id}>{new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(event.date))}: {event.title}</div>
    })}</td>
        </tr>
    });

        return (
            <div>
            <AppNavbar/>
            <Container fluid>
        <div className="float-right">
            <Button color="success" tag={Link} to="/groups/new">Add Housee</Button>
        </div>
        <h3>House Rentals</h3>
        <Table className="mt-4">
            <thead>
            <tr>
            <th width="20%">Room</th>
            <th width="20%">Zipcode</th>
            <th>Events</th>
            <th width="10%">Condo</th>
            </tr>
            </thead>
            <tbody>
            {groupList}
            </tbody>
            </Table>
            </Container>
            </div>
    );
    }
}

export default HouseList;