import React, { Component } from 'react';

import RestaurantCard from './RestaurantCard';

class Restaurants extends Component {
  constructor() {
    super();

    this.state = {
      restaurants: [],
    };
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
          <h1 id="header">Restaurants</h1>
          <form onSubmit={`/add`}>
            <input id="new-restaurant" type="text"></input>
          </form>
          <button type="button" className="addBtn">
            Add Restaurant
          </button>
        </header>
        <div className="restaurantContainer">{restaurantList}</div>
      </section>
    );
  }
}

export default Restaurants;
