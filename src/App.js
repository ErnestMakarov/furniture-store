import React from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"



class App extends React.Component {
  constructor(props)  {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
          {
            id: 1,
            title: 'Chair grey',
            img: 'chair-grey.jpeg',
            desc: 'A comfortable soft chair for kitchen or office.',
            category: 'chairs',
            price: '49.99'
          },
          {
            id: 2,
            title: 'Wooden Table',
            img: 'table.jpg',
            desc: 'A durable dining table made of solid oak.',
            category: 'tables',
            price: '149.00'
          },
          {
            id: 3,
            title: 'Three-Seater Sofa',
            img: 'sofa.jpg',
            desc: 'A cozy sofa for your living room.',
            category: 'sofas',
            price: '399.99'
          },
          {
            id: 4,
            title: 'Leather Armchair',
            img: 'armchair.webp',
            desc: 'An elegant armchair made of genuine leather.',
            category: 'armchairs',
            price: '249.50'
          },
          {
            id: 5,
            title: 'Double Bed',
            img: 'bed.webp',
            desc: 'A spacious double bed with a soft headboard.',
            category: 'beds',
            price: '599.00'
          },
          {
            id: 6,
            title: 'Sliding Wardrobe',
            img: 'wardrobe.jpeg',
            desc: 'A modern sliding wardrobe with a mirror.',
            category: 'wardrobes',
            price: '349.90'
          },
          {
            id: 7,
            title: 'Nightstand',
            img: 'nightstand.webp',
            desc: 'A compact bedside table with two drawers.',
            category: 'nightstands',
            price: '89.99'
          },
          {
            id: 8,
            title: 'Wool Carpet',
            img: 'carpet.jpg',
            desc: 'A warm carpet made of natural wool.',
            category: 'carpets',
            price: '129.99'
          },
          {
            id: 9,
            title: 'Modern Chandelier',
            img: 'chandelier.jpg',
            desc: 'A stylish chandelier with LED lighting.',
            category: 'lighting',
            price: '199.00'
          },
          {
            id: 10,
            title: 'Wooden Dresser',
            img: 'dresser.webp',
            desc: 'A practical wooden dresser with five drawers.',
            category: 'dressers',
            price: '229.99'
          },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render()  {
    return (
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Categories chooseCategory={this.chooseCategory} />
          <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

          {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
          <Footer />
        </div>
    )
  }

  onShowItem(item)  {
    this.setState({fullItem: item})
    this.setState({ showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category)  {
    if(category === "all")  {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item)  {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;
