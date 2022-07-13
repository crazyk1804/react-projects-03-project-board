import React from 'react';
import styled from 'styled-components';
import withDataFetching from "../../WithDataFetching";
import Ticket from "../Ticket/Ticket";

const TicketsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	margin: 5%;
	
	@media(max-width: 768px) {
		flex-direction: column;
	}
`;

const Alert = styled.div`
	text-align: center;
`;

const Tickets = ({ loading, data, error }) => {
	return (
		<TicketsWrapper>
			{(loading || error) && <Alert>(loading ? 'Loading...' : error)</Alert>}
			{data.map(ticket => <Ticket key={ticket.id} ticket={ticket} marginRight/>)}
		</TicketsWrapper>
	);
};

export default withDataFetching(Tickets);