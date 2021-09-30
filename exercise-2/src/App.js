import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

class App extends React.Component {
  constructor( props )
  {
    super( props );

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
  }

  addSomeThing = (stuffDescription, quantity) => {
    return() => {
      const searchResult = this.state.items.findIndex((element, value, array) => {
        if( element.value == stuffDescription ) {
          return true;
        }
        else {
          return false;
        }
      });
      if(searchResult != -1) {
        let newItems = [...this.state.items];
        newItems[searchResult].qty += quantity;
        this.setState({ items: newItems });
      } else {
        this.setState({
          items:
          [...this.state.items, {id: this.state.items.length + 1, value: stuffDescription, qty: quantity}]
        })
      }
    }
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ this.addSomeThing('Carrot', Math.floor(Math.random()*(10-1))) }>Carrot</button>
      <button onClick={ this.addSomeThing('Berry', Math.floor(Math.random()*(10-1))) }>Berry</button>
      <button onClick={ this.addSomeThing('Yogurt', Math.floor(Math.random()*(10-1))) }>Yogurt</button>
      <button onClick={ this.addSomeThing('Beer', Math.floor(Math.random()*(10-1))) }>Beer</button>
    </div>
  }
}

export default App;