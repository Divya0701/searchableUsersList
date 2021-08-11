import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {searchInput: '', userDetailsList: initialDetailsList}

  changeState = event => {
    this.setState({searchInput: event.target.value})
  }

  delete = uniqueNo => {
    const {userDetailsList} = this.state
    const filteredList = userDetailsList.filter(
      eachItem => eachItem.uniqueNo !== uniqueNo,
    )

    this.setState({userDetailsList: filteredList})
  }

  render() {
    const {searchInput, userDetailsList} = this.state
    const searchResults = userDetailsList.filter(eachItem =>
      eachItem.name.includes(searchInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input type="search" onChange={this.changeState} value={searchInput} />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.delete}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
