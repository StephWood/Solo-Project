import React, { Component } from 'react';

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
    const { restaurantList } = this.state,
    if (!restaurantList.length) return (
      <div>Sorry, no restaurants found</div>
    );
    const restaurants = restaurantList.map((restaurant) => {
      return (
        <RestaurantCard key={restaurant._id} name={restaurant.name} />
      )
    });

    return (
      <section className="mainContainer">
        <header className="restaurantBox">
          <h1 id="header">Restaurants</h1>
            {/* Not sure how to add these functions to the input/button */}
          <form onSubmit={addRestaurant}> 
            <input id="new-restaurant" value={newRestaurant} />
          </form> 
          <Link to={`/add`}>
            <button type="button" className="addBtn">Add Restaurant</button>
          </Link>
        </header>
          <div className="restaurantContainer">{restaurantList}</div>
      </section>
      );
  }
};

export default MainContainer;
