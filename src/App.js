import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './Components/homepage/Navbar'
import 'materialize-css/dist/css/materialize.min.css';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import RecipesDash from './Components/dashboard/RecipesDash';
import RecipeDetails from './Components/Recipes/RecipeDetails'
import AddRecipe from './Components/SideNav/AddRecipe';
import Profile from './Components/Profile/Profile'
import EditRecipe from './Components/Recipes/EditRecipe';
import EditProfile from './Components/Profile/EditProfile'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/signin' component={SignIn}></Route>
          <Route path='/signup' component={SignUp}></Route>
          <Route path='/recipeDash' component={RecipesDash}></Route>
          <Route path='/recipe/:id' component={RecipeDetails}></Route>
          <Route path='/addRecipe' component={AddRecipe}></Route>
          <Route path='/editRecipe/:id' component={EditRecipe}></Route>
          <Route path='/editProfile' component={EditProfile}></Route>
          <Route path='/profile' component={Profile}></Route>
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
