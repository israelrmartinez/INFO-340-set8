import React, { Component } from 'react'; //import React library

// (7)

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' },
  { id: 'c000141', name: 'Benjamin L. Cardin', state: 'MD', party: 'Democrat', phone: '202-224-4524', twitter: 'SenatorCardin' }
];

/* Your code goes here */
// (1)
export class App extends Component {
	
	render() {
		return (<div className="container">
					<h1>US Senators (Oct 2020)</h1>
					<SenatorTable senators={this.senators}></SenatorTable>
				</div>
		);
	}
}


// (3)
export class SenatorTable extends Component {
	
	render() {
		let arr = EXAMPLE_SENATORS.map( (senatorObj) => {
			return <SenatorRow key={senatorObj.id} senator={senatorObj}/>
		})
		return (<table className="table table-bordered">
			<TableHeader columnNames={HEADERS} />
			<tbody>
				{arr};
			</tbody>
		</table>);
	}
}


// (4)
const HEADERS = ['Name', 'State', 'Phone', 'Twitter'];

export class TableHeader extends Component {
	render() {
		let head = this.props.columnNames.map( (col) => {
			return <th key={col}>{col}</th>;
		});
		return (
			<thead>
				<tr>
					{head}
				</tr>
			</thead>
		);
	}
}


// (5) & (6)
export class SenatorRow extends Component {
	render () {
		let name = this.props.senator.name;
		let party = this.props.senator.party;
		party = party.charAt(0);
		let state = `${party} - ${this.props.senator.state}`;
		let phone = this.props.senator.phone;
		let tel = `tel:${phone}`;
		let username = this.props.senator.twitter;
		let twitter = `https://twitter.com/${username}`;
		return (
			<tr>
				<td>{name}</td>
				<td>{state}</td>
				<td><a href={tel}>{phone}</a></td>
				<td><a href={twitter}>@{username}</a></td>
			</tr>
		);
	}
}

export default App;