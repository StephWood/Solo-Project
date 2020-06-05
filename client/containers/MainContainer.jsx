import React, { Component } from 'react';

import RestaurantCard from './RestaurantCard';

class Restaurants extends Component {
  constructor() {
    super();

    this.state = {
      restaurants: [],
      restaurantName: '',
    };
    this.addRestaurant = this.addRestaurant.bind(this);
    this.inputRestaurant = this.inputRestaurant.bind(this);
  }

  componentDidMount() {
    fetch('/api')
      .then((res) => res.json())
      .then((restaurants) => {
        console.log('restaurants in MainContainer', restaurants);
        return this.setState({
          restaurants,
        });
      })
      .catch((err) =>
        console.log(
          'MainContainer.componentDidMount: get restaurants: ERROR: ',
          err
        )
      );
  }

  addRestaurant() {
    // if (name === '') {
    //   alert('Please enter a restaurant name');
    // }
    console.log('in add restaurant');
    const body = { name: this.state.restaurantName };
    console.log(body);
    fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ restaurants: data });
        console.log(this.state.restaurants);
      });
  }

  inputRestaurant(e) {
    console.log('in inputRestaurant');
    const { value } = e.target;
    this.setState({
      restaurantName: value,
    });
    console.log(this.state.restaurantName);
  }

  render() {
    const restaurants = this.state.restaurants;
    if (!restaurants.length) return <div>Sorry, no restaurants found</div>;
    const restaurantList = restaurants.map((restaurant) => {
      return (
        <RestaurantCard
          key={restaurant._id}
          name={restaurant.name}
          city={restaurant.city}
        />
      );
    });

    return (
      <section className="mainContainer">
        <header className="restaurantBox">
          <h1 id="header">Restaurants to Try</h1>
          <div className="addRest">
            <input
              id="new-restaurant"
              type="text"
              name="name"
              autoComplete="off"
              onChange={this.inputRestaurant}
              value={this.state.restaurantName}
            ></input>
            <button
              type="button"
              className="addBtn"
              onClick={() => {
                this.addRestaurant();
              }}
            >
              Add Restaurant
            </button>
          </div>
        </header>
        <div className="restaurantContainer">{restaurantList}</div>
      </section>
    );
  }
}

export default Restaurants;
