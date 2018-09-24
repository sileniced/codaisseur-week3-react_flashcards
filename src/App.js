import React, {PureComponent} from 'react';

import FlashCards from "./Components/FlashCards/Classes/FlashCards";

import {Intro} from "./Components/Intro";
import {BackToCategories} from "./Components/BackToCategories";
import {Category} from "./Components/Categories/Category";

import {cards} from "./data/cards";

import {shuffle} from "./statics/Statics";

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

  handleBackToCategoriesClick() {
    this.setState({category: null})
  }

  renderFlashCards() {
    return <div className={'FlashCards-Wrapper'}>
      <BackToCategories onClick={() => this.handleBackToCategoriesClick()}/>
      <FlashCards cards={shuffle(this.state.cards.categories[this.state.category].cards)}/>
    </div>;
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
        <header className="Header">
          <h1 className="Title">Cards of the flashing variant</h1>
        </header>
        <Intro title={this.state.category ? this.state.cards.categories[this.state.category].name : 'Don\'t forget to train with flashcards on the daily! DAILY I TELL YOU!'}/>
        {this.state.category ? this.renderFlashCards() : this.renderCategories()}
      </div>
    );
  }
}

export default App;
