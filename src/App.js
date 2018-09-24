import React, {PureComponent} from 'react';

import FlashCards from "./Components/FlashCards/Classes/FlashCards";

import {Header} from "./Components/Header";
import {Intro} from "./Components/Intro";
import {Category} from "./Components/Categories/Category";

import {cards} from "./data/cards";

import './App.css';

class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      category: null,
      cards
    }
  }

  handleCategoryClick(category) {
    this.setState({category});
  }

  renderFlashCards() {
    return <FlashCards cards={this.state.cards.categories[this.state.category].cards}/>;
  }

  renderCategories() {
    return <div className={'Categories'}>
      {this.state.cards.categories.map((category, index) =>
        <Category
          key={index}
          onClick={() => this.handleCategoryClick("" + index)}
          category={category.name}
        />
      )}
    </div>
  };

  render() {
    return (
      <div className="App">
        <Header title={this.state.category ? this.state.cards.categories[this.state.category].name : 'Cards of the flashing variant'}/>
        <Intro/>
        {this.state.category ? this.renderFlashCards() : this.renderCategories()}
      </div>
    );
  }
}

export default App;
