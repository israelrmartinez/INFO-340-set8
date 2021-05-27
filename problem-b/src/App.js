import React, { Component } from 'react';
import _ from 'lodash';

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pets: this.props.pets
		};
	}

	adopt = (name) => {
		this.setState( (currState) => {
			let obj = _.find(currState.pets, ['name', name]);
			obj.adopted = true;
			return obj;
		});
	}

	// (1)
  render() {
	let breedObj = _.groupBy(this.state.pets, 'breed');
	let breeds = Object.keys(breedObj);
	// console.log(breedObj);
	// console.log(this.state.pets);
	return (<div>
			<header className="jumbotron jumbotron-fluid py-4">
			<div className="container">
				<h1>Adopt a Pet</h1>
			</div>
			</header>
		
			<main className="container">
			<div className="row">
				<div id="navs" className="col-3">
					<BreedNav breeds={breeds}></BreedNav>
					<AboutNav></AboutNav>
				</div>
				<div id="petList" className="col-9">
					<PetList pets={this.state.pets} adoptCallback={this.adopt}></PetList>
				</div>
			</div>
			</main>
		
			<footer className="container">
			<small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
			</footer>
		</div>
	  );
  }
}


// (3)
export class AboutNav extends Component {
	render() {
		return (
		  <nav id="aboutLinks">
			<h2>About</h2>
			<ul className="list-unstyled">
			  <li><a href="#/">How to Adopt</a></li>
			  <li><a href="#/">Volunteering</a></li>
			  <li><a href="#/">Events</a></li>
			  <li><a href="#/">Donate</a></li>
			  <li><a href="#/">About Us</a></li>
			</ul>
		  </nav>
		);
	}
}


// (5)
export class BreedNav extends Component {
	render() {
		// console.log(this.props.breeds);
		let breeds = this.props.breeds;
		let arr = breeds.map( (breed) => {
			return <li key={breed}><a href="#/">{breed}</a></li>
		})
		return (
			<nav id="breedLinks">
				<h2>Pick a Breed</h2>
				<ul className="list-unstyled">
					{arr}
				</ul>            
			</nav> 
		);
	}
}


// (6)
export class PetCard extends Component {
	handleClick = () => {
		this.props.adoptCallback(this.props.pet.name);
	}
	
	render() {
		let pet = this.props.pet;
		let displayedName = pet.adopted;
		// console.log(pet.img);
		return (
			<div className="card" onClick={this.handleClick}>
				<img className="card-img-top" src={pet.img} alt={pet.name} />
				<div className="card-body">
					<h3 className="card-title">{pet.name} {displayedName ? '(Adopted)':''}</h3>
					<p className="card-text">{pet.sex} {pet.breed} </p>
				</div>
			</div>
		);
	}
}


// (7)
export class PetList extends Component {
	render() {
		let pets = this.props.pets;
		let arr = pets.map( (pet) => {
			return <PetCard pet={pet} key={pet.name} adoptCallback={this.props.adoptCallback}></PetCard>
		});
		return (
			<div>
				<h2>Dogs for Adoption</h2>
				<div className="card-deck">
					{arr}
				</div>
			</div>
		);
	}
}

export default App;
