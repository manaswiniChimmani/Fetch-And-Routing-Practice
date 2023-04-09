import UserInfo from '../UserInfo'

import BlogList from '../BlogList'

import './index.css'

const Home = () => (
  //   <div className="home-container">Render UserInfo and BlogList</div>
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
