import React, {PureComponent} from 'react';
import './App.css';
import {Header} from "./Components/Header";
import {Intro} from "./Components/Intro";
import {Category} from "./Components/Category";
import {cards} from "./data/cards";

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

  flashCard = <FlashCard />;

  categories = <div className={'Categories'}>
    {this.state.cards.categories.map((category, index) =>
      <Category
        key={index}
        onClick={() => this.handleCategoryClick(category.name)}
        category={category.name}
      />
    )}
  </div>;

  render() {
    return (
      <div className="App">
        <Header/>
        <Intro/>
        {this.state.category ? this.flashCard : this.categories}
      </div>
    );
  }
}

export default App;
